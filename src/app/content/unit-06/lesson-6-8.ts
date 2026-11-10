import { Lesson } from '@core/models';

/**
 * Lesson 6-8 "رقمنة الصور" — ministry book pp. 83–86.
 * Book notes:
 * - p.84 solution: 1,280 × 720 × 24 bit = 22,118,400 bit = 2,764,800 B ≈ 2.76 MB (1 KB = 1,000 B).
 * - The book uses "التدرج" (gradation) for the number of tone levels: 8 bit = 256 levels, from 0 to 255.
 * - The exercises on pp.85–86 are only partly keyed; the site uses the Key Points and the p.84 solution.
 */
export const LESSON_6_8: Lesson = {
  unitId: 6,
  id: '6-8',
  title: { ar: 'رقمنة الصور', en: 'Digitizing Images' },
  bookPages: '83 – 86',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! إزاي صورة سيلفي بتتحوّل لأرقام؟ هنعرف دلوقتي.', en: 'Hi! How does a selfie turn into numbers? We find out now.' },
        { ar: 'في الآخر لعبة توصيل: وصّل كل مصطلح بمعناه.', en: 'At the end there is a matching game: link each term to its meaning.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (1)، ص 83', en: 'Key Points (1), p. 83' },
      blocks: [
        { type: 'heading', text: { ar: 'البكسل', en: 'The pixel' }, code: '(Pixel)' },
        {
          type: 'cards',
          items: [
            { title: { ar: 'البكسل', en: 'Pixel' }, en: 'Pixel', text: { ar: 'أصغر وحدة في الصورة الرقمية.', en: 'The smallest unit of a digital image.' }, example: { ar: 'زي مربع صغير في سجادة منقوشة', en: 'Like one small square in a patterned carpet' } },
            { title: { ar: 'الصورة الرقمية', en: 'A digital image' }, text: { ar: 'مجموعة بكسلات متجاورة، كل بكسل ليه لون.', en: 'A set of neighbouring pixels, each with a colour.' }, example: { ar: 'قرّب لأقصى حد على صورة وهتشوف المربعات', en: 'Zoom in all the way on a photo and you see the squares' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: الصورة = بكسلات كتير', en: 'Remember: a picture = many pixels' } },
      ],
      bito: [
        { ar: 'الشاشة نفسها مصنوعة من بكسلات صغيرة.', en: 'The screen itself is made of tiny pixels.' },
        { ar: 'وكل ما البكسلات أكتر، الصورة أنضف.', en: 'And the more pixels, the clearer the picture.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2)، ص 83', en: 'Key Points (2), p. 83' },
      blocks: [
        { type: 'heading', text: { ar: 'تلات خطوات للرقمنة', en: 'Three steps to digitize' } },
        {
          type: 'steps',
          items: [
            { title: { ar: 'أخذ العينات', en: 'Sampling' }, en: 'Sampling', text: { ar: 'بنقسّم الصورة لبكسلات بخطوط أفقية ورأسية.', en: 'We split the picture into pixels with horizontal and vertical lines.' }, example: { ar: 'الدقة (dpi) = عدد البكسلات في كل بوصة', en: 'Resolution (dpi) = pixels per inch' } },
            { title: { ar: 'التكميم', en: 'Quantization' }, en: 'Quantization', text: { ar: 'بنحوّل لون كل بكسل لقيمة رقمية.', en: 'We turn each pixel’s colour into a number.' }, example: { ar: '8 بت = 256 مستوى من 0 لـ 255 (التدرج)', en: '8 bits = 256 levels from 0 to 255 (gradation)' } },
            { title: { ar: 'الترميز', en: 'Encoding' }, en: 'Encoding', text: { ar: 'بنعبّر عن القيم دي بأرقام ثنائية (0 و 1).', en: 'We express those values as binary numbers (0 and 1).' }, example: { ar: '5 ← 101', en: '5 → 101' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: بكسلات ← أرقام ← 0 و 1', en: 'Remember: pixels → numbers → 0s and 1s' } },
      ],
      bito: [
        { ar: 'نفس فكرة رقمنة الصوت، بس هنا ببعدين: طول وعرض.', en: 'The same idea as digitizing sound, but in two directions: width and height.' },
        { ar: 'الدقة بتتقاس بـ dpi: عدد النقط في البوصة.', en: 'Resolution is measured in dpi: dots per inch.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (3)، ص 83', en: 'Key Points (3), p. 83' },
      blocks: [
        { type: 'heading', text: { ar: 'كم حجم الصورة؟', en: 'How big is the picture?' } },
        {
          type: 'lead',
          text: { ar: 'حجم الصورة بالبت = البكسلات الأفقية × البكسلات الرأسية × عمق اللون (بت). وكل ما زادت الدقة، الصورة أنضف لكن الحجم أكبر.', en: 'Picture size in bits = horizontal pixels × vertical pixels × colour depth (bits). The higher the resolution, the clearer the picture but the bigger the size.' },
        },
        { type: 'image-lab' },
        { type: 'memo', text: { ar: 'افتكر: عرض × طول × عمق ÷ 8 = بايت', en: 'Remember: width × height × depth ÷ 8 = bytes' } },
      ],
      bito: [
        { ar: 'مثال الكتاب: 1,280 × 720 × 24 بت = 22,118,400 بت.', en: 'The book’s example: 1,280 × 720 × 24 bits = 22,118,400 bits.' },
        { ar: '÷ 8 = 2,764,800 بايت، يعني حوالي 2.76 ميجابايت. جرّب بنفسك فوق.', en: '÷ 8 = 2,764,800 bytes, about 2.76 MB. Try it yourself above.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (4)، ص 83', en: 'Key Points (4), p. 83' },
      blocks: [
        { type: 'heading', text: { ar: 'نوعين من الصور', en: 'Two kinds of picture' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'صورة بكسل (Bitmap)', en: 'Bitmap image' }, en: 'Bitmap', text: { ar: 'بتتكوّن من شبكة بكسلات. لما تكبّرها بتظهر الحواف مسننة (Jaggies).', en: 'Made of a grid of pixels. When you enlarge it the edges look jagged.' }, example: { ar: 'الصور من الكاميرا، وبرنامج Photoshop', en: 'Camera photos, and the Photoshop program' } },
            { title: { ar: 'صورة متجه (Vector)', en: 'Vector image' }, en: 'Vector format', text: { ar: 'بتتكون من معلومات عن الخطوط والأشكال، فمفيش زغللة لما تكبّر.', en: 'Made of information about lines and shapes, so no blurring when enlarged.' }, example: { ar: 'الشعارات (برنامج Illustrator)', en: 'Logos (the Illustrator program)' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: بكسل = زغللة لما تكبّر · متجه = نضيف دايمًا', en: 'Remember: bitmap = blurs when enlarged · vector = always sharp' } },
      ],
      bito: [
        { ar: 'اللوجو لازم يبقى متجه عشان يتكبّر على لافتة كبيرة من غير ما يزغلل.', en: 'A logo should be a vector so it can grow onto a big sign without going blurry.' },
        { ar: 'والصورة الفوتوغرافية بكسلات.', en: 'And a photograph is pixels.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2)، ص 84', en: 'Key Points (2), p. 84' },
      blocks: [
        { type: 'heading', text: { ar: 'الألوان', en: 'Colours' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'ألوان الضوء الأساسية', en: 'Primary colours of light' }, en: 'Three primary colours of light', text: { ar: 'الأحمر والأخضر والأزرق. لما نجمعهم الضوء بيقرّب للأبيض.', en: 'Red, green and blue. Mixed together they approach white.' }, example: { ar: 'شاشة التلفزيون والكمبيوتر (جمع الألوان)', en: 'TV and computer screens (adding colours)' } },
            { title: { ar: 'ألوان الصبغة الأساسية', en: 'Primary colours of pigment' }, en: 'Three primary colours of pigment', text: { ar: 'السماوي والأرجواني والأصفر. لما نخلطهم بيقرّبوا للأسود.', en: 'Cyan, magenta and yellow. Mixed together they approach black.' }, example: { ar: 'الطابعات الملوّنة (طرح الألوان)', en: 'Colour printers (subtracting colours)' } },
            { title: { ar: 'اللون الكامل 24 بت', en: '24-bit full colour' }, en: '24-bit full color', text: { ar: 'كل لون من الأحمر والأخضر والأزرق بـ 8 بت (256 مستوى)، يعني 24 = 3 × 8 بت.', en: 'Red, green and blue each use 8 bits (256 levels), so 24 = 3 × 8 bits.' }, example: { ar: 'حوالي 16 مليون لون', en: 'About 16 million colours' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: ضوء = RGB · صبغة = CMY · 24 بت = 3 × 8', en: 'Remember: light = RGB · pigment = CMY · 24 bits = 3 × 8' } },
      ],
      bito: [
        { ar: 'الشاشة بتبعت ضوء فبتجمع الألوان. الورق بيعكس ضوء فبنطرح.', en: 'A screen sends out light, so it adds colours. Paper reflects light, so it subtracts.' },
        { ar: 'جرّب الخلاط في الصفحة الجاية.', en: 'Try the mixer on the next page.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2)، ص 84', en: 'Key Points (2), p. 84' },
      blocks: [
        { type: 'heading', text: { ar: 'اخلط لونك بنفسك', en: 'Mix your own colour' } },
        {
          type: 'lead',
          text: { ar: 'حرّك السلايدرات: كل لون من 0 لـ 255 (8 بت). لاحظ الأرقام الثنائية تحت.', en: 'Move the sliders: each colour from 0 to 255 (8 bits). Watch the binary numbers below.' },
        },
        { type: 'rgb-lab' },
        { type: 'memo', text: { ar: 'افتكر: 3 ألوان × 8 بت = 24 بت', en: 'Remember: 3 colours × 8 bits = 24 bits' } },
      ],
      bito: [
        { ar: 'خلّي الثلاثة 255 تطلع أبيض، والثلاثة 0 تطلع أسود.', en: 'Set all three to 255 for white, and all three to 0 for black.' },
        { ar: 'وكل رقم هو 8 بت ثنائي.', en: 'And each number is 8 binary bits.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 84', en: 'Test Your Knowledge (1), p. 84' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه الترتيب الصح لخطوات تحويل الصورة لبيانات رقمية؟', en: 'What is the right order of steps for turning a picture into digital data?' },
          options: [
            { ar: 'أخذ العينات ← التكميم ← الترميز', en: 'Sampling → quantization → encoding' },
            { ar: 'الترميز ← التكميم ← أخذ العينات', en: 'Encoding → quantization → sampling' },
            { ar: 'التكميم ← الترميز ← أخذ العينات', en: 'Quantization → encoding → sampling' },
          ],
          answer: 0,
          explanation: {
            ar: 'نقسّم الصورة لبكسلات (أخذ العينات)، نحوّل لون كل بكسل لقيمة (التكميم)، ونكتب القيم ثنائي (الترميز).',
            en: 'We split the picture into pixels (sampling), turn each pixel’s colour into a value (quantization), and write the values in binary (encoding).',
          },
          success: { ar: 'صح! عينات ← تكميم ← ترميز. +10 نقط', en: 'Correct! Sampling → quantization → encoding. +10 pts' },
        },
      ],
      bito: [
        { ar: 'نفس ترتيب الصوت بالظبط.', en: 'The same order as sound exactly.' },
        { ar: 'الأول بنقسّم، وبعدين نقيس، وأخيرًا نكتب بالأرقام.', en: 'First we split, then measure, finally write in numbers.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (3)، ص 84 والحل', en: 'Test Your Knowledge (3), p. 84 and its solution' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه حجم بيانات صورة ملونة (24 بت) بدقة 1,280 × 720 بكسل بالميجابايت؟ (1 كيلوبايت = 1,000 بايت)', en: 'What is the data size of a colour picture (24 bit) of 1,280 × 720 pixels, in megabytes? (1 KB = 1,000 B)' },
          options: ['حوالي 0.92 MB', 'حوالي 2.76 MB', 'حوالي 22.1 MB', 'حوالي 27.6 MB'],
          answer: 1,
          explanation: {
            ar: '1,280 × 720 × 24 = 22,118,400 بت. ÷ 8 = 2,764,800 بايت ≈ 2.76 ميجابايت.',
            en: '1,280 × 720 × 24 = 22,118,400 bits. ÷ 8 = 2,764,800 bytes ≈ 2.76 MB.',
          },
          success: { ar: 'صح! حوالي 2.76 ميجابايت. +10 نقط', en: 'Correct! About 2.76 MB. +10 pts' },
        },
      ],
      bito: [
        { ar: 'جرّبها في الحاسبة اللي فاتت.', en: 'Try it in the calculator from earlier.' },
        { ar: 'متنساش ÷ 8 عشان تحوّل لبايت.', en: 'Do not forget ÷ 8 to turn bits into bytes.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (4)، ص 83', en: 'Key Points (4), p. 83' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: صورة البكسل (Bitmap) لما بنكبّرها بتظهر حوافها مسننة.', en: 'True or false: when we enlarge a bitmap image its edges look jagged.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. صورة البكسل مكوّنة من مربعات، فلما نكبّرها بتبان الحواف المسننة (Jaggies). صور المتجه مبتحصلش فيها.',
            en: '✓. A bitmap is made of squares, so enlarging it shows jagged edges. Vector images do not have this.',
          },
          success: { ar: 'صح! بكسل = حواف مسننة لما نكبّر. +10 نقط', en: 'Correct! Bitmap = jagged edges when enlarged. +10 pts' },
        },
      ],
      bito: [
        { ar: 'افتكر السجادة المنقوشة: كل مربع واضح لما تقرّب.', en: 'Remember the patterned carpet: every square shows when you zoom.' },
        { ar: 'والمتجه بيرسم خطوط جديدة كل مرة.', en: 'And a vector redraws new lines every time.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 6-8!', en: 'You finished lesson 6-8!' } },
        {
          type: 'recap',
          items: [
            { code: '3', text: { ar: 'خطوات الرقمنة', en: 'steps to digitize' } },
            { code: '8 bit', text: { ar: '256 مستوى', en: '256 levels' } },
            { code: '24 bit', text: { ar: '3 × 8', en: '3 × 8' } },
            { code: 'RGB', text: { ar: 'ألوان الضوء', en: 'light colours' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة التوصيل: وصّل المصطلحات.', en: 'Well done! The matching game: link the terms.' },
        { ar: 'وفي الجولة التانية ألوان الضوء والصبغة.', en: 'The second round has light and pigment colours.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'المصطلح ومعناه', en: 'The term and its meaning' },
        source: { ar: 'النقاط الرئيسية (1–4)، ص 83', en: 'Key Points (1–4), p. 83' },
        pairs: [
          { left: { text: { ar: 'البكسل', en: 'Pixel' } }, right: { ar: 'أصغر وحدة في الصورة', en: 'The smallest unit of an image' } },
          { left: { text: { ar: 'الدقة (dpi)', en: 'Resolution (dpi)' } }, right: { ar: 'عدد البكسلات في البوصة', en: 'Pixels per inch' } },
          { left: { text: { ar: 'صورة بكسل (Bitmap)', en: 'Bitmap image' } }, right: { ar: 'شبكة بكسلات تظهر حوافها مسننة', en: 'A grid of pixels with jagged edges' } },
          { left: { text: { ar: 'صورة متجه (Vector)', en: 'Vector image' } }, right: { ar: 'خطوط وأشكال تتكبّر من غير زغللة', en: 'Lines and shapes that enlarge without blurring' } },
          { left: { text: { ar: '8 بت', en: '8 bits' } }, right: { ar: '256 مستوى من 0 لـ 255', en: '256 levels from 0 to 255' } },
        ],
      },
      {
        title: { ar: 'الألوان', en: 'The colours' },
        source: { ar: 'النقاط الرئيسية (2)، ص 84', en: 'Key Points (2), p. 84' },
        pairs: [
          { left: { text: { ar: 'ألوان الضوء الأساسية', en: 'Primary colours of light' } }, right: { ar: 'أحمر وأخضر وأزرق', en: 'Red, green and blue' } },
          { left: { text: { ar: 'ألوان الصبغة الأساسية', en: 'Primary colours of pigment' } }, right: { ar: 'سماوي وأرجواني وأصفر', en: 'Cyan, magenta and yellow' } },
          { left: { text: { ar: 'جمع الألوان', en: 'Additive mixing' } }, right: { ar: 'شاشات التلفزيون والكمبيوتر', en: 'TV and computer screens' } },
          { left: { text: { ar: 'طرح الألوان', en: 'Subtractive mixing' } }, right: { ar: 'الطابعات الملوّنة', en: 'Colour printers' } },
          { left: { text: { ar: 'اللون الكامل 24 بت', en: '24-bit full colour' } }, right: { ar: '3 × 8 بت', en: '3 × 8 bits' } },
        ],
      },
    ],
  },
};
