import { ChangeDetectionStrategy, Component, OnDestroy, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Lesson } from '@core/models';
import { LanguageService, ProgressService, SpeechService } from '@core/services';
import { BitoComponent } from '@shared/ui/bito/bito.component';
import { UNITS } from '@content/units';
import { BookBlockComponent } from './blocks/book-block/book-block.component';

/** A one-off line from Bito in reply to what the student just did (overrides the page's explanation). */
type Reaction = 'right' | 'wrong' | 'poke' | 'bitOn' | 'bitOff';

const FLIP_MS = 820;

/**
 * The explainer book: pages turn in 3D (right-to-left in Arabic, left-to-right in English),
 * by the buttons, the folded corner, the dots or the arrow keys. Bito sits at the bottom of the page.
 */
@Component({
  selector: 'app-book',
  imports: [RouterLink, TranslatePipe, BitoComponent, BookBlockComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnDestroy {
  readonly lesson = input.required<Lesson>();

  protected readonly language = inject(LanguageService);
  private readonly progress = inject(ProgressService);
  private readonly speech = inject(SpeechService);
  private readonly translate = inject(TranslateService);

  protected readonly current = signal(0);
  protected readonly seen = signal(new Set<number>([0]));
  protected readonly flipping = signal(false);
  protected readonly alt = signal(false);
  protected readonly reaction = signal<Reaction | null>(null);
  protected readonly talking = signal(false);
  protected readonly happy = signal(false);
  protected readonly score = signal(0);

  protected readonly pages = computed(() => this.lesson().pages);
  protected readonly unitTitle = computed(() => {
    const unit = UNITS.find((u) => u.id === this.lesson().unitId);
    return unit ? this.language.pick(unit.title) : '';
  });
  protected readonly last = computed(() => this.pages().length - 1);
  protected readonly questionCount = computed(
    () => this.pages().flatMap((p) => p.blocks).filter((b) => b.type === 'question').length,
  );

  /** What Bito says right now: a reaction if there is one, else the page's explanation. */
  protected readonly bitoText = computed(() => {
    const reaction = this.reaction();
    if (reaction) {
      this.language.lang(); // re-read when the language changes
      return this.translate.instant(`book.reaction.${reaction}`) as string;
    }
    const [first, again] = this.pages()[this.current()].bito;
    return this.language.pick(this.alt() ? again : first);
  });

  private timers: ReturnType<typeof setTimeout>[] = [];

  constructor() {
    this.talk(false);
  }

  go(index: number): void {
    if (index < 0 || index > this.last() || index === this.current()) return;
    this.speech.stop();
    this.current.set(index);
    this.seen.update((s) => new Set(s).add(index));
    if (index === this.last()) this.progress.markLesson(this.lesson().unitId, this.lesson().id, 'book');
    this.alt.set(false);
    this.reaction.set(null);
    this.flipping.set(true);
    this.later(FLIP_MS, () => {
      this.flipping.set(false);
      this.talk(false);
    });
  }

  next(): void {
    this.go(this.current() + 1);
  }

  prev(): void {
    this.go(this.current() - 1);
  }

  /** Arrow keys follow the reading direction: in Arabic, left = next page. */
  onKey(event: KeyboardEvent): void {
    const ar = this.language.isAr();
    const forward = ar ? 'ArrowLeft' : 'ArrowRight';
    const back = ar ? 'ArrowRight' : 'ArrowLeft';
    if (event.key === forward) {
      event.preventDefault();
      this.next();
    } else if (event.key === back) {
      event.preventDefault();
      this.prev();
    }
  }

  explainAgain(): void {
    this.alt.set(this.reaction() ? true : !this.alt());
    this.reaction.set(null);
    this.talk(false);
  }

  listen(): void {
    this.speech.speak(this.bitoText(), this.language.lang());
    this.talk(false);
  }

  poke(): void {
    this.react('poke', true);
  }

  onAnswered(correct: boolean): void {
    if (correct) {
      this.score.update((s) => s + 1);
      this.progress.addPoints(10);
    }
    this.react(correct ? 'right' : 'wrong', correct);
  }

  onBitTapped(on: boolean): void {
    this.react(on ? 'bitOn' : 'bitOff', on);
  }

  private react(reaction: Reaction, happy: boolean): void {
    this.reaction.set(reaction);
    this.talk(happy);
  }

  private talk(happy: boolean): void {
    this.talking.set(true);
    this.happy.set(happy);
    this.later(1600, () => this.talking.set(false));
    if (happy) this.later(1400, () => this.happy.set(false));
  }

  private later(ms: number, fn: () => void): void {
    this.timers.push(setTimeout(fn, ms));
  }

  ngOnDestroy(): void {
    this.timers.forEach(clearTimeout);
    this.speech.stop();
  }
}
