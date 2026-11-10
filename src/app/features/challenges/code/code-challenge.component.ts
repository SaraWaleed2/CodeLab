import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  computed,
  inject,
  input,
  linkedSignal,
  signal,
  untracked,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Lesson } from '@core/models';
import { BitoService, LanguageService, ProgressService } from '@core/services';
import { ConfettiComponent } from '@shared/ui/confetti/confetti.component';
import { RunResult, TestRun, runInWorker } from './code-runner';

type Problem = 'banned' | 'missing' | 'syntax' | 'timeout' | 'unsupported';

/** Fill in the one missing line, then run the code for real against the tests. Bito gives 3 hints, the last is the line. */
@Component({
  selector: 'app-code-challenge',
  imports: [RouterLink, TranslatePipe, ConfettiComponent],
  templateUrl: './code-challenge.component.html',
  styleUrl: './code-challenge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeChallengeComponent implements OnInit {
  readonly lesson = input.required<Lesson>();

  protected readonly language = inject(LanguageService);
  private readonly bito = inject(BitoService);
  private readonly progress = inject(ProgressService);

  protected readonly challenge = computed(() => this.lesson().challenge!);
  /** The editor text. Starts as the starter code in the current language; kept when the language changes. */
  protected readonly code = linkedSignal(() => {
    const starter = this.lesson().challenge?.starter;
    return starter ? untracked(() => this.language.pick(starter)) : '';
  });
  protected readonly runs = signal<TestRun[] | null>(null);
  protected readonly problem = signal<{ kind: Problem; message?: string } | null>(null);
  protected readonly running = signal(false);
  protected readonly hintLevel = signal(0);
  protected readonly burst = signal(0);
  private solved = false;

  protected readonly hasChallenge = computed(() => !!this.lesson().challenge);
  protected readonly lines = computed(() => {
    const lines = this.code().split('\n');
    const comment = lines.findIndex((l) => l.includes('//'));
    return lines.map((_, i) => ({ n: i + 1, marked: i === comment }));
  });
  protected readonly passCount = computed(() => this.runs()?.filter((r) => r.ok).length ?? 0);
  protected readonly allPass = computed(() => this.passCount() === (this.lesson().challenge?.tests.length ?? -1));
  protected readonly shownHints = computed(() => this.lesson().challenge?.hints.slice(0, this.hintLevel()) ?? []);
  protected readonly inputsText = computed(() =>
    (this.lesson().challenge?.tests ?? []).map((t) => t.input).join(this.language.isAr() ? '، ' : ', '),
  );

  constructor() {
    this.bito.onPoke(() => this.hint(), inject(DestroyRef));
  }

  ngOnInit(): void {
    const c = this.lesson().challenge;
    if (c) this.bito.say('bito.code.hello', { fn: c.functionName });
    else this.bito.say('bito.code.none');
  }

  onInput(event: Event): void {
    this.code.set((event.target as HTMLTextAreaElement).value);
  }

  /** Tab inserts two spaces instead of leaving the editor (Esc then Tab still moves focus out). */
  onKeydown(event: KeyboardEvent): void {
    if (event.key !== 'Tab' || event.shiftKey) return;
    event.preventDefault();
    const el = event.target as HTMLTextAreaElement;
    const { selectionStart: a, selectionEnd: b } = el;
    this.code.set(this.code().slice(0, a) + '  ' + this.code().slice(b));
    queueMicrotask(() => (el.selectionStart = el.selectionEnd = a + 2));
  }

  async run(): Promise<void> {
    const c = this.challenge();
    if (new RegExp(c.banned.pattern).test(this.code())) {
      this.runs.set(null);
      this.problem.set({ kind: 'banned' });
      this.bito.say('bito.code.banned', { banned: c.banned.label });
      return;
    }
    this.running.set(true);
    const result = await runInWorker(this.code(), c.functionName, c.tests.map((t) => t.input));
    this.running.set(false);
    this.show(result);
  }

  hint(): void {
    if (!this.hasChallenge()) {
      this.bito.say('bito.code.none');
      return;
    }
    const level = this.hintLevel();
    if (level >= 3) {
      this.bito.say('bito.code.noMore');
      return;
    }
    this.hintLevel.set(level + 1);
    if (level < 2) this.bito.sayText(this.challenge().hints[level]);
    else this.bito.say('bito.code.lastHint', { line: this.challenge().hints[2].en });
  }

  reset(): void {
    this.code.set(this.language.pick(this.challenge().starter));
    this.runs.set(null);
    this.problem.set(null);
    this.bito.say('bito.code.reset');
  }

  private show(result: RunResult): void {
    if (result.kind !== 'done') {
      this.runs.set(null);
      this.problem.set({ kind: result.kind, message: result.kind === 'syntax' ? result.message : undefined });
      this.bito.say(`bito.code.${result.kind}`, { fn: this.challenge().functionName, message: result.kind === 'syntax' ? result.message : '' });
      return;
    }
    const tests = this.challenge().tests;
    const runs = result.runs.map((r, i) => ({ ...r, ok: r.ok && r.got === this.expectedText(tests[i].expected) }));
    this.runs.set(runs);
    this.problem.set(null);

    if (runs.every((r) => r.ok)) {
      const first = !this.solved;
      this.solved = true;
      this.burst.update((n) => n + 1);
      this.progress.markLesson(this.lesson().unitId, this.lesson().id, 'challenge');
      if (first) this.progress.addPoints(10);
      this.bito.say(first ? 'bito.code.allPass' : 'bito.code.allAgain', undefined, true);
      return;
    }
    const k = runs.findIndex((r) => !r.ok);
    const test = tests[k];
    const note = this.challenge().reversedNote;
    const reversed =
      !!note &&
      typeof test.expected === 'string' &&
      test.expected.length > 1 &&
      [...runs[k].raw].reverse().join('') === test.expected;
    this.bito.say(reversed ? 'bito.code.reversed' : 'bito.code.some', {
      pass: runs.filter((r) => r.ok).length,
      total: tests.length,
      input: test.input,
      got: runs[k].got,
      expected: this.expectedText(test.expected),
      note: note ? this.language.pick(note) : '',
    });
  }

  /** How a result looks when the function returns it: text is quoted, numbers are not. */
  protected expectedText(expected: string | number): string {
    return typeof expected === 'number' ? String(expected) : JSON.stringify(expected);
  }
}
