import { Lesson } from '@core/models';

/**
 * Lesson 11-2 "المحاكاة (١)" — ministry book pp. 157–159.
 * Book notes:
 * - p.157: relative and absolute cell references ($A$3), simulation, the water-tank model (volume = inflow rate × elapsed time)
 *   and compound interest (balance after = principal × (1 + rate)^years; 1,000,000 yen at 4%: 1,040,000, 1,081,600, 1,124,864).
 * - The answer key on p.159 is partly unclear; the site's questions follow the Key Points and the book's tables.
 * - The code challenge applies the compound-interest formula for other numbers of years.
 */
export const LESSON_11_2: Lesson = {
  unitId: 11,
  id: '11-2',
  title: { ar: 'المحاكاة (١): المراجع والفائدة المركبة', en: 'Simulation (1): References and Compound Interest' },
  bookPages: '157 – 159',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! المحاكاة إنك تجرّب في الكمبيوتر قبل ما تجرّب في الواقع.', en: 'Hi! Simulation means trying it on the computer before trying it for real.' },
        { ar: 'في الآخر لعبة توصيل، وتحدي كود بتحسب فيه فلوسك في البنك.', en: 'At the end there is a matching game, and a code challenge where you work out your money in the bank.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (1)، ص 157', en: 'Key Points (1), p. 157' },
      blocks: [
        { type: 'heading', text: { ar: 'المرجع النسبي والمطلق', en: 'Relative and absolute references' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'مرجع نسبي', en: 'Relative reference' }, en: 'Relative Reference', text: { ar: 'طريقة مرجعية بيتغير فيها موضع الخلية المُشار إليها تلقائيًا لما تنسخ الصيغة.', en: 'A reference where the cell pointed to changes automatically when you copy the formula.' }, example: { ar: 'C3 تبقى C4 لما تنزل صف', en: 'C3 becomes C4 when you go down a row' } },
            { title: { ar: 'مرجع مطلق', en: 'Absolute reference' }, en: 'Absolute Reference', text: { ar: 'طريقة مرجعية بتفضل ثابتة على موضع الخلية. بنضيف علامة $ قبل العمود والصف.', en: 'A reference that stays fixed on the cell’s position. We add a $ sign before the column and the row.' }, example: { ar: '$A$3 ثابتة مهما نسخت', en: '$A$3 stays put wherever you copy' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: $ = ثبّت الخلية', en: 'Remember: $ = pin the cell' } },
      ],
      bito: [
        { ar: 'هتحتاج المطلق لما تحط رقم ثابت زي سعر الفايدة وتنسخ الصيغة لتحت.', en: 'You need the absolute one when you hold a fixed number like an interest rate and copy a formula down.' },
        { ar: 'من غير $ الخلية هتتحرك معاك.', en: 'Without $ the cell will move with you.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2-1)، ص 157', en: 'Key Points (2-1), p. 157' },
      blocks: [
        { type: 'heading', text: { ar: 'المحاكاة', en: 'Simulation' }, code: '(Simulation)' },
        {
          type: 'cards',
          items: [
            { title: { ar: 'المحاكاة', en: 'Simulation' }, en: 'Simulation', text: { ar: 'بنعمل نموذج للظاهرة أو الحدث، ونجري التجارب عليه علشان نتنبأ بالنتائج، حتى لو الحدث لسه ما حصلش.', en: 'We build a model of a phenomenon or event and run experiments on it to predict results, even if it has not happened yet.' }, example: { ar: 'لعبة قيادة بتحاكي السواقة', en: 'A driving game that imitates driving' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: محاكاة = نموذج + تجربة + توقع', en: 'Remember: simulation = a model + an experiment + a prediction' } },
      ],
      bito: [
        { ar: 'الطيارين بيتدربوا على جهاز محاكاة قبل ما يطيروا بطيارة حقيقية.', en: 'Pilots train on a simulator before flying a real plane.' },
        { ar: 'أرخص وأأمن.', en: 'Cheaper and safer.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2-2-1)، ص 157', en: 'Key Points (2-2-1), p. 157' },
      blocks: [
        { type: 'heading', text: { ar: 'مثال: خزان المياه', en: 'Example: a water tank' } },
        {
          type: 'lead',
          text: { ar: 'بنحاكي حجم المياه في الخزان بعد وقت معين. الحجم = معدل تدفق المياه × الزمن المنقضي.', en: 'We simulate the volume of water in the tank after some time. Volume = the water’s inflow rate × the elapsed time.' },
        },
        {
          type: 'compare',
          columns: [
            { ar: 'الوقت (دقيقة)', en: 'Time (min)' },
            { ar: 'الحجم (لتر)', en: 'Volume (L)' },
          ],
          rows: [
            { label: { ar: 'معدل التدفق 6 لتر/دقيقة', en: 'Inflow 6 L/min' }, cells: [{ ar: '0', en: '0' }, { ar: '0', en: '0' }] },
            { label: { ar: '', en: '' }, cells: [{ ar: '1', en: '1' }, { ar: '6', en: '6' }] },
            { label: { ar: '', en: '' }, cells: [{ ar: '2', en: '2' }, { ar: '12', en: '12' }] },
            { label: { ar: '', en: '' }, cells: [{ ar: '3', en: '3' }, { ar: '18', en: '18' }] },
            { label: { ar: '', en: '' }, cells: [{ ar: '4', en: '4' }, { ar: '24', en: '24' }] },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: الحجم = المعدل × الوقت (والمعدل ثابت = $A$3)', en: 'Remember: volume = rate × time (and the rate is fixed = $A$3)' } },
      ],
      bito: [
        { ar: 'ده نموذج رياضي وحتمي: المعدل ثابت فالناتج معروف.', en: 'This is a mathematical and deterministic model: the rate is fixed so the result is known.' },
        { ar: 'في الجدول، معدل التدفق في الخلية A3 بصيغة مطلقة $A$3.', en: 'In the spreadsheet, the inflow rate sits in cell A3 as an absolute reference $A$3.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2-2-2)، ص 157', en: 'Key Points (2-2-2), p. 157' },
      blocks: [
        { type: 'heading', text: { ar: 'الفائدة المركبة', en: 'Compound interest' }, code: '(Compound interest method)' },
        {
          type: 'lead',
          text: { ar: 'طريقة بيتم فيها جمع الفائدة المتولدة من المبلغ الأصلي، فبتتحسب الفايدة التالية على المبلغ الأصلي مع الفايدة. مثال الكتاب: 100 ين بفايدة 5% = 105 ثم 110.25...', en: 'A method where the interest earned is added to the original amount, so the next interest is worked out on the original plus the interest. The book’s example: 100 yen at 5% = 105 then 110.25...' },
        },
        {
          type: 'compare',
          columns: [{ ar: 'الرصيد (ين)', en: 'Balance (yen)' }],
          rows: [
            { label: { ar: 'بداية (مليون بفايدة 4%)', en: 'Start (1 million at 4%)' }, cells: [{ ar: '1,000,000', en: '1,000,000' }] },
            { label: { ar: 'بعد سنة', en: 'After 1 year' }, cells: [{ ar: '1,040,000', en: '1,040,000' }] },
            { label: { ar: 'بعد سنتين', en: 'After 2 years' }, cells: [{ ar: '1,081,600', en: '1,081,600' }] },
            { label: { ar: 'بعد 3 سنين', en: 'After 3 years' }, cells: [{ ar: '1,124,864', en: '1,124,864' }] },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: كل سنة بنضرب في (1 + الفايدة)', en: 'Remember: each year we multiply by (1 + the rate)' } },
      ],
      bito: [
        { ar: '1,000,000 × 1.04 = 1,040,000، وبعدين × 1.04 تاني = 1,081,600.', en: '1,000,000 × 1.04 = 1,040,000, then × 1.04 again = 1,081,600.' },
        { ar: 'الفايدة بتاخد فايدة! ده اسمه مركبة.', en: 'Interest earns interest! That is why it is called compound.' },
      ],
    },
    {
      source: { ar: 'جرب بنفسك (1)، ص 159', en: 'Try It Yourself (1), p. 159' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'في الجدول: معدل التدفق في خلية A3 وبنحط الصيغة في D3 وننسخها لتحت. أنهي كتابة صح لمعدل التدفق عشان يفضل ثابت؟', en: 'The inflow rate is in cell A3 and the formula in D3 is copied down. Which way of writing the rate keeps it fixed?' },
          options: ['A3', '$A$3', 'A$3 + 1', '3A'],
          answer: 1,
          explanation: {
            ar: '$A$3 مرجع مطلق: فيه $ قبل العمود والصف، فمبيتحركش لما تنسخ الصيغة. A3 مرجع نسبي وهيتزحلق.',
            en: '$A$3 is an absolute reference: it has a $ before the column and the row, so it does not move when you copy the formula. A3 is relative and would slide.',
          },
          success: { ar: 'صح! $A$3 ثابتة. +10 نقط', en: 'Correct! $A$3 stays fixed. +10 pts' },
        },
      ],
      bito: [
        { ar: 'علامة الدولار مش للفلوس هنا، دي للتثبيت.', en: 'The dollar sign is not about money here; it pins.' },
        { ar: 'واحدة قبل العمود وواحدة قبل الصف.', en: 'One before the column and one before the row.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2-2-1)، ص 157', en: 'Key Points (2-2-1), p. 157' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'خزان بيدخله 6 لتر في الدقيقة. كام لتر بعد 4 دقايق؟', en: 'A tank takes in 6 litres a minute. How many litres after 4 minutes?' },
          options: ['10', '18', '24', '36'],
          answer: 2,
          explanation: {
            ar: 'الحجم = معدل التدفق × الزمن = 6 × 4 = 24 لتر.',
            en: 'Volume = inflow rate × time = 6 × 4 = 24 litres.',
          },
          success: { ar: 'صح! 6 × 4 = 24. +10 نقط', en: 'Correct! 6 × 4 = 24. +10 pts' },
        },
      ],
      bito: [
        { ar: 'اضرب المعدل في الوقت.', en: 'Multiply the rate by the time.' },
        { ar: 'نفس صف الجدول بتاع الكتاب.', en: 'The same row as in the book’s table.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2-2-2)، ص 157', en: 'Key Points (2-2-2), p. 157' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'مليون ين بفايدة مركبة 4% في السنة. كام الرصيد بعد سنتين؟', en: '1 million yen at 4% compound interest a year. What is the balance after two years?' },
          options: ['1,080,000', '1,081,600', '1,120,000', '1,124,864'],
          answer: 1,
          explanation: {
            ar: 'بعد سنة 1,040,000، وبعد سنتين 1,040,000 × 1.04 = 1,081,600. (لو فايدة بسيطة كانت 1,080,000.)',
            en: 'After one year 1,040,000; after two, 1,040,000 × 1.04 = 1,081,600. (With simple interest it would be 1,080,000.)',
          },
          success: { ar: 'صح! الفايدة بتتراكم. +10 نقط', en: 'Correct! Interest builds up. +10 pts' },
        },
      ],
      bito: [
        { ar: 'هتلاقي نفس الرقم في جدول الكتاب.', en: 'You will find this number in the book’s table.' },
        { ar: 'والفرق عن البسيطة: 1,600 ين زيادة من فايدة الفايدة.', en: 'And the difference from simple interest: 1,600 extra yen from interest on interest.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 11-2!', en: 'You finished lesson 11-2!' } },
        {
          type: 'recap',
          items: [
            { code: '$A$3', text: { ar: 'مرجع مطلق', en: 'absolute reference' } },
            { code: '6 × t', text: { ar: 'حجم الخزان', en: 'tank volume' } },
            { code: '×1.04', text: { ar: 'فايدة مركبة', en: 'compound interest' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة التوصيل أولًا، وتحدي الكود بعدها.', en: 'Well done! The matching game first, then the code challenge.' },
        { ar: 'في التحدي هتكتب سطر الفايدة المركبة.', en: 'In the challenge you write the compound-interest line.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'المصطلح ومعناه', en: 'The term and its meaning' },
        source: { ar: 'النقاط الرئيسية، ص 157', en: 'Key Points, p. 157' },
        pairs: [
          { left: { text: { ar: 'مرجع نسبي', en: 'Relative reference' } }, right: { ar: 'بيتغير تلقائيًا لما تنسخ الصيغة', en: 'Changes automatically when you copy the formula' } },
          { left: { text: { ar: 'مرجع مطلق', en: 'Absolute reference' } }, right: { ar: 'بيفضل ثابت (بعلامة $)', en: 'Stays fixed (with the $ sign)' } },
          { left: { text: { ar: 'المحاكاة', en: 'Simulation' } }, right: { ar: 'تجارب على نموذج للتنبؤ بالنتيجة', en: 'Experiments on a model to predict the result' } },
          { left: { text: { ar: 'الفائدة المركبة', en: 'Compound interest' } }, right: { ar: 'فايدة على المبلغ والفايدة المضافة', en: 'Interest on the amount and the added interest' } },
        ],
      },
      {
        title: { ar: 'الرقم ونتيجته', en: 'The number and its result' },
        source: { ar: 'جداول ص 157', en: 'The tables, p. 157' },
        pairs: [
          { left: { text: { ar: 'خزان 6 لتر/د بعد 3 دقايق', en: 'A tank at 6 L/min after 3 minutes' } }, right: { ar: '18 لتر', en: '18 litres' } },
          { left: { text: { ar: 'مليون بـ 4% بعد سنة', en: '1 million at 4% after 1 year' } }, right: { ar: '1,040,000', en: '1,040,000' } },
          { left: { text: { ar: 'مليون بـ 4% بعد سنتين', en: '1 million at 4% after 2 years' } }, right: { ar: '1,081,600', en: '1,081,600' } },
          { left: { text: { ar: 'مليون بـ 4% بعد 3 سنين', en: '1 million at 4% after 3 years' } }, right: { ar: '1,124,864', en: '1,124,864' } },
        ],
      },
    ],
  },

  challenge: {
    title: { ar: 'كام رصيدك بعد كام سنة؟', en: 'What is your balance after some years?' },
    intro: {
      ar: 'الدالة balanceAfter بتحسب رصيد مليون ين بفايدة مركبة 4% بعد عدد معين من السنين. ناقصها سطر واحد: سطر الإرجاع (قرّب لأقرب رقم صحيح).',
      en: 'The function balanceAfter works out the balance of 1 million yen at 4% compound interest after some years. It is missing one line: the return (round to the nearest whole number).',
    },
    source: { ar: 'الفكرة من: جدول الفائدة المركبة، ص 157', en: 'Idea from: the compound-interest table, p. 157' },
    functionName: 'balanceAfter',
    starter: {
      ar: 'function balanceAfter(years) {\n  const principal = 1000000;\n  const rate = 0.04;\n  // ← اكتب هنا سطر الإرجاع: المبلغ × (1 + الفايدة) أُس السنين، وقرّبه\n\n}\n',
      en: 'function balanceAfter(years) {\n  const principal = 1000000;\n  const rate = 0.04;\n  // ← write the return line here: principal × (1 + rate) to the power of years, rounded\n\n}\n',
    },
    tests: [
      { input: 1, expected: 1040000 },
      { input: 2, expected: 1081600 },
      { input: 3, expected: 1124864 },
      { input: 10, expected: 1480244 },
    ],
    banned: { pattern: '1040000|1081600|1124864|1480244', label: 'الرقم الجاهز (1040000)' },
    hints: [
      {
        ar: 'كل سنة الرصيد بيتضرب في (1 + rate). بعد years سنة بيتضرب years مرة.',
        en: 'Each year the balance is multiplied by (1 + rate). After years years it is multiplied years times.',
      },
      {
        ar: 'استخدم Math.pow(1 + rate, years) أو **، وبعدين اضربه في principal ولفّ الناتج بـ Math.round.',
        en: 'Use Math.pow(1 + rate, years) or **, then multiply by principal and wrap the result in Math.round.',
      },
      { ar: 'return Math.round(principal * Math.pow(1 + rate, years));', en: 'return Math.round(principal * Math.pow(1 + rate, years));' },
    ],
  },
};
