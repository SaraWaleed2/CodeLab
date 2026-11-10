import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { Lesson } from '@core/models';
import { loadLesson } from '@content/lessons';

/** Loads the lesson named in the URL; unknown lessons go to the not-found page. */
export const lessonResolver: ResolveFn<Lesson> = async (route) => {
  const router = inject(Router);
  const lesson = await loadLesson(route.paramMap.get('unitId'), route.paramMap.get('lessonId'));
  return lesson ?? new RedirectCommand(router.parseUrl('/not-found'));
};
