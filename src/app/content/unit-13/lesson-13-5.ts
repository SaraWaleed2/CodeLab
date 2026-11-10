import { Lesson } from '@core/models';
import { L, qpage } from '../unit-12/helpers';

const QUIZ_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Quiz App</title>
</head>
<body>
  <h2>1 Question Quiz</h2>
  <p>Q1. What is 2 + 3?</p>
  <div id="choices"></div>
  <button id="check">Check Answer</button>
  <p id="result"></p>
</body>
</html>`;

const QUIZ_CSS = `body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  padding: 12px;
}
button {
  margin-top: 8px;
  padding: 6px 12px;
}
#result {
  font-weight: bold;
}`;

const QUIZ_JS = `const choices = [3, 4, 5];
const correct = 5;
const box = document.getElementById("choices");

for (const c of choices) {
  box.innerHTML += '<label><input type="radio" name="c" value="' + c + '"> ' + c + '</label><br>';
}

document.getElementById("check").addEventListener("click", () => {
  const picked = document.querySelector('input[name="c"]:checked');
  const result = document.getElementById("result");
  if (picked && Number(picked.value) === correct) {
    result.textContent = "Correct! 2 + 3 = 5.";
  } else {
    result.textContent = "Try again.";
  }
});`;

/**
 * Lesson 13-5 "تطبيق الاختبارات" — ministry book pp. 207–210 (lessons 6, 7 and 8 of the book).
 * Book notes:
 * - p.207 (lesson 6) and p.210 (lesson 8) are review pages: what the student learned about HTML, CSS and JavaScript
 *   in the website they built; p.208–209 (lesson 7) is the Quiz App built by prompt.
 * - The quiz code is not printed in the book (the AI writes it, differently each time): the editor below holds a small
 *   example of the same quiz, written for the site, using the choices array and if…else the book names on p.210.
 * - The exercises on pp.209 have no answer key.
 */
export const LESSON_13_5: Lesson = {
  unitId: 13,
  id: '13-5',
  title: L('تطبيق الاختبارات', 'The Quiz App'),
  bookPages: '207 – 210',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        L('أهلًا! هنعمل تطبيق اختبار صغير: سؤال، اختيارات، وزرار يقولك صح ولا غلط.', 'Hi! We build a small quiz app: a question, choices, and a button that says right or wrong.'),
        L('وهنراجع كل اللي اتعلمناه في HTML وCSS وJS.', 'And we review everything learned in HTML, CSS and JS.'),
      ],
    },
    {
      source: L('النقاط الرئيسية، ص 207', 'Key Points, p. 207'),
      blocks: [
        { type: 'heading', text: L('مراجعة: إيه اللي اتعلمناه؟', 'Review: what did we learn?') },
        {
          type: 'cards',
          items: [
            { title: L('HTML', 'HTML'), text: L('وسوم <link> و<script> بتضم CSS وJavaScript للصفحة. والزرار <button> بنتحكم فيه بالـ id.', 'The <link> and <script> tags bring CSS and JavaScript into the page. A <button> is controlled through its id.') },
            { title: L('CSS', 'CSS'), text: L('نحدد لون خلفية الصفحة بـ body، ونعمل حركة (Animation) للزرار.', 'We set the page background with body, and can animate a button.') },
            { title: L('JavaScript', 'JavaScript'), text: L('نحدد العناصر بـ document.getElementById، ونكتب إجراء بيحصل عند الضغط بـ addEventListener.', 'We pick elements with document.getElementById, and write what happens on a click with addEventListener.') },
          ],
        },
      ],
      bito: [
        L('ده ملخص الكتاب لتلات لغات في صفحة واحدة.', 'This is the book’s summary of three languages on one page.'),
        L('هنشوف كلهم شغالين مع بعض.', 'We will see them all working together.'),
      ],
    },
    {
      source: L('تحدي معلوماتك، ص 208', 'Test your information, p. 208'),
      blocks: [
        { type: 'heading', text: L('تطبيق اختبار بسؤال واحد', 'A one-question quiz app') },
        { type: 'web-lab', html: QUIZ_HTML, css: QUIZ_CSS, js: QUIZ_JS },
        { type: 'memo', text: L('اختار 5 واضغط Check Answer. الكود مثال من عندنا بنفس فكرة الكتاب', 'Pick 5 and press Check Answer. The code is our own example of the book’s idea') },
      ],
      bito: [
        L('الكتاب بيطلب من Copilot يكتب التطبيق ده: "اعمل اختبارًا بسيطًا لاختبار من متعدد".', 'The book asks Copilot to write this app: "make a simple multiple-choice quiz".'),
        L('إحنا شايفين نفس الفكرة قدامنا.', 'We see the same idea in front of us.'),
      ],
    },
    {
      source: L('مراجعة تطبيق الاختبارات، ص 210', 'Quiz app review, p. 210'),
      blocks: [
        { type: 'heading', text: L('جوه كود الاختبار', 'Inside the quiz code') },
        {
          type: 'cards',
          items: [
            { title: L('مصفوفة الاختيارات', 'The choices array'), en: 'choices', text: L('مصفوفة اسمها choices بتحفظ الاختيارات المتعددة.', 'An array named choices that holds the several options.'), example: L('const choices = [3, 4, 5];', 'const choices = [3, 4, 5];') },
            { title: L('جملة if…else', 'if…else'), text: L('بتفحص الإجابة وبتغيّر لون أو نص النتيجة.', 'Checks the answer and changes the result’s colour or text.'), example: L('لو الاختيار = الصح ← "Correct!" وإلا ← "Try again."', 'If the pick = the right one → "Correct!" else → "Try again."') },
          ],
        },
        { type: 'memo', text: L('افتكر: القائمة (المصفوفة) اتعلمناها في الوحدة 12', 'Remember: we learned lists (arrays) in Unit 12') },
      ],
      bito: [
        L('نفس القوائم وجمل if اللي في بايثون، بس بكتابة JavaScript.', 'The same lists and if statements as in Python, written the JavaScript way.'),
        L('الأفكار هي هي.', 'The ideas are the same.'),
      ],
    },
    {
      source: L('جرب بنفسك، ص 209–210', 'Try it yourself, pp. 209–210'),
      blocks: [
        { type: 'heading', text: L('جرّب بنفسك', 'Try it yourself') },
        {
          type: 'cards',
          items: [
            { title: L('اسأل الذكاء الاصطناعي', 'Ask the AI'), text: L('اسأله: "ماذا يفعل الكود <p id="result"></p>؟" و"ماذا يعني background: #f5f5f5;؟"', 'Ask: "What does the code <p id="result"></p> do?" and "What does background: #f5f5f5; mean?"') },
            { title: L('وسّع التطبيق', 'Grow the app'), text: L('اجعل الاختبار من 3 أسئلة، وزود عدد الخيارات، واعرض نسبة الإجابات الصحيحة في النهاية.', 'Make the quiz 3 questions, add more choices and show the percentage of correct answers at the end.') },
          ],
        },
        { type: 'memo', text: L('جرّب بنفسك: زوّد اختيار 6 في المصفوفة choices في الصفحة اللي فاتت', 'Try it: add a choice 6 to the choices array in the previous page') },
      ],
      bito: [
        L('جرّب تغيّر الاختيارات والإجابة الصحيحة في الكود.', 'Try changing the choices and the right answer in the code.'),
        L('وشوف التطبيق بيتصرف إزاي.', 'And see how the app behaves.'),
      ],
    },
    qpage(
      L('النقاط الرئيسية، ص 207', 'Key Points, p. 207'),
      L('وسوم <link> و<script> في HTML بتعمل إيه؟', 'What do the <link> and <script> tags in HTML do?'),
      [L('تضم CSS وJavaScript للصفحة', 'Bring CSS and JavaScript into the page'), L('تمسح الصفحة', 'Delete the page'), L('تغيّر اسم الموقع', 'Rename the site')],
      0,
      L('<link> بتربط ملف CSS، و<script> بتربط ملف JavaScript.', '<link> attaches a CSS file and <script> a JavaScript file.'),
      L('صح! بتضم CSS وJS.', 'Correct! They bring in CSS and JS.'),
      [L('وسوم الربط.', 'The linking tags.'), L('واحد للشكل وواحد للتفاعل.', 'One for looks, one for interaction.')],
    ),
    qpage(
      L('النقاط الرئيسية، ص 207', 'Key Points, p. 207'),
      L('نكتب الإجراء اللي بيحصل عند ضغط الزرار بـ...', 'We write what happens when the button is pressed with...'),
      ['addEventListener', 'getElementById', 'textContent'],
      0,
      L('addEventListener بتخلّي JavaScript تنتظر حدث (زي الضغط) وتنفّذ إجراء.', 'addEventListener makes JavaScript wait for an event (like a click) and run an action.'),
      L('صح! addEventListener.', 'Correct! addEventListener.'),
      [L('Listener = مستمع.', 'Listener = one who listens.'), L('بيسمع الضغطة.', 'It hears the click.')],
    ),
    qpage(
      L('مراجعة تطبيق الاختبارات، ص 210', 'Quiz app review, p. 210'),
      L('الاختيارات المتعددة في تطبيق الاختبار بتتحفظ في...', 'The quiz’s several choices are kept in...'),
      [L('مصفوفة اسمها choices', 'An array named choices'), L('ملف CSS', 'A CSS file'), L('وسم <button>', 'A <button> tag')],
      0,
      L('الكتاب بيقول إن المصفوفة choices بتحفظ الاختيارات المتعددة.', 'The book says the choices array holds the multiple options.'),
      L('صح! مصفوفة choices.', 'Correct! The choices array.'),
      [L('مجموعة قيم = مصفوفة.', 'A group of values = an array.'), L('اسمها choices.', 'It is named choices.')],
    ),
    qpage(
      L('مراجعة تطبيق الاختبارات، ص 210', 'Quiz app review, p. 210'),
      L('أنهي جزء بيفحص الإجابة وبيقرر يعرض "Correct" ولا "Try again"؟', 'Which part checks the answer and decides to show "Correct" or "Try again"?'),
      ['if … else', 'for', 'def'],
      0,
      L('جملة if~else بتفحص الإجابة وتختار النتيجة.', 'An if~else statement checks the answer and picks the result.'),
      L('صح! if…else.', 'Correct! if…else.'),
      [L('اختيار بين طريقين.', 'A choice between two ways.'), L('ده شغل if…else.', 'That is the job of if…else.')],
    ),
    {
      source: L('آخر الدرس', 'End of lesson'),
      blocks: [
        { type: 'heading', text: L('خلّصت درس 13-5!', 'You finished lesson 13-5!') },
        {
          type: 'recap',
          items: [
            { code: 'choices', text: L('مصفوفة الاختيارات', 'the array of options') },
            { code: 'if…else', text: L('يفحص الإجابة', 'checks the answer') },
            { code: 'addEventListener', text: L('ينفّذ عند الضغط', 'runs on a click') },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        L('شاطر! لعبة التوصيل: كل جزء وشغله في تطبيق الاختبار.', 'Well done! The matching game: each part and its job in the quiz app.'),
        L('افتكر القائمة وif من بايثون.', 'Remember lists and if from Python.'),
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: L('كل جزء وشغله في الاختبار', 'Each part and its job in the quiz'),
        source: L('النقاط الرئيسية ومراجعة تطبيق الاختبارات، ص 207 و210', 'Key Points and Quiz app review, pp. 207 and 210'),
        pairs: [
          { left: { text: L('<link>', '<link>') }, right: L('يربط ملف CSS بالصفحة', 'Attaches a CSS file to the page') },
          { left: { text: L('<script>', '<script>') }, right: L('يربط ملف JavaScript بالصفحة', 'Attaches a JavaScript file to the page') },
          { left: { text: L('body { background }', 'body { background }') }, right: L('يحدد لون خلفية الصفحة', 'Sets the page’s background colour') },
          { left: { text: L('choices', 'choices') }, right: L('مصفوفة فيها الاختيارات', 'An array holding the options') },
          { left: { text: L('if … else', 'if … else') }, right: L('يفحص الإجابة صح ولا غلط', 'Checks whether the answer is right or wrong') },
        ],
      },
      {
        title: L('لغة إيه بتعمل إيه في التطبيق؟', 'Which language does what in the app?'),
        source: L('النقاط الرئيسية، ص 207', 'Key Points, p. 207'),
        pairs: [
          { left: { text: L('HTML', 'HTML') }, right: L('السؤال والزرار ومكان النتيجة', 'The question, the button and the place for the result') },
          { left: { text: L('CSS', 'CSS') }, right: L('ألوان الخلفية وشكل الزرار', 'The background colours and the button’s look') },
          { left: { text: L('JavaScript', 'JavaScript') }, right: L('الاستجابة للضغط وفحص الإجابة', 'Answering the click and checking the answer') },
        ],
      },
    ],
  },
};
