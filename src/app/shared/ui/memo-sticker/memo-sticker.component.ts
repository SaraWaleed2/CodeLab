import { ChangeDetectionStrategy, Component } from '@angular/core';

/** The yellow "افتكر" note, centred under the page content: the one line a student should remember. */
@Component({
  selector: 'app-memo-sticker',
  template: `
    <span
      class="inline-flex items-center gap-2.5 rounded-[14px] bg-sun px-4 py-2 text-base font-semibold text-on-sun shadow-[0_8px_20px_-10px_rgb(247_196_96/0.8)]"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M9 18h6M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
      </svg>
      <ng-content />
    </span>
  `,
  host: { class: 'self-center' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemoStickerComponent {}
