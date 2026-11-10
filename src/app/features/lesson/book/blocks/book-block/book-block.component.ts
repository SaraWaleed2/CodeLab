import { ChangeDetectionStrategy, Component, computed, inject, input, linkedSignal, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Block } from '@core/models';
import { LanguageService } from '@core/services';
import { MemoStickerComponent } from '@shared/ui/memo-sticker/memo-sticker.component';
import { CcIconComponent } from '@shared/ui/cc-icon/cc-icon.component';
import { QuestionBlockComponent } from '../question-block/question-block.component';
import { DbShapesComponent } from '../db-shapes/db-shapes.component';
import { DbLabComponent } from '../db-lab/db-lab.component';
import { WebLabComponent } from '../web-lab/web-lab.component';
import {
  binaryAdd,
  binaryToDecimal,
  bitCombos,
  charCodes,
  complements,
  correlation,
  andGate,
  Bit,
  formatBytes,
  frequencyBins,
  imageBytes,
  insideQuarterCircle,
  linearFit,
  mean,
  median,
  modes,
  parseNumbers,
  quartiles,
  queueTimes,
  ipOctets,
  decimalToBinary,
  divisionSteps,
  fillLines,
  estimatePi,
  halfAdder,
  hexGroups,
  notGate,
  orGate,
  placeValues,
  rleText,
  sameCode,
  runLengths,
  soundBytes,
  stdDev,
  variance,
  transferSeconds,
  superscript,
} from '../block-math';

