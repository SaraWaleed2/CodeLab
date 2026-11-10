import { BookPage, Localized } from '@core/models';

const LRI = '⁦';
const PDI = '⁩';
const ARABIC = /[؀-ۿ]/;

/**
 * Keeps code the right way round inside Arabic text. In a right-to-left sentence the browser would show
 * `x <= 70` as `70 =< x`, so every run of code is wrapped in a left-to-right isolate.
 */
function isolateCode(text: string): string {
  if (!ARABIC.test(text)) return text.trim() === '' ? text : `${LRI}${text}${PDI}`;
  return text.replace(/[A-Za-z0-9_.[\]()'"*/%=<>!+\-:,; ]+/g, (run) => {
    if (!/[A-Za-z]/.test(run)) return run;
    const lead = /^[\s!,.:;]*/.exec(run)?.[0] ?? '';
    const tail = /[\s!,.]*$/.exec(run.slice(lead.length))?.[0] ?? '';
    const core = run.slice(lead.length, run.length - tail.length);
    return core === '' ? run : `${lead}${LRI}${core}${PDI}${tail}`;
  });
}

/** Short way to write a bilingual text; the Arabic one gets its code isolated so it reads left to right. */
export const L = (ar: string, en: string): Localized => ({ ar: isolateCode(ar), en });

/**
 * A book page that holds one multiple-choice question.
 * `success` is the praise without the points; "+10" is added here so every question reads the same.
 */
export function qpage(
  source: Localized,
  question: Localized,
  options: readonly (string | Localized)[],
  answer: number,
  explanation: Localized,
  success: Localized,
  bito: readonly [Localized, Localized],
): BookPage {
  return {
    source,
    blocks: [
      {
        type: 'question',
        question,
        options,
        answer,
        explanation,
        success: { ar: `${success.ar} +10 نقط`, en: `${success.en} +10 pts` },
      },
    ],
    bito,
  };
}
