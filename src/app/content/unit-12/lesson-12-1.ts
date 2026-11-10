import { Lesson } from '@core/models';
import { L, qpage } from './helpers';

/**
 * Lesson 12-1 "الخوارزميات" — ministry book pp. 168–171.
 * Book notes:
 * - p.168: algorithm, flowchart symbols and activity-diagram symbols. p.169: the three control structures and the
 *   three programming languages the book names (Python, JavaScript, Scratch).
 * - The answer keys on pp.169–171 are hard to read; the site's questions follow the definitions in the Key Points.
 */
export const LESSON_12_1: Lesson = {
  unitId: 12,
  id: '12-1',
  title: L('الخوارزميات', 'Algorithms'),
  bookPages: '168 – 171',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        L('أهلًا! قبل ما نكتب كود لازم نعرف نفكر بخطوات. ده اسمه "خوارزمية".', 'Hi! Before we write code we must think in steps. That is called an "algorithm".'),
        L('في الآخر لعبة توصيل: ارسم المعنى على الرمز.', 'At the end there is a matching game: connect each symbol to its meaning.'),
      ],
    },
    {
      source: L('النقاط الرئيسية (1)، ص 168', 'Key Points (1), p. 168'),
      blocks: [
        { type: 'heading', text: L('الخوارزمية والمخطط الانسيابي', 'Algorithm and flowchart') },
        {
          type: 'cards',
          items: [
            { title: L('الخوارزمية', 'Algorithm'), en: 'Algorithm', text: L('طريقة أو إجراء لحل مشكلة معينة.', 'A method or procedure for solving a certain problem.'), example: L('وصفة عمل الشاي: سخّن الماية ← حط الشاي ← صبّ الماية ← حلّي', 'A recipe for tea: heat water → add tea → pour → sweeten') },
            { title: L('المخطط الانسيابي', 'Flowchart'), en: 'Flowchart', text: L('مخطط بيمثّل الخوارزمية برسم: رموز وأسهم.', 'A diagram that shows an algorithm with symbols and arrows.'), example: L('رسمة فيها: صحيت ← الجو مشمس؟ لأ ← خد شمسية ← امشي', 'A drawing: wake up → is it sunny? no → take an umbrella → leave') },
          ],
        },
        { type: 'memo', text: L('افتكر: الخوارزمية = خطوات الحل · المخطط = رسمة الخطوات', 'Remember: algorithm = the steps of the solution · flowchart = a drawing of the steps') },
      ],
      bito: [
        L('أي حاجة بتعملها بالترتيب كل يوم هي خوارزمية.', 'Anything you do in order every day is an algorithm.'),
        L('الكمبيوتر محتاج الخطوات دي مكتوبة بالظبط.', 'The computer needs those steps written out exactly.'),
      ],
    },
    {
      source: L('النقاط الرئيسية (2) [1]، ص 168', 'Key Points (2) [1], p. 168'),
      blocks: [
        { type: 'heading', text: L('رموز المخطط الانسيابي', 'Flowchart symbols') },
        {
          type: 'compare',
          columns: [L('المعنى', 'Meaning'), L('زي إيه؟', 'Like what?')],
          rows: [
            { label: L('Terminal', 'Terminal'), cells: [L('بداية / نهاية', 'Start / End'), L('"صحيت" و"خرجت"', '"Wake up" and "leave"')] },
            { label: L('Display', 'Display'), cells: [L('عرض على الشاشة', 'Show on a screen'), L('رسالة على الموبايل', 'A message on the phone')] },
            { label: L('Process', 'Process'), cells: [L('عمليات ومعالجة', 'Operations and processing'), L('احسب المجموع', 'Work out the total')] },
            { label: L('Data', 'Data'), cells: [L('إدخال وإخراج بيانات', 'Data input and output'), L('اكتب رقمك السري', 'Type your PIN')] },
            { label: L('Conditional branch', 'Conditional branch'), cells: [L('تفرّع حسب شرط', 'Branching by a condition'), L('الجو مشمس؟ آه / لأ', 'Is it sunny? yes / no')] },
            { label: L('Repeat', 'Repeat'), cells: [L('بداية ونهاية التكرار', 'Start and end of a repetition'), L('كرر لحد ما تخلص', 'Repeat until finished')] },
            { label: L('Line', 'Line'), cells: [L('تدفق البيانات والتحكم', 'Flow of data and control'), L('السهم اللي بيوصل الخطوات', 'The arrow joining the steps')] },
          ],
        },
      ],
      bito: [
        L('المعيّن (الدايرة المفروقة) هو اللي فيه سؤال بنعم أو لأ.', 'The diamond is the one that asks a yes-or-no question.'),
        L('والبيضاوي دايمًا بداية أو نهاية.', 'And the oval is always a start or an end.'),
      ],
    },
    {
      source: L('النقاط الرئيسية (2) [2]، ص 168', 'Key Points (2) [2], p. 168'),
      blocks: [
        { type: 'heading', text: L('مخطط النشاط (Activity diagram)', 'Activity diagram') },
        {
          type: 'compare',
          columns: [L('بيعبّر عن', 'It stands for')],
          rows: [
            { label: L('Start', 'Start'), cells: [L('نقطة البداية (دايرة سودا)', 'The starting point (a black dot)')] },
            { label: L('End', 'End'), cells: [L('نقطة النهاية (دايرة جواها دايرة)', 'The end point (a dot inside a ring)')] },
            { label: L('Control', 'Control'), cells: [L('خطوة بيعملها حد (مستطيل بأطراف مدوّرة)', 'A step somebody does (a rounded rectangle)')] },
            { label: L('Transition', 'Transition'), cells: [L('السهم اللي بينقلك للخطوة اللي بعدها', 'The arrow to the next step')] },
            { label: L('Conditional branch', 'Conditional branch'), cells: [L('مفترق طرق حسب شرط', 'A fork chosen by a condition')] },
            { label: L('Parallel process', 'Parallel process'), cells: [L('خط عريض: خطوات بتحصل في نفس الوقت', 'A thick bar: steps that happen at the same time')] },
            { label: L('Send', 'Send'), cells: [L('إرسال حاجة من طرف لطرف', 'Sending something from one side to the other')] },
          ],
        },
        { type: 'memo', text: L('افتكر: في الكتاب مثال ماكينة ATM: العميل بيدخل الكارت والماكينة بترد', 'Remember: the book has an ATM example: the customer inserts the card and the machine answers') },
      ],
      bito: [
        L('المخطط ده بيوضّح مين بيعمل إيه: العميل والماكينة.', 'This diagram shows who does what: the customer and the machine.'),
        L('كل عمود لطرف.', 'Each column belongs to one side.'),
      ],
    },
    {
      source: L('النقاط الرئيسية (2)، ص 169', 'Key Points (2), p. 169'),
      blocks: [
        { type: 'heading', text: L('هياكل التحكم (3)', 'The three control structures') },
        {
          type: 'cards',
          items: [
            { title: L('هيكل متسلسل', 'Sequential'), en: 'Sequential structure', text: L('بينفّذ العمليات بالترتيب، واحدة ورا التانية.', 'Runs the processes in order, one after the other.'), example: L('تلبس الشراب ← تلبس الجزمة', 'Put on socks → put on shoes') },
            { title: L('هيكل تكراري', 'Repeating'), en: 'Repeating structure', text: L('بيكرر العملية طول ما الشرط متحقق.', 'Repeats the process while the condition is met.'), example: L('اكتب سطر ← اكتب سطر ← لحد ما تخلص الصفحة', 'Write a line → write a line → until the page is done') },
            { title: L('هيكل متفرع', 'Branching'), en: 'Branching structure', text: L('بيفصل العمليات حسب الشرط.', 'Separates the processes by a condition.'), example: L('لو بتمطر: خد شمسية، وإلا امشي عادي', 'If it rains: take an umbrella, otherwise just go') },
          ],
        },
        { type: 'memo', text: L('افتكر: متسلسل = ترتيب · تكراري = لفّة · متفرع = اختيار', 'Remember: sequential = order · repeating = a loop · branching = a choice') },
      ],
      bito: [
        L('أي برنامج في الدنيا مبني من التلاتة دول بس.', 'Every program in the world is built from just these three.'),
        L('هنتعلمهم كلهم في الدروس الجاية.', 'We will learn all of them in the next lessons.'),
      ],
    },
    {
      source: L('النقاط الرئيسية (3)، ص 169', 'Key Points (3), p. 169'),
      blocks: [
        { type: 'heading', text: L('لغة البرمجة', 'Programming languages') },
        {
          type: 'cards',
          items: [
            { title: L('لغة البرمجة', 'Programming language'), text: L('بتعبّر عن الخوارزمية بشكل يفهمه الكمبيوتر. بنكتب البرنامج (الكود) بيها، وبعدين يتترجم للغة الآلة.', 'Expresses the algorithm in a way a computer understands. We write the program (code) in it, then it is translated to machine language.') },
            { title: L('Python', 'Python'), en: 'Python', text: L('بتُستخدم في الذكاء الاصطناعي والإحصاء.', 'Used in artificial intelligence and statistics.'), example: L('هي لغة الوحدة دي', 'It is this unit’s language') },
            { title: L('JavaScript', 'JavaScript'), en: 'JavaScript', text: L('بتشتغل جوه متصفح الويب.', 'Runs inside a web browser.'), example: L('الألعاب والصفحات التفاعلية', 'Games and interactive pages') },
            { title: L('Scratch', 'Scratch'), en: 'Scratch', text: L('لغة تعليمية بكتل (blocks) بتتركّب ببعض.', 'An educational language of blocks that snap together.'), example: L('للأطفال والمبتدئين', 'For children and beginners') },
          ],
        },
        { type: 'memo', text: L('افتكر: Python للذكاء الاصطناعي · JavaScript للويب · Scratch للتعلّم بالكتل', 'Remember: Python for AI · JavaScript for the web · Scratch for learning with blocks') },
      ],
      bito: [
        L('الكمبيوتر مش بيفهم عربي ولا إنجليزي، بيفهم لغة الآلة بس.', 'The computer does not understand Arabic or English, only machine language.'),
        L('لغة البرمجة هي الجسر.', 'A programming language is the bridge.'),
      ],
    },
    qpage(
      L('اختبر معلوماتك (1)، ص 169', 'Test Your Knowledge (1), p. 169'),
      L('إيه الكلمة اللي بتوصف طريقة أو خطوات مرتبة لحل مشكلة؟', 'Which word describes ordered steps for solving a problem?'),
      [L('خوارزمية', 'Algorithm'), L('لغة آلة', 'Machine language'), L('متغير', 'Variable')],
      0,
      L('الخوارزمية هي طريقة أو إجراء لحل مشكلة معينة.', 'An algorithm is a method or procedure for solving a certain problem.'),
      L('صح! خطوات الحل = خوارزمية.', 'Correct! Steps of a solution = an algorithm.'),
      [L('زي وصفة الأكل بالظبط.', 'Just like a food recipe.'), L('خطوات مرتبة.', 'Ordered steps.')],
    ),
    qpage(
      L('اختبر معلوماتك (2)، ص 169', 'Test Your Knowledge (2), p. 169'),
      L('إيه اسم الرسمة اللي بتعرض الخوارزمية بالرموز والأسهم؟', 'What is the drawing that shows an algorithm with symbols and arrows called?'),
      [L('مخطط انسيابي', 'Flowchart'), L('جدول', 'Table'), L('لغة برمجة', 'Programming language')],
      0,
      L('المخطط الانسيابي (Flowchart) بيمثّل الخوارزمية بشكل مرئي.', 'A flowchart shows an algorithm visually.'),
      L('صح! رسمة الخطوات = مخطط انسيابي.', 'Correct! A drawing of the steps = a flowchart.'),
      [L('فيه بيضاوي ومستطيل ومعيّن.', 'It has ovals, rectangles and diamonds.'), L('وأسهم بينهم.', 'And arrows between them.')],
    ),
    qpage(
      L('الرموز، ص 168', 'Symbols, p. 168'),
      L('في المخطط الانسيابي، الشكل المعيّن (Diamond) بيعني إيه؟', 'In a flowchart, what does the diamond shape mean?'),
      [L('بداية أو نهاية', 'Start or end'), L('تفرّع حسب شرط', 'Branching by a condition'), L('عرض على الشاشة', 'Show on screen'), L('إدخال بيانات', 'Data input')],
      1,
      L('المعيّن هو Conditional branch: بيسأل سؤال وبيختار طريق حسب الإجابة.', 'The diamond is a conditional branch: it asks a question and picks a path by the answer.'),
      L('صح! معيّن = شرط.', 'Correct! Diamond = a condition.'),
      [L('الجو مشمس؟ آه ولا لأ؟', 'Is it sunny? Yes or no?'), L('ده شغل المعيّن.', 'That is the diamond’s job.')],
    ),
    qpage(
      L('النقاط الرئيسية (2)، ص 169', 'Key Points (2), p. 169'),
      L('"لو الجو بيمطر خد شمسية، وإلا امشي عادي" ده أنهي هيكل تحكم؟', '"If it is raining take an umbrella, otherwise just go" is which control structure?'),
      [L('متسلسل', 'Sequential'), L('تكراري', 'Repeating'), L('متفرع', 'Branching')],
      2,
      L('الهيكل المتفرع بيفصل العمليات حسب الشرط.', 'The branching structure separates processes by a condition.'),
      L('صح! شرط واختيارين = متفرع.', 'Correct! A condition with two choices = branching.'),
      [L('في اختيار حسب شرط.', 'There is a choice by a condition.'), L('يبقى متفرع.', 'So it is branching.')],
    ),
    qpage(
      L('النقاط الرئيسية (3)، ص 169', 'Key Points (3), p. 169'),
      L('أنهي لغة بتُستخدم كتير في الذكاء الاصطناعي والإحصاء؟', 'Which language is widely used in AI and statistics?'),
      ['Python', 'JavaScript', 'Scratch'],
      0,
      L('Python بتُستخدم في الذكاء الاصطناعي والإحصاء. JavaScript للويب، وScratch للتعلّم بالكتل.', 'Python is used in AI and statistics. JavaScript is for the web, Scratch for learning with blocks.'),
      L('صح! Python.', 'Correct! Python.'),
      [L('وهي اللي هنكتب بيها الكود.', 'And it is what we will write code in.'), L('اسمها زي الثعبان.', 'Named like the snake.')],
    ),
    {
      source: L('آخر الدرس', 'End of lesson'),
      blocks: [
        { type: 'heading', text: L('خلّصت درس 12-1!', 'You finished lesson 12-1!') },
        {
          type: 'recap',
          items: [
            { code: '3', text: L('هياكل تحكم: متسلسل، تكراري، متفرع', 'control structures: sequential, repeating, branching') },
            { code: '7', text: L('رموز مخطط انسيابي', 'flowchart symbols') },
            { code: '3', text: L('لغات: Python وJavaScript وScratch', 'languages: Python, JavaScript, Scratch') },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        L('شاطر! لعبة التوصيل: الرمز ومعناه، والهيكل ومثاله، واللغة واستخدامها.', 'Well done! The matching game: symbols and meanings, structures and examples, languages and uses.'),
        L('فكّر في الشكل أو الفكرة.', 'Think about the shape or the idea.'),
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: L('رموز المخطط الانسيابي', 'Flowchart symbols'),
        source: L('النقاط الرئيسية (2)، ص 168', 'Key Points (2), p. 168'),
        pairs: [
          { left: { text: L('Terminal', 'Terminal') }, right: L('بداية أو نهاية', 'Start or end') },
          { left: { text: L('Display', 'Display') }, right: L('عرض على الشاشة', 'Show on the screen') },
          { left: { text: L('Process', 'Process') }, right: L('عمليات ومعالجة', 'Operations and processing') },
          { left: { text: L('Data', 'Data') }, right: L('إدخال وإخراج بيانات', 'Data input and output') },
          { left: { text: L('Conditional branch', 'Conditional branch') }, right: L('تفرّع حسب شرط', 'Branching by a condition') },
        ],
      },
      {
        title: L('هياكل التحكم', 'Control structures'),
        source: L('النقاط الرئيسية (2)، ص 169', 'Key Points (2), p. 169'),
        pairs: [
          { left: { text: L('متسلسل', 'Sequential') }, right: L('تلبس الشراب ثم الجزمة', 'Put on socks, then shoes') },
          { left: { text: L('تكراري', 'Repeating') }, right: L('تكتب سطور لحد ما تخلص الصفحة', 'Write lines until the page is full') },
          { left: { text: L('متفرع', 'Branching') }, right: L('لو بتمطر خد شمسية', 'If it rains take an umbrella') },
        ],
      },
      {
        title: L('اللغات واستخدامها', 'Languages and their uses'),
        source: L('النقاط الرئيسية (3)، ص 169', 'Key Points (3), p. 169'),
        pairs: [
          { left: { text: L('Python', 'Python') }, right: L('الذكاء الاصطناعي والإحصاء', 'AI and statistics') },
          { left: { text: L('JavaScript', 'JavaScript') }, right: L('بتشتغل في متصفح الويب', 'Runs in a web browser') },
          { left: { text: L('Scratch', 'Scratch') }, right: L('تعليم بكتل بتتركّب', 'Learning with snap-together blocks') },
        ],
      },
    ],
  },
};
