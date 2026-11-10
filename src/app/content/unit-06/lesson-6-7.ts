import { Lesson } from '@core/models';

/**
 * Lesson 6-7 "رقمنة الصوت" — ministry book pp. 79–82.
 * Book notes:
 * - p.80 solution: 44,100 Hz × 16 bit × 2 channels = 1,411,200 bit; ÷ 8 = 176,400 B ≈ 176.4 KB (1 KB = 1,000 B).
 * - The code challenge applies this formula for one second to many lengths (seconds × 176,400).
 * - The exercises on pp.81–82 have no answer key; only the Key Points and the p.80 solution are used.
 */
export const LESSON_6_7: Lesson = {
  unitId: 6,
  id: '6-7',
  title: { ar: 'رقمنة الصوت', en: 'Digitizing Sound' },
  bookPages: '79 – 82',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! إزاي صوتك بيتحوّل لأرقام جوه الموبايل؟ ده درس رقمنة الصوت.', en: 'Hi! How does your voice turn into numbers inside the phone? This is digitizing sound.' },
        { ar: 'في الآخر لعبة توصيل، وتحدي كود بتحسب فيه حجم ملف صوتي.', en: 'At the end there is a matching game, and a code challenge where you work out a sound file’s size.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ)، ص 79', en: 'Key Points (a), p. 79' },
      blocks: [
        { type: 'heading', text: { ar: 'الصوت', en: 'Sound' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الصوت', en: 'Sound' }, text: { ar: 'ظاهرة اهتزاز بتنتقل عبر الهواء. بيتمثل على شكل موجة تناظرية (Analog waveform).', en: 'A vibration that travels through the air. It is shown as an analog waveform.' }, example: { ar: 'اهتزاز الوتر في الجيتار', en: 'A vibrating guitar string' } },
            { title: { ar: 'التردد (هرتز)', en: 'Frequency (Hertz)' }, en: 'Frequency (Hz)', text: { ar: 'عدد الموجات اللي بتمر في الثانية الواحدة. وحدته هرتز (Hz).', en: 'The number of waves passing in one second. Its unit is the hertz (Hz).' }, example: { ar: 'صوت أرفع = تردد أعلى', en: 'A higher-pitched sound = a higher frequency' } },
            { title: { ar: 'الفترة', en: 'Period' }, en: 'Period', text: { ar: 'الوقت اللي بتاخده موجة واحدة. وحدته ثانية.', en: 'The time one wave takes. Its unit is the second.' }, example: { ar: 'موجة واحدة من بدايتها لنهايتها', en: 'One wave from start to finish' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: التردد = كام موجة في الثانية', en: 'Remember: frequency = waves per second' } },
      ],
      bito: [
        { ar: 'لما تضغط على مفتاح البيانو العالي، التردد بيزيد.', en: 'When you press a high piano key, the frequency goes up.' },
        { ar: 'والصوت الغليظ تردده قليل.', en: 'A deep sound has a low frequency.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-1)، ص 79', en: 'Key Points (b-1), p. 79' },
      blocks: [
        { type: 'heading', text: { ar: 'رقمنة الصوت (PCM)', en: 'Digitizing sound (PCM)' }, code: '(PCM)' },
        {
          type: 'lead',
          text: { ar: 'طريقة لتحويل الصوت التناظري لبيانات رقمية. فيها 3 خطوات بالترتيب:', en: 'A way of turning analog sound into digital data. It has 3 steps in order:' },
        },
        {
          type: 'steps',
          items: [
            { title: { ar: 'أخذ العينات', en: 'Sampling' }, en: 'Sampling', text: { ar: 'بنقسّم المحور الأفقي (الزمن) على فترات منتظمة، ونقيس ارتفاع الموجة.', en: 'We split the horizontal axis (time) into regular intervals and measure the wave’s height.' }, example: { ar: 'زي ما تصوّر الموجة كل شوية', en: 'Like photographing the wave every moment' } },
            { title: { ar: 'التكميم', en: 'Quantization' }, en: 'Quantization', text: { ar: 'بنقسّم المحور الرأسي (الجهد) على مستويات، ونقرّب كل قيمة لأقرب مستوى.', en: 'We split the vertical axis (voltage) into levels and round each value to the nearest level.' }, example: { ar: 'زي ما تقرّب 7.3 لـ 7', en: 'Like rounding 7.3 to 7' } },
            { title: { ar: 'الترميز', en: 'Encoding' }, en: 'Encoding', text: { ar: 'بنكتب القيم المقرّبة كأرقام ثنائية (0 و 1).', en: 'We write the rounded values as binary numbers (0 and 1).' }, example: { ar: '7 ← 111', en: '7 → 111' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: عينات ← تكميم ← ترميز', en: 'Remember: sampling → quantization → encoding' } },
      ],
      bito: [
        { ar: 'تخيّل ترسم موجة على ورق مربعات: تحط نقطة كل مربع (عينات) وتقرّبها لأقرب خط (تكميم) وتكتب أرقامها (ترميز).', en: 'Imagine drawing a wave on graph paper: a dot in every square (sampling), rounded to the nearest line (quantization), then writing the numbers (encoding).' },
        { ar: 'الأرقام دي هي الملف الرقمي.', en: 'Those numbers are the digital file.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-1)، ص 79', en: 'Key Points (b-1), p. 79' },
      blocks: [
        { type: 'heading', text: { ar: 'مصطلحات الخطوتين الأوليين', en: 'Terms for the first two steps' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'فترة أخذ العينات', en: 'Sampling period' }, en: 'sampling period', text: { ar: 'الفترة الزمنية بين كل عينة والتانية.', en: 'The time between one sample and the next.' } },
            { title: { ar: 'تردد أخذ العينات', en: 'Sampling frequency (rate)' }, en: 'sampling frequency', text: { ar: 'عدد العينات اللي بتتاخد في الثانية الواحدة.', en: 'The number of samples taken in one second.' }, example: { ar: 'CD الموسيقى: 44,100 عينة في الثانية', en: 'A music CD: 44,100 samples per second' } },
            { title: { ar: 'عمق بت التكميم', en: 'Quantization bit depth' }, en: 'Quantization bit depth', text: { ar: 'عدد البتات اللي بتحدد عدد المستويات. n بت = 2ⁿ مستوى.', en: 'The number of bits that sets the number of levels. n bits = 2ⁿ levels.' }, example: { ar: '3 بت = 8 مستويات', en: '3 bits = 8 levels' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: عينات أكتر وبتات أكتر = صوت أنضف', en: 'Remember: more samples and more bits = cleaner sound' } },
      ],
      bito: [
        { ar: '44,100 عينة في الثانية يعني الكمبيوتر بياخد "صورة" للصوت 44 ألف مرة في ثانية واحدة!', en: '44,100 samples a second means the computer takes a "photo" of the sound 44 thousand times in one second!' },
        { ar: 'ولو عمق البت 16، يبقى 65,536 مستوى.', en: 'And with a bit depth of 16 there are 65,536 levels.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-2، 3)، ص 80', en: 'Key Points (b-2, 3), p. 80' },
      blocks: [
        { type: 'heading', text: { ar: 'الجودة والحجم', en: 'Quality and size' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'جودة أعلى', en: 'Higher quality' }, text: { ar: 'كل ما زاد تردد أخذ العينات وعمق البت، قرّب الصوت الرقمي من الموجة الأصلية.', en: 'The higher the sampling rate and bit depth, the closer the digital sound is to the original wave.' }, example: { ar: 'أغنية أنضف وأوضح', en: 'A cleaner, clearer song' } },
            { tone: 'no', title: { ar: 'بس حجم أكبر', en: 'But a bigger size' }, text: { ar: 'ومعاه بيزيد حجم البيانات.', en: 'And the data size grows with it.' }, example: { ar: 'ملف أتقل ومساحة أكتر', en: 'A heavier file that takes more space' } },
            { title: { ar: 'نظرية أخذ العينات', en: 'Sampling theorem' }, en: 'Sampling theorem', text: { ar: 'لو تردد أخذ العينات زاد عن ضعف أعلى تردد في الموجة الأصلية، نقدر نرجّع الموجة الأصلية من البيانات الرقمية.', en: 'If the sampling rate exceeds twice the highest frequency in the original wave, we can rebuild the original wave from the digital data.' }, example: { ar: 'موجة 40 هرتز تحتاج أكتر من 80 عينة في الثانية', en: 'A 40 Hz wave needs more than 80 samples a second' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: جودة أعلى = حجم أكبر', en: 'Remember: higher quality = bigger size' } },
      ],
      bito: [
        { ar: 'دايمًا فيه مقايضة: الجودة العالية بتاكل مساحة.', en: 'There is always a trade-off: high quality eats space.' },
        { ar: 'عشان كده ملفات الصوت بتتضغط.', en: 'That is why sound files get compressed.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ت)، ص 80', en: 'Key Points (c), p. 80' },
      blocks: [
        { type: 'heading', text: { ar: 'كم حجم الملف الصوتي؟', en: 'How big is the sound file?' } },
        {
          type: 'lead',
          text: { ar: 'القنوات: أحادي (قناة واحدة) أو مجسم (ستيريو، قناتين). والقانون: حجم البيانات بالبت = التردد × عمق البت × القنوات × المدة بالثواني.', en: 'Channels: mono (one) or stereo (two). The rule: data in bits = sampling rate × bit depth × channels × seconds.' },
        },
        { type: 'sound-lab' },
        { type: 'memo', text: { ar: 'افتكر: القانون ÷ 8 = بايت', en: 'Remember: the rule ÷ 8 = bytes' } },
      ],
      bito: [
        { ar: 'مثال الكتاب: 44,100 × 16 × 2 = 1,411,200 بت. ÷ 8 = 176,400 بايت (حوالي 176 كيلوبايت).', en: 'The book’s example: 44,100 × 16 × 2 = 1,411,200 bits. ÷ 8 = 176,400 bytes (about 176 KB).' },
        { ar: 'غيّر الإعدادات وشوف الحجم بيتغير إزاي. ثانية واحدة بس!', en: 'Change the settings and watch the size change. Just one second!' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 81', en: 'Test Your Knowledge (1), p. 81' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه الترتيب الصح لخطوات رقمنة الصوت التناظري؟', en: 'What is the right order of the steps for digitizing analog sound?' },
          options: [
            { ar: 'أخذ العينات ← التكميم ← الترميز', en: 'Sampling → quantization → encoding' },
            { ar: 'التكميم ← أخذ العينات ← الترميز', en: 'Quantization → sampling → encoding' },
            { ar: 'الترميز ← التكميم ← أخذ العينات', en: 'Encoding → quantization → sampling' },
            { ar: 'التكميم ← الترميز ← أخذ العينات', en: 'Quantization → encoding → sampling' },
          ],
          answer: 0,
          explanation: {
            ar: 'الترتيب في طريقة PCM: أخذ العينات (الزمن) ثم التكميم (الارتفاع) ثم الترميز (بالأرقام الثنائية).',
            en: 'The PCM order: sampling (time), then quantization (height), then encoding (in binary).',
          },
          success: { ar: 'صح! عينات ← تكميم ← ترميز. +10 نقط', en: 'Correct! Sampling → quantization → encoding. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الأول بناخد عيّنات، بعدين نقرّبها، وأخيرًا نكتبها بالأرقام.', en: 'First we take samples, then round them, finally write them as numbers.' },
        { ar: 'افتكر ورق المربعات.', en: 'Remember the graph paper.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2)، ص 81 والحل ص 80', en: 'Test Your Knowledge (2), p. 81 and the solution p. 80' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'تردد 44,100 هرتز، عمق 16 بت، صوت أحادي، ثانية واحدة. كام حجم البيانات؟ (علشان 1 كيلوبايت = 1,000 بايت)', en: '44,100 Hz, 16 bit, mono, one second. What is the data size? (1 KB = 1,000 bytes)' },
          options: ['88.2 KB', '176.4 KB', '352.8 KB', '1,411 KB'],
          answer: 0,
          explanation: {
            ar: '44,100 × 16 × 1 = 705,600 بت. ÷ 8 = 88,200 بايت = 88.2 كيلوبايت. (لو مجسم: ×2 = 176.4 كيلوبايت زي مثال الكتاب.)',
            en: '44,100 × 16 × 1 = 705,600 bits. ÷ 8 = 88,200 bytes = 88.2 KB. (In stereo ×2 = 176.4 KB, like the book’s example.)',
          },
          success: { ar: 'صح! أحادي = نص المجسم. +10 نقط', en: 'Correct! Mono = half of stereo. +10 pts' },
        },
      ],
      bito: [
        { ar: 'القناة الواحدة بس، يعني من غير الضرب في 2.', en: 'Just one channel, so no multiplying by 2.' },
        { ar: 'استخدم صندوق الحساب اللي فات.', en: 'Use the calculator box from earlier.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-2)، ص 80', en: 'Key Points (b-2), p. 80' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: لو زوّدنا تردد أخذ العينات وعمق البت يقرب الصوت الرقمي من الموجة الأصلية، لكن حجم البيانات بيزيد.', en: 'True or false: raising the sampling rate and bit depth brings the digital sound closer to the original wave, but the data size grows.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. الجودة بتزيد وحجم البيانات بيزيد معاها.',
            en: '✓. Quality goes up and the data size grows with it.',
          },
          success: { ar: 'صح! جودة أعلى = حجم أكبر. +10 نقط', en: 'Correct! Higher quality = bigger size. +10 pts' },
        },
      ],
      bito: [
        { ar: 'مقايضة: جودة أحسن بتكلّف مساحة.', en: 'A trade-off: better quality costs space.' },
        { ar: 'افتكر القانون: كل رقم بيتضرب.', en: 'Remember the rule: every number is multiplied.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 6-7!', en: 'You finished lesson 6-7!' } },
        {
          type: 'recap',
          items: [
            { code: '3', text: { ar: 'خطوات PCM', en: 'PCM steps' } },
            { code: '44,100', text: { ar: 'عينة في الثانية', en: 'samples a second' } },
            { code: '÷ 8', text: { ar: 'يحوّل بت لبايت', en: 'bits to bytes' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة التوصيل أولًا، وبعدها تحدي الكود لو عايز.', en: 'Well done! The matching game first, then the code challenge if you like.' },
        { ar: 'في التحدي هتكتب سطر واحد بيطبّق قانون الحجم.', en: 'In the challenge you write one line that applies the size rule.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'المصطلح ومعناه', en: 'The term and its meaning' },
        source: { ar: 'النقاط الرئيسية (أ، ب)، ص 79', en: 'Key Points (a, b), p. 79' },
        pairs: [
          { left: { text: { ar: 'التردد (هرتز)', en: 'Frequency (Hz)' } }, right: { ar: 'عدد الموجات في الثانية', en: 'Number of waves per second' } },
          { left: { text: { ar: 'الفترة', en: 'Period' } }, right: { ar: 'الوقت اللي بتاخده موجة واحدة', en: 'The time one wave takes' } },
          { left: { text: { ar: 'أخذ العينات', en: 'Sampling' } }, right: { ar: 'نقيس ارتفاع الموجة كل فترة زمنية منتظمة', en: 'Measure the wave’s height at regular time intervals' } },
          { left: { text: { ar: 'التكميم', en: 'Quantization' } }, right: { ar: 'نقرّب كل قيمة لأقرب مستوى', en: 'Round each value to the nearest level' } },
          { left: { text: { ar: 'الترميز', en: 'Encoding' } }, right: { ar: 'نكتب القيم كأرقام ثنائية', en: 'Write the values as binary numbers' } },
        ],
      },
      {
        title: { ar: 'الإعداد ونتيجته', en: 'The setting and its result' },
        source: { ar: 'النقاط الرئيسية (ب-2، ت)، ص 80', en: 'Key Points (b-2, c), p. 80' },
        pairs: [
          { left: { text: { ar: 'تردد عينات وعمق بت أعلى', en: 'Higher sampling rate and bit depth' } }, right: { ar: 'أقرب للأصل لكن الحجم أكبر', en: 'Closer to the original but bigger' } },
          { left: { text: { ar: 'أحادي', en: 'Mono' } }, right: { ar: 'قناة صوت واحدة', en: 'One sound channel' } },
          { left: { text: { ar: 'مجسم (ستيريو)', en: 'Stereo' } }, right: { ar: 'قناتين صوت', en: 'Two sound channels' } },
          { left: { text: { ar: 'عمق بت 3', en: 'A bit depth of 3' } }, right: { ar: '8 مستويات (2³)', en: '8 levels (2³)' } },
        ],
      },
    ],
  },

  challenge: {
    title: { ar: 'كام حجم ملف الصوت؟', en: 'How big is the sound file?' },
    intro: {
      ar: 'الدالة soundBytes بتحسب حجم الصوت بالبايت لعدد ثواني معين، بتردد 44,100 هرتز، وعمق 16 بت، ومجسم (قناتين). ناقصها سطر واحد بس: سطر الإرجاع.',
      en: 'The function soundBytes works out a sound’s size in bytes for a given number of seconds, at 44,100 Hz, 16 bit, stereo (2 channels). It is missing just one line: the return.',
    },
    source: { ar: 'الفكرة من: الحل ص 80 وتمارين ص 81–82', en: 'Idea from: the solution p. 80 and the exercises pp. 81–82' },
    functionName: 'soundBytes',
    starter: {
      ar: 'function soundBytes(seconds) {\n  const rate = 44100;   // عينة في الثانية\n  const bits = 16;      // عمق البت\n  const channels = 2;   // مجسم\n  // ← اكتب هنا سطر الإرجاع: التردد × العمق × القنوات × الثواني ÷ 8\n\n}\n',
      en: 'function soundBytes(seconds) {\n  const rate = 44100;   // samples per second\n  const bits = 16;      // bit depth\n  const channels = 2;   // stereo\n  // ← write the return line here: rate × bits × channels × seconds ÷ 8\n\n}\n',
    },
    tests: [
      { input: 1, expected: 176400 },
      { input: 2, expected: 352800 },
      { input: 10, expected: 1764000 },
      { input: 60, expected: 10584000 },
    ],
    banned: { pattern: '176400|1411200|88200', label: 'الرقم الجاهز (176400)' },
    hints: [
      {
        ar: 'عدد البتات = التردد × العمق × القنوات × الثواني. بعدين نحوّله لبايت بالقسمة على 8.',
        en: 'Bits = rate × depth × channels × seconds. Then we turn that into bytes by dividing by 8.',
      },
      {
        ar: 'استخدم المتغيرات rate و bits و channels و seconds مع بعض في سطر return واحد.',
        en: 'Use the variables rate, bits, channels and seconds together in a single return line.',
      },
      { ar: 'return rate * bits * channels * seconds / 8;', en: 'return rate * bits * channels * seconds / 8;' },
    ],
  },
};
