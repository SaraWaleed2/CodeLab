import { Lesson } from '@core/models';

/**
 * Lesson 8-5 "سرعة نقل البيانات على الشبكات" — ministry book pp. 122–123.
 * Book notes:
 * - p.122: speed in bps (1 Kbps = 1,000 bps; 1 Mbps = 1,000 Kbps); transfer time = data size (bits) ÷ transfer speed (bps);
 *   actual speed = line speed × efficiency. Solution: 20 MB at 40 Mbps = 4 s; 1 GB at 100 Mbps and 80% efficiency = 100 s.
 * - The exercises on p.123 have no answer key; the site computes them with the same formula.
 */
export const LESSON_8_5: Lesson = {
  unitId: 8,
  id: '8-5',
  title: { ar: 'سرعة نقل البيانات على الشبكات', en: 'Data Transfer Speed on Networks' },
  bookPages: '122 – 123',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! ليه ملف بيتحمّل في ثواني وملف تاني في دقايق؟ هنحسبها.', en: 'Hi! Why does one file download in seconds and another in minutes? We will work it out.' },
        { ar: 'في الآخر لعبة توصيل، وتحدي كود بتحسب فيه وقت التحميل.', en: 'At the end there is a matching game, and a code challenge where you work out the download time.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (1)، ص 122', en: 'Key Points (1), p. 122' },
      blocks: [
        { type: 'heading', text: { ar: 'سرعة النقل', en: 'Transfer speed' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'سرعة النقل', en: 'Transfer speed' }, text: { ar: 'عدد البتات اللي ممكن نقلها في الثانية. وحدتها bps.', en: 'The number of bits that can be sent in a second. Its unit is bps.' }, example: { ar: 'زي سرعة العربية: كم كيلو في الساعة', en: 'Like a car’s speed: kilometres per hour' } },
            { title: { ar: 'Kbps', en: 'Kbps' }, text: { ar: '1 كيلوبت في الثانية = 1,000 bps.', en: '1 kilobit per second = 1,000 bps.' } },
            { title: { ar: 'Mbps', en: 'Mbps' }, text: { ar: '1 ميجابت في الثانية = 1,000 Kbps.', en: '1 megabit per second = 1,000 Kbps.' }, example: { ar: 'باقة النت: 40 Mbps', en: 'An internet plan: 40 Mbps' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: bps = بت في الثانية', en: 'Remember: bps = bits per second' } },
      ],
      bito: [
        { ar: 'انتبه: بت (صغير b)، مش بايت (كبير B). البايت = 8 بت.', en: 'Careful: a bit (small b), not a byte (capital B). A byte = 8 bits.' },
        { ar: 'وسرعة الإنترنت دايمًا بالبت.', en: 'And internet speed is always in bits.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2)، ص 122', en: 'Key Points (2), p. 122' },
      blocks: [
        { type: 'heading', text: { ar: 'كام ثانية التحميل؟', en: 'How many seconds will it take?' } },
        {
          type: 'lead',
          text: { ar: 'وقت النقل = حجم البيانات (بت) ÷ سرعة النقل (bps). ومعاه كفاءة النقل: السرعة الفعلية = سرعة الخط × الكفاءة.', en: 'Transfer time = data size (bits) ÷ transfer speed (bps). With the transfer efficiency: actual speed = line speed × efficiency.' },
        },
        { type: 'speed-lab' },
        { type: 'memo', text: { ar: 'افتكر: الوقت = الحجم × 8 ÷ السرعة', en: 'Remember: time = size × 8 ÷ speed' } },
      ],
      bito: [
        { ar: 'مثال الكتاب: 20 ميجابايت بسرعة 40 Mbps. 20 × 8 = 160 ميجابت، ÷ 40 = 4 ثواني.', en: 'The book’s example: 20 MB at 40 Mbps. 20 × 8 = 160 megabits, ÷ 40 = 4 seconds.' },
        { ar: 'والمثال التاني: 1 جيجا بـ 100 Mbps وكفاءة 80% = 100 ثانية.', en: 'And the other example: 1 GB at 100 Mbps and 80% efficiency = 100 seconds.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (3)، ص 122', en: 'Key Points (3), p. 122' },
      blocks: [
        { type: 'heading', text: { ar: 'كفاءة النقل', en: 'Transfer efficiency' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'كفاءة النقل', en: 'Transfer efficiency' }, en: 'Transfer efficiency', text: { ar: 'النسبة اللي نقدر نحقق بيها سرعة اتصال معينة. السرعة الفعلية = سرعة الاتصال × الكفاءة.', en: 'The percentage of a given line speed we actually achieve. Actual speed = line speed × efficiency.' }, example: { ar: 'نت 100 Mbps وكفاءة 80% = سرعة فعلية 80 Mbps', en: 'A 100 Mbps line at 80% = an actual 80 Mbps' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: الفعلية = الخط × الكفاءة', en: 'Remember: actual = line × efficiency' } },
      ],
      bito: [
        { ar: 'باقتك 100 Mbps، لكن الزحمة والبروتوكولات بتاكل جزء.', en: 'Your plan is 100 Mbps, but congestion and protocols eat some.' },
        { ar: 'عشان كده بتحمّل أبطأ من الرقم المكتوب.', en: 'That is why you download slower than the printed number.' },
      ],
    },
    {
      source: { ar: 'الحل (2)، ص 122', en: 'Solution (2), p. 122' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'كام ثانية تاخد لنقل ملف 20 ميجابايت بسرعة 40 Mbps وكفاءة 100%؟', en: 'How many seconds does it take to send a 20 MB file at 40 Mbps and 100% efficiency?' },
          options: ['2 ثانية', '4 ثواني', '8 ثواني', '16 ثانية'],
          answer: 1,
          explanation: {
            ar: '20 ميجابايت × 8 = 160 ميجابت. 160 ÷ 40 = 4 ثواني.',
            en: '20 MB × 8 = 160 megabits. 160 ÷ 40 = 4 seconds.',
          },
          success: { ar: 'صح! 160 ÷ 40 = 4. +10 نقط', en: 'Correct! 160 ÷ 40 = 4. +10 pts' },
        },
      ],
      bito: [
        { ar: 'اضرب في 8 الأول عشان تحوّل بايت لبت.', en: 'Multiply by 8 first to turn bytes into bits.' },
        { ar: 'جرّب الأرقام في الحاسبة اللي فاتت.', en: 'Try the numbers in the calculator from earlier.' },
      ],
    },
    {
      source: { ar: 'الحل (3)، ص 122–123', en: 'Solution (3), pp. 122–123' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'كام ثانية لنقل 1 جيجابايت (1,000 ميجابايت) بسرعة 100 Mbps وكفاءة 80%؟', en: 'How many seconds to send 1 GB (1,000 MB) at 100 Mbps and 80% efficiency?' },
          options: ['80 ثانية', '100 ثانية', '125 ثانية', '800 ثانية'],
          answer: 1,
          explanation: {
            ar: 'السرعة الفعلية = 100 × 0.8 = 80 Mbps. الحجم = 1,000 × 8 = 8,000 ميجابت. 8,000 ÷ 80 = 100 ثانية.',
            en: 'Actual speed = 100 × 0.8 = 80 Mbps. Size = 1,000 × 8 = 8,000 megabits. 8,000 ÷ 80 = 100 seconds.',
          },
          success: { ar: 'صح! 8,000 ÷ 80 = 100. +10 نقط', en: 'Correct! 8,000 ÷ 80 = 100. +10 pts' },
        },
      ],
      bito: [
        { ar: 'احسب السرعة الفعلية الأول.', en: 'Work out the actual speed first.' },
        { ar: 'وبعدين اقسم الحجم عليها.', en: 'Then divide the size by it.' },
      ],
    },
    {
      source: { ar: 'جرب بنفسك (1)، ص 123', en: 'Try It Yourself (1), p. 123' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'كام ثانية لنقل 20 ميجابايت بسرعة 80 Mbps وكفاءة 100%؟', en: 'How many seconds to send 20 MB at 80 Mbps and 100% efficiency?' },
          options: ['1 ثانية', '2 ثانية', '4 ثواني', '8 ثواني'],
          answer: 1,
          explanation: {
            ar: '20 × 8 = 160 ميجابت. 160 ÷ 80 = 2 ثانية. السرعة ضعف المثال السابق، فالوقت نصفه.',
            en: '20 × 8 = 160 megabits. 160 ÷ 80 = 2 seconds. The speed is double the earlier example, so the time is half.',
          },
          success: { ar: 'صح! سرعة أعلى = وقت أقل. +10 نقط', en: 'Correct! Faster = less time. +10 pts' },
        },
      ],
      bito: [
        { ar: 'نفس الملف بسرعة أعلى بيخلّص أسرع.', en: 'The same file on a faster line finishes sooner.' },
        { ar: 'الوقت بيقل لو السرعة زادت.', en: 'Time goes down when speed goes up.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 8-5 والوحدة 8!', en: 'You finished lesson 8-5 and Unit 8!' } },
        {
          type: 'recap',
          items: [
            { code: 'bps', text: { ar: 'بت في الثانية', en: 'bits per second' } },
            { code: '× 8', text: { ar: 'بايت ← بت', en: 'bytes → bits' } },
            { code: '÷ speed', text: { ar: 'يطلع الوقت', en: 'gives the time' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة التوصيل أولًا، وتحدي الكود بعدها.', en: 'Well done! The matching game first, then the code challenge.' },
        { ar: 'في التحدي هتكتب سطر الوقت بنفسك.', en: 'In the challenge you write the time line yourself.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'الوحدة ومعناها', en: 'The unit and its meaning' },
        source: { ar: 'النقاط الرئيسية (1)، ص 122', en: 'Key Points (1), p. 122' },
        pairs: [
          { left: { text: { ar: 'bps', en: 'bps' } }, right: { ar: 'بت في الثانية', en: 'Bits per second' } },
          { left: { text: { ar: 'Kbps', en: 'Kbps' } }, right: { ar: '1,000 bps', en: '1,000 bps' } },
          { left: { text: { ar: 'Mbps', en: 'Mbps' } }, right: { ar: '1,000 Kbps', en: '1,000 Kbps' } },
          { left: { text: { ar: 'كفاءة النقل', en: 'Transfer efficiency' } }, right: { ar: 'نسبة السرعة اللي نحققها فعلًا', en: 'The share of the speed we actually get' } },
        ],
      },
      {
        title: { ar: 'العملية وناتجها', en: 'The sum and its result' },
        source: { ar: 'الحل، ص 122', en: 'The solution, p. 122' },
        pairs: [
          { left: { text: { ar: '20 ميجابايت بـ 40 Mbps', en: '20 MB at 40 Mbps' } }, right: { ar: '4 ثواني', en: '4 seconds' } },
          { left: { text: { ar: '20 ميجابايت بـ 80 Mbps', en: '20 MB at 80 Mbps' } }, right: { ar: '2 ثانية', en: '2 seconds' } },
          { left: { text: { ar: '1 جيجا بـ 100 Mbps وكفاءة 80%', en: '1 GB at 100 Mbps and 80% efficiency' } }, right: { ar: '100 ثانية', en: '100 seconds' } },
          { left: { text: { ar: '100 Mbps بكفاءة 80%', en: '100 Mbps at 80% efficiency' } }, right: { ar: 'سرعة فعلية 80 Mbps', en: 'An actual speed of 80 Mbps' } },
        ],
      },
    ],
  },

  challenge: {
    title: { ar: 'كام ثانية التحميل؟', en: 'How many seconds will it take?' },
    intro: {
      ar: 'الدالة transferSeconds بتحسب وقت نقل ملف (بالميجابايت) بسرعة 40 Mbps وكفاءة 100%. ناقصها سطر واحد: سطر الإرجاع.',
      en: 'The function transferSeconds works out the time to send a file (in megabytes) at 40 Mbps and 100% efficiency. It is missing one line: the return.',
    },
    source: { ar: 'الفكرة من: الحل ص 122', en: 'Idea from: the solution p. 122' },
    functionName: 'transferSeconds',
    starter: {
      ar: 'function transferSeconds(sizeMB) {\n  const speed = 40;       // ميجابت في الثانية (Mbps)\n  const efficiency = 1;   // 100%\n  // ← اكتب هنا سطر الإرجاع: (الحجم × 8) ÷ (السرعة × الكفاءة)\n\n}\n',
      en: 'function transferSeconds(sizeMB) {\n  const speed = 40;       // megabits per second (Mbps)\n  const efficiency = 1;   // 100%\n  // ← write the return line here: (size × 8) ÷ (speed × efficiency)\n\n}\n',
    },
    tests: [
      { input: 20, expected: 4 },
      { input: 40, expected: 8 },
      { input: 100, expected: 20 },
      { input: 400, expected: 80 },
    ],
    banned: { pattern: '/\\s*5\\b|\\*\\s*0\\.2', label: 'القسمة على 5' },
    hints: [
      {
        ar: 'الحجم بالميجابايت، والسرعة بالميجابت. لازم نحوّل البايت لبت: اضرب في 8.',
        en: 'The size is in megabytes and the speed in megabits. We must turn bytes into bits: multiply by 8.',
      },
      {
        ar: 'بعدين اقسم على السرعة الفعلية (السرعة × الكفاءة). كله في سطر return واحد.',
        en: 'Then divide by the actual speed (speed × efficiency). All in one return line.',
      },
      { ar: 'return (sizeMB * 8) / (speed * efficiency);', en: 'return (sizeMB * 8) / (speed * efficiency);' },
    ],
  },
};
