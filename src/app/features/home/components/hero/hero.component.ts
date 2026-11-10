import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ProgressService } from '@core/services';
import { TryCardComponent } from '../try-card/try-card.component';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, TranslatePipe, TryCardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  private readonly progress = inject(ProgressService);
  private readonly title = toSignal(inject(TranslateService).stream('home.title'), { initialValue: '' });

  /** Title split into words so they can appear one after another; the last word is highlighted. */
  protected readonly words = computed(() => String(this.title()).split(' ').filter(Boolean));

  protected readonly unitId = computed(() => this.progress.currentUnit()?.id ?? 13);

  /** "Continue" opens the next lesson; while the current unit has none yet, it scrolls to the map. */
  protected readonly continueLink = computed(() => {
    const next = this.progress.continueLesson();
    return next ? ['/units', next.unitId, 'lessons', next.lessonId, 'book'] : ['/'];
  });
  protected readonly continueFragment = computed(() => (this.progress.continueLesson() ? undefined : 'map'));
}
