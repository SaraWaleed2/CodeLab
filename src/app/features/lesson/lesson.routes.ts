import { Routes } from '@angular/router';
import { lessonResolver } from './lesson.resolver';

/**
 * /units/:unitId/lessons/:lessonId/…
 * Each screen gets the resolved `lesson` as a component input.
 */
export const LESSON_ROUTES: Routes = [
  {
    path: '',
    resolve: { lesson: lessonResolver },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'book' },
      {
        path: 'book',
        loadComponent: () => import('./book/book.component').then((m) => m.BookComponent),
        data: { hideBitoDock: true },
      },
      {
        path: 'play',
        loadComponent: () => import('../games/game-host.component').then((m) => m.GameHostComponent),
      },
      {
        path: 'challenge',
        loadComponent: () =>
          import('../challenges/code/code-challenge.component').then((m) => m.CodeChallengeComponent),
      },
    ],
  },
];
