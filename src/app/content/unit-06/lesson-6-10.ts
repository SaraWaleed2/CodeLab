import { Lesson } from '@core/models';

/**
 * Lesson 6-10 "تصميم البيانات" — ministry book pp. 92–95.
 * Book notes:
 * - The LATCH principle (p.93): Location, Alphabet, Time, Category, Hierarchy.
 * - p.93 answer key: Q1 abstraction example; Q2 [1] and [2] (user-interface terms); Q3 = universal design.
 * - The exercises on pp.94–95 are only partly keyed; only the Key Points are used where they settle the answer.
 */
export const LESSON_6_10: Lesson = {
  unitId: 6,
  id: '6-10',
  title: { ar: 'تصميم البيانات', en: 'Information Design' },
  bookPages: '92 – 95',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! آخر درس في الوحدة: إزاي نعرض المعلومات عشان الناس تفهمها بسرعة.', en: 'Hi! The last lesson of the unit: how to show information so people understand it fast.' },
        { ar: 'في الآخر لعبة توصيل بأمثلة من الحياة.', en: 'At the end there is a matching game with real-life examples.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (1)، ص 92', en: 'Key Points (1), p. 92' },
      blocks: [
        { type: 'heading', text: { ar: 'تصميم البيانات', en: 'Information design' }, code: '(Information design)' },
        {
          type: 'cards',
          items: [
            { title: { ar: 'تصميم البيانات', en: 'Information design' }, en: 'Information design', text: { ar: 'عملية تنظيم وتقديم البيانات وفقًا لغرضها، عشان الرسالة توصل للجمهور المستهدف بشكل صحيح.', en: 'Organizing and presenting data according to its purpose so the message reaches the target audience correctly.' }, example: { ar: 'لافتة طريق: تفهمها في ثانية', en: 'A road sign: you understand it in a second' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: نظّم · قدّم · يوصل صح', en: 'Remember: organize · present · deliver clearly' } },
      ],
      bito: [
        { ar: 'اللافتة الكويسة بتفهمها وإنت ماشي بسرعة. ده تصميم معلومات.', en: 'A good sign is understood as you walk past. That is information design.' },
        { ar: 'هنشوف 5 طرق دلوقتي.', en: 'We will see 5 methods now.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2-1، 2-2)، ص 92', en: 'Key Points (2-1, 2-2), p. 92' },
      blocks: [
        { type: 'heading', text: { ar: 'طرق تصميم البيانات (1)', en: 'Design methods (1)' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'التجريد', en: 'Abstraction' }, en: 'Abstraction', text: { ar: 'ننقل بس البيانات المقصودة من كمية كبيرة، ونحذف الباقي.', en: 'We keep only the intended data out of a large amount and drop the rest.' }, example: { ar: 'خريطة المترو: خطوط ومحطات بس، من غير الشوارع', en: 'A metro map: lines and stations only, without the streets' } },
            { title: { ar: 'الرسم التوضيحي', en: 'Pictogram' }, en: 'Pictogram', text: { ar: 'رمز مصوّر بينقل المعلومة من غير كلمات.', en: 'A pictorial symbol that conveys information without words.' }, example: { ar: 'رمز الخروج، ورمز دورة المياه', en: 'The exit symbol and the toilet symbol' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: تجريد = احذف الزايد · رسم توضيحي = صورة بدل كلام', en: 'Remember: abstraction = drop the extra · pictogram = a picture instead of words' } },
      ],
      bito: [
        { ar: 'في خريطة المترو مفيش مقياس رسم، بس اللي يهمك: إنت فين وهتنزل فين.', en: 'A metro map has no real scale, only what matters: where you are and where to get off.' },
        { ar: 'ده بالظبط التجريد.', en: 'That is exactly abstraction.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2-3 إلى 2-5)، ص 92', en: 'Key Points (2-3 to 2-5), p. 92' },
      blocks: [
        { type: 'heading', text: { ar: 'طرق تصميم البيانات (2)', en: 'Design methods (2)' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الأيقونة', en: 'Icon' }, en: 'Icon', text: { ar: 'صورة بتمثّل وظيفة أو محتوى برنامج أو ملف على شاشة الكمبيوتر أو الموبايل.', en: 'An image representing the function or content of a program or file on a computer or phone screen.' }, example: { ar: 'أيقونة المظروف = الرسائل', en: 'An envelope icon = messages' } },
            { title: { ar: 'التصور المرئي', en: 'Visualization' }, en: 'Visualization', text: { ar: 'تمثيل البيانات بصريًا عشان تبقى أسهل في الفهم.', en: 'Showing data visually so it is easier to understand.' }, example: { ar: 'الرسوم البيانية والجداول', en: 'Charts and tables' } },
            { title: { ar: 'الهيكلة', en: 'Structuring' }, en: 'Structuring', text: { ar: 'نعبّر عن البيانات بعلاقات واضحة بين العناصر.', en: 'We express data with clear relationships between the elements.' }, example: { ar: 'صفحات موقع في شكل هرم', en: 'Web pages in a hierarchy' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: أيقونة · تصور · هيكلة', en: 'Remember: icon · visualization · structure' } },
      ],
      bito: [
        { ar: 'الرسم البياني بيخلّي 100 رقم حكاية في نظرة واحدة.', en: 'A chart turns 100 numbers into one story at a glance.' },
        { ar: 'والهيكلة زي شجرة العيلة.', en: 'And structure is like a family tree.' },
      ],
    },
    {
      source: { ar: 'مبدأ LATCH، ص 93', en: 'The LATCH principle, p. 93' },
      blocks: [
        { type: 'heading', text: { ar: 'مبدأ LATCH', en: 'The LATCH principle' } },
        {
          type: 'lead',
          text: { ar: '5 طرق لتنظيم وعرض البيانات بحيث المستخدم يفهمها بسهولة. الحروف الأولى = LATCH:', en: '5 ways to organize and show data so users understand it easily. The first letters spell LATCH:' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'L: الموقع', en: 'L: Location' }, en: 'Location', text: { ar: 'التصنيف حسب الموقع الفعلي.', en: 'Sorting by the real position.' }, example: { ar: 'خريطة محافظات', en: 'A map of governorates' } },
            { title: { ar: 'A: الأبجدية', en: 'A: Alphabet' }, en: 'Alphabet', text: { ar: 'التصنيف حسب الترتيب الأبجدي أو البياني.', en: 'Sorting by alphabetical order.' }, example: { ar: 'دليل التليفون', en: 'A phone book' } },
            { title: { ar: 'T: الوقت', en: 'T: Time' }, en: 'Time', text: { ar: 'التصنيف حسب تسلسل الأحداث.', en: 'Sorting by the order of events.' }, example: { ar: 'جدول الحصص', en: 'A class timetable' } },
            { title: { ar: 'C: الفئة', en: 'C: Category' }, en: 'Category', text: { ar: 'التصنيف حسب الفروقات بين الأشياء.', en: 'Sorting by the differences between things.' }, example: { ar: 'أقسام السوبر ماركت', en: 'Supermarket sections' } },
            { title: { ar: 'H: الهرمية', en: 'H: Hierarchy' }, en: 'Hierarchy', text: { ar: 'التصنيف حسب كمية متغيرة زي الحجم أو المستوى أو الدرجة.', en: 'Sorting by a changing amount such as size, level or rank.' }, example: { ar: 'ترتيب الدور في الدوري', en: 'League table rankings' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: LATCH = مكان · أبجدية · وقت · فئة · هرم', en: 'Remember: LATCH = place · alphabet · time · category · hierarchy' } },
      ],
      bito: [
        { ar: 'اسأل نفسك قبل ما تنظّم: هرتّبهم حسب إيه؟', en: 'Ask yourself before organizing: what will I sort them by?' },
        { ar: 'قايمة الأسماء بالترتيب الأبجدي = A.', en: 'A list of names in alphabetical order = A.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2-1 إلى 2-3)، ص 92', en: 'Key Points (2-1 to 2-3), p. 92' },
      blocks: [
        { type: 'heading', text: { ar: 'واجهة المستخدم', en: 'The user interface' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'واجهة المستخدم (UI)', en: 'User interface (UI)' }, en: 'UI', text: { ar: 'نظام بينقل المعلومات بين الإنسان والجهاز.', en: 'A system that passes information between a person and a device.' }, example: { ar: 'الشاشة، والصوت، ولوحة المفاتيح', en: 'The screen, sound and keyboard' } },
            { title: { ar: 'واجهة سطر الأوامر (CUI)', en: 'Character user interface (CUI)' }, en: 'CUI', text: { ar: 'بتشغّل الجهاز بكتابة أوامر بالأحرف.', en: 'You operate the device by typing commands in characters.' }, example: { ar: 'شاشة سوداء بتكتب فيها أوامر', en: 'A black screen where you type commands' } },
            { title: { ar: 'واجهة رسومية (GUI)', en: 'Graphical user interface (GUI)' }, en: 'GUI', text: { ar: 'بتشغّل الجهاز بالأيقونات والماوس أو اللمس.', en: 'You operate the device with icons and a mouse or touch.' }, example: { ar: 'موبايلك وويندوز', en: 'Your phone and Windows' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: CUI = تكتب · GUI = تضغط', en: 'Remember: CUI = you type · GUI = you tap' } },
      ],
      bito: [
        { ar: 'كل تطبيقاتك رسومية (GUI). المبرمجين بيستخدموا CUI كتير.', en: 'All your apps are graphical (GUI). Programmers use CUI a lot.' },
        { ar: 'الاتنين واجهة مستخدم.', en: 'Both are user interfaces.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2-2 إلى 2-7)، ص 92', en: 'Key Points (2-2 to 2-7), p. 92' },
      blocks: [
        { type: 'heading', text: { ar: 'تصميم سهل الاستخدام', en: 'Easy-to-use design' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'تجربة المستخدم (UX)', en: 'User experience (UX)' }, en: 'User experience (UX)', text: { ar: 'الإحساس اللي المستخدم بيكتسبه من استخدام المنتج أو الخدمة، مش بس الوظيفة.', en: 'The feeling a user gets from using a product or service, not just its function.' }, example: { ar: 'تطبيق مريح وسريع بيخليك تكمل', en: 'A comfortable, fast app that makes you stay' } },
            { title: { ar: 'الإمكانية (Affordance)', en: 'Affordance' }, en: 'Affordance', text: { ar: 'خاصية بتخلّي المستخدم يعرف إزاي يتصرف.', en: 'A property that lets the user know how to act.' }, example: { ar: 'زرار شكله بارز: عارف إنه يتضغط', en: 'A raised-looking button: you know it can be pressed' } },
            { title: { ar: 'الدلالة (Signifier)', en: 'Signifier' }, en: 'Signifier', text: { ar: 'إشارة بتوضح أي إجراء ممكن.', en: 'A sign that shows which action is possible.' }, example: { ar: 'سهم على الباب: ادفع', en: 'An arrow on a door: push' } },
            { title: { ar: 'قابلية الاستخدام (Usability)', en: 'Usability' }, en: 'Usability', text: { ar: 'سهولة استخدام المنتج وقدرة المستخدم على إنجاز المهمة.', en: 'How easy a product is to use and how well the user can finish the task.' }, example: { ar: 'تدفع في 3 ضغطات', en: 'Paying in 3 taps' } },
            { title: { ar: 'إمكانية الوصول (Accessibility)', en: 'Accessibility' }, en: 'Accessibility', text: { ar: 'سهولة الوصول للبيانات والخدمات للأشخاص ذوي مجموعة متنوعة من القدرات.', en: 'Easy access to data and services for people with many different abilities.' }, example: { ar: 'نص كبير لضعاف البصر', en: 'Large text for people with poor eyesight' } },
            { title: { ar: 'التصميم الشامل (Universal design)', en: 'Universal design' }, en: 'Universal design', text: { ar: 'تصميم بيهدف إن الجميع يستخدمه بسهولة، بغض النظر عن العمر أو الجنس أو اللغة أو القدرة الجسدية.', en: 'Design aimed at everyone using it easily, whatever their age, gender, language or physical ability.' }, example: { ar: 'باب أوتوماتيك يخدم الكل', en: 'An automatic door that serves everyone' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: شامل = للجميع من غير صعوبة', en: 'Remember: universal = for everyone, without difficulty' } },
      ],
      bito: [
        { ar: 'الكوبري اللي فيه سلم وأسانسير تصميم شامل: الكل يعدّي.', en: 'A bridge with stairs and a lift is universal design: everyone gets across.' },
        { ar: 'مش لازم تحفظهم كلهم دلوقتي: ركّز على الشامل والسهل.', en: 'You do not need to memorize them all now: focus on universal and easy-to-use.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (3)، ص 93', en: 'Test Your Knowledge (3), p. 93' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه المصطلح اللي بيُطلق على تصميم هدفه إن الجميع يستخدمه بسهولة، بغض النظر عن العمر أو الجنس أو اللغة أو القدرة الجسدية؟', en: 'What term describes a design meant for everyone to use easily, whatever their age, gender, language or physical ability?' },
          options: [
            { ar: 'قابلية الاستخدام', en: 'Usability' },
            { ar: 'التصميم الشامل', en: 'Universal design' },
            { ar: 'المُشير (الدلالة)', en: 'Signifier' },
            { ar: 'واجهة المستخدم', en: 'User interface' },
          ],
          answer: 1,
          explanation: {
            ar: 'التصميم الشامل (Universal design) هدفه خدمة الجميع بغض النظر عن العمر أو القدرة. قابلية الاستخدام هي سهولة الاستخدام عمومًا.',
            en: 'Universal design aims to serve everyone regardless of age or ability. Usability is ease of use in general.',
          },
          success: { ar: 'صح! شامل = للجميع. +10 نقط', en: 'Correct! Universal = for everyone. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الكلمة المفتاحية: "الجميع".', en: 'The key word: "everyone".' },
        { ar: 'مفيش حد بيتستبعد في التصميم الشامل.', en: 'Nobody is left out in universal design.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2)، ص 93', en: 'Test Your Knowledge (2), p. 93' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه نوع واجهة المستخدم اللي بتشغّل فيها الجهاز بكتابة أوامر بالأحرف؟', en: 'Which kind of user interface lets you operate the device by typing commands in characters?' },
          options: [
            { ar: 'واجهة سطر الأوامر (CUI)', en: 'Character user interface (CUI)' },
            { ar: 'واجهة رسومية (GUI)', en: 'Graphical user interface (GUI)' },
            { ar: 'إمكانية الوصول', en: 'Accessibility' },
          ],
          answer: 0,
          explanation: {
            ar: 'CUI بتشتغل بالكتابة. GUI بتشتغل بالأيقونات والماوس أو اللمس.',
            en: 'A CUI works by typing. A GUI works with icons and a mouse or touch.',
          },
          success: { ar: 'صح! CUI = تكتب. +10 نقط', en: 'Correct! CUI = you type. +10 pts' },
        },
      ],
      bito: [
        { ar: 'C معناها Character: أحرف.', en: 'C stands for Character: letters.' },
        { ar: 'و G معناها Graphical: رسومية.', en: 'And G stands for Graphical.' },
      ],
    },
    {
      source: { ar: 'مبدأ LATCH، ص 93', en: 'The LATCH principle, p. 93' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'جدول حصص بيرتّب الحصص حسب وقتها. ده أنهي حرف من LATCH؟', en: 'A timetable orders lessons by when they happen. Which LATCH letter is that?' },
          options: [
            { ar: 'L (الموقع)', en: 'L (Location)' },
            { ar: 'A (الأبجدية)', en: 'A (Alphabet)' },
            { ar: 'T (الوقت)', en: 'T (Time)' },
            { ar: 'H (الهرمية)', en: 'H (Hierarchy)' },
          ],
          answer: 2,
          explanation: {
            ar: 'الترتيب حسب تسلسل الأحداث = T (الوقت).',
            en: 'Ordering by the sequence of events = T (Time).',
          },
          success: { ar: 'صح! وقت = T. +10 نقط', en: 'Correct! Time = T. +10 pts' },
        },
      ],
      bito: [
        { ar: 'افتكر الجملة: مكان · أبجدية · وقت · فئة · هرم.', en: 'Remember the line: place · alphabet · time · category · hierarchy.' },
        { ar: 'الحصص مرتبة بالساعة.', en: 'The lessons are ordered by the hour.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 6-10 والوحدة 6!', en: 'You finished lesson 6-10 and Unit 6!' } },
        {
          type: 'recap',
          items: [
            { code: '5', text: { ar: 'طرق للتصميم', en: 'design methods' } },
            { code: 'LATCH', text: { ar: 'مكان · أبجدية · وقت · فئة · هرم', en: 'place · alphabet · time · category · hierarchy' } },
            { code: 'GUI', text: { ar: 'واجهة رسومية', en: 'graphical interface' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! آخر لعبة في الوحدة: توصيل.', en: 'Well done! The last game of the unit: matching.' },
        { ar: 'الأمثلة من حياتك اليومية.', en: 'The examples are from your daily life.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'طريقة التصميم ومثالها', en: 'The design method and its example' },
        source: { ar: 'النقاط الرئيسية (2)، ص 92', en: 'Key Points (2), p. 92' },
        pairs: [
          { left: { text: { ar: 'التجريد', en: 'Abstraction' } }, right: { ar: 'خريطة مترو من غير الشوارع', en: 'A metro map without the streets' } },
          { left: { text: { ar: 'الرسم التوضيحي', en: 'Pictogram' } }, right: { ar: 'رمز الخروج من غير كلام', en: 'An exit symbol with no words' } },
          { left: { text: { ar: 'الأيقونة', en: 'Icon' } }, right: { ar: 'مظروف يمثّل الرسائل', en: 'An envelope standing for messages' } },
          { left: { text: { ar: 'التصور المرئي', en: 'Visualization' } }, right: { ar: 'رسم بياني للدرجات', en: 'A chart of grades' } },
          { left: { text: { ar: 'الهيكلة', en: 'Structuring' } }, right: { ar: 'صفحات موقع في شكل هرم', en: 'Web pages arranged in a hierarchy' } },
        ],
      },
      {
        title: { ar: 'LATCH ومثاله', en: 'LATCH and its example' },
        source: { ar: 'مبدأ LATCH، ص 93', en: 'The LATCH principle, p. 93' },
        pairs: [
          { left: { text: { ar: 'L: الموقع', en: 'L: Location' } }, right: { ar: 'خريطة محافظات', en: 'A map of governorates' } },
          { left: { text: { ar: 'A: الأبجدية', en: 'A: Alphabet' } }, right: { ar: 'دليل التليفون', en: 'A phone book' } },
          { left: { text: { ar: 'T: الوقت', en: 'T: Time' } }, right: { ar: 'جدول الحصص', en: 'A class timetable' } },
          { left: { text: { ar: 'C: الفئة', en: 'C: Category' } }, right: { ar: 'أقسام السوبر ماركت', en: 'Supermarket sections' } },
          { left: { text: { ar: 'H: الهرمية', en: 'H: Hierarchy' } }, right: { ar: 'ترتيب الفرق في الدوري', en: 'League table rankings' } },
        ],
      },
    ],
  },
};
