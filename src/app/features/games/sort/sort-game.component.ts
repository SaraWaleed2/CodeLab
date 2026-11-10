import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, computed, inject, input, signal } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { TranslatePipe } from '@ngx-translate/core';
import { Lesson, Localized, SortRound } from '@core/models';
import { BitoService, LanguageService, ProgressService } from '@core/services';
import { ConfettiComponent } from '@shared/ui/confetti/confetti.component';

/**
 * Sort game: one item at a time; drag it onto a box, or tap a box.
 * Rounds and right answers come from the book.
 */
@Component({
  selector: 'app-sort-game',
  imports: [CdkDrag, CdkDropList, CdkDropListGroup, TranslatePipe, ConfettiComponent],
  templateUrl: './sort-game.component.html',
  styleUrl: './sort-game.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortGameComponent implements OnInit {
  readonly lesson = input.required<Lesson>();

  protected readonly language = inject(LanguageService);
  private readonly bito = inject(BitoService);
  private readonly progress = inject(ProgressService);

  protected readonly rounds = computed<readonly SortRound[]>(() => {
    const game = this.lesson().game;
    return game?.kind === 'sort' ? game.rounds : [];
  });
  protected readonly roundIndex = signal(0);
  protected readonly itemIndex = signal(0);
  /** Items already placed, per box id. */
  protected readonly placed = signal<Record<string, Localized[]>>({});
  protected readonly wrongBin = signal<string | null>(null);
  protected readonly mistakes = signal(0);
  protected readonly roundDone = signal(false);
  protected readonly finished = signal(false);
  protected readonly burst = signal(0);
  private rewarded = new Set<number>();

  protected readonly round = computed(() => this.rounds()[this.roundIndex()]);
  protected readonly item = computed(() => this.round()?.items[this.itemIndex()]);
  protected readonly left = computed(() => (this.round()?.items.length ?? 0) - this.itemIndex());

  constructor() {
    inject(BitoService).onPoke(() => this.hint(), inject(DestroyRef));
  }

  ngOnInit(): void {
    this.bito.say('bito.sort.hello', { round: this.language.pick(this.round().title) });
  }

  onDrop(event: CdkDragDrop<string>): void {
    if (event.container.data !== 'source') this.choose(event.container.data);
  }

  choose(binId: string): void {
    const item = this.item();
    if (!item || this.roundDone()) return;
    const bin = this.round().bins.find((b) => b.id === binId)!;
    if (item.bin !== binId) {
      this.mistakes.update((m) => m + 1);
      this.wrongBin.set(binId);
      setTimeout(() => this.wrongBin.set(null), 450);
      this.bito.say('bito.sort.wrong', { item: this.language.pick(item.text), bin: this.language.pick(bin.label) });
      return;
    }
    this.placed.update((p) => ({ ...p, [binId]: [...(p[binId] ?? []), item.text] }));
    const next = this.itemIndex() + 1;
    if (next < this.round().items.length) {
      this.itemIndex.set(next);
      this.bito.say('bito.sort.right', { item: this.language.pick(item.text), bin: this.language.pick(bin.label) }, true);
      return;
    }
    this.itemIndex.set(next);
    this.roundDone.set(true);
    this.burst.update((n) => n + 1);
    if (!this.rewarded.has(this.roundIndex())) {
      this.rewarded.add(this.roundIndex());
      this.progress.addPoints(10);
    }
    this.bito.say('bito.sort.roundDone', { mistakes: this.mistakes() }, true);
  }

  nextRound(): void {
    const next = this.roundIndex() + 1;
    this.resetRoundState();
    if (next >= this.rounds().length) {
      this.finished.set(true);
      this.progress.markLesson(this.lesson().unitId, this.lesson().id, 'game');
      this.bito.say('bito.sort.finished', undefined, true);
      return;
    }
    this.roundIndex.set(next);
    this.bito.say('bito.sort.nextRound', { round: this.language.pick(this.round().title) });
  }

  restart(): void {
    this.roundIndex.set(0);
    this.resetRoundState();
    this.finished.set(false);
    this.bito.say('bito.sort.hello', { round: this.language.pick(this.round().title) });
  }

  /** Bito names the right box for the current item. */
  hint(): void {
    const item = this.item();
    if (!item) {
      this.bito.say('bito.sort.noItem');
      return;
    }
    const bin = this.round().bins.find((b) => b.id === item.bin)!;
    this.bito.say('bito.sort.hint', { item: this.language.pick(item.text), bin: this.language.pick(bin.label) });
  }

  private resetRoundState(): void {
    this.itemIndex.set(0);
    this.placed.set({});
    this.mistakes.set(0);
    this.roundDone.set(false);
  }
}
