import { Lesson } from '@core/models';

/**
 * Lesson 2-2 "حقوق الملكية الفكرية" — ministry book pp. 21–24.
 * Book notes:
 * - The same family is called "حقوق الملكية الصناعية" (p.21) and "الملكية الصناعية" (p.24); the site uses p.21's term.
 * - Page headings, tables and numbered terms on pp.21–22 carry stray numbers (e.g. "6) حقوق نموذج المنفعة") that
 *   are layout glitches, not content; they are not reproduced.
 * - The design right's term is printed "10 سنة من تاريخ التقديم (تجدد مرة واحدة كل 5 سنوات)"; copied as written.
 * - p.24 exercise 3 (a paragraph with blanks) has no answer key and is not used.
 */
export const LESSON_2_2: Lesson = {
  unitId: 2,
  id: '2-2',
  title: { ar: 'حقوق الملكية الفكرية', en: 'Intellectual Property Rights' },
  bookPages: '21 – 24',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        {
          ar: 'أهلًا! الدرس ده عن حماية اللي الإنسان بيبدعه بفكره: اختراع، علامة تجارية، رواية، أغنية…',
          en: 'Hi! This lesson is about protecting what people create with their minds: inventions, brands, novels, songs…',
        },
        {
          ar: 'فيه أرقام كتير (مدد الحماية)، فهنعرضها بشكل بصري عشان تفتكرها بسهولة.',
          en: 'There are many numbers (protection periods), so we show them visually to make them easy to remember.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 21', en: 'Key Points, p. 21' },
      blocks: [
        { type: 'heading', text: { ar: 'حقوق الملكية الفكرية', en: 'Intellectual property rights' }, code: '(Intellectual Property Rights)' },
        {
          type: 'lead',
          text: {
            ar: 'حقوق بتحمي اللي الإنسان بيبدعه بفكره في المجالات الأدبية والفنية والعلمية والتجارية والصناعية. وليها 3 فروع:',
            en: 'Rights protecting what people create in literature, art, science, trade and industry. They have 3 branches:',
          },
        },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'حقوق المؤلف', en: 'Copyright' },
              text: { ar: 'بتحمي الأعمال الأدبية والفنية.', en: 'Protects literary and artistic works.' },
              example: { ar: 'روايات، أفلام، موسيقى، برامج', en: 'Novels, films, music, software' },
            },
            {
              title: { ar: 'الحقوق المجاورة', en: 'Neighboring rights' },
              text: { ar: 'بتحمي اللي بيساعد في تقديم العمل للناس.', en: 'Protects those who help bring the work to the public.' },
              example: { ar: 'ممثلين، مطربين، شركات تسجيل', en: 'Actors, singers, recording companies' },
            },
            {
              title: { ar: 'حقوق الملكية الصناعية', en: 'Industrial property rights' },
              text: { ar: 'بتحمي الابتكارات في الصناعة والتجارة.', en: 'Protects innovations in industry and trade.' },
              example: { ar: 'اختراعات، علامات تجارية، تصميمات', en: 'Inventions, trademarks, designs' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: الملكية الفكرية بتحمي الإبداع', en: 'Remember: intellectual property protects creativity' } },
      ],
      bito: [
        {
          ar: 'لو ألّفت أغنية، أو اخترعت جهاز، أو عملت لوجو لشركة: كل ده إبداع ليه حقوق.',
          en: 'If you write a song, invent a device or design a company logo: all of that is creativity with rights.',
        },
        {
          ar: 'الحقوق دي تلات أنواع كبار: للمؤلف، والمجاورة، والصناعية. هنفصّلهم صفحة صفحة.',
          en: 'These rights come in three big kinds: copyright, neighboring and industrial. We go through each one.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 21', en: 'Key Points, p. 21' },
      blocks: [
        { type: 'heading', text: { ar: 'حقوق الملكية الصناعية', en: 'Industrial property rights' }, code: '(Industrial Property Rights)' },
        {
          type: 'lead',
          text: {
            ar: 'بتحمي الابتكارات والإبداعات المرتبطة بالصناعة والتجارة، وبتشمل:',
            en: 'They protect innovations tied to industry and trade, and cover:',
          },
        },
        {
          type: 'chips',
          items: [
            { ar: 'الاختراعات', en: 'Inventions' },
            { ar: 'الرسوم والنماذج الصناعية', en: 'Industrial designs' },
            { ar: 'العلامات التجارية وعلامات الخدمة', en: 'Trademarks and service marks' },
            { ar: 'الأسماء التجارية', en: 'Trade names' },
            { ar: 'المؤشرات الجغرافية', en: 'Geographical indications' },
            { ar: 'الحماية من المنافسة غير المشروعة', en: 'Protection from unfair competition' },
          ],
        },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'مبدأ الشكلية', en: 'The formality principle' },
              en: 'Formality',
              text: {
                ar: 'الحقوق دي لازم تتسجّل عند الجهة المختصة (زي مكتب براءات الاختراع المصري) عشان تتحمي قانونًا.',
                en: 'These rights must be registered with the competent authority (like the Egyptian Patent Office) to be legally protected.',
              },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: الملكية الصناعية لازم تتسجّل', en: 'Remember: industrial property must be registered' } },
      ],
      bito: [
        {
          ar: 'عملت اختراع؟ مش كفاية إنك اخترعته. لازم تسجّله عند الجهة المختصة عشان القانون يحميه.',
          en: "Made an invention? It's not enough to invent it. You must register it with the authority for the law to protect it.",
        },
        {
          ar: 'اسم التسجيل ده في الكتاب: "مبدأ الشكلية" (Formality). افتكره عشان هنقارنه بحقوق المؤلف.',
          en: 'The book calls this registration "the formality principle". Remember it, because we will compare it with copyright.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 21', en: 'Key Points, p. 21' },
      blocks: [
        { type: 'heading', text: { ar: '4 أنواع للملكية الصناعية', en: '4 kinds of industrial property' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'براءات الاختراع', en: 'Patents' },
              en: 'Patent Rights',
              text: { ar: 'بتحمي الاختراعات التقنية الجديدة القابلة للتطبيق الصناعي.', en: 'Protects new technical inventions that can be applied in industry.' },
            },
            {
              title: { ar: 'حقوق نموذج المنفعة', en: 'Utility model rights' },
              text: { ar: 'بتحمي حلولًا تقنية بسيطة أو تحسينات عملية جديدة (أقل ابتكارًا من الاختراع).', en: 'Protects simple technical solutions or new practical improvements (less inventive than an invention).' },
            },
            {
              title: { ar: 'الرسوم والنماذج الصناعية', en: 'Industrial designs' },
              text: { ar: 'بتحمي المظهر الخارجي للمنتج: الشكل أو الخطوط أو الأنماط أو الألوان.', en: "Protects a product's outer appearance: shape, lines, patterns or colours." },
            },
            {
              title: { ar: 'حقوق العلامة التجارية', en: 'Trademark rights' },
              text: { ar: 'بتحمي أي إشارة بتتشاف بتميّز منتجات أو خدمات عن غيرها: أسماء، كلمات، حروف، أرقام، رموز، صور، ألوان.', en: 'Protects any visible sign that tells products or services apart: names, words, letters, numbers, symbols, images, colours.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: اختراع، تحسين، شكل، علامة', en: 'Remember: invention, improvement, look, mark' } },
      ],
      bito: [
        {
          ar: 'فكّر في موبايل: التقنية الجديدة جواه براءة اختراع، شكله الخارجي رسم صناعي، واسم الشركة علامة تجارية.',
          en: "Think of a phone: its new technology is a patent, its outer look is an industrial design, the company's name is a trademark.",
        },
        {
          ar: 'والفرق بين الاختراع ونموذج المنفعة: الاختراع ابتكار كبير، ونموذج المنفعة تحسين بسيط.',
          en: 'The difference between an invention and a utility model: an invention is a big innovation, a utility model is a simple improvement.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 21 – 22', en: 'Key Points, pp. 21 – 22' },
      blocks: [
        { type: 'heading', text: { ar: 'مدة الحماية كام سنة؟', en: 'How many years of protection?' } },
        {
          type: 'durations',
          items: [
            { label: { ar: 'براءة الاختراع', en: 'Patent' }, years: 20, note: { ar: 'من تاريخ التقديم', en: 'from the filing date' } },
            { label: { ar: 'نموذج المنفعة', en: 'Utility model' }, years: 7, note: { ar: 'من تاريخ التقديم', en: 'from the filing date' } },
            { label: { ar: 'الرسوم والنماذج الصناعية', en: 'Industrial design' }, years: 10, note: { ar: 'من تاريخ التقديم (تجدد مرة واحدة كل 5 سنوات)', en: 'from the filing date (renewed once every 5 years)' } },
            { label: { ar: 'العلامة التجارية', en: 'Trademark' }, years: 10, note: { ar: 'من تاريخ التسجيل، وتتجدد', en: 'from the registration date, and it can be renewed' } },
            { label: { ar: 'حقوق المؤلف', en: 'Copyright' }, years: 50, shown: '+50', note: { ar: 'عمر المؤلف + 50 سنة بعد وفاته', en: "the author's life + 50 years after death" } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: 20 · 7 · 10 · 10', en: 'Remember: 20 · 7 · 10 · 10' } },
      ],
      bito: [
        {
          ar: 'رتّبهم من الأطول للأقصر: الاختراع 20، بعده الرسوم والعلامة 10، وأقصرهم نموذج المنفعة 7.',
          en: 'Order them longest to shortest: patent 20, then designs and trademarks 10, and the shortest is the utility model at 7.',
        },
        {
          ar: 'وحقوق المؤلف بتختلف: مش بتتحسب من التسجيل، بتفضل طول عمر المؤلف وبعد وفاته 50 سنة.',
          en: "Copyright is different: it isn't counted from registration; it lasts the author's lifetime plus 50 years after death.",
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 21', en: 'Key Points, p. 21' },
      blocks: [
        { type: 'heading', text: { ar: 'حقوق المؤلف', en: 'Copyright' }, code: '(Copyrights)' },
        {
          type: 'lead',
          text: {
            ar: 'حقوق بتتعلق بالأنشطة الإبداعية في الفنون، وبتحمي أعمال زي:',
            en: 'Rights tied to creative activity in the arts, protecting works such as:',
          },
        },
        {
          type: 'chips',
          items: [
            { ar: 'الروايات', en: 'Novels' },
            { ar: 'الأفلام', en: 'Films' },
            { ar: 'اللوحات الفنية', en: 'Paintings' },
            { ar: 'الصور الفوتوغرافية', en: 'Photographs' },
            { ar: 'الموسيقى', en: 'Music' },
            { ar: 'برامج الكمبيوتر', en: 'Computer programs' },
            { ar: 'المصنفات السمعية البصرية', en: 'Audiovisual works' },
          ],
        },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'عدم الشكلية', en: 'Non-formality' },
              en: 'Non-Formality',
              text: {
                ar: 'الحق بيتولد في لحظة ما العمل يتعمل، من غير تسجيل، سواء المؤلف هاوي أو قاصر.',
                en: 'The right arises the moment the work is created, with no registration, whether the author is an amateur or a minor.',
              },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: الصناعية لازم تسجيل، والمؤلف لأ', en: 'Remember: industrial needs registration, copyright does not' } },
      ],
      bito: [
        {
          ar: 'رسمت لوحة؟ حقك فيها اتولد وانت بترسمها. مش محتاج تروح تسجّلها في أي مكان.',
          en: "Painted a picture? Your right was born as you painted it. You don't need to register it anywhere.",
        },
        {
          ar: 'ده الفرق الكبير عن الملكية الصناعية: دي لازم تسجيل (شكلية)، وحقوق المؤلف من غير تسجيل (عدم شكلية).',
          en: 'That is the big difference from industrial property: that needs registration (formality), copyright needs none (non-formality).',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 22', en: 'Key Points, p. 22' },
      blocks: [
        { type: 'heading', text: { ar: 'حقوق المبدع', en: 'The creator’s rights' }, code: '(Copyright Act)' },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'الحقوق المعنوية', en: 'Moral rights' },
              text: { ar: 'بتحمي الصلة الشخصية بين المبدع وعمله: حق نسب العمل ليه، وحق منع أي تعديل أو تشويه أو تحريف.', en: "Protect the personal link between creator and work: the right to be named as author, and to stop any change, distortion or alteration." },
            },
            {
              title: { ar: 'حقوق النشر والطبع', en: 'Publishing and printing rights' },
              en: 'Copyrights (property rights)',
              text: { ar: 'حقوق مالية: الاستغلال الاقتصادي للعمل بالنسخ والتوزيع والترجمة والأداء العلني.', en: 'Economic rights: profiting from the work by copying, distributing, translating and public performance.' },
            },
            {
              title: { ar: 'الحقوق المجاورة', en: 'Neighboring rights' },
              en: 'Neighboring Rights',
              text: { ar: 'للمؤدين (مطربين ومخرجين وممثلين)، ولشركات التسجيل ومنظمات البث.', en: 'For performers (singers, directors, actors), and for recording companies and broadcasters.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: معنوي = اسمك على عملك. مالي = فلوس عملك', en: 'Remember: moral = your name on your work. Economic = money from your work' } },
      ],
      bito: [
        {
          ar: 'كاتب رواية: حقه إن اسمه يتكتب عليها، ومحدش يغيّر فيها وينسبها له. ده الحق المعنوي.',
          en: 'A novelist has the right to have their name on it, and nobody may change it and still attribute it to them. That is the moral right.',
        },
        {
          ar: 'وحقه كمان يكسب من نسخها وبيعها وترجمتها. ده الحق المالي.',
          en: 'They also have the right to earn from copying, selling and translating it. That is the economic right.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 22', en: 'Key Points, p. 22' },
      blocks: [
        { type: 'heading', text: { ar: 'المدة والانتهاك', en: 'Duration and infringement' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'مدة حماية حقوق المؤلف', en: 'How long copyright lasts' },
              text: { ar: 'عمر المؤلف + 50 سنة بعد وفاته.', en: "The author's life + 50 years after death." },
            },
            {
              tone: 'no',
              title: { ar: 'انتهاك حقوق المؤلف', en: 'Infringing copyright' },
              text: {
                ar: 'لو هتنشر عمل مؤلف تاني على موقع، لازم تاخد إذنه. استخدام العمل المحمي من غير إذن = انتهاك لحقوق المؤلف.',
                en: "To publish another author's work on a website you need their permission. Using protected work without permission = infringement.",
              },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: نشر عمل غيرك من غير إذن = انتهاك', en: "Remember: publishing someone else's work without permission = infringement" } },
      ],
      bito: [
        {
          ar: 'نزّلت فيلم أو أغنية على موقعك من غير إذن صاحبها؟ ده انتهاك، حتى لو مش بتكسب منه.',
          en: "Posted a film or song on your site without the owner's permission? That is infringement, even if you earn nothing.",
        },
        {
          ar: '50 سنة بعد وفاة المؤلف: بعدها العمل بيبقى متاح للناس كلها. بس فيه حقوق مجاورة ممكن تفضل.',
          en: '50 years after the author dies: then the work is open to everyone. Though neighboring rights may remain.',
        },
      ],
    },
    {
      source: { ar: 'تمرين 1 (1)، ص 24', en: 'Exercise 1 (1), p. 24' },
      blocks: [
        {
          type: 'question',
          question: {
            ar: 'إيه المصطلح اللي بيشير للحقوق المتعلقة بتصنيع المنتجات الصناعية؟',
            en: 'Which term means the rights related to manufacturing industrial products?',
          },
          options: [
            { ar: 'حقوق الملكية الصناعية', en: 'Industrial property rights' },
            { ar: 'حقوق المؤلف', en: 'Copyright' },
            { ar: 'الحقوق المجاورة', en: 'Neighboring rights' },
            { ar: 'حقوق الدعاية', en: 'Publicity rights' },
          ],
          answer: 0,
          explanation: { ar: 'حقوق الملكية الصناعية.', en: "Industrial property rights." },
          success: { ar: 'صح! حقوق الملكية الصناعية. +10 نقط', en: 'Correct! Industrial property rights. +10 pts' },
        },
      ],
      bito: [
        { ar: 'كلمة "تصنيع" هي المفتاح. أنهي فرع من التلاتة بيحمي الابتكارات في الصناعة؟', en: 'The key word is "manufacturing". Which of the three branches protects innovation in industry?' },
        { ar: 'حقوق المؤلف للأعمال الفنية والأدبية، مش للمنتجات المصنعة.', en: 'Copyright is for artistic and literary works, not manufactured products.' },
      ],
    },
    {
      source: { ar: 'تمرين 1 (3)، ص 24', en: 'Exercise 1 (3), p. 24' },
      blocks: [
        {
          type: 'question',
          question: {
            ar: 'إيه المصطلح اللي بيطلق على الحقوق اللي بتحمي العلامات المستخدمة لتمييز السلع والخدمات؟',
            en: 'Which term names the rights protecting the marks used to tell goods and services apart?',
          },
          options: [
            { ar: 'براءات الاختراع', en: 'Patents' },
            { ar: 'حقوق نموذج المنفعة', en: 'Utility model rights' },
            { ar: 'الرسوم والنماذج الصناعية', en: 'Industrial designs' },
            { ar: 'حقوق العلامة التجارية', en: 'Trademark rights' },
          ],
          answer: 3,
          explanation: { ar: 'حقوق العلامة التجارية، لأنها بتميّز المنتجات والخدمات عن غيرها.', en: "Trademark rights, because they tell products and services apart." },
          success: { ar: 'صح! حقوق العلامة التجارية. +10 نقط', en: 'Correct! Trademark rights. +10 pts' },
        },
      ],
      bito: [
        { ar: 'اللوجو واسم الماركة على المنتج بيميّزوه عن غيره. أنهي حق بيحميهم؟', en: 'The logo and brand name on a product tell it apart from others. Which right protects them?' },
        { ar: 'براءة الاختراع للاختراع نفسه، مش للاسم اللي عليه.', en: 'A patent is for the invention itself, not the name on it.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك 2 (أ)، ص 22', en: 'Test Your Knowledge 2 (a), p. 22' },
      blocks: [
        {
          type: 'question',
          question: {
            ar: 'صح ولا غلط: نشر رواية "الأيام" لعميد الأدب العربي طه حسين على موقعك الإلكتروني من غير إذن لا يشكل انتهاكًا لحق المؤلف.',
            en: 'True or false: publishing "Al-Ayyam" by Taha Hussein on your website without permission is not an infringement of copyright.',
          },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. مرّ أكتر من 50 سنة على وفاته، يعني انتهت حقوقه المالية.',
            en: "✓. More than 50 years have passed since his death, so his economic rights have ended.",
          },
          success: { ar: 'صح! عدّى 50 سنة على وفاته. +10 نقط', en: 'Correct! 50 years have passed since his death. +10 pts' },
        },
      ],
      bito: [
        { ar: 'افتكر مدة حماية حقوق المؤلف: عمره + 50 سنة. طه حسين اتوفى من أكتر من 50 سنة.', en: "Remember copyright's length: his life + 50 years. Taha Hussein died more than 50 years ago." },
        { ar: 'لو العمل لسه جوه المدة، كان لازم إذن. هنا المدة انتهت.', en: 'If the work were still inside the period, permission would be needed. Here the period has ended.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 2-2!', en: 'You finished lesson 2-2!' } },
        {
          type: 'recap',
          items: [
            { code: '3', text: { ar: 'مؤلف، مجاورة، صناعية', en: 'copyright, neighboring, industrial' } },
            { code: '4', text: { ar: 'اختراع، منفعة، رسم، علامة', en: 'patent, utility, design, mark' } },
            { code: '20·7·10·10', text: { ar: 'مدد الحماية', en: 'protection periods' } },
            { code: '+50', text: { ar: 'بعد وفاة المؤلف', en: 'after the author dies' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        {
          ar: 'شاطر! دلوقتي لعبة الفرز: 3 جولات، من نوع الحق لحد مدة الحماية.',
          en: 'Well done! Now the sorting game: 3 rounds, from the kind of right to the protection period.',
        },
        {
          ar: 'لو اتلخبطت في مدة، ارجع لصفحة الأعمدة الخضرا.',
          en: 'If you mix up a period, go back to the page with the green bars.',
        },
      ],
    },
  ],

  game: {
    kind: 'sort',
    rounds: [
      {
        title: { ar: 'ملكية صناعية ولا حق مؤلف؟', en: 'Industrial property or copyright?' },
        source: { ar: 'النقاط الرئيسية، ص 21', en: 'Key Points, p. 21' },
        bins: [
          { id: 'industrial', label: { ar: 'ملكية صناعية', en: 'Industrial property' } },
          { id: 'copyright', label: { ar: 'حق مؤلف', en: 'Copyright' } },
        ],
        items: [
          { text: { ar: 'اختراع تقني جديد', en: 'A new technical invention' }, bin: 'industrial' },
          { text: { ar: 'رواية', en: 'A novel' }, bin: 'copyright' },
          { text: { ar: 'علامة تجارية', en: 'A trademark' }, bin: 'industrial' },
          { text: { ar: 'فيلم', en: 'A film' }, bin: 'copyright' },
          { text: { ar: 'مؤشر جغرافي', en: 'A geographical indication' }, bin: 'industrial' },
          { text: { ar: 'برنامج كمبيوتر', en: 'A computer program' }, bin: 'copyright' },
          { text: { ar: 'الشكل الخارجي لمنتج', en: "A product's outer shape" }, bin: 'industrial' },
          { text: { ar: 'لوحة فنية', en: 'A painting' }, bin: 'copyright' },
        ],
      },
      {
        title: { ar: 'أنهي نوع من الملكية الصناعية؟', en: 'Which kind of industrial property?' },
        source: { ar: 'جدول أنواع الملكية الصناعية، ص 21', en: 'The table of industrial property kinds, p. 21' },
        bins: [
          { id: 'patent', label: { ar: 'براءة اختراع', en: 'Patent' } },
          { id: 'utility', label: { ar: 'نموذج منفعة', en: 'Utility model' } },
          { id: 'design', label: { ar: 'رسوم ونماذج', en: 'Design' } },
          { id: 'trademark', label: { ar: 'علامة تجارية', en: 'Trademark' } },
        ],
        items: [
          { text: { ar: 'اختراع تقني جديد قابل للتطبيق الصناعي', en: 'A new technical invention that industry can apply' }, bin: 'patent' },
          { text: { ar: 'شكل المنتج الخارجي أو ألوانه', en: "A product's outer shape or colours" }, bin: 'design' },
          { text: { ar: 'إشارة بتميّز منتجات شركة عن غيرها', en: "A sign telling one company's products from others'" }, bin: 'trademark' },
          { text: { ar: 'حل تقني بسيط أو تحسين عملي جديد', en: 'A simple technical solution or new practical improvement' }, bin: 'utility' },
          { text: { ar: 'الأنماط والخطوط في تصميم منتج', en: "Patterns and lines in a product's design" }, bin: 'design' },
          { text: { ar: 'اسم أو رمز بيدل على مصدر المنتج أو الخدمة', en: 'A name or symbol showing where a product or service comes from' }, bin: 'trademark' },
        ],
      },
      {
        title: { ar: 'مدة الحماية كام؟', en: 'How long is the protection?' },
        source: { ar: 'جدول المدد، ص 21، وص 22', en: 'The table of periods, p. 21, and p. 22' },
        bins: [
          { id: 'y7', label: { ar: '7 سنين', en: '7 years' } },
          { id: 'y10', label: { ar: '10 سنين', en: '10 years' } },
          { id: 'y20', label: { ar: '20 سنة', en: '20 years' } },
          { id: 'y50', label: { ar: 'عمر المؤلف + 50', en: "Author's life + 50" } },
        ],
        items: [
          { text: { ar: 'براءة الاختراع', en: 'A patent' }, bin: 'y20' },
          { text: { ar: 'حقوق نموذج المنفعة', en: 'A utility model' }, bin: 'y7' },
          { text: { ar: 'العلامة التجارية', en: 'A trademark' }, bin: 'y10' },
          { text: { ar: 'حقوق المؤلف', en: 'Copyright' }, bin: 'y50' },
          { text: { ar: 'الرسوم والنماذج الصناعية', en: 'An industrial design' }, bin: 'y10' },
        ],
      },
    ],
  },
};
