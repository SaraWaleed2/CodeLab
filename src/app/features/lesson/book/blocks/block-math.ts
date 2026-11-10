/** Pure helpers that build the book's visuals from a number, so every example is computed, never typed by hand. */

/** All n-bit patterns in order: 2 → ["00","01","10","11"]. */
export function bitCombos(bits: number): string[] {
  return Array.from({ length: 2 ** bits }, (_, i) => i.toString(2).padStart(bits, '0'));
}

export interface PlaceValue {
  power: number;
  weight: number;
  digit: 0 | 1;
}

/** "10111" → one entry per digit with its power of 2 and weight (left to right). */
export function placeValues(binary: string): PlaceValue[] {
  const n = binary.length;
  return [...binary].map((d, i) => ({
    power: n - 1 - i,
    weight: 2 ** (n - 1 - i),
    digit: d === '1' ? 1 : 0,
  }));
}

export function binaryToDecimal(binary: string): number {
  return placeValues(binary).reduce((sum, p) => sum + p.weight * p.digit, 0);
}

export interface DivisionStep {
  dividend: number;
  quotient: number;
  remainder: number;
}

/** The book's method: divide by 2 until 0, keeping remainders. 6 → 6÷2=3 r0, 3÷2=1 r1, 1÷2=0 r1. */
export function divisionSteps(n: number): DivisionStep[] {
  const steps: DivisionStep[] = [];
  for (let x = n; x > 0; x = Math.floor(x / 2)) {
    steps.push({ dividend: x, quotient: Math.floor(x / 2), remainder: x % 2 });
  }
  return steps;
}

/** Remainders read bottom to top. */
export function decimalToBinary(n: number): string {
  if (n === 0) return '0';
  return divisionSteps(n)
    .map((s) => s.remainder)
    .reverse()
    .join('');
}

const SUPERSCRIPT = '⁰¹²³⁴⁵⁶⁷⁸⁹';

/** 10 → "¹⁰" */
export function superscript(n: number): string {
  return [...String(n)].map((d) => SUPERSCRIPT[Number(d)]).join('');
}

/** "10011010" → [{bits:'1001',hex:'9'},{bits:'1010',hex:'A'}]. Short numbers are padded with zeros on the left. */
export function hexGroups(binary: string): { bits: string; hex: string }[] {
  const clean = binary.replace(/[^01]/g, '');
  if (!clean) return [];
  const padded = clean.padStart(Math.ceil(clean.length / 4) * 4, '0');
  const groups: { bits: string; hex: string }[] = [];
  for (let i = 0; i < padded.length; i += 4) {
    const bits = padded.slice(i, i + 4);
    groups.push({ bits, hex: parseInt(bits, 2).toString(16).toUpperCase() });
  }
  return groups;
}

/** Each plain ASCII character of the text with its code in hex and in 8 bits (other characters are skipped). */
export function charCodes(text: string): { ch: string; hex: string; bits: string }[] {
  return [...text]
    .filter((c) => c.charCodeAt(0) >= 32 && c.charCodeAt(0) < 127)
    .map((c) => {
      const code = c.charCodeAt(0);
      return { ch: c, hex: code.toString(16).toUpperCase(), bits: code.toString(2).padStart(8, '0') };
    });
}

/** One column of a binary addition, from left to right. `carryIn` is the 1 carried into it from the column on its right. */
export interface AddColumn {
  a: string;
  b: string;
  sum: string;
  carryIn: boolean;
}

/** Adds two binary numbers the book's way (right to left, carrying 1). Short numbers are padded with zeros. */
export function binaryAdd(a: string, b: string): { columns: AddColumn[]; result: string; overflow: boolean } {
  const x = a.replace(/[^01]/g, '');
  const y = b.replace(/[^01]/g, '');
  const width = Math.max(x.length, y.length);
  if (!width) return { columns: [], result: '', overflow: false };
  const pa = x.padStart(width, '0');
  const pb = y.padStart(width, '0');
  const columns: AddColumn[] = [];
  let carry = 0;
  for (let i = width - 1; i >= 0; i--) {
    const total = Number(pa[i]) + Number(pb[i]) + carry;
    columns.unshift({ a: pa[i], b: pb[i], sum: String(total % 2), carryIn: carry === 1 });
    carry = total >= 2 ? 1 : 0;
  }
  const digits = columns.map((c) => c.sum).join('');
  return { columns, result: carry ? '1' + digits : digits, overflow: carry === 1 };
}

