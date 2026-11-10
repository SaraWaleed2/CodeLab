import { DestroyRef, Injectable, signal } from '@angular/core';
import { Localized } from '../models';

/** What Bito is saying: a translation key (with params) or text taken from lesson content. */
export type BitoMessage =
  | { key: string; params?: Record<string, unknown> }
  | { text: Localized };

/**
 * Bito, the robot helper in the corner. Pages tell him what to say in reaction to what the
 * student does; when the student taps him, the current page decides what he answers.
 */
@Injectable({ providedIn: 'root' })
export class BitoService {
  readonly message = signal<BitoMessage>({ key: 'bito.hello' });
  readonly open = signal(true);
  readonly talking = signal(false);
  readonly happy = signal(false);
  /** Goes up with every new message, so the bubble can replay its pop-in. */
  readonly count = signal(0);

  private pokeHandler: (() => void) | null = null;
  private talkTimer?: ReturnType<typeof setTimeout>;
  private happyTimer?: ReturnType<typeof setTimeout>;

  say(key: string, params?: Record<string, unknown>, happy = false): void {
    this.show({ key, params }, happy);
  }

  sayText(text: Localized, happy = false): void {
    this.show({ text }, happy);
  }

  close(): void {
    this.open.set(false);
  }

  /** The student tapped Bito. */
  poke(): void {
    if (this.pokeHandler) this.pokeHandler();
    else this.say('bito.poke', undefined, true);
  }

  /** Lets a page answer when Bito is tapped, until that page is destroyed. */
  onPoke(handler: () => void, destroyRef: DestroyRef): void {
    this.pokeHandler = handler;
    destroyRef.onDestroy(() => {
      if (this.pokeHandler === handler) this.pokeHandler = null;
    });
  }

  private show(message: BitoMessage, happy: boolean): void {
    clearTimeout(this.talkTimer);
    clearTimeout(this.happyTimer);
    this.message.set(message);
    this.open.set(true);
    this.count.update((c) => c + 1);
    this.talking.set(true);
    this.happy.set(happy);
    this.talkTimer = setTimeout(() => this.talking.set(false), 1500);
    if (happy) this.happyTimer = setTimeout(() => this.happy.set(false), 1400);
  }
}
