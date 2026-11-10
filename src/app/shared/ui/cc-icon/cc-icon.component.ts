import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CcCode } from '@core/models';

/**
 * The four Creative Commons symbols, drawn here so they stay sharp at any size and
 * follow the page colours. (The book's table draws the "non-commercial" symbol like
 * the "attribution" one on p.25; p.28 shows the real one, crossed currency sign.)
 */
@Component({
  selector: 'app-cc-icon',
  templateUrl: './cc-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CcIconComponent {
  readonly code = input.required<CcCode>();
  readonly size = input(44);
}
