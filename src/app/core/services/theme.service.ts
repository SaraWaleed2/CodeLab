import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';
import { StorageService } from './storage.service';

/** Light / dark mode. Opens dark when the student's device is dark, unless they chose otherwise. */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly storage = inject(StorageService);

  readonly dark = signal<boolean>(this.initial());

  constructor() {
    effect(() => this.doc.documentElement.classList.toggle('dark', this.dark()));
  }

  toggle(): void {
    this.dark.update((d) => !d);
    this.storage.patch({ dark: this.dark() });
  }

  private initial(): boolean {
    const saved = this.storage.read().dark;
    if (typeof saved === 'boolean') return saved;
    return this.doc.defaultView?.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  }
}
