import { Lesson } from '@core/models';

/**
 * Lesson 10-3 "تحليل البيانات (٢): الرباعيات ومخطط الصندوق والشارب" — ministry book pp. 142–144.
 * Book notes:
 * - p.143 solution: 20 32 36 38 43 47 52 58 61 72 → min 20, Q1 36, median 45, Q3 58, max 72.
 * - Method (p.142): sort, find the median, split into two groups (≤ and ≥ the median), and take the median of each group.
 * - p.144 exercise data (68 90 75 64 72 32 46 86 59 82) has no printed key; the site computes it with the same method.
 */
export const LESSON_10_3: Lesson = {
  unitId: 10,
  id: '10-3',
  title: { ar: 'تحليل البيانات (٢): الرباعيات ومخطط الصندوق', en: 'Analysing Data (2): Quartiles and Box Plots' },
  bookPages: '142 – 144',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! هنقسّم البيانات لأربع أجزاء متساوية، وبعدين نرسمها في صندوق.', en: 'Hi! We will split the data into four equal parts, then draw it as a box.' },
        { ar: 'في الآخر لعبة ترتيب: رتّب خطوات الرباعيات والرسم.', en: 'At the end there is an ordering game: put the steps of quartiles and drawing in order.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ)، ص 142', en: 'Key Points (a), p. 142' },
      blocks: [
        { type: 'heading', text: { ar: 'الرباعيات', en: 'Quartiles' }, code: '(Quartile)' },
        {
          type: 'lead',
          text: { ar: 'هي الأرقام اللي بتقسّم البيانات المرتبة تصاعديًا لأربع أجزاء متساوية.', en: 'The numbers that split data sorted in ascending order into four equal parts.' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الربيع الأول (Q1)', en: 'First quartile (Q1)' }, en: 'first quartile', text: { ar: 'أول ربع من البيانات، وهي الحد الفاصل لأقل 25%.', en: 'The first quarter of the data: the boundary of the lowest 25%.' } },
            { title: { ar: 'الربيع الثاني (الوسيط)', en: 'Second quartile (median)' }, en: 'second quartile', text: { ar: 'النص بالظبط من البيانات.', en: 'Exactly the middle of the data.' } },
            { title: { ar: 'الربيع الثالث (Q3)', en: 'Third quartile (Q3)' }, en: 'third quartile', text: { ar: 'الحد الفاصل لأعلى 25%.', en: 'The boundary of the highest 25%.' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: Q1 · الوسيط · Q3 = 4 أجزاء متساوية', en: 'Remember: Q1 · median · Q3 = 4 equal parts' } },
      ],
      bito: [
        { ar: 'فكّر فيهم زي ما تقسّم بيتزا لأربع شرايح.', en: 'Think of them like cutting a pizza into four slices.' },
        { ar: 'وكل شريحة فيها ربع الطلاب.', en: 'And each slice holds a quarter of the students.' },
      ],
    },
    {
      source: { ar: 'خطوات تحديد الرباعيات، ص 142', en: 'Steps to find quartiles, p. 142' },
      blocks: [
        { type: 'heading', text: { ar: 'إزاي نحسب الرباعيات؟', en: 'How do we find the quartiles?' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'خطوة 1', en: 'Step 1' }, text: { ar: 'رتّب البيانات تصاعديًا، وحدد الوسيط.', en: 'Sort the data ascending and find the median.' } },
            { title: { ar: 'خطوة 2', en: 'Step 2' }, text: { ar: 'استخدم الوسيط كحد فاصل: قسّم البيانات لمجموعتين (أقل من الوسيط، وأكبر منه).', en: 'Use the median as the dividing line: split into two groups (below it and above it).' } },
            { title: { ar: 'خطوة 3', en: 'Step 3' }, text: { ar: 'حدد وسيط كل مجموعة: وسيط الصغيرة = Q1، ووسيط الكبيرة = Q3.', en: 'Find each group’s median: the lower group’s = Q1, the upper group’s = Q3.' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: رتّب · اقسم · وسيط كل نص', en: 'Remember: sort · split · the median of each half' } },
      ],
      bito: [
        { ar: 'كأنك بتعمل وسيط تلات مرات.', en: 'It is like finding a median three times.' },
        { ar: 'مرة للكل، ومرة للنص الصغير، ومرة للنص الكبير.', en: 'Once for all, once for the lower half, once for the upper half.' },
      ],
    },
    {
      source: { ar: 'الحل، ص 143', en: 'The solution, p. 143' },
      blocks: [
        { type: 'heading', text: { ar: 'جرّب مخطط الصندوق', en: 'Try the box plot' } },
        {
          type: 'lead',
          text: { ar: 'مثال الكتاب: درجات 10 طلاب (58 72 52 61 36 43 20 32 38 47). بعد الترتيب: الصغرى 20، Q1 = 36، الوسيط = 45، Q3 = 58، العظمى 72. غيّر الأرقام:', en: 'The book’s example: scores of 10 students (58 72 52 61 36 43 20 32 38 47). Sorted: minimum 20, Q1 = 36, median = 45, Q3 = 58, maximum 72. Change the numbers:' },
        },
        { type: 'boxplot-lab', values: '58 72 52 61 36 43 20 32 38 47' },
        { type: 'memo', text: { ar: 'افتكر: الصندوق من Q1 لـ Q3 · الخط جواه هو الوسيط', en: 'Remember: the box runs from Q1 to Q3 · the line inside is the median' } },
      ],
      bito: [
        { ar: 'الصندوق بيحتوي نص الطلاب اللي في الوسط.', en: 'The box holds the middle half of the students.' },
        { ar: 'والخطوط على الجانبين بتوصّل لأصغر وأكبر درجة.', en: 'And the lines on either side reach the lowest and highest score.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب)، ص 142', en: 'Key Points (b), p. 142' },
      blocks: [
        { type: 'heading', text: { ar: 'مخطط الصندوق والشارب', en: 'The box-and-whisker plot' }, code: '(Box-and-whisker plot)' },
        {
          type: 'lead',
          text: { ar: 'شكل بيستخدم صندوقًا وخطوطًا لتمثيل القيمة الدنيا والربيع الأول والثاني والثالث والقيمة العليا في شكل واحد. خطوات الرسم:', en: 'A shape using a box and lines to show the minimum, first, second and third quartiles and the maximum in one picture. Steps to draw it:' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'خطوة 1', en: 'Step 1' }, text: { ar: 'حدد القيمة الدنيا (minimum) والقيمة العليا (maximum) والرباعيات.', en: 'Find the minimum, the maximum and the quartiles.' } },
            { title: { ar: 'خطوة 2', en: 'Step 2' }, text: { ar: 'ارسم صندوقًا: حافته اليسرى Q1 والحافة اليمنى Q3.', en: 'Draw a box: its left edge is Q1 and its right edge is Q3.' } },
            { title: { ar: 'خطوة 3', en: 'Step 3' }, text: { ar: 'ارسم خطًا أفقيًا من كل طرف من الصندوق للقيمتين الدنيا والعظمى.', en: 'Draw a horizontal line from each end of the box to the minimum and the maximum.' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: 5 أرقام ← صندوق وشارب', en: 'Remember: 5 numbers → a box and whiskers' } },
      ],
      bito: [
        { ar: 'الشارب هو الخط اللي بيطلع من جنب الصندوق، زي شارب القط.', en: 'The whisker is the line out of the box’s side, like a cat’s whisker.' },
        { ar: 'جرّب تغيّر الأرقام وشوف الصندوق بيتحرك.', en: 'Try changing the numbers and watch the box move.' },
      ],
    },
    {
      source: { ar: 'اختبر معلوماتك (أ)، ص 143', en: 'Test Your Knowledge (a), p. 143' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'درجات 10 طلاب: 58 72 52 61 36 43 20 32 38 47. كام الربيع الأول (Q1)؟', en: 'Scores of 10 students: 58 72 52 61 36 43 20 32 38 47. What is the first quartile (Q1)?' },
          options: ['32', '36', '38', '45'],
          answer: 1,
          explanation: {
            ar: 'بعد الترتيب: 20 32 36 38 43 47 52 58 61 72. المجموعة الصغيرة: 20 32 36 38 43، ووسيطها 36. فـ Q1 = 36.',
            en: 'Sorted: 20 32 36 38 43 47 52 58 61 72. The lower group is 20 32 36 38 43 and its median is 36. So Q1 = 36.',
          },
          success: { ar: 'صح! Q1 = 36. +10 نقط', en: 'Correct! Q1 = 36. +10 pts' },
        },
      ],
      bito: [
        { ar: 'رتّب الأول، وبعدين خد نص الأرقام الصغيرة.', en: 'Sort first, then take the half with the small numbers.' },
        { ar: 'والوسيط هنا 45 (متوسط 43 و47).', en: 'And the median here is 45 (the mean of 43 and 47).' },
      ],
    },
    {
      source: { ar: 'اختبر معلوماتك (أ)، ص 143', en: 'Test Your Knowledge (a), p. 143' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'نفس الدرجات. كام الربيع الثالث (Q3)؟', en: 'The same scores. What is the third quartile (Q3)?' },
          options: ['52', '58', '61', '72'],
          answer: 1,
          explanation: {
            ar: 'المجموعة الكبيرة بعد الوسيط: 47 52 58 61 72، ووسيطها 58. فـ Q3 = 58.',
            en: 'The upper group above the median: 47 52 58 61 72, and its median is 58. So Q3 = 58.',
          },
          success: { ar: 'صح! Q3 = 58. +10 نقط', en: 'Correct! Q3 = 58. +10 pts' },
        },
      ],
      bito: [
        { ar: 'خد النص الكبير بعد الوسيط.', en: 'Take the upper half after the median.' },
        { ar: 'وسيطه هو Q3.', en: 'Its median is Q3.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب)، ص 142', en: 'Key Points (b), p. 142' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: في مخطط الصندوق، حافتي الصندوق هما الربيع الأول والربيع الثالث.', en: 'True or false: in a box plot, the box’s two edges are the first and third quartiles.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. حافة الصندوق اليسرى هي Q1 واليمنى Q3، والخطوط تمتد للقيمتين الدنيا والعظمى.',
            en: '✓. The box’s left edge is Q1 and its right edge is Q3, and the whiskers reach the minimum and maximum.',
          },
          success: { ar: 'صح! الصندوق من Q1 لـ Q3. +10 نقط', en: 'Correct! The box runs from Q1 to Q3. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الشوارب هي اللي بتوصل للدنيا والعظمى.', en: 'The whiskers are what reach the minimum and maximum.' },
        { ar: 'والخط جوه الصندوق هو الوسيط.', en: 'And the line inside the box is the median.' },
      ],
    },
    {
      source: { ar: 'جرب بنفسك (1)، ص 144', en: 'Try It Yourself (1), p. 144' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'درجات 10 أفراد: 68 90 75 64 72 32 46 86 59 82. كام الوسيط؟', en: 'Scores of 10 people: 68 90 75 64 72 32 46 86 59 82. What is the median?' },
          options: ['64', '68', '70', '72'],
          answer: 2,
          explanation: {
            ar: 'بعد الترتيب: 32 46 59 64 68 72 75 82 86 90. العدد 10 زوجي، فالوسيط (68 + 72) ÷ 2 = 70. وQ1 = 59 وQ3 = 82.',
            en: 'Sorted: 32 46 59 64 68 72 75 82 86 90. Ten is even, so the median is (68 + 72) ÷ 2 = 70. Also Q1 = 59 and Q3 = 82.',
          },
          success: { ar: 'صح! الوسيط 70. +10 نقط', en: 'Correct! The median is 70. +10 pts' },
        },
      ],
      bito: [
        { ar: 'جرّبها في مخطط الصندوق وشوف الأرقام الخمسة.', en: 'Try it in the box-plot lab and see the five numbers.' },
        { ar: 'رتّب الأول دايمًا.', en: 'Always sort first.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 10-3!', en: 'You finished lesson 10-3!' } },
        {
          type: 'recap',
          items: [
            { code: 'Q1', text: { ar: 'أول ربع', en: 'first quarter' } },
            { code: 'Q2', text: { ar: 'الوسيط', en: 'median' } },
            { code: 'Q3', text: { ar: 'تالت ربع', en: 'third quarter' } },
            { code: '5', text: { ar: 'أرقام في الصندوق', en: 'numbers in the box plot' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة الترتيب: رتّب الخطوات.', en: 'Well done! The ordering game: put the steps in order.' },
        { ar: 'أول جولة للرباعيات، وتاني جولة لرسم الصندوق.', en: 'The first round is quartiles, the second is drawing the box.' },
      ],
    },
  ],

  game: {
    kind: 'order',
    rounds: [
      {
        title: { ar: 'خطوات حساب الرباعيات', en: 'Steps to find the quartiles' },
        source: { ar: 'النقاط الرئيسية (أ)، ص 142', en: 'Key Points (a), p. 142' },
        steps: [
          { ar: 'رتّب البيانات تصاعديًا', en: 'Sort the data ascending' },
          { ar: 'حدد الوسيط', en: 'Find the median' },
          { ar: 'قسّم البيانات لمجموعتين عند الوسيط', en: 'Split the data into two groups at the median' },
          { ar: 'حدد وسيط كل مجموعة (Q1 و Q3)', en: 'Find each group’s median (Q1 and Q3)' },
        ],
      },
      {
        title: { ar: 'خطوات رسم مخطط الصندوق', en: 'Steps to draw a box plot' },
        source: { ar: 'النقاط الرئيسية (ب)، ص 142', en: 'Key Points (b), p. 142' },
        steps: [
          { ar: 'حدد القيمة الدنيا والعليا والرباعيات', en: 'Find the minimum, maximum and quartiles' },
          { ar: 'ارسم صندوقًا من Q1 إلى Q3', en: 'Draw a box from Q1 to Q3' },
          { ar: 'ارسم خطًا للوسيط داخل الصندوق', en: 'Draw a line for the median inside the box' },
          { ar: 'ارسم خطًا من كل طرف للقيمة الدنيا والعظمى', en: 'Draw a line from each end to the minimum and maximum' },
        ],
      },
    ],
  },
};
