import { Lesson } from '@core/models';

/**
 * Lesson 10-6 "تحليل البيانات (٥): تحليل الانحدار" — ministry book pp. 151–152.
 * Book notes:
 * - p.151: regression analysis, simple regression analysis, regression line y = ax + b, the least squares method, residuals.
 *   Example line: y = 0.0287x + 297.86 (steps and sleep minutes); at x = 5,000 steps y = 441.36 ≈ 441 minutes.
 * - p.151 key: (1) simple regression analysis; (2) [1] least squares, [2] residual, [3] minimise.
 * - p.152: y = −0.9337x + 12.94 at x = 10 gives about 3.6 (≈ 4 hours); y = 0.5511x − 32.958 at 173 cm gives about 62 kg.
 * - The code challenge applies the book's regression line to other step counts.
 */
export const LESSON_10_6: Lesson = {
  unitId: 10,
  id: '10-6',
  title: { ar: 'تحليل البيانات (٥): تحليل الانحدار', en: 'Analysing Data (5): Regression Analysis' },
  bookPages: '151 – 152',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! لو عندك علاقة بين متغيرين، ممكن ترسم خط يتوقع القيمة الجاية. ده الانحدار.', en: 'Hi! If two variables are related, you can draw a line that predicts the next value. That is regression.' },
        { ar: 'في الآخر لعبة توصيل، وتحدي كود بتتوقع فيه مدة النوم.', en: 'At the end there is a matching game, and a code challenge where you predict sleep time.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (1، 2)، ص 151', en: 'Key Points (1, 2), p. 151' },
      blocks: [
        { type: 'heading', text: { ar: 'تحليل الانحدار', en: 'Regression analysis' }, code: '(Regression Analysis)' },
        {
          type: 'cards',
          items: [
            { title: { ar: 'تحليل الانحدار', en: 'Regression analysis' }, en: 'Regression Analysis', text: { ar: 'طريقة لدراسة العلاقة السببية بين القيمة الناتجة والقيمة المسببة. بتُستخدم في التنبؤات.', en: 'A way of studying the causal link between the result and its cause. It is used for predictions.' }, example: { ar: 'تتوقع الدرجة من ساعات المذاكرة', en: 'Predicting a score from study hours' } },
            { title: { ar: 'الانحدار البسيط', en: 'Simple regression' }, en: 'Simple Regression Analysis', text: { ar: 'بنتنبأ بالمتغير y باستخدام متغير واحد سببي x.', en: 'We predict the variable y using one causal variable x.' }, example: { ar: 'y = النوم، x = الخطوات', en: 'y = sleep, x = steps' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: x هو السبب · y هو الناتج المتوقع', en: 'Remember: x is the cause · y is the predicted result' } },
      ],
      bito: [
        { ar: 'x بنختاره إحنا، و y هو اللي بنتنبأ بيه.', en: 'We choose x, and y is what we predict.' },
        { ar: 'مثال الكتاب: عدد الخطوات في اليوم ومدة النوم في الليلة.', en: 'The book’s example: steps in a day and sleep length at night.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (3، 4)، ص 151', en: 'Key Points (3, 4), p. 151' },
      blocks: [
        { type: 'heading', text: { ar: 'خط الانحدار', en: 'The regression line' } },
        {
          type: 'lead',
          text: { ar: 'خط بيمثل القيم المتوقعة في مخطط الانتشار. بنكتبه بمعادلة: y = ax + b. جرّب تظهر الخط على مثال الكتاب:', en: 'A line showing the expected values on a scatter plot. We write it as an equation: y = ax + b. Try showing the line on the book’s example:' },
        },
        {
          type: 'scatter-lab',
          sets: [
            { name: { ar: 'جدول الكتاب (ص 148)', en: 'The book’s table (p. 148)' }, points: [[7, 3], [4, 6], [6, 5], [2, 8], [9, 3], [3, 4], [8, 2], [1, 9], [6, 2], [3, 5]] },
            { name: { ar: 'مثال: ارتباط إيجابي', en: 'Example: positive' }, points: [[1, 2], [2, 3], [3, 3.5], [4, 5], [5, 5.5], [6, 7], [7, 7.5], [8, 9]] },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: y = ax + b · a = ميل الخط', en: 'Remember: y = ax + b · a = the line’s slope' } },
      ],
      bito: [
        { ar: 'دوس "خط الانحدار" وشوف الخط وهو بيعدّي بين النقط.', en: 'Press "regression line" and watch the line pass between the dots.' },
        { ar: 'ولو الارتباط قوي، النقط بتبقى قريبة منه.', en: 'And with a strong correlation the dots sit close to it.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (4)، ص 151', en: 'Key Points (4), p. 151' },
      blocks: [
        { type: 'heading', text: { ar: 'طريقة المربعات الصغرى', en: 'The least squares method' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'المربعات الصغرى', en: 'Least squares method' }, en: 'Least squares method', text: { ar: 'طريقة بنستخدمها لتقليل الخطأ الرأسي (المتبقي) بين الخط والنقط.', en: 'A method used to minimise the vertical error (the residual) between the line and the dots.' }, example: { ar: 'نختار الخط اللي مجموع أخطاءه المربعة أصغر ما يمكن', en: 'We pick the line whose squared errors add up to the least' } },
            { title: { ar: 'المتبقي (Residual)', en: 'Residual' }, en: 'Residual', text: { ar: 'الخطأ بين النقطة الحقيقية والخط.', en: 'The error between the real data point and the line.' }, example: { ar: 'مسافة النقطة رأسيًا عن الخط', en: 'The dot’s vertical distance from the line' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: خط الانحدار يقلّل المتبقي', en: 'Remember: the regression line minimises the residual' } },
      ],
      bito: [
        { ar: 'الخط ده هو "أحسن خط" يقرّب لكل النقط مع بعض.', en: 'This line is the "best line" that gets close to all the dots together.' },
        { ar: 'الجداول بتحسبه لوحدها، إنت بس بتقرأ المعادلة.', en: 'Spreadsheets work it out for you; you just read the equation.' },
      ],
    },
    {
      source: { ar: 'مثال الكتاب، ص 151–152', en: 'The book’s example, pp. 151–152' },
      blocks: [
        { type: 'heading', text: { ar: 'نتوقع النوم من الخطوات', en: 'Predicting sleep from steps' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'المعادلة', en: 'The equation' }, text: { ar: 'y = 0.0287x + 297.86', en: 'y = 0.0287x + 297.86' }, example: { ar: 'x = الخطوات، y = دقايق النوم', en: 'x = steps, y = minutes of sleep' } },
            { title: { ar: 'لو x = 5,000 خطوة', en: 'If x = 5,000 steps' }, text: { ar: 'y = 0.0287 × 5,000 + 297.86 = 441.36', en: 'y = 0.0287 × 5,000 + 297.86 = 441.36' }, example: { ar: 'حوالي 441 دقيقة نوم', en: 'About 441 minutes of sleep' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: عوّض عن x وطلّع y', en: 'Remember: put in x and get y' } },
      ],
      bito: [
        { ar: '441 دقيقة = حوالي 7 ساعات ونص.', en: '441 minutes is about 7 and a half hours.' },
        { ar: 'في التحدي هتكتب المعادلة دي بالكود.', en: 'In the challenge you write this equation in code.' },
      ],
    },
    {
      source: { ar: 'اختبر معلوماتك (1)، ص 151', en: 'Test Your Knowledge (1), p. 151' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه اسم عملية تحديد خط معادلته y = ax + b لتمثيل العلاقة بين متغيرين، x سببي و y ناتج؟', en: 'What is the process of finding a line y = ax + b to show the relationship between two variables, x causal and y the result, called?' },
          options: [
            { ar: 'تحليل الانحدار البسيط', en: 'Simple regression analysis' },
            { ar: 'جدولة متقاطعة', en: 'Cross tabulation' },
            { ar: 'المدرج التكراري', en: 'Histogram' },
          ],
          answer: 0,
          explanation: {
            ar: 'تحليل الانحدار البسيط (Simple Regression Analysis) بيتنبأ بـ y باستخدام متغير واحد x وخط مستقيم.',
            en: 'Simple regression analysis predicts y from a single variable x using a straight line.',
          },
          success: { ar: 'صح! انحدار بسيط = خط بمتغير واحد. +10 نقط', en: 'Correct! Simple regression = a line with one variable. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الكلمة المفتاحية: "خط معادلته y = ax + b".', en: 'The key phrase: "a line y = ax + b".' },
        { ar: 'والاتنين التانيين بيلخّصوا بيانات.', en: 'The other two just summarise data.' },
      ],
    },
    {
      source: { ar: 'اختبر معلوماتك (2)، ص 151', en: 'Test Your Knowledge (2), p. 151' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'طريقة إيجاد الخط اللي بيناسب البيانات الفعلية بتقليل الخطأ الرأسي بين الخط والنقط اسمها إيه؟', en: 'The way of finding the line that fits the real data by minimising the vertical error between line and dots is called what?' },
          options: [
            { ar: 'طريقة المربعات الصغرى', en: 'The least squares method' },
            { ar: 'المنوال', en: 'The mode' },
            { ar: 'الارتباط الزائف', en: 'Pseudo-correlation' },
          ],
          answer: 0,
          explanation: {
            ar: 'طريقة المربعات الصغرى بتقلّل المتبقي (الخطأ الرأسي) بين خط الانحدار ونقط البيانات.',
            en: 'The least squares method minimises the residual (vertical error) between the regression line and the data points.',
          },
          success: { ar: 'صح! مربعات صغرى = أقل خطأ. +10 نقط', en: 'Correct! Least squares = the smallest error. +10 pts' },
        },
      ],
      bito: [
        { ar: 'مفتاح السؤال: "تقليل الخطأ".', en: 'The question’s key: "minimising the error".' },
        { ar: 'الخطأ اسمه المتبقي.', en: 'The error is called the residual.' },
      ],
    },
    {
      source: { ar: 'الحل (3)، ص 152', en: 'Solution (3), p. 152' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'بالمعادلة y = 0.0287x + 297.86، كام دقيقة نوم متوقعة لما x = 5,000 خطوة؟ (قرّب لأقرب رقم صحيح)', en: 'With y = 0.0287x + 297.86, how many minutes of sleep are predicted when x = 5,000 steps? (round to the nearest whole number)' },
          options: ['143', '298', '441', '585'],
          answer: 2,
          explanation: {
            ar: '0.0287 × 5,000 = 143.5، و143.5 + 297.86 = 441.36، يعني حوالي 441 دقيقة.',
            en: '0.0287 × 5,000 = 143.5, and 143.5 + 297.86 = 441.36, so about 441 minutes.',
          },
          success: { ar: 'صح! حوالي 441 دقيقة. +10 نقط', en: 'Correct! About 441 minutes. +10 pts' },
        },
      ],
      bito: [
        { ar: 'اضرب الأول وبعدين اجمع.', en: 'Multiply first, then add.' },
        { ar: 'جرّب نفس الحساب في التحدي بالكود.', en: 'Try the same sum in the code challenge.' },
      ],
    },
    {
      source: { ar: 'جرب بنفسك (2)، ص 151', en: 'Try It Yourself (2), p. 151' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'في y = −0.9337x + 12.94: x ساعات استخدام الموبايل، وy ساعات ممارسة الرياضة. كام ساعة رياضة متوقعة لمن بيستخدم الموبايل 10 ساعات؟ (قرّب)', en: 'In y = −0.9337x + 12.94: x is phone hours and y is hours of sport. How many sport hours are predicted for someone on their phone 10 hours? (round)' },
          options: ['حوالي 4 ساعات', 'حوالي 9 ساعات', 'حوالي 13 ساعة', 'حوالي 22 ساعة'],
          answer: 0,
          explanation: {
            ar: '−0.9337 × 10 = −9.337، و−9.337 + 12.94 = 3.603، يعني حوالي 4 ساعات.',
            en: '−0.9337 × 10 = −9.337, and −9.337 + 12.94 = 3.603, so about 4 hours.',
          },
          success: { ar: 'صح! حوالي 4 ساعات. +10 نقط', en: 'Correct! About 4 hours. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الميل سالب، فكل ما الموبايل زاد الرياضة قلّت.', en: 'The slope is negative, so more phone time means less sport.' },
        { ar: 'ده ارتباط سلبي.', en: 'That is a negative correlation.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 10-6 والوحدة 10!', en: 'You finished lesson 10-6 and Unit 10!' } },
        {
          type: 'recap',
          items: [
            { code: 'y = ax + b', text: { ar: 'خط الانحدار', en: 'the regression line' } },
            { code: 'min', text: { ar: 'المربعات الصغرى', en: 'least squares' } },
            { code: 'res', text: { ar: 'المتبقي', en: 'residual' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة التوصيل أولًا، وتحدي الكود بعدها.', en: 'Well done! The matching game first, then the code challenge.' },
        { ar: 'في التحدي هتكتب سطر المعادلة بنفسك.', en: 'In the challenge you write the equation line yourself.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'المصطلح ومعناه', en: 'The term and its meaning' },
        source: { ar: 'النقاط الرئيسية، ص 151', en: 'Key Points, p. 151' },
        pairs: [
          { left: { text: { ar: 'تحليل الانحدار', en: 'Regression analysis' } }, right: { ar: 'دراسة العلاقة بين الناتج والسبب للتنبؤ', en: 'Studying the result–cause link to predict' } },
          { left: { text: { ar: 'خط الانحدار', en: 'Regression line' } }, right: { ar: 'خط بيمثل القيم المتوقعة', en: 'A line showing the expected values' } },
          { left: { text: { ar: 'المربعات الصغرى', en: 'Least squares' } }, right: { ar: 'طريقة بتقلّل الخطأ الرأسي', en: 'A method that minimises the vertical error' } },
          { left: { text: { ar: 'المتبقي', en: 'Residual' } }, right: { ar: 'الفرق بين النقطة الحقيقية والخط', en: 'The gap between a real dot and the line' } },
        ],
      },
      {
        title: { ar: 'أجزاء المعادلة', en: 'The parts of the equation' },
        source: { ar: 'النقاط الرئيسية، ص 151–152', en: 'Key Points, pp. 151–152' },
        pairs: [
          { left: { text: { ar: 'y في y = ax + b', en: 'y in y = ax + b' } }, right: { ar: 'القيمة المتوقعة (الناتج)', en: 'The predicted value (the result)' } },
          { left: { text: { ar: 'x في y = ax + b', en: 'x in y = ax + b' } }, right: { ar: 'المتغير السببي', en: 'The causal variable' } },
          { left: { text: { ar: 'a في y = ax + b', en: 'a in y = ax + b' } }, right: { ar: 'ميل الخط', en: 'The slope of the line' } },
          { left: { text: { ar: 'مثال: x = 5000', en: 'Example: x = 5000' } }, right: { ar: 'نوم متوقع حوالي 441 دقيقة', en: 'Predicted sleep of about 441 minutes' } },
        ],
      },
    ],
  },

  challenge: {
    title: { ar: 'توقّع مدة النوم', en: 'Predict the sleep length' },
    intro: {
      ar: 'الدالة predictSleep بتستخدم خط الانحدار من الكتاب y = 0.0287x + 297.86 عشان تتوقع دقايق النوم من عدد الخطوات. ناقصها سطر واحد: سطر الإرجاع (قرّب لأقرب رقم صحيح).',
      en: 'The function predictSleep uses the book’s regression line y = 0.0287x + 297.86 to predict minutes of sleep from the number of steps. It is missing one line: the return (round to the nearest whole number).',
    },
    source: { ar: 'الفكرة من: الحل (3)، ص 151–152', en: 'Idea from: Solution (3), pp. 151–152' },
    functionName: 'predictSleep',
    starter: {
      ar: 'function predictSleep(steps) {\n  const a = 0.0287;\n  const b = 297.86;\n  // ← اكتب هنا سطر الإرجاع: قرّب (a × الخطوات + b) لأقرب رقم صحيح\n\n}\n',
      en: 'function predictSleep(steps) {\n  const a = 0.0287;\n  const b = 297.86;\n  // ← write the return line here: round (a × steps + b) to the nearest whole number\n\n}\n',
    },
    tests: [
      { input: 5000, expected: 441 },
      { input: 2000, expected: 355 },
      { input: 8000, expected: 527 },
      { input: 10000, expected: 585 },
    ],
    banned: { pattern: '\\b441\\b|\\b355\\b|\\b527\\b|\\b585\\b', label: 'الرقم الجاهز (441)' },
    hints: [
      {
        ar: 'المعادلة y = a × x + b. هنا x هو steps.',
        en: 'The equation is y = a × x + b. Here x is steps.',
      },
      {
        ar: 'اضرب a في steps وزوّد b، وبعدين لفّ الناتج بـ Math.round عشان يتقرّب.',
        en: 'Multiply a by steps and add b, then wrap the result in Math.round to round it.',
      },
      { ar: 'return Math.round(a * steps + b);', en: 'return Math.round(a * steps + b);' },
    ],
  },
};
