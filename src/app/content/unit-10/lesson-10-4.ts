import { Lesson } from '@core/models';

/**
 * Lesson 10-4 "تحليل البيانات (٣): التباين والانحراف المعياري" — ministry book pp. 145–146.
 * Book notes:
 * - p.145 solution: 26 25 32 28 32 25 → mean 28; squared deviations 4 9 16 0 16 9 = 54 ÷ 6 = variance 9; standard deviation √9 = 3.
 * - Spreadsheet functions: VAR.P (variance) and STDEV.P (standard deviation).
 * - The exercises on p.146 have no printed answers; the site computes them with the same method.
 */
export const LESSON_10_4: Lesson = {
  unitId: 10,
  id: '10-4',
  title: { ar: 'تحليل البيانات (٣): التباين والانحراف المعياري', en: 'Analysing Data (3): Variance and Standard Deviation' },
  bookPages: '145 – 146',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! المتوسط بيقولك المنتصف، لكن مبيقولكش البيانات متباعدة قد إيه. ده شغل التباين.', en: 'Hi! The mean tells you the middle, but not how spread out the data is. That is the variance’s job.' },
        { ar: 'في الآخر لعبة توصيل: وصّل كل مقياس بمعناه.', en: 'At the end there is a matching game: link each measure to its meaning.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ)، ص 145', en: 'Key Points (a), p. 145' },
      blocks: [
        { type: 'heading', text: { ar: 'ليه نقيس التشتت؟', en: 'Why measure the spread?' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'فصل A', en: 'Class A' }, text: { ar: 'درجات: 25 26 25 24 25 (قريبة من بعض).', en: 'Scores: 25 26 25 24 25 (close together).' }, example: { ar: 'متوسط 25', en: 'Mean 25' } },
            { title: { ar: 'فصل B', en: 'Class B' }, text: { ar: 'درجات: 5 45 10 40 25 (متباعدة جدًا).', en: 'Scores: 5 45 10 40 25 (very spread out).' }, example: { ar: 'متوسط 25 برضه!', en: 'Mean 25 as well!' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: نفس المتوسط ≠ نفس البيانات. التشتت بيفرّق.', en: 'Remember: the same mean ≠ the same data. The spread tells them apart.' } },
      ],
      bito: [
        { ar: 'الفصلين متوسطهم 25، لكن الأول متقارب والتاني فيه فروق ضخمة.', en: 'Both classes average 25, but the first is tight and the second has huge gaps.' },
        { ar: 'عشان كده محتاجين مقياس للتشتت.', en: 'That is why we need a measure of spread.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ)، ص 145', en: 'Key Points (a), p. 145' },
      blocks: [
        { type: 'heading', text: { ar: 'التباين والانحراف المعياري', en: 'Variance and standard deviation' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الانحراف', en: 'Deviation' }, en: 'Deviation', text: { ar: 'الفرق بين كل قيمة والمتوسط: x − المتوسط.', en: 'The gap between each value and the mean: x − mean.' }, example: { ar: '26 − 28 = −2', en: '26 − 28 = −2' } },
            { title: { ar: 'التباين', en: 'Variance' }, en: 'Variance', text: { ar: 'متوسط مربعات الانحرافات. كل ما كبر، البيانات متشتتة أكتر.', en: 'The mean of the squared deviations. The larger it is, the more scattered the data.' }, example: { ar: 'دالة VAR.P في الجداول', en: 'The VAR.P function in spreadsheets' } },
            { title: { ar: 'الانحراف المعياري', en: 'Standard deviation' }, en: 'Standard deviation', text: { ar: 'الجذر التربيعي للتباين. بيعبّر عن التشتت بنفس وحدة البيانات.', en: 'The square root of the variance. It shows the spread in the same unit as the data.' }, example: { ar: 'دالة STDEV.P', en: 'The STDEV.P function' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: تباين = متوسط المربعات · انحراف معياري = جذره', en: 'Remember: variance = mean of squares · standard deviation = its root' } },
      ],
      bito: [
        { ar: 'بنربّع الانحرافات عشان السالب والموجب ما يلغوش بعض.', en: 'We square the deviations so the negatives and positives do not cancel.' },
        { ar: 'والجذر بيرجّعنا لنفس وحدة البيانات.', en: 'And the root brings us back to the data’s own unit.' },
      ],
    },
    {
      source: { ar: 'خطوات حساب الانحراف المعياري، ص 145', en: 'Steps to find the standard deviation, p. 145' },
      blocks: [
        { type: 'heading', text: { ar: 'خطوات الحساب', en: 'The steps' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'خطوة 1', en: 'Step 1' }, text: { ar: 'احسب متوسط البيانات.', en: 'Find the mean of the data.' } },
            { title: { ar: 'خطوة 2', en: 'Step 2' }, text: { ar: 'احسب انحراف كل نقطة: x − المتوسط.', en: 'Find each point’s deviation: x − mean.' } },
            { title: { ar: 'خطوة 3', en: 'Step 3' }, text: { ar: 'ربّع كل انحراف.', en: 'Square each deviation.' } },
            { title: { ar: 'خطوة 4', en: 'Step 4' }, text: { ar: 'متوسط المربعات = التباين. وجذره = الانحراف المعياري.', en: 'The mean of the squares = the variance. Its root = the standard deviation.' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: متوسط · انحراف · تربيع · متوسط المربعات · جذر', en: 'Remember: mean · deviation · square · mean of squares · root' } },
      ],
      bito: [
        { ar: 'دي أطول وصفة في الوحدة، بس كل خطوة سهلة.', en: 'This is the longest recipe in the unit, but each step is easy.' },
        { ar: 'جرّب الجدول في الصفحة الجاية.', en: 'Try the table on the next page.' },
      ],
    },
    {
      source: { ar: 'الحل (1)، ص 145', en: 'Solution (1), p. 145' },
      blocks: [
        { type: 'heading', text: { ar: 'جدول الكتاب بنفسك', en: 'The book’s table, yourself' } },
        {
          type: 'lead',
          text: { ar: 'مثال الكتاب: 26 25 32 28 32 25. المتوسط 28، ومجموع المربعات 54، والتباين 54 ÷ 6 = 9، والانحراف المعياري 3. غيّر الأرقام:', en: 'The book’s example: 26 25 32 28 32 25. The mean is 28, the squares add up to 54, the variance is 54 ÷ 6 = 9, and the standard deviation is 3. Change the numbers:' },
        },
        { type: 'spread-lab', values: '26 25 32 28 32 25' },
        { type: 'memo', text: { ar: 'افتكر: 54 ÷ 6 = 9 · √9 = 3', en: 'Remember: 54 ÷ 6 = 9 · √9 = 3' } },
      ],
      bito: [
        { ar: 'جرّب تكتب فصل B من الأول (5 45 10 40 25) وشوف الانحراف المعياري بيطلع كام.', en: 'Try typing class B from the start (5 45 10 40 25) and see what the standard deviation is.' },
        { ar: 'أكبر بكتير من فصل A.', en: 'Much bigger than class A.' },
      ],
    },
    {
      source: { ar: 'اختبر معلوماتك، ص 145', en: 'Test Your Knowledge, p. 145' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'درجات: 26 25 32 28 32 25. كام التباين؟', en: 'Scores: 26 25 32 28 32 25. What is the variance?' },
          options: ['3', '6', '9', '54'],
          answer: 2,
          explanation: {
            ar: 'المتوسط 28، ومربعات الانحرافات 4 9 16 0 16 9 مجموعها 54. التباين 54 ÷ 6 = 9.',
            en: 'The mean is 28, the squared deviations 4 9 16 0 16 9 add up to 54. The variance is 54 ÷ 6 = 9.',
          },
          success: { ar: 'صح! التباين 9. +10 نقط', en: 'Correct! The variance is 9. +10 pts' },
        },
      ],
      bito: [
        { ar: 'مجموع المربعات 54 هو مش التباين، لازم تقسمه على 6.', en: 'The sum of squares, 54, is not the variance; you must divide it by 6.' },
        { ar: 'جرّبها في الجدول.', en: 'Try it in the table.' },
      ],
    },
    {
      source: { ar: 'الحل (2)، ص 145', en: 'Solution (2), p. 145' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'نفس البيانات. كام الانحراف المعياري؟', en: 'The same data. What is the standard deviation?' },
          options: ['3', '9', '4.5', '81'],
          answer: 0,
          explanation: {
            ar: 'الانحراف المعياري = جذر التباين = √9 = 3.',
            en: 'The standard deviation = the square root of the variance = √9 = 3.',
          },
          success: { ar: 'صح! √9 = 3. +10 نقط', en: 'Correct! √9 = 3. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الجذر التربيعي لـ 9.', en: 'The square root of 9.' },
        { ar: 'ومعناها إن الدرجات بتبعد عن المتوسط حوالي 3 درجات.', en: 'It means the scores sit about 3 points from the mean.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ)، ص 145', en: 'Key Points (a), p. 145' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: كل ما كبر التباين، كانت البيانات أكتر تشتتًا.', en: 'True or false: the larger the variance, the more scattered the data.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. التباين الكبير معناه إن القيم بعيدة عن المتوسط، فالبيانات متشتتة أكتر.',
            en: '✓. A large variance means the values are far from the mean, so the data is more scattered.',
          },
          success: { ar: 'صح! تباين أكبر = تشتت أكبر. +10 نقط', en: 'Correct! A bigger variance = more spread. +10 pts' },
        },
      ],
      bito: [
        { ar: 'فصل B اللي جربناه كان تباينه ضخم.', en: 'Class B that we tried had a huge variance.' },
        { ar: 'وفصل A تباينه صغير.', en: 'And class A has a small one.' },
      ],
    },
    {
      source: { ar: 'جرب بنفسك (2)، ص 146', en: 'Try It Yourself (2), p. 146' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'أنهي مجموعة درجات تباينها أكبر: A (22 28 25 26 24) ولا B (21 29 27 25 28)؟', en: 'Which set of scores has the larger variance: A (22 28 25 26 24) or B (21 29 27 25 28)?' },
          options: [
            { ar: 'A (التباين 4)', en: 'A (variance 4)' },
            { ar: 'B (التباين 8)', en: 'B (variance 8)' },
            { ar: 'نفس التباين', en: 'The same variance' },
          ],
          answer: 1,
          explanation: {
            ar: 'A: المتوسط 25 والتباين 20 ÷ 5 = 4 (انحراف معياري 2). B: المتوسط 26 والتباين 40 ÷ 5 = 8 (انحراف معياري حوالي 2.83). فـ B أكتر تشتتًا.',
            en: 'A: the mean is 25 and the variance is 20 ÷ 5 = 4 (sd 2). B: the mean is 26 and the variance is 40 ÷ 5 = 8 (sd about 2.83). So B is more spread out.',
          },
          success: { ar: 'صح! B أكتر تشتتًا. +10 نقط', en: 'Correct! B is more spread out. +10 pts' },
        },
      ],
      bito: [
        { ar: 'اكتب كل مجموعة في الجدول وقارن التباين.', en: 'Type each set into the table and compare the variance.' },
        { ar: 'الرقم الأكبر يعني تشتت أكبر.', en: 'The bigger number means a bigger spread.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 10-4!', en: 'You finished lesson 10-4!' } },
        {
          type: 'recap',
          items: [
            { code: 'x − x̄', text: { ar: 'انحراف', en: 'deviation' } },
            { code: 'σ²', text: { ar: 'تباين', en: 'variance' } },
            { code: 'σ', text: { ar: 'انحراف معياري', en: 'standard deviation' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة التوصيل: المقاييس وأرقام الكتاب.', en: 'Well done! The matching game: the measures and the book’s numbers.' },
        { ar: 'استعن بالجدول لو احتجت.', en: 'Use the table if you need it.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'المقياس ومعناه', en: 'The measure and its meaning' },
        source: { ar: 'النقاط الرئيسية (أ)، ص 145', en: 'Key Points (a), p. 145' },
        pairs: [
          { left: { text: { ar: 'الانحراف', en: 'Deviation' } }, right: { ar: 'الفرق بين القيمة والمتوسط', en: 'The gap between a value and the mean' } },
          { left: { text: { ar: 'التباين', en: 'Variance' } }, right: { ar: 'متوسط مربعات الانحرافات', en: 'The mean of the squared deviations' } },
          { left: { text: { ar: 'الانحراف المعياري', en: 'Standard deviation' } }, right: { ar: 'الجذر التربيعي للتباين', en: 'The square root of the variance' } },
          { left: { text: { ar: 'VAR.P', en: 'VAR.P' } }, right: { ar: 'دالة التباين في الجداول', en: 'The spreadsheet function for variance' } },
          { left: { text: { ar: 'STDEV.P', en: 'STDEV.P' } }, right: { ar: 'دالة الانحراف المعياري', en: 'The spreadsheet function for the standard deviation' } },
        ],
      },
      {
        title: { ar: 'أرقام مثال الكتاب', en: 'The numbers of the book’s example' },
        source: { ar: 'الحل، ص 145', en: 'The solution, p. 145' },
        pairs: [
          { left: { text: { ar: 'متوسط 26 25 32 28 32 25', en: 'Mean of 26 25 32 28 32 25' } }, right: { ar: '28', en: '28' } },
          { left: { text: { ar: 'مجموع المربعات', en: 'The sum of the squares' } }, right: { ar: '54', en: '54' } },
          { left: { text: { ar: 'التباين', en: 'The variance' } }, right: { ar: '9', en: '9' } },
          { left: { text: { ar: 'الانحراف المعياري', en: 'The standard deviation' } }, right: { ar: '3', en: '3' } },
        ],
      },
    ],
  },
};
