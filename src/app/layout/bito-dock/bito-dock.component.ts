import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { BitoService, LanguageService } from '@core/services';
import { BitoComponent } from '@shared/ui/bito/bito.component';

/** Bito fixed in the corner, with a closable speech bubble that reacts to what the student does. */
@Component({
  selector: 'app-bito-dock',
  imports: [TranslatePipe, BitoComponent],
  templateUrl: './bito-dock.component.html',
  styleUrl: './bito-dock.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BitoDockComponent {
  protected readonly bito = inject(BitoService);
  private readonly language = inject(LanguageService);

  /** Text that comes from lesson content (already in both languages). */
  protected readonly contentText = computed(() => {
    const m = this.bito.message();
    return 'text' in m ? this.language.pick(m.text) : null;
  });
  protected readonly key = computed(() => {
    const m = this.bito.message();
    return 'key' in m ? m : null;
  });
}
