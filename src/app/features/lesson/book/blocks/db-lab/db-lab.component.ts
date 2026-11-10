import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DbClub, DbStudent } from '@core/models';
import { LanguageService } from '@core/services';
import { dbView, DbMode } from './db-view';

/**
 * The book's students table (unit 9, pp. 129–130).
 * "parts" lights up one record (row) and one field (column).
 * "ops" runs the three relational operations: rows that drop out of a selection and columns that drop out
 * of a projection stay on screen, faded and struck through, so the student sees what was taken away;
 * a join adds the club's activity as a new, highlighted column.
 */
@Component({
  selector: 'app-db-lab',
  imports: [TranslatePipe],
  templateUrl: './db-lab.component.html',
  styleUrl: './db-lab.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DbLabComponent {
  readonly show = input.required<'parts' | 'ops'>();
  readonly students = input.required<readonly DbStudent[]>();
  readonly clubs = input.required<readonly DbClub[]>();
  /** The club a selection keeps, e.g. "C2". */
  readonly club = input.required<string>();

  protected readonly language = inject(LanguageService);
  protected readonly mode = signal<DbMode>('table');
  /** In "parts": which part is lit, the record (row) or the field (column). */
  protected readonly part = signal<'record' | 'field'>('record');

  protected readonly modes: readonly DbMode[] = ['table', 'selection', 'projection', 'join'];
  protected readonly view = computed(() => dbView(this.students(), this.clubs(), this.club(), this.mode()));

  /** The row and column lit in "parts": the second student and the name column, like the book's drawing. */
  protected readonly litRow = 1;
  protected readonly litCol = 'name';
}
