import { Lesson } from '@core/models';

/**
 * Lesson 10-1 "أنواع البيانات والتحليل" — ministry book pp. 136–137.
 * Book notes:
 * - p.136 Key Points: qualitative (nominal, ordinal) and quantitative (interval, ratio) data; descriptive and inferential statistics.
 * - The answer key on p.136 is partly garbled; the site's questions follow the Key Points' definitions.
 * - The everyday examples (colours, cities, weights...) apply the book's own definitions.
 */
export const LESSON_10_1: Lesson = {
  unitId: 10,
  id: '10-1',
  title: { ar: 'أنواع البيانات والتحليل', en: 'Types of Data and Analysis' },
  bookPages: '136 – 137',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! قبل ما نحلل أي بيانات لازم نعرف هي من أنهي نوع.', en: 'Hi! Before analysing any data we must know what kind it is.' },
        { ar: 'في الآخر لعبة فرز: صنّف البيانات.', en: 'At the end there is a sorting game: classify the data.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1)، ص 136', en: 'Key Points (a-1), p. 136' },
      blocks: [
        { type: 'heading', text: { ar: 'البيانات النوعية', en: 'Qualitative data' }, code: '(Qualitative Data)' },
        {
          type: 'lead',
          text: { ar: 'بيانات بتوصف الصفات أو الخصائص، مش أرقام بنقيسها. وبتنقسم لنوعين:', en: 'Data that describes qualities or characteristics, not numbers we measure. It splits into two kinds:' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'اسمية', en: 'Nominal' }, en: 'Nominal', text: { ar: 'بيانات بتتقسم لفئات من غير ترتيب.', en: 'Data split into categories with no order.' }, example: { ar: 'الجنس، اللون، المدينة', en: 'Gender, colour, city' } },
            { title: { ar: 'ترتيبية', en: 'Ordinal' }, en: 'Ordinal', text: { ar: 'بيانات بتتقسم لفئات ومعاها ترتيب.', en: 'Data split into categories with an order.' }, example: { ar: 'مستوى التعليم، التقييمات', en: 'Level of education, ratings' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: نوعية = صفة · اسمية = من غير ترتيب · ترتيبية = بترتيب', en: 'Remember: qualitative = a quality · nominal = no order · ordinal = ordered' } },
      ],
      bito: [
        { ar: 'لون العربية اسمي: الأحمر مش "أكبر" من الأزرق.', en: 'A car’s colour is nominal: red is not "bigger" than blue.' },
        { ar: 'لكن تقييم الفيلم بالنجوم ترتيبي: 5 نجوم أحسن من 3.', en: 'But a film’s star rating is ordinal: 5 stars beat 3.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-2)، ص 136', en: 'Key Points (a-2), p. 136' },
      blocks: [
        { type: 'heading', text: { ar: 'البيانات الكمية', en: 'Quantitative data' }, code: '(Quantitative Data)' },
        {
          type: 'lead',
          text: { ar: 'بيانات رقمية ممكن نقيسها. وبتنقسم لنوعين:', en: 'Numeric data we can measure. It splits into two kinds:' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الفاصلة', en: 'Interval' }, en: 'Interval Data', text: { ar: 'بيانات رقمية من غير نقطة الصفر المطلق.', en: 'Numeric data with no absolute zero.' }, example: { ar: 'درجة الحرارة، التاريخ', en: 'Temperature, dates' } },
            { title: { ar: 'النسبية', en: 'Ratio' }, en: 'Ratio Data', text: { ar: 'بيانات رقمية مع نقطة الصفر المطلق، فالنسب بينها ليها معنى.', en: 'Numeric data with an absolute zero, so ratios between values make sense.' }, example: { ar: 'الطول، الوزن، الدخل', en: 'Height, weight, income' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: كمية = أرقام · فاصلة = من غير صفر مطلق · نسبية = بصفر مطلق', en: 'Remember: quantitative = numbers · interval = no absolute zero · ratio = with one' } },
      ],
      bito: [
        { ar: '20 كيلو ضعف 10 كيلو (نسبة)، لكن 20 درجة مش "ضعف" سخونة 10 درجات.', en: '20 kg is twice 10 kg (ratio), but 20 degrees is not "twice as hot" as 10 degrees.' },
        { ar: 'لأن الصفر في الحرارة مش "مفيش حرارة".', en: 'Because zero degrees does not mean "no heat".' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب)، ص 136', en: 'Key Points (b), p. 136' },
      blocks: [
        { type: 'heading', text: { ar: 'طرق تحليل البيانات', en: 'Ways to analyse data' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الإحصاء الوصفي', en: 'Descriptive statistics' }, en: 'Descriptive Statistics', text: { ar: 'بيلخّص ويوصف البيانات الموجودة.', en: 'Summarises and describes the data we have.' }, example: { ar: 'مقاييس النزعة المركزية: المتوسط والوسيط والمنوال', en: 'Central tendency: mean, median, mode' } },
            { title: { ar: 'مقاييس التشتت', en: 'Measures of spread' }, text: { ar: 'بتوضح البيانات متباعدة قد إيه.', en: 'Show how spread out the data is.' }, example: { ar: 'المدى، التباين، الانحراف المعياري', en: 'Range, variance, standard deviation' } },
            { title: { ar: 'الإحصاء الاستدلالي', en: 'Inferential statistics' }, en: 'Inferential Statistics', text: { ar: 'بيستنتج خصائص المجتمع كله من عينة محددة.', en: 'Works out facts about a whole population from a chosen sample.' }, example: { ar: 'اختبارات الفروض، فترات الثقة', en: 'Hypothesis tests, confidence intervals' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: وصفي = يوصف اللي معاك · استدلالي = يستنتج عن الكل', en: 'Remember: descriptive = describes what you have · inferential = concludes about the whole' } },
      ],
      bito: [
        { ar: 'متوسط درجات فصلك = وصفي. لكن تتوقع متوسط كل طلاب مصر من عينة = استدلالي.', en: 'Your class’s average = descriptive. Predicting all Egyptian students’ average from a sample = inferential.' },
        { ar: 'في الدروس الجاية هنتعلم الوصفي.', en: 'In the next lessons we learn the descriptive kind.' },
      ],
    },
    {
      source: { ar: 'جرب بنفسك (1)، ص 137', en: 'Try It Yourself (1), p. 137' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'لون العربيات اللي في الشارع (أحمر، أزرق، أبيض) من أنهي نوع بيانات؟', en: 'The colours of cars in the street (red, blue, white) are which kind of data?' },
          options: [
            { ar: 'اسمية', en: 'Nominal' },
            { ar: 'ترتيبية', en: 'Ordinal' },
            { ar: 'فاصلة', en: 'Interval' },
            { ar: 'نسبية', en: 'Ratio' },
          ],
          answer: 0,
          explanation: {
            ar: 'الألوان صفات من غير ترتيب، فهي بيانات نوعية اسمية.',
            en: 'Colours are qualities with no order, so they are nominal (qualitative) data.',
          },
          success: { ar: 'صح! لون = اسمية. +10 نقط', en: 'Correct! Colour = nominal. +10 pts' },
        },
      ],
      bito: [
        { ar: 'هل فيه ترتيب بين الألوان؟ لأ.', en: 'Is there an order between colours? No.' },
        { ar: 'يبقى اسمية.', en: 'So it is nominal.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1)، ص 136', en: 'Key Points (a-1), p. 136' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'مستوى التعليم (ابتدائي، إعدادي، ثانوي، جامعي) من أنهي نوع بيانات؟', en: 'Level of education (primary, middle, secondary, university) is which kind of data?' },
          options: [
            { ar: 'اسمية', en: 'Nominal' },
            { ar: 'ترتيبية', en: 'Ordinal' },
            { ar: 'نسبية', en: 'Ratio' },
          ],
          answer: 1,
          explanation: {
            ar: 'المستويات صفات، لكن ليها ترتيب (الجامعي أعلى من الثانوي)، فهي نوعية ترتيبية.',
            en: 'The levels are qualities, but they have an order (university is above secondary), so they are ordinal.',
          },
          success: { ar: 'صح! صفة + ترتيب = ترتيبية. +10 نقط', en: 'Correct! A quality + an order = ordinal. +10 pts' },
        },
      ],
      bito: [
        { ar: 'ده مثال الكتاب بالظبط للترتيبية.', en: 'This is the book’s exact example of ordinal.' },
        { ar: 'فيه صفة وفيه ترتيب.', en: 'It has a quality and an order.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-2)، ص 136', en: 'Key Points (a-2), p. 136' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: درجة الحرارة بيانات فاصلة، لأنها من غير نقطة الصفر المطلق.', en: 'True or false: temperature is interval data, because it has no absolute zero.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. درجة الحرارة والتاريخ مثالين على البيانات الفاصلة. أما الطول والوزن والدخل فنسبية.',
            en: '✓. Temperature and dates are examples of interval data. Height, weight and income are ratio data.',
          },
          success: { ar: 'صح! حرارة = فاصلة. +10 نقط', en: 'Correct! Temperature = interval. +10 pts' },
        },
      ],
      bito: [
        { ar: '0 درجة مش معناها مفيش حرارة.', en: '0 degrees does not mean there is no heat.' },
        { ar: 'عشان كده مفيش صفر مطلق.', en: 'That is why there is no absolute zero.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-2)، ص 136', en: 'Key Points (b-2), p. 136' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'أنهي طريقة بتستنتج خصائص المجتمع كله من عينة محددة؟', en: 'Which method works out the features of a whole population from a chosen sample?' },
          options: [
            { ar: 'الإحصاء الوصفي', en: 'Descriptive statistics' },
            { ar: 'الإحصاء الاستدلالي', en: 'Inferential statistics' },
            { ar: 'مقاييس التشتت', en: 'Measures of spread' },
          ],
          answer: 1,
          explanation: {
            ar: 'الإحصاء الاستدلالي بيستنتج عن المجتمع من عينة (اختبارات الفروض وفترات الثقة). الوصفي بيلخّص البيانات اللي معاك.',
            en: 'Inferential statistics draws conclusions about the population from a sample (hypothesis tests, confidence intervals). Descriptive statistics summarises the data you have.',
          },
          success: { ar: 'صح! استدلالي = من العينة للكل. +10 نقط', en: 'Correct! Inferential = from the sample to the whole. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الكلمة المفتاحية: "المجتمع كله".', en: 'The key phrase: "the whole population".' },
        { ar: 'الوصفي بيوصف بس اللي في إيدك.', en: 'Descriptive only describes what you hold.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 10-1!', en: 'You finished lesson 10-1!' } },
        {
          type: 'recap',
          items: [
            { code: '2 + 2', text: { ar: 'أنواع البيانات', en: 'kinds of data' } },
            { code: 'وصفي', text: { ar: 'يلخّص', en: 'summarises' } },
            { code: 'استدلالي', text: { ar: 'يستنتج', en: 'concludes' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة الفرز: صنّف أنواع البيانات.', en: 'Well done! The sorting game: classify the kinds of data.' },
        { ar: 'وجولة تانية عن طرق التحليل.', en: 'And a second round about the ways of analysing.' },
      ],
    },
  ],

  game: {
    kind: 'sort',
    rounds: [
      {
        title: { ar: 'أنهي نوع بيانات؟', en: 'Which kind of data?' },
        source: { ar: 'النقاط الرئيسية (أ)، ص 136', en: 'Key Points (a), p. 136' },
        bins: [
          { id: 'nominal', label: { ar: 'اسمية', en: 'Nominal' } },
          { id: 'ordinal', label: { ar: 'ترتيبية', en: 'Ordinal' } },
          { id: 'interval', label: { ar: 'فاصلة', en: 'Interval' } },
          { id: 'ratio', label: { ar: 'نسبية', en: 'Ratio' } },
        ],
        items: [
          { text: { ar: 'الجنس', en: 'Gender' }, bin: 'nominal' },
          { text: { ar: 'المدينة', en: 'City' }, bin: 'nominal' },
          { text: { ar: 'مستوى التعليم', en: 'Level of education' }, bin: 'ordinal' },
          { text: { ar: 'التقييمات', en: 'Ratings' }, bin: 'ordinal' },
          { text: { ar: 'درجة الحرارة', en: 'Temperature' }, bin: 'interval' },
          { text: { ar: 'التاريخ', en: 'Dates' }, bin: 'interval' },
          { text: { ar: 'الطول', en: 'Height' }, bin: 'ratio' },
          { text: { ar: 'الوزن', en: 'Weight' }, bin: 'ratio' },
        ],
      },
      {
        title: { ar: 'وصفي ولا استدلالي؟', en: 'Descriptive or inferential?' },
        source: { ar: 'النقاط الرئيسية (ب)، ص 136', en: 'Key Points (b), p. 136' },
        bins: [
          { id: 'descriptive', label: { ar: 'الإحصاء الوصفي', en: 'Descriptive' } },
          { id: 'inferential', label: { ar: 'الإحصاء الاستدلالي', en: 'Inferential' } },
        ],
        items: [
          { text: { ar: 'المتوسط', en: 'Mean' }, bin: 'descriptive' },
          { text: { ar: 'الوسيط', en: 'Median' }, bin: 'descriptive' },
          { text: { ar: 'المنوال', en: 'Mode' }, bin: 'descriptive' },
          { text: { ar: 'الانحراف المعياري', en: 'Standard deviation' }, bin: 'descriptive' },
          { text: { ar: 'اختبارات الفروض', en: 'Hypothesis tests' }, bin: 'inferential' },
          { text: { ar: 'فترات الثقة', en: 'Confidence intervals' }, bin: 'inferential' },
        ],
      },
    ],
  },
};
