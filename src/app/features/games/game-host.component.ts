import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Lesson } from '@core/models';
import { LanguageService } from '@core/services';
import { BulbsGameComponent } from './bulbs/bulbs-game.component';
import { SortGameComponent } from './sort/sort-game.component';
import { ScenarioGameComponent } from './scenarios/scenario-game.component';
import { MatchGameComponent } from './match/match-game.component';
import { OrderGameComponent } from './order/order-game.component';

/** The lesson's "play" screen: shows the game that matches the lesson's activity kind. */
@Component({
  selector: 'app-game-host',
  imports: [RouterLink, TranslatePipe, BulbsGameComponent, SortGameComponent, ScenarioGameComponent, MatchGameComponent, OrderGameComponent],
  templateUrl: './game-host.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameHostComponent {
  readonly lesson = input.required<Lesson>();
  protected readonly language = inject(LanguageService);
}
