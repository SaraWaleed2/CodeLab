import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '@core/services';

@Component({
  selector: 'app-lang-toggle',
  imports: [TranslatePipe],
  templateUrl: './lang-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangToggleComponent {
  protected readonly language = inject(LanguageService);
}
