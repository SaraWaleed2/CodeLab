import { Lesson } from '@core/models';

/**
 * Lesson 10-2 "تحليل البيانات (١): التوزيع التكراري ومقاييس النزعة المركزية" — ministry book pp. 138–141.
 * Book notes:
 * - p.139: 32 distances in classes of 3 m starting at 12 m: frequencies 1, 3, 6, 12, 5, 3, 2.
 * - p.140 solution: 12 scores (6 7 10 8 3 4 12 10 6 3 9 6): mean 7, median 6.5, mode 6.
 * - Spreadsheet functions: AVERAGE, MEDIAN, MODE. (p.141 lists them as A, B, C; the exercise key is not printed.)
 */
export const LESSON_10_2: Lesson = {
  unitId: 10,
  id: '10-2',
  title: { ar: 'تحليل البيانات (١): التوزيع التكراري والمتوسط', en: 'Analysing Data (1): Frequency and Averages' },
  bookPages: '138 – 141',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! هنلم بيانات كتير في جدول، وبعدين نطلع منها رقم واحد يمثّلها.', en: 'Hi! We will gather lots of data into a table, then pull out one number to represent it.' },
        { ar: 'في الآخر لعبة توصيل: وصّل المصطلحات بمعانيها.', en: 'At the end there is a matching game: link the terms to their meanings.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1)، ص 138', en: 'Key Points (a-1), p. 138' },
      blocks: [
        { type: 'heading', text: { ar: 'جدول التوزيع التكراري', en: 'The frequency table' }, code: '(Frequency distribution table)' },
        {
          type: 'lead',
          text: { ar: 'جدول بيقسّم البيانات لفئات وبيلخّصها. زي ما تعدّ كام طالب طوله بين 150 و160.', en: 'A table that splits the data into classes and sums it up. Like counting how many students are between 150 and 160 cm.' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الفئة', en: 'Class' }, en: 'class', text: { ar: 'الفاصل الزمني (أو المدى) في جدول التوزيع.', en: 'The interval (range) in the frequency table.' }, example: { ar: '18 إلى أقل من 21', en: '18 up to under 21' } },
            { title: { ar: 'عرض الفئة', en: 'Class width' }, en: 'class width', text: { ar: 'عرض الفاصل الزمني للفئة.', en: 'The width of the class interval.' }, example: { ar: '21 − 18 = 3', en: '21 − 18 = 3' } },
            { title: { ar: 'علامة الفئة', en: 'Class mark' }, en: 'Class Mark', text: { ar: 'القيمة اللي في منتصف الفئة وبتمثّلها.', en: 'The value in the middle of the class that stands for it.' }, example: { ar: 'منتصف 18 و21 = 19.5', en: 'The middle of 18 and 21 = 19.5' } },
            { title: { ar: 'التكرار', en: 'Frequency' }, en: 'frequency', text: { ar: 'عدد القيم اللي في كل فئة.', en: 'The number of values in each class.' }, example: { ar: '6 طلاب في الفئة دي', en: '6 students in this class' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: فئة · عرض · علامة · تكرار', en: 'Remember: class · width · mark · frequency' } },
      ],
      bito: [
        { ar: 'الجدول بيحوّل 32 رقم لسبع أسطر بس.', en: 'The table turns 32 numbers into just seven rows.' },
        { ar: 'مثال الكتاب: مسافات رمي كورة اليد لـ 32 طالب.', en: 'The book’s example: handball throwing distances of 32 students.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-2)، ص 138', en: 'Key Points (a-2), p. 138' },
      blocks: [
        { type: 'heading', text: { ar: 'المدرج التكراري', en: 'The histogram' }, code: '(Histogram)' },
        {
          type: 'lead',
          text: { ar: 'توزيع تكراري على شكل رسم بياني بالأعمدة. جدول الكتاب (ص 139) لـ 32 طالب. غيّر الأرقام وشوف الأعمدة بتتحرك:', en: 'A frequency distribution drawn as a bar chart. The book’s table (p. 139) for 32 students. Change the numbers and watch the bars move:' },
        },
        { type: 'data-lab', values: '15 20 21 23 30 27 27 16 20 18 22 19 20 21 12 21 24 27 22 26 25 32 24 21 21 23 20 16 23 21 21 24', histogram: { start: 12, width: 3 } },
        { type: 'memo', text: { ar: 'افتكر: أطول عمود = أكتر فئة فيها قيم', en: 'Remember: the tallest bar = the class with the most values' } },
      ],
      bito: [
        { ar: 'الأعمدة (من الشمال لليمين): 1 و3 و6 و12 و5 و3 و2، زي جدول الكتاب.', en: 'The bars (left to right): 1, 3, 6, 12, 5, 3, 2, like the book’s table.' },
        { ar: 'أغلب الطلاب رموا بين 21 و24 متر.', en: 'Most students threw between 21 and 24 metres.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-3)، ص 138', en: 'Key Points (a-3), p. 138' },
      blocks: [
        { type: 'heading', text: { ar: 'مقاييس النزعة المركزية', en: 'Measures of central tendency' } },
        {
          type: 'lead',
          text: { ar: 'قيمة رقمية واحدة بتمثّل خلاصة البيانات. فيه ثلاثة: المتوسط والوسيط والمنوال.', en: 'One number that sums up the data. There are three: the mean, the median and the mode.' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'المتوسط (Mean)', en: 'Mean' }, en: 'Mean', text: { ar: 'نجمع كل القيم ونقسم على عددها.', en: 'Add all values and divide by their count.' }, example: { ar: 'دالة AVERAGE في الجداول', en: 'The AVERAGE function in spreadsheets' } },
            { title: { ar: 'الوسيط (Median)', en: 'Median' }, en: 'Median', text: { ar: 'القيمة اللي في النص لما نرتّب البيانات تصاعديًا. لو العدد زوجي: متوسط القيمتين اللي في النص.', en: 'The value in the middle when the data is sorted ascending. With an even count: the mean of the two middle values.' }, example: { ar: 'دالة MEDIAN', en: 'The MEDIAN function' } },
            { title: { ar: 'المنوال (Mode)', en: 'Mode' }, en: 'Mode', text: { ar: 'أكتر قيمة تكرارًا.', en: 'The most frequent value.' }, example: { ar: 'دالة MODE', en: 'The MODE function' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: متوسط = جمع وقسمة · وسيط = في النص · منوال = الأكتر', en: 'Remember: mean = add and divide · median = the middle · mode = the most' } },
      ],
      bito: [
        { ar: 'المنوال هو اللي بيكسب في الانتخابات: القيمة اللي أكتر ناس اختارتها.', en: 'The mode is the election winner: the value most people chose.' },
        { ar: 'والوسيط ما بيتأثرش بالقيم الشاذة.', en: 'And the median is not thrown off by extreme values.' },
      ],
    },
    {
      source: { ar: 'الحل (ب)، ص 140', en: 'Solution (b), p. 140' },
      blocks: [
        { type: 'heading', text: { ar: 'احسب بنفسك', en: 'Work it out yourself' } },
        {
          type: 'lead',
          text: { ar: 'مثال الكتاب: درجات 12 طالب في لعبة (6 9 3 6 10 12 4 3 8 10 7 6). المتوسط 7، والوسيط 6.5، والمنوال 6. غيّر الأرقام:', en: 'The book’s example: 12 students’ game scores (6 9 3 6 10 12 4 3 8 10 7 6). Mean 7, median 6.5, mode 6. Change the numbers:' },
        },
        { type: 'data-lab', values: '6 7 10 8 3 4 12 10 6 3 9 6' },
        { type: 'memo', text: { ar: 'افتكر: 84 ÷ 12 = 7 · (6 + 7) ÷ 2 = 6.5', en: 'Remember: 84 ÷ 12 = 7 · (6 + 7) ÷ 2 = 6.5' } },
      ],
      bito: [
        { ar: 'الوسيط: رتّب القيم الأول، والعدد 12 زوجي، فنجيب متوسط القيمة 6 والـ 7.', en: 'The median: sort first, and 12 is even, so we take the mean of the 6th and 7th values.' },
        { ar: 'غيّر رقم واحد بس وشوف أنهي مقياس اتغيّر.', en: 'Change just one number and see which measure moves.' },
      ],
    },
    {
      source: { ar: 'الحل، ص 140', en: 'The solution, p. 140' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'درجات 12 طالب: 6 7 10 8 3 4 12 10 6 3 9 6. كام المتوسط؟', en: 'Scores of 12 students: 6 7 10 8 3 4 12 10 6 3 9 6. What is the mean?' },
          options: ['6', '6.5', '7', '8'],
          answer: 2,
          explanation: {
            ar: 'مجموع القيم 84، والعدد 12، فالمتوسط 84 ÷ 12 = 7.',
            en: 'The values add up to 84 and there are 12 of them, so the mean is 84 ÷ 12 = 7.',
          },
          success: { ar: 'صح! 84 ÷ 12 = 7. +10 نقط', en: 'Correct! 84 ÷ 12 = 7. +10 pts' },
        },
      ],
      bito: [
        { ar: 'اجمع الأول: 6 + 7 + 10 ...', en: 'Add first: 6 + 7 + 10 ...' },
        { ar: 'وبعدين اقسم على 12.', en: 'Then divide by 12.' },
      ],
    },
    {
      source: { ar: 'الحل، ص 140', en: 'The solution, p. 140' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'نفس الدرجات. كام الوسيط؟', en: 'The same scores. What is the median?' },
          options: ['6', '6.5', '7', '9'],
          answer: 1,
          explanation: {
            ar: 'بعد الترتيب: 3 3 4 6 6 6 7 8 9 10 10 12. العدد 12 زوجي، فالوسيط متوسط القيمتين الوسطيتين 6 و7: (6 + 7) ÷ 2 = 6.5.',
            en: 'Sorted: 3 3 4 6 6 6 7 8 9 10 10 12. Twelve is even, so the median is the mean of the two middle values 6 and 7: (6 + 7) ÷ 2 = 6.5.',
          },
          success: { ar: 'صح! الوسيط 6.5. +10 نقط', en: 'Correct! The median is 6.5. +10 pts' },
        },
      ],
      bito: [
        { ar: 'مهم: رتّب الأول!', en: 'Important: sort first!' },
        { ar: 'عدد زوجي: خد متوسط الاتنين اللي في النص.', en: 'An even count: take the mean of the two in the middle.' },
      ],
    },
    {
      source: { ar: 'جرب بنفسك (3)، ص 140', en: 'Try It Yourself (3), p. 140' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'أنهي دالة في برامج الجداول بتحدد المنوال؟', en: 'Which spreadsheet function finds the mode?' },
          options: ['AVERAGE', 'MEDIAN', 'MODE'],
          answer: 2,
          explanation: {
            ar: 'MODE للمنوال، وAVERAGE للمتوسط، وMEDIAN للوسيط.',
            en: 'MODE is for the mode, AVERAGE for the mean, and MEDIAN for the median.',
          },
          success: { ar: 'صح! MODE = المنوال. +10 نقط', en: 'Correct! MODE = the mode. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الاسم نفسه بيقولك.', en: 'The name itself tells you.' },
        { ar: 'الدوال الثلاثة أسمائها باللي بتحسبه.', en: 'All three functions are named after what they work out.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 10-2!', en: 'You finished lesson 10-2!' } },
        {
          type: 'recap',
          items: [
            { code: '7', text: { ar: 'المتوسط', en: 'mean' } },
            { code: '6.5', text: { ar: 'الوسيط', en: 'median' } },
            { code: '6', text: { ar: 'المنوال', en: 'mode' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة التوصيل: المصطلحات والدوال.', en: 'Well done! The matching game: terms and functions.' },
        { ar: 'استعن بالمدرج لو احتجت.', en: 'Use the histogram if you need it.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'المصطلح ومعناه', en: 'The term and its meaning' },
        source: { ar: 'النقاط الرئيسية (أ)، ص 138', en: 'Key Points (a), p. 138' },
        pairs: [
          { left: { text: { ar: 'الفئة', en: 'Class' } }, right: { ar: 'مدى في جدول التوزيع', en: 'A range in the frequency table' } },
          { left: { text: { ar: 'التكرار', en: 'Frequency' } }, right: { ar: 'عدد القيم في الفئة', en: 'The number of values in a class' } },
          { left: { text: { ar: 'علامة الفئة', en: 'Class mark' } }, right: { ar: 'القيمة في منتصف الفئة', en: 'The value in the middle of the class' } },
          { left: { text: { ar: 'المدرج التكراري', en: 'Histogram' } }, right: { ar: 'توزيع تكراري برسم أعمدة', en: 'A frequency distribution drawn with bars' } },
        ],
      },
      {
        title: { ar: 'المقياس وطريقته', en: 'The measure and how it works' },
        source: { ar: 'النقاط الرئيسية (أ-3)، ص 138–140', en: 'Key Points (a-3), pp. 138–140' },
        pairs: [
          { left: { text: { ar: 'المتوسط', en: 'Mean' } }, right: { ar: 'جمع القيم وقسمتها على عددها', en: 'Add the values and divide by their count' } },
          { left: { text: { ar: 'الوسيط', en: 'Median' } }, right: { ar: 'القيمة في النص بعد الترتيب', en: 'The middle value after sorting' } },
          { left: { text: { ar: 'المنوال', en: 'Mode' } }, right: { ar: 'أكتر قيمة تكرارًا', en: 'The most frequent value' } },
          { left: { text: { ar: 'AVERAGE', en: 'AVERAGE' } }, right: { ar: 'دالة المتوسط في الجداول', en: 'The spreadsheet function for the mean' } },
          { left: { text: { ar: 'MEDIAN', en: 'MEDIAN' } }, right: { ar: 'دالة الوسيط في الجداول', en: 'The spreadsheet function for the median' } },
        ],
      },
    ],
  },
};
