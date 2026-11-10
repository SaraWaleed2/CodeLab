import { Localized } from './lang.model';

/**
 * A lesson is data only: the explainer book's pages, then an activity (a game) and/or a code challenge.
 * Every page names where it comes from in the ministry book.
 */
export interface Lesson {
  unitId: number;
  /** Lesson number as written in the book, e.g. "6-2". */
  id: string;
  title: Localized;
  /** Book pages the lesson covers, e.g. "64 – 65". */
  bookPages: string;
  pages: readonly BookPage[];
  game?: Game;
  challenge?: CodeChallenge;
}

export interface BookPage {
  /** Where the page comes from in the book, e.g. "النقاط الرئيسية، ص 64". The cover has none. */
  source?: Localized;
  cover?: boolean;
  blocks: readonly Block[];
  /** What Bito says on this page: the first explanation, and "explain it again". */
  bito: readonly [Localized, Localized];
}

/** The four Creative Commons conditions (unit 2): attribution, non-commercial, no derivatives, share alike. */
export type CcCode = 'BY' | 'NC' | 'ND' | 'SA';

/** A term card: title, optional English term, one simple line, optional example. */
export interface TermCard {
  title: Localized;
  /** The English term as printed in the book, e.g. "Persistence". */
  en?: string;
  text: Localized;
  example?: Localized;
  /** "no" draws it as a don't (red cross) instead of a neutral card. */
  tone?: 'no';
  /** Draws a Creative Commons symbol on the card. */
  cc?: CcCode;
}

/** One part of the computer diagram. */
export interface ComputerPart {
  id: 'input' | 'cu' | 'alu' | 'main' | 'storage' | 'output';
  name: Localized;
  text: Localized;
  example: Localized;
}

/** One piece of an address, e.g. "www.mext.go.jp" inside a URL. */
export interface UrlPart {
  text: string;
  name: Localized;
  meaning: Localized;
}

/** One data set for the scatter plot: points are [x, y]. */
export interface ScatterSet {
  name: Localized;
  points: readonly (readonly [number, number])[];
}

/** One step of a traced program: the line being run (0-based), the variables, and everything printed so far. */
export interface TraceStep {
  line: number;
  vars?: readonly { name: string; value: string }[];
  out?: readonly string[];
}

/** One person's part of a sequence, e.g. everything the sender does. */
export interface SequenceGroup {
  who: Localized;
  steps: readonly SequenceStep[];
}

export interface SequenceStep {
  text: Localized;
  /** A sample value shown in code font under the step, e.g. a hash value "06fe3f3e". */
  sample?: string;
}

/** One kind of database (unit 9), drawn as its shape: a tree, a web or a stack of tables. */
export interface DbShape extends TermCard {
  shape: 'tree' | 'network' | 'tables';
}

/** One row of the students table in the relational-database lab (unit 9). */
export interface DbStudent {
  id: string;
  name: Localized;
  /** The club code, e.g. "C1"; it links the row to the clubs table. */
  club: string;
}

/** One row of the clubs table in the relational-database lab (unit 9). */
export interface DbClub {
  id: string;
  name: Localized;
}

/** One bar of a "how long?" comparison. */
export interface DurationBar {
  label: Localized;
  years: number;
  /** Small note under the bar, e.g. "from the filing date". */
  note?: Localized;
  /** The number shown on the bar, when it isn't just the years (e.g. "+50"). */
  shown?: string;
}

