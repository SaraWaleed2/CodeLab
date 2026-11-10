import { Lesson, TraceStep } from '@core/models';
import { L, qpage } from './helpers';

/** Steps of `for i in range(...): print(i)`: line 0 sets i, line 1 prints it. */
function loopSteps(values: readonly number[]): TraceStep[] {
  return values.flatMap((v, k): TraceStep[] => {
    const i = [{ name: 'i', value: String(v) }];
    return [
      { line: 0, vars: i, out: values.slice(0, k).map(String) },
      { line: 1, vars: i, out: values.slice(0, k + 1).map(String) },
    ];
  });
}

/** Adds 1, 2, 3 into total: the lines are 0 total = 0, 1 for, 2 total = total + i, 3 print. */
const SUM_STEPS: readonly TraceStep[] = [
  { line: 0, vars: [{ name: 'total', value: '0' }] },
  ...[1, 2, 3].flatMap((i): TraceStep[] => {
    const before = (i * (i - 1)) / 2;
    return [
      { line: 1, vars: [{ name: 'total', value: String(before) }, { name: 'i', value: String(i) }] },
      { line: 2, vars: [{ name: 'total', value: String(before + i) }, { name: 'i', value: String(i) }] },
    ];
  }),
  { line: 3, vars: [{ name: 'total', value: '6' }, { name: 'i', value: '3' }], out: ['6'] },
];

const X70 = [{ name: 'x', value: '70' }];

/**
 * Lesson 12-3 "أساسيات البرمجة [2]" — ministry book pp. 176–181 (Python).
 * Book notes:
 * - p.176: the for loop and range() in its three forms. p.177–178: comparison operators, if / else and if / elif / else.
 * - p.181 question (4) counts even numbers with `count = count + …` but never sets `count = 0` first: Python would stop
 *   with an error. The site's version starts the counter at 0.
 */
