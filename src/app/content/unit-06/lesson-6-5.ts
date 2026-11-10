import { Lesson } from '@core/models';

/**
 * Lesson 6-5 "العمليات الحسابية [1]" — ministry book pp. 74–75.
 * Book notes:
 * - Answer key (p.74): 1010 + 0101 = 1111 and 0011 + 1011 = 1110. p.75 gives 1011 − 0101 = 0110 and 1101 − 1010 = 0011.
 * - The exercises on p.75 have no answer key and are not used.
 */
export const LESSON_6_5: Lesson = {
  unitId: 6,
  id: '6-5',
  title: { ar: 'العمليات الحسابية (١): جمع وطرح الأعداد الثنائية', en: 'Arithmetic (1): Adding and Subtracting Binary Numbers' },
  bookPages: '74 – 75',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! هنجمع ونطرح بالثنائي. وهتلاقيه نفس العشري بالظبط.', en: 'Hi! We will add and subtract in binary. You will find it is just like decimal.' },
        { ar: 'في الآخر لعبة توصيل: وصّل كل عملية بناتجها.', en: 'At the end there is a matching game: link each sum to its result.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 74', en: 'Key Points, p. 74' },
      blocks: [
        { type: 'heading', text: { ar: 'الجمع الثنائي', en: 'Binary addition' } },
        {
          type: 'lead',
          text: { ar: 'بنجمع الأرقام الثنائية رقم رقم من اليمين، تمامًا زي العشري. وفيه 4 قواعد بس:', en: 'We add binary numbers digit by digit from the right, just like decimal. There are only 4 rules:' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: '0 + 0 = 0', en: '0 + 0 = 0' }, text: { ar: 'مفيش حاجة.', en: 'Nothing.' } },
            { title: { ar: '0 + 1 = 1', en: '0 + 1 = 1' }, text: { ar: 'واحد.', en: 'One.' } },
            { title: { ar: '1 + 1 = 10', en: '1 + 1 = 10' }, text: { ar: 'اتنين بالثنائي بتتكتب 10: نكتب 0 ونحمل 1.', en: 'Two in binary is written 10: write 0 and carry 1.' } },
            { title: { ar: '1 + 1 + 1 = 11', en: '1 + 1 + 1 = 11' }, text: { ar: 'تلاتة بتتكتب 11: نكتب 1 ونحمل 1.', en: 'Three is written 11: write 1 and carry 1.' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: 1 + 1 = 10 (اكتب 0 واحمل 1)', en: 'Remember: 1 + 1 = 10 (write 0, carry 1)' } },
      ],
      bito: [
        { ar: 'في العشري لما تجمع 9 + 1 بتحمل. في الثنائي بنحمل أول ما نوصل لـ 2.', en: 'In decimal you carry when you reach 10. In binary we carry as soon as we reach 2.' },
        { ar: 'القاعدة التالتة هي الأهم: 1 + 1 = 10.', en: 'The third rule matters most: 1 + 1 = 10.' },
      ],
    },
    {
      source: { ar: 'مثال الكتاب، ص 74', en: 'The book’s example, p. 74' },
      blocks: [
        { type: 'heading', text: { ar: 'جرّب الجمع بنفسك', en: 'Try adding yourself' } },
        {
          type: 'lead',
          text: { ar: 'مثال الكتاب: 0101 + 1001. السهم الأحمر هو الحمل (Carry).', en: 'The book’s example: 0101 + 1001. The pink digit is the carry.' },
        },
        { type: 'bin-add', a: '0101', b: '1001' },
        { type: 'memo', text: { ar: 'افتكر: اجمع من اليمين، واحمل 1 للخانة اللي بعدها', en: 'Remember: add from the right, carry 1 to the next column' } },
      ],
      bito: [
        { ar: 'غيّر الرقمين وشوف الحمل بيتحرك إزاي.', en: 'Change the two numbers and watch the carry move.' },
        { ar: 'جرّب 1010 + 0101، ده سؤال في الكتاب.', en: 'Try 1010 + 0101, it is a question in the book.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2)، ص 74', en: 'Key Points (2), p. 74' },
      blocks: [
        { type: 'heading', text: { ar: 'الطرح الثنائي', en: 'Binary subtraction' } },
        {
          type: 'cards',
          items: [
            { title: { ar: '0 − 0 = 0', en: '0 − 0 = 0' }, text: { ar: 'مفيش حاجة.', en: 'Nothing.' } },
            { title: { ar: '1 − 0 = 1', en: '1 − 0 = 1' }, text: { ar: 'واحد.', en: 'One.' } },
            { title: { ar: '1 − 1 = 0', en: '1 − 1 = 0' }, text: { ar: 'صفر.', en: 'Zero.' } },
            { title: { ar: '10 − 1 = 1', en: '10 − 1 = 1' }, text: { ar: 'لما المطروح منه صغير (0) بنستلف 2 من الخانة اللي على الشمال.', en: 'When the top digit is too small (0), we borrow 2 from the column on the left.' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: 0 − 1 مينفعش، نستلف 1 من الشمال فيبقى 10', en: 'Remember: 0 − 1 is not possible, borrow 1 from the left so it becomes 10' } },
      ],
      bito: [
        { ar: 'الاستلاف زي بالظبط ما بتستلف 10 من خانة العشرات في العشري.', en: 'Borrowing is exactly like borrowing 10 from the tens column in decimal.' },
        { ar: 'الفرق إننا بنستلف 2 مش 10.', en: 'The difference is we borrow 2, not 10.' },
      ],
    },
    {
      source: { ar: 'مثال الطرح، ص 74', en: 'The subtraction example, p. 74' },
      blocks: [
        { type: 'heading', text: { ar: 'مثال الطرح', en: 'A subtraction example' } },
        {
          type: 'cards',
          items: [
            { title: { ar: '1010 − 0110', en: '1010 − 0110' }, text: { ar: 'من اليمين: 0 − 0 = 0.', en: 'From the right: 0 − 0 = 0.' }, example: { ar: 'الخانة الأولى: 0', en: 'First column: 0' } },
            { title: { ar: 'الخانة التانية', en: 'Second column' }, text: { ar: '1 − 1 = 0.', en: '1 − 1 = 0.' }, example: { ar: 'الخانة التانية: 0', en: 'Second column: 0' } },
            { title: { ar: 'الخانة التالتة', en: 'Third column' }, text: { ar: '0 − 1 مينفعش: نستلف 1 من الخانة الأخيرة فتبقى 10 − 1 = 1.', en: '0 − 1 is not possible: borrow from the last column so 10 − 1 = 1.' }, example: { ar: 'الخانة التالتة: 1', en: 'Third column: 1' } },
            { title: { ar: 'الناتج', en: 'Result' }, text: { ar: '1010 − 0110 = 0100.', en: '1010 − 0110 = 0100.' }, example: { ar: 'أي 10 − 6 = 4 بالعشري', en: 'That is 10 − 6 = 4 in decimal' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: استلفنا مرة، والناتج 0100 (يعني 4)', en: 'Remember: we borrowed once, and the result is 0100 (that is 4)' } },
      ],
      bito: [
        { ar: 'تأكد بالعشري: 1010 = 10 و 0110 = 6، فالفرق 4 = 0100.', en: 'Check in decimal: 1010 = 10 and 0110 = 6, so the difference 4 = 0100.' },
        { ar: 'يعني الحساب صح.', en: 'So the working is right.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 74', en: 'Test Your Knowledge (1), p. 74' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه ناتج 1010 + 0101 (ثنائي)؟', en: 'What is 1010 + 0101 (binary)?' },
          options: ['1111', '1110', '1011', '10101'],
          answer: 0,
          explanation: {
            ar: 'من اليمين: 0 + 1 = 1، 1 + 0 = 1، 0 + 1 = 1، 1 + 0 = 1، فالناتج 1111 (يعني 10 + 5 = 15).',
            en: 'From the right: 0 + 1 = 1, 1 + 0 = 1, 0 + 1 = 1, 1 + 0 = 1, so the result is 1111 (that is 10 + 5 = 15).',
          },
          success: { ar: 'صح! 1010 + 0101 = 1111. +10 نقط', en: 'Correct! 1010 + 0101 = 1111. +10 pts' },
        },
      ],
      bito: [
        { ar: 'جرّبها في آلة الجمع اللي فاتت.', en: 'Try it in the adder from earlier.' },
        { ar: 'مفيش حمل في السؤال ده.', en: 'There is no carry in this one.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2)، ص 74', en: 'Test Your Knowledge (2), p. 74' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه ناتج 0011 + 1011 (ثنائي)؟', en: 'What is 0011 + 1011 (binary)?' },
          options: ['1110', '1111', '1100', '10110'],
          answer: 0,
          explanation: {
            ar: 'من اليمين: 1 + 1 = 10 (اكتب 0 واحمل 1)، 1 + 1 + 1 = 11 (اكتب 1 واحمل 1)، 0 + 0 + 1 = 1، 0 + 1 = 1. الناتج 1110.',
            en: 'From the right: 1 + 1 = 10 (write 0, carry 1), 1 + 1 + 1 = 11 (write 1, carry 1), 0 + 0 + 1 = 1, 0 + 1 = 1. The result is 1110.',
          },
          success: { ar: 'صح! 0011 + 1011 = 1110. +10 نقط', en: 'Correct! 0011 + 1011 = 1110. +10 pts' },
        },
      ],
      bito: [
        { ar: 'فيه حمل مرتين هنا. راقب الأسهم في الآلة.', en: 'There are two carries here. Watch the pink digits in the adder.' },
        { ar: '3 + 11 = 14 بالعشري.', en: '3 + 11 = 14 in decimal.' },
      ],
    },
    {
      source: { ar: 'جرب بنفسك (1)، ص 75', en: 'Try It Yourself (1), p. 75' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه ناتج 1011 − 0101 (ثنائي)؟', en: 'What is 1011 − 0101 (binary)?' },
          options: ['0110', '0101', '1010', '0111'],
          answer: 0,
          explanation: {
            ar: 'بعد الاستلاف الناتج 0110 (يعني 11 − 5 = 6).',
            en: 'After borrowing the result is 0110 (that is 11 − 5 = 6).',
          },
          success: { ar: 'صح! 1011 − 0101 = 0110. +10 نقط', en: 'Correct! 1011 − 0101 = 0110. +10 pts' },
        },
      ],
      bito: [
        { ar: 'تأكد بالعشري: 11 − 5.', en: 'Check it in decimal: 11 − 5.' },
        { ar: 'الناتج 6 = 0110.', en: 'The result is 6 = 0110.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 6-5!', en: 'You finished lesson 6-5!' } },
        {
          type: 'recap',
          items: [
            { code: '1+1=10', text: { ar: 'نحمل 1', en: 'carry 1' } },
            { code: '0−1', text: { ar: 'نستلف', en: 'borrow' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة التوصيل: وصّل كل عملية بناتجها.', en: 'Well done! The matching game: link each operation to its result.' },
        { ar: 'الجولة التانية فيها العمليات من الكتاب.', en: 'The second round has the operations from the book.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'قواعد الجمع', en: 'The addition rules' },
        source: { ar: 'النقاط الرئيسية (1)، ص 74', en: 'Key Points (1), p. 74' },
        pairs: [
          { left: { text: { ar: '0 + 0', en: '0 + 0' } }, right: { ar: '0', en: '0' } },
          { left: { text: { ar: '0 + 1', en: '0 + 1' } }, right: { ar: '1', en: '1' } },
          { left: { text: { ar: '1 + 1', en: '1 + 1' } }, right: { ar: '10 (اكتب 0 واحمل 1)', en: '10 (write 0, carry 1)' } },
          { left: { text: { ar: '1 + 1 + 1', en: '1 + 1 + 1' } }, right: { ar: '11 (اكتب 1 واحمل 1)', en: '11 (write 1, carry 1)' } },
        ],
      },
      {
        title: { ar: 'عمليات الكتاب', en: 'The book’s operations' },
        source: { ar: 'ص 74–75', en: 'pp. 74–75' },
        pairs: [
          { left: { text: { ar: '0101 + 1001', en: '0101 + 1001' } }, right: { ar: '1110', en: '1110' } },
          { left: { text: { ar: '1010 + 0101', en: '1010 + 0101' } }, right: { ar: '1111', en: '1111' } },
          { left: { text: { ar: '1010 − 0110', en: '1010 − 0110' } }, right: { ar: '0100', en: '0100' } },
          { left: { text: { ar: '1011 − 0101', en: '1011 − 0101' } }, right: { ar: '0110', en: '0110' } },
          { left: { text: { ar: '1101 − 1010', en: '1101 − 1010' } }, right: { ar: '0011', en: '0011' } },
        ],
      },
    ],
  },
};
