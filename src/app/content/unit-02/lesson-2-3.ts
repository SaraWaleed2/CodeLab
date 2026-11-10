import { Lesson } from '@core/models';

/**
 * Lesson 2-3 "استخدام المعلومات والكشف عنها" — ministry book pp. 25–28.
 * Book notes:
 * - p.25's Creative Commons table draws the "non-commercial" (NC) symbol exactly like "attribution" (BY);
 *   p.28 draws it correctly (a crossed currency sign). The site draws all four symbols itself.
 * - p.26 question 3 shows its options as pictures (the first two look identical on the page); the book's answer
 *   only says what each symbol means: (أ) attribution, (ب) non-commercial, (ت) no derivatives, (ث) share alike.
 *   For "show the photographer's name" + "don't change the work" the answer is therefore attribution + no derivatives.
 * - p.26 question 1 and 2 ask to pick several statements; the site turns each into a single true/false question
 *   using the book's own explanations (p.26 "الشرح").
 */
export const LESSON_2_3: Lesson = {
  unitId: 2,
  id: '2-3',
  title: { ar: 'استخدام المعلومات والكشف عنها', en: 'Using and Disclosing Information' },
  bookPages: '25 – 28',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        {
          ar: 'أهلًا! الدرس ده عن إمتى تقدر تستخدم عمل حد تاني من غير إذن، وإزاي تسمح للناس تستخدم عملك.',
          en: "Hi! This lesson is about when you may use someone else's work without permission, and how to let others use yours.",
        },
        {
          ar: 'في الآخر هتتعلم رموز "المشاع الإبداعي" الأربعة، وهنلعب لعبة توصيل.',
          en: 'At the end you learn the four "Creative Commons" symbols, and we play a matching game.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 25', en: 'Key Points, p. 25' },
      blocks: [
        { type: 'heading', text: { ar: 'حقوق المؤلف بتهدف لإيه؟', en: 'What is copyright for?' } },
        {
          type: 'lead',
          text: {
            ar: 'تساهم في تطور الثقافة في المجتمع، عن طريق ضمان:',
            en: "It helps a society's culture develop by making sure of:",
          },
        },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'الاستخدام العادل', en: 'Fair use' },
              en: 'fair use',
              text: { ar: 'الناس تقدر تستفيد من الأعمال المحمية بشكل عادل.', en: 'People can benefit from protected works in a fair way.' },
            },
            {
              title: { ar: 'حماية الحقوق', en: 'Protection of rights' },
              en: 'protection of rights',
              text: { ar: 'المؤلف يفضل محتفظ بحقوقه.', en: 'The author keeps their rights.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: استخدام عادل + حماية للمؤلف', en: 'Remember: fair use + protection for the author' } },
      ],
      bito: [
        {
          ar: 'لو كل حاجة ممنوعة، الناس مش هتتعلم. ولو كل حاجة مباحة، المؤلف مش هيستفيد. عشان كده فيه توازن.',
          en: "If everything were forbidden, people couldn't learn. If everything were allowed, authors wouldn't benefit. So there is a balance.",
        },
        {
          ar: 'الاستخدام العادل هو الجزء اللي بيسمح للناس تستفيد، وحماية الحقوق هي اللي بتحمي المؤلف.',
          en: 'Fair use lets people benefit; protection of rights protects the author.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 25', en: 'Key Points, p. 25' },
      blocks: [
        { type: 'heading', text: { ar: 'الاستثناءات', en: 'Exceptions' } },
        {
          type: 'lead',
          text: {
            ar: 'فيه حالات بيتحدّ فيها من حقوق المؤلف، وبتسمح باستخدام العمل من غير إذن صاحبه. بأمثلة الكتاب:',
            en: "There are cases where the author's rights are limited, allowing use without their permission. The book's examples:",
          },
        },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'نسخ للاستخدام الشخصي', en: 'Copying for personal use' },
              text: { ar: 'بشرط ما يضرش بالاستغلال العادل للعمل.', en: "As long as it doesn't harm the work's fair exploitation." },
            },
            {
              title: { ar: 'النسخ داخل المؤسسات التعليمية', en: 'Copying inside educational institutions' },
              text: { ar: 'زي استخدام الأعمال المحمية في سياق التدريس.', en: 'Like using protected works in teaching.' },
            },
            {
              title: { ar: 'العروض غير الربحية', en: 'Non-profit performances' },
              text: { ar: 'عروض مش بتهدف للربح.', en: 'Performances not meant to make a profit.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: شخصي، تعليمي، غير ربحي', en: 'Remember: personal, educational, non-profit' } },
      ],
      bito: [
        {
          ar: 'مدرّس نسخ ورقة من كتاب ووزعها على طلابه في الحصة: ده من استثناء التعليم.',
          en: 'A teacher photocopies a page from a book for their class: that falls under the education exception.',
        },
        {
          ar: 'لكن نسخ أسطوانة موسيقى تجارية وتوزيعها على أصحابك مش استثناء. ده انتهاك.',
          en: "But copying a commercial music CD and handing it to friends isn't an exception. That's infringement.",
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 25', en: 'Key Points, p. 25' },
      blocks: [
        { type: 'heading', text: { ar: 'الاقتباس: أول 3 قواعد', en: 'Quotation: the first 3 rules' }, code: '(Quotation)' },
        {
          type: 'lead',
          text: {
            ar: 'الاقتباس هو استخدام جزء من عمل محمي في عملك أنت. لو استوفيت شروطًا معينة، تقدر تقتبس من غير إذن المؤلف.',
            en: 'Quotation means using a part of a protected work inside your own work. If you meet certain conditions, you may quote without the author’s permission.',
          },
        },
        {
          type: 'cards',
          items: [
            {
              title: { ar: '1 · عملك هو الأساس', en: '1 · Your work comes first' },
              text: { ar: 'العمل المقتبس منه يكون تابع لعملك، مش العكس.', en: 'The quoted work serves yours, not the other way round.' },
            },
            {
              title: { ar: '2 · لازم ضرورة', en: '2 · There must be a need' },
              text: { ar: 'لازم يكون فيه سبب ضروري للاقتباس.', en: 'There must be a real need to quote.' },
            },
            {
              title: { ar: '3 · متضرش المؤلف', en: "3 · Don't harm the author" },
              text: { ar: 'ألا يضر بالمصالح المشروعة لمؤلف البرنامج.', en: "It must not harm the author's legitimate interests." },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: عملك أولًا، بضرورة، ومن غير ضرر', en: 'Remember: your work first, out of need, with no harm' } },
      ],
      bito: [
        {
          ar: 'بتكتب تقرير وعاوز تحط جملة من كتاب علشان تدعم كلامك؟ ده اقتباس. بس التقرير هو الأساس، والجملة بس بتساعده.',
          en: 'Writing a report and want to add a sentence from a book to support your point? That is quotation. But the report is the main thing and the sentence only helps it.',
        },
        {
          ar: 'لو نقلت صفحات كاملة، ده مبقاش اقتباس. ده نسخ.',
          en: 'If you copy whole pages, it is no longer quotation. It is copying.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 25', en: 'Key Points, p. 25' },
      blocks: [
        { type: 'heading', text: { ar: 'الاقتباس: باقي القواعد', en: 'Quotation: the other rules' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: '4 · علّم المقتبس', en: '4 · Mark the quote' },
              text: { ar: 'اتأكد إن المادة المقتبسة بتتميز بوضوح، بوضعها بين علامتي اقتباس.', en: 'Make sure the quoted material stands out clearly, by putting it between quotation marks.' },
            },
            {
              title: { ar: '5 · اذكر المصدر', en: '5 · Name the source' },
              text: { ar: 'لازم تحدد المصدر بوضوح.', en: 'You must state the source clearly.' },
            },
            {
              title: { ar: '6 · متغيّرش المقتبس', en: '6 · Do not change the quote' },
              text: { ar: 'لازم متغيّرش المادة اللي بتقتبسها.', en: 'You must not change the material you quote.' },
            },
          ],
        },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'مدة الحماية', en: 'Length of protection' },
              text: { ar: 'الحقوق الاقتصادية للمؤلف بتنتهي بعد 50 عامًا من وفاة المبدع.', en: "The author's economic rights end 50 years after the creator's death." },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: علامتين اقتباس، مصدر، وبدون تغيير', en: 'Remember: quotation marks, a source, and no changes' } },
      ],
      bito: [
        {
          ar: 'فكّر كده: بتحط الجملة بين علامتين اقتباس، وبعدها اسم الكتاب والمؤلف، وكلمة بكلمة زي ما هي.',
          en: 'Think of it like this: put the sentence between quotation marks, then the book and author, word for word as it is.',
        },
        {
          ar: 'قواعد الاقتباس 6: عملك أولًا، ضرورة، مضرش، علّم، مصدر، متغيّرش.',
          en: 'The 6 quotation rules: your work first, need, no harm, mark, source, no changes.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 25', en: 'Key Points, p. 25' },
      blocks: [
        { type: 'heading', text: { ar: 'ترخيص المشاع الإبداعي', en: 'Creative Commons licence' }, code: '(CC License)' },
        {
          type: 'lead',
          text: {
            ar: 'علامة بتقول شروط استخدام الأعمال المحمية بحقوق النشر. وله 4 رموز:',
            en: 'A mark that tells the terms for using works protected by copyright. It has 4 symbols:',
          },
        },
        {
          type: 'cards',
          items: [
            {
              cc: 'BY',
              title: { ar: 'الإشارة لفضل المبدع', en: 'Credit the creator' },
              en: 'BY',
              text: { ar: 'اعرض عنوان العمل واسم المؤلف.', en: "Show the work's title and the author's name." },
            },
            {
              cc: 'NC',
              title: { ar: 'غير تجاري', en: 'Non-commercial' },
              en: 'Non-commercial (NC)',
              text: { ar: 'متستخدمهوش لأغراض تجارية.', en: 'Do not use it for commercial purposes.' },
            },
            {
              cc: 'ND',
              title: { ar: 'لا مشتقات', en: 'No derivatives' },
              en: 'No derivatives (ND)',
              text: { ar: 'متغيّرش العمل المحمي بحقوق المؤلف الأصلي.', en: 'Do not change the original protected work.' },
            },
            {
              cc: 'SA',
              title: { ar: 'نفس شروط التعديلات', en: 'Same terms for adaptations' },
              en: 'Adaptations - Same terms for adaptations (SA)',
              text: { ar: 'انشر تحت نفس مجموعة التراخيص بتاعة العمل الأصلي.', en: 'Publish under the same set of licences as the original work.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: BY اذكر · NC متتاجرش · ND متغيّرش · SA نفس الشروط', en: 'Remember: BY credit · NC no trade · ND no changes · SA same terms' } },
      ],
      bito: [
        {
          ar: 'مصوّر حط صورته على النت وقال "ممكن تستخدمها بس اذكر اسمي": ده BY. ولو قال "متستخدمهاش في إعلان": ده NC.',
          en: 'A photographer posts a photo and says "use it, but name me": that is BY. If they add "not in an ad": that is NC.',
        },
        {
          ar: 'والرموز دي بتتجمّع: ممكن عمل واحد يبقى BY و ND مع بعض. ده معناه: اذكر اسمي ومتغيّرش في الصورة.',
          en: 'The symbols can combine: one work can be BY and ND together. That means: name me and do not change the picture.',
        },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك 1 (ب)، ص 26', en: 'Test Your Knowledge 1 (b), p. 26' },
      blocks: [
        {
          type: 'question',
          question: {
            ar: 'صح ولا غلط: نسخت أقراصًا موسيقية تجارية (CDs) ووزعتها على أصحابي. ده مسموح من غير إذن.',
            en: 'True or false: I copied commercial music CDs and gave them to my friends. That is allowed without permission.',
          },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 1,
          explanation: {
            ar: 'غلط. نسخ الأقراص التجارية وتوزيعها على الأصدقاء مش استنساخ للاستخدام الشخصي، وبيشكل انتهاك لحقوق المؤلف.',
            en: "False. Copying commercial discs for friends isn't copying for personal use, and it infringes copyright.",
          },
          success: { ar: 'صح! ده انتهاك لحقوق المؤلف. +10 نقط', en: 'Correct! That infringes copyright. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الاستخدام الشخصي معناه ليك إنت. التوزيع على الأصحاب مبقاش شخصي.', en: 'Personal use means for you. Handing it to friends is no longer personal.' },
        { ar: 'افتكر صفحة الاستثناءات: النسخ للاستخدام الشخصي بشرط ما يضرش.', en: 'Remember the exceptions page: copying for personal use, as long as it does no harm.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك 2 (أ)، ص 26', en: 'Test Your Knowledge 2 (a), p. 26' },
      blocks: [
        {
          type: 'question',
          question: {
            ar: 'صح ولا غلط: حتى لو بتقتبس، لازم دايمًا تاخد إذن من المؤلف.',
            en: 'True or false: even when you quote, you must always get the author’s permission.',
          },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 1,
          explanation: {
            ar: 'غلط. لو استوفيت شروط الاقتباس، تقدر تقتبس أجزاء من عمل محمي من غير إذن المؤلف.',
            en: "False. If you meet the quotation conditions, you may quote parts of a protected work without the author's permission.",
          },
          success: { ar: 'صح! بشروط الاقتباس مش محتاج إذن. +10 نقط', en: 'Correct! Within the quotation rules you need no permission. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الكلمة الخطيرة هنا: "دايمًا". افتكر أول جملة في شرح الاقتباس.', en: 'The risky word here: "always". Remember the first sentence of the quotation explanation.' },
        { ar: 'الاقتباس هو بالظبط الحالة اللي بتسمح لك من غير إذن، بس بالقواعد الست.', en: 'Quotation is exactly the case that lets you do it without permission, but by the six rules.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك 3، ص 26', en: 'Test Your Knowledge 3, p. 26' },
      blocks: [
        {
          type: 'question',
          question: {
            ar: 'نشرت صورة على صفحة ويب، وعاوز تسمح للناس يستخدموها بشرطين: "يتعرض اسم المصوّر وعنوان العمل" و"العمل ميتغيّرش". أنهي رمزين لازم يتعرضوا مع بعض؟',
            en: 'You post a photo on a web page and want people to use it on two conditions: "show the photographer’s name and the title" and "do not change the work". Which two symbols must appear together?',
          },
          options: [
            { ar: 'BY + ND (الإسناد + لا مشتقات)', en: 'BY + ND (credit + no derivatives)' },
            { ar: 'BY + NC (الإسناد + غير تجاري)', en: 'BY + NC (credit + non-commercial)' },
            { ar: 'NC + SA (غير تجاري + نفس الشروط)', en: 'NC + SA (non-commercial + same terms)' },
            { ar: 'ND + SA (لا مشتقات + نفس الشروط)', en: 'ND + SA (no derivatives + same terms)' },
          ],
          answer: 0,
          explanation: {
            ar: 'الإسناد (BY) يعني تعرض اسم المصوّر وعنوان العمل، ولا مشتقات (ND) يعني متغيّرش العمل.',
            en: "Attribution (BY) means showing the photographer's name and the title; no derivatives (ND) means not changing the work.",
          },
          success: { ar: 'صح! BY + ND. +10 نقط', en: 'Correct! BY + ND. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الشرط الأول عن "الاسم والعنوان". الشرط التاني عن "متتغيّرش". كل شرط ليه رمز.', en: 'The first condition is about "name and title". The second is about "not changed". Each has its own symbol.' },
        { ar: 'افتكر: BY اذكر، ND متغيّرش.', en: 'Remember: BY credit, ND no changes.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 2-3!', en: 'You finished lesson 2-3!' } },
        {
          type: 'recap',
          items: [
            { code: '6', text: { ar: 'قواعد الاقتباس', en: 'quotation rules' } },
            { code: '+50', text: { ar: 'سنة بعد وفاة المبدع', en: 'years after the creator dies' } },
            { code: 'BY · NC', text: { ar: 'اذكر · متتاجرش', en: 'credit · no trade' } },
            { code: 'ND · SA', text: { ar: 'متغيّرش · نفس الشروط', en: 'no changes · same terms' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        {
          ar: 'شاطر! دلوقتي لعبة التوصيل: هتوصّل كل رمز بمعناه، وبعدها تختار الترخيص المناسب لكل موقف.',
          en: 'Well done! Now the matching game: connect each symbol to its meaning, then choose the right licence for each situation.',
        },
        {
          ar: 'دوس على كارت، وبعدين على معناه. ولو تعبت، دوس عليّا.',
          en: 'Tap a card, then its meaning. And if you get stuck, tap me.',
        },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'وصّل الرمز بمعناه', en: 'Match the symbol to its meaning' },
        source: { ar: 'جدول تراخيص المشاع الإبداعي، ص 25', en: 'The Creative Commons table, p. 25' },
        pairs: [
          { left: { cc: 'BY' }, right: { ar: 'اعرض عنوان العمل واسم المؤلف', en: "Show the work's title and the author's name" } },
          { left: { cc: 'NC' }, right: { ar: 'متستخدمهوش لأغراض تجارية', en: 'Do not use it for commercial purposes' } },
          { left: { cc: 'ND' }, right: { ar: 'متغيّرش العمل الأصلي', en: 'Do not change the original work' } },
          { left: { cc: 'SA' }, right: { ar: 'انشر تحت نفس مجموعة التراخيص', en: 'Publish under the same set of licences' } },
        ],
      },
      {
        title: { ar: 'اختار الترخيص المناسب', en: 'Choose the right licence' },
        source: { ar: 'الجدول ص 25، وتحدى معلوماتك 3 ص 26', en: 'The table p. 25, and Test Your Knowledge 3 p. 26' },
        pairs: [
          { left: { text: { ar: 'عاوز الناس تعرض اسمك وعنوان عملك', en: 'You want people to show your name and your work’s title' } }, right: { ar: 'BY · الإشارة لفضل المبدع', en: 'BY · credit the creator' } },
          { left: { text: { ar: 'مش عاوز حد يستخدم عملك في التجارة', en: 'You do not want anyone to use your work for trade' } }, right: { ar: 'NC · غير تجاري', en: 'NC · non-commercial' } },
          { left: { text: { ar: 'مش عاوز حد يغيّر في عملك الأصلي', en: 'You do not want anyone to change your original work' } }, right: { ar: 'ND · لا مشتقات', en: 'ND · no derivatives' } },
          { left: { text: { ar: 'عاوز أي تعديل ينتشر بنفس تراخيص عملك', en: 'You want any changes shared under the same licences as your work' } }, right: { ar: 'SA · نفس الشروط', en: 'SA · same terms' } },
        ],
      },
      {
        title: { ar: 'وصّل المصطلح بمعناه', en: 'Match the term to its meaning' },
        source: { ar: 'النقاط الرئيسية، ص 25', en: 'Key Points, p. 25' },
        pairs: [
          { left: { text: { ar: 'الاستخدام العادل', en: 'Fair use' } }, right: { ar: 'استفادة الناس من الأعمال المحمية بشكل عادل', en: 'People benefit from protected works in a fair way' } },
          { left: { text: { ar: 'الاقتباس', en: 'Quotation' } }, right: { ar: 'استخدام جزء من عمل محمي في عملك', en: 'Using a part of a protected work inside your own' } },
          { left: { text: { ar: 'ترخيص المشاع الإبداعي', en: 'Creative Commons licence' } }, right: { ar: 'علامة تقول شروط استخدام العمل المحمي', en: 'A mark that states the terms for using a protected work' } },
          { left: { text: { ar: 'مدة حماية الحقوق الاقتصادية', en: 'Length of the economic rights' } }, right: { ar: '50 سنة بعد وفاة المبدع', en: '50 years after the creator dies' } },
        ],
      },
    ],
  },
};
