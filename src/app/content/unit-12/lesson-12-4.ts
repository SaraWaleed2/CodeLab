import { Lesson, TraceStep } from '@core/models';
import { L, qpage } from './helpers';

const LIST5 = [7, 22, 11, 34, 17];
const A5 = { name: 'a', value: '[7, 22, 11, 34, 17]' };

/** `for i in range(0, 5, 1): print(a[i])`: line 0 sets the list, line 1 the loop, line 2 the print. */
const READ_STEPS: readonly TraceStep[] = [
  { line: 0, vars: [A5] },
  ...LIST5.flatMap((v, k): TraceStep[] => {
    const i = { name: 'i', value: String(k) };
    return [
      { line: 1, vars: [A5, i], out: LIST5.slice(0, k).map(String) },
      { line: 2, vars: [A5, i], out: LIST5.slice(0, k + 1).map(String) },
    ];
  }),
];

const APPEND_STEPS: readonly TraceStep[] = [
  { line: 0, vars: [{ name: 'a', value: '[]' }] },
  { line: 1, vars: [{ name: 'a', value: '[1]' }] },
  { line: 2, vars: [{ name: 'a', value: '[1, 4]' }] },
  { line: 3, vars: [{ name: 'a', value: '[1, 4, 9]' }] },
  { line: 4, vars: [{ name: 'a', value: '[1, 4, 9]' }], out: ['[1, 4, 9]'] },
];

const AMIN = { name: 'a', value: '[34, 52, 11, 40, 17]' };
const m = (min: number) => ({ name: 'min', value: String(min) });
const iv = (i: number) => ({ name: 'i', value: String(i) });
/** Finding the smallest: line 3 is the test, line 4 the update, line 5 the print. */
const MIN_STEPS: readonly TraceStep[] = [
  { line: 0, vars: [AMIN] },
  { line: 1, vars: [AMIN, m(34)] },
  { line: 2, vars: [AMIN, m(34), iv(1)] },
  { line: 3, vars: [AMIN, m(34), iv(1)] },
  { line: 2, vars: [AMIN, m(34), iv(2)] },
  { line: 3, vars: [AMIN, m(34), iv(2)] },
  { line: 4, vars: [AMIN, m(11), iv(2)] },
  { line: 2, vars: [AMIN, m(11), iv(3)] },
  { line: 3, vars: [AMIN, m(11), iv(3)] },
  { line: 2, vars: [AMIN, m(11), iv(4)] },
  { line: 3, vars: [AMIN, m(11), iv(4)] },
  { line: 5, vars: [AMIN, m(11), iv(4)], out: ['11'] },
];

const A2D = { name: 'a', value: "[['A', 'B', 'C'], ['D', 'E', 'F']]" };

/**
 * Lesson 12-4 "البرمجة التطبيقية [1]" — ministry book pp. 182–185 (Python lists).
 * Book notes:
 * - p.182: the array (list), its elements and index (from 0), reading with a for loop and append.
 * - p.182–183: the two-dimensional list a[i][j]. The book's `min` program is a classic search for the smallest value
 *   (in real Python `min` is also the name of a built-in function; the book uses it as a variable name).
 */
