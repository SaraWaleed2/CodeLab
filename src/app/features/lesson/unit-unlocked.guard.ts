import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { ProgressService } from '@core/services';

/** Lessons of a locked unit can't be opened; the student is sent back to the course map. */
export const unitUnlockedGuard: CanMatchFn = (_route, segments) => {
  const unitId = Number(segments[1]?.path);
  if (inject(ProgressService).statusOf(unitId) !== 'locked') return true;
  return inject(Router).createUrlTree(['/'], { fragment: 'map' });
};
