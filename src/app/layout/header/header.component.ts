import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ProgressService } from '@core/services';
import { LogoComponent } from '@shared/ui/logo/logo.component';
import { LangToggleComponent } from '@shared/ui/lang-toggle/lang-toggle.component';
import { ThemeToggleComponent } from '@shared/ui/theme-toggle/theme-toggle.component';
import { PointsBadgeComponent } from '@shared/ui/points-badge/points-badge.component';

interface NavLink {
  path: (string | number)[];
  fragment?: string;
  label: string;
  exact: boolean;
}

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    TranslatePipe,
    LogoComponent,
    LangToggleComponent,
    ThemeToggleComponent,
    PointsBadgeComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly progress = inject(ProgressService);

  /** Lessons, games and challenges open the student's next lesson; with none yet, they go to the course map. */
  protected readonly links = computed<NavLink[]>(() => {
    const next = this.progress.continueLesson();
    const to = (screen: string): Pick<NavLink, 'path' | 'fragment'> =>
      next ? { path: ['/units', next.unitId, 'lessons', next.lessonId, screen] } : { path: ['/'], fragment: 'map' };
    return [
      { path: ['/'], label: 'nav.home', exact: true },
      { ...to('book'), label: 'nav.lessons', exact: false },
      { ...to('play'), label: 'nav.games', exact: false },
      { ...to('challenge'), label: 'nav.challenges', exact: false },
    ];
  });
}
