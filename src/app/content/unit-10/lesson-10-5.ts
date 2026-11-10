import { Lesson } from '@core/models';

/**
 * Lesson 10-5 "تحليل البيانات (٤): مخطط الانتشار والارتباط" — ministry book pp. 147–150.
 * Book notes:
 * - p.147: scatter plot, positive / negative / no correlation, correlation coefficient r (−1 ≤ r ≤ 1, CORREL),
 *   causal relationship vs pseudo-correlation, cross tabulation (p.148: 57/97/46 men, 73/75/52 women → totals 130/172/98).
 * - The book's x/y table (p.148) has a clear negative correlation (r ≈ −0.8); the other two data sets are illustrative.
 * - p.148 key: the scatter plot shows a negative correlation; r = 0.9 describes a strong positive correlation.
 * - The exercises on pp.149–150 have no complete answer key and are not used.
 */
export const LESSON_10_5: Lesson = {
  unitId: 10,
  id: '10-5',
  title: { ar: 'تحليل البيانات (٤): مخطط الانتشار والارتباط', en: 'Analysing Data (4): Scatter Plots and Correlation' },
  bookPages: '147 – 150',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! لما نقارن متغيرين (زي ساعات المذاكرة والدرجة) بنرسمهم نقط على مخطط.', en: 'Hi! When we compare two variables (like study hours and score) we draw them as dots on a chart.' },
        { ar: 'في الآخر لعبة فرز: ارتباط إيجابي ولا سلبي ولا معدوم؟', en: 'At the end there is a sorting game: positive, negative or no correlation?' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (1)، ص 147', en: 'Key Points (1), p. 147' },
      blocks: [
        { type: 'heading', text: { ar: 'مخطط الانتشار', en: 'The scatter plot' }, code: '(Scatter plot)' },
        {
          type: 'lead',
          text: { ar: 'رسم بياني بيمثل نقاطًا على مستوى باستخدام أزواج من المتغيرات x و y. دوس على الأزرار وشوف 3 أشكال:', en: 'A chart that draws points on a plane using pairs of the variables x and y. Tap the buttons to see 3 shapes:' },
        },
        {
          type: 'scatter-lab',
          sets: [
            { name: { ar: 'جدول الكتاب (ص 148)', en: 'The book’s table (p. 148)' }, points: [[7, 3], [4, 6], [6, 5], [2, 8], [9, 3], [3, 4], [8, 2], [1, 9], [6, 2], [3, 5]] },
            { name: { ar: 'مثال: ارتباط إيجابي', en: 'Example: positive' }, points: [[1, 2], [2, 3], [3, 3.5], [4, 5], [5, 5.5], [6, 7], [7, 7.5], [8, 9]] },
            { name: { ar: 'مثال: لا ارتباط', en: 'Example: none' }, points: [[1, 5], [2, 2], [3, 8], [4, 4], [5, 7], [6, 3], [7, 6], [8, 5]] },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: نقط طالعة = إيجابي · نازلة = سلبي · مبعثرة = لا ارتباط', en: 'Remember: rising dots = positive · falling = negative · scattered = none' } },
      ],
      bito: [
        { ar: 'مثال الكتاب بينزل من الشمال لليمين: ارتباط سلبي، لما x بيزيد y بيقل.', en: 'The book’s example falls from left to right: a negative correlation, as x rises y drops.' },
        { ar: 'الرقم r اللي تحت هو معامل الارتباط، هنشوفه في الصفحة الجاية.', en: 'The number r below is the correlation coefficient, which we meet on the next page.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (1)، ص 147', en: 'Key Points (1), p. 147' },
      blocks: [
        { type: 'heading', text: { ar: 'أنواع الارتباط', en: 'Kinds of correlation' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'ارتباط إيجابي', en: 'Positive correlation' }, en: 'Positive Correlation', text: { ar: 'لما x بيزيد، y بيزيد معاه.', en: 'When x rises, y rises with it.' }, example: { ar: 'درجة الحرارة ومبيعات العصير', en: 'Temperature and juice sales' } },
            { title: { ar: 'ارتباط سلبي', en: 'Negative correlation' }, en: 'Negative Correlation', text: { ar: 'لما x بيزيد، y بيقل.', en: 'When x rises, y drops.' }, example: { ar: 'ساعات الموبايل وساعات النوم', en: 'Phone hours and sleep hours' } },
            { title: { ar: 'لا ارتباط', en: 'No correlation' }, en: 'No Correlation', text: { ar: 'مفيش علاقة إيجابية أو سلبية بين المتغيرين.', en: 'There is no positive or negative relationship between the two.' }, example: { ar: 'مقاس الجزمة ودرجة الحساب', en: 'Shoe size and maths score' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: الاتنين يزيدوا = إيجابي · واحد يزيد وواحد يقل = سلبي', en: 'Remember: both rise = positive · one rises while the other drops = negative' } },
      ],
      bito: [
        { ar: 'ركّز على اتجاه النقط، مش على كتر النقط.', en: 'Look at the direction of the dots, not how many there are.' },
        { ar: 'نقط على خط مستقيم تقريبًا = ارتباط قوي.', en: 'Dots near a straight line = a strong correlation.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2)، ص 147', en: 'Key Points (2), p. 147' },
      blocks: [
        { type: 'heading', text: { ar: 'معامل الارتباط', en: 'The correlation coefficient' }, code: '(r)' },
        {
          type: 'cards',
          items: [
            { title: { ar: 'r بين −1 و 1', en: 'r from −1 to 1' }, en: 'Correlation Coefficient', text: { ar: 'مؤشر لقياس قوة الارتباط. −1 ≤ r ≤ 1.', en: 'An index measuring how strong the correlation is. −1 ≤ r ≤ 1.' }, example: { ar: 'دالة CORREL في الجداول', en: 'The CORREL function in spreadsheets' } },
            { title: { ar: 'قريب من 1', en: 'Near 1' }, text: { ar: 'ارتباط إيجابي أقوى.', en: 'A stronger positive correlation.' }, example: { ar: 'r = 0.9', en: 'r = 0.9' } },
            { title: { ar: 'قريب من −1', en: 'Near −1' }, text: { ar: 'ارتباط سلبي أقوى.', en: 'A stronger negative correlation.' }, example: { ar: 'r = −0.9', en: 'r = −0.9' } },
            { title: { ar: 'قريب من 0', en: 'Near 0' }, text: { ar: 'مفيش ارتباط.', en: 'No correlation.' }, example: { ar: 'r = 0', en: 'r = 0' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: r = 1 قوي إيجابي · r = −1 قوي سلبي · r = 0 مفيش', en: 'Remember: r = 1 strong positive · r = −1 strong negative · r = 0 none' } },
      ],
      bito: [
        { ar: 'الإشارة بتقولك الاتجاه، والقيمة بتقولك القوة.', en: 'The sign tells you the direction, the value tells you the strength.' },
        { ar: 'يعني −0.9 قوي جدًا، لكنه سلبي.', en: 'So −0.9 is very strong, but negative.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (3، 4)، ص 147', en: 'Key Points (3, 4), p. 147' },
      blocks: [
        { type: 'heading', text: { ar: 'سبب ولا صدفة؟', en: 'Cause or coincidence?' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'علاقة سببية', en: 'Causal relationship' }, en: 'Causal Relationship', text: { ar: 'أحد المتغيرين هو السبب في التاني.', en: 'One variable is the reason for the other.' }, example: { ar: 'الحرارة بتزيد ← مبيعات المثلجات بتزيد', en: 'Heat rises → ice-cream sales rise' } },
            { tone: 'no', title: { ar: 'ارتباط زائف', en: 'Pseudo-correlation' }, en: 'Pseudo-Correlation', text: { ar: 'فيه ارتباط، لكن مفيش علاقة سببية بين المتغيرين.', en: 'There is a correlation, but no causal relationship between the variables.' }, example: { ar: 'مبيعات المثلجات وحالات ضربات الشمس: الاتنين بيزيدوا بسبب الحرارة', en: 'Ice-cream sales and heatstroke cases: both rise because of the heat' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: ارتباط مش معناه سبب', en: 'Remember: correlation does not mean cause' } },
      ],
      bito: [
        { ar: 'المثلجات مش بتسبب ضربة شمس! الحرارة هي السبب في الاتنين.', en: 'Ice cream does not cause heatstroke! The heat is the reason for both.' },
        { ar: 'اتأكد دايمًا قبل ما تقول "ده بيسبب ده".', en: 'Always check before saying "this causes that".' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (5)، ص 148', en: 'Key Points (5), p. 148' },
      blocks: [
        { type: 'heading', text: { ar: 'الجدولة المتقاطعة', en: 'Cross tabulation' }, code: '(Cross tabulation)' },
        {
          type: 'lead',
          text: { ar: 'طريقة تجميع لمقارنة البيانات بين فئتين أو أكتر. مثال الكتاب: رأي 400 شخص (ذكر وأنثى) في موضوع:', en: 'A way of summing up data to compare two or more categories. The book’s example: the opinion of 400 people (men and women) on a topic:' },
        },
        {
          type: 'compare',
          columns: [
            { ar: 'موافق', en: 'Agree' },
            { ar: 'معارض', en: 'Disagree' },
            { ar: 'لا هذا ولا ذاك', en: 'Neither' },
          ],
          rows: [
            { label: { ar: 'ذكر', en: 'Male' }, cells: [{ ar: '57', en: '57' }, { ar: '97', en: '97' }, { ar: '46', en: '46' }] },
            { label: { ar: 'أنثى', en: 'Female' }, cells: [{ ar: '73', en: '73' }, { ar: '75', en: '75' }, { ar: '52', en: '52' }] },
            { label: { ar: 'الإجمالي', en: 'Total' }, cells: [{ ar: '130', en: '130' }, { ar: '172', en: '172' }, { ar: '98', en: '98' }] },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: صفوف × أعمدة = أعداد لكل خانة + إجماليات', en: 'Remember: rows × columns = counts in each cell + totals' } },
      ],
      bito: [
        { ar: 'اجمع الصف الأول: 57 + 97 + 46 = 200 ذكر. والتاني 200 أنثى.', en: 'Add the first row: 57 + 97 + 46 = 200 men. The second is 200 women.' },
        { ar: 'والعمود الأول: 57 + 73 = 130 موافق.', en: 'And the first column: 57 + 73 = 130 who agree.' },
      ],
    },
    {
      source: { ar: 'اختبر معلوماتك (1)، ص 148', en: 'Test Your Knowledge (1), p. 148' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'مخطط الانتشار للجدول (x: 7 4 6 2 9 3 8 1 6 3، y: 3 6 5 8 3 4 2 9 2 5) بيبيّن أنهي نوع ارتباط؟', en: 'The scatter plot for the table (x: 7 4 6 2 9 3 8 1 6 3, y: 3 6 5 8 3 4 2 9 2 5) shows which kind of correlation?' },
          options: [
            { ar: 'ارتباط إيجابي', en: 'Positive correlation' },
            { ar: 'ارتباط سلبي', en: 'Negative correlation' },
            { ar: 'لا ارتباط', en: 'No correlation' },
          ],
          answer: 1,
          explanation: {
            ar: 'لما x بيزيد، y بيقل: النقط نازلة من الشمال لليمين. يبقى ارتباط سلبي (Negative Correlation).',
            en: 'As x rises, y drops: the dots fall from left to right. So it is a negative correlation.',
          },
          success: { ar: 'صح! نازلة = سلبي. +10 نقط', en: 'Correct! Falling = negative. +10 pts' },
        },
      ],
      bito: [
        { ar: 'اختار "جدول الكتاب" في مخطط الانتشار فوق وشوف r.', en: 'Pick "the book’s table" in the scatter plot above and look at r.' },
        { ar: 'هيطلع سالب وكبير.', en: 'It comes out negative and large.' },
      ],
    },
    {
      source: { ar: 'اختبر معلوماتك (2)، ص 148', en: 'Test Your Knowledge (2), p. 148' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'معامل الارتباط r = 0.9 بين حرارة الجو وعدد زوار الشاطئ. ده معناه إيه؟', en: 'The correlation coefficient r = 0.9 between air temperature and the number of beach visitors. What does that mean?' },
          options: [
            { ar: 'ارتباط سلبي قوي', en: 'A strong negative correlation' },
            { ar: 'ارتباط إيجابي قوي', en: 'A strong positive correlation' },
            { ar: 'مفيش ارتباط', en: 'No correlation' },
          ],
          answer: 1,
          explanation: {
            ar: 'r قريب من 1 يعني ارتباط إيجابي قوي: لما الحرارة تزيد، الزوار بيزيدوا.',
            en: 'An r near 1 means a strong positive correlation: when the temperature rises, visitors rise.',
          },
          success: { ar: 'صح! 0.9 = إيجابي قوي. +10 نقط', en: 'Correct! 0.9 = strong positive. +10 pts' },
        },
      ],
      bito: [
        { ar: 'القيمة قريبة من 1 يعني قوي، والإشارة موجبة يعني إيجابي.', en: 'A value near 1 means strong, and a positive sign means positive.' },
        { ar: 'مثال الكتاب بالظبط.', en: 'Exactly the book’s example.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (4)، ص 147', en: 'Key Points (4), p. 147' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: لو فيه ارتباط قوي بين متغيرين، يبقى أحدهم سبب التاني أكيد.', en: 'True or false: if two variables are strongly correlated, one of them surely causes the other.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 1,
          explanation: {
            ar: '✕. ممكن يبقى ارتباط زائف (Pseudo-correlation): الاتنين بيتحركوا مع بعض بسبب عامل تالت، من غير علاقة سببية.',
            en: '✕. It may be a pseudo-correlation: the two move together because of a third factor, with no causal relationship.',
          },
          success: { ar: 'صح! الارتباط مش سبب. +10 نقط', en: 'Correct! Correlation is not cause. +10 pts' },
        },
      ],
      bito: [
        { ar: 'افتكر المثلجات وضربة الشمس.', en: 'Remember ice cream and heatstroke.' },
        { ar: 'الحرارة هي السبب في الاتنين.', en: 'The heat causes both.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 10-5!', en: 'You finished lesson 10-5!' } },
        {
          type: 'recap',
          items: [
            { code: '+ / −', text: { ar: 'اتجاه الارتباط', en: 'direction' } },
            { code: 'r', text: { ar: 'من −1 لـ 1', en: 'from −1 to 1' } },
            { code: '≠ سبب', text: { ar: 'ارتباط زائف', en: 'pseudo-correlation' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة الفرز: صنّف الارتباط.', en: 'Well done! The sorting game: classify the correlation.' },
        { ar: 'وجولة تانية بقيم r.', en: 'And a second round with values of r.' },
      ],
    },
  ],

  game: {
    kind: 'sort',
    rounds: [
      {
        title: { ar: 'أنهي نوع ارتباط؟', en: 'Which kind of correlation?' },
        source: { ar: 'النقاط الرئيسية (1)، ص 147', en: 'Key Points (1), p. 147' },
        bins: [
          { id: 'pos', label: { ar: 'إيجابي', en: 'Positive' } },
          { id: 'neg', label: { ar: 'سلبي', en: 'Negative' } },
          { id: 'none', label: { ar: 'لا ارتباط', en: 'None' } },
        ],
        items: [
          { text: { ar: 'الحرارة بتزيد ومبيعات العصير بتزيد', en: 'Heat rises and juice sales rise' }, bin: 'pos' },
          { text: { ar: 'ساعات المذاكرة بتزيد والدرجة بتزيد', en: 'Study hours rise and the score rises' }, bin: 'pos' },
          { text: { ar: 'ساعات الموبايل بتزيد وساعات النوم بتقل', en: 'Phone hours rise and sleep hours drop' }, bin: 'neg' },
          { text: { ar: 'جدول الكتاب: x بيزيد و y بيقل', en: 'The book’s table: x rises and y drops' }, bin: 'neg' },
          { text: { ar: 'مقاس الجزمة ودرجة الحساب', en: 'Shoe size and maths score' }, bin: 'none' },
          { text: { ar: 'النقط مبعثرة من غير اتجاه', en: 'Dots scattered with no direction' }, bin: 'none' },
        ],
      },
      {
        title: { ar: 'قيمة r بتقول إيه؟', en: 'What does the value of r say?' },
        source: { ar: 'النقاط الرئيسية (2)، ص 147', en: 'Key Points (2), p. 147' },
        bins: [
          { id: 'pos', label: { ar: 'إيجابي قوي', en: 'Strong positive' } },
          { id: 'neg', label: { ar: 'سلبي قوي', en: 'Strong negative' } },
          { id: 'none', label: { ar: 'مفيش ارتباط', en: 'No correlation' } },
        ],
        items: [
          { text: { ar: 'r = 0.9', en: 'r = 0.9' }, bin: 'pos' },
          { text: { ar: 'r = 1.0', en: 'r = 1.0' }, bin: 'pos' },
          { text: { ar: 'r = −0.9', en: 'r = −0.9' }, bin: 'neg' },
          { text: { ar: 'r = −1.0', en: 'r = −1.0' }, bin: 'neg' },
          { text: { ar: 'r = 0', en: 'r = 0' }, bin: 'none' },
          { text: { ar: 'r = 0.05', en: 'r = 0.05' }, bin: 'none' },
        ],
      },
    ],
  },
};
