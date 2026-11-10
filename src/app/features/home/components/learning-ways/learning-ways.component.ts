import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LearningMethod } from '@core/models';
import { ProgressService } from '@core/services';

interface Way {
  method: LearningMethod;
  /** Lesson screen it opens, or null while it isn't built yet. */
  screen: 'book' | 'play' | 'challenge' | null;
  icon: string;
}

const WAYS: readonly Way[] = [
  { method: 'cards', screen: 'book', icon: 'M3 5h13v15H3zM8 3h11a2 2 0 0 1 2 2v12M7 10h5M7 14h5' },
  { method: 'scenarios', screen: null, icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM9.5 9.2a2.6 2.6 0 0 1 5 .9c0 1.7-2.5 2.2-2.5 3.9M12 17h.01' },
  { method: 'tools', screen: 'play', icon: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2h5c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z' },
  { method: 'code', screen: 'challenge', icon: 'M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16' },
];

/** "Every lesson is taught the way that fits it": the four learning methods. */
@Component({
  selector: 'app-learning-ways',
  imports: [NgTemplateOutlet, RouterLink, TranslatePipe],
  templateUrl: './learning-ways.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningWaysComponent {
  private readonly progress = inject(ProgressService);

  /** Each way links to the matching screen of the student's next lesson (none while no lesson is open). */
  protected readonly ways = computed(() => {
    const next = this.progress.continueLesson();
    return WAYS.map((way) => ({
      ...way,
      link: way.screen && next ? ['/units', next.unitId, 'lessons', next.lessonId, way.screen] : null,
    }));
  });
}
