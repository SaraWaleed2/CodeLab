import { Lesson } from '@core/models';

/**
 * Lesson 11-3 "المحاكاة (٢): الأعداد العشوائية ومونت كارلو" — ministry book pp. 160–164.
 * Book notes:
 * - p.161: spreadsheet functions SUM, IF(logical_expression, value_if_true, value_if_false) and RAND();
 *   the Monte Carlo method estimates pi with random dots: pi ≈ 4n / N.
 * - p.162 key: 750 dots of 1,000 inside gives pi ≈ 4 × 750 / 1,000 = 3; the cells use RAND(), IF(D3<=1,1,0), SUM(E3:E…)/1000, G3*4.
 * - Random dots change every time, so the estimate shown in the try-it box is different on each run (it gets closer with more dots).
 */
export const LESSON_11_3: Lesson = {
  unitId: 11,
  id: '11-3',
  title: { ar: 'المحاكاة (٢): الأعداد العشوائية وتقدير π', en: 'Simulation (2): Random Numbers and Estimating π' },
  bookPages: '160 – 164',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! هنستخدم الصدفة نفسها في الحساب: نرمي نقط عشوائية ونطلع منها π!', en: 'Hi! We use chance itself for calculating: we throw random dots and get π from them!' },
        { ar: 'في الآخر لعبة ترتيب: رتّب خطوات الطريقة.', en: 'At the end there is an ordering game: put the steps of the method in order.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (1)، ص 161', en: 'Key Points (1), p. 161' },
      blocks: [
        { type: 'heading', text: { ar: 'دوال الجداول المفيدة', en: 'Useful spreadsheet functions' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'SUM', en: 'SUM' }, en: 'SUM (range1:range2)', text: { ar: 'بتحسب مجموع قيم نطاق من الخلايا.', en: 'Adds up the values of a range of cells.' }, example: { ar: '=SUM(E3:E102)', en: '=SUM(E3:E102)' } },
            { title: { ar: 'IF', en: 'IF' }, en: 'IF(logical_expression, value_if_true, value_if_false)', text: { ar: 'لو الشرط صح تعرض القيمة الأولى، وإلا القيمة التانية.', en: 'If the condition is true it shows the first value, otherwise the second.' }, example: { ar: '=IF(A2>=70,"نجاح","رسوب")', en: '=IF(A2>=70,"Pass","Fail")' } },
            { title: { ar: 'RAND', en: 'RAND' }, en: 'RAND()', text: { ar: 'بتطلّع رقم عشوائي بين 0 و1.', en: 'Gives a random number between 0 and 1.' }, example: { ar: '=RAND()*6+1: رقم من 1 لأقل من 7 (زي النرد)', en: '=RAND()*6+1: a number from 1 to under 7 (like a die)' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: SUM يجمع · IF يختار · RAND يصدّف', en: 'Remember: SUM adds · IF chooses · RAND rolls the dice' } },
      ],
      bito: [
        { ar: 'IF زي سؤال: لو درجتك 70 أو أكتر اكتب "نجاح"، وإلا "رسوب".', en: 'IF is like a question: if your score is 70 or more write "Pass", otherwise "Fail".' },
        { ar: 'والـ RAND مفيهوش حاجة جوه القوسين.', en: 'And RAND has nothing inside the brackets.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2-1)، ص 161', en: 'Key Points (2-1), p. 161' },
      blocks: [
        { type: 'heading', text: { ar: 'طريقة مونت كارلو', en: 'The Monte Carlo method' }, code: '(Monte Carlo method)' },
        {
          type: 'cards',
          items: [
            { title: { ar: 'مونت كارلو', en: 'Monte Carlo' }, en: 'Monte Carlo Method', text: { ar: 'طريقة لحل المشكلات باستخدام أرقام عشوائية في النماذج الاحتمالية.', en: 'A way of solving problems with random numbers in probabilistic models.' }, example: { ar: 'نرمي ألاف النقط ونعدّ اللي جوه الشكل', en: 'We throw thousands of dots and count the ones inside the shape' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: مونت كارلو = حل بالأرقام العشوائية', en: 'Remember: Monte Carlo = solving with random numbers' } },
      ],
      bito: [
        { ar: 'الاسم جاي من كازينو مونت كارلو: لعب الحظ والأرقام العشوائية.', en: 'The name comes from the Monte Carlo casino: games of chance and random numbers.' },
        { ar: 'كل ما رميت نقط أكتر، النتيجة بتبقى أدق.', en: 'The more dots you throw, the more accurate the result.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2-2)، ص 161', en: 'Key Points (2-2), p. 161' },
      blocks: [
        { type: 'heading', text: { ar: 'نقدّر π بالصدفة', en: 'Estimating π by chance' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'خطوة 1', en: 'Step 1' }, text: { ar: 'ارمي N نقطة عشوائية جوه مربع ضلعه 1 (X وY بين 0 و1).', en: 'Throw N random dots inside a square of side 1 (X and Y between 0 and 1).' }, example: { ar: 'بدالة RAND', en: 'With the RAND function' } },
            { title: { ar: 'خطوة 2', en: 'Step 2' }, text: { ar: 'اعرف أنهي نقط جوه ربع الدائرة: X² + Y² ≤ 1.', en: 'Find which dots are inside the quarter circle: X² + Y² ≤ 1.' }, example: { ar: 'بدالة IF', en: 'With the IF function' } },
            { title: { ar: 'خطوة 3', en: 'Step 3' }, text: { ar: 'عدّ النقط اللي جوه (n).', en: 'Count the dots inside (n).' }, example: { ar: 'بدالة SUM', en: 'With the SUM function' } },
            { title: { ar: 'خطوة 4', en: 'Step 4' }, text: { ar: 'π ≈ 4 × n ÷ N.', en: 'π ≈ 4 × n ÷ N.' }, example: { ar: 'مثال الكتاب: 750 من 1,000 = 3', en: 'The book’s example: 750 of 1,000 = 3' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: π ≈ 4 × (اللي جوه ÷ الكل)', en: 'Remember: π ≈ 4 × (the inside ÷ the total)' } },
      ],
      bito: [
        { ar: 'ليه 4؟ لأن النقط جوه ربع دائرة بس، والدائرة كاملة 4 أرباع.', en: 'Why 4? Because the dots are in a quarter circle only, and a full circle is 4 quarters.' },
        { ar: 'جرّب بنفسك في الصفحة الجاية.', en: 'Try it yourself on the next page.' },
      ],
    },
    {
      source: { ar: 'ص 161', en: 'p. 161' },
      blocks: [
        { type: 'heading', text: { ar: 'ارمي النقط بنفسك', en: 'Throw the dots yourself' } },
        {
          type: 'lead',
          text: { ar: 'دوس "ارمي 100 نقطة" كذا مرة. النقط الوردي جوه ربع الدائرة، والرمادي برا. شوف تقدير π وهو بيقرّب من 3.14:', en: 'Press "Throw 100 dots" several times. Pink dots are inside the quarter circle, grey ones outside. Watch the estimate of π get close to 3.14:' },
        },
        { type: 'pi-lab' },
        { type: 'memo', text: { ar: 'افتكر: نقط أكتر = تقدير أدق', en: 'Remember: more dots = a better estimate' } },
      ],
      bito: [
        { ar: 'النتيجة بتتغير في كل مرة لأن النقط عشوائية.', en: 'The result changes each time because the dots are random.' },
        { ar: 'جرّب 1,000 نقطة وبعدين 3,000.', en: 'Try 1,000 dots and then 3,000.' },
      ],
    },
    {
      source: { ar: 'الحل (2)، ص 162', en: 'Solution (2), p. 162' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'اترمى 1,000 نقطة عشوائية، و750 منهم جوه ربع الدائرة. كام تقدير π؟', en: '1,000 random dots were thrown and 750 of them fell inside the quarter circle. What is the estimate of π?' },
          options: ['2.5', '3', '3.14', '4'],
          answer: 1,
          explanation: {
            ar: 'π ≈ 4 × 750 ÷ 1,000 = 3. (التقدير مش دقيق لأن عدد النقط قليل نسبيًا.)',
            en: 'π ≈ 4 × 750 ÷ 1,000 = 3. (The estimate is rough because the number of dots is fairly small.)',
          },
          success: { ar: 'صح! 4 × 750 ÷ 1,000 = 3. +10 نقط', en: 'Correct! 4 × 750 ÷ 1,000 = 3. +10 pts' },
        },
      ],
      bito: [
        { ar: '750 ÷ 1,000 = 0.75، وبعدين × 4 = 3.', en: '750 ÷ 1,000 = 0.75, then × 4 = 3.' },
        { ar: 'ده نفس مثال الكتاب.', en: 'This is the book’s own example.' },
      ],
    },
    {
      source: { ar: 'جرب بنفسك (2)، ص 162', en: 'Try It Yourself (2), p. 162' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'أنهي دالة في الجداول بتطلّع رقم عشوائي بين 0 و1؟', en: 'Which spreadsheet function gives a random number between 0 and 1?' },
          options: ['SUM', 'IF', 'RAND'],
          answer: 2,
          explanation: {
            ar: 'RAND() بتطلّع رقم عشوائي بين 0 و1. SUM بتجمع، وIF بتختار حسب شرط.',
            en: 'RAND() gives a random number between 0 and 1. SUM adds, and IF chooses by a condition.',
          },
          success: { ar: 'صح! RAND = عشوائي. +10 نقط', en: 'Correct! RAND = random. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الاسم من random.', en: 'The name comes from "random".' },
        { ar: 'هنستخدمها لـ X وY.', en: 'We use it for X and Y.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2-2)، ص 161', en: 'Key Points (2-2), p. 161' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه الشرط اللي بيقول إن النقطة (X, Y) جوه ربع الدائرة؟', en: 'What condition says that the dot (X, Y) is inside the quarter circle?' },
          options: ['X + Y ≤ 1', 'X² + Y² ≤ 1', 'X × Y ≤ 1', 'X² + Y² ≥ 1'],
          answer: 1,
          explanation: {
            ar: 'النقطة جوه الدائرة لما بُعدها عن نقطة الأصل √(X² + Y²) ≤ 1، يعني X² + Y² ≤ 1. وده شرط الدالة IF(D3<=1,1,0).',
            en: 'A dot is inside the circle when its distance from the origin √(X² + Y²) ≤ 1, that is X² + Y² ≤ 1. That is the IF(D3<=1,1,0) condition.',
          },
          success: { ar: 'صح! X² + Y² ≤ 1. +10 نقط', en: 'Correct! X² + Y² ≤ 1. +10 pts' },
        },
      ],
      bito: [
        { ar: 'ده المسافة من المركز، بنفس قانون فيثاغورس.', en: 'It is the distance from the centre, by Pythagoras’ rule.' },
        { ar: 'لو أقل من أو يساوي 1 يبقى جوه.', en: 'If it is 1 or less, the dot is inside.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (1)، ص 161', en: 'Key Points (1), p. 161' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'لو A2 = 80، كام ناتج =IF(A2>=70, "نجاح", "رسوب")؟', en: 'If A2 = 80, what does =IF(A2>=70, "Pass", "Fail") show?' },
          options: [
            { ar: 'نجاح', en: 'Pass' },
            { ar: 'رسوب', en: 'Fail' },
          ],
          answer: 0,
          explanation: {
            ar: '80 أكبر من أو يساوي 70، فالشرط صح، والدالة بتعرض القيمة الأولى "نجاح".',
            en: '80 is 70 or more, so the condition is true and the function shows the first value, "Pass".',
          },
          success: { ar: 'صح! الشرط صح = نجاح. +10 نقط', en: 'Correct! True = Pass. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الشرط صح ولا غلط؟', en: 'Is the condition true or false?' },
        { ar: 'لو صح خد القيمة الأولى.', en: 'If true, take the first value.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 11-3!', en: 'You finished lesson 11-3!' } },
        {
          type: 'recap',
          items: [
            { code: 'RAND', text: { ar: 'عشوائي', en: 'random' } },
            { code: 'IF', text: { ar: 'يختار', en: 'chooses' } },
            { code: '4n/N', text: { ar: 'تقدير π', en: 'estimate of π' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة الترتيب: رتّب خطوات مونت كارلو.', en: 'Well done! The ordering game: put the Monte Carlo steps in order.' },
        { ar: 'وجولة تانية لخلايا الجدول.', en: 'And a second round for the spreadsheet cells.' },
      ],
    },
  ],

  game: {
    kind: 'order',
    rounds: [
      {
        title: { ar: 'خطوات تقدير π', en: 'Steps to estimate π' },
        source: { ar: 'النقاط الرئيسية (2-2)، ص 161', en: 'Key Points (2-2), p. 161' },
        steps: [
          { ar: 'ارمي نقط عشوائية جوه المربع', en: 'Throw random dots inside the square' },
          { ar: 'اعرف أنهي نقط جوه ربع الدائرة', en: 'Find which dots are inside the quarter circle' },
          { ar: 'عدّ النقط اللي جوه (n)', en: 'Count the dots inside (n)' },
          { ar: 'احسب π ≈ 4 × n ÷ N', en: 'Work out π ≈ 4 × n ÷ N' },
        ],
      },
      {
        title: { ar: 'خلايا الجدول بالترتيب', en: 'The spreadsheet cells in order' },
        source: { ar: 'الجدول، ص 161–162', en: 'The spreadsheet, pp. 161–162' },
        steps: [
          { ar: 'B3: =RAND() (الرقم X)', en: 'B3: =RAND() (the number X)' },
          { ar: 'D3: =B3^2+C3^2 (القيمة X² + Y²)', en: 'D3: =B3^2+C3^2 (the value X² + Y²)' },
          { ar: 'E3: =IF(D3<=1,1,0) (جوه ولا لأ)', en: 'E3: =IF(D3<=1,1,0) (inside or not)' },
          { ar: 'G3: =SUM(E3:E102)/100 (النسبة اللي جوه)', en: 'G3: =SUM(E3:E102)/100 (the share inside)' },
          { ar: 'H3: =G3*4 (تقدير π)', en: 'H3: =G3*4 (the estimate of π)' },
        ],
      },
    ],
  },
};