export const LESSON_12_4: Lesson = {
  unitId: 12,
  id: '12-4',
  title: L('البرمجة التطبيقية (١): القوائم', 'Applied Programming (1): Lists'),
  bookPages: '182 – 185',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        L('أهلًا! لو عندك 30 درجة، مش هتعمل 30 متغير. هنخزّنهم كلهم في "قائمة" واحدة.', 'Hi! With 30 grades you do not make 30 variables. You keep them all in one "list".'),
        L('وهنتعلم نلاقي أصغر رقم فيها وندور عليها.', 'And we learn to find the smallest number in it and search it.'),
      ],
    },
    {
      source: L('النقاط الرئيسية (1)، ص 182', 'Key Points (1), p. 182'),
      blocks: [
        { type: 'heading', text: L('القائمة (Array / list)', 'The list (Array / list)') },
        {
          type: 'cards',
          items: [
            { title: L('قائمة', 'List'), en: 'Array (list)', text: L('مجموعة من عناصر البيانات مرتبة بالتسلسل، بنديرها كلها مع بعض.', 'A group of data items in order, managed together.'), example: L("week = ['Mon', 'Tue', 'Wed'] · number = [7, 22, 11, 34, 17]", "week = ['Mon', 'Tue', 'Wed'] · number = [7, 22, 11, 34, 17]") },
            { title: L('إضافة عنصر', 'Adding an item'), text: L('a.append(قيمة) بتضيف القيمة في آخر القائمة.', 'a.append(value) adds the value to the end of the list.'), example: L('زي ما تضيف حاجة في آخر قايمة المشتريات', 'Like adding an item to the end of a shopping list') },
          ],
        },
        { type: 'memo', text: L('افتكر: القائمة بين أقواس مربعة [ ] والعناصر بينها فاصلة', 'Remember: a list sits in square brackets [ ] with commas between the items') },
      ],
      bito: [
        L('القائمة الفاضية بتتكتب [ ].', 'An empty list is written [ ].'),
        L('وبعدين نملّاها بـ append.', 'Then we fill it with append.'),
      ],
    },
    {
      source: L('النقاط الرئيسية (2) و(3)، ص 182', 'Key Points (2) and (3), p. 182'),
      blocks: [
        { type: 'heading', text: L('العنصر والـ index', 'The element and the index') },
        {
          type: 'cards',
          items: [
            { title: L('عنصر', 'Element'), en: 'Element', text: L('كل قيمة جوه القائمة.', 'Each value inside the list.'), example: L('في [7, 22, 11, 34, 17] العنصر 22', 'In [7, 22, 11, 34, 17] one element is 22') },
            { title: L('index', 'Index'), en: 'index', text: L('رقم مكان العنصر. بيبدأ من 0 مش 1!', 'The number of the item’s place. It starts from 0, not 1!'), example: L('a[0] = 7 · a[1] = 22 · a[4] = 17', 'a[0] = 7 · a[1] = 22 · a[4] = 17') },
          ],
        },
        { type: 'memo', text: L('افتكر: في قائمة من 5 عناصر، الـ index من 0 لـ 4', 'Remember: a list of 5 items has indexes 0 to 4') },
      ],
      bito: [
        L('زي عمارة: الدور الأرضي رقمه 0.', 'Like a building: the ground floor is number 0.'),
        L('ده السبب إن range(0, 5) هي اللي بتلف على القائمة دي.', 'That is why range(0, 5) walks over this list.'),
      ],
    },
    {
      source: L('النقاط الرئيسية (3)، ص 182', 'Key Points (3), p. 182'),
      blocks: [
        { type: 'heading', text: L('نقرا القائمة بحلقة for', 'Read the list with a for loop') },
        {
          type: 'trace-lab',
          code: ['a = [7, 22, 11, 34, 17]', 'for i in range(0, 5, 1):', '    print(a[i])'],
          steps: READ_STEPS,
        },
      ],
      bito: [
        L('i بتتغير من 0 لـ 4 فـ a[i] بيجيب العنصر اللي في مكانها.', 'i goes from 0 to 4, so a[i] fetches the item at its place.'),
        L('كده طبعنا القائمة كلها.', 'So we printed the whole list.'),
      ],
    },
    {
      source: L('النقاط الرئيسية (3)، ص 182', 'Key Points (3), p. 182'),
      blocks: [
        { type: 'heading', text: L('نضيف عناصر بـ append', 'Add items with append') },
        {
          type: 'trace-lab',
          code: ['a = []', 'a.append(1)', 'a.append(4)', 'a.append(9)', 'print(a)'],
          steps: APPEND_STEPS,
        },
      ],
      bito: [
        L('كل append بتضيف في الآخر.', 'Each append adds at the end.'),
        L('والناتج: [1, 4, 9].', 'The result: [1, 4, 9].'),
      ],
    },
    {
      source: L('اختبر معلوماتك (1)، ص 184', 'Test Your Knowledge (1), p. 184'),
      blocks: [
        { type: 'heading', text: L('كمّل الكود', 'Complete the code') },
        { type: 'fill-code', code: 'a = []\na.{{0}}(8)\na.append(28)\nprint(a[{{1}}])', answers: [['append'], ['1']] },
        { type: 'memo', text: L('المطلوب: البرنامج يعرض 28', 'The goal: the program shows 28') },
      ],
      bito: [
        L('القائمة بقت [8, 28].', 'The list became [8, 28].'),
        L('الـ 28 مكانها التاني، يعني index كام؟', 'The 28 is second, so which index?'),
      ],
    },
    {
      source: L('النقاط الرئيسية (4)، ص 182–183', 'Key Points (4), pp. 182–183'),
      blocks: [
        { type: 'heading', text: L('قائمة ثنائية الأبعاد: صفوف وأعمدة', 'A two-dimensional list: rows and columns') },
        {
          type: 'trace-lab',
          code: ["a = [['A', 'B', 'C'], ['D', 'E', 'F']]", 'print(a[0][0])', 'print(a[1][2])'],
          steps: [
            { line: 0, vars: [A2D] },
            { line: 1, vars: [A2D], out: ['A'] },
            { line: 2, vars: [A2D], out: ['A', 'F'] },
          ],
        },
        { type: 'memo', text: L('a[i][j]: i = الصف، j = العمود، وكلاهما بيبدأ من 0', 'a[i][j]: i = the row, j = the column, both starting from 0') },
      ],
      bito: [
        L('زي ملعب شطرنج: صف وبعده عمود.', 'Like a chessboard: a row, then a column.'),
        L('a[1][2] = الصف التاني، العمود التالت = F.', 'a[1][2] = the second row, third column = F.'),
      ],
    },
    {
      source: L('اختبر معلوماتك (2)، ص 183', 'Test Your Knowledge (2), p. 183'),
      blocks: [
        { type: 'heading', text: L('نلاقي أصغر رقم', 'Find the smallest number') },
        {
          type: 'trace-lab',
          code: ['a = [34, 52, 11, 40, 17]', 'min = a[0]', 'for i in range(1, 5, 1):', '    if a[i] < min:', '        min = a[i]', 'print(min)'],
          steps: MIN_STEPS,
        },
        { type: 'memo', text: L('الفكرة: نبدأ بأول رقم كأنه الأصغر، وكل ما نلاقي أصغر منه نبدّله', 'The idea: start with the first number as the smallest, swap whenever we find a smaller one') },
      ],
      bito: [
        L('min هو "الأصغر لحد دلوقتي".', 'min is "the smallest so far".'),
        L('لقينا 11 أصغر من 34 فبدّلناه.', 'We found 11 smaller than 34 and swapped.'),
      ],
    },
    {
      source: L('اختبر معلوماتك (2)، ص 183', 'Test Your Knowledge (2), p. 183'),
      blocks: [
        { type: 'heading', text: L('كمّل: برنامج أصغر قيمة', 'Complete: the smallest-value program') },
        { type: 'fill-code', code: 'a = [34, 52, 11, 40, 17]\nmin = a[0]\nfor i in range(1, {{0}}, 1):\n    if a[i] < min:\n        min = {{1}}\nprint(min)', answers: [['5'], ['a[i]']] },
        { type: 'memo', text: L('بنبدأ من 1 لأن العنصر رقم 0 هو min من الأول', 'We start at 1 because item 0 is already min') },
      ],
      bito: [
        L('القائمة فيها 5 عناصر فالحد 5.', 'The list has 5 items so the limit is 5.'),
        L('ولما نلاقي أصغر، min بتاخد قيمة a[i].', 'When we find a smaller one, min takes a[i].'),
      ],
    },
    {
      source: L('تمرن (3)، ص 185', 'Practice (3), p. 185'),
      blocks: [
        { type: 'heading', text: L('كمّل: عدد العناصر الأكبر من 10', 'Complete: count the items bigger than 10') },
        { type: 'fill-code', code: 'a = [12, 8, 9, 13, 11]\ncount = 0\nfor i in range({{0}}, {{1}}, 1):\n    if {{2}} > 10:\n        count = count + 1\nprint(count)', answers: [['0'], ['5'], ['a[i]']] },
        { type: 'memo', text: L('النتيجة 3: لأن 12 و13 و11 أكبر من 10', 'The result is 3: because 12, 13 and 11 are bigger than 10') },
      ],
      bito: [
        L('count عدّاد: بنزوّده 1 كل مرة الشرط يصح.', 'count is a counter: add 1 each time the condition holds.'),
        L('نلف على العناصر الخمسة من 0 لـ 4.', 'We walk over the five items, 0 to 4.'),
      ],
    },
    {
      source: L('اختبر معلوماتك (3)، ص 183–184', 'Test Your Knowledge (3), pp. 183–184'),
      blocks: [
        { type: 'heading', text: L('كمّل: طباعة قائمة ثنائية بحلقتين', 'Complete: printing a 2D list with two loops') },
        { type: 'fill-code', code: "a = [['A', 'B', 'C'], ['D', 'E', 'F']]\nfor i in range(0, {{0}}, 1):\n    for j in range(0, {{1}}, 1):\n        print(a[{{2}}][{{3}}])", answers: [['2'], ['3'], ['i'], ['j']] },
        { type: 'memo', text: L('حلقة جوه حلقة: الخارجية للصفوف والداخلية للأعمدة', 'A loop inside a loop: the outer one for rows, the inner for columns') },
      ],
      bito: [
        L('عندنا صفين وكل صف فيه 3 أعمدة.', 'We have 2 rows and each has 3 columns.'),
        L('هيطبع A B C D E F.', 'It prints A B C D E F.'),
      ],
    },
    qpage(
      L('اختبر معلوماتك (1)، ص 183', 'Test Your Knowledge (1), p. 183'),
      L('a = [57, 16, 29, 44] — إيه ناتج print(a[2]) ؟', 'a = [57, 16, 29, 44] — what does print(a[2]) show?'),
      ['16', '29', '44', '57'],
      1,
      L('الـ index بيبدأ من 0: a[0]=57 وa[1]=16 وa[2]=29.', 'The index starts at 0: a[0]=57, a[1]=16, a[2]=29.'),
      L('صح! 29.', 'Correct! 29.'),
      [L('عدّ من صفر: 57 ثم 16 ثم 29.', 'Count from zero: 57, then 16, then 29.'), L('رقم 2 هو التالت.', 'Number 2 is the third.')],
    ),
    qpage(
      L('اختبر معلوماتك (1)، ص 183', 'Test Your Knowledge (1), p. 183'),
      L('a = [[1,2,3],[4,5,6],[7,8,9]] — إيه ناتج print(a[2][1]) ؟', 'a = [[1,2,3],[4,5,6],[7,8,9]] — what does print(a[2][1]) show?'),
      ['6', '7', '8', '2'],
      2,
      L('a[2] هو الصف التالت [7, 8, 9]، وعنصره رقم 1 هو 8.', 'a[2] is the third row [7, 8, 9], and its item number 1 is 8.'),
      L('صح! 8.', 'Correct! 8.'),
      [L('الأول الصف وبعده العمود.', 'First the row, then the column.'), L('الصف 2 = [7, 8, 9].', 'Row 2 = [7, 8, 9].')],
    ),
    qpage(
      L('تمرن (1)، ص 185', 'Practice (1), p. 185'),
      L("a = ['A'] ثم a.append('B') وa.append('C') ثم print(a[1]). إيه الناتج؟", "a = ['A'] then a.append('B') and a.append('C') then print(a[1]). What shows?"),
      ['A', 'B', 'C'],
      1,
      L("القائمة بقت ['A', 'B', 'C']، وa[1] هو العنصر التاني: B.", "The list became ['A', 'B', 'C'], and a[1] is the second item: B."),
      L('صح! B.', 'Correct! B.'),
      [L('append بتضيف في الآخر.', 'append adds at the end.'), L('وa[1] التاني.', 'And a[1] is the second.')],
    ),
    qpage(
      L('تمرن (1)، ص 185', 'Practice (1), p. 185'),
      L("a = [['Japanese','Mathematics','English'], ['Social studies','Science','Information studies']] — إيه ناتج print(a[1][2]) ؟", "a = [['Japanese','Mathematics','English'], ['Social studies','Science','Information studies']] — what does print(a[1][2]) show?"),
      ['Science', 'English', 'Information studies', 'Social studies'],
      2,
      L('a[1] هو الصف التاني، وعنصره رقم 2 (التالت) هو Information studies.', 'a[1] is the second row, and its item number 2 (the third) is Information studies.'),
      L('صح! Information studies.', 'Correct! Information studies.'),
      [L('الصف 1 يعني التاني.', 'Row 1 means the second.'), L('والعمود 2 يعني التالت.', 'And column 2 means the third.')],
    ),
    qpage(
      L('النقاط الرئيسية (2)، ص 182', 'Key Points (2), p. 182'),
      L('الـ index بتاع أول عنصر في القائمة بيكون كام؟', 'What is the index of the first item in a list?'),
      ['0', '1', '-1'],
      0,
      L('الـ index بيبدأ من 0 مش 1.', 'The index starts at 0, not 1.'),
      L('صح! بنعدّ من صفر.', 'Correct! We count from zero.'),
      [L('أول واحد رقمه صفر.', 'The first one is number zero.'), L('وده سبب أخطاء كتير للمبتدئين.', 'It causes many beginner mistakes.')],
    ),
    {
      source: L('آخر الدرس', 'End of lesson'),
      blocks: [
        { type: 'heading', text: L('خلّصت درس 12-4!', 'You finished lesson 12-4!') },
        {
          type: 'recap',
          items: [
            { code: '[ ]', text: L('القائمة بين أقواس مربعة', 'a list sits in square brackets') },
            { code: 'a[0]', text: L('الـ index بيبدأ من 0', 'the index starts from 0') },
            { code: 'a[i][j]', text: L('صف وعمود في القائمة الثنائية', 'row and column in a 2D list') },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        L('شاطر! لعبة التوصيل: كل تعبير وقيمته، وكل مصطلح ومعناه.', 'Well done! The matching game: each expression and its value, each term and its meaning.'),
        L('افتكر: العدّ بيبدأ من صفر.', 'Remember: counting starts at zero.'),
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: L('a = [7, 22, 11, 34, 17] — إيه القيمة؟', 'a = [7, 22, 11, 34, 17] — what is the value?'),
        source: L('النقاط الرئيسية (2)، ص 182', 'Key Points (2), p. 182'),
        pairs: [
          { left: { text: L('a[0]', 'a[0]') }, right: L('7', '7') },
          { left: { text: L('a[1]', 'a[1]') }, right: L('22', '22') },
          { left: { text: L('a[2]', 'a[2]') }, right: L('11', '11') },
          { left: { text: L('a[3]', 'a[3]') }, right: L('34', '34') },
          { left: { text: L('a[4]', 'a[4]') }, right: L('17', '17') },
        ],
      },
      {
        title: L('المصطلحات', 'The terms'),
        source: L('النقاط الرئيسية (1) إلى (4)، ص 182', 'Key Points (1) to (4), pp. 182–183'),
        pairs: [
          { left: { text: L('قائمة (Array)', 'List (Array)') }, right: L('مجموعة عناصر مرتبة تُدار مع بعض', 'Ordered items managed together') },
          { left: { text: L('عنصر (Element)', 'Element') }, right: L('كل قيمة جوه القائمة', 'Each value in the list') },
          { left: { text: L('index', 'index') }, right: L('رقم مكان العنصر، من 0', 'The number of the item’s place, from 0') },
          { left: { text: L('a.append(5)', 'a.append(5)') }, right: L('بتضيف 5 في آخر القائمة', 'Adds 5 to the end of the list') },
          { left: { text: L('a[i][j]', 'a[i][j]') }, right: L('عنصر في قائمة ثنائية: صف i وعمود j', 'An item in a 2D list: row i, column j') },
        ],
      },
    ],
  },
};
