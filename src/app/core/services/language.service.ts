import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Lang, Localized } from '../models';
import { StorageService } from './storage.service';

/** Arabic / English switch. Flips the text, the page direction (RTL / LTR) and the arrows. */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly doc = inject(DOCUMENT);
  private readonly storage = inject(StorageService);
  private readonly translate = inject(TranslateService);

  readonly lang = signal<Lang>(this.storage.read().lang === 'en' ? 'en' : 'ar');
  readonly dir = computed<Direction>(() => (this.lang() === 'ar' ? 'rtl' : 'ltr'));
  readonly isAr = computed(() => this.lang() === 'ar');

  constructor() {
    effect(() => {
      const root = this.doc.documentElement;
      root.lang = this.lang();
      root.dir = this.dir();
    });
  }

  /** Loads the saved language's translations. Runs once at app start. */
  init(): Observable<unknown> {
    return this.translate.use(this.lang());
  }

  toggle(): void {
    this.set(this.lang() === 'ar' ? 'en' : 'ar');
  }

  set(lang: Lang): void {
    this.lang.set(lang);
    this.translate.use(lang);
    this.storage.patch({ lang });
  }

  /** Picks the current language from a { ar, en } pair (used for book content). */
  pick(text: Localized): string {
    return text[this.lang()];
  }
}
