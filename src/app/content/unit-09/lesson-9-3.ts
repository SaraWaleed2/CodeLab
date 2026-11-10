import { Lesson } from '@core/models';

/**
 * Lesson 9-3 "نظم المعلومات المختلفة" — ministry book pp. 133–134.
 * Book notes:
 * - p.133: TPS, MIS, DSS, EIS with examples; vertical and horizontal integration; ERP.
 * - p.133 prints "Decision Support Syste" (missing the final m); the site writes "Decision Support System".
 * - p.134 key: (1) [1] information systems (ب), [2] POS (أ), [3] ITS (ث). ITS, GPS and SNS are not explained
 *   in the Key Points, so the site uses only [1] and [2] and skips the "جرب بنفسك" questions about them.
 * - The exercises on p.134 have no answer key; the site answers them from the Key Points.
 */
export const LESSON_9_3: Lesson = {
  unitId: 9,
  id: '9-3',
  title: { ar: 'نظم المعلومات المختلفة', en: 'Different Information Systems' },
  bookPages: '133 – 134',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! الكاشير في السوبر ماركت، وتقرير المدير، كلهم نظم معلومات. يلا نعرفهم.', en: 'Hi! The supermarket till and the manager’s report are all information systems. Let us meet them.' },
        { ar: 'في الآخر لعبة فرز: حط كل مثال في النظام بتاعه.', en: 'At the end there is a sorting game: put each example in its system.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1، 2)، ص 133', en: 'Key Points (a-1, 2), p. 133' },
      blocks: [
        { type: 'heading', text: { ar: 'أنظمة المعلومات (1)', en: 'Information systems (1)' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'نظام معالجة المعاملات', en: 'Transaction processing system' },
              en: 'TPS',
              text: { ar: 'نظام بيسجّل ويعالج المعاملات اليومية الروتينية للشركة.', en: 'A system that records and processes a company’s routine daily transactions.' },
              example: { ar: 'نظام نقاط البيع (POS): الكاشير بيعدّي مشترياتك، ونظام حجز تذاكر الطيران', en: 'Point of sale (POS): the cashier scans your shopping; and airline ticket booking' },
            },
            {
              title: { ar: 'نظام المعلومات الإدارية', en: 'Management information system' },
              en: 'MIS',
              text: { ar: 'نظام بيوفّر تقارير دورية للمديرين تساعدهم ياخدوا القرارات.', en: 'A system that gives managers regular reports to help them make decisions.' },
              example: { ar: 'تقارير المبيعات الشهرية، وتقارير المخزون', en: 'Monthly sales reports, and stock reports' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: TPS = كل عملية بيع · MIS = تقرير الشهر', en: 'Remember: TPS = every sale · MIS = the monthly report' } },
      ],
      bito: [
        { ar: 'كل ما الكاشير يعدّي كيس شيبسي، الـ TPS بيسجّل العملية.', en: 'Every time the cashier scans a bag of crisps, the TPS records it.' },
        { ar: 'وفي آخر الشهر، الـ MIS بيجمع كل ده في تقرير للمدير.', en: 'And at the end of the month, the MIS gathers it all into a report for the manager.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-3، 4)، ص 133', en: 'Key Points (a-3, 4), p. 133' },
      blocks: [
        { type: 'heading', text: { ar: 'أنظمة المعلومات (2)', en: 'Information systems (2)' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'نظام دعم القرار', en: 'Decision support system' },
              en: 'DSS',
              text: { ar: 'نظام بيساعد المديرين ياخدوا قرارات مش روتينية، عن طريق النمذجة والمحاكاة.', en: 'A system that helps managers make non-routine decisions through modelling and simulation.' },
              example: { ar: 'تحليل "ماذا لو": لو نزّلنا السعر، المبيعات هتزيد كام؟', en: '"What if" analysis: if we lower the price, how much will sales grow?' },
            },
            {
              title: { ar: 'نظام المعلومات التنفيذي', en: 'Executive information system' },
              en: 'EIS',
              text: { ar: 'نظام بيوفّر معلومات مختصرة للمستوى التنفيذي (الإدارة العليا) عن أداء المنظمة كلها.', en: 'A system that gives the executive level (top management) short information about how the whole organization is doing.' },
              example: { ar: 'لوحات التحكم التنفيذية، ومؤشرات الأداء الرئيسية (KPIs)', en: 'Executive dashboards, and key performance indicators (KPIs)' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: DSS = ماذا لو؟ · EIS = لوحة الإدارة العليا', en: 'Remember: DSS = what if? · EIS = the top management dashboard' } },
      ],
      bito: [
        { ar: 'الـ DSS زي لما تسأل: لو ذاكرت ساعة زيادة كل يوم، مجموعي هيبقى كام؟', en: 'A DSS is like asking: if I study one extra hour a day, what will my total be?' },
        { ar: 'والـ EIS زي عدّاد العربية: أهم الأرقام قدام المدير في نظرة واحدة.', en: 'And an EIS is like a car dashboard: the key numbers in front of the boss at a glance.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب، ت)، ص 133', en: 'Key Points (b, c), p. 133' },
      blocks: [
        { type: 'heading', text: { ar: 'تكامل النظم وERP', en: 'Linking systems, and ERP' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'التكامل الرأسي', en: 'Vertical integration' },
              en: 'Vertical Integration',
              text: { ar: 'ربط النظم على مستويات مختلفة من المنظمة.', en: 'Linking systems at different levels of the organization.' },
              example: { ar: 'ربط TPS (الكاشير) بـ MIS (تقارير المدير)', en: 'Linking a TPS (the till) with an MIS (the manager’s reports)' },
            },
            {
              title: { ar: 'التكامل الأفقي', en: 'Horizontal integration' },
              en: 'Horizontal Integration',
              text: { ar: 'ربط النظم على نفس المستوى عبر أقسام مختلفة.', en: 'Linking systems on the same level across different departments.' },
              example: { ar: 'ربط نظام المبيعات بنظام المخزون', en: 'Linking the sales system with the stock system' },
            },
            {
              title: { ar: 'نظام تخطيط موارد المؤسسة', en: 'Enterprise resource planning' },
              en: 'ERP',
              text: { ar: 'نظام متكامل بيجمع وظايف الأعمال المختلفة، زي المحاسبة والموارد البشرية وسلسلة التوريد وإدارة علاقات العملاء، في نظام واحد.', en: 'One joined-up system that brings together the business functions, like accounting, human resources, the supply chain and customer relations.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: رأسي = فوق وتحت · أفقي = جنب بعض · ERP = كله في نظام واحد', en: 'Remember: vertical = up and down · horizontal = side by side · ERP = all in one system' } },
      ],
      bito: [
        { ar: 'رأسي زي الأسانسير: من الدور الأرضي (الكاشير) للدور العالي (المدير).', en: 'Vertical is like a lift: from the ground floor (the till) to the top floor (the manager).' },
        { ar: 'أفقي زي ممر في نفس الدور: من قسم المبيعات لقسم المخزون.', en: 'Horizontal is like a corridor on one floor: from sales to stock.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1) [1]، ص 134', en: 'Test Your Knowledge (1) [1], p. 134' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'حياتنا اليومية بتعتمد على ...... المكوّنة من البشر وأجهزة الكمبيوتر وغيرها من معدات تكنولوجيا المعلومات والاتصالات.', en: 'Our daily life depends on ...... made of people, computers and other information and communication technology equipment.' },
          options: [
            { ar: 'نظام نقاط البيع POS', en: 'Point of sale (POS)' },
            { ar: 'أنظمة المعلومات', en: 'Information systems' },
            { ar: 'خدمة الشبكات الاجتماعية SNS', en: 'Social networking service (SNS)' },
          ],
          answer: 1,
          explanation: {
            ar: 'الإجابة (ب) أنظمة المعلومات: بشر + أجهزة كمبيوتر + معدات اتصالات شغالين مع بعض.',
            en: 'The answer is (b) information systems: people + computers + communication equipment working together.',
          },
          success: { ar: 'صح! أنظمة المعلومات. +10 نقط', en: 'Correct! Information systems. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الجملة بتوصف حاجة كبيرة فيها ناس وأجهزة.', en: 'The sentence describes something big with people and machines.' },
        { ar: 'ده اسم الدرس نفسه!', en: 'That is the lesson’s own name!' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1) [2]، ص 134', en: 'Test Your Knowledge (1) [2], p. 134' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'من أمثلة أنظمة المعلومات ...... ، وفيه بيتم جمع البيانات وإدارتها وقت بيع المنتج.', en: 'One example of an information system is ...... , where data is collected and managed at the moment a product is sold.' },
          options: [
            { ar: 'نظام نقاط البيع POS', en: 'Point of sale (POS)' },
            { ar: 'نظام دعم القرار DSS', en: 'Decision support system (DSS)' },
            { ar: 'نظام المعلومات التنفيذي EIS', en: 'Executive information system (EIS)' },
          ],
          answer: 0,
          explanation: {
            ar: 'الإجابة (أ) نظام نقاط البيع POS: بيسجّل كل عملية بيع لحظة ما بتحصل، وده مثال على TPS.',
            en: 'The answer is (a) point of sale (POS): it records each sale the moment it happens, an example of a TPS.',
          },
          success: { ar: 'صح! وقت البيع = POS. +10 نقط', en: 'Correct! At the sale = POS. +10 pts' },
        },
      ],
      bito: [
        { ar: '"وقت بيع المنتج" = عند الكاشير.', en: '"At the moment of sale" = at the till.' },
        { ar: 'POS = Point of Sale = نقطة البيع.', en: 'POS = Point of Sale.' },
      ],
    },
    {
      source: { ar: 'تمرين (1)، ص 134', en: 'Exercise (1), p. 134' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'اختار الشرح المناسب لنظام POS:', en: 'Choose the right description of a POS system:' },
          options: [
            { ar: 'نظام بيستخدم الأقمار الصناعية لتحديد المواقع الحالية.', en: 'A system that uses satellites to find current locations.' },
            { ar: 'نظام لجمع وتبادل ونقل مختلف البيانات والمعلومات عن طريق الشبكات.', en: 'A system for collecting, exchanging and sending all kinds of data and information over networks.' },
            { ar: 'نظام بيُستخدم في المتاجر الصغيرة والمحلات التجارية لإدارة معلومات مبيعات المنتجات.', en: 'A system used in small shops and stores to manage product sales information.' },
            { ar: 'نظام نقل لحل مشكلات الطرق زي حوادث المرور والزحام.', en: 'A transport system for solving road problems like accidents and traffic jams.' },
          ],
          answer: 2,
          explanation: {
            ar: 'POS = نظام نقاط البيع: بيسجّل المبيعات في المحلات وقت البيع (النقاط الرئيسية أ-1، ص 133).',
            en: 'POS = point of sale: it records sales in shops at the moment of sale (Key Points a-1, p. 133).',
          },
          success: { ar: 'صح! POS = مبيعات المحل. +10 نقط', en: 'Correct! POS = shop sales. +10 pts' },
        },
      ],
      bito: [
        { ar: 'POS في كل سوبر ماركت جنبك.', en: 'There is a POS in every supermarket near you.' },
        { ar: 'دوّر على كلمة "مبيعات".', en: 'Look for the word "sales".' },
      ],
    },
    {
      source: { ar: 'تمرين (2)، ص 134', en: 'Exercise (2), p. 134' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'اختار الشرح المناسب للتكامل الرأسي:', en: 'Choose the right description of vertical integration:' },
          options: [
            { ar: 'ربط النظم على نفس المستوى عبر أقسام مختلفة من المنظمة.', en: 'Linking systems on the same level across different departments.' },
            { ar: 'ربط النظم على مستويات مختلفة من المنظمة.', en: 'Linking systems at different levels of the organization.' },
            { ar: 'ربط النظم على مستوى واحد جوه قسم معيّن.', en: 'Linking systems on one level inside a single department.' },
            { ar: 'ربط النظم بين أقسام مش مترابطة.', en: 'Linking systems between unconnected departments.' },
          ],
          answer: 1,
          explanation: {
            ar: 'التكامل الرأسي = ربط النظم على مستويات مختلفة من المنظمة، زي TPS مع MIS. الأولى دي التكامل الأفقي.',
            en: 'Vertical integration = linking systems at different levels, like a TPS with an MIS. The first one is horizontal integration.',
          },
          success: { ar: 'صح! رأسي = مستويات مختلفة. +10 نقط', en: 'Correct! Vertical = different levels. +10 pts' },
        },
      ],
      bito: [
        { ar: 'رأسي = الأسانسير بين الأدوار.', en: 'Vertical = the lift between floors.' },
        { ar: 'أفقي = الممر في نفس الدور.', en: 'Horizontal = the corridor on one floor.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-3)، ص 133', en: 'Key Points (a-3), p. 133' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'مدير بيسأل: "لو فتحنا فرع جديد، الأرباح هتبقى كام؟". أنهي نظام يساعده؟', en: 'A manager asks: "If we open a new branch, what will the profit be?". Which system helps?' },
          options: [
            { ar: 'TPS', en: 'TPS' },
            { ar: 'MIS', en: 'MIS' },
            { ar: 'DSS', en: 'DSS' },
            { ar: 'EIS', en: 'EIS' },
          ],
          answer: 2,
          explanation: {
            ar: 'ده سؤال "ماذا لو"، وده شغل نظام دعم القرار DSS، اللي بيساعد في القرارات اللي مش روتينية بالنمذجة والمحاكاة.',
            en: 'That is a "what if" question, the job of a decision support system (DSS), which helps with non-routine decisions through modelling and simulation.',
          },
          success: { ar: 'صح! ماذا لو = DSS. +10 نقط', en: 'Correct! What if = DSS. +10 pts' },
        },
      ],
      bito: [
        { ar: 'القرار ده مش روتيني، مش كل يوم بنفتح فرع.', en: 'This decision is not routine: we do not open a branch every day.' },
        { ar: '"لو..." = ماذا لو.', en: '"If..." = what if.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 9-3 والوحدة 9!', en: 'You finished lesson 9-3 and Unit 9!' } },
        {
          type: 'recap',
          items: [
            { code: 'TPS', text: { ar: 'المعاملات اليومية', en: 'daily transactions' } },
            { code: 'MIS', text: { ar: 'تقارير دورية', en: 'regular reports' } },
            { code: 'DSS', text: { ar: 'ماذا لو؟', en: 'what if?' } },
            { code: 'EIS', text: { ar: 'KPIs للإدارة العليا', en: 'KPIs for top management' } },
            { code: 'ERP', text: { ar: 'كله في نظام واحد', en: 'all in one system' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! يلا على لعبة الفرز.', en: 'Well done! On to the sorting game.' },
        { ar: 'حط كل مثال في النظام بتاعه.', en: 'Put each example in its system.' },
      ],
    },
  ],

  game: {
    kind: 'sort',
    rounds: [
      {
        title: { ar: 'المثال في أنهي نظام؟', en: 'Which system is the example?' },
        source: { ar: 'النقاط الرئيسية (أ)، ص 133', en: 'Key Points (a), p. 133' },
        bins: [
          { id: 'tps', label: { ar: 'TPS', en: 'TPS' } },
          { id: 'mis', label: { ar: 'MIS', en: 'MIS' } },
          { id: 'dss', label: { ar: 'DSS', en: 'DSS' } },
          { id: 'eis', label: { ar: 'EIS', en: 'EIS' } },
        ],
        items: [
          { text: { ar: 'نظام نقاط البيع POS', en: 'Point of sale (POS)' }, bin: 'tps' },
          { text: { ar: 'نظام حجز تذاكر الطيران', en: 'Airline ticket booking' }, bin: 'tps' },
          { text: { ar: 'تقارير المبيعات الشهرية', en: 'Monthly sales reports' }, bin: 'mis' },
          { text: { ar: 'تقارير المخزون', en: 'Stock reports' }, bin: 'mis' },
          { text: { ar: 'تحليل "ماذا لو"', en: '"What if" analysis' }, bin: 'dss' },
          { text: { ar: 'قرارات مش روتينية بالنمذجة والمحاكاة', en: 'Non-routine decisions by modelling and simulation' }, bin: 'dss' },
          { text: { ar: 'لوحات التحكم التنفيذية', en: 'Executive dashboards' }, bin: 'eis' },
          { text: { ar: 'مؤشرات الأداء الرئيسية KPIs', en: 'Key performance indicators (KPIs)' }, bin: 'eis' },
        ],
      },
      {
        title: { ar: 'رأسي ولا أفقي؟', en: 'Vertical or horizontal?' },
        source: { ar: 'النقاط الرئيسية (ب)، ص 133', en: 'Key Points (b), p. 133' },
        bins: [
          { id: 'v', label: { ar: 'تكامل رأسي', en: 'Vertical integration' } },
          { id: 'h', label: { ar: 'تكامل أفقي', en: 'Horizontal integration' } },
        ],
        items: [
          { text: { ar: 'ربط TPS مع MIS', en: 'Linking a TPS with an MIS' }, bin: 'v' },
          { text: { ar: 'ربط نظم على مستويات مختلفة من المنظمة', en: 'Linking systems at different levels of the organization' }, bin: 'v' },
          { text: { ar: 'ربط نظام المبيعات مع نظام المخزون', en: 'Linking the sales system with the stock system' }, bin: 'h' },
          { text: { ar: 'ربط نظم على نفس المستوى عبر أقسام مختلفة', en: 'Linking systems on the same level across departments' }, bin: 'h' },
        ],
      },
    ],
  },
};
