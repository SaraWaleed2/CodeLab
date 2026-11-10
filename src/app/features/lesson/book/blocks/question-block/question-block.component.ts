import { ChangeDetectionStrategy, Component, computed, inject, input, output, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Localized, QuestionBlock } from '@core/models';
import { LanguageService } from '@core/services';

/** A multiple-choice question from "تحدى معلوماتك". A wrong pick shows the book's explanation. */
@Component({
  selector: 'app-question-block',
  imports: [TranslatePipe],
  templateUrl: './question-block.component.html',
  styleUrl: './question-block.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionBlockComponent {
  readonly block = input.required<QuestionBlock>();
  /** Emits true the first time the right option is picked, false on each wrong pick. */
  readonly answered = output<boolean>();

  protected readonly language = inject(LanguageService);
  protected readonly picked = signal<number | null>(null);
  protected readonly solved = computed(() => this.picked() === this.block().answer);
  protected readonly letters = computed(() =>
    // Same letters as the ministry book's questions.
    this.language.isAr() ? ['أ', 'ب', 'ت', 'ث'] : ['A', 'B', 'C', 'D'],
  );

  /** Words (Localized) vs. a number/code string. */
  protected isText(option: string | Localized): option is Localized {
    return typeof option !== 'string';
  }

  pick(i: number): void {
    if (this.solved()) return;
    this.picked.set(i);
    this.answered.emit(i === this.block().answer);
  }
}
