import { Localized } from './lang.model';

/** done = finished; current = the one to work on now; locked = comes later. */
export type UnitStatus = 'done' | 'current' | 'locked';

/** How a unit is mainly taught on the site. */
export type LearningMethod = 'cards' | 'scenarios' | 'tools' | 'code';

export interface UnitLesson {
  /** Lesson number as in the book, e.g. "6-2". */
  id: string;
  title: Localized;
}

export interface Unit {
  /** Unit number in the ministry book (1–13). */
  id: number;
  title: Localized;
  /** Short list of topics, taken from the book's table of contents. */
  topics: Localized;
  method: LearningMethod;
  /** First page of the unit in the ministry book. */
  bookPage: number;
  /** Lessons already built on the site, in book order. */
  lessons: readonly UnitLesson[];
  /** True once every lesson of this unit in the book is on the site (only then can the unit be finished). */
  complete: boolean;
}

/** What a student has finished in one lesson. */
export interface LessonProgress {
  book?: boolean;
  game?: boolean;
  challenge?: boolean;
}
