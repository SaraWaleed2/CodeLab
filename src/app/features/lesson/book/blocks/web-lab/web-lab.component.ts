import { ChangeDetectionStrategy, Component, ElementRef, computed, effect, input, linkedSignal, signal, viewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { buildWebDoc } from './web-doc';

type Tab = 'html' | 'css' | 'js';

/**
 * A small editor for the book's web examples (unit 13): the student edits HTML, CSS and JavaScript and sees the
 * page run beside it. The page lives in a sandboxed iframe (scripts allowed, nothing else), so it cannot reach
 * CodeLab itself.
 */
@Component({
  selector: 'app-web-lab',
  imports: [TranslatePipe],
  templateUrl: './web-lab.component.html',
  styleUrl: './web-lab.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebLabComponent {
  readonly html = input.required<string>();
  readonly css = input('');
  readonly js = input('');

  protected readonly frame = viewChild.required<ElementRef<HTMLIFrameElement>>('frame');

  protected readonly tabs = computed<Tab[]>(() => ['html', ...(this.css() ? (['css'] as const) : []), ...(this.js() ? (['js'] as const) : [])]);
  protected readonly tab = signal<Tab>('html');

  /** What the student has typed in each file; it starts as the book's code. */
  protected readonly typed = linkedSignal<{ html: string; css: string; js: string }>(() => ({ html: this.html(), css: this.css(), js: this.js() }));
  /** The code that is running in the preview (updated by "Run"). */
  protected readonly running = linkedSignal(() => ({ html: this.html(), css: this.css(), js: this.js() }));

  constructor() {
    effect(() => {
      const r = this.running();
      this.frame().nativeElement.srcdoc = buildWebDoc(r.html, r.css, r.js);
    });
  }

  protected edit(tab: Tab, event: Event): void {
    const value = (event.target as HTMLTextAreaElement).value;
    this.typed.update((t) => ({ ...t, [tab]: value }));
  }

  protected run(): void {
    this.running.set({ ...this.typed() });
  }

  protected reset(): void {
    const start = { html: this.html(), css: this.css(), js: this.js() };
    this.typed.set(start);
    this.running.set(start);
  }
}
