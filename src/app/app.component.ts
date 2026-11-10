import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BidiModule } from '@angular/cdk/bidi';
import { filter, map } from 'rxjs';
import { LanguageService } from '@core/services';
import { HeaderComponent } from '@layout/header/header.component';
import { BitoDockComponent } from '@layout/bito-dock/bito-dock.component';
import { ScrollProgressComponent } from '@layout/scroll-progress/scroll-progress.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BidiModule, HeaderComponent, BitoDockComponent, ScrollProgressComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  /** Drives the CDK `dir` context, so every component knows if the page is RTL or LTR. */
  protected readonly language = inject(LanguageService);

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  /** Pages that have their own Bito (the explainer book) hide the corner one via route data. */
  protected readonly showBitoDock = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => {
        let r = this.route.snapshot;
        while (r.firstChild) r = r.firstChild;
        return !r.data['hideBitoDock'];
      }),
    ),
    { initialValue: false },
  );
}
