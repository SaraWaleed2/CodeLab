import { Injectable, computed, inject, signal } from '@angular/core';
import { LessonProgress, Unit, UnitStatus } from '../models';
import { UNITS } from '@content/units';
import { StorageService } from './storage.service';

/**
 * TEMPORARY (development only): while true, every unit that has lessons on the site opens even if the ones before it
 * aren't finished. Set to false to bring the real locking back.
 */
export const DEV_UNLOCK_BUILT_UNITS = false;

export type LessonPart = keyof LessonProgress;

/**
 * Real progress, saved in this browser.
 * - A lesson is done when the student reached the last page of its explainer book
 *   and finished at least one of its activities (the game or the code challenge).
 * - A unit is done when all of its lessons are on the site and all are done.
 * - Units open in the book's order: the first unit that isn't done is the current one; the rest are locked.
 */
@Injectable({ providedIn: 'root' })
export class ProgressService {
  private readonly storage = inject(StorageService);

  readonly points = signal<number>(this.storage.read().points ?? 0);
  private readonly lessons = signal<Record<string, LessonProgress>>(this.storage.read().progress ?? {});

  /** Status of every unit, in book order. */
  readonly statuses = computed<Record<number, UnitStatus>>(() => {
    const result: Record<number, UnitStatus> = {};
    let currentFound = false;
    for (const unit of UNITS) {
      if (!currentFound && this.isUnitDone(unit)) {
        result[unit.id] = 'done';
      } else if (!currentFound) {
        result[unit.id] = 'current';
        currentFound = true;
      } else if (DEV_UNLOCK_BUILT_UNITS && unit.lessons.length > 0) {
        result[unit.id] = 'current';
      } else {
        result[unit.id] = 'locked';
      }
    }
    return result;
  });

  readonly currentUnit = computed(() => UNITS.find((u) => this.statuses()[u.id] === 'current') ?? null);

  /** The lesson "Continue" opens: the first unfinished lesson of the current unit, or null if none is built yet. */
  readonly continueLesson = computed(() => {
    const unit = this.currentUnit();
    if (!unit) return null;
    const lesson = unit.lessons.find((l) => !this.isLessonDone(unit.id, l.id)) ?? unit.lessons[0];
    return lesson ? { unitId: unit.id, lessonId: lesson.id } : null;
  });

  readonly doneCount = computed(() => Object.values(this.statuses()).filter((s) => s === 'done').length);

  statusOf(unitId: number): UnitStatus {
    return this.statuses()[unitId] ?? 'locked';
  }

  isLessonDone(unitId: number, lessonId: string): boolean {
    const p = this.lessons()[`${unitId}/${lessonId}`];
    return !!p?.book && (!!p.game || !!p.challenge);
  }

  /** Records that a part of a lesson is finished (book read to the end, game finished, challenge passed). */
  markLesson(unitId: number, lessonId: string, part: LessonPart): void {
    const key = `${unitId}/${lessonId}`;
    if (this.lessons()[key]?.[part]) return;
    this.lessons.update((all) => ({ ...all, [key]: { ...all[key], [part]: true } }));
    this.storage.patch({ progress: this.lessons() });
  }

  addPoints(amount: number): void {
    this.points.update((p) => p + amount);
    this.storage.patch({ points: this.points() });
  }

  private isUnitDone(unit: Unit): boolean {
    return unit.complete && unit.lessons.length > 0 && unit.lessons.every((l) => this.isLessonDone(unit.id, l.id));
  }
}
