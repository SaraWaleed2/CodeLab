import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core';

/** A short confetti burst over its parent. Bump `burst` (e.g. a counter) to fire it again. */
@Component({
  selector: 'app-confetti',
  templateUrl: './confetti.component.html',
  styleUrl: './confetti.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfettiComponent {
  readonly burst = input(0);

  protected readonly visible = signal(false);
  protected readonly pieces = Array.from({ length: 20 }, (_, i) => i);
  private timer?: ReturnType<typeof setTimeout>;

  constructor() {
    effect((onCleanup) => {
      if (this.burst() <= 0) return;
      this.visible.set(false);
      // Next tick, so the pieces are re-created and the animation replays.
      const show = setTimeout(() => this.visible.set(true));
      this.timer = setTimeout(() => this.visible.set(false), 2200);
      onCleanup(() => {
        clearTimeout(show);
        clearTimeout(this.timer);
      });
    });
  }
}
