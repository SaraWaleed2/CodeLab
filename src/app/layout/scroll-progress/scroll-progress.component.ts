import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';

/** Thin green-to-yellow bar at the top that fills as the page scrolls. Updates the DOM directly (no re-render). */
@Component({
  selector: 'app-scroll-progress',
  template: `<div #bar class="bar" aria-hidden="true"></div>`,
  styles: `
    .bar {
      position: fixed;
      top: 0;
      inset-inline: 0;
      height: 3px;
      z-index: 80;
      background: linear-gradient(to right, var(--cl-primary), #f7c460);
      transform: scaleX(0);
      transform-origin: left center;
    }
    :host-context([dir='rtl']) .bar {
      transform-origin: right center;
      background: linear-gradient(to left, var(--cl-primary), #f7c460);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollProgressComponent {
  private readonly bar = viewChild.required<ElementRef<HTMLElement>>('bar');
  private readonly doc = inject(DOCUMENT);

  constructor() {
    afterNextRender(() => {
      const win = this.doc.defaultView;
      if (!win) return;
      const update = () => {
        const root = this.doc.documentElement;
        const max = root.scrollHeight - root.clientHeight;
        const ratio = max > 0 ? Math.min(1, root.scrollTop / max) : 0;
        this.bar().nativeElement.style.transform = `scaleX(${ratio})`;
      };
      win.addEventListener('scroll', update, { passive: true });
      update();
    });
  }
}