/** One's complement flips every bit; two's complement adds 1 to that (same length, a carry out is dropped). */
export function complements(binary: string): { ones: string; twos: string } {
  const clean = binary.replace(/[^01]/g, '');
  if (!clean) return { ones: '', twos: '' };
  const ones = [...clean].map((d) => (d === '1' ? '0' : '1')).join('');
  const twos = binaryAdd(ones, '1'.padStart(clean.length, '0')).result.slice(-clean.length);
  return { ones, twos };
}

/** Size of digitized sound in bytes: sampling rate × bit depth × channels × seconds ÷ 8. */
export function soundBytes(rateHz: number, bits: number, channels: number, seconds: number): number {
  return (rateHz * bits * channels * seconds) / 8;
}

/** 176400 → "176.4 KB" (1 KB = 1,000 B as in the book). */
export function formatBytes(bytes: number): string {
  if (bytes >= 1_000_000) return String(Number((bytes / 1_000_000).toFixed(2))) + ' MB';
  if (bytes >= 1_000) return String(Number((bytes / 1_000).toFixed(1))) + ' KB';
  return bytes + ' B';
}

/** "AAAABB" → [{ch:'A',n:4},{ch:'B',n:2}]: run-length encoding groups equal neighbours. */
export function runLengths(text: string): { ch: string; n: number }[] {
  const runs: { ch: string; n: number }[] = [];
  for (const ch of text) {
    const last = runs[runs.length - 1];
    if (last && last.ch === ch) last.n++;
    else runs.push({ ch, n: 1 });
  }
  return runs;
}

/** The book writes each run as letter + count: "AAAAABB" → "A5B2". */
export function rleText(text: string): string {
  return runLengths(text)
    .map((r) => r.ch + r.n)
    .join('');
}

/** Size of an uncompressed picture in bytes: width × height × bit depth ÷ 8. */
export function imageBytes(width: number, height: number, bits: number): number {
  return (width * height * bits) / 8;
}

export type Bit = 0 | 1;

export const andGate = (a: Bit, b: Bit): Bit => (a === 1 && b === 1 ? 1 : 0);
export const orGate = (a: Bit, b: Bit): Bit => (a === 1 || b === 1 ? 1 : 0);
export const notGate = (a: Bit): Bit => (a === 1 ? 0 : 1);

/** The book half adder (p.104): C = A AND B, and S = (A OR B) AND NOT C. */
export function halfAdder(a: Bit, b: Bit): { s: Bit; c: Bit } {
  const c = andGate(a, b);
  return { s: andGate(orGate(a, b), notGate(c)), c };
}

/** "192.168.3.1" → 4 numbers (each clamped to 0–255) with their 8-bit binary. */
export function ipOctets(address: string): { n: number; bits: string }[] {
  const parts = address.split('.').slice(0, 4);
  while (parts.length < 4) parts.push('0');
  return parts.map((p) => {
    const n = Math.min(255, Math.max(0, Math.floor(Number(p.replace(/[^0-9]/g, '')) || 0)));
    return { n, bits: n.toString(2).padStart(8, '0') };
  });
}

/** Seconds to move a file: size (MB) × 8 million bits ÷ (speed in Mbps × efficiency). 1 MB = 1,000 KB as in the book. */
export function transferSeconds(sizeMB: number, speedMbps: number, efficiency: number): number {
  return (sizeMB * 8) / (speedMbps * efficiency);
}

/** "6, 9 3" → [6, 9, 3] (commas, spaces and Arabic commas all work; anything else is ignored). */
export function parseNumbers(text: string): number[] {
  return (text.match(/-?\d+(?:\.\d+)?/g) ?? []).map(Number).slice(0, 40);
}

export function mean(xs: number[]): number {
  return xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0;
}

