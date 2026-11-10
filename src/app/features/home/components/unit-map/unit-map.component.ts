import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Unit, UnitStatus } from '@core/models';
import { BitoService, LanguageService, ProgressService } from '@core/services';
import { UNITS } from '@content/units';

interface UnitCard {
  unit: Unit;
  status: UnitStatus;
  /** The current unit has no lessons on the site yet. */
  soon: boolean;
  /** Lesson its button opens, if any. */
  link: (string | number)[] | null;
}

/** The 13-unit journey: done units get a drawn check, the current one pulses, the rest are locked. */
@Component({
  selector: 'app-unit-map',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './unit-map.component.html',
  styleUrl: './unit-map.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitMapComponent {
  private readonly progress = inject(ProgressService);
  private readonly bito = inject(BitoService);
  protected readonly language = inject(LanguageService);
  private readonly router = inject(Router);

  protected readonly cards = computed<UnitCard[]>(() =>
    UNITS.map((unit) => {
      const status = this.progress.statusOf(unit.id);
      const lesson =
        status === 'current'
          ? (unit.lessons.find((l) => !this.progress.isLessonDone(unit.id, l.id)) ?? unit.lessons[0])?.id
          : status === 'done'
            ? unit.lessons[0]?.id
            : undefined;
      return {
        unit,
        status,
        soon: status === 'current' && unit.lessons.length === 0,
        link: lesson ? ['/units', unit.id, 'lessons', lesson, 'book'] : null,
      };
    }),
  );
  protected readonly doneCount = this.progress.doneCount;
  protected readonly total = UNITS.length;
  protected readonly donePercent = computed(() => (this.doneCount() / this.total) * 100);
  protected readonly currentId = computed(() => this.progress.currentUnit()?.id ?? 1);

  private readonly picked = signal<number | null>(null);
  protected readonly selectedId = computed(() => this.picked() ?? this.currentId());
  protected readonly selected = computed(() => this.cards().find((c) => c.unit.id === this.selectedId())!);
  /** Translation params for the selected unit's texts. */
  protected readonly params = computed(() => ({
    num: this.selectedId(),
    current: this.currentId(),
    lesson: this.progress.continueLesson()?.lessonId ?? '',
  }));

  pick(card: UnitCard): void {
    this.picked.set(card.unit.id);
    // A unit that has lessons opens right away; the details below stay for the units that don't.
    if (card.link) void this.router.navigate(card.link);
    const key = card.soon ? 'soon' : card.status;
    this.bito.say(`bito.map.${key}`, { num: card.unit.id, current: this.currentId() }, card.status === 'current' && !card.soon);
  }

  /** Bito line and pill key for a card ("soon" replaces "current" while the unit has no lessons). */
  protected stateKey(card: UnitCard): string {
    return card.soon ? 'soon' : card.status;
  }
}
