import { Lesson } from '@core/models';

/**
 * Lesson 6-3 "النظام السادس عشر (Hexadecimal)" — ministry book pp. 68–69.
 * Book notes:
 * - Answer key (p.69): 11011011₂ = DB₁₆, 11110110₂ = F6₁₆, 9E₁₆ = 10011110₂, A5₁₆ = 165₁₀.
 * - The book's example 10011010₂ = 9A₁₆ and A4₁₆ = 10100100₂, C6₁₆ = 198₁₀.
 */
export const LESSON_6_3: Lesson = {
  unitId: 6,
  id: '6-3',
  title: { ar: 'النظام السادس عشر', en: 'The Hexadecimal System' },
  bookPages: '68 – 69',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! الثنائي طويل ومتعب. النظام السادس عشر اختصار ذكي ليه.', en: 'Hi! Binary is long and tiring. Hexadecimal is a clever shortcut.' },
        { ar: 'في الآخر لعبة توصيل: وصّل كل رقم ثنائي برمزه.', en: 'At the end there is a matching game: link each binary number to its symbol.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ)، ص 68', en: 'Key Points (a), p. 68' },
      blocks: [
        { type: 'heading', text: { ar: 'النظام السادس عشر', en: 'The hexadecimal system' }, code: '(Hexadecimal)' },
        {
          type: 'lead',
          text: { ar: 'طريقة لتمثيل الأرقام باستخدام الأرقام 0 إلى 9 وحروف A إلى F. يعني 16 رمز.', en: 'A way of showing numbers using the digits 0 to 9 and the letters A to F. So 16 symbols.' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الأرقام', en: 'The digits' }, text: { ar: '0 1 2 3 4 5 6 7 8 9', en: '0 1 2 3 4 5 6 7 8 9' }, example: { ar: 'زي العشري بالظبط لحد 9', en: 'Just like decimal up to 9' } },
            { title: { ar: 'الحروف', en: 'The letters' }, text: { ar: 'A=10 · B=11 · C=12 · D=13 · E=14 · F=15', en: 'A=10 · B=11 · C=12 · D=13 · E=14 · F=15' }, example: { ar: 'بعد 9 بنكمل بحروف', en: 'After 9 we continue with letters' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: 0–9 ثم A–F (يعني 16 رمز)', en: 'Remember: 0–9 then A–F (that is 16 symbols)' } },
      ],
      bito: [
        { ar: 'ليه الحروف؟ لأن مفيش رقم واحد اسمه 10 أو 11 بخانة واحدة.', en: 'Why letters? Because there is no single-digit symbol for 10 or 11.' },
        { ar: 'فاستخدموا A و B وكده.', en: 'So they used A, B and so on.' },
      ],
    },
    {
      source: { ar: 'جدول التحويلات، ص 68', en: 'The conversion table, p. 68' },
      blocks: [
        { type: 'heading', text: { ar: 'العشري والثنائي والسادس عشر', en: 'Decimal, binary and hexadecimal' } },
        {
          type: 'compare',
          columns: [
            { ar: 'الثنائي', en: 'Binary' },
            { ar: 'السادس عشر', en: 'Hexadecimal' },
          ],
          rows: [
            { label: { ar: '9', en: '9' }, cells: [{ ar: '1001', en: '1001' }, { ar: '9', en: '9' }] },
            { label: { ar: '10', en: '10' }, cells: [{ ar: '1010', en: '1010' }, { ar: 'A', en: 'A' }] },
            { label: { ar: '11', en: '11' }, cells: [{ ar: '1011', en: '1011' }, { ar: 'B', en: 'B' }] },
            { label: { ar: '12', en: '12' }, cells: [{ ar: '1100', en: '1100' }, { ar: 'C', en: 'C' }] },
            { label: { ar: '13', en: '13' }, cells: [{ ar: '1101', en: '1101' }, { ar: 'D', en: 'D' }] },
            { label: { ar: '14', en: '14' }, cells: [{ ar: '1110', en: '1110' }, { ar: 'E', en: 'E' }] },
            { label: { ar: '15', en: '15' }, cells: [{ ar: '1111', en: '1111' }, { ar: 'F', en: 'F' }] },
            { label: { ar: '16', en: '16' }, cells: [{ ar: '10000', en: '10000' }, { ar: '10', en: '10' }] },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: كل رمز ست عشري = 4 بت', en: 'Remember: one hex symbol = 4 bits' } },
      ],
      bito: [
        { ar: 'الصف الأول هو الرقم العشري. بعده الثنائي، وبعده السادس عشر.', en: 'The first column is the decimal number. Next is binary, then hexadecimal.' },
        { ar: 'لاحظ: F أكبر رمز، وبعده 16 بيكتب 10.', en: 'Notice: F is the biggest symbol, and 16 is written as 10.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-1)، ص 68', en: 'Key Points (b-1), p. 68' },
      blocks: [
        { type: 'heading', text: { ar: 'من الثنائي للسادس عشر', en: 'From binary to hexadecimal' } },
        {
          type: 'lead',
          text: { ar: 'اقسم الرقم الثنائي لمجموعات كل واحدة 4 بت من اليمين، وحوّل كل مجموعة لرمز واحد.', en: 'Split the binary number into groups of 4 bits from the right, and turn each group into one symbol.' },
        },
        { type: 'hex-lab', binary: '10011010' },
        { type: 'memo', text: { ar: 'افتكر: 4 بت ← رمز واحد', en: 'Remember: 4 bits → one symbol' } },
      ],
      bito: [
        { ar: 'مثال الكتاب: 10011010 = 1001 و 1010، يعني 9 و A، فالناتج 9A.', en: 'The book’s example: 10011010 = 1001 and 1010, so 9 and A, giving 9A.' },
        { ar: 'غيّر الأرقام في الخانة وشوف الناتج بيتغير إزاي.', en: 'Change the digits in the box and watch the result change.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-2)، ص 68', en: 'Key Points (b-2), p. 68' },
      blocks: [
        { type: 'heading', text: { ar: 'من السادس عشر للثنائي', en: 'From hexadecimal to binary' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'خطوة 1', en: 'Step 1' }, text: { ar: 'حوّل كل رمز لـ 4 بت.', en: 'Turn each symbol into 4 bits.' }, example: { ar: 'A ← 1010', en: 'A → 1010' } },
            { title: { ar: 'خطوة 2', en: 'Step 2' }, text: { ar: 'رتّبها بنفس ترتيب الرموز.', en: 'Put them in the same order as the symbols.' }, example: { ar: '4 ← 0100', en: '4 → 0100' } },
            { title: { ar: 'الناتج', en: 'Result' }, text: { ar: 'A4 = 1010 0100.', en: 'A4 = 1010 0100.' }, example: { ar: 'مثال الكتاب: A4 = 10100100', en: 'The book’s example: A4 = 10100100' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: رمز واحد ← 4 بت', en: 'Remember: one symbol → 4 bits' } },
      ],
      bito: [
        { ar: 'نفس الحركة بالعكس: بدل ما نجمّع 4 بت، بنفرد رمز لـ 4 بت.', en: 'The same move in reverse: instead of grouping 4 bits, we spread a symbol into 4 bits.' },
        { ar: 'مهم: لازم كل رمز يطلع 4 أرقام بالظبط (صفر على الشمال لو لزم).', en: 'Important: each symbol must give exactly 4 digits (a zero on the left if needed).' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-3)، ص 68', en: 'Key Points (b-3), p. 68' },
      blocks: [
        { type: 'heading', text: { ar: 'من السادس عشر للعشري', en: 'From hexadecimal to decimal' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'خطوة 1', en: 'Step 1' }, text: { ar: 'حوّل الرمز لثنائي.', en: 'Turn the symbol into binary.' }, example: { ar: 'C6 = 1100 0110', en: 'C6 = 1100 0110' } },
            { title: { ar: 'خطوة 2', en: 'Step 2' }, text: { ar: 'حوّل الثنائي لعشري بقيم الخانات.', en: 'Turn the binary into decimal with the place values.' }, example: { ar: '128 + 64 + 4 + 2 = 198', en: '128 + 64 + 4 + 2 = 198' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: ست عشري ← ثنائي ← عشري', en: 'Remember: hex → binary → decimal' } },
      ],
      bito: [
        { ar: 'مثال الكتاب: C6 = 198، وده بيظهر في ألوان الصور الرقمية.', en: 'The book’s example: C6 = 198, which shows up in digital image colours.' },
        { ar: 'الثنائي هو الجسر بين الاتنين.', en: 'Binary is the bridge between the two.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 69', en: 'Test Your Knowledge (1), p. 69' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'حوّل 11011011 (ثنائي) للنظام السادس عشر.', en: 'Convert 11011011 (binary) to hexadecimal.' },
          options: ['CB', 'DB', 'DA', 'D3'],
          answer: 1,
          explanation: {
            ar: '1101 = D و 1011 = B، فالناتج DB.',
            en: '1101 = D and 1011 = B, so the result is DB.',
          },
          success: { ar: 'صح! 1101 = D و 1011 = B. +10 نقط', en: 'Correct! 1101 = D and 1011 = B. +10 pts' },
        },
      ],
      bito: [
        { ar: 'اقسمه نصين: 1101 | 1011.', en: 'Split it in half: 1101 | 1011.' },
        { ar: 'وبص على الجدول: 1101 بيساوي 13.', en: 'And check the table: 1101 is 13.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 69', en: 'Test Your Knowledge (1), p. 69' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'حوّل 9E (ست عشري) إلى النظام الثنائي.', en: 'Convert 9E (hexadecimal) to binary.' },
          options: ['10011110', '10010110', '10011100', '01101110'],
          answer: 0,
          explanation: {
            ar: '9 = 1001 و E = 1110، فالناتج 10011110.',
            en: '9 = 1001 and E = 1110, so the result is 10011110.',
          },
          success: { ar: 'صح! 9 = 1001 و E = 1110. +10 نقط', en: 'Correct! 9 = 1001 and E = 1110. +10 pts' },
        },
      ],
      bito: [
        { ar: 'كل رمز بيبقى 4 بت. 9 أولًا.', en: 'Each symbol becomes 4 bits. 9 first.' },
        { ar: 'وE هو 14 يعني 1110.', en: 'And E is 14, so 1110.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2)، ص 69', en: 'Test Your Knowledge (2), p. 69' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'حوّل A5 (ست عشري) إلى النظام العشري.', en: 'Convert A5 (hexadecimal) to decimal.' },
          options: ['155', '165', '175', '185'],
          answer: 1,
          explanation: {
            ar: 'A5 = 1010 0101 = 128 + 32 + 4 + 1 = 165.',
            en: 'A5 = 1010 0101 = 128 + 32 + 4 + 1 = 165.',
          },
          success: { ar: 'صح! A5 = 165. +10 نقط', en: 'Correct! A5 = 165. +10 pts' },
        },
      ],
      bito: [
        { ar: 'حوّلها ثنائي الأول: A = 1010 و 5 = 0101.', en: 'Make it binary first: A = 1010 and 5 = 0101.' },
        { ar: 'بعدين اجمع قيم الخانات اللي فيها 1.', en: 'Then add the place values that have a 1.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 6-3!', en: 'You finished lesson 6-3!' } },
        {
          type: 'recap',
          items: [
            { code: '16', text: { ar: 'رمز', en: 'symbols' } },
            { code: 'A–F', text: { ar: '10 لـ 15', en: '10 to 15' } },
            { code: '4 bit', text: { ar: 'يساوي رمز', en: 'equals one symbol' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة التوصيل: وصّل كل مجموعة بت برمزها.', en: 'Well done! The matching game: link each bit group to its symbol.' },
        { ar: 'استعن بالجدول لو احتجت.', en: 'Use the table if you need it.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: '4 بت ورمزها', en: '4 bits and their symbol' },
        source: { ar: 'جدول التحويلات، ص 68', en: 'The conversion table, p. 68' },
        pairs: [
          { left: { text: { ar: '1001', en: '1001' } }, right: { ar: '9', en: '9' } },
          { left: { text: { ar: '1010', en: '1010' } }, right: { ar: 'A', en: 'A' } },
          { left: { text: { ar: '1100', en: '1100' } }, right: { ar: 'C', en: 'C' } },
          { left: { text: { ar: '1110', en: '1110' } }, right: { ar: 'E', en: 'E' } },
          { left: { text: { ar: '1111', en: '1111' } }, right: { ar: 'F', en: 'F' } },
        ],
      },
      {
        title: { ar: 'رقم بايت ورمزه الست عشري', en: 'A byte and its hexadecimal form' },
        source: { ar: 'مثال ص 68 وحل ص 69', en: 'The example p. 68 and the solution p. 69' },
        pairs: [
          { left: { text: { ar: '10011010', en: '10011010' } }, right: { ar: '9A', en: '9A' } },
          { left: { text: { ar: '11011011', en: '11011011' } }, right: { ar: 'DB', en: 'DB' } },
          { left: { text: { ar: '11110110', en: '11110110' } }, right: { ar: 'F6', en: 'F6' } },
          { left: { text: { ar: '10100101', en: '10100101' } }, right: { ar: 'A5', en: 'A5' } },
        ],
      },
    ],
  },
};