/** The building blocks a book page is made of. New lessons reuse them; new kinds get added here. */
export type Block =
  | { type: 'heading'; text?: Localized; code?: string }
  | { type: 'lead'; text: Localized }
  | { type: 'chips'; items: readonly Localized[] }
  | { type: 'memo'; text: Localized; code?: string }
  | { type: 'tag'; text: Localized }
  /** A ladder of steps, each one more meaningful than the last (e.g. data → information → knowledge). */
  | { type: 'steps'; items: readonly TermCard[] }
  /** Side-by-side term cards (properties, kinds, rules). */
  | { type: 'cards'; items: readonly TermCard[] }
  /** Coloured boxes with examples inside (e.g. the three kinds of media). */
  | { type: 'bins'; items: readonly (TermCard & { examples: readonly Localized[] })[] }
  /** Horizontal bars comparing durations, longest bar = longest duration. */
  | { type: 'durations'; items: readonly DurationBar[] }
  /** A pyramid of layers, top layer first (e.g. policy → standards → procedures). */
  | { type: 'pyramid'; levels: readonly TermCard[] }
  /** Numbered steps done by different people (sender / receiver), stepped through one at a time. */
  | { type: 'sequence'; groups: readonly SequenceGroup[] }
  /** A small comparison table: one column per thing compared, one row per property. */
  | { type: 'compare'; columns: readonly Localized[]; rows: readonly { label: Localized; cells: readonly Localized[] }[] }
  /** Try-it box: type a binary number and see it split into groups of 4 bits, each as one hex digit. */
  | { type: 'hex-lab'; binary: string }
  /** Try-it box: type a word and see each character's ASCII code in hex and binary. */
  | { type: 'char-lab'; word: string }
  /** Try-it box: two binary numbers added column by column, showing every carry. */
  | { type: 'bin-add'; a: string; b: string }
  /** Try-it box: a binary number, its one's complement (flip every bit) and two's complement (+1). */
  | { type: 'complement-lab'; binary: string }
  /** Try-it box: sliders for sampling rate, bit depth, channels and seconds; shows the sound's data size. */
  | { type: 'sound-lab' }
  /** Try-it box: three sliders (red, green, blue, 0–255) mixing a colour; shows the 24 bits. */
  | { type: 'rgb-lab' }
  /** Try-it box: type letters and see them compressed with run-length encoding (letter + count). */
  | { type: 'rle-lab'; text: string }
  /** Try-it box: pick width, height and bit depth; shows the image's data size. */
  | { type: 'image-lab' }
  /** Clickable computer diagram: tap a part to read what it does. */
  | { type: 'computer-map'; parts: readonly ComputerPart[] }
  /** Try-it box: toggle inputs A and B and see the outputs of AND, OR and NOT. */
  | { type: 'logic-lab' }
  /** Try-it box: the book's half adder; toggle A and B and see S and C. */
  | { type: 'adder-lab' }
  /** Try-it box: four numbers (0–255) of an IPv4 address shown as 32 bits. */
  | { type: 'ip-lab'; address: string }
  /** An address split into labelled parts; tap a part to read what it means. */
  | { type: 'url-lab'; parts: readonly UrlPart[] }
  /** Try-it box: file size, line speed and efficiency; shows how long the transfer takes. */
  | { type: 'speed-lab' }
  /** The kinds of database, each drawn as its shape; tap one to read what it is. */
  | { type: 'db-shapes'; items: readonly DbShape[] }
  /**
   * Try-it box: the book's students table. "parts" lights up a record (row) and a field (column);
   * "ops" runs selection (one club only), projection (names only) and join (with the clubs table).
   */
  | { type: 'db-lab'; show: 'parts' | 'ops'; students: readonly DbStudent[]; clubs: readonly DbClub[]; club: string }
  /** Try-it box: type some numbers; shows them sorted with the mean, median and mode (and optionally a histogram). */
  | { type: 'data-lab'; values: string; histogram?: { start: number; width: number } }
  /** Try-it box: type some numbers; shows the five-number summary and draws the box-and-whisker plot. */
  | { type: 'boxplot-lab'; values: string }
  /** Try-it box: type numbers; shows the book's table x, x - mean, (x - mean)^2 with the variance and standard deviation. */
  | { type: 'spread-lab'; values: string }
  /** Scatter plot with a choice of data sets; shows the correlation coefficient r and (optionally) the regression line. */
  | { type: 'scatter-lab'; sets: readonly ScatterSet[] }
  /** Try-it box: throw random dots in a square and estimate pi with the Monte Carlo method (4n / N). */
  | { type: 'pi-lab' }
  /** Try-it box: the book's queue chart; change the gap between arrivals and the service time. */
  | { type: 'queue-lab' }
  /** Step through a short Python program line by line, watching the variables and the output change. */
  /** A live web editor (unit 13): the book's HTML, CSS and JavaScript, editable, with the running page beside it. */
  | { type: 'web-lab'; html: string; css?: string; js?: string }
  | { type: 'trace-lab'; code: readonly string[]; steps: readonly TraceStep[] }
  /** Complete a Python program: write {{0}}, {{1}}... in the code for each blank; answers[i] lists what is accepted. */
  | { type: 'fill-code'; code: string; answers: readonly (readonly string[])[] }
  | { type: 'bit-bulbs' }
  | { type: 'bit-combos'; maxBits: number }
  | { type: 'byte-box' }
  | { type: 'unit-stairs'; units: readonly string[]; factor: number }
  | { type: 'number-systems'; decimalExample: string; binaryExample: string }
  | { type: 'place-values'; binary: string }
  | { type: 'division-ladder'; n: number }
  | QuestionBlock
  | { type: 'recap'; items: readonly { code: string; text?: Localized }[] }
  | { type: 'next-steps' };