/** Draws one block of a book page. Simple blocks are drawn here; the question has its own component. */
@Component({
  selector: 'app-book-block',
  imports: [RouterLink, TranslatePipe, MemoStickerComponent, CcIconComponent, QuestionBlockComponent, DbShapesComponent, DbLabComponent, WebLabComponent],
  templateUrl: './book-block.component.html',
  styleUrl: './book-block.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookBlockComponent {
  readonly block = input.required<Block>();
  /** Correct answers so far (shown on the last page). */
  readonly score = input(0);
  readonly questions = input(0);
  /** What the last page links to: the lesson's game kind (if any) and whether it has a code challenge. */
  readonly gameKind = input<string | null>(null);
  readonly hasChallenge = input(false);

  readonly answered = output<boolean>();
  /** The student tapped the 0 or 1 bulb on the "bit" page. */
  readonly bitTapped = output<boolean>();

  protected readonly language = inject(LanguageService);
  protected readonly bitOn = signal(true);

  // Computed visuals (only used by the matching block type).
  protected readonly combos = computed(() => {
    const b = this.block();
    if (b.type !== 'bit-combos') return [];
    return Array.from({ length: b.maxBits }, (_, i) => ({ bits: i + 1, items: bitCombos(i + 1) }));
  });
  /** A sequence's steps numbered 1…n across all its groups (sender 1–3, receiver 4–6, …). */
  protected readonly sequence = computed(() => {
    const b = this.block();
    if (b.type !== 'sequence') return null;
    let n = 0;
    const groups = b.groups.map((g) => ({ who: g.who, steps: g.steps.map((s) => ({ ...s, n: ++n })) }));
    return { groups, total: n };
  });
  /** How many steps of a sequence are lit so far. */
  protected readonly seqStep = signal(1);

  nextSeq(total: number): void {
    this.seqStep.update((s) => Math.min(total, s + 1));
  }

  resetSeq(): void {
    this.seqStep.set(1);
  }

  /** Pyramid layers get wider towards the bottom: 45% at the top, 100% at the base. */
  levelWidth(index: number, count: number): number {
    return count <= 1 ? 100 : Math.round(45 + (index * 55) / (count - 1));
  }

  /** Bars scaled so the longest duration fills the track. */
  protected readonly durationBars = computed(() => {
    const b = this.block();
    if (b.type !== 'durations') return [];
    const longest = Math.max(...b.items.map((i) => i.years));
    return b.items.map((i) => ({
      ...i,
      percent: Math.max(8, Math.round((i.years / longest) * 100)),
      shown: i.shown ?? String(i.years),
    }));
  });
  protected readonly places = computed(() => {
    const b = this.block();
    if (b.type !== 'place-values') return null;
    const values = placeValues(b.binary).map((p) => ({ ...p, sup: superscript(p.power) }));
    const terms = values.filter((p) => p.digit).map((p) => p.weight);
    return { values, terms: terms.join(' + '), total: binaryToDecimal(b.binary) };
  });
  protected readonly division = computed(() => {
    const b = this.block();
    if (b.type !== 'division-ladder') return null;
    return { steps: divisionSteps(b.n), result: decimalToBinary(b.n) };
  });

  /** The text boxes of the two try-it blocks; they start with the lesson's example. */
  protected readonly hexText = linkedSignal(() => {
    const b = this.block();
    return b.type === 'hex-lab' ? b.binary : '';
  });
  protected readonly charText = linkedSignal(() => {
    const b = this.block();
    return b.type === 'char-lab' ? b.word : '';
  });
  protected readonly hex = computed(() => hexGroups(this.hexText()));
  protected readonly chars = computed(() => charCodes(this.charText()));
  protected readonly hexValue = computed(() => this.hex().map((g) => g.hex).join(''));

  protected readonly addA = linkedSignal(() => {
    const b = this.block();
    return b.type === 'bin-add' ? b.a : '';
  });
  protected readonly addB = linkedSignal(() => {
    const b = this.block();
    return b.type === 'bin-add' ? b.b : '';
  });
  protected readonly addition = computed(() => binaryAdd(this.addA(), this.addB()));
  protected readonly compText = linkedSignal(() => {
    const b = this.block();
    return b.type === 'complement-lab' ? b.binary : '';
  });
  protected readonly comp = computed(() => complements(this.compText()));

  protected readonly rates = [8000, 22050, 44100, 48000];
  protected readonly depths = [8, 16, 24];
  protected readonly rate = signal(44100);
  protected readonly depth = signal(16);
  protected readonly channels = signal(2);
  protected readonly seconds = signal(1);
  protected readonly soundSize = computed(() => soundBytes(this.rate(), this.depth(), this.channels(), this.seconds()));
  protected readonly soundSizeText = computed(() => formatBytes(this.soundSize()));
  protected readonly soundBits = computed(() => this.rate() * this.depth() * this.channels() * this.seconds());

  protected readonly red = signal(255);
  protected readonly green = signal(160);
  protected readonly blue = signal(0);
  protected readonly colour = computed(() => `rgb(${this.red()}, ${this.green()}, ${this.blue()})`);
  protected readonly colourBits = computed(() =>
    [this.red(), this.green(), this.blue()].map((v) => v.toString(2).padStart(8, '0')),
  );

  protected readonly rleInput = linkedSignal(() => {
    const b = this.block();
    return b.type === 'rle-lab' ? b.text : '';
  });
  protected readonly runs = computed(() => runLengths(this.rleInput()));
  protected readonly rle = computed(() => rleText(this.rleInput()));
  protected readonly rlePercent = computed(() => {
    const n = this.rleInput().length;
    return n ? Math.round((this.rle().length / n) * 100) : 0;
  });

  protected readonly widths = [640, 1280, 1920];
  protected readonly heights = [360, 720, 1080];
  protected readonly imgW = signal(1280);
  protected readonly imgH = signal(720);
  protected readonly imgBits = signal(24);
  protected readonly imgBytes = computed(() => imageBytes(this.imgW(), this.imgH(), this.imgBits()));
  protected readonly imgBytesText = computed(() => formatBytes(this.imgBytes()));

  onRleInput(event: Event): void {
    this.rleInput.set((event.target as HTMLInputElement).value.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 30));
  }

  protected readonly gateA = signal<Bit>(1);
  protected readonly gateB = signal<Bit>(0);
  protected readonly gates = computed(() => ({
    and: andGate(this.gateA(), this.gateB()),
    or: orGate(this.gateA(), this.gateB()),
    not: notGate(this.gateA()),
  }));
  protected readonly adder = computed(() => halfAdder(this.gateA(), this.gateB()));
  protected readonly selectedPart = signal<string | null>(null);

  toggleGate(which: 'a' | 'b'): void {
    (which === 'a' ? this.gateA : this.gateB).update((v) => (v === 1 ? 0 : 1));
  }

  /** The part the student tapped on the computer diagram (or the first one). */
  protected partOf(parts: readonly { id: string }[]): string {
    return this.selectedPart() ?? parts[0].id;
  }

  protected readonly ipText = linkedSignal(() => {
    const b = this.block();
    return b.type === 'ip-lab' ? b.address : '';
  });
  protected readonly ip = computed(() => ipOctets(this.ipText()));
  protected readonly selectedUrl = signal(0);

  protected readonly speedSizes = [1, 20, 100, 1000];
  protected readonly speedRates = [10, 40, 100, 1000];
  protected readonly linkSize = signal(20);
  protected readonly linkRate = signal(40);
  protected readonly linkEff = signal(100);
  /** Rounded to 2 decimals so values like 2.6666… stay readable. */
  protected readonly linkSeconds = computed(() =>
    Number(transferSeconds(this.linkSize(), this.linkRate(), this.linkEff() / 100).toFixed(2)),
  );

  onIpInput(event: Event): void {
    this.ipText.set((event.target as HTMLInputElement).value.replace(/[^0-9.]/g, '').slice(0, 15));
  }

  protected readonly dataText = linkedSignal(() => {
    const b = this.block();
    return b.type === 'data-lab' || b.type === 'boxplot-lab' || b.type === 'spread-lab' ? b.values : '';
  });
  protected readonly dataNums = computed(() => parseNumbers(this.dataText()));
  protected readonly dataSorted = computed(() => [...this.dataNums()].sort((a, b) => a - b));
  protected readonly stats = computed(() => {
    const xs = this.dataNums();
    const round = (n: number) => Number(n.toFixed(2));
    return { n: xs.length, mean: round(mean(xs)), median: round(median(xs)), mode: modes(xs) };
  });
  protected readonly bins = computed(() => {
    const b = this.block();
    if (b.type !== 'data-lab' || !b.histogram) return [];
    const list = frequencyBins(this.dataNums(), b.histogram.start, b.histogram.width);
    const top = Math.max(1, ...list.map((x) => x.count));
    return list.map((x) => ({ ...x, height: Math.round((x.count / top) * 100) }));
  });
  protected readonly five = computed(() => quartiles(this.dataNums()));
  /** Where a value sits along the box plot axis, as a percentage (0–100). */
  protected plotPos(v: number): number {
    const f = this.five();
    return f.max === f.min ? 50 : 4 + ((v - f.min) / (f.max - f.min)) * 92;
  }

  onDataInput(event: Event): void {
    this.dataText.set((event.target as HTMLInputElement).value.slice(0, 120));
  }

  protected readonly spreadRows = computed(() => {
    const xs = this.dataNums();
    const m = mean(xs);
    return xs.map((x) => ({ x, dev: Number((x - m).toFixed(2)), sq: Number(((x - m) ** 2).toFixed(2)) }));
  });
  protected readonly spread = computed(() => {
    const xs = this.dataNums();
    return { mean: Number(mean(xs).toFixed(2)), variance: Number(variance(xs).toFixed(2)), sd: Number(stdDev(xs).toFixed(2)) };
  });

  protected readonly scatterIndex = signal(0);
  protected readonly showLine = signal(false);
  /** The chosen scatter set, scaled to a 300 × 200 drawing area, with r and the regression line. */
  protected readonly scatter = computed(() => {
    const b = this.block();
    if (b.type !== 'scatter-lab') return null;
    const set = b.sets[Math.min(this.scatterIndex(), b.sets.length - 1)];
    const xs = set.points.map((p) => p[0]);
    const ys = set.points.map((p) => p[1]);
    const [x0, x1] = [Math.min(...xs), Math.max(...xs)];
    const [y0, y1] = [Math.min(...ys), Math.max(...ys)];
    const px = (x: number) => 20 + ((x - x0) / (x1 - x0 || 1)) * 260;
    const py = (y: number) => 180 - ((y - y0) / (y1 - y0 || 1)) * 160;
    const fit = linearFit(xs, ys);
    return {
      points: set.points.map((p) => ({ cx: px(p[0]), cy: py(p[1]) })),
      r: Number(correlation(xs, ys).toFixed(2)),
      line: { x1: px(x0), y1: py(fit.a * x0 + fit.b), x2: px(x1), y2: py(fit.a * x1 + fit.b) },
      equation: `y = ${Number(fit.a.toFixed(2))}x ${fit.b < 0 ? '−' : '+'} ${Math.abs(Number(fit.b.toFixed(2)))}`,
    };
  });

  protected readonly piDots = signal<{ x: number; y: number; inside: boolean }[]>([]);
  protected readonly piInside = computed(() => this.piDots().filter((d) => d.inside).length);
  protected readonly piValue = computed(() => Number(estimatePi(this.piInside(), this.piDots().length).toFixed(3)));

  throwDots(count = 100): void {
    const fresh = Array.from({ length: count }, () => {
      const x = Math.random();
      const y = Math.random();
      return { x, y, inside: insideQuarterCircle(x, y) };
    });
    this.piDots.update((d) => [...d, ...fresh].slice(-5000));
  }

  resetDots(): void {
    this.piDots.set([]);
  }

  protected readonly qGap = signal(20);
  protected readonly qService = signal(40);
  protected readonly queue = computed(() => {
    const rows = queueTimes(this.qGap(), this.qService(), 4);
    const total = Math.max(...rows.map((r) => r.end));
    const longest = rows.reduce((best, r, i) => (r.wait > rows[best].wait ? i : best), 0);
    return {
      total,
      longest,
      rows: rows.map((r, i) => ({
        ...r,
        n: i + 1,
        waitLeft: (r.arrive / total) * 100,
        waitWidth: ((r.start - r.arrive) / total) * 100,
        serveLeft: (r.start / total) * 100,
        serveWidth: ((r.end - r.start) / total) * 100,
      })),
    };
  });

  /** Trace lab: which step of the program we are on. */
  protected readonly traceIndex = linkedSignal(() => {
    this.block();
    return 0;
  });
  protected readonly trace = computed(() => {
    const b = this.block();
    if (b.type !== 'trace-lab') return null;
    const step = b.steps[Math.min(this.traceIndex(), b.steps.length - 1)];
    return { step, total: b.steps.length, last: this.traceIndex() >= b.steps.length - 1 };
  });

  traceMove(delta: number): void {
    const b = this.block();
    if (b.type !== 'trace-lab') return;
    this.traceIndex.update((i) => Math.max(0, Math.min(b.steps.length - 1, i + delta)));
  }

  /** Fill-code lab: what the student typed in each blank, and whether we have checked yet. */
  protected readonly fillValues = linkedSignal<Record<number, string>>(() => {
    this.block();
    return {};
  });
  protected readonly fillChecked = linkedSignal(() => {
    this.block();
    return false;
  });
  protected readonly fillShown = linkedSignal(() => {
    this.block();
    return false;
  });
  protected readonly fillParts = computed(() => {
    const b = this.block();
    return b.type === 'fill-code' ? fillLines(b.code) : [];
  });

  fillType(i: number, event: Event): void {
    this.fillValues.update((v) => ({ ...v, [i]: (event.target as HTMLInputElement).value }));
    this.fillChecked.set(false);
  }

  fillRight(i: number): boolean {
    const b = this.block();
    return b.type === 'fill-code' && (b.answers[i] ?? []).some((a) => sameCode(this.fillValues()[i] ?? '', a));
  }

  protected readonly fillAllRight = computed(() => {
    const b = this.block();
    return b.type === 'fill-code' && b.answers.every((_, i) => this.fillRight(i));
  });

  /** Width (in characters) of a blank: it grows with what is typed in it. */
  blankWidth(i: number): number {
    const text = this.fillShown() ? this.fillShow(i) : (this.fillValues()[i] ?? '');
    return Math.max(4, text.length + 2);
  }

  fillShow(i: number): string {
    const b = this.block();
    return b.type === 'fill-code' ? (b.answers[i]?.[0] ?? '') : '';
  }

  onBinInput(target: 'a' | 'b' | 'comp', event: Event): void {
    const v = (event.target as HTMLInputElement).value.replace(/[^01]/g, '').slice(0, 8);
    (target === 'a' ? this.addA : target === 'b' ? this.addB : this.compText).set(v);
  }

  onHexInput(event: Event): void {
    this.hexText.set((event.target as HTMLInputElement).value.replace(/[^01]/g, '').slice(0, 32));
  }

  onCharInput(event: Event): void {
    this.charText.set((event.target as HTMLInputElement).value.slice(0, 12));
  }

  tapBit(on: boolean): void {
    this.bitOn.set(on);
    this.bitTapped.emit(on);
  }
}
