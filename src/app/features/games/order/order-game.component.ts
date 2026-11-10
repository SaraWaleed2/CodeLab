import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, computed, inject, input, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Lesson, OrderRound } from '@core/models';
import { BitoService, LanguageService, ProgressService } from '@core/services';
import { ConfettiComponent } from '@shared/ui/confetti/confetti.component';
import { shuffledOrder } from '../shuffle';

/**
 * Order game: the steps of a process appear shuffled; tap them in the right order.
 * A wrong tap shakes and Bito says which step is next only when asked.
 */
@Component({
  selector: 'app-order-game',
  imports: [TranslatePipe, ConfettiComponent],
  templateUrl: './order-game.component.html',
  styleUrl: './order-game.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderGameComponent implements OnInit {
  readonly lesson = input.required<Lesson>();

  protected readonly language = inject(LanguageService);
  private readonly bito = inject(BitoService);
  private readonly progress = inject(ProgressService);

  protected readonly rounds = computed<readonly OrderRound[]>(() => {
    const game = this.lesson().game;
    return game?.kind === 'order' ? game.rounds : [];
  });
  protected readonly roundIndex = signal(0);
  /** How many steps are already in the right place (they are steps 0 … placed-1). */
  protected readonly placed = signal(0);
  protected readonly wrongStep = signal<number | null>(null);
  protected readonly mistakes = signal(0);
  protected readonly finished = signal(false);
  protected readonly burst = signal(0);
  private rewarded = new Set<number>();

  protected readonly round = computed(() => this.rounds()[this.roundIndex()]);
  /** Step indexes in the shuffled order they are shown in. */
  protected readonly shuffled = computed(() => shuffledOrder(this.round().steps.length, this.roundIndex() + 3));
  protected readonly done = computed(() => this.placed() === this.round().steps.length);
  protected readonly timeline = computed(() => this.round().steps.slice(0, this.placed()));
  protected readonly pool = computed(() => this.shuffled().filter((i) => i >= this.placed()));

  constructor() {
    inject(BitoService).onPoke(() => this.hint(), inject(DestroyRef));
  }

  ngOnInit(): void {
    this.bito.say('bito.order.hello', { round: this.language.pick(this.round().title) });
  }

  pick(step: number): void {
    if (this.done()) return;
    if (step !== this.placed()) {
      this.mistakes.update((m) => m + 1);
      this.wrongStep.set(step);
      setTimeout(() => this.wrongStep.set(null), 450);
      this.bito.say('bito.order.wrong');
      return;
    }
    this.placed.update((p) => p + 1);
    if (this.done()) {
      this.burst.update((n) => n + 1);
      if (!this.rewarded.has(this.roundIndex())) {
        this.rewarded.add(this.roundIndex());
        this.progress.addPoints(10);
      }
      this.bito.say('bito.order.roundDone', { mistakes: this.mistakes() }, true);
    } else {
      this.bito.say('bito.order.right', { n: this.placed() }, true);
    }
  }

  nextRound(): void {
    const next = this.roundIndex() + 1;
    this.placed.set(0);
    this.mistakes.set(0);
    if (next >= this.rounds().length) {
      this.finished.set(true);
      this.progress.markLesson(this.lesson().unitId, this.lesson().id, 'game');
      this.bito.say('bito.order.finished', undefined, true);
      return;
    }
    this.roundIndex.set(next);
    this.bito.say('bito.order.nextRound', { round: this.language.pick(this.round().title) });
  }

  restart(): void {
    this.roundIndex.set(0);
    this.placed.set(0);
    this.mistakes.set(0);
    this.finished.set(false);
    this.bito.say('bito.order.hello', { round: this.language.pick(this.round().title) });
  }

  /** Bito says which step comes next. */
  hint(): void {
    if (this.finished() || this.done()) {
      this.bito.say('bito.order.noItem');
      return;
    }
    this.bito.say('bito.order.hint', { n: this.placed() + 1, step: this.language.pick(this.round().steps[this.placed()]) });
  }
}
