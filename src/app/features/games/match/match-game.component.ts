import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, computed, inject, input, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Lesson, MatchRound } from '@core/models';
import { BitoService, LanguageService, ProgressService } from '@core/services';
import { CcIconComponent } from '@shared/ui/cc-icon/cc-icon.component';
import { ConfettiComponent } from '@shared/ui/confetti/confetti.component';
import { shuffledOrder } from '../shuffle';

/**
 * Match game: tap a card on one side, then its meaning on the other.
 * Rounds and right answers come from the book.
 */
@Component({
  selector: 'app-match-game',
  imports: [TranslatePipe, CcIconComponent, ConfettiComponent],
  templateUrl: './match-game.component.html',
  styleUrl: './match-game.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchGameComponent implements OnInit {
  readonly lesson = input.required<Lesson>();

  protected readonly language = inject(LanguageService);
  private readonly bito = inject(BitoService);
  private readonly progress = inject(ProgressService);

  protected readonly rounds = computed<readonly MatchRound[]>(() => {
    const game = this.lesson().game;
    return game?.kind === 'match' ? game.rounds : [];
  });
  protected readonly roundIndex = signal(0);
  /** Index (in the round's pairs) of the left card the student picked, if any. */
  protected readonly selected = signal<number | null>(null);
  protected readonly matched = signal<ReadonlySet<number>>(new Set());
  protected readonly wrongRight = signal<number | null>(null);
  protected readonly mistakes = signal(0);
  protected readonly finished = signal(false);
  protected readonly burst = signal(0);
  private rewarded = new Set<number>();

  protected readonly round = computed(() => this.rounds()[this.roundIndex()]);
  /** The right-hand cards, in a fixed shuffled order so they never sit next to their partner by default. */
  protected readonly rightOrder = computed(() => shuffledOrder(this.round().pairs.length, this.roundIndex() + 1));
  protected readonly roundDone = computed(() => this.matched().size === this.round().pairs.length);
  protected readonly left = computed(() => this.round().pairs.length - this.matched().size);

  constructor() {
    inject(BitoService).onPoke(() => this.hint(), inject(DestroyRef));
  }

  ngOnInit(): void {
    this.bito.say('bito.match.hello', { round: this.language.pick(this.round().title) });
  }

  pickLeft(i: number): void {
    if (this.matched().has(i) || this.roundDone()) return;
    this.selected.set(this.selected() === i ? null : i);
  }

  pickRight(i: number): void {
    const sel = this.selected();
    if (this.matched().has(i) || this.roundDone()) return;
    if (sel === null) {
      this.bito.say('bito.match.pickFirst');
      return;
    }
    if (sel === i) {
      this.matched.update((m) => new Set(m).add(i));
      this.selected.set(null);
      if (this.roundDone()) this.completeRound();
      else this.bito.say('bito.match.right', undefined, true);
      return;
    }
    this.mistakes.update((m) => m + 1);
    this.wrongRight.set(i);
    setTimeout(() => this.wrongRight.set(null), 450);
    this.bito.say('bito.match.wrong');
  }

  nextRound(): void {
    const next = this.roundIndex() + 1;
    this.resetRound();
    if (next >= this.rounds().length) {
      this.finished.set(true);
      this.progress.markLesson(this.lesson().unitId, this.lesson().id, 'game');
      this.bito.say('bito.match.finished', undefined, true);
      return;
    }
    this.roundIndex.set(next);
    this.bito.say('bito.match.nextRound', { round: this.language.pick(this.round().title) });
  }

  restart(): void {
    this.roundIndex.set(0);
    this.resetRound();
    this.finished.set(false);
    this.bito.say('bito.match.hello', { round: this.language.pick(this.round().title) });
  }

  /** Bito points at the matching card: the picked one's partner, or the first card still waiting. */
  hint(): void {
    if (this.finished() || this.roundDone()) {
      this.bito.say('bito.match.noItem');
      return;
    }
    const sel = this.selected();
    const i = sel ?? this.round().pairs.findIndex((_, k) => !this.matched().has(k));
    const pair = this.round().pairs[i];
    if (pair.left.cc) this.bito.say('bito.match.hintCc', { code: pair.left.cc, answer: this.language.pick(pair.right) });
    else this.bito.say('bito.match.hint', { card: this.language.pick(pair.left.text!), answer: this.language.pick(pair.right) });
    this.selected.set(i);
  }

  private completeRound(): void {
    this.burst.update((n) => n + 1);
    if (!this.rewarded.has(this.roundIndex())) {
      this.rewarded.add(this.roundIndex());
      this.progress.addPoints(10);
    }
    this.bito.say('bito.match.roundDone', { mistakes: this.mistakes() }, true);
  }

  private resetRound(): void {
    this.selected.set(null);
    this.matched.set(new Set());
    this.mistakes.set(0);
  }
}
