import { Lesson } from '@core/models';

/**
 * Lesson 7-3 "الدوائر المنطقية" — ministry book pp. 103–106.
 * Book notes:
 * - p.103: AND outputs 1 only when all inputs are 1; OR outputs 1 when at least one input is 1; NOT outputs the opposite.
 * - p.104: the half-adder table: (A,B) → (C,S): (0,0)→(0,0), (0,1)→(0,1), (1,0)→(0,1), (1,1)→(1,0);
 *   built from AND, OR and NOT. The full adder takes a carry-in from the lower bit.
 * - The exercises on pp.104–106 ask students to build truth tables; only the first one (AND) has a printed solution.
 */
export const LESSON_7_3: Lesson = {
  unitId: 7,
  id: '7-3',
  title: { ar: 'الدوائر المنطقية', en: 'Logic Circuits' },
  bookPages: '103 – 106',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! جوه الكمبيوتر دوائر بتاخد 0 و 1 وتطلّع 0 و 1. دي الدوائر المنطقية.', en: 'Hi! Inside a computer, circuits take 0s and 1s and output 0s and 1s. These are logic circuits.' },
        { ar: 'في الآخر لعبة توصيل: وصّل كل بوابة بقاعدتها.', en: 'At the end there is a matching game: link each gate to its rule.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1 إلى 3)، ص 103', en: 'Key Points (a-1 to 3), p. 103' },
      blocks: [
        { type: 'heading', text: { ar: 'العمليات المنطقية', en: 'Logical operations' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'العمليات المنطقية', en: 'Logical operations' }, en: 'Logical operations', text: { ar: 'عمليات بتتنفذ بأرقام 0 و 1. الـ 1 معناه "صح" (true) والـ 0 معناه "غلط" (false).', en: 'Operations done with the numbers 0 and 1. A 1 means "true" and a 0 means "false".' }, example: { ar: 'زي مفتاح النور: شغّال (1) أو مطفي (0)', en: 'Like a light switch: on (1) or off (0)' } },
            { title: { ar: 'الدائرة المنطقية', en: 'Logic circuit' }, en: 'Logic circuit', text: { ar: 'دائرة مصممة لأداء عملية منطقية.', en: 'A circuit designed to do a logical operation.' }, example: { ar: 'جوه المعالج ملايين منها', en: 'Millions of them inside a processor' } },
            { title: { ar: 'جدول الصواب', en: 'Truth table' }, en: 'Truth table', text: { ar: 'جدول بيوضح كل المجموعات الممكنة للمدخلات والمخرجات في الدائرة.', en: 'A table showing every possible combination of inputs and outputs of a circuit.' }, example: { ar: 'زي جدول جواب لكل احتمال', en: 'Like an answer sheet for every possibility' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: 1 = صح · 0 = غلط', en: 'Remember: 1 = true · 0 = false' } },
      ],
      bito: [
        { ar: 'الكمبيوتر بيقرر كل حاجة بصح وغلط، يعني 1 و 0.', en: 'A computer decides everything with true and false, meaning 1 and 0.' },
        { ar: 'وجدول الصواب بيجمع كل الاحتمالات.', en: 'And a truth table lists every possibility.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-4)، ص 103', en: 'Key Points (a-4), p. 103' },
      blocks: [
        { type: 'heading', text: { ar: 'بوابة AND (و)', en: 'The AND gate' }, code: '(AND)' },
        {
          type: 'lead',
          text: { ar: 'بتطلّع 1 بس لما كل المدخلات تكون 1. زي ما تقول: "هطلع لو خلصت المذاكرة و كمان خلصت الأكل".', en: 'It outputs 1 only when all the inputs are 1. Like saying: "I will go out if I finished studying AND finished eating".' },
        },
        {
          type: 'compare',
          columns: [{ ar: 'المخرج X', en: 'Output X' }],
          rows: [
            { label: { ar: 'A=0 , B=0', en: 'A=0 , B=0' }, cells: [{ ar: '0', en: '0' }] },
            { label: { ar: 'A=0 , B=1', en: 'A=0 , B=1' }, cells: [{ ar: '0', en: '0' }] },
            { label: { ar: 'A=1 , B=0', en: 'A=1 , B=0' }, cells: [{ ar: '0', en: '0' }] },
            { label: { ar: 'A=1 , B=1', en: 'A=1 , B=1' }, cells: [{ ar: '1', en: '1' }] },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: AND = لازم الاتنين 1', en: 'Remember: AND = both must be 1' } },
      ],
      bito: [
        { ar: 'مفتاحين على التوالي: النور مبيشتغلش إلا لو الاتنين شغّالين.', en: 'Two switches in a row: the light only works if both are on.' },
        { ar: 'ركّز: 1 واحدة بس في الجدول.', en: 'Notice: only one 1 in the table.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-5)، ص 103', en: 'Key Points (a-5), p. 103' },
      blocks: [
        { type: 'heading', text: { ar: 'بوابة OR (أو)', en: 'The OR gate' }, code: '(OR)' },
        {
          type: 'lead',
          text: { ar: 'بتطلّع 1 لو فيه مدخل واحد على الأقل 1. زي: "هعدّي بالعربية أو بالمترو، أي واحدة فيهم تكفي".', en: 'It outputs 1 if at least one input is 1. Like: "I will go by car OR by metro, either is fine".' },
        },
        {
          type: 'compare',
          columns: [{ ar: 'المخرج X', en: 'Output X' }],
          rows: [
            { label: { ar: 'A=0 , B=0', en: 'A=0 , B=0' }, cells: [{ ar: '0', en: '0' }] },
            { label: { ar: 'A=0 , B=1', en: 'A=0 , B=1' }, cells: [{ ar: '1', en: '1' }] },
            { label: { ar: 'A=1 , B=0', en: 'A=1 , B=0' }, cells: [{ ar: '1', en: '1' }] },
            { label: { ar: 'A=1 , B=1', en: 'A=1 , B=1' }, cells: [{ ar: '1', en: '1' }] },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: OR = يكفي واحد 1', en: 'Remember: OR = one 1 is enough' } },
      ],
      bito: [
        { ar: 'مفتاحين على التوازي: أي واحد فيهم يشغّل النور.', en: 'Two switches side by side: either one turns the light on.' },
        { ar: 'الصفر الوحيد لما الاتنين 0.', en: 'The only 0 is when both are 0.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-6)، ص 103', en: 'Key Points (a-6), p. 103' },
      blocks: [
        { type: 'heading', text: { ar: 'بوابة NOT (لا)', en: 'The NOT gate' }, code: '(NOT)' },
        {
          type: 'lead',
          text: { ar: 'بتطلّع عكس المدخل: لو دخلت 1 تطلّع 0، ولو دخلت 0 تطلّع 1.', en: 'It outputs the opposite of the input: put in 1 and it gives 0, put in 0 and it gives 1.' },
        },
        {
          type: 'compare',
          columns: [{ ar: 'المخرج X', en: 'Output X' }],
          rows: [
            { label: { ar: 'A=0', en: 'A=0' }, cells: [{ ar: '1', en: '1' }] },
            { label: { ar: 'A=1', en: 'A=1' }, cells: [{ ar: '0', en: '0' }] },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: NOT = اقلب', en: 'Remember: NOT = flip it' } },
      ],
      bito: [
        { ar: 'زي زرار "عكس": اللي مفتوح يتقفل واللي مقفول يتفتح.', en: 'Like an "invert" button: open becomes closed and closed becomes open.' },
        { ar: 'وبتبقى بدايرة صغيرة عند طرف المثلث في الرسم.', en: 'It has a small circle at the tip of the triangle in the drawing.' },
      ],
    },
    {
      source: { ar: 'بوابات AND وOR وNOT، ص 103', en: 'The AND, OR and NOT gates, p. 103' },
      blocks: [
        { type: 'heading', text: { ar: 'جرّب البوابات بنفسك', en: 'Try the gates yourself' } },
        { type: 'logic-lab' },
        { type: 'memo', text: { ar: 'افتكر: AND لازم الاتنين · OR يكفي واحد · NOT عكس', en: 'Remember: AND both · OR one is enough · NOT the opposite' } },
      ],
      bito: [
        { ar: 'غيّر A و B وراقب البوابات التلاتة مع بعض.', en: 'Change A and B and watch all three gates together.' },
        { ar: 'لما A = 1 و B = 1 كل من AND و OR بيطلّع 1.', en: 'When A = 1 and B = 1 both AND and OR output 1.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب)، ص 104', en: 'Key Points (b), p. 104' },
      blocks: [
        { type: 'heading', text: { ar: 'دائرة الجمع النصفي', en: 'The half adder' }, code: '(Half adder)' },
        {
          type: 'lead',
          text: { ar: 'دائرة بتجمع رقمين ثنائيين من بت واحد، وبتتكون من بوابات AND و OR و NOT. بتطلّع المجموع (S) والحمل (C).', en: 'A circuit that adds two one-bit binary numbers, built from AND, OR and NOT gates. It outputs the sum (S) and the carry (C).' },
        },
        { type: 'adder-lab' },
        { type: 'memo', text: { ar: 'افتكر: C = A AND B · S = جمع من غير الحمل', en: 'Remember: C = A AND B · S = the sum without the carry' } },
      ],
      bito: [
        { ar: 'جرّب 1 + 1: المجموع 0 والحمل 1، يعني 10 بالثنائي زي الوحدة 6.', en: 'Try 1 + 1: sum 0 and carry 1, that is 10 in binary, just like Unit 6.' },
        { ar: 'الحمل (C) هو نتيجة AND بين الرقمين.', en: 'The carry (C) is the AND of the two inputs.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-2)، ص 104', en: 'Key Points (b-2), p. 104' },
      blocks: [
        { type: 'heading', text: { ar: 'دائرة الجمع الكامل', en: 'The full adder' }, code: '(Full adder)' },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الجمع الكامل', en: 'Full adder' }, en: 'Full adder circuit', text: { ar: 'زي النصفي، بس بتاخد كمان الحمل (Cin) من البت الأصغر.', en: 'Like the half adder, but it also takes the carry (Cin) from the lower bit.' }, example: { ar: 'نصفين + بوابة OR = كامل', en: 'Two halves + an OR gate = a full adder' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: كامل = نصفي + نصفي + OR', en: 'Remember: full = half + half + OR' } },
      ],
      bito: [
        { ar: 'عشان نجمع أرقام أطول من بت واحد، بنوصّل دوائر كاملة ورا بعض.', en: 'To add numbers longer than one bit, we chain full adders one after another.' },
        { ar: 'كده الكمبيوتر بيجمع أي رقمين.', en: 'That is how a computer adds any two numbers.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 104', en: 'Test Your Knowledge (1), p. 104' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'بوابة AND، مدخلها A = 1 و B = 0. كام المخرج X؟', en: 'An AND gate has inputs A = 1 and B = 0. What is the output X?' },
          options: ['0', '1'],
          answer: 0,
          explanation: {
            ar: 'AND بتطلّع 1 بس لما كل المدخلات 1. هنا B = 0 فالمخرج 0.',
            en: 'AND outputs 1 only when all inputs are 1. Here B = 0, so the output is 0.',
          },
          success: { ar: 'صح! AND يلزمها الاتنين 1. +10 نقط', en: 'Correct! AND needs both to be 1. +10 pts' },
        },
      ],
      bito: [
        { ar: 'جرّب A = 1 و B = 0 في معمل البوابات.', en: 'Try A = 1 and B = 0 in the gates lab.' },
        { ar: 'مدخل واحد بصفر كفاية يخلي AND صفر.', en: 'One 0 input is enough to make AND zero.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-5)، ص 103', en: 'Key Points (a-5), p. 103' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'بوابة OR، مدخلها A = 0 و B = 1. كام المخرج X؟', en: 'An OR gate has inputs A = 0 and B = 1. What is the output X?' },
          options: ['0', '1'],
          answer: 1,
          explanation: {
            ar: 'OR بتطلّع 1 لو فيه مدخل واحد على الأقل 1. هنا B = 1 فالمخرج 1.',
            en: 'OR outputs 1 if at least one input is 1. Here B = 1, so the output is 1.',
          },
          success: { ar: 'صح! OR يكفيها واحد. +10 نقط', en: 'Correct! OR needs just one. +10 pts' },
        },
      ],
      bito: [
        { ar: 'OR = "أو". واحد يكفي.', en: 'OR means "or". One is enough.' },
        { ar: 'الصفر الوحيد لما الاتنين صفر.', en: 'The only zero is when both are zero.' },
      ],
    },
    {
      source: { ar: 'جدول الجمع النصفي، ص 104', en: 'The half-adder table, p. 104' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'في دائرة الجمع النصفي، المدخلان A = 1 و B = 1. كام الحمل C والمجموع S؟', en: 'In a half adder, the inputs are A = 1 and B = 1. What are the carry C and the sum S?' },
          options: [
            { ar: 'C = 0 و S = 1', en: 'C = 0 and S = 1' },
            { ar: 'C = 1 و S = 0', en: 'C = 1 and S = 0' },
            { ar: 'C = 1 و S = 1', en: 'C = 1 and S = 1' },
          ],
          answer: 1,
          explanation: {
            ar: '1 + 1 = 10 بالثنائي: المجموع 0 والحمل 1.',
            en: '1 + 1 = 10 in binary: the sum is 0 and the carry is 1.',
          },
          success: { ar: 'صح! 1 + 1 = 10. +10 نقط', en: 'Correct! 1 + 1 = 10. +10 pts' },
        },
      ],
      bito: [
        { ar: 'جرّبها في دائرة الجمع النصفي اللي فاتت.', en: 'Try it in the half adder from earlier.' },
        { ar: 'نفس قاعدة 1 + 1 = 10 اللي اتعلمتها.', en: 'The same rule 1 + 1 = 10 you learned.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 7-3 والوحدة 7!', en: 'You finished lesson 7-3 and Unit 7!' } },
        {
          type: 'recap',
          items: [
            { code: 'AND', text: { ar: 'الاتنين 1', en: 'both 1' } },
            { code: 'OR', text: { ar: 'يكفي 1', en: 'one 1 is enough' } },
            { code: 'NOT', text: { ar: 'عكس', en: 'opposite' } },
            { code: 'S · C', text: { ar: 'جمع نصفي', en: 'half adder' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! آخر لعبة في الوحدة: توصيل.', en: 'Well done! The last game of the unit: matching.' },
        { ar: 'وصّل البوابة بقاعدتها، وبعدين المدخلات بالناتج.', en: 'Link the gate to its rule, then the inputs to the output.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'البوابة وقاعدتها', en: 'The gate and its rule' },
        source: { ar: 'النقاط الرئيسية (أ)، ص 103', en: 'Key Points (a), p. 103' },
        pairs: [
          { left: { text: { ar: 'AND', en: 'AND' } }, right: { ar: 'بتطلّع 1 لما كل المدخلات 1', en: 'Outputs 1 only when all inputs are 1' } },
          { left: { text: { ar: 'OR', en: 'OR' } }, right: { ar: 'بتطلّع 1 لو مدخل واحد على الأقل 1', en: 'Outputs 1 if at least one input is 1' } },
          { left: { text: { ar: 'NOT', en: 'NOT' } }, right: { ar: 'بتطلّع عكس المدخل', en: 'Outputs the opposite of the input' } },
          { left: { text: { ar: 'جدول الصواب', en: 'Truth table' } }, right: { ar: 'جدول بكل احتمالات المدخلات والمخرجات', en: 'A table of every input and output combination' } },
        ],
      },
      {
        title: { ar: 'المدخلات والناتج', en: 'The inputs and the output' },
        source: { ar: 'جداول الصواب، ص 103–104', en: 'The truth tables, pp. 103–104' },
        pairs: [
          { left: { text: { ar: 'AND مع (1 , 1)', en: 'AND with (1 , 1)' } }, right: { ar: '1: لأن الاتنين 1', en: '1: because both are 1' } },
          { left: { text: { ar: 'AND مع (1 , 0)', en: 'AND with (1 , 0)' } }, right: { ar: '0: لأن واحد منهم 0', en: '0: because one of them is 0' } },
          { left: { text: { ar: 'OR مع (0 , 0)', en: 'OR with (0 , 0)' } }, right: { ar: '0: لأن مفيش ولا 1', en: '0: because there is no 1 at all' } },
          { left: { text: { ar: 'NOT مع 1', en: 'NOT with 1' } }, right: { ar: '0: لأنه عكس 1', en: '0: because it is the opposite of 1' } },
          { left: { text: { ar: 'جمع نصفي (1 + 1)', en: 'Half adder (1 + 1)' } }, right: { ar: 'حمل 1 ومجموع 0', en: 'carry 1 and sum 0' } },
        ],
      },
    ],
  },
};
