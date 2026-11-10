import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

/** One bulb: shows its bit (0/1) and its value. Lights up yellow and sends a ray when switched on. */
@Component({
  selector: 'app-bulb',
  templateUrl: './bulb.component.html',
  styleUrl: './bulb.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulbComponent {
  readonly on = input(false);
  readonly value = input.required<number>();
  readonly size = input<'md' | 'lg'>('md');
  /** Bito is pointing at this bulb. */
  readonly hint = input(false);
  readonly label = input('');

  readonly toggled = output<void>();
}
