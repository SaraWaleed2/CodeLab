import { Lesson } from '@core/models';

/**
 * Lesson 6-4 "التمثيل الرقمي للأحرف" — ministry book pp. 70–73.
 * Book notes:
 * - The ASCII table is printed on pp.70–72; the site shows the codes it needs through the try-it box.
 * - The book's example: "Hello" = 48 65 6C 6C 6F (hex). p.72 key: 4C 6F 76 65 = "Love".
 * - The exercises on pp.72–73 are only partly keyed; only the Key Points are used where they settle the answer.
 */
export const LESSON_6_4: Lesson = {
  unitId: 6,
  id: '6-4',
  title: { ar: 'التمثيل الرقمي للأحرف', en: 'Digital Representation of Characters' },
  bookPages: '70 – 73',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! إزاي الكمبيوتر بيخزّن حرف زي A؟ بيخلّيه رقم!', en: 'Hi! How does a computer store a letter like A? It turns it into a number!' },
        { ar: 'في الآخر لعبة توصيل: وصّل كل حرف بكوده.', en: 'At the end there is a matching game: link each letter to its code.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1، 2)، ص 70', en: 'Key Points (a-1, 2), p. 70' },
      blocks: [
        { type: 'heading', text: { ar: 'كود الحرف', en: 'The character code' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'رمز الحرف', en: 'Character code' }, en: 'Character code', text: { ar: 'قيمة رقمية فريدة بتتعيّن لكل حرف أو رمز.', en: 'A unique numeric value given to each letter or symbol.' }, example: { ar: 'زي رقم المقعد في الفصل: كل طالب له رقم', en: 'Like a seat number in class: each student has one' } },
            { title: { ar: 'نظام رموز الأحرف', en: 'Character code system' }, en: 'Character code system', text: { ar: 'بيخلّي التحويلات بين الأحرف ورموزها الخاصة بها.', en: 'It sets the conversions between characters and their codes.' }, example: { ar: 'جدول بيقول كل حرف رقمه إيه', en: 'A table saying which number each letter has' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: حرف ← رقم ← 0 و 1', en: 'Remember: letter → number → 0s and 1s' } },
      ],
      bito: [
        { ar: 'الكمبيوتر مبيفهمش "A"، بيفهم رقمها.', en: 'A computer does not understand "A", it understands its number.' },
        { ar: 'والجدول هو اللي بيقول مين رقمه كام.', en: 'And the table says who has which number.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-2-1)، ص 70', en: 'Key Points (a-2-1), p. 70' },
      blocks: [
        { type: 'heading', text: { ar: 'كود ASCII', en: 'ASCII' }, code: '(ASCII)' },
        {
          type: 'cards',
          items: [
            { title: { ar: 'ASCII', en: 'ASCII' }, en: 'ASCII code', text: { ar: 'نظام ترميز للغة الإنجليزية فقط: الحروف (A–Z و a–z) والأرقام (0–9) والرموز الخاصة.', en: 'A coding system for English only: letters (A–Z, a–z), digits (0–9) and special symbols.' }, example: { ar: 'مفيش فيه عربي', en: 'It has no Arabic' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: ASCII = إنجليزي بس', en: 'Remember: ASCII = English only' } },
      ],
      bito: [
        { ar: 'ASCII بيغطي حروف الكيبورد الإنجليزي والأرقام والرموز.', en: 'ASCII covers the English keyboard letters, digits and symbols.' },
        { ar: 'وعشان العربي والياباني ندخل في Unicode.', en: 'For Arabic and Japanese we need Unicode.' },
      ],
    },
    {
      source: { ar: 'مثال Hello، ص 70', en: 'The "Hello" example, p. 70' },
      blocks: [
        { type: 'heading', text: { ar: 'جرّب الأكواد بنفسك', en: 'Try the codes yourself' } },
        {
          type: 'lead',
          text: { ar: 'كل حرف له كود ست عشري (وفي الكمبيوتر 8 بت). مثال الكتاب: Hello.', en: 'Each letter has a hexadecimal code (and 8 bits in the computer). The book’s example: Hello.' },
        },
        { type: 'char-lab', word: 'Hello' },
        { type: 'memo', text: { ar: 'افتكر: H = 48 · e = 65 · l = 6C · o = 6F', en: 'Remember: H = 48 · e = 65 · l = 6C · o = 6F' } },
      ],
      bito: [
        { ar: 'اكتب اسمك بالإنجليزي وشوف كل حرف رقمه كام.', en: 'Type your name in English and see each letter’s number.' },
        { ar: 'لاحظ: الحرف الكبير غير الصغير. H غير h.', en: 'Notice: a capital differs from a small letter. H is not h.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-2-2)، ص 70', en: 'Key Points (a-2-2), p. 70' },
      blocks: [
        { type: 'heading', text: { ar: 'Unicode', en: 'Unicode' }, code: '(Unicode)' },
        {
          type: 'cards',
          items: [
            { title: { ar: 'يونيكود', en: 'Unicode' }, en: 'Unicode', text: { ar: 'نظام ترميز بيعيّن رمز لكل حرف من أحرف العالم، فمفيش حرف من غير كود.', en: 'A coding system giving a code to every character in the world, so no character is left without one.' }, example: { ar: 'عربي، صيني، ياباني، وحتى الإيموجي', en: 'Arabic, Chinese, Japanese, even emoji' } },
            { title: { ar: 'تنويعات', en: 'Variants' }, text: { ar: 'فيه تنويعات منه زي UTF-8 و UTF-16.', en: 'It has variants such as UTF-8 and UTF-16.' }, example: { ar: 'نفس الفكرة بطرق تخزين مختلفة', en: 'The same idea with different ways of storing' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: Unicode = كل لغات العالم', en: 'Remember: Unicode = all the world’s languages' } },
      ],
      bito: [
        { ar: 'عشان كده تقدر تكتب عربي وإيموجي في نفس الرسالة.', en: 'That is why you can write Arabic and emoji in the same message.' },
        { ar: 'كل حرف في العالم ليه رقم في Unicode.', en: 'Every character in the world has a number in Unicode.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-3، 4، 5)، ص 70–71', en: 'Key Points (a-3, 4, 5), pp. 70–71' },
      blocks: [
        { type: 'heading', text: { ar: 'ترميز وفك ترميز', en: 'Encoding and decoding' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الترميز', en: 'Encoding' }, en: 'Encoding', text: { ar: 'تحويل سلسلة أحرف لرموزها (أكواد).', en: 'Turning a string of characters into their codes.' }, example: { ar: 'Hello ← 48 65 6C 6C 6F', en: 'Hello → 48 65 6C 6C 6F' } },
            { title: { ar: 'فك الترميز', en: 'Decoding' }, en: 'Decoding', text: { ar: 'العكس: من الأكواد للحروف.', en: 'The reverse: from codes back to characters.' }, example: { ar: '48 65 6C 6C 6F ← Hello', en: '48 65 6C 6C 6F → Hello' } },
            { tone: 'no', title: { ar: 'تلف الأحرف', en: 'Character corruption' }, en: 'Character corruption', text: { ar: 'ظاهرة بتحصل لما أسلوب الترميز وفك الترميز مش متطابقين، فتظهر أحرف غريبة.', en: 'It happens when the encoding and decoding methods do not match, so strange characters appear.' }, example: { ar: 'كلام عربي بيظهر رموز غريبة', en: 'Arabic text showing odd symbols' } },
            { title: { ar: 'الخط', en: 'Font' }, en: 'Font', text: { ar: 'بيانات شكل الحرف المقابلة لرمز الحرف. زي Sans-serif و Serif.', en: 'The shape data for a character that matches its code, like Sans-serif and Serif.' }, example: { ar: 'نفس الحرف بشكل مختلف في كل خط', en: 'The same letter looks different in each font' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: ترميز → فك → لو مش متطابقين = تلف', en: 'Remember: encode → decode → if they do not match = corruption' } },
      ],
      bito: [
        { ar: 'تخيّل تكتب بشفرة صديقك مبيعرفهاش: هيقرأ كلام غريب. ده تلف الأحرف.', en: 'Imagine writing in a code your friend does not know: he reads gibberish. That is character corruption.' },
        { ar: 'والخط هو شكل الحرف اللي بيظهر على الشاشة.', en: 'And the font is the shape of the letter you see on the screen.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2)، ص 71', en: 'Test Your Knowledge (2), p. 71' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'استخدم جدول ASCII: إيه كود الحرف "M" بالنظام الست عشري؟', en: 'Use the ASCII table: what is the hexadecimal code of the letter "M"?' },
          options: ['4C', '4D', '4E', '5D'],
          answer: 1,
          explanation: {
            ar: '"M" في الصف 0100 والعمود 1101 (D)، يعني 4D. وبالثنائي 01001101.',
            en: '"M" is in row 0100 and column 1101 (D), so 4D. In binary, 01001101.',
          },
          success: { ar: 'صح! M = 4D. +10 نقط', en: 'Correct! M = 4D. +10 pts' },
        },
      ],
      bito: [
        { ar: 'جرّب تكتب M في الصندوق اللي فاتت.', en: 'Try typing M in the box from earlier.' },
        { ar: 'L اللي قبله = 4C، وN اللي بعده = 4E.', en: 'L before it = 4C, and N after it = 4E.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (3)، ص 71–72', en: 'Test Your Knowledge (3), pp. 71–72' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه الكلمة اللي كودها الست عشري 4C 6F 76 65؟', en: 'Which word has the hexadecimal code 4C 6F 76 65?' },
          options: ['Live', 'Love', 'Lose', 'Lone'],
          answer: 1,
          explanation: {
            ar: '4C = L، و6F = o، و76 = v، و65 = e، فالكلمة هي Love.',
            en: '4C = L, 6F = o, 76 = v and 65 = e, so the word is Love.',
          },
          success: { ar: 'صح! 4C 6F 76 65 = Love. +10 نقط', en: 'Correct! 4C 6F 76 65 = Love. +10 pts' },
        },
      ],
      bito: [
        { ar: 'فك كل كود لوحده.', en: 'Decode each code on its own.' },
        { ar: 'اكتب الاختيارات في الصندوق وقارن الأكواد.', en: 'Type the options in the box and compare the codes.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-4)، ص 70', en: 'Key Points (a-4), p. 70' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه اسم الظاهرة اللي بتظهر فيها أحرف غريبة بسبب عدم تطابق أسلوب الترميز وفك الترميز؟', en: 'What is the phenomenon in which strange characters appear because the encoding and decoding methods do not match?' },
          options: [
            { ar: 'الترميز', en: 'Encoding' },
            { ar: 'تلف الأحرف', en: 'Character corruption' },
            { ar: 'الخط', en: 'Font' },
          ],
          answer: 1,
          explanation: {
            ar: 'تلف الأحرف بيحصل لما الترميز وفك الترميز مش متطابقين. الترميز هو تحويل الأحرف لأكواد، والخط هو شكل الحرف.',
            en: 'Character corruption happens when encoding and decoding do not match. Encoding turns characters into codes, and a font is the shape of the character.',
          },
          success: { ar: 'صح! عدم التطابق = تلف الأحرف. +10 نقط', en: 'Correct! A mismatch = character corruption. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الكلمة المفتاحية: "عدم التطابق".', en: 'The key phrase: "do not match".' },
        { ar: 'اللي بيظهر كلام غريب هو التلف.', en: 'The one that shows odd text is corruption.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 6-4!', en: 'You finished lesson 6-4!' } },
        {
          type: 'recap',
          items: [
            { code: 'ASCII', text: { ar: 'إنجليزي فقط', en: 'English only' } },
            { code: 'Unicode', text: { ar: 'كل اللغات', en: 'all languages' } },
            { code: '48 65 6C 6C 6F', text: { ar: 'Hello', en: 'Hello' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة التوصيل: المصطلحات والأكواد.', en: 'Well done! The matching game: terms and codes.' },
        { ar: 'وفي الجولة التانية وصّل الحرف بكوده.', en: 'In the second round link each letter to its code.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'المصطلح ومعناه', en: 'The term and its meaning' },
        source: { ar: 'النقاط الرئيسية (أ)، ص 70–71', en: 'Key Points (a), pp. 70–71' },
        pairs: [
          { left: { text: { ar: 'رمز الحرف', en: 'Character code' } }, right: { ar: 'قيمة رقمية فريدة لكل حرف', en: 'A unique number for each character' } },
          { left: { text: { ar: 'ASCII', en: 'ASCII' } }, right: { ar: 'ترميز للغة الإنجليزية فقط', en: 'A coding for English only' } },
          { left: { text: { ar: 'Unicode', en: 'Unicode' } }, right: { ar: 'ترميز لكل لغات العالم', en: 'A coding for all the world’s languages' } },
          { left: { text: { ar: 'الترميز', en: 'Encoding' } }, right: { ar: 'تحويل الأحرف لأكواد', en: 'Turning characters into codes' } },
          { left: { text: { ar: 'تلف الأحرف', en: 'Character corruption' } }, right: { ar: 'ظهور أحرف غريبة لعدم التطابق', en: 'Strange characters from a mismatch' } },
        ],
      },
      {
        title: { ar: 'الحرف وكوده الست عشري', en: 'The letter and its hexadecimal code' },
        source: { ar: 'مثال Hello ص 70 وجدول ASCII', en: 'The "Hello" example p. 70 and the ASCII table' },
        pairs: [
          { left: { text: { ar: 'H', en: 'H' } }, right: { ar: '48', en: '48' } },
          { left: { text: { ar: 'e', en: 'e' } }, right: { ar: '65', en: '65' } },
          { left: { text: { ar: 'l', en: 'l' } }, right: { ar: '6C', en: '6C' } },
          { left: { text: { ar: 'o', en: 'o' } }, right: { ar: '6F', en: '6F' } },
          { left: { text: { ar: 'M', en: 'M' } }, right: { ar: '4D', en: '4D' } },
        ],
      },
    ],
  },
};