/** The middle value of the sorted data; with an even count, the mean of the two middle values (book p.138). */
export function median(xs: number[]): number {
  if (!xs.length) return 0;
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

/** The most frequent value(s). */
export function modes(xs: number[]): number[] {
  const counts = new Map<number, number>();
  for (const x of xs) counts.set(x, (counts.get(x) ?? 0) + 1);
  const top = Math.max(0, ...counts.values());
  return top > 1 || counts.size === 1 ? [...counts].filter(([, c]) => c === top).map(([v]) => v).sort((a, b) => a - b) : [];
}

/** Book method (p.142): sort, find the median, then the medians of the lower and upper halves. */
export function quartiles(xs: number[]): { min: number; q1: number; median: number; q3: number; max: number } {
  if (!xs.length) return { min: 0, q1: 0, median: 0, q3: 0, max: 0 };
  const s = [...xs].sort((a, b) => a - b);
  const half = Math.floor(s.length / 2);
  const lower = s.slice(0, half);
  const upper = s.slice(s.length % 2 ? half + 1 : half);
  return { min: s[0], q1: median(lower), median: median(s), q3: median(upper), max: s[s.length - 1] };
}

/** Frequency table: classes of equal width starting at `start` ("12 or more to under 15"). */
export function frequencyBins(xs: number[], start: number, width: number): { from: number; to: number; count: number }[] {
  if (!xs.length || width <= 0) return [];
  const last = Math.max(...xs);
  const bins: { from: number; to: number; count: number }[] = [];
  for (let from = start; from <= last; from += width) {
    bins.push({ from, to: from + width, count: xs.filter((x) => x >= from && x < from + width).length });
  }
  return bins;
}

/** Population variance as in the book (p.145): the mean of the squared distances from the mean. */
export function variance(xs: number[]): number {
  if (!xs.length) return 0;
  const m = mean(xs);
  return mean(xs.map((x) => (x - m) ** 2));
}

export function stdDev(xs: number[]): number {
  return Math.sqrt(variance(xs));
}

/** Correlation coefficient r between two lists (−1 ≤ r ≤ 1), like the spreadsheet function CORREL. */
export function correlation(xs: number[], ys: number[]): number {
  const n = Math.min(xs.length, ys.length);
  if (n < 2) return 0;
  const mx = mean(xs.slice(0, n));
  const my = mean(ys.slice(0, n));
  let sxy = 0;
  let sxx = 0;
  let syy = 0;
  for (let i = 0; i < n; i++) {
    sxy += (xs[i] - mx) * (ys[i] - my);
    sxx += (xs[i] - mx) ** 2;
    syy += (ys[i] - my) ** 2;
  }
  return sxx && syy ? sxy / Math.sqrt(sxx * syy) : 0;
}

/** Least-squares line y = a x + b through the points (book p.151). */
export function linearFit(xs: number[], ys: number[]): { a: number; b: number } {
  const n = Math.min(xs.length, ys.length);
  if (n < 2) return { a: 0, b: 0 };
  const mx = mean(xs.slice(0, n));
  const my = mean(ys.slice(0, n));
  let sxy = 0;
  let sxx = 0;
  for (let i = 0; i < n; i++) {
    sxy += (xs[i] - mx) * (ys[i] - my);
    sxx += (xs[i] - mx) ** 2;
  }
  const a = sxx ? sxy / sxx : 0;
  return { a, b: my - a * mx };
}

/** A random dot (x, y between 0 and 1) lies inside the quarter circle when x² + y² ≤ 1 (book p.161). */
export function insideQuarterCircle(x: number, y: number): boolean {
  return x * x + y * y <= 1;
}

/** Monte Carlo estimate of pi: 4 × (dots inside the quarter circle) ÷ (all dots). */
export function estimatePi(inside: number, total: number): number {
  return total ? (4 * inside) / total : 0;
}

export interface QueueTimes {
  arrive: number;
  start: number;
  end: number;
  wait: number;
}

/** One server, first come first served: each customer starts when they have arrived and the previous one has finished. */
export function queueTimes(gap: number, service: number, customers: number): QueueTimes[] {
  const rows: QueueTimes[] = [];
  let free = 0;
  for (let i = 0; i < customers; i++) {
    const arrive = i * gap;
    const start = Math.max(arrive, free);
    const end = start + service;
    rows.push({ arrive, start, end, wait: start - arrive });
    free = end;
  }
  return rows;
}

/** Compares a typed answer with an accepted one: spaces are ignored, letters are not (Python is case-sensitive). */
export function sameCode(typed: string, accepted: string): boolean {
  const clean = (t: string) => t.replace(/\s+/g, '').replace(/"/g, "'");
  return clean(typed) === clean(accepted);
}

/** Splits program text into lines of pieces: plain text, or a blank (its number) for each {{n}}. */
export function fillLines(code: string): { text: string; blank: number | null }[][] {
  return code.split('\n').map((line) =>
    line
      .split(/\{\{(\d+)\}\}/)
      .map((part, i) => (i % 2 ? { text: '', blank: Number(part) } : { text: part, blank: null }))
      .filter((p) => p.blank !== null || p.text !== ''),
  );
}
