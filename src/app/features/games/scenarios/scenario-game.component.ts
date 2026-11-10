import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, computed, inject, input, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Lesson, Scenario } from '@core/models';
import { BitoService, LanguageService, ProgressService } from '@core/services';
import { ConfettiComponent } from '@shared/ui/confetti/confetti.component';

/** "What would you do?": for each situation from the book, decide if the action is right or wrong. */
@Component({
  selector: 'app-scenario-game',
  imports: [TranslatePipe, ConfettiComponent],
  templateUrl: './scenario-game.component.html',
  styleUrl: './scenario-game.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScenarioGameComponent implements OnInit {
  readonly lesson = input.required<Lesson>();

  protected readonly language = inject(LanguageService);
  private readonly bito = inject(BitoService);
  private readonly progress = inject(ProgressService);

  protected readonly items = computed<readonly Scenario[]>(() => {
    const game = this.lesson().game;
    return game?.kind === 'scenarios' ? game.items : [];
  });
  protected readonly index = signal(0);
  /** The student's pick for the current situation (null = not answered yet). */
  protected readonly picked = signal<boolean | null>(null);
  protected readonly results = signal<boolean[]>([]);
  protected readonly finished = signal(false);
  protected readonly burst = signal(0);

  protected readonly item = computed(() => this.items()[this.index()]);
  protected readonly correct = computed(() => this.picked() !== null && this.picked() === this.item().ok);
  protected readonly score = computed(() => this.results().filter(Boolean).length);

  constructor() {
    inject(BitoService).onPoke(() => this.hint(), inject(DestroyRef));
  }

  ngOnInit(): void {
    this.bito.say('bito.scenario.hello', { count: this.items().length });
  }

  answer(ok: boolean): void {
    if (this.picked() !== null) return;
    this.picked.set(ok);
    const right = ok === this.item().ok;
    this.results.update((r) => [...r, right]);
    if (right) this.bito.say('bito.scenario.right', undefined, true);
    else this.bito.say('bito.scenario.wrong');
  }

  next(): void {
    const n = this.index() + 1;
    this.picked.set(null);
    if (n >= this.items().length) {
      this.finished.set(true);
      this.burst.update((b) => b + 1);
      this.progress.markLesson(this.lesson().unitId, this.lesson().id, 'game');
      this.progress.addPoints(this.score() * 2);
      this.bito.say('bito.scenario.finished', { score: this.score(), total: this.items().length }, true);
      return;
    }
    this.index.set(n);
    this.bito.say('bito.scenario.next');
  }

  restart(): void {
    this.index.set(0);
    this.picked.set(null);
    this.results.set([]);
    this.finished.set(false);
    this.bito.say('bito.scenario.hello', { count: this.items().length });
  }

  /** Bito nudges without giving the answer away. */
  hint(): void {
    if (this.finished() || this.picked() !== null) this.bito.say('bito.scenario.pokeAfter');
    else this.bito.say('bito.scenario.hint');
  }
}
