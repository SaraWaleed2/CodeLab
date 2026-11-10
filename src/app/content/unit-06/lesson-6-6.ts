import { Lesson } from '@core/models';

/**
 * Lesson 6-6 "العمليات الحسابية [2]" — ministry book pp. 76–78.
 * Book notes:
 * - The book calls the complement "المكمل / المتمم" interchangeably; the site always says "المتمم".
 * - Examples from the book: decimal 635 → 9's complement 364 → 10's complement 365; binary 0101 → 1010 → 1011;
 *   subtraction 1000 − 0111 = 1000 + 1001 = 10001 → 0001, and 8 − 6 = 8 + 4 = 12 → 2.
 * - p.77 key: complement of 1001 is 0111; 1100 − 0111 = 1100 + 1001 = 10101 → 0101. The exercises on p.78 have no key.
 */
export const LESSON_6_6: Lesson = {
  unitId: 6,
  id: '6-6',
  title: { ar: 'العمليات الحسابية (٢): المتمم والطرح', en: 'Arithmetic (2): Complements and Subtraction' },
  bookPages: '76 – 78',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! الكمبيوتر مبيعرفش يطرح. بيجمع بس! إزاي بقى؟ بالمتمم.', en: 'Hi! A computer cannot subtract. It only adds! How? With complements.' },
        { ar: 'في الآخر لعبة ترتيب: رتّب خطوات المتمم والطرح.', en: 'At the end there is an ordering game: put the steps of complements and subtraction in order.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ)، ص 76', en: 'Key Points (a), p. 76' },
      blocks: [
        { type: 'heading', text: { ar: 'المتمم', en: 'The complement' }, code: '(Complement)' },
        {
          type: 'lead',
          text: { ar: 'أصغر رقم لو جمعناه على رقم معين وصلنا لحد معين. بيتستخدم لتمثيل الأرقام السالبة في الكمبيوتر.', en: 'The smallest number that, added to a number, reaches a certain limit. It is used to show negative numbers in computers.' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'متمم 9', en: '9’s complement' }, en: '9\'s Complement', text: { ar: 'اطرح كل رقم من 9.', en: 'Subtract each digit from 9.' }, example: { ar: '635 ← 364 (9−6=3، 9−3=6، 9−5=4)', en: '635 → 364 (9−6=3, 9−3=6, 9−5=4)' } },
            { title: { ar: 'متمم 10', en: '10’s complement' }, en: '10\'s Complement', text: { ar: 'متمم 9 + 1.', en: '9’s complement + 1.' }, example: { ar: '364 + 1 = 365', en: '364 + 1 = 365' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: متمم 635 = 365 (عشري)', en: 'Remember: the complement of 635 = 365 (decimal)' } },
      ],
      bito: [
        { ar: 'اتأكد: 635 + 365 = 1000. ده معناه "متمم".', en: 'Check: 635 + 365 = 1000. That is what "complement" means.' },
        { ar: 'المتمم هو اللي بيكمّل الرقم لحد 1000.', en: 'The complement is what completes the number up to 1000.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-2)، ص 76', en: 'Key Points (a-2), p. 76' },
      blocks: [
        { type: 'heading', text: { ar: 'المتمم الثنائي', en: 'The binary complement' } },
        {
          type: 'lead',
          text: { ar: 'نفس الفكرة بس سهلة جدًا: نقلب كل بت، وبعدين نضيف 1. مثال الكتاب: 0101.', en: 'The same idea but very easy: flip every bit, then add 1. The book’s example: 0101.' },
        },
        { type: 'complement-lab', binary: '0101' },
        { type: 'memo', text: { ar: 'افتكر: اقلب كل بت ثم أضف 1', en: 'Remember: flip every bit, then add 1' } },
      ],
      bito: [
        { ar: 'اقلب: كل 0 يبقى 1 وكل 1 يبقى 0. ده المتمم الأحادي.', en: 'Flip: every 0 becomes 1 and every 1 becomes 0. That is the one’s complement.' },
        { ar: 'وبعدين أضف 1 تطلع المتمم الثنائي.', en: 'Then add 1 to get the two’s complement.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب)، ص 77', en: 'Key Points (b), p. 77' },
      blocks: [
        { type: 'heading', text: { ar: 'الطرح بالمتمم', en: 'Subtracting with complements' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'خطوة 1', en: 'Step 1' }, text: { ar: 'جيب متمم الرقم المطروح.', en: 'Find the complement of the number being subtracted.' } },
            { title: { ar: 'خطوة 2', en: 'Step 2' }, text: { ar: 'اجمع المتمم على الرقم الأول.', en: 'Add the complement to the first number.' } },
            { title: { ar: 'خطوة 3', en: 'Step 3' }, text: { ar: 'تجاهل الرقم الزايد اللي طلع في الخانة الرئيسية (الحمل الأخير).', en: 'Ignore the extra digit that appears in the leading column (the last carry).' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: الطرح = جمع المتمم، وتجاهل الحمل الأخير', en: 'Remember: subtracting = adding the complement, and dropping the last carry' } },
      ],
      bito: [
        { ar: 'كده الكمبيوتر محتاج دايرة جمع بس، مش دايرة طرح.', en: 'This way the computer only needs an adding circuit, not a subtracting one.' },
        { ar: 'مثال سريع: 8 − 6.', en: 'A quick example: 8 − 6.' },
      ],
    },
    {
      source: { ar: 'أمثلة، ص 77', en: 'Examples, p. 77' },
      blocks: [
        { type: 'heading', text: { ar: 'أمثلة الكتاب', en: 'The book’s examples' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'عشري: 8 − 6', en: 'Decimal: 8 − 6' }, text: { ar: 'متمم 10 للعدد 6 هو 4. نجمع: 8 + 4 = 12. نتجاهل الأول (1).', en: 'The 10’s complement of 6 is 4. Add: 8 + 4 = 12. Ignore the 1.' }, example: { ar: 'الناتج: 2', en: 'Result: 2' } },
            { title: { ar: 'ثنائي: 1000 − 0111', en: 'Binary: 1000 − 0111' }, text: { ar: 'متمم 0111 هو 1001. نجمع: 1000 + 1001 = 10001. نتجاهل الأول (1).', en: 'The complement of 0111 is 1001. Add: 1000 + 1001 = 10001. Ignore the leading 1.' }, example: { ar: 'الناتج: 0001', en: 'Result: 0001' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: 8 − 6 = 8 + 4 = 12 ← 2', en: 'Remember: 8 − 6 = 8 + 4 = 12 → 2' } },
      ],
      bito: [
        { ar: 'تلاحظ: الاتنين عملوا نفس الخطوات بالظبط.', en: 'Notice: both followed the exact same steps.' },
        { ar: 'والناتج صح: 8 − 6 = 2، و 8 − 7 = 1.', en: 'And the result is right: 8 − 6 = 2, and 8 − 7 = 1.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 77', en: 'Test Your Knowledge (1), p. 77' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه المتمم الثنائي للرقم 1001؟', en: 'What is the two’s complement of 1001?' },
          options: ['0110', '0111', '1000', '1010'],
          answer: 1,
          explanation: {
            ar: 'نقلب كل بت: 1001 ← 0110، وبعدين نضيف 1: 0110 + 1 = 0111.',
            en: 'Flip every bit: 1001 → 0110, then add 1: 0110 + 1 = 0111.',
          },
          success: { ar: 'صح! 1001 ← 0111. +10 نقط', en: 'Correct! 1001 → 0111. +10 pts' },
        },
      ],
      bito: [
        { ar: 'جرّبها في صندوق المتمم اللي فات.', en: 'Try it in the complement box from earlier.' },
        { ar: 'مهم: قلب بس ما يكفيش، لازم تضيف 1.', en: 'Important: flipping is not enough, you must add 1.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2)، ص 77', en: 'Test Your Knowledge (2), p. 77' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'استخدم المتمم لحساب 1100 − 0111. إيه الناتج؟', en: 'Use complements to work out 1100 − 0111. What is the result?' },
          options: ['0101', '0111', '1001', '10101'],
          answer: 0,
          explanation: {
            ar: 'متمم 0111 هو 1001. نجمع: 1100 + 1001 = 10101. نتجاهل الرقم الأول فالناتج 0101 (يعني 12 − 7 = 5).',
            en: 'The complement of 0111 is 1001. Add: 1100 + 1001 = 10101. Ignore the leading digit, so the result is 0101 (that is 12 − 7 = 5).',
          },
          success: { ar: 'صح! 1100 − 0111 = 0101. +10 نقط', en: 'Correct! 1100 − 0111 = 0101. +10 pts' },
        },
      ],
      bito: [
        { ar: 'اتبع الخطوات التلاتة: متمم، جمع، تجاهل الحمل.', en: 'Follow the three steps: complement, add, drop the carry.' },
        { ar: 'تأكد بالعشري: 12 − 7 = 5.', en: 'Check in decimal: 12 − 7 = 5.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 6-6!', en: 'You finished lesson 6-6!' } },
        {
          type: 'recap',
          items: [
            { code: '1 → 0', text: { ar: 'اقلب البتات', en: 'flip the bits' } },
            { code: '+ 1', text: { ar: 'المتمم الثنائي', en: 'two’s complement' } },
            { code: 'a − b', text: { ar: 'a + متمم b', en: 'a + complement of b' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة الترتيب: رتّب الخطوات.', en: 'Well done! The ordering game: put the steps in order.' },
        { ar: 'ابدأ بالمتمم وبعدين الطرح كله.', en: 'Start with the complement, then the whole subtraction.' },
      ],
    },
  ],

  game: {
    kind: 'order',
    rounds: [
      {
        title: { ar: 'المتمم الثنائي', en: 'The two’s complement' },
        source: { ar: 'النقاط الرئيسية (أ-2)، ص 76', en: 'Key Points (a-2), p. 76' },
        steps: [
          { ar: 'اكتب الرقم الثنائي (0101)', en: 'Write the binary number (0101)' },
          { ar: 'اقلب كل بت (1010)', en: 'Flip every bit (1010)' },
          { ar: 'أضف 1 (1011)', en: 'Add 1 (1011)' },
        ],
      },
      {
        title: { ar: 'الطرح بالمتمم', en: 'Subtracting with a complement' },
        source: { ar: 'النقاط الرئيسية (ب)، ص 77', en: 'Key Points (b), p. 77' },
        steps: [
          { ar: 'جيب متمم الرقم المطروح', en: 'Find the complement of the number being subtracted' },
          { ar: 'اجمع المتمم على الرقم الأول', en: 'Add the complement to the first number' },
          { ar: 'تجاهل الرقم الزايد في أول الناتج', en: 'Ignore the extra digit at the start of the result' },
        ],
      },
      {
        title: { ar: 'مثال: 1000 − 0111', en: 'Example: 1000 − 0111' },
        source: { ar: 'مثال ص 77', en: 'Example, p. 77' },
        steps: [
          { ar: 'متمم 0111 هو 1001', en: 'The complement of 0111 is 1001' },
          { ar: 'نجمع 1000 + 1001 = 10001', en: 'Add 1000 + 1001 = 10001' },
          { ar: 'نتجاهل الرقم الأول فيبقى 0001', en: 'Ignore the leading digit, leaving 0001' },
        ],
      },
    ],
  },
};
