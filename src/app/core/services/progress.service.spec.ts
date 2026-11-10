import { TestBed } from '@angular/core/testing';
import { UNITS } from '@content/units';
import { DEV_UNLOCK_BUILT_UNITS, ProgressService } from './progress.service';

describe('ProgressService', () => {
  let progress: ProgressService;

  beforeEach(() => {
    localStorage.clear();
    progress = TestBed.inject(ProgressService);
  });

  it('starts at 0 points with unit 1 current and the rest locked', () => {
    expect(progress.points()).toBe(0);
    expect(progress.statusOf(1)).toBe('current');
    // While the temporary development unlock is on, units that have lessons (1–7) open early.
    expect(progress.statusOf(2)).toBe(DEV_UNLOCK_BUILT_UNITS ? 'current' : 'locked');
    // A unit with no lessons on the site is always locked while an earlier one is unfinished.
    const empty = UNITS.find((u) => u.lessons.length === 0 && u.id > 1);
    if (empty) expect(progress.statusOf(empty.id)).toBe('locked');
    expect(progress.doneCount()).toBe(0);
  });

  it('needs the book AND one activity before a lesson counts as done', () => {
    progress.markLesson(6, '6-2', 'book');
    expect(progress.isLessonDone(6, '6-2')).toBe(false);
    progress.markLesson(6, '6-2', 'game');
    expect(progress.isLessonDone(6, '6-2')).toBe(true);
  });

  it('never marks a unit done while it is not fully on the site', () => {
    progress.markLesson(6, '6-2', 'book');
    progress.markLesson(6, '6-2', 'challenge');
    expect(progress.statusOf(6)).not.toBe('done');
  });

  it('saves progress in the browser', () => {
    progress.markLesson(6, '6-2', 'book');
    const saved = JSON.parse(localStorage.getItem('codelab-prefs')!);
    expect(saved.progress['6/6-2'].book).toBe(true);
  });
});
