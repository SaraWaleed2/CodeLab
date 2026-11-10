import { Lesson } from '@core/models';
import { L, qpage } from '../unit-12/helpers';

const ABOUT_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>About Me</title>
</head>
<body>
  <h1>About Me</h1>
  <p>Hello! I'm Adam. I'm a high school student who likes football.</p>
  <p>School: Cairo High School</p>
  <p>Favorite Subject: Science</p>
  <p>Club Activity: Robotics Club</p>
  <p>In the future, I want to use programming to build games!</p>
</body>
</html>`;

const ABOUT_CSS = `body {
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  text-align: center;
}
h1 {
  color: #2a2a2a;
}`;

const COLOR_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>About Me</title>
</head>
<body>
  <h1>About Me</h1>
  <p>Hello! I'm a high school student learning programming.</p>
  <button id="colorBtn">Change Background Color</button>
</body>
</html>`;

const COLOR_CSS = `body {
  font-family: Arial, sans-serif;
  text-align: center;
  background: #f4f4f4;
}
button {
  background: #4caf50;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
}`;

const COLOR_JS = `const colors = ["#f4f4f4", "#ffe0e0", "#e0f0ff", "#e0ffe6"];
let i = 0;

document.getElementById("colorBtn").onclick = () => {
  i = (i + 1) % colors.length;
  document.body.style.background = colors[i];
};`;

/**
 * Lesson 13-4 "صفحات الويب بالذكاء الاصطناعي" — ministry book pp. 201–206 (lessons 4 and 5 of the book).
 * Book notes:
 * - The book has the student ask Copilot for each page, and says the code is different every time. The generated
 *   code is NOT printed in the book, so the two editors below hold a small example of the same kind of page
 *   (written for the site), not the AI's own code.
 * - pp.201–206: write a Prompt, paste the code into WebDen, run it, change it, ask the AI to explain it, rename the
 *   conversation. Exercises on pp.204 and 206 have no answer key.
 */
