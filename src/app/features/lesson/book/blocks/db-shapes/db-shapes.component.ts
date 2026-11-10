import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DbShape } from '@core/models';
import { LanguageService } from '@core/services';

/** The kinds of database (unit 9) drawn as their shapes, like the book's drawing on p. 125. Tap one to read it. */
@Component({
  selector: 'app-db-shapes',
  imports: [TranslatePipe],
  templateUrl: './db-shapes.component.html',
  styleUrl: './db-shapes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DbShapesComponent {
  readonly items = input.required<readonly DbShape[]>();

  protected readonly language = inject(LanguageService);
  protected readonly picked = signal(0);
  protected readonly current = computed(() => this.items()[this.picked()] ?? this.items()[0]);
}
