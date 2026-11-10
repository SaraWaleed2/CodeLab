import { Lesson } from '@core/models';

/**
 * Lesson 6-2 "النظام الثنائي وكمية البيانات" — ministry book pp. 64–65,
 * with exercise numbers from pp. 65–67.
 * Book errors not used here: p.66 writes (11010)₂ = 50 (correct: 26); p.67 writes "1 MG" (should be MB).
 */
export const LESSON_6_2: Lesson = {
  unitId: 6,
  id: '6-2',
  title: { ar: 'النظام الثنائي وكمية البيانات', en: 'The Binary System and Data Amount' },
  bookPages: '64 – 65',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        {
          ar: 'أهلًا! أنا بيتو وهمشي معاك الدرس ده صفحة صفحة. دوس "الصفحة الجاية" ويلا بينا.',
          en: "Hi! I'm Beto and I'll go through this lesson with you page by page. Tap \"Next page\" and let's go.",
        },
        {
          ar: 'الكتاب ده بيتقلب زي أي كتاب عربي. وممكن تقلّب بالركن المطوي تحت.',
          en: 'You can also turn the page with the folded corner at the bottom.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 64', en: 'Key Points, p. 64' },
      blocks: [
        { type: 'heading', text: { ar: 'الـ bit: أصغر وحدة للمعلومات', en: 'The bit: the smallest unit of information' } },
        { type: 'lead', text: { ar: 'ليه حالتين بس: 0 أو 1. زي اللمبة بالظبط.', en: 'It has only two states: 0 or 1. Just like a light bulb.' } },
        { type: 'bit-bulbs' },
        {
          type: 'chips',
          items: [
            { ar: 'المفتاح: مفتوح / مغلق', en: 'Switch: open / closed' },
            { ar: 'الجهد: مرتفع / منخفض', en: 'Voltage: high / low' },
            { ar: 'المغناطيس: شمال / جنوب', en: 'Magnet: north / south' },
          ],
        },
      ],
      bito: [
        {
          ar: 'فكّر في نور أوضتك: يا مولّع يا مطفي، مفيش نص نص. مولّع = 1، مطفي = 0. ده بالظبط الـ bit.',
          en: 'Think of your room light: on or off, nothing in between. On = 1, off = 0. That is a bit.',
        },
        {
          ar: 'جرّب تدوس على اللمبتين. أي حاجة ليها حالتين بس، زي باب مفتوح أو مقفول، ينفع نمثّلها بـ bit واحد.',
          en: 'Tap the two bulbs. Anything with only two states, like a door open or closed, can be one bit.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 64', en: 'Key Points, p. 64' },
      blocks: [
        { type: 'heading', text: { ar: 'كل bit زيادة بيضاعف الاحتمالات', en: 'Every extra bit doubles the possibilities' } },
        { type: 'bit-combos', maxBits: 3 },
        { type: 'memo', text: { ar: 'افتكر:', en: 'Remember:' }, code: 'n bit = 2ⁿ' },
      ],
      bito: [
        { ar: 'شوف: كل ما تزوّد لمبة، العدد بيتضاعف. 2، بعدين 4، بعدين 8.', en: 'Look: every extra bulb doubles the count. 2, then 4, then 8.' },
        {
          ar: 'زي قميص وبنطلون: لو عندك 2 من كل واحد، تعمل 2 × 2 = 4 لبسات. كل bit جديد يضرب في 2.',
          en: 'Like shirts and trousers: 2 of each make 2 × 2 = 4 outfits. Every new bit multiplies by 2.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 64', en: 'Key Points, p. 64' },
      blocks: [
        { type: 'heading', code: '8 bit = 1 Byte' },
        { type: 'byte-box' },
        { type: 'unit-stairs', units: ['B', 'KB', 'MB', 'GB', 'TB'], factor: 1024 },
        { type: 'memo', text: { ar: 'افتكر: كل سلمة ×1024', en: 'Remember: every step is ×1024' } },
      ],
      bito: [
        { ar: 'البايت علبة فيها 8 لمبات. وكل ما تطلع سلمة في السلّم، بتضرب في 1024.', en: 'A Byte is a box of 8 bulbs. Each step up the ladder multiplies by 1024.' },
        { ar: 'خد بالك: مش 1000، الكتاب بيقول 1024. ده رقم مهم هتقابله كتير.', en: 'Careful: not 1000. The book says 1024, a number you will see a lot.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 64', en: 'Key Points, p. 64' },
      blocks: [
        { type: 'heading', text: { ar: 'عشري ولا ثنائي؟', en: 'Decimal or binary?' } },
        // 345 and 101 are notation examples requested by the teacher; they are not from the book.
        { type: 'number-systems', decimalExample: '345', binaryExample: '101' },
        { type: 'memo', text: { ar: 'افتكر: الرقم الصغير تحت بيقولك النظام', en: 'Remember: the small number below tells you the system' } },
        { type: 'tag', text: { ar: 'الرقمين دول مثال للكتابة، مش من الكتاب', en: 'These two numbers are notation examples, not from the book' } },
      ],
      bito: [
        { ar: 'إحنا بنعد بالعشري عشان عندنا 10 صوابع. الكمبيوتر عنده "صباعين" بس: 0 و1.', en: 'We count in decimal because we have 10 fingers. A computer has only two "fingers": 0 and 1.' },
        { ar: 'بص على الرقم الصغير تحت: لو 10 يبقى عشري، لو 2 يبقى ثنائي.', en: 'Look at the small number below: 10 means decimal, 2 means binary.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 64', en: 'Key Points, p. 64' },
      blocks: [
        { type: 'heading', text: { ar: 'من ثنائي لعشري:', en: 'Binary to decimal:' }, code: '(10111)₂' },
        { type: 'lead', text: { ar: 'كل خانة ليها وزن. خد أوزان الـ 1 بس واجمعها.', en: 'Each place has a weight. Add up the weights under the 1s.' } },
        { type: 'place-values', binary: '10111' },
        { type: 'memo', text: { ar: 'افتكر الأوزان: 1، 2، 4، 8، 16… كل واحد ضعف اللي قبله', en: 'Remember the weights: 1, 2, 4, 8, 16… each is double the last' } },
      ],
      bito: [
        {
          ar: 'كل خانة ليها وزن: 16، 8، 4، 2، 1. اللي عليها 1 تاخد وزنها، واللي عليها 0 تسيبها. 16 + 4 + 2 + 1 = 23.',
          en: 'Each place has a weight: 16, 8, 4, 2, 1. A 1 takes its weight, a 0 skips it. 16 + 4 + 2 + 1 = 23.',
        },
        { ar: 'تخيلها فلوس: ورقة 16 وورقة 4 وورقة 2 وجنيه. معاك كام؟ 23!', en: 'Imagine money: a 16 note, a 4, a 2 and a 1. How much do you have? 23!' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 65', en: 'Key Points, p. 65' },
      blocks: [
        { type: 'heading', text: { ar: 'من عشري لثنائي:', en: 'Decimal to binary:' }, code: '6' },
        { type: 'lead', text: { ar: 'اقسم على 2، وخد الباقي، واقرا البواقي من تحت لفوق.', en: 'Divide by 2, keep the remainder, read the remainders bottom to top.' } },
        { type: 'division-ladder', n: 6 },
      ],
      bito: [
        { ar: 'اقسم 6 على 2 لحد ما توصل صفر. البواقي 0 و1 و1. اقراها من تحت لفوق: 110.', en: 'Divide 6 by 2 until you reach 0. The remainders are 0, 1, 1. Read them bottom to top: 110.' },
        {
          ar: 'تخيّل إنك بتقسم بلي على اتنين كل مرة. اللي يفضل (0 أو 1) هو الرقم، ومن تحت لفوق.',
          en: 'Imagine sharing marbles between two each time. What is left over (0 or 1) is the number, bottom to top.',
        },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1) [2]، ص 65', en: 'Test Your Knowledge (1) [2], p. 65' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'كام bit محتاجين عشان نمثّل كل نتايج رمي نردين؟', en: 'How many bits do we need to represent every result of rolling two dice?' },
          options: ['5 bit', '6 bit', '8 bit', '36 bit'],
          answer: 1,
          explanation: {
            ar: 'نردين = 6 × 6 = 36 نتيجة. 5 bit بتمثّل 32 بس، و6 bit بتمثّل 64. يبقى 6 bit.',
            en: 'Two dice = 6 × 6 = 36 results. 5 bits give only 32, 6 bits give 64. So 6 bits.',
          },
          success: { ar: 'صح! 2⁶ = 64 تكفي الـ 36 نتيجة. +10 نقط', en: 'Correct! 2⁶ = 64 covers all 36 results. +10 pts' },
        },
      ],
      bito: [
        { ar: 'النرد ليه 6 أوجه، يعني نردين = 36 نتيجة. دوّر على أصغر 2ⁿ أكبر من 36.', en: 'A die has 6 faces, so two dice = 36 results. Find the smallest 2ⁿ bigger than 36.' },
        { ar: 'جرّب: 2⁵ = 32، أقل من 36. يبقى محتاج الأس اللي بعده.', en: 'Try it: 2⁵ = 32, less than 36. So you need the next power.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1) [3]، ص 65', en: 'Test Your Knowledge (1) [3], p. 65' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'كام Byte في 1 MB؟ (جاوب كأس للعدد 2)', en: 'How many Bytes are in 1 MB? (Answer as a power of 2)' },
          options: ['2¹⁰', '2²⁰', '2³⁰', '2⁸'],
          answer: 1,
          explanation: {
            ar: '1 MB = 1024 KB، و1 KB = 1024 Byte. يبقى 1024 × 1024 = 2¹⁰ × 2¹⁰ = 2²⁰.',
            en: '1 MB = 1024 KB, and 1 KB = 1024 Bytes. So 1024 × 1024 = 2¹⁰ × 2¹⁰ = 2²⁰.',
          },
          success: { ar: 'صح! 2¹⁰ × 2¹⁰ = 2²⁰ Byte. +10 نقط', en: 'Correct! 2¹⁰ × 2¹⁰ = 2²⁰ Bytes. +10 pts' },
        },
      ],
      bito: [
        { ar: 'افتكر السلّم: من Byte لـ KB سلمة، ومن KB لـ MB سلمة تانية. يعني ×1024 مرتين.', en: 'Remember the ladder: Byte to KB is one step, KB to MB is another. So ×1024 twice.' },
        { ar: '1024 = 2¹⁰. ولما تضرب 2¹⁰ في 2¹⁰ بتجمع الأسس.', en: '1024 = 2¹⁰. Multiplying 2¹⁰ by 2¹⁰ adds the powers.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 6-2!', en: 'You finished lesson 6-2!' } },
        {
          type: 'recap',
          items: [
            { code: '0 / 1', text: { ar: 'حالتين', en: 'two states' } },
            { code: '2ⁿ', text: { ar: 'احتمال', en: 'possibilities' } },
            { code: '8 bit = 1 B' },
            { code: '×1024', text: { ar: 'سلّم الوحدات', en: 'unit ladder' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        {
          ar: 'شاطر! دلوقتي نلعب بأرقام من تمارين الكتاب: 39 و120 و65 و106 و143 و13.',
          en: 'Well done! Now we play with numbers from the book’s exercises: 39, 120, 65, 106, 143 and 13.',
        },
        {
          ar: 'في اللعبة هتولّع اللمبات اللي مجموعها يساوي الرقم. وأنا هساعدك لو احتجت.',
          en: 'In the game you switch on bulbs that add up to the number. I’ll help if you need it.',
        },
      ],
    },
  ],

  game: {
    kind: 'bulbs',
    targets: [
      { n: 39, source: { ar: 'تحدى معلوماتك (2) [2] أ، ص 65', en: 'Test Your Knowledge (2) [2] a, p. 65' } },
      { n: 120, source: { ar: 'تحدى معلوماتك (2) [2] ب، ص 65', en: 'Test Your Knowledge (2) [2] b, p. 65' } },
      { n: 65, source: { ar: 'جرب بنفسك 2 (2) [1]، ص 66', en: 'Try It Yourself 2 (2) [1], p. 66' } },
      { n: 106, source: { ar: 'جرب بنفسك 2 (2) [2]، ص 66', en: 'Try It Yourself 2 (2) [2], p. 66' } },
      { n: 143, source: { ar: 'جرب بنفسك 2 (2) [3]، ص 66', en: 'Try It Yourself 2 (2) [3], p. 66' } },
      { n: 13, source: { ar: 'تمرين 2 (2) [1]، ص 67', en: 'Exercise 2 (2) [1], p. 67' } },
    ],
  },

  challenge: {
    title: { ar: 'من عشري لثنائي', en: 'Decimal to binary' },
    intro: {
      ar: 'الدالة toBinary بتحوّل رقم عشري لنص ثنائي بنفس طريقة الكتاب: قسمة على 2 والبواقي. ناقصها سطر واحد بس.',
      en: "toBinary turns a decimal number into a binary string the book's way: divide by 2 and keep the remainders. It's missing just one line.",
    },
    source: { ar: 'الطريقة من: النقاط الرئيسية، ص 65 (التحويل من العشري للثنائي)', en: 'Method from: Key Points, p. 65 (decimal to binary)' },
    functionName: 'toBinary',
    starter: {
      ar: 'function toBinary(n) {\n  if (n === 0) return "0";\n  let result = "";\n  while (n > 0) {\n    // ← اكتب هنا السطر الناقص: حط باقي قسمة n على 2 في أول result\n\n    n = Math.floor(n / 2);\n  }\n  return result;\n}\n',
      en: 'function toBinary(n) {\n  if (n === 0) return "0";\n  let result = "";\n  while (n > 0) {\n    // ← write the missing line here: put the remainder of n ÷ 2 at the start of result\n\n    n = Math.floor(n / 2);\n  }\n  return result;\n}\n',
    },
    tests: [
      { input: 45, expected: '101101' },
      { input: 0, expected: '0' },
      { input: 255, expected: '11111111' },
      { input: 6, expected: '110' },
    ],
    banned: { pattern: 'toString\\s*\\(\\s*2\\s*\\)', label: 'toString(2)' },
    reversedNote: { ar: 'البواقي لازم تتحط في الأول.', en: 'Remainders go at the start.' },
    hints: [
      { ar: 'البواقي هي الأرقام الثنائية نفسها. باقي القسمة على 2 بيتجاب بـ n % 2.', en: 'The remainders are the binary digits. You get the remainder of dividing by 2 with n % 2.' },
      {
        ar: 'افتكر الكتاب: البواقي بتتقري من تحت لفوق. يعني كل باقي جديد يتحط في أول result مش في آخرها.',
        en: 'Remember the book: remainders are read bottom to top. So each new remainder goes at the start of result, not the end.',
      },
      { ar: 'result = (n % 2) + result;', en: 'result = (n % 2) + result;' },
    ],
  },
};