export const LESSON_13_4: Lesson = {
  unitId: 13,
  id: '13-4',
  title: L('نبني صفحات ويب بالذكاء الاصطناعي', 'Building Web Pages with AI'),
  bookPages: '201 – 206',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        L('أهلًا! النهارده الذكاء الاصطناعي هو اللي يكتب كود الصفحة، وإحنا اللي نوجّهه ونراجعه.', 'Hi! Today the AI writes the page’s code, and we guide it and check it.'),
        L('زي مدير فريق مع مبرمج مساعد.', 'Like a team leader with an assistant programmer.'),
      ],
    },
    {
      source: L('النقاط الرئيسية، ص 201', 'Key Points, p. 201'),
      blocks: [
        { type: 'heading', text: L('البرمجة بمساعدة الذكاء الاصطناعي', 'Programming with AI’s help') },
        {
          type: 'cards',
          items: [
            { title: L('الميزة', 'The strength'), text: L('الذكاء الاصطناعي يكتب البرنامج من تعليمات محددة بسرعة.', 'AI can write a program from specific instructions quickly.'), example: L('تقول "اعمل صفحة تعريف" فيكتب HTML وCSS', 'You say "make an intro page" and it writes HTML and CSS') },
            { title: L('التنبيه', 'The warning'), tone: 'no', text: L('الكود ممكن يحتوي على أخطاء، أو مايطابقش أوامرك بالظبط.', 'The code can contain mistakes, or not match your instructions exactly.'), example: L('لازم نشغّله ونراجعه', 'We must run it and review it') },
          ],
        },
        { type: 'memo', text: L('افتكر: كل مرة بتطلب فيها، الذكاء الاصطناعي بيطلّع كود مختلف', 'Remember: each time you ask, the AI gives different code') },
      ],
      bito: [
        L('الكتاب نفسه بيقول إن الكود بيختلف كل مرة.', 'The book itself says the code differs each time.'),
        L('فالمراجعة مش اختيارية.', 'So reviewing is not optional.'),
      ],
    },
    {
      source: L('تمهيد، ص 201–202', 'Warm-up, pp. 201–202'),
      blocks: [
        { type: 'heading', text: L('خطوات العمل مع الذكاء الاصطناعي', 'The steps of working with AI') },
        {
          type: 'steps',
          items: [
            { title: L('1', '1'), text: L('اكتب Prompt: "اعمل صفحة تعريف بسيطة بـ HTML وCSS"', 'Write a prompt: "Make a simple intro page with HTML and CSS"') },
            { title: L('2', '2'), text: L('انسخ الكود وشغّله في WebDen', 'Copy the code and run it in WebDen') },
            { title: L('3', '3'), text: L('عدّل الكود ليناسب صفحتك الخاصة', 'Edit the code to fit your own page') },
            { title: L('4', '4'), text: L('اطلب شرح الكود: "اشرح هذا الكود"', 'Ask for an explanation: "Explain this code"') },
            { title: L('5', '5'), text: L('غيّر اسم المحادثة في Copilot (Rename) لتسهل العودة', 'Rename the Copilot conversation (Rename) to find it again') },
          ],
        },
      ],
      bito: [
        L('الخطوة 4 مهمة: ما تستخدمش كود إنت مش فاهمه.', 'Step 4 matters: never use code you do not understand.'),
        L('اطلب الشرح دايمًا.', 'Always ask for the explanation.'),
      ],
    },
    {
      source: L('تمهيد، ص 201 (مثال بنفس الفكرة)', 'Warm-up, p. 201 (an example of the same idea)'),
      blocks: [
        { type: 'heading', text: L('صفحة "About Me" ثابتة', 'A static "About Me" page') },
        { type: 'web-lab', html: ABOUT_HTML, css: ABOUT_CSS },
        { type: 'memo', text: L('ده مثال كتبناه بنفس الفكرة؛ الكتاب بيعرض النتيجة بس والكود بيطلّعه Copilot', 'An example of the same idea; the book shows only the result and Copilot writes the code') },
      ],
      bito: [
        L('الكتاب فيه الفراغات: اسمك ومدرستك ومادتك المفضلة.', 'The book leaves blanks: your name, school and favourite subject.'),
        L('املاها بمعلوماتك.', 'Fill them with your own details.'),
      ],
    },
    {
      source: L('تحدي معلوماتك، ص 205', 'Test your information, p. 205'),
      blocks: [
        { type: 'heading', text: L('صفحة تفاعلية: زرار يغيّر الخلفية', 'An interactive page: a button changes the background') },
        { type: 'web-lab', html: COLOR_HTML, css: COLOR_CSS, js: COLOR_JS },
        { type: 'memo', text: L('جرّب تزوّد لون جديد في قايمة colors', 'Try adding a new colour to the colors list') },
      ],
      bito: [
        L('دي الصفحة اللي بيوصفها الكتاب: زرار أخضر بيغيّر الخلفية.', 'This is the page the book describes: a green button that changes the background.'),
        L('الكود مثال من عندنا بنفس الفكرة.', 'The code is our own example of the same idea.'),
      ],
    },
    {
      source: L('جرب بنفسك، ص 203 و206', 'Try it yourself, pp. 203 and 206'),
      blocks: [
        { type: 'heading', text: L('جرّب بنفسك مع الذكاء الاصطناعي', 'Try it yourself with the AI') },
        {
          type: 'cards',
          items: [
            { title: L('صفحة أخبار', 'A news page'), text: L('اطلب: "اكتب صفحة أخبار بسيطة بـ HTML وCSS" ثم غيّر لون النص وحجم الخط والخلفية.', 'Ask: "Write a simple news page with HTML and CSS" then change the text colour, font size and background.') },
            { title: L('اسأل عن الكود', 'Ask about the code'), text: L('هل استوعبت الذكاء الاصطناعي الكود اللي أنشأه؟ واطلب إضافة ميزة جديدة له.', 'Did the AI understand the code it made? And ask it to add a new feature.') },
          ],
        },
        { type: 'memo', text: L('فكرة: صفحة عن مطعم، أو مدرستك، أو أشهر المعالم السياحية', 'An idea: a page about a restaurant, your school or famous landmarks') },
      ],
      bito: [
        L('التمرين في الكتاب: اعمل صفحات عن أي موضوع تحبه.', 'The book’s exercise: make pages about any topic you like.'),
        L('الرياضات الشعبية، أو معالم مصر.', 'Popular sports, or the sights of Egypt.'),
      ],
    },
    qpage(
      L('النقاط الرئيسية، ص 201', 'Key Points, p. 201'),
      L('الكود اللي الذكاء الاصطناعي بيكتبه ممكن...', 'The code the AI writes can...'),
      [L('يحتوي أخطاء، فلازم نشغّله ونراجعه', 'Contain mistakes, so we must run and review it'), L('يكون صح 100% دايمًا', 'Always be 100% correct'), L('ما يتغيرش أبدًا', 'Never change')],
      0,
      L('الكتاب بيحذّر إن الكود ممكن يحتوي أخطاء أو ما يطابقش الأوامر، وإنه بيختلف في كل مرة.', 'The book warns the code can contain mistakes or not match the commands, and that it differs each time.'),
      L('صح! نراجع دايمًا.', 'Correct! We always review.'),
      [L('الذكاء الاصطناعي مش معصوم.', 'AI is not infallible.'), L('شغّل وراجع.', 'Run it and review.')],
    ),
    qpage(
      L('تمهيد، ص 201', 'Warm-up, p. 201'),
      L('بعد ما تلصق كود الذكاء الاصطناعي في WebDen وتشغّله، إيه الخطوة اللي بعد كده؟', 'After pasting the AI’s code into WebDen and running it, what is the next step?'),
      [L('أعدّله ليناسب صفحتي', 'Edit it to fit my page'), L('أمسحه', 'Delete it'), L('أغلق الجهاز', 'Switch off the device')],
      0,
      L('الترتيب: Prompt ← نسخ وتشغيل ← تعديل ← طلب الشرح.', 'The order: prompt → copy and run → edit → ask for the explanation.'),
      L('صح! نعدّل.', 'Correct! We edit.'),
      [L('بعد التشغيل نعدّل.', 'After running we edit.'), L('وبعدها نطلب الشرح.', 'Then ask for the explanation.')],
    ),
    qpage(
      L('تمهيد، ص 201', 'Warm-up, p. 201'),
      L('لو مش فاهم الكود اللي الذكاء الاصطناعي كتبه، تعمل إيه؟', 'If you do not understand the code the AI wrote, what do you do?'),
      [L('أستخدمه زي ما هو', 'Use it as it is'), L('أطلب منه: "اشرح هذا الكود"', 'Ask it: "Explain this code"'), L('أتجاهله', 'Ignore it')],
      1,
      L('الكتاب بيعلّم نطلب شرح الكود بأمر "اشرح هذا الكود".', 'The book teaches asking for an explanation with "Explain this code".'),
      L('صح! نطلب الشرح.', 'Correct! We ask for the explanation.'),
      [L('الفهم قبل الاستخدام.', 'Understand before using.'), L('اطلب الشرح.', 'Ask for the explanation.')],
    ),
    {
      source: L('آخر الدرس', 'End of lesson'),
      blocks: [
        { type: 'heading', text: L('خلّصت درس 13-4!', 'You finished lesson 13-4!') },
        {
          type: 'recap',
          items: [
            { code: '1', text: L('Prompt واضح', 'a clear prompt') },
            { code: '2', text: L('شغّل وراجع', 'run and review') },
            { code: '3', text: L('عدّل واطلب الشرح', 'edit and ask for the explanation') },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        L('شاطر! لعبة الترتيب: رتّب خطوات الشغل مع الذكاء الاصطناعي.', 'Well done! The ordering game: put the steps of working with the AI in order.'),
        L('اتخيّل إنك بتعملها بجد.', 'Imagine you are really doing it.'),
      ],
    },
  ],

  game: {
    kind: 'order',
    rounds: [
      {
        title: L('خطوات بناء صفحة بالذكاء الاصطناعي', 'Steps of building a page with AI'),
        source: L('تمهيد، ص 201–202', 'Warm-up, pp. 201–202'),
        steps: [
          L('اكتب Prompt يوصف الصفحة', 'Write a prompt that describes the page'),
          L('انسخ الكود وشغّله في WebDen', 'Copy the code and run it in WebDen'),
          L('عدّل الكود ليناسب صفحتك', 'Edit the code to fit your page'),
          L('اطلب: "اشرح هذا الكود"', 'Ask: "Explain this code"'),
          L('غيّر اسم المحادثة (Rename)', 'Rename the conversation'),
        ],
      },
      {
        title: L('خطوات إعادة تسمية المحادثة في Copilot', 'Steps to rename a Copilot conversation'),
        source: L('تمهيد، ص 202', 'Warm-up, p. 202'),
        steps: [
          L('انقر على القائمة الجانبية "..." (ثلاث نقاط)', 'Click the side menu "..." (three dots)'),
          L('اختر "Rename" من القائمة', 'Choose "Rename" from the menu'),
          L('أدخل الاسم الجديد وقم بالتأكيد', 'Type the new name and confirm'),
        ],
      },
    ],
  },
};
