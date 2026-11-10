import { Routes } from '@angular/router';
import { unitUnlockedGuard } from './features/lesson/unit-unlocked.guard';

/** Every area loads on its own (lazy). */
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'كودلاب',
  },
  {
    path: 'units/:unitId/lessons/:lessonId',
    canMatch: [unitUnlockedGuard],
    loadChildren: () => import('./features/lesson/lesson.routes').then((m) => m.LESSON_ROUTES),
    title: 'كودلاب',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'كودلاب',
  },
];
