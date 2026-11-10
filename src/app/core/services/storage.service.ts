import { Injectable } from '@angular/core';
import { LessonProgress } from '../models';

/** Per-student data saved in this browser. */
export interface Prefs {
  /** Storage format version. */
  v?: number;
  lang?: 'ar' | 'en';
  dark?: boolean;
  points?: number;
  /** Finished parts per lesson, keyed "unitId/lessonId", e.g. "6/6-2". */
  progress?: Record<string, LessonProgress>;
}

const KEY = 'codelab-prefs';
/** v2: points and progress became real; anything saved before v2 was demo data. */
const VERSION = 2;

/**
 * Small wrapper around localStorage. Every access is guarded, because storage can be
 * blocked (private windows, cleared site data) and the site must still work without it.
 */
@Injectable({ providedIn: 'root' })
export class StorageService {
  constructor() {
    const saved = this.raw();
    if (saved.v !== VERSION) {
      // Keep the student's language and theme; drop demo points from earlier versions.
      this.write({ v: VERSION, lang: saved.lang, dark: saved.dark });
    }
  }

  read(): Prefs {
    return this.raw();
  }

  patch(patch: Prefs): void {
    this.write({ ...this.raw(), ...patch, v: VERSION });
  }

  private raw(): Prefs {
    try {
      return (JSON.parse(localStorage.getItem(KEY) ?? '{}') as Prefs) ?? {};
    } catch {
      return {};
    }
  }

  private write(prefs: Prefs): void {
    try {
      localStorage.setItem(KEY, JSON.stringify(prefs));
    } catch {
      /* storage unavailable: keep going without saving */
    }
  }
}
