import { Lesson } from '@core/models';
import { L, qpage } from './helpers';

/**
 * Lesson 12-5 "البرمجة التطبيقية [2]" — ministry book pp. 186–189 (Python functions).
 * Book notes:
 * - p.186: a function takes arguments and gives back a return value; built-in functions such as print() need no definition.
 * - The book shows area(10, 5) printing 25; real Python's "/" gives 25.0, which the site shows.
 */
export const LESSON_12_5: Lesson = {
  unitId: 12,
  id: '12-5',
  title: L('البرمجة التطبيقية (٢): الدوال', 'Applied Programming (2): Functions'),
  bookPages: '186 – 189',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        L('أهلًا! الدالة زي ماكينة عصير: تحط فاكهة (مدخلات) وتطلع عصير (ناتج). بنكتبها مرة ونستخدمها كتير.', 'Hi! A function is like a juice machine: put in fruit (inputs), get juice out. We write it once and use it many times.'),
        L('هنفهمها ونكمّل برامج بنفسنا.', 'We will understand it and complete programs ourselves.'),
      ],
    },
    {
      source: L('النقاط الرئيسية 1 (1)، ص 186', 'Key Points 1 (1), p. 186'),
      blocks: [
        { type: 'heading', text: L('الدالة (Function)', 'The function') },
        {
          type: 'cards',
          items: [
            { title: L('دالة', 'Function'), en: 'Function', text: L('مجموعة عمليات متجمعة تحت اسم، تتنفذ لما نستدعيها.', 'A group of operations under one name, run when we call it.'), example: L('def function(x): … ← التعريف · function(5) ← الاستدعاء', 'def function(x): … ← the definition · function(5) ← the call') },
            { title: L('وسيط', 'Argument'), en: 'argument', text: L('القيمة اللي بنديها للدالة وهي بتتنفذ.', 'The value we give the function when it runs.'), example: L('في function(5) الوسيط 5', 'In function(5) the argument is 5') },
            { title: L('قيمة إرجاع', 'Return value'), en: 'return value', text: L('اللي الدالة بترجّعه بـ return للمكان اللي استدعاها.', 'What the function sends back with return to where it was called.'), example: L('return y ← بترجّع قيمة y', 'return y → sends back the value of y') },
          ],
        },
      ],
      bito: [
        L('def معناها "عرّف دالة".', 'def means "define a function".'),
        L('وreturn معناها "رجّع الناتج".', 'And return means "send back the result".'),
      ],
    },
    {
      source: L('النقاط الرئيسية 1، ص 186', 'Key Points 1, p. 186'),
      blocks: [
        { type: 'heading', text: L('دالة بسيطة: y = 2x', 'A simple function: y = 2x') },
        {
          type: 'trace-lab',
          code: ['def function(x):', '    y = 2 * x', '    return y', 'print(function(5))'],
          steps: [
            { line: 0 },
            { line: 3 },
            { line: 1, vars: [{ name: 'x', value: '5' }, { name: 'y', value: '10' }] },
            { line: 2, vars: [{ name: 'x', value: '5' }, { name: 'y', value: '10' }] },
            { line: 3, out: ['10'] },
          ],
        },
        { type: 'memo', text: L('لاحظ: التنفيذ بدأ من print، دخل الدالة، وبعدين رجع', 'Notice: it started at print, went into the function, then came back') },
      ],
      bito: [
        L('السطر def بيعرّف بس ومش بينفّذ حاجة.', 'The def line only defines; it runs nothing.'),
        L('الدالة بتشتغل لما نستدعيها.', 'The function works when we call it.'),
      ],
    },
    {
      source: L('النقاط الرئيسية 1، ص 186', 'Key Points 1, p. 186'),
      blocks: [
        { type: 'heading', text: L('دالة بوسيطين: مساحة المثلث', 'Two arguments: area of a triangle') },
        {
          type: 'trace-lab',
          code: ['def area(base, height):', '    S = base * height / 2', '    return S', 'print(area(10, 5))'],
          steps: [
            { line: 0 },
            { line: 3 },
            { line: 1, vars: [{ name: 'base', value: '10' }, { name: 'height', value: '5' }, { name: 'S', value: '25.0' }] },
            { line: 2, vars: [{ name: 'base', value: '10' }, { name: 'height', value: '5' }, { name: 'S', value: '25.0' }] },
            { line: 3, out: ['25.0'] },
          ],
        },
        { type: 'memo', text: L('الكتاب كاتب 25، لكن بايثون الحقيقية بتطبع 25.0 لأن / بترجّع كسر عشري', 'The book writes 25; real Python prints 25.0 because / gives a decimal') },
      ],
      bito: [
        L('10 راحت لـ base و5 راحت لـ height بالترتيب.', '10 went to base and 5 to height, in order.'),
        L('المساحة = القاعدة × الارتفاع ÷ 2.', 'Area = base × height ÷ 2.'),
      ],
    },
    {
      source: L('النقاط الرئيسية 1 (2)، ص 186', 'Key Points 1 (2), p. 186'),
      blocks: [
        { type: 'heading', text: L('دوال جاهزة ودوال بنعرّفها', 'Built-in and our own functions') },
        {
          type: 'cards',
          items: [
            { title: L('دالة مدمجة', 'Built-in function'), en: 'built in function', text: L('جاهزة في اللغة، نستخدمها من غير ما نعرّفها.', 'Ready in the language; we use it without defining it.'), example: L('print( )', 'print( )') },
            { title: L('دالة بنعرّفها', 'Our own function'), text: L('بنكتبها نحن بـ def.', 'We write it ourselves with def.'), example: L('area( ) · circle( ) · judge( )', 'area( ) · circle( ) · judge( )') },
          ],
        },
        { type: 'memo', text: L('افتكر: print دالة مدمجة بنستخدمها من أول درس', 'Remember: print is a built-in function we have used since the first lesson') },
      ],
      bito: [
        L('إنت كنت بتستخدم دوال من غير ما تعرف!', 'You have been using functions without knowing it!'),
        L('print أهم واحدة.', 'print is the most important one.'),
      ],
    },
    {
      source: L('اختبر معلوماتك (1)، ص 187', 'Test Your Knowledge (1), p. 187'),
      blocks: [
        { type: 'heading', text: L('كمّل: دالة مساحة الدائرة', 'Complete: the circle area function') },
        { type: 'fill-code', code: '{{0}} circle(r):\n    S = r * r * 3.14\n    {{1}} S\na = circle(5)\nprint(a)', answers: [['def'], ['return']] },
        { type: 'memo', text: L('النتيجة: 78.5 لأن 5 × 5 × 3.14 = 78.5', 'The result: 78.5 because 5 × 5 × 3.14 = 78.5') },
      ],
      bito: [
        L('أول كلمة بتعرّف الدالة، وآخر كلمة بترجّع الناتج.', 'The first word defines the function, the other sends back the result.'),
        L('5 هو الوسيط اللي بيروح لـ r.', '5 is the argument that goes to r.'),
      ],
    },
    {
      source: L('اختبر معلوماتك (2)، ص 187', 'Test Your Knowledge (2), p. 187'),
      blocks: [
        { type: 'heading', text: L('كمّل: دالة النجاح والرسوب', 'Complete: the pass/fail function') },
        { type: 'fill-code', code: "def judge(score):\n    if score {{0}} 80:\n        print('Pass')\n    {{1}}:\n        print('Fail')\njudge(40)", answers: [['>='], ['else']] },
        { type: 'memo', text: L('النتيجة: Fail لأن 40 أقل من 80', 'The result: Fail because 40 is less than 80') },
      ],
      bito: [
        L('"80 أو أعلى" معناها أكبر من أو يساوي.', '"80 or higher" means greater than or equal.'),
        L('ولو غير كده؟ else.', 'And otherwise? else.'),
      ],
    },
    {
      source: L('جرب بنفسك (3)، ص 188', 'Try it yourself (3), p. 188'),
      blocks: [
        { type: 'heading', text: L('كمّل: من مئوي لفهرنهايت', 'Complete: Celsius to Fahrenheit') },
        { type: 'fill-code', code: 'def celsius_to_fahrenheit(celsius):\n    fahrenheit = (celsius * 9/5) + 32\n    return {{0}}\ntemp_celsius = 25\nresult = celsius_to_fahrenheit({{1}})\nprint(result)', answers: [['fahrenheit'], ['temp_celsius']] },
        { type: 'memo', text: L('بايثون هتطبع 77.0', 'Python prints 77.0') },
      ],
      bito: [
        L('بنرجّع الدرجة بالفهرنهايت اللي حسبناها.', 'We return the Fahrenheit value we worked out.'),
        L('وبنبعت temp_celsius للدالة.', 'And we send temp_celsius to the function.'),
      ],
    },
    {
      source: L('جرب بنفسك (4)، ص 188', 'Try it yourself (4), p. 188'),
      blocks: [
        { type: 'heading', text: L('كمّل: دالة تقييم الدرجات', 'Complete: the grading function') },
        { type: 'fill-code', code: "def evaluate(score):\n    if score {{0}} 80:\n        print('A')\n    {{1}} score {{2}} 50:\n        print('B')\n    else:\n        print('C')\nevaluate(40)", answers: [['>='], ['elif'], ['>=']] },
        { type: 'memo', text: L('80 أو أعلى = A · 50 لأقل من 80 = B · أقل من 50 = C (40 ← C)', '80 or higher = A · 50 to under 80 = B · under 50 = C (40 → C)') },
      ],
      bito: [
        L('نفس if وelif وelse اللي اتعلمناهم، جوه دالة.', 'The same if, elif and else we learned, inside a function.'),
        L('الدرجة 40 هتطلع C.', 'A score of 40 gives C.'),
      ],
    },
    qpage(
      L('جرب بنفسك (1)، ص 188', 'Try it yourself (1), p. 188'),
      L('في def function_name([1]): ... return [2] — إيه [1] و[2]؟', 'In def function_name([1]): ... return [2] — what are [1] and [2]?'),
      [L('[1] وسيط · [2] قيمة الإرجاع', '[1] argument · [2] return value'), L('[1] قيمة الإرجاع · [2] وسيط', '[1] return value · [2] argument'), L('[1] دالة مدمجة · [2] وسيط', '[1] built-in function · [2] argument')],
      0,
      L('جوه الأقواس بنكتب الوسيط (الداخل)، وبعد return بنكتب قيمة الإرجاع (الخارج).', 'Inside the brackets goes the argument (the input); after return goes the return value (the output).'),
      L('صح! داخل = وسيط · خارج = قيمة إرجاع.', 'Correct! In = argument · out = return value.'),
      [L('الأقواس للمدخلات.', 'The brackets are for inputs.'), L('و return للمخرجات.', 'And return is for outputs.')],
    ),
    qpage(
      L('جرب بنفسك (2)، ص 188', 'Try it yourself (2), p. 188'),
      L('دالة area(base, height) = base * height / 2. إيه ناتج print(area(6, 7)) ؟', 'The function area(base, height) = base * height / 2. What does print(area(6, 7)) show?'),
      ['13', '42.0', '21.0', '76'],
      2,
      L('6 × 7 ÷ 2 = 21. بايثون بتكتبها 21.0 (والكتاب بيكتب 21).', '6 × 7 ÷ 2 = 21. Python writes it 21.0 (the book writes 21).'),
      L('صح! 21.', 'Correct! 21.'),
      [L('6 × 7 = 42 وبعدين ÷ 2.', '6 × 7 = 42, then ÷ 2.'), L('= 21.', '= 21.')],
    ),
    qpage(
      L('تمرن (3)، ص 189', 'Practice (3), p. 189'),
      L("def check_size(weight): if weight < 45: print('S') elif weight < 55: print('M') else: print('L'). إيه ناتج check_size(40) ؟", "def check_size(weight): if weight < 45: print('S') elif weight < 55: print('M') else: print('L'). What does check_size(40) show?"),
      ['S', 'M', 'L'],
      0,
      L('40 أقل من 45 فالشرط الأول صح وبيعرض S.', '40 is less than 45 so the first condition is true and it shows S.'),
      L('صح! S.', 'Correct! S.'),
      [L('الشرط الأول بيتجرّب الأول.', 'The first condition is tried first.'), L('40 < 45.', '40 < 45.')],
    ),
    qpage(
      L('تمرن (4)، ص 189', 'Practice (4), p. 189'),
      L('إيه اسم الدالة اللي بتيجي جاهزة في اللغة زي print() ؟', 'What do we call a function that comes ready in the language, like print() ?'),
      [L('دالة مدمجة', 'Built-in function'), L('قيمة إرجاع', 'Return value'), L('وسيط', 'Argument'), L('متغير', 'Variable')],
      0,
      L('الدالة المدمجة (built-in function) جاهزة ومش محتاجة تعريف.', 'A built-in function is ready and needs no definition.'),
      L('صح! دالة مدمجة.', 'Correct! A built-in function.'),
      [L('مدمجة = جاهزة جوه اللغة.', 'Built in = ready inside the language.'), L('زي print.', 'Like print.')],
    ),
    {
      source: L('آخر الدرس', 'End of lesson'),
      blocks: [
        { type: 'heading', text: L('خلّصت درس 12-5 ووحدة البرمجة!', 'You finished lesson 12-5 and the programming unit!') },
        {
          type: 'recap',
          items: [
            { code: 'def', text: L('بتعرّف دالة', 'defines a function') },
            { code: 'return', text: L('بترجّع الناتج', 'sends back the result') },
            { code: 'f(5)', text: L('استدعاء الدالة بوسيط', 'calling a function with an argument') },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        L('شاطر! لعبة التوصيل: المصطلحات، وبعدها كل استدعاء ونتيجته.', 'Well done! The matching game: the terms, then each call and its result.'),
        L('اتتبع الدالة في دماغك.', 'Trace the function in your head.'),
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: L('مصطلحات الدوال', 'Function terms'),
        source: L('النقاط الرئيسية 1، ص 186', 'Key Points 1, p. 186'),
        pairs: [
          { left: { text: L('def', 'def') }, right: L('بتعرّف دالة', 'Defines a function') },
          { left: { text: L('return', 'return') }, right: L('بترجّع الناتج من الدالة', 'Sends the result back from the function') },
          { left: { text: L('وسيط (argument)', 'argument') }, right: L('القيمة اللي نديها للدالة', 'The value we give to the function') },
          { left: { text: L('print( )', 'print( )') }, right: L('دالة مدمجة جاهزة', 'A ready built-in function') },
        ],
      },
      {
        title: L('إيه ناتج الاستدعاء؟', 'What does the call give?'),
        source: L('اختبر معلوماتك وتمرن، ص 187–189', 'Test Your Knowledge and Practice, pp. 187–189'),
        pairs: [
          { left: { text: L('circle(5)', 'circle(5)') }, right: L('78.5', '78.5') },
          { left: { text: L('judge(40)', 'judge(40)') }, right: L('Fail', 'Fail') },
          { left: { text: L('evaluate(65)', 'evaluate(65)') }, right: L('B', 'B') },
          { left: { text: L('check_size(50)', 'check_size(50)') }, right: L('M', 'M') },
          { left: { text: L('check_size(60)', 'check_size(60)') }, right: L('L', 'L') },
        ],
      },
    ],
  },
};
