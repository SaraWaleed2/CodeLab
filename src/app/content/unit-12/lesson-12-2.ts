import { Lesson, TraceStep } from '@core/models';
import { L, qpage } from './helpers';

const AB = [
  { name: 'a', value: '5' },
  { name: 'b', value: '3' },
];
const ARITH_OUT = ['8', '2', '15', '1.6666666666666667', '1', '2', '125'];
/** Lines 0–1 set a and b; each later line prints one more result. */
const ARITH_STEPS: readonly TraceStep[] = [
  { line: 0, vars: [AB[0]] },
  { line: 1, vars: AB },
  ...ARITH_OUT.map((_, k): TraceStep => ({ line: k + 2, vars: AB, out: ARITH_OUT.slice(0, k + 1) })),
];

/**
 * Lesson 12-2 "أساسيات البرمجة [1]" — ministry book pp. 172–175 (Python).
 * Book notes:
 * - p.172: print(), variables, the "=" assignment operator and the arithmetic operators.
 * - The book writes 5 / 3 as 1.66666; real Python prints 1.6666666666666667, which the trace lab shows.
 * - p.173 prints "(a) = 6" with brackets in a question; the site writes "a = 6".
 */
export const LESSON_12_2: Lesson = {
  unitId: 12,
  id: '12-2',
  title: L('أساسيات البرمجة (١): المتغيرات والعمليات الحسابية', 'Programming Basics (1): Variables and Arithmetic'),
  bookPages: '172 – 175',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        L('أهلًا! النهارده هنكتب أول كود Python: نعرض كلام، نخزّن قيم، ونحسب.', 'Hi! Today we write our first Python: show text, store values and calculate.'),
        L('هتشوف الكود بيتنفّذ سطر سطر وإنت اللي تتحكم.', 'You will watch the code run line by line, and you are in control.'),
      ],
    },
    {
      source: L('النقاط الرئيسية (1) [print]، ص 172', 'Key Points (1) [print], p. 172'),
      blocks: [
        { type: 'heading', text: L('print: اعرض على الشاشة', 'print: show it on the screen') },
        {
          type: 'cards',
          items: [
            { title: L('print( )', 'print( )'), en: 'print', text: L('بتعرض سلسلة أحرف أو قيمة جوه الأقواس.', 'Shows a string of characters or a value inside the brackets.'), example: L("print('Hello Khalid') بتعرض: Hello Khalid", "print('Hello Khalid') shows: Hello Khalid") },
            { title: L('علامات التنصيص', 'Quotation marks'), text: L("الكلام لازم يكون بين ' ' أو \" \". الأرقام من غير تنصيص.", "Text must sit between ' ' or \" \". Numbers need none."), example: L('print(2023) بتعرض: 2023', 'print(2023) shows: 2023') },
          ],
        },
        { type: 'fill-code', code: 'print({{0}})', answers: [["'Hello Khalid'", '"Hello Khalid"']] },
      ],
      bito: [
        L('اكتب الكلام بين تنصيص عشان بايثون يعرف إنه نص مش أمر.', 'Put text in quotes so Python knows it is text, not a command.'),
        L('جرّب تكتب Hello Khalid بتنصيص.', 'Try typing Hello Khalid with quotes.'),
      ],
    },
    {
      source: L('النقاط الرئيسية (2) و(3)، ص 172', 'Key Points (2) and (3), p. 172'),
      blocks: [
        { type: 'heading', text: L('المتغيرات وعامل التعيين', 'Variables and assignment') },
        {
          type: 'cards',
          items: [
            { title: L('متغير (Variable)', 'Variable'), en: 'Variable', text: L('مربع بنخزّن فيه بيانات ونستدعيها بعدين. له اسم.', 'A box where we store data and call it back later. It has a name.'), example: L("city = 'Cairo' ← الصندوق city جواه Cairo", "city = 'Cairo' → the box city holds Cairo") },
            { title: L('عامل التعيين =', 'Assignment ='), en: 'Assignment operator', text: L('بيحط القيمة في المتغير. مش معناه "يساوي" زي الحساب.', 'Puts the value in the variable. It does not mean "equals" as in maths.'), example: L('الجانب الأيسر: المتغير · الأيمن: القيمة', 'Left side: the variable · right side: the value') },
          ],
        },
        { type: 'fill-code', code: 'city = {{0}}\nprint({{1}})', answers: [["'Cairo'", '"Cairo"'], ['city']] },
      ],
      bito: [
        L('print(city) من غير تنصيص بتعرض اللي جوه المربع.', 'print(city) without quotes shows what is inside the box.'),
        L('ولو كتبتها بتنصيص هتعرض الكلمة city نفسها.', 'With quotes it would show the word city itself.'),
      ],
    },
    {
      source: L('النقاط الرئيسية (4)، ص 172', 'Key Points (4), p. 172'),
      blocks: [
        { type: 'heading', text: L('العوامل الحسابية', 'Arithmetic operators') },
        {
          type: 'compare',
          columns: [L('المعنى', 'Meaning'), L('لما a=5 وb=3', 'When a=5, b=3')],
          rows: [
            { label: L('a + b', 'a + b'), cells: [L('جمع', 'Addition'), L('8', '8')] },
            { label: L('a - b', 'a - b'), cells: [L('طرح', 'Subtraction'), L('2', '2')] },
            { label: L('a * b', 'a * b'), cells: [L('ضرب', 'Multiplication'), L('15', '15')] },
            { label: L('a / b', 'a / b'), cells: [L('قسمة', 'Division'), L('1.666…', '1.666…')] },
            { label: L('a // b', 'a // b'), cells: [L('خارج القسمة', 'Quotient'), L('1', '1')] },
            { label: L('a % b', 'a % b'), cells: [L('باقي القسمة', 'Remainder'), L('2', '2')] },
            { label: L('a ** b', 'a ** b'), cells: [L('a أُس b', 'a to the power b'), L('125', '125')] },
          ],
        },
      ],
      bito: [
        L('5 ÷ 3 فيها 1 صحيح والباقي 2. // بتديك الـ1، و% بتديك الـ2.', '5 ÷ 3 is 1 whole with 2 left. // gives the 1, % gives the 2.'),
        L('و** هي الأُس: 5 ** 3 = 125.', 'And ** is the power: 5 ** 3 = 125.'),
      ],
    },
    {
      source: L('النقاط الرئيسية (4)، ص 172', 'Key Points (4), p. 172'),
      blocks: [
        { type: 'heading', text: L('نتتبّع البرنامج سطر سطر', 'Trace the program line by line') },
        {
          type: 'trace-lab',
          code: ['a = 5', 'b = 3', 'print(a + b)', 'print(a - b)', 'print(a * b)', 'print(a / b)', 'print(a // b)', 'print(a % b)', 'print(a ** b)'],
          steps: ARITH_STEPS,
        },
        { type: 'memo', text: L('ملحوظة: الكتاب كاتب 1.66666، وبايثون الحقيقية بتطبع 1.6666666666666667', 'Note: the book writes 1.66666; real Python prints 1.6666666666666667') },
      ],
      bito: [
        L('دوس "الخطوة اللي بعدها" وشوف السطر المضيء.', 'Press "next step" and watch the highlighted line.'),
        L('المتغيرات والناتج على اليمين بيتغيروا معاك.', 'The variables and the output on the right change as you go.'),
      ],
    },
    {
      source: L('اختبر معلوماتك (1)، ص 173', 'Test Your Knowledge (1), p. 173'),
      blocks: [
        { type: 'heading', text: L('كمّل الكود', 'Complete the code') },
        { type: 'fill-code', code: 'a = 20\nprint(a {{0}} 3)', answers: [['%']] },
        { type: 'memo', text: L('المطلوب: البرنامج يعرض 2 (باقي قسمة 20 على 3)', 'The goal: the program shows 2 (the remainder of 20 ÷ 3)') },
      ],
      bito: [
        L('20 ÷ 3 = 6 والباقي 2.', '20 ÷ 3 = 6 with 2 left over.'),
        L('أنهي عامل بيجيب الباقي؟', 'Which operator gives the remainder?'),
      ],
    },
    {
      source: L('اختبر معلوماتك (1)، ص 174', 'Test Your Knowledge (1), p. 174'),
      blocks: [
        { type: 'heading', text: L('كمّل الكود', 'Complete the code') },
        { type: 'fill-code', code: 'b = 3\nprint(b {{0}} 4)', answers: [['**']] },
        { type: 'memo', text: L('المطلوب: البرنامج يعرض 81 (3 أُس 4)', 'The goal: the program shows 81 (3 to the power 4)') },
      ],
      bito: [
        L('3 × 3 × 3 × 3 = 81.', '3 × 3 × 3 × 3 = 81.'),
        L('ده الأُس مش الضرب.', 'That is a power, not a plain multiplication.'),
      ],
    },
    qpage(
      L('اختبر معلوماتك (1)، ص 173', 'Test Your Knowledge (1), p. 173'),
      L('أنهي برنامج بيعرض HelloWorld! ؟', 'Which program shows HelloWorld! ?'),
      ["print('HelloWorld!')", 'print(HelloWorld!)', "'HelloWorld!'", 'HelloWorld!'],
      0,
      L('print لازم تتكتب مع أقواس، والكلام بين تنصيص: print(\'HelloWorld!\').', 'print needs brackets, and the text goes between quotes: print(\'HelloWorld!\').'),
      L('صح! print + أقواس + تنصيص.', 'Correct! print + brackets + quotes.'),
      [L('من غير print مفيش حاجة هتظهر.', 'Without print nothing shows.'), L('ومن غير تنصيص بايثون هتتلخبط.', 'And without quotes Python gets confused.')],
    ),
    qpage(
      L('اختبر معلوماتك (2)، ص 173', 'Test Your Knowledge (2), p. 173'),
      L('أنهي برنامج بيعرض Mr.Suzuki ؟', 'Which program shows Mr.Suzuki ?'),
      ["name = 'Mr.Suzuki'\nprint(name)", "print(name)\nname = 'Mr.Suzuki'", "name == 'Mr.Suzuki'\nprint(name)"],
      0,
      L('لازم نعيّن القيمة الأول بـ = وبعدها نعرضها. وعلامة == للمقارنة مش للتعيين.', 'We must assign the value first with = and show it after. == is for comparing, not assigning.'),
      L('صح! عيّن الأول وبعدها اعرض.', 'Correct! Assign first, then show.'),
      [L('بايثون بتقرا من فوق لتحت.', 'Python reads from top to bottom.'), L('المتغير لازم يتعرّف قبل ما نستخدمه.', 'The variable must exist before we use it.')],
    ),
    qpage(
      L('اختبر معلوماتك (3)، ص 173', 'Test Your Knowledge (3), p. 173'),
      L('لو a = 6، إيه ناتج print(a ** 3) ؟', 'If a = 6, what does print(a ** 3) show?'),
      ['18', '216', '36', '2'],
      1,
      L('6 ** 3 = 6 × 6 × 6 = 216.', '6 ** 3 = 6 × 6 × 6 = 216.'),
      L('صح! 216.', 'Correct! 216.'),
      [L('6 × 6 = 36 وبعدين × 6.', '6 × 6 = 36, then × 6.'), L('= 216.', '= 216.')],
    ),
    qpage(
      L('اختبر معلوماتك (5)، ص 175', 'Test Your Knowledge (5), p. 175'),
      L('لو c = 9، إيه ناتج print(c // 2) ؟', 'If c = 9, what does print(c // 2) show?'),
      ['4.5', '4', '1', '18'],
      1,
      L('// بتديك خارج القسمة الصحيح: 9 ÷ 2 = 4 والباقي 1.', '// gives the whole-number quotient: 9 ÷ 2 = 4 with 1 left.'),
      L('صح! 4.', 'Correct! 4.'),
      [L('كام مرة دخلت 2 في 9 كاملة؟', 'How many whole 2s fit in 9?'), L('4 مرات.', '4 times.')],
    ),
    qpage(
      L('اختبر معلوماتك (5)، ص 175', 'Test Your Knowledge (5), p. 175'),
      L('لو c = 9، إيه ناتج print(c % 2) ؟', 'If c = 9, what does print(c % 2) show?'),
      ['0', '1', '4', '4.5'],
      1,
      L('% بتديك الباقي: 9 ÷ 2 = 4 والباقي 1.', '% gives the remainder: 9 ÷ 2 = 4 with 1 left.'),
      L('صح! الباقي 1.', 'Correct! The remainder is 1.'),
      [L('الرقم الفردي دايمًا باقيه 1 على 2.', 'An odd number always leaves 1 when divided by 2.'), L('ده سر معرفة الزوجي والفردي.', 'That is the secret of finding even and odd.')],
    ),
    qpage(
      L('اختبر معلوماتك (6)، ص 175', 'Test Your Knowledge (6), p. 175'),
      L('إيه اسم الرموز زي + و - اللي بتُستخدم في الحساب؟', 'What are symbols like + and - used for calculating called?'),
      [L('عامل مقارنة', 'Comparison operator'), L('عامل تعيين', 'Assignment operator'), L('عامل حسابي', 'Arithmetic operator'), L('عامل منطقي', 'Logical operator')],
      2,
      L('الرموز اللي بتُستخدم في العمليات الحسابية اسمها عوامل حسابية (Arithmetic operators).', 'Symbols used for arithmetic are arithmetic operators.'),
      L('صح! عامل حسابي.', 'Correct! Arithmetic operator.'),
      [L('حسابي = حساب.', 'Arithmetic = calculating.'), L('زي + - * /.', 'Like + - * /.')],
    ),
    {
      source: L('آخر الدرس', 'End of lesson'),
      blocks: [
        { type: 'heading', text: L('خلّصت درس 12-2!', 'You finished lesson 12-2!') },
        {
          type: 'recap',
          items: [
            { code: 'print()', text: L('بتعرض على الشاشة', 'shows on the screen') },
            { code: '=', text: L('بتحط قيمة في متغير', 'puts a value in a variable') },
            { code: '+ - * / // % **', text: L('العوامل الحسابية', 'the arithmetic operators') },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        L('شاطر! لعبة التوصيل: كل عامل ومعناه، وكل سطر وناتجه.', 'Well done! The matching game: each operator and its meaning, each line and its result.'),
        L('خد بالك من // و%.', 'Watch out for // and %.'),
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: L('العوامل ومعانيها', 'Operators and their meanings'),
        source: L('النقاط الرئيسية (3) و(4)، ص 172', 'Key Points (3) and (4), p. 172'),
        pairs: [
          { left: { text: L('=', '=') }, right: L('حط القيمة في المتغير', 'Put the value in the variable') },
          { left: { text: L('//', '//') }, right: L('خارج القسمة (الجزء الصحيح)', 'The quotient (the whole part)') },
          { left: { text: L('%', '%') }, right: L('باقي القسمة', 'The remainder') },
          { left: { text: L('**', '**') }, right: L('الأُس', 'The power') },
          { left: { text: L('print( )', 'print( )') }, right: L('اعرض على الشاشة', 'Show on the screen') },
        ],
      },
      {
        title: L('إيه الناتج لما c = 9؟', 'What shows when c = 9?'),
        source: L('اختبر معلوماتك (5)، ص 175', 'Test Your Knowledge (5), p. 175'),
        pairs: [
          { left: { text: L('print(c + 2)', 'print(c + 2)') }, right: L('11', '11') },
          { left: { text: L('print(c - 4)', 'print(c - 4)') }, right: L('5', '5') },
          { left: { text: L('print(c * 2)', 'print(c * 2)') }, right: L('18', '18') },
          { left: { text: L('print(c // 2)', 'print(c // 2)') }, right: L('4', '4') },
          { left: { text: L('print(c % 2)', 'print(c % 2)') }, right: L('1', '1') },
        ],
      },
    ],
  },
};
