import { Lesson } from '@core/models';

/**
 * Lesson 6-1 "التناظري والرقمي" — ministry book pp. 62–63.
 * Book notes:
 * - p.62 answer key: (1) analog, (2)–(4) digital. The questions on pp.62–63 are matched to the Key Points here.
 * - The A/D and D/A examples in the game (microphone, speaker...) apply the book's own definitions.
 */
export const LESSON_6_1: Lesson = {
  unitId: 6,
  id: '6-1',
  title: { ar: 'التناظري والرقمي', en: 'Analog and Digital' },
  bookPages: '62 – 63',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! الدرس ده بيشرح إزاي الكمبيوتر بيشوف العالم: كله أرقام.', en: 'Hi! This lesson shows how a computer sees the world: all numbers.' },
        { ar: 'في الآخر لعبة فرز: تناظري ولا رقمي؟', en: 'At the end there is a sorting game: analog or digital?' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1، 2)، ص 62', en: 'Key Points (a-1, 2), p. 62' },
      blocks: [
        { type: 'heading', text: { ar: 'تناظري ولا رقمي؟', en: 'Analog or digital?' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'تناظري', en: 'Analog' }, en: 'Analog', text: { ar: 'كمية بتتغير باستمرار وبشكل متصل، ومنقيسهاش بدقة كاملة. زي الوقت، الكتلة، درجة الحرارة.', en: 'A quantity that keeps changing smoothly and cannot be measured exactly: time, mass, temperature.' }, example: { ar: 'ترمومتر الزئبق: العمود بيطلع شوية شوية', en: 'A mercury thermometer: the column rises little by little' } },
            { title: { ar: 'رقمي', en: 'Digital' }, en: 'Digital', text: { ar: 'الكمية بتتمثل بقيمة محددة (أرقام).', en: 'The quantity is shown as a definite value (numbers).' }, example: { ar: 'ترمومتر رقمي: بيقولك 37.5 بالظبط', en: 'A digital thermometer: it says exactly 37.5' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: تناظري = متصل · رقمي = أرقام محددة', en: 'Remember: analog = smooth · digital = definite numbers' } },
      ],
      bito: [
        { ar: 'الساعة اللي بعقارب تناظرية، والساعة اللي بأرقام رقمية.', en: 'A clock with hands is analog; a clock with numbers is digital.' },
        { ar: 'التناظري ماشي زي الميّة، والرقمي زي السلم: درجة درجة.', en: 'Analog flows like water; digital is like stairs: step by step.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-3، 4)، ص 62', en: 'Key Points (a-3, 4), p. 62' },
      blocks: [
        { type: 'heading', text: { ar: 'التحويل بينهم', en: 'Converting between them' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'من تناظري إلى رقمي', en: 'Analog to digital' }, en: 'A/D conversion (digitization)', text: { ar: 'عملية بتحوّل البيانات التناظرية لبيانات رقمية. اسمها الرقمنة.', en: 'A process turning analog data into digital data. It is called digitization.' }, example: { ar: 'الميكروفون بيحوّل صوتك لأرقام', en: 'A microphone turns your voice into numbers' } },
            { title: { ar: 'من رقمي إلى تناظري', en: 'Digital to analog' }, en: 'D/A conversion', text: { ar: 'عملية بتحوّل البيانات الرقمية لبيانات تناظرية.', en: 'A process turning digital data into analog data.' }, example: { ar: 'السماعة بتحوّل الأرقام لصوت بتسمعه', en: 'A speaker turns numbers back into sound you hear' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: A/D = ندخل الكمبيوتر · D/A = نطلع منه', en: 'Remember: A/D = into the computer · D/A = out of it' } },
      ],
      bito: [
        { ar: 'الحرف الأول هو اللي بيبدأ منه: A (تناظري) ثم D (رقمي).', en: 'The first letter is where it starts: A (analog) then D (digital).' },
        { ar: 'يعني A/D يحوّل التناظري لرقمي.', en: 'So A/D turns analog into digital.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-4)، ص 62', en: 'Key Points (a-4), p. 62' },
      blocks: [
        { type: 'heading', text: { ar: 'ليه الرقمي مفيد؟', en: 'Why is digital useful?' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'نجمّع الأنواع', en: 'Combine kinds' }, text: { ar: 'نقدر نجمّع أنواع بيانات مختلفة.', en: 'We can combine different kinds of data.' }, example: { ar: 'صوت وصورة وفيديو في ملف واحد', en: 'Sound, picture and video in one file' } },
            { title: { ar: 'ننسخ وننقل', en: 'Copy and move' }, text: { ar: 'نقدر ننقل ونحفظ بسهولة.', en: 'We can move and keep it easily.' }, example: { ar: 'ابعت صورة لصاحبك في ثانية', en: 'Send a photo to a friend in a second' } },
            { title: { ar: 'نعدّل ونحرّر', en: 'Edit' }, text: { ar: 'نقدر نعدّل ونحرّر البيانات.', en: 'We can change and edit the data.' }, example: { ar: 'تقصّ فيديو وتضيف موسيقى', en: 'Trim a video and add music' } },
            { title: { ar: 'نخزّن بكفاءة', en: 'Store efficiently' }, text: { ar: 'نقدر نخزّن بكفاءة.', en: 'We can store it efficiently.' }, example: { ar: 'آلاف الأغاني في موبايل واحد', en: 'Thousands of songs on one phone' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: نجمّع · ننقل · نعدّل · نخزّن', en: 'Remember: combine · move · edit · store' } },
      ],
      bito: [
        { ar: 'دي ليه الموبايل والكمبيوتر كله رقمي.', en: 'This is why phones and computers are all digital.' },
        { ar: 'تخيّل تعدّل على شريط كاسيت: صعب! لكن ملف رقمي: بسيط.', en: 'Imagine editing a cassette tape: hard! A digital file: easy.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-4)، ص 62', en: 'Key Points (a-4), p. 62' },
      blocks: [
        { type: 'heading', text: { ar: 'النظام الثنائي', en: 'The binary system' }, code: '(Binary system)' },
        {
          type: 'cards',
          items: [
            { title: { ar: 'النظام الثنائي', en: 'Binary system' }, en: 'Binary system', text: { ar: 'طريقة رقمية لتمثيل الأرقام باستخدام 0 و 1 بس.', en: 'A digital way of showing numbers using only 0 and 1.' }, example: { ar: 'زي مفتاح النور: شغّال (1) أو مطفي (0)', en: 'Like a light switch: on (1) or off (0)' } },
            { title: { ar: 'كل حاجة أرقام', en: 'Everything is numbers' }, text: { ar: 'جميع البيانات في الكمبيوتر (الأرقام والحروف والصوت والصور والفيديو) بتتمثل بالنظام الثنائي.', en: 'All data in a computer (numbers, letters, sound, images, video) is shown in the binary system.' }, example: { ar: 'صورتك على موبايلك = مليون 0 و 1', en: 'Your photo on your phone = a million 0s and 1s' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: الكمبيوتر بيفهم 0 و 1 بس', en: 'Remember: a computer only understands 0 and 1' } },
      ],
      bito: [
        { ar: 'اللمبة يا إما منوّرة يا إما مطفية. من ده كله بيتبني.', en: 'A bulb is either on or off. Everything is built from that.' },
        { ar: 'وفي الدرس الجاي هنتعلم نعد بيها.', en: 'And in the next lesson we learn to count with it.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 62', en: 'Test Your Knowledge (1), p. 62' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'أنهي عبارة بتوصف الكمية التناظرية؟', en: 'Which statement describes an analog quantity?' },
          options: [
            { ar: 'كمية بتتغير باستمرار وبشكل متصل، زي درجة الحرارة', en: 'A quantity that changes continuously and smoothly, like temperature' },
            { ar: 'قيمة محددة بالأرقام فقط', en: 'A definite value shown in numbers only' },
            { ar: 'بيانات مكوّنة من 0 و 1', en: 'Data made of 0s and 1s' },
          ],
          answer: 0,
          explanation: {
            ar: 'التناظري كمية بتتغير باستمرار وبشكل متصل، زي الوقت والكتلة وحرارة الجو. الرقمي هو اللي بيتمثل بقيمة محددة، والنظام الثنائي بيستخدم 0 و 1.',
            en: 'Analog is a quantity that changes continuously and smoothly, like time, mass and temperature. Digital is shown with a definite value, and the binary system uses 0 and 1.',
          },
          success: { ar: 'صح! تناظري = متصل ومستمر. +10 نقط', en: 'Correct! Analog = smooth and continuous. +10 pts' },
        },
      ],
      bito: [
        { ar: 'فكّر في ترمومتر الزئبق: العمود بيتحرك بنعومة.', en: 'Think of the mercury thermometer: the column moves smoothly.' },
        { ar: 'الكلمة المفتاحية: "باستمرار".', en: 'The key word: "continuously".' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2)، ص 62', en: 'Test Your Knowledge (2), p. 62' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه اسم عملية تحويل البيانات التناظرية إلى بيانات رقمية؟', en: 'What is the process of turning analog data into digital data called?' },
          options: [
            { ar: 'D/A', en: 'D/A' },
            { ar: 'A/D (الرقمنة)', en: 'A/D (digitization)' },
            { ar: 'النظام الثنائي', en: 'The binary system' },
          ],
          answer: 1,
          explanation: {
            ar: 'A/D هو التحويل من تناظري إلى رقمي وبيتسمى الرقمنة. D/A هو العكس. والنظام الثنائي طريقة تمثيل الأرقام بـ 0 و 1.',
            en: 'A/D converts analog to digital and is called digitization. D/A is the opposite. The binary system is a way of showing numbers with 0 and 1.',
          },
          success: { ar: 'صح! A/D = رقمنة. +10 نقط', en: 'Correct! A/D = digitization. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الحرف الأول هو نقطة البداية: A (تناظري).', en: 'The first letter is the start: A (analog).' },
        { ar: 'والتاني هو الوصول: D (رقمي).', en: 'The second is the arrival: D (digital).' },
      ],
    },
    {
      source: { ar: 'جرب بنفسك (2)، ص 63', en: 'Try It Yourself (2), p. 63' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: ممكن تحقق تكرار البيانات الرقمية بسهولة.', en: 'True or false: digital data can be copied easily.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. من مميزات البيانات الرقمية إننا ننسخها وننقلها ونعدّلها ونخزّنها بسهولة.',
            en: '✓. Digital data can be copied, moved, edited and stored easily.',
          },
          success: { ar: 'صح! النسخ سهل في الرقمي. +10 نقط', en: 'Correct! Copying is easy in digital. +10 pts' },
        },
      ],
      bito: [
        { ar: 'تخيّل تنسخ فيديو: ثواني.', en: 'Imagine copying a video: seconds.' },
        { ar: 'ده بالظبط ميزة الرقمي.', en: 'That is exactly the strength of digital.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 6-1!', en: 'You finished lesson 6-1!' } },
        {
          type: 'recap',
          items: [
            { code: 'A', text: { ar: 'تناظري', en: 'analog' } },
            { code: 'D', text: { ar: 'رقمي', en: 'digital' } },
            { code: 'A/D', text: { ar: 'رقمنة', en: 'digitization' } },
            { code: '0 · 1', text: { ar: 'النظام الثنائي', en: 'binary system' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة الفرز: تناظري ولا رقمي؟', en: 'Well done! The sorting game: analog or digital?' },
        { ar: 'وبعدها جولة A/D و D/A.', en: 'Then a round of A/D and D/A.' },
      ],
    },
  ],

  game: {
    kind: 'sort',
    rounds: [
      {
        title: { ar: 'تناظري ولا رقمي؟', en: 'Analog or digital?' },
        source: { ar: 'النقاط الرئيسية (أ-1، 2)، ص 62', en: 'Key Points (a-1, 2), p. 62' },
        bins: [
          { id: 'analog', label: { ar: 'تناظري', en: 'Analog' } },
          { id: 'digital', label: { ar: 'رقمي', en: 'Digital' } },
        ],
        items: [
          { text: { ar: 'ترمومتر زئبق', en: 'A mercury thermometer' }, bin: 'analog' },
          { text: { ar: 'ترمومتر بشاشة أرقام', en: 'A thermometer with a number display' }, bin: 'digital' },
          { text: { ar: 'الوقت اللي بيعدّي', en: 'Time as it passes' }, bin: 'analog' },
          { text: { ar: 'درجة حرارة الجو', en: 'Air temperature' }, bin: 'analog' },
          { text: { ar: 'قيمة محددة بالأرقام', en: 'A definite value in numbers' }, bin: 'digital' },
          { text: { ar: 'بيانات مكتوبة بـ 0 و 1', en: 'Data written in 0s and 1s' }, bin: 'digital' },
        ],
      },
      {
        title: { ar: 'A/D ولا D/A؟', en: 'A/D or D/A?' },
        source: { ar: 'النقاط الرئيسية (أ-3، 4)، ص 62', en: 'Key Points (a-3, 4), p. 62' },
        bins: [
          { id: 'ad', label: { ar: 'A/D (تناظري ← رقمي)', en: 'A/D (analog → digital)' } },
          { id: 'da', label: { ar: 'D/A (رقمي ← تناظري)', en: 'D/A (digital → analog)' } },
        ],
        items: [
          { text: { ar: 'الميكروفون بيسجّل صوتك كملف', en: 'A microphone records your voice as a file' }, bin: 'ad' },
          { text: { ar: 'الكاميرا بتحفظ الصورة كأرقام', en: 'A camera saves the picture as numbers' }, bin: 'ad' },
          { text: { ar: 'السماعة بتشغّل ملف أغنية', en: 'A speaker plays a song file' }, bin: 'da' },
          { text: { ar: 'تحويل بيانات رقمية لبيانات تناظرية', en: 'Turning digital data into analog data' }, bin: 'da' },
          { text: { ar: 'الرقمنة', en: 'Digitization' }, bin: 'ad' },
        ],
      },
    ],
  },
};