export interface QuestionBlock {
  type: 'question';
  question: Localized;
  /** Plain strings are shown as code/numbers (e.g. "6 bit"); Localized ones as words. */
  options: readonly (string | Localized)[];
  /** Index of the correct option. */
  answer: number;
  /** The book's explanation, shown when the student picks a wrong option. */
  explanation: Localized;
  success: Localized;
}

/** The lesson's activity. Each kind has its own game screen. */
export type Game = BulbsGame | SortGame | ScenarioGame | MatchGame | OrderGame;

/** Put the steps of a process in the right order, round after round. */
export interface OrderGame {
  kind: 'order';
  rounds: readonly OrderRound[];
}

export interface OrderRound {
  title: Localized;
  source: Localized;
  /** The steps, written in the RIGHT order (the game shuffles them). */
  steps: readonly Localized[];
}

/** Match each card on one side with its meaning on the other, round after round. */
export interface MatchGame {
  kind: 'match';
  rounds: readonly MatchRound[];
}

export interface MatchRound {
  title: Localized;
  source: Localized;
  pairs: readonly MatchPair[];
}

export interface MatchPair {
  /** The card to match: words, or a Creative Commons symbol. */
  left: { text?: Localized; cc?: CcCode };
  right: Localized;
}

/** Build each number by switching bulbs on. */
export interface BulbsGame {
  kind: 'bulbs';
  targets: readonly { n: number; source: Localized }[];
}

/** Put each item in the right box, round after round. */
export interface SortGame {
  kind: 'sort';
  rounds: readonly SortRound[];
}

export interface SortRound {
  title: Localized;
  source: Localized;
  bins: readonly { id: string; label: Localized }[];
  items: readonly { text: Localized; bin: string }[];
}

/** "What would you do?": decide if each action is right or wrong; Bito explains with the book's reason. */
export interface ScenarioGame {
  kind: 'scenarios';
  items: readonly Scenario[];
}

export interface Scenario {
  text: Localized;
  ok: boolean;
  why: Localized;
  source: Localized;
}

export interface CodeChallenge {
  title: Localized;
  intro: Localized;
  source: Localized;
  functionName: string;
  /** Starter code; the comment marks the missing line. */
  starter: Localized;
  /** `expected` is a string for functions that return text, a number for ones that return a number. */
  tests: readonly { input: number; expected: string | number }[];
  /** Shown when a text answer comes out reversed, e.g. "remainders go at the start". Optional. */
  reversedNote?: Localized;
  /** A regular expression (source) that must not appear in the student's code, with how to show it. */
  banned: { pattern: string; label: string };
  hints: readonly [Localized, Localized, Localized];
}
