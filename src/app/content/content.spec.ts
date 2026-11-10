import { Lesson } from '@core/models';
import { UNITS } from './units';
import { loadLesson } from './lessons';

/** Every lesson listed in units.ts, loaded from content. */
async function allLessons(): Promise<Lesson[]> {
  const lessons: Lesson[] = [];
  for (const unit of UNITS) {
    for (const ref of unit.lessons) {
      const lesson = await loadLesson(String(unit.id), ref.id);
      expect(lesson, `lesson ${unit.id}/${ref.id} is listed in units.ts but not in lessons.ts`).not.toBeNull();
      lessons.push(lesson!);
    }
  }
  return lessons;
}

describe('lesson content', () => {
  it('registers every lesson listed in the units', async () => {
    const lessons = await allLessons();
    expect(lessons.length).toBeGreaterThan(0);
  });

  it('cites a book source on every page but the cover, and starts with a cover', async () => {
    for (const lesson of await allLessons()) {
      expect(lesson.pages[0].cover, `${lesson.id} cover`).toBe(true);
      lesson.pages.slice(1).forEach((p, i) => expect(p.source, `${lesson.id} page ${i + 2} source`).toBeTruthy());
    }
  });

  it('points every question at a real option', async () => {
    for (const lesson of await allLessons()) {
      for (const page of lesson.pages) {
        for (const block of page.blocks) {
          if (block.type === 'question') {
            expect(block.answer).toBeGreaterThanOrEqual(0);
            expect(block.answer).toBeLessThan(block.options.length);
          }
        }
      }
    }
  });

  it('puts every sort item in a box that exists, and gives each box at least one item', async () => {
    for (const lesson of await allLessons()) {
      if (lesson.game?.kind !== 'sort') continue;
      for (const round of lesson.game.rounds) {
        const ids = round.bins.map((b) => b.id);
        round.items.forEach((item) => expect(ids, `${lesson.id}: ${item.text.en}`).toContain(item.bin));
        ids.forEach((id) => expect(round.items.some((i) => i.bin === id), `${lesson.id}: empty box ${id}`).toBe(true));
      }
    }
  });

  it('gives every match round at least two pairs, each with a card and a meaning', async () => {
    for (const lesson of await allLessons()) {
      if (lesson.game?.kind !== 'match') continue;
      for (const round of lesson.game.rounds) {
        expect(round.pairs.length, `${lesson.id}: ${round.title.en}`).toBeGreaterThanOrEqual(2);
        round.pairs.forEach((p) => {
          expect(!!p.left.cc || !!p.left.text, `${lesson.id}: a pair has no card`).toBe(true);
          expect(p.right.ar.length).toBeGreaterThan(0);
        });
        const meanings = round.pairs.map((p) => p.right.en);
        expect(new Set(meanings).size, `${lesson.id}: two cards share one meaning`).toBe(meanings.length);
      }
    }
  });

  it('gives every order round at least two steps', async () => {
    for (const lesson of await allLessons()) {
      if (lesson.game?.kind !== 'order') continue;
      for (const round of lesson.game.rounds) {
        expect(round.steps.length, `${lesson.id}: ${round.title.en}`).toBeGreaterThanOrEqual(2);
        const steps = round.steps.map((s) => s.en);
        expect(new Set(steps).size, `${lesson.id}: two steps are identical`).toBe(steps.length);
      }
    }
  });

  it('fills every sequence group and comparison row', async () => {
    for (const lesson of await allLessons()) {
      for (const page of lesson.pages) {
        for (const block of page.blocks) {
          if (block.type === 'sequence') {
            expect(block.groups.length).toBeGreaterThan(0);
            block.groups.forEach((g) => expect(g.steps.length, `${lesson.id}: empty group`).toBeGreaterThan(0));
          }
          if (block.type === 'compare') {
            block.rows.forEach((r) => expect(r.cells.length, `${lesson.id}: ${r.label.en}`).toBe(block.columns.length));
          }
        }
      }
    }
  });

  it('gives every duration bar a positive length', async () => {
    for (const lesson of await allLessons()) {
      for (const page of lesson.pages) {
        for (const block of page.blocks) {
          if (block.type === 'durations') block.items.forEach((i) => expect(i.years).toBeGreaterThan(0));
        }
      }
    }
  });

  it('gives every lesson an activity, so it can be finished', async () => {
    for (const lesson of await allLessons()) {
      expect(!!lesson.game || !!lesson.challenge, `${lesson.id} has no game or challenge`).toBe(true);
    }
  });
});
