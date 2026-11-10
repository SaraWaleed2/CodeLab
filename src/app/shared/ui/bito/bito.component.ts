import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Bito the robot (drawing only). Floats, blinks, waves; talks while `talking`,
 * jumps with smiling eyes while `happy`, tilts on hover.
 */
@Component({
  selector: 'app-bito',
  templateUrl: './bito.component.html',
  styleUrl: './bito.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BitoComponent {
  readonly talking = input(false);
  readonly happy = input(false);
  /** Plays a jump-in entrance (used after a book page turns). */
  readonly enter = input(false);
}
