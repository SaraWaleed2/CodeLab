import { Lesson } from '@core/models';

/**
 * Lesson 6-9 "التمثيل الرقمي وضغط الفيديو" — ministry book pp. 87–91.
 * Book notes:
 * - p.88 solution: a frame of 500 × 200 pixels at 24 bit = 2,400,000 bit = 300,000 B; 10 s at 30 fps = 90,000,000 B = 90 MB;
 *   compressed to 30 MB gives a ratio of 30 / 90 × 100 ≈ 33%.
 * - p.88 run-length example: 25 letters → A5B2A4B8A6 (10 letters) = 40%.
 * - The exercises on pp.89–91 are only partly keyed; the Key Points and the p.88 solution are used.
 */
export const LESSON_6_9: Lesson = {
  unitId: 6,
  id: '6-9',
  title: { ar: 'التمثيل الرقمي وضغط الفيديو', en: 'Digital Video and Compression' },
  bookPages: '87 – 91',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! الفيديو ملايين الأرقام. إزاي بنصغّره عشان يتبعت بسرعة؟ بالضغط!', en: 'Hi! Video is millions of numbers. How do we shrink it so it sends fast? With compression!' },
        { ar: 'في الآخر لعبة فرز، وتحدي كود بتحسب فيه حجم فيديو.', en: 'At the end there is a sorting game, and a code challenge where you work out a video’s size.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (1)، ص 87', en: 'Key Points (1), p. 87' },
      blocks: [
        { type: 'heading', text: { ar: 'الفيديو', en: 'Video' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الفيديو', en: 'Video' }, en: 'Video', text: { ar: 'وسط إلكتروني بيخلق وهم الحركة بعرض سلسلة صور ثابتة بسرعة.', en: 'An electronic medium that creates an illusion of motion by showing a series of still pictures fast.' }, example: { ar: 'زي دفتر بتقلّب صفحاته بسرعة', en: 'Like a flip-book you flick through quickly' } },
            { title: { ar: 'الإطار', en: 'Frame' }, en: 'Frame', text: { ar: 'صورة واحدة من سلسلة الصور المتتابعة.', en: 'One picture out of the series.' }, example: { ar: 'صفحة واحدة في الدفتر', en: 'One page in the flip-book' } },
            { title: { ar: 'معدل الإطارات', en: 'Frame rate' }, en: 'Frame rate (fps)', text: { ar: 'عدد الإطارات المعروضة في الثانية. وحدته fps.', en: 'The number of frames shown per second. Its unit is fps.' }, example: { ar: '30 fps = 30 صورة كل ثانية', en: '30 fps = 30 pictures every second' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: فيديو = صور سريعة، وfps = صور في الثانية', en: 'Remember: video = fast pictures, and fps = pictures per second' } },
      ],
      bito: [
        { ar: 'كل ما معدل الإطارات يزيد، الحركة أنعم والحجم أكبر.', en: 'The higher the frame rate, the smoother the motion and the bigger the size.' },
        { ar: 'عينك مبتشوفش الفاصل بين الصور فبتحس إنها حركة.', en: 'Your eye does not notice the gap between pictures, so it feels like motion.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (1-4)، ص 87', en: 'Key Points (1-4), p. 87' },
      blocks: [
        { type: 'heading', text: { ar: 'كم حجم الفيديو؟', en: 'How big is the video?' } },
        {
          type: 'lead',
          text: { ar: 'حجم الفيديو = حجم بيانات الإطار الواحد × معدل الإطارات (fps) × الوقت بالثواني.', en: 'Video size = data size of one frame × frame rate (fps) × time in seconds.' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'إطار واحد', en: 'One frame' }, text: { ar: '500 × 200 بكسل × 24 بت = 2,400,000 بت = 300,000 بايت.', en: '500 × 200 pixels × 24 bits = 2,400,000 bits = 300,000 bytes.' }, example: { ar: 'مثال الكتاب', en: 'The book’s example' } },
            { title: { ar: '10 ثواني بـ 30 fps', en: '10 seconds at 30 fps' }, text: { ar: '300,000 × 30 × 10 = 90,000,000 بايت = 90 ميجابايت.', en: '300,000 × 30 × 10 = 90,000,000 bytes = 90 MB.' }, example: { ar: 'فيديو قصير = ملف ضخم!', en: 'A short video = a huge file!' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: إطار × fps × ثواني', en: 'Remember: frame × fps × seconds' } },
      ],
      bito: [
        { ar: '10 ثواني بس بتطلع 90 ميجابايت! ده ليه محتاجين الضغط.', en: 'Just 10 seconds comes to 90 MB! That is why we need compression.' },
        { ar: 'في التحدي هتكتب القانون ده بالكود.', en: 'In the challenge you write this rule in code.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2)، ص 87', en: 'Key Points (2), p. 87' },
      blocks: [
        { type: 'heading', text: { ar: 'ضغط البيانات', en: 'Data compression' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الضغط', en: 'Compression' }, en: 'Compression', text: { ar: 'تقليل حجم البيانات مع الحفاظ على المحتوى قدر الإمكان.', en: 'Reducing the data size while keeping the content as far as possible.' }, example: { ar: 'زي ما تكبس ملابسك في الشنطة', en: 'Like squeezing your clothes into a bag' } },
            { title: { ar: 'فك الضغط', en: 'Decompression' }, en: 'Decompression', text: { ar: 'استعادة البيانات المضغوطة لحالتها الأصلية.', en: 'Restoring the compressed data to its original state.' }, example: { ar: 'تفتح الشنطة وتطلّع الهدوم', en: 'Opening the bag and taking the clothes out' } },
            { title: { ar: 'نسبة الضغط', en: 'Compression ratio' }, en: 'Compression ratio', text: { ar: 'نسبة الضغط % = حجم البيانات بعد الضغط ÷ حجم البيانات الأصلي × 100.', en: 'Ratio % = size after compression ÷ original size × 100.' }, example: { ar: '90 ميجا ← 30 ميجا = 33%', en: '90 MB → 30 MB = 33%' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: نسبة أقل = ضغط أقوى', en: 'Remember: a lower ratio = stronger compression' } },
      ],
      bito: [
        { ar: 'مثال الكتاب: فيديو 90 ميجا اتضغط لـ 30 ميجا، يعني بقى 33% من حجمه.', en: 'The book’s example: a 90 MB video compressed to 30 MB is now 33% of its size.' },
        { ar: 'كل ما النسبة تقل، الفايل أصغر.', en: 'The lower the ratio, the smaller the file.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2-4)، ص 87', en: 'Key Points (2-4), p. 87' },
      blocks: [
        { type: 'heading', text: { ar: 'ضغط بفقد وضغط من غير فقد', en: 'Lossy and lossless compression' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الضغط من غير فقد', en: 'Lossless compression' }, en: 'Lossless compression', text: { ar: 'بنقدر نرجّع البيانات الأصلية كاملة بعد فك الضغط. بنستخدمه للنص والبرامج.', en: 'We can restore the complete original data after decompression. Used for text and programs.' }, example: { ar: 'ملف Word أو برنامج', en: 'A Word file or a program' } },
            { title: { ar: 'الضغط مع فقد', en: 'Lossy compression' }, en: 'Lossy compression', text: { ar: 'بنفقد جزء من البيانات ومينفعش نرجّعه، لكن الفرق صغير لدرجة العين مبتحسّش بيه. بنستخدمه للصوت والصور والفيديو.', en: 'Some data is lost and cannot be restored, but the difference is so small the eye does not notice. Used for sound, images and video.' }, example: { ar: 'صورة JPG، أغنية MP3، فيديو', en: 'A JPG picture, an MP3 song, a video' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: نص وبرامج = من غير فقد · صوت وصورة وفيديو = مع فقد', en: 'Remember: text and programs = lossless · sound, images, video = lossy' } },
      ],
      bito: [
        { ar: 'برنامج لو ضاع منه حرف واحد مش هيشتغل، فلازم من غير فقد.', en: 'A program with one missing character will not run, so it must be lossless.' },
        { ar: 'لكن صورة ناقصة شوية تفاصيل مش هتفرق معاك.', en: 'But a picture missing a few details will not matter to you.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (3)، ص 87–88', en: 'Key Points (3), pp. 87–88' },
      blocks: [
        { type: 'heading', text: { ar: 'ترميز طول التشغيل', en: 'Run-length encoding' }, code: '(RLE)' },
        {
          type: 'lead',
          text: { ar: 'بدل ما نكتب الحرف المتكرر مرات كتير، نكتب الحرف وعدد تكراره. مثال الكتاب: 25 حرف بتتحول لـ A5B2A4B8A6 (10 حروف = 40%).', en: 'Instead of writing a repeated letter many times, we write the letter and how many times it repeats. The book’s example: 25 letters become A5B2A4B8A6 (10 letters = 40%).' },
        },
        { type: 'rle-lab', text: 'AAAAABBAAAABBBBBBBBAAAAAA' },
        { type: 'memo', text: { ar: 'افتكر: حرف + عدد التكرار', en: 'Remember: a letter + its repeat count' } },
      ],
      bito: [
        { ar: 'غيّر الحروف وشوف النسبة. AAAAAAAA بتتضغط جدًا، لكن ABCDEFGH بتكبر بدل ما تصغر!', en: 'Change the letters and watch the ratio. AAAAAAAA compresses a lot, but ABCDEFGH gets bigger instead of smaller!' },
        { ar: 'الفكرة بتنفع لما فيه تكرار كتير.', en: 'The idea works when there is a lot of repetition.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (3-2)، ص 88', en: 'Key Points (3-2), p. 88' },
      blocks: [
        { type: 'heading', text: { ar: 'ترميز هوفمان', en: 'Huffman coding' }, code: '(Huffman coding)' },
        {
          type: 'cards',
          items: [
            { title: { ar: 'ترميز هوفمان', en: 'Huffman coding' }, en: 'Huffman coding', text: { ar: 'طريقة بتحدد تسلسل البتات: الحرف الأكتر تكرارًا بنديله أقصر تسلسل بت، والأقل تكرارًا بنديله تسلسل أطول.', en: 'A method that sets the bit sequences: the most frequent letter gets the shortest bit sequence, and the least frequent gets a longer one.' }, example: { ar: 'زي اختصار الكلمة اللي بتقولها كتير', en: 'Like a short nickname for the word you say most' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: الأكتر تكرارًا = الأقصر', en: 'Remember: the most frequent = the shortest' } },
      ],
      bito: [
        { ar: 'زي الواتساب: الكلمة اللي بتكتبها كتير بتختصرها.', en: 'Like in chat: the word you type a lot gets shortened.' },
        { ar: 'كده الرسالة كلها بتصغر.', en: 'That way the whole message gets smaller.' },
      ],
    },
    {
      source: { ar: 'الحل (1)، ص 88', en: 'Solution (1), p. 88' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إطار فيديو (500 × 200 بكسل، 24 بت). كام حجم بيانات الإطار الواحد بالبايت؟', en: 'A video frame is 500 × 200 pixels at 24 bits. What is the data size of one frame in bytes?' },
          options: ['2,400 B', '30,000 B', '300,000 B', '2,400,000 B'],
          answer: 2,
          explanation: {
            ar: '500 × 200 × 24 = 2,400,000 بت. ÷ 8 = 300,000 بايت.',
            en: '500 × 200 × 24 = 2,400,000 bits. ÷ 8 = 300,000 bytes.',
          },
          success: { ar: 'صح! إطار واحد = 300,000 بايت. +10 نقط', en: 'Correct! One frame = 300,000 bytes. +10 pts' },
        },
      ],
      bito: [
        { ar: '2,400,000 هو بالبت. لازم نقسم على 8.', en: '2,400,000 is in bits. We must divide by 8.' },
        { ar: 'وبعدين نضرب في fps والثواني.', en: 'Then we multiply by fps and the seconds.' },
      ],
    },
    {
      source: { ar: 'الحل (2)، ص 89', en: 'Solution (2), p. 89' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'فيديو 90 ميجابايت اتضغط لـ 30 ميجابايت. كام نسبة الضغط؟', en: 'A 90 MB video was compressed to 30 MB. What is the compression ratio?' },
          options: ['3%', '33%', '60%', '300%'],
          answer: 1,
          explanation: {
            ar: 'نسبة الضغط = 30 ÷ 90 × 100 ≈ 33%.',
            en: 'Ratio = 30 ÷ 90 × 100 ≈ 33%.',
          },
          success: { ar: 'صح! 30 ÷ 90 ≈ 33%. +10 نقط', en: 'Correct! 30 ÷ 90 ≈ 33%. +10 pts' },
        },
      ],
      bito: [
        { ar: 'القانون: بعد الضغط ÷ الأصلي × 100.', en: 'The rule: after ÷ original × 100.' },
        { ar: 'يعني الفيديو بقى تلت حجمه.', en: 'So the video is now a third of its size.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2-4)، ص 87', en: 'Key Points (2-4), p. 87' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: الضغط من غير فقد بيسمح باستعادة البيانات الأصلية كاملة بعد فك الضغط.', en: 'True or false: lossless compression allows the full original data to be restored after decompression.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. ده معنى "من غير فقد". بنستخدمه للنص والبرامج.',
            en: '✓. That is what "lossless" means. It is used for text and programs.',
          },
          success: { ar: 'صح! من غير فقد = نرجّع كل حاجة. +10 نقط', en: 'Correct! Lossless = we get everything back. +10 pts' },
        },
      ],
      bito: [
        { ar: 'من غير فقد معناها "ما اتفقدش حاجة".', en: 'Lossless means "nothing was lost".' },
        { ar: 'والفقد بيبقى في الصوت والصورة.', en: 'Losing happens with sound and images.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 6-9!', en: 'You finished lesson 6-9!' } },
        {
          type: 'recap',
          items: [
            { code: 'fps', text: { ar: 'إطارات في الثانية', en: 'frames per second' } },
            { code: '90 → 30', text: { ar: 'نسبة 33%', en: 'ratio 33%' } },
            { code: 'A5B2', text: { ar: 'RLE', en: 'RLE' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة الفرز أولًا، وتحدي الكود بعدها.', en: 'Well done! The sorting game first, then the code challenge.' },
        { ar: 'في التحدي هتكتب قانون حجم الفيديو سطر واحد.', en: 'In the challenge you write the video-size rule in one line.' },
      ],
    },
  ],

  game: {
    kind: 'sort',
    rounds: [
      {
        title: { ar: 'مع فقد ولا من غير فقد؟', en: 'Lossy or lossless?' },
        source: { ar: 'النقاط الرئيسية (2-4)، ص 87', en: 'Key Points (2-4), p. 87' },
        bins: [
          { id: 'lossless', label: { ar: 'من غير فقد', en: 'Lossless' } },
          { id: 'lossy', label: { ar: 'مع فقد', en: 'Lossy' } },
        ],
        items: [
          { text: { ar: 'ملف نص', en: 'A text file' }, bin: 'lossless' },
          { text: { ar: 'برنامج', en: 'A program' }, bin: 'lossless' },
          { text: { ar: 'نرجّع البيانات الأصلية كاملة', en: 'We restore the complete original data' }, bin: 'lossless' },
          { text: { ar: 'صورة', en: 'A picture' }, bin: 'lossy' },
          { text: { ar: 'أغنية', en: 'A song' }, bin: 'lossy' },
          { text: { ar: 'فيديو', en: 'A video' }, bin: 'lossy' },
          { text: { ar: 'جزء من البيانات مبيتسترجعش', en: 'Part of the data cannot be restored' }, bin: 'lossy' },
        ],
      },
      {
        title: { ar: 'ضغط ولا فك ضغط؟', en: 'Compression or decompression?' },
        source: { ar: 'النقاط الرئيسية (2)، ص 87', en: 'Key Points (2), p. 87' },
        bins: [
          { id: 'compress', label: { ar: 'الضغط', en: 'Compression' } },
          { id: 'decompress', label: { ar: 'فك الضغط', en: 'Decompression' } },
        ],
        items: [
          { text: { ar: 'تقليل حجم البيانات', en: 'Reducing the data size' }, bin: 'compress' },
          { text: { ar: 'تحويل AAAAA إلى A5', en: 'Turning AAAAA into A5' }, bin: 'compress' },
          { text: { ar: 'فيديو 90 ميجا يبقى 30 ميجا', en: 'A 90 MB video becomes 30 MB' }, bin: 'compress' },
          { text: { ar: 'استعادة البيانات لحالتها الأصلية', en: 'Restoring the data to its original state' }, bin: 'decompress' },
          { text: { ar: 'تحويل A5 إلى AAAAA', en: 'Turning A5 back into AAAAA' }, bin: 'decompress' },
        ],
      },
    ],
  },

  challenge: {
    title: { ar: 'كام حجم الفيديو؟', en: 'How big is the video?' },
    intro: {
      ar: 'الدالة videoBytes بتحسب حجم فيديو بالبايت لعدد ثواني معين، بإطار 500 × 200 بكسل، و24 بت، و30 إطار في الثانية. ناقصها سطر واحد: سطر الإرجاع.',
      en: 'The function videoBytes works out a video’s size in bytes for a given number of seconds, with a 500 × 200 pixel frame, 24 bits and 30 frames per second. It is missing one line: the return.',
    },
    source: { ar: 'الفكرة من: الحل ص 88–89', en: 'Idea from: the solution pp. 88–89' },
    functionName: 'videoBytes',
    starter: {
      ar: 'function videoBytes(seconds) {\n  const width = 500;\n  const height = 200;\n  const bits = 24;\n  const fps = 30;\n  // ← اكتب هنا سطر الإرجاع: (العرض × الطول × العمق ÷ 8) × fps × الثواني\n\n}\n',
      en: 'function videoBytes(seconds) {\n  const width = 500;\n  const height = 200;\n  const bits = 24;\n  const fps = 30;\n  // ← write the return line here: (width × height × bits ÷ 8) × fps × seconds\n\n}\n',
    },
    tests: [
      { input: 1, expected: 9000000 },
      { input: 10, expected: 90000000 },
      { input: 60, expected: 540000000 },
    ],
    banned: { pattern: '300000|2400000|9000000|90000000', label: 'الرقم الجاهز (300000)' },
    hints: [
      {
        ar: 'أولًا حجم الإطار الواحد بالبايت: العرض × الطول × العمق ÷ 8.',
        en: 'First the size of one frame in bytes: width × height × bits ÷ 8.',
      },
      {
        ar: 'بعدين اضربه في fps وفي الثواني، كله في سطر return واحد.',
        en: 'Then multiply it by fps and by the seconds, all in one return line.',
      },
      { ar: 'return (width * height * bits / 8) * fps * seconds;', en: 'return (width * height * bits / 8) * fps * seconds;' },
    ],
  },
};
