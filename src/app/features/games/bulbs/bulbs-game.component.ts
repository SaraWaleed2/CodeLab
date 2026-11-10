import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  computed,
  inject,
  input,
  linkedSignal,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Lesson } from '@core/models';
import { BitoService, LanguageService, ProgressService } from '@core/services';
import { BulbComponent } from '@shared/ui/bulb/bulb.component';
import { ConfettiComponent } from '@shared/ui/confetti/confetti.component';

const VALUES = [128, 64, 32, 16, 8, 4, 2, 1] as const;
const OFF = (): boolean[] => VALUES.map(() => false);

/** Build each target number (from the book's exercises) by switching bulbs on. Bito gives the exact next step. */
@Component({
  selector: 'app-bulbs-game',
  imports: [RouterLink, TranslatePipe, BulbComponent, ConfettiComponent],
  templateUrl: './bulbs-game.component.html',
  styleUrl: './bulbs-game.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulbsGameComponent implements OnInit {
  readonly lesson = input.required<Lesson>();

  protected readonly language = inject(LanguageService);
  private readonly bito = inject(BitoService);
  private readonly progress = inject(ProgressService);

  protected readonly values = VALUES;
  protected readonly targets = computed(() => {
    const game = this.lesson().game;
    return game?.kind === 'bulbs' ? game.targets : [];
  });
  protected readonly index = signal(0);
  protected readonly bits = signal<boolean[]>(OFF());
  /** One slot per target: true = solved, false = tried and wrong, null = not tried. */
  protected readonly results = linkedSignal<(boolean | null)[]>(() => this.targets().map(() => null));
  protected readonly streak = signal(0);
  protected readonly feedback = signal<'ok' | 'no' | null>(null);
  protected readonly hintIndex = signal(-1);
  protected readonly finished = signal(false);
  protected readonly burst = signal(0);

  protected readonly target = computed(() => this.targets()[this.index()]);
  protected readonly sum = computed(() => VALUES.reduce((t, v, i) => t + (this.bits()[i] ? v : 0), 0));
  protected readonly binary = computed(() => this.bits().map((b) => (b ? 1 : 0)).join(''));
  protected readonly hex = computed(() => this.sum().toString(16).toUpperCase().padStart(2, '0'));
  protected readonly rightCount = computed(() => this.results().filter((r) => r === true).length);

  constructor() {
    this.bito.onPoke(() => this.askBito(), inject(DestroyRef));
  }

  ngOnInit(): void {
    this.bito.say('bito.game.hello', { target: this.target()?.n });
  }

  toggle(i: number): void {
    this.bits.update((bits) => bits.map((b, k) => (k === i ? !b : b)));
    this.feedback.set(null);
    this.hintIndex.set(-1);
    const target = this.target().n;
    const sum = this.sum();
    if (sum === target) this.bito.say('bito.game.exact', { target });
    else if (sum > target) this.bito.say('bito.game.over', { sum, target, extra: sum - target });
    else this.bito.say(this.bits()[i] ? 'bito.game.on' : 'bito.game.off', { v: VALUES[i], sum, target });
  }

  check(): void {
    const target = this.target().n;
    const i = this.index();
    if (this.sum() === target) {
      const first = this.results()[i] !== true;
      this.results.update((r) => r.map((x, k) => (k === i ? true : x)));
      this.streak.update((s) => s + 1);
      this.feedback.set('ok');
      this.burst.update((n) => n + 1);
      if (first) this.progress.addPoints(10);
      const parts = VALUES.filter((_, k) => this.bits()[k]).join(' + ');
      if (!first) this.bito.say('bito.game.rightAgain', undefined, true);
      else if (this.streak() >= 2) this.bito.say('bito.game.streak', { streak: this.streak() }, true);
      else this.bito.say('bito.game.right', { target, parts }, true);
    } else {
      this.results.update((r) => r.map((x, k) => (k === i && x !== true ? false : x)));
      this.streak.set(0);
      this.feedback.set('no');
      this.bito.say('bito.game.wrong', { sum: this.sum(), target });
    }
  }

  next(): void {
    const n = this.index() + 1;
    this.feedback.set(null);
    this.hintIndex.set(-1);
    if (n >= this.targets().length) {
      this.finished.set(true);
      this.progress.markLesson(this.lesson().unitId, this.lesson().id, 'game');
      this.bito.say('bito.game.finished', undefined, true);
      return;
    }
    this.index.set(n);
    this.bits.set(OFF());
    this.bito.say('bito.game.next', { target: this.target().n });
  }

  /** Bito names the exact next step: the biggest bulb that is wrong, on or off. */
  askBito(): void {
    if (this.finished()) {
      this.bito.say('bito.game.finished', undefined, true);
      return;
    }
    const target = this.target().n;
    const wrong = VALUES.findIndex((v, i) => Boolean(target & v) !== this.bits()[i]);
    if (wrong === -1) {
      this.hintIndex.set(-1);
      this.bito.say('bito.game.hintDone', undefined, true);
      return;
    }
    this.hintIndex.set(wrong);
    this.bito.say(this.bits()[wrong] ? 'bito.game.hintOff' : 'bito.game.hintOn', { v: VALUES[wrong] });
  }

  restart(): void {
    this.index.set(0);
    this.bits.set(OFF());
    this.results.set(this.targets().map(() => null));
    this.streak.set(0);
    this.feedback.set(null);
    this.finished.set(false);
    this.bito.say('bito.game.restart', { target: this.target().n });
  }
}
