import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ProgressService } from '@core/services';

@Component({
  selector: 'app-points-badge',
  imports: [TranslatePipe],
  templateUrl: './points-badge.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PointsBadgeComponent {
  protected readonly progress = inject(ProgressService);
}