export const LESSON_12_3: Lesson = {
  unitId: 12,
  id: '12-3',
  title: L('أساسيات البرمجة (٢): الحلقة والتفرع', 'Programming Basics (2): Loops and Branches'),
  bookPages: '176 – 181',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        L('أهلًا! النهارده برنامجك هيكرر شغل ويختار بين طريقين: حلقة for وجملة if.', 'Hi! Today your program repeats work and chooses between two ways: the for loop and if.'),
        L('وتتفرج على الكود بيتنفذ خطوة خطوة.', 'And you watch the code run step by step.'),
      ],
    },
    {
      source: L('النقاط الرئيسية 1 (1)، ص 176', 'Key Points 1 (1), p. 176'),
      blocks: [
        { type: 'heading', text: L('حلقة for: كرر الشغل', 'The for loop: repeat the work') },
        {
          type: 'cards',
          items: [
            { title: L('for variable in range(…):', 'for variable in range(…):'), en: 'for', text: L('بتنفّذ العملية اللي تحتها أكتر من مرة، والمتغير بيتغير في كل لفة.', 'Runs the lines under it again and again, and the variable changes each turn.'), example: L('زي لفّات الجري حوالين الملعب: لفة 0، لفة 1، لفة 2…', 'Like laps around a track: lap 0, lap 1, lap 2…') },
            { title: L('المسافة البادئة', 'Indentation'), text: L('السطور اللي جوه الحلقة بتتزاح لجوه (4 مسافات).', 'The lines inside the loop are pushed inwards (4 spaces).'), example: L('السطر المزاح هو اللي بيتكرر', 'The pushed-in line is the one that repeats') },
          ],
        },
        { type: 'memo', text: L('افتكر: لا تنسى النقطتين : في آخر سطر for', 'Remember: do not forget the colon : at the end of the for line') },
      ],
      bito: [
        L('بدل ما تكتب print أربع مرات، حلقة واحدة بتكفي.', 'Instead of writing print four times, one loop is enough.'),
        L('ده شغل الحلقات: تكرار من غير تعب.', 'That is what loops do: repeating without effort.'),
      ],
    },
    {
      source: L('النقاط الرئيسية 1 (2)، ص 176', 'Key Points 1 (2), p. 176'),
      blocks: [
        { type: 'heading', text: L('range: بيحدد مدى التكرار', 'range: sets how far it repeats') },
        {
          type: 'compare',
          columns: [L('المعنى', 'Meaning')],
          rows: [
            { label: L('range(نهاية)', 'range(end)'), cells: [L('من 0 لحد النهاية − 1', 'from 0 up to end − 1')] },
            { label: L('range(بداية، نهاية)', 'range(start, end)'), cells: [L('من البداية لحد النهاية − 1', 'from start up to end − 1')] },
            { label: L('range(بداية، نهاية، زيادة)', 'range(start, end, step)'), cells: [L('من البداية بخطوة = الزيادة، لحد قبل النهاية', 'from start, adding the step, until before end')] },
          ],
        },
        { type: 'memo', text: L('افتكر: الرقم الأخير مش بيتحسب! range(0, 4) ← 0 1 2 3', 'Remember: the last number is NOT included! range(0, 4) → 0 1 2 3') },
      ],
      bito: [
        L('زي ما بنقول "من 1 لحد قبل 5" بيطلع 1 و2 و3 و4.', 'Like saying "from 1 until before 5": it gives 1, 2, 3, 4.'),
        L('في الصفحة الجاية هتشوفها بنفسك.', 'On the next page you will see it yourself.'),
      ],
    },
    {
      source: L('النقاط الرئيسية 1، ص 176', 'Key Points 1, p. 176'),
      blocks: [
        { type: 'heading', text: L('جرّب: for i in range(0, 4)', 'Try it: for i in range(0, 4)') },
        { type: 'trace-lab', code: ['for i in range(0, 4):', '    print(i)'], steps: loopSteps([0, 1, 2, 3]) },
      ],
      bito: [
        L('لاحظ: i بتبدأ 0 وبتوقف عند 3 مش 4.', 'Notice: i starts at 0 and stops at 3, not 4.'),
        L('الكتاب نفسه بيعرض 0 1 2 3.', 'The book itself shows 0 1 2 3.'),
      ],
    },
    {
      source: L('النقاط الرئيسية 1، ص 176', 'Key Points 1, p. 176'),
      blocks: [
        { type: 'heading', text: L('بخطوة: for i in range(1, 7, 2)', 'With a step: for i in range(1, 7, 2)') },
        { type: 'trace-lab', code: ['for i in range(1, 7, 2):', '    print(i)'], steps: loopSteps([1, 3, 5]) },
        { type: 'memo', text: L('بتبدأ من 1 وتزيد 2 كل مرة: 1 ← 3 ← 5 (والـ7 بره)', 'It starts at 1 and adds 2 each time: 1 → 3 → 5 (and 7 is out)') },
      ],
      bito: [
        L('الرقم التالت (2) هو الزيادة.', 'The third number (2) is the step.'),
        L('لو شيلناه الزيادة بتبقى 1.', 'Without it the step is 1.'),
      ],
    },
    {
      source: L('جرّب بنفسك (2)، ص 179', 'Try it yourself (2), p. 179'),
      blocks: [
        { type: 'heading', text: L('نجمع الأرقام من 1 لـ 3', 'Add up the numbers 1 to 3') },
        { type: 'trace-lab', code: ['total = 0', 'for i in range(1, 4):', '    total = total + i', 'print(total)'], steps: SUM_STEPS },
        { type: 'memo', text: L('الكتاب بيعمل نفس الفكرة من 1 لـ 10 (المجموع 55)', 'The book does the same from 1 to 10 (the total is 55)') },
      ],
      bito: [
        L('total زي حصّالة: كل لفة بنحط فيها i.', 'total is like a piggy bank: each turn we add i.'),
        L('البداية 0 والنهاية 6.', 'It starts at 0 and ends at 6.'),
      ],
    },
    {
      source: L('جرّب بنفسك (2)، ص 179', 'Try it yourself (2), p. 179'),
      blocks: [
        { type: 'heading', text: L('كمّل: مجموع 1 لـ 10 ومتوسطها', 'Complete: the total of 1 to 10 and its average') },
        { type: 'fill-code', code: 'total = 0\nfor i in range(1, {{0}}):\n    total = {{1}}\naverage = {{2}} / 10\nprint(total)\nprint(average)', answers: [['11'], ['total + i', 'i + total'], ['total']] },
        { type: 'memo', text: L('11 عشان الرقم الأخير مش بيتحسب، فنكتب 11 عشان نوصل 10', 'We write 11 because the last number is not counted, so 10 is reached') },
      ],
      bito: [
        L('المتوسط = المجموع ÷ العدد.', 'Average = total ÷ how many.'),
        L('العدد 10 والمجموع في total.', 'There are 10 numbers and the total is in total.'),
      ],
    },
    {
      source: L('النقاط الرئيسية 2 (1)، ص 177', 'Key Points 2 (1), p. 177'),
      blocks: [
        { type: 'heading', text: L('عوامل المقارنة', 'Comparison operators') },
        {
          type: 'compare',
          columns: [L('المعنى', 'Meaning'), L('مثال: x = 70', 'Example: x = 70')],
          rows: [
            { label: L('==', '=='), cells: [L('يساوي', 'Equal'), L('x == 70 ← صح', 'x == 70 → true')] },
            { label: L('!=', '!='), cells: [L('لا يساوي', 'Not equal'), L('x != 70 ← غلط', 'x != 70 → false')] },
            { label: L('<', '<'), cells: [L('أصغر من', 'Less than'), L('x < 70 ← غلط', 'x < 70 → false')] },
            { label: L('>', '>'), cells: [L('أكبر من', 'Greater than'), L('x > 70 ← غلط', 'x > 70 → false')] },
            { label: L('<=', '<='), cells: [L('أصغر من أو يساوي', 'Less than or equal'), L('x <= 70 ← صح', 'x <= 70 → true')] },
            { label: L('>=', '>='), cells: [L('أكبر من أو يساوي', 'Greater than or equal'), L('x >= 70 ← صح', 'x >= 70 → true')] },
          ],
        },
        { type: 'memo', text: L('افتكر: = بتعيّن · == بتقارن', 'Remember: = assigns · == compares') },
      ],
      bito: [
        L('المقارنة بترد بصح أو غلط.', 'A comparison answers true or false.'),
        L('والجملة if بتستخدم الرد ده تقرر.', 'And if uses that answer to decide.'),
      ],
    },
    {
      source: L('النقاط الرئيسية 2 (2) [1]، ص 177', 'Key Points 2 (2) [1], p. 177'),
      blocks: [
        { type: 'heading', text: L('if … else: الشرط وطريقين', 'if … else: a condition and two ways') },
        {
          type: 'trace-lab',
          code: ['x = 70', 'if x >= 60:', "    result = 'Pass'", 'else:', "    result = 'Fail'", 'print(result)'],
          steps: [
            { line: 0, vars: X70 },
            { line: 1, vars: X70 },
            { line: 2, vars: [...X70, { name: 'result', value: "'Pass'" }] },
            { line: 5, vars: [...X70, { name: 'result', value: "'Pass'" }], out: ['Pass'] },
          ],
        },
        { type: 'memo', text: L('لاحظ: السطر المضيء قفز فوق else لأن الشرط صح', 'Notice: the highlight jumped over else because the condition was true') },
      ],
      bito: [
        L('لو الشرط صح بينفذ اللي تحته وبيتخطى else.', 'If the condition is true it runs what is under it and skips else.'),
        L('ولو غلط بينفذ else.', 'If false it runs else.'),
      ],
    },
    {
      source: L('النقاط الرئيسية 2 (2) [2]، ص 178', 'Key Points 2 (2) [2], p. 178'),
      blocks: [
        { type: 'heading', text: L('if … elif … else: شروط كتير', 'if … elif … else: many conditions') },
        {
          type: 'trace-lab',
          code: ['x = 70', 'if x >= 90:', "    result = 'Grade is A'", 'elif x >= 50:', "    result = 'Grade is B'", 'else:', "    result = 'Grade is C'", 'print(result)'],
          steps: [
            { line: 0, vars: X70 },
            { line: 1, vars: X70 },
            { line: 3, vars: X70 },
            { line: 4, vars: [...X70, { name: 'result', value: "'Grade is B'" }] },
            { line: 7, vars: [...X70, { name: 'result', value: "'Grade is B'" }], out: ['Grade is B'] },
          ],
        },
        { type: 'memo', text: L('elif = "وإلا لو": بيجرّب شرط تاني لو الأول غلط', 'elif = "otherwise if": tries a second condition when the first fails') },
      ],
      bito: [
        L('70 مش أكبر من 90، فنجرّب الشرط اللي بعده.', '70 is not 90 or more, so we try the next condition.'),
        L('70 أكبر من 50 فبتطلع B.', '70 is 50 or more, so it gives B.'),
      ],
    },
    {
      source: L('جرّب بنفسك (4)، ص 180', 'Try it yourself (4), p. 180'),
      blocks: [
        { type: 'heading', text: L('كمّل: الأرقام من 1 لـ 100', 'Complete: the numbers 1 to 100') },
        { type: 'fill-code', code: "for i in range(1, {{0}}):\n    if {{1}}:\n        print('It is an even number')\n    else:\n        print(i)", answers: [['101'], ['i % 2 == 0']] },
        { type: 'memo', text: L('الرقم الزوجي باقي قسمته على 2 يساوي 0', 'An even number leaves 0 when divided by 2') },
      ],
      bito: [
        L('الشرط بيعتمد على % اللي اتعلمناها.', 'The condition uses the % we learned.'),
        L('الزوجي: باقي القسمة على 2 صفر.', 'Even: the remainder on 2 is zero.'),
      ],
    },
    {
      source: L('تمرن (4)، ص 181', 'Practice (4), p. 181'),
      blocks: [
        { type: 'heading', text: L('كمّل: عدّ الأرقام الزوجية من 1 لـ 10', 'Complete: count the even numbers from 1 to 10') },
        { type: 'fill-code', code: 'count = 0\nfor i in range(1, 11):\n    if i % 2 == 0:\n        count = count + {{0}}\nprint({{1}})', answers: [['1'], ['count']] },
        { type: 'memo', text: L('تنبيه: الكتاب نسي يكتب count = 0 قبل الحلقة. من غيرها بايثون تدّي خطأ', 'Careful: the book forgot count = 0 before the loop. Without it Python gives an error') },
      ],
      bito: [
        L('العدّاد لازم يبدأ بـ 0 قبل اللفة.', 'The counter must start at 0 before the loop.'),
        L('وبعدين كل رقم زوجي بنزوّد 1.', 'Then each even number adds 1.'),
      ],
    },
    qpage(
      L('جرب بنفسك (1)، ص 180', 'Try it yourself (1), p. 180'),
      L('أنهي برنامج بيدي نفس نتيجة for i in range(3): print(i) ؟', 'Which program gives the same result as for i in range(3): print(i) ?'),
      ['for i in range(0, 3, 1):\n    print(i)', 'for i in range(0, 3, 1):\n    print(3)', 'for i in range(0, 3, 2):\n    print(i)'],
      0,
      L('range(3) معناها range(0, 3, 1): من 0 بخطوة 1 لحد قبل 3، والبرنامج بيعرض i.', 'range(3) means range(0, 3, 1): from 0, step 1, until before 3, and the program shows i.'),
      L('صح! range(3) = range(0, 3, 1).', 'Correct! range(3) = range(0, 3, 1).'),
      [L('لو سبنا الزيادة بتبقى 1.', 'If we leave out the step it is 1.'), L('ولو سبنا البداية بتبقى 0.', 'And if we leave out the start it is 0.')],
    ),
    qpage(
      L('النقاط الرئيسية 1 (2)، ص 176', 'Key Points 1 (2), p. 176'),
      L('إيه اللي بيعرضه for i in range(1, 7, 2): print(i) ؟', 'What does for i in range(1, 7, 2): print(i) show?'),
      ['1  3  5', '1  2  3  4  5  6', '2  4  6', '1  3  5  7'],
      0,
      L('بيبدأ من 1 ويزيد 2 كل مرة، ويقف قبل 7: 1 و3 و5.', 'It starts at 1, adds 2 each time and stops before 7: 1, 3, 5.'),
      L('صح! 1 3 5.', 'Correct! 1 3 5.'),
      [L('7 هو الحد فمش بيتحسب.', '7 is the limit, so it is not counted.'), L('زيادة 2.', 'A step of 2.')],
    ),
    qpage(
      L('اختبر معلوماتك (2)، ص 178', 'Test Your Knowledge (2), p. 178'),
      L("score = 95، if score < 90: result = 'Fail' وإلا result = 'Pass'، وبعدها print(result). إيه اللي هيتعرض؟", "score = 95, if score < 90: result = 'Fail' else result = 'Pass', then print(result). What is shown?"),
      ['Pass', 'Fail', 'Error'],
      0,
      L('95 مش أصغر من 90، فالشرط غلط وبيتنفذ else: result = \'Pass\'.', '95 is not less than 90, so the condition is false and else runs: result = \'Pass\'.'),
      L('صح! Pass.', 'Correct! Pass.'),
      [L('اسأل: الشرط صح ولا غلط؟', 'Ask: is the condition true or false?'), L('غلط، يبقى else.', 'False, so else.')],
    ),
    qpage(
      L('تمرن (2)، ص 180', 'Practice (2), p. 180'),
      L("x = 7، if x < 3 → 'counter'، elif x <= 10 → 'table'، else → 'No seats'. إيه اللي بيتعرض؟", "x = 7, if x < 3 → 'counter', elif x <= 10 → 'table', else → 'No seats'. What is shown?"),
      [L('We will seat you at the counter', 'We will seat you at the counter'), L('We will seat you at a table', 'We will seat you at a table'), L('No seats are available', 'No seats are available')],
      1,
      L('7 مش أصغر من 3، لكن 7 أصغر من أو تساوي 10، فبيتنفذ elif: at a table.', '7 is not less than 3, but 7 is 10 or less, so elif runs: at a table.'),
      L('صح! at a table.', 'Correct! at a table.'),
      [L('الشرط الأول بيتجرّب الأول.', 'The first condition is tried first.'), L('لو غلط بنجرّب اللي بعده.', 'If it fails we try the next.')],
    ),
    qpage(
      L('النقاط الرئيسية 2 (1)، ص 177', 'Key Points 2 (1), p. 177'),
      L('أنهي رمز بيقارن قيمتين (مش بيعيّن قيمة)؟', 'Which symbol compares two values (not assigns)?'),
      ['=', '==', '+'],
      1,
      L('== عامل مقارنة (يساوي). = للتعيين فقط.', '== is a comparison operator (equal). = is only for assigning.'),
      L('صح! == للمقارنة.', 'Correct! == compares.'),
      [L('علامتين للسؤال، علامة للحط.', 'Two signs to ask, one sign to put.'), L('==.', '==.')],
    ),
    {
      source: L('آخر الدرس', 'End of lesson'),
      blocks: [
        { type: 'heading', text: L('خلّصت درس 12-3!', 'You finished lesson 12-3!') },
        {
          type: 'recap',
          items: [
            { code: 'for … in range()', text: L('حلقة التكرار', 'the repeating loop') },
            { code: '== != < > <= >=', text: L('عوامل المقارنة', 'comparison operators') },
            { code: 'if / elif / else', text: L('الاختيار بين طرق', 'choosing between ways') },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        L('شاطر! لعبة الترتيب: رتّب خطوات تنفيذ برنامجين زي ما بايثون بتعمل.', 'Well done! The ordering game: put the run of two programs in the order Python follows.'),
        L('فكّر زي بايثون: سطر سطر.', 'Think like Python: line by line.'),
      ],
    },
  ],

  game: {
    kind: 'order',
    rounds: [
      {
        title: L('برنامج الدرجات (x = 70)', 'The grade program (x = 70)'),
        source: L('النقاط الرئيسية 2 (2) [2]، ص 178', 'Key Points 2 (2) [2], p. 178'),
        steps: [
          L('x = 70', 'x = 70'),
          L('x >= 90؟ لأ، نكمّل للشرط اللي بعده', 'x >= 90? No, go to the next condition'),
          L('x >= 50؟ آه، نفّذ اللي تحته', 'x >= 50? Yes, run what is under it'),
          L("result = 'Grade is B'", "result = 'Grade is B'"),
          L('print(result) بتعرض: Grade is B', 'print(result) shows: Grade is B'),
        ],
      },
      {
        title: L('جمع الأرقام من 1 لـ 3', 'Adding the numbers 1 to 3'),
        source: L('جرّب بنفسك (2)، ص 179', 'Try it yourself (2), p. 179'),
        steps: [
          L('total = 0', 'total = 0'),
          L('اللفة الأولى: i = 1 ← total = 1', 'First turn: i = 1 → total = 1'),
          L('اللفة التانية: i = 2 ← total = 3', 'Second turn: i = 2 → total = 3'),
          L('اللفة التالتة: i = 3 ← total = 6', 'Third turn: i = 3 → total = 6'),
          L('print(total) بتعرض: 6', 'print(total) shows: 6'),
        ],
      },
    ],
  },
};
