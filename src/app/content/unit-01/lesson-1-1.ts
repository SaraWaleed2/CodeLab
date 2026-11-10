import { Lesson } from '@core/models';

/**
 * Lesson 1-1 "المعلومات والوسائط" — ministry book pp. 8–11.
 * Book notes:
 * - The same property is named three ways: "القابلية للتكرار" (p.8), "القدرة على الاستنساخ" (p.9),
 *   "قابلية النسخ" (p.11). The site uses p.8's term with (Reproducibility).
 * - Persistence is "الاستمرارية" on p.8 but "الثبات" on p.9; the site uses p.8's term.
 */
export const LESSON_1_1: Lesson = {
  unitId: 1,
  id: '1-1',
  title: { ar: 'المعلومات والوسائط', en: 'Information and Media' },
  bookPages: '8 – 11',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        {
          ar: 'أهلًا! ده أول درس في المنهج. هنعرف الفرق بين البيانات والمعلومات والمعرفة، وإزاي المعلومة بتوصلنا.',
          en: "Hi! This is the first lesson of the course. We'll learn the difference between data, information and knowledge, and how information reaches us.",
        },
        { ar: 'قلّب الصفحات بزرار "الصفحة الجاية" أو بالركن المطوي تحت.', en: 'Turn the pages with "Next page" or the folded corner at the bottom.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 8', en: 'Key Points, p. 8' },
      blocks: [
        { type: 'heading', text: { ar: 'بيانات ← معلومات ← معرفة', en: 'Data → Information → Knowledge' } },
        {
          type: 'steps',
          items: [
            {
              title: { ar: 'البيانات', en: 'Data' },
              en: 'Data',
              text: { ar: 'حقائق مكتوبة بأرقام أو حروف أو رموز.', en: 'Facts written as numbers, letters or symbols.' },
              example: { ar: 'قيم درجة الحرارة والرطوبة', en: 'Temperature and humidity values' },
            },
            {
              title: { ar: 'المعلومات', en: 'Information' },
              en: 'Information',
              text: { ar: 'بيانات بقى ليها معنى أو قيمة، وبنستخدمها عشان ناخد قرار.', en: 'Data that now has meaning or value, used to make decisions.' },
              example: { ar: 'نتائج تحليل الحرارة والرطوبة على مدى السنين', en: 'Results of analysing temperature and humidity over the years' },
            },
            {
              title: { ar: 'المعرفة', en: 'Knowledge' },
              en: 'Knowledge',
              text: { ar: 'معلومات اتحللت واتنظمت عشان نحل بيها مشاكل.', en: 'Information analysed and organised to solve problems.' },
              example: { ar: 'توقعات الطقس', en: 'Weather forecasts' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: كل خطوة في السلّم ليها معنى أكتر من اللي قبلها', en: 'Remember: each step up has more meaning than the one before' } },
      ],
      bito: [
        {
          ar: 'الترمومتر بيقول 30 و32 و35: دي بيانات. لو قلنا "الجو بيسخن كل يوم": دي معلومة. ولو قلنا "بكرة هيبقى حر، خد مية معاك": دي معرفة.',
          en: 'A thermometer says 30, 32, 35: that is data. "It gets hotter every day": information. "Tomorrow will be hot, take water": knowledge.',
        },
        {
          ar: 'البيانات أرقام لوحدها. لما نفهم معناها تبقى معلومات. ولما نستخدمها نتوقع أو نحل مشكلة تبقى معرفة.',
          en: 'Data is just numbers. Understand what they mean: information. Use that to predict or solve a problem: knowledge.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 8', en: 'Key Points, p. 8' },
      blocks: [
        { type: 'heading', text: { ar: 'خصائص المعلومات', en: 'Properties of information' } },
        { type: 'lead', text: { ar: 'المعلومات ملهاش شكل مادي زي الحاجات اللي بنمسكها. وليها 3 خصائص:', en: 'Information has no physical shape like the things we hold. It has 3 properties:' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'الاستمرارية', en: 'Persistence' },
              en: 'Persistence',
              text: { ar: 'أول ما المعلومة تتعمل، مينفعش تتمسح بالكامل.', en: 'Once information is created, it can never be fully erased.' },
            },
            {
              title: { ar: 'القابلية للتكرار', en: 'Reproducibility' },
              en: 'Reproducibility',
              text: { ar: 'سهل جدًا تتنسخ نسخ كتير.', en: 'It is very easy to make many copies.' },
            },
            {
              title: { ar: 'الانتشار', en: 'Propagation' },
              en: 'Propagation',
              text: {
                ar: 'سهل توصل وتنتشر، خصوصًا بوسائل الإعلام الجماهيرية زي الصحف والتلفزيون والإنترنت.',
                en: 'It reaches people and spreads easily, especially through mass media like newspapers, TV and the internet.',
              },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: تستمر، تتنسخ، تنتشر', en: 'Remember: it persists, it copies, it spreads' } },
      ],
      bito: [
        {
          ar: 'صورة اتنشرت على النت؟ حتى لو مسحتها، ممكن حد يكون حفظها. ده معنى إن المعلومة بتستمر.',
          en: "A photo posted online? Even if you delete it, someone may have saved it. That's persistence.",
        },
        {
          ar: 'فكّر في نكتة في جروب الفصل: حد ينسخها (تكرار)، توصل لكل المدرسة في ساعة (انتشار)، ومحدش يقدر يمسحها من كل الموبايلات (استمرارية).',
          en: "Think of a joke in the class group: someone copies it (reproducibility), the whole school has it in an hour (propagation), and nobody can delete it from every phone (persistence).",
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 8', en: 'Key Points, p. 8' },
      blocks: [
        { type: 'heading', text: { ar: 'أولية ولا ثانوية؟', en: 'Primary or secondary?' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'المعلومات الأولية', en: 'Primary information' },
              en: 'Primary information',
              text: { ar: 'بتجيبها بنفسك من تجربتك المباشرة أو بحثك.', en: 'You get it yourself, from direct experience or research.' },
              example: { ar: 'تقارير التجارب، نتائج الاستطلاعات، جداول البيانات', en: 'Experiment reports, survey results, data tables' },
            },
            {
              title: { ar: 'المعلومات الثانوية', en: 'Secondary information' },
              en: 'Secondary information',
              text: { ar: 'بتوصلك عن طريق طرف تالت.', en: 'It reaches you through a third party.' },
              example: { ar: 'الكتب، الصحف، التلفزيون', en: 'Books, newspapers, TV' },
            },
          ],
        },
        {
          type: 'lead',
          text: {
            ar: 'المعلومات الثانوية ممكن تبقى مختلفة عن الأصل أو فيها تفسير زيادة. عشان كده بنقارنها بأكتر من مصدر.',
            en: 'Secondary information may differ from the original or add interpretation. So we compare it with several sources.',
          },
        },
        { type: 'memo', text: { ar: 'التحقق المتبادل: قارن المعلومة بأكتر من مصدر', en: 'Cross-checking: compare the information with several sources' }, code: 'Cross-checking' },
      ],
      bito: [
        { ar: 'لو إنت بنفسك قست طولك: دي معلومة أولية. لو صاحبك قالك طولك قد إيه: دي ثانوية.', en: 'If you measured your own height: primary. If a friend told you your height: secondary.' },
        { ar: 'قبل ما تصدّق خبر، دوّر عليه في مصدر تاني. ده التحقق المتبادل.', en: 'Before you believe a story, look for it in another source. That is cross-checking.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 8', en: 'Key Points, p. 8' },
      blocks: [
        { type: 'heading', text: { ar: 'الوسائط', en: 'Media' }, code: '(Media)' },
        { type: 'lead', text: { ar: 'الوسائط هي اللي بتنقل المعلومات لعدد من الناس. وليها 3 أنواع:', en: 'Media carry information to many people. There are 3 kinds:' } },
        {
          type: 'bins',
          items: [
            {
              title: { ar: 'وسائط التعبير', en: 'Expression media' },
              en: 'Expression media',
              text: { ar: 'بنعبّر بيها عن المعلومة', en: 'We express information with them' },
              examples: [
                { ar: 'النص', en: 'Text' },
                { ar: 'الصور', en: 'Images' },
                { ar: 'الصوت', en: 'Sound' },
                { ar: 'الفيديو', en: 'Video' },
              ],
            },
            {
              title: { ar: 'وسائط النقل/الإرسال', en: 'Propagation/Transmission media' },
              en: 'Propagation/Transmission media',
              text: { ar: 'بتوصّل المعلومة', en: 'They carry information' },
              examples: [
                { ar: 'التلفزيون', en: 'TV' },
                { ar: 'الراديو', en: 'Radio' },
                { ar: 'الصحف', en: 'Newspapers' },
                { ar: 'الكتاب', en: 'Books' },
                { ar: 'الهاتف', en: 'Phone' },
                { ar: 'الإنترنت', en: 'Internet' },
              ],
            },
            {
              title: { ar: 'وسائط التسجيل', en: 'Recording media' },
              en: 'Recording media',
              text: { ar: 'بتخزّن المعلومة', en: 'They store information' },
              examples: [
                { ar: 'الورق', en: 'Paper' },
                { ar: 'فلاشة USB', en: 'USB flash drive' },
                { ar: 'أقراص DVD', en: 'DVDs' },
                { ar: 'التخزين السحابي', en: 'Cloud storage' },
              ],
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: نعبّر ← ننقل ← نخزّن', en: 'Remember: express → carry → store' } },
      ],
      bito: [
        {
          ar: 'خد صورة رحلة: الصورة نفسها وسيط تعبير. الإنترنت اللي بعتها بيه وسيط نقل. والفلاشة اللي حفظتها عليها وسيط تسجيل.',
          en: 'Take a trip photo: the photo is expression media. The internet you sent it over is transmission media. The flash drive you saved it on is recording media.',
        },
        { ar: 'اسأل نفسك: الحاجة دي بتعبّر عن المعلومة؟ ولا بتوصّلها؟ ولا بتحفظها؟', en: 'Ask yourself: does it express the information, carry it, or store it?' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 8', en: 'Key Points, p. 8' },
      blocks: [
        { type: 'heading', text: { ar: 'الثقافة الإعلامية', en: 'Media literacy' }, code: '(Media literacy)' },
        {
          type: 'lead',
          text: {
            ar: 'هي القدرة إنك تفسّر المعلومات اللي بتوصلك من الوسائط بدقة.',
            en: 'It is the ability to interpret the information you get from media accurately.',
          },
        },
        { type: 'memo', text: { ar: 'افتكر: افهم الأول، واتأكد من أكتر من مصدر', en: 'Remember: understand first, then check more than one source' } },
      ],
      bito: [
        {
          ar: 'فيديو بيقول "اشرب ده وهتنجح من غير مذاكرة"؟ الثقافة الإعلامية إنك تفهم هو عاوز إيه، وتتأكد قبل ما تصدّق.',
          en: 'A video says "drink this and pass without studying"? Media literacy is understanding what it wants from you and checking before you believe it.',
        },
        {
          ar: 'الثقافة الإعلامية والتحقق المتبادل صحاب: الأولى بتفهم بيها، والتانية بتتأكد بيها.',
          en: 'Media literacy and cross-checking go together: one helps you understand, the other helps you check.',
        },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1) [2]، ص 9', en: 'Test Your Knowledge (1) [2], p. 9' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'أنهي عبارة مش مناسبة كخاصية للمعلومات؟', en: 'Which statement does NOT fit as a property of information?' },
          options: [
            { ar: 'ليها شكل زي الجسم المادي', en: 'It has a shape like a physical object' },
            { ar: 'معناها وقيمتها بتتغير حسب المستلم', en: 'Its meaning and value change with the receiver' },
            { ar: 'ليها خاصية الاستمرارية', en: 'It has persistence' },
            { ar: 'ليها خاصية الانتشار', en: 'It has propagation' },
          ],
          answer: 0,
          explanation: {
            ar: 'على عكس الحاجات المادية، المعلومات ملهاش شكل. عشان كده الإجابة (أ).',
            en: 'Unlike physical things, information has no shape. So the answer is (A).',
          },
          success: { ar: 'صح! المعلومات ملهاش شكل مادي. +10 نقط', en: 'Correct! Information has no physical shape. +10 pts' },
        },
      ],
      bito: [
        { ar: 'افتكر صفحة الخصائص: المعلومة بتستمر وبتتنسخ وبتنتشر. فيه اختيار واحد مش زي التلاتة دول.', en: 'Remember the properties page: information persists, copies and spreads. One option is not like those.' },
        { ar: 'تقدر تمسك المعلومة بإيدك؟ لأ. يبقى إيه الاختيار الغلط؟', en: 'Can you hold information in your hand? No. So which option is wrong?' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1) [3] أ، ص 9', en: 'Test Your Knowledge (1) [3] a, p. 9' },
      blocks: [
        {
          type: 'question',
          question: {
            ar: 'حتى لو اشتريت CD موسيقى، مش مسموح تعمل منه نسخ وتوزعها على صحابك. العبارة دي مرتبطة بأنهي خاصية؟',
            en: "Even if you buy a music CD, you may not copy it and hand it out to friends. Which property is this about?",
          },
          options: [
            { ar: 'الاستمرارية', en: 'Persistence' },
            { ar: 'القابلية للتكرار', en: 'Reproducibility' },
            { ar: 'الانتشار', en: 'Propagation' },
          ],
          answer: 1,
          explanation: {
            ar: 'دي خاصية القابلية للتكرار: المعلومات سهل تتنسخ. عشان كده الإجابة (ب).',
            en: 'This is reproducibility: information is easy to copy. So the answer is (B).',
          },
          success: { ar: 'صح! النسخ = القابلية للتكرار. +10 نقط', en: 'Correct! Copying = reproducibility. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الكلمة المهمة في السؤال: "نسخ". أنهي خاصية فيها نسخ؟', en: 'The key word is "copy". Which property is about copying?' },
        { ar: 'الاستمرارية = مبتتمسحش. الانتشار = بتوصل لناس كتير. والنسخ؟', en: 'Persistence = never erased. Propagation = reaches many people. And copying?' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2) [2]، ص 9', en: 'Test Your Knowledge (2) [2], p. 9' },
      blocks: [
        {
          type: 'question',
          question: {
            ar: 'إيه المصطلح اللي معناه القدرة على تفسير المعلومات اللي بتوصلنا من الوسائط بدقة؟',
            en: 'Which term means the ability to interpret information from media accurately?',
          },
          options: [
            { ar: 'الثقافة الإعلامية', en: 'Media literacy' },
            { ar: 'التحقق المتبادل', en: 'Cross-checking' },
            { ar: 'المعرفة', en: 'Knowledge' },
            { ar: 'وسائط التسجيل', en: 'Recording media' },
          ],
          answer: 0,
          explanation: { ar: 'الثقافة الإعلامية (Media literacy).', en: "Media literacy." },
          success: { ar: 'صح! الثقافة الإعلامية. +10 نقط', en: 'Correct! Media literacy. +10 pts' },
        },
      ],
      bito: [
        { ar: 'المصطلح ده كان في آخر صفحة شرح قبل الأسئلة.', en: 'This term was on the last explainer page before the questions.' },
        { ar: 'التحقق المتبادل = نقارن مصادر. بس السؤال عن "نفسّر" المعلومة.', en: 'Cross-checking = comparing sources. But the question is about "interpreting".' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 1-1!', en: 'You finished lesson 1-1!' } },
        {
          type: 'recap',
          items: [
            { code: '1 → 2 → 3', text: { ar: 'بيانات، معلومات، معرفة', en: 'data, information, knowledge' } },
            { code: '×3', text: { ar: 'تستمر، تتنسخ، تنتشر', en: 'persists, copies, spreads' } },
            { code: '1ry / 2ry', text: { ar: 'أولية وثانوية', en: 'primary and secondary' } },
            { code: 'Media', text: { ar: 'تعبير، نقل، تسجيل', en: 'expression, transmission, recording' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! دلوقتي نلعب لعبة الفرز: هتحط كل حاجة في الصندوق الصح، وكلها من أسئلة الكتاب.', en: 'Well done! Now the sorting game: put each item in the right box, all from the book.' },
        { ar: 'في اللعبة تقدر تسحب الكارت للصندوق، أو تدوس على الصندوق على طول.', en: 'In the game you can drag the card to a box, or just tap the box.' },
      ],
    },
  ],

  game: {
    kind: 'sort',
    rounds: [
      {
        title: { ar: 'بيانات ولا معلومات ولا معرفة؟', en: 'Data, information or knowledge?' },
        source: { ar: 'تحدى معلوماتك (1) [1]، ص 9', en: 'Test Your Knowledge (1) [1], p. 9' },
        bins: [
          { id: 'data', label: { ar: 'بيانات', en: 'Data' } },
          { id: 'info', label: { ar: 'معلومات', en: 'Information' } },
          { id: 'knowledge', label: { ar: 'معرفة', en: 'Knowledge' } },
        ],
        items: [
          { text: { ar: 'قيم درجة الحرارة والرطوبة', en: 'Temperature and humidity values' }, bin: 'data' },
          { text: { ar: 'نتائج تحليل درجة الحرارة والرطوبة على مدى السنين العشر اللي فاتت', en: 'Results of analysing temperature and humidity over the past ten years' }, bin: 'info' },
          { text: { ar: 'توقعات الطقس', en: 'Weather forecasts' }, bin: 'knowledge' },
        ],
      },
      {
        title: { ar: 'أنهي نوع من الوسائط؟', en: 'Which kind of media?' },
        source: { ar: 'تحدى معلوماتك (2) [1] ص 9، والجدول ص 8', en: 'Test Your Knowledge (2) [1] p. 9, and the table on p. 8' },
        bins: [
          { id: 'expression', label: { ar: 'وسائط تعبير', en: 'Expression' } },
          { id: 'transmission', label: { ar: 'وسائط نقل/إرسال', en: 'Transmission' } },
          { id: 'recording', label: { ar: 'وسائط تسجيل', en: 'Recording' } },
        ],
        items: [
          { text: { ar: 'التلفزيون', en: 'TV' }, bin: 'transmission' },
          { text: { ar: 'التخزين السحابي', en: 'Cloud storage' }, bin: 'recording' },
          { text: { ar: 'صورة', en: 'A photo' }, bin: 'expression' },
          { text: { ar: 'الإنترنت', en: 'The internet' }, bin: 'transmission' },
          { text: { ar: 'حرف نصي', en: 'A text character' }, bin: 'expression' },
          { text: { ar: 'كتاب', en: 'A book' }, bin: 'transmission' },
          { text: { ar: 'فلاشة USB', en: 'USB flash drive' }, bin: 'recording' },
          { text: { ar: 'فيديو', en: 'Video' }, bin: 'expression' },
          { text: { ar: 'أقراص DVD', en: 'DVDs' }, bin: 'recording' },
        ],
      },
      {
        title: { ar: 'معلومة أولية ولا ثانوية؟', en: 'Primary or secondary information?' },
        source: { ar: 'النقاط الرئيسية، ص 8', en: 'Key Points, p. 8' },
        bins: [
          { id: 'primary', label: { ar: 'أولية', en: 'Primary' } },
          { id: 'secondary', label: { ar: 'ثانوية', en: 'Secondary' } },
        ],
        items: [
          { text: { ar: 'تقارير التجارب', en: 'Experiment reports' }, bin: 'primary' },
          { text: { ar: 'الصحف', en: 'Newspapers' }, bin: 'secondary' },
          { text: { ar: 'نتائج الاستطلاعات', en: 'Survey results' }, bin: 'primary' },
          { text: { ar: 'الكتب', en: 'Books' }, bin: 'secondary' },
          { text: { ar: 'جداول البيانات', en: 'Data tables' }, bin: 'primary' },
          { text: { ar: 'التلفزيون', en: 'TV' }, bin: 'secondary' },
        ],
      },
    ],
  },
};
