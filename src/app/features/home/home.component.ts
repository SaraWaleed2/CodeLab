import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { BitoService, ProgressService } from '@core/services';
import { HeroComponent } from './components/hero/hero.component';
import { UnitMapComponent } from './components/unit-map/unit-map.component';
import { LearningWaysComponent } from './components/learning-ways/learning-ways.component';

/** Home: hero with the "try it now" bulbs, the 13-unit journey map, and the ways of learning. */
@Component({
  selector: 'app-home',
  imports: [TranslatePipe, HeroComponent, UnitMapComponent, LearningWaysComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  constructor() {
    const bito = inject(BitoService);
    const progress = inject(ProgressService);
    const unit = () => progress.currentUnit()?.id ?? 13;
    const next = () => progress.continueLesson();

    bito.say('bito.home.hello', { unit: unit() });
    bito.onPoke(() => {
      const lesson = next();
      if (lesson) bito.say('bito.home.poke', { unit: lesson.unitId, lesson: lesson.lessonId }, true);
      else bito.say('bito.home.pokeSoon', { unit: unit() }, true);
    }, inject(DestroyRef));
  }
}
