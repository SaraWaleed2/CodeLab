import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { BitoService, ProgressService } from '@core/services';
import { BulbComponent } from '@shared/ui/bulb/bulb.component';
import { ConfettiComponent } from '@shared/ui/confetti/confetti.component';

const VALUES = [128, 64, 32, 16, 8, 4, 2, 1] as const;
const TARGET = 45;

/** "Try it now": switch on bulbs until they add up to 45. */
@Component({
  selector: 'app-try-card',
  imports: [TranslatePipe, BulbComponent, ConfettiComponent],
  templateUrl: './try-card.component.html',
  styleUrl: './try-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TryCardComponent {
  private readonly bito = inject(BitoService);
  private readonly progress = inject(ProgressService);

  protected readonly values = VALUES;
  protected readonly target = TARGET;
  protected readonly bits = signal<boolean[]>(VALUES.map(() => false));
  protected readonly burst = signal(0);
  private rewarded = false;

  protected readonly sum = computed(() =>
    VALUES.reduce((total, v, i) => total + (this.bits()[i] ? v : 0), 0),
  );
  protected readonly binary = computed(() => this.bits().map((b) => (b ? 1 : 0)).join(''));
  protected readonly won = computed(() => this.sum() === TARGET);
  protected readonly over = computed(() => this.sum() > TARGET);
  protected readonly percent = computed(() => Math.min(100, Math.round((this.sum() / TARGET) * 100)));

  toggle(i: number): void {
    this.bits.update((bits) => bits.map((b, k) => (k === i ? !b : b)));
    const sum = this.sum();
    const v = VALUES[i];

    if (sum === TARGET) {
      this.burst.update((n) => n + 1);
      if (!this.rewarded) {
        this.rewarded = true;
        this.progress.addPoints(10);
      }
      this.bito.say('bito.try.won', undefined, true);
    } else if (sum > TARGET) {
      this.bito.say('bito.try.over', { sum, extra: sum - TARGET });
    } else if (this.bits()[i]) {
      this.bito.say('bito.try.on', { v, sum, left: TARGET - sum });
    } else {
      this.bito.say('bito.try.off', { v, sum });
    }
  }

  reset(): void {
    this.bits.set(VALUES.map(() => false));
    this.bito.say('bito.try.reset');
  }
}
