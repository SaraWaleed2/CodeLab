import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Lang } from '../models';

/** Reads Bito's words aloud with the browser's speech synthesis, when available. */
@Injectable({ providedIn: 'root' })
export class SpeechService {
  private readonly synth = inject(DOCUMENT).defaultView?.speechSynthesis;

  readonly supported = !!this.synth;

  speak(text: string, lang: Lang): void {
    if (!this.synth) return;
    this.synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'ar' ? 'ar-EG' : 'en-US';
    utterance.rate = 0.95;
    this.synth.speak(utterance);
  }

  stop(): void {
    this.synth?.cancel();
  }
}
