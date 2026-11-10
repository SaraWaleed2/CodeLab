import { Lesson } from '@core/models';
import { L, qpage } from '../unit-12/helpers';

const HTML_ID = `<h1>My page</h1>
<p id="text1">HELLO</p>
<p id="text2">WORLD</p>`;

const HTML_NAME = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>About Me</title>
</head>
<body>
  <h1 id="name">Adam</h1>
</body>
</html>`;

const HTML_BTN = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>About Me</title>
</head>
<body>
  <p id="name">Adam</p>
  <button id="btn">Change Text</button>
</body>
</html>`;

const HTML_SIZE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>About Me</title>
</head>
<body>
  <p id="name">Adam</p>
  <button id="btn">Change Size</button>
</body>
</html>`;

/**
 * Lesson 13-3 "HTML, JS" — ministry book pp. 196–200.
 * Book notes:
 * - p.196: JavaScript makes a page interactive; the id attribute lets JavaScript find a tag; textContent changes its text.
 * - pp.197–199: Adam → Omar, the Change Text button and the Change Size button (fontSize = 50 + "px").
 * - The exercises on pp.200 have no answer key.
 */
export const LESSON_13_3: Lesson = {
  unitId: 13,
  id: '13-3',
  title: L('HTML وJavaScript', 'HTML and JavaScript'),
  bookPages: '196 – 200',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        L('أهلًا! لحد دلوقتي الصفحة كانت ثابتة. النهارده نخلّيها تتحرك وترد على الضغط!', 'Hi! So far the page was still. Today we make it move and react to a click!'),
        L('بلغة JavaScript.', 'With JavaScript.'),
      ],
    },
    {
      source: L('النقاط الرئيسية، ص 196', 'Key Points, p. 196'),
      blocks: [
        { type: 'heading', text: L('JavaScript: الصفحة تتفاعل', 'JavaScript: the page reacts') },
        {
          type: 'cards',
          items: [
            { title: L('JavaScript', 'JavaScript'), en: 'JavaScript', text: L('لغة برمجة جوه متصفحات الويب. بتخلّي الصفحة تستجيب لتغييرات أو إجراءات من المستخدم.', 'A programming language inside web browsers. It makes the page respond to changes or actions by the user.'), example: L('تضغط زرار فيتغير لون الخلفية', 'You press a button and the background colour changes') },
            { title: L('صفحة تفاعلية', 'Interactive page'), en: 'Interactive', text: L('صفحة بتستجيب لإجراء المستخدم (User Action).', 'A page that answers a user action.'), example: L('نموذج بيتملي، أو قايمة بتفتح', 'A form that fills in, or a menu that opens') },
          ],
        },
        {
          type: 'compare',
          columns: [L('بيعمل إيه', 'What it does')],
          rows: [
            { label: L('HTML', 'HTML'), cells: [L('الهيكل والمحتوى (عناوين، نص)', 'Structure and content (headings, text)')] },
            { label: L('JavaScript', 'JavaScript'), cells: [L('التحكم: بيحرّك ويكبّر ويغيّر', 'Manipulation: moving, zooming, changing')] },
          ],
        },
      ],
      bito: [
        L('HTML بيبني، وJavaScript بيحرّك.', 'HTML builds; JavaScript moves things.'),
        L('الاتنين مع بعض صفحة حية.', 'Together they make a living page.'),
      ],
    },
    {
      source: L('النقاط الرئيسية، ص 196', 'Key Points, p. 196'),
      blocks: [
        { type: 'heading', text: L('id: اسم نلاقي بيه الوسم', 'id: a name to find the tag') },
        {
          type: 'cards',
          items: [
            { title: L('id', 'id'), text: L('اسم فريد بنحطه للوسم عشان JavaScript يوصله.', 'A unique name we give the tag so JavaScript can reach it.'), example: L('<p id="text1">HELLO</p>', '<p id="text1">HELLO</p>') },
            { title: L('textContent', 'textContent'), text: L('خاصية بتحدد أو تغيّر النص جوه الوسم.', 'A property that sets or changes the text inside the tag.'), example: L('document.getElementById("text1").textContent = "GOOD MORNING";', 'document.getElementById("text1").textContent = "GOOD MORNING";') },
          ],
        },
        { type: 'memo', text: L('افتكر: id = العنوان · getElementById = روح للعنوان · textContent = غيّر الكلام', 'Remember: id = the address · getElementById = go to the address · textContent = change the words') },
      ],
      bito: [
        L('زي ما بتنادي صاحبك باسمه في الزحمة.', 'Like calling a friend by name in a crowd.'),
        L('الـ id هو اسم الوسم.', 'The id is the tag’s name.'),
      ],
    },
    {
      source: L('تحدي معلوماتك، ص 197', 'Test your information, p. 197'),
      blocks: [
        { type: 'heading', text: L('نغيّر Adam لـ Omar', 'Change Adam to Omar') },
        { type: 'web-lab', html: HTML_NAME, js: 'document.getElementById("name").textContent = "Omar";' },
        { type: 'memo', text: L('جرّب تكتب اسمك مكان Omar', 'Try writing your own name instead of Omar') },
      ],
      bito: [
        L('الصفحة اتفتحت Adam، والـ JavaScript غيّرتها لـ Omar.', 'The page opened as Adam, and JavaScript changed it to Omar.'),
        L('بدون ما نلمس الـ HTML.', 'Without touching the HTML.'),
      ],
    },
    {
      source: L('تحدي معلوماتك، ص 198', 'Test your information, p. 198'),
      blocks: [
        { type: 'heading', text: L('زرار بيغيّر النص', 'A button that changes the text') },
        {
          type: 'web-lab',
          html: HTML_BTN,
          js: 'const p = document.getElementById("name");\nconst btn = document.getElementById("btn");\n\nbtn.onclick = () => {\n  p.textContent = "Omar";\n};',
        },
        { type: 'memo', text: L('اضغط الزرار في الصفحة: الاسم يتغير', 'Press the button in the page: the name changes') },
      ],
      bito: [
        L('onclick معناها "لما حد يضغط".', 'onclick means "when someone clicks".'),
        L('وبعدها بنقول يعمل إيه.', 'Then we say what to do.'),
      ],
    },
    {
      source: L('تحدي معلوماتك، ص 199', 'Test your information, p. 199'),
      blocks: [
        { type: 'heading', text: L('زرار بيكبّر الخط', 'A button that enlarges the text') },
        {
          type: 'web-lab',
          html: HTML_SIZE,
          js: 'const text = document.getElementById("name");\nconst btn = document.getElementById("btn");\n\nbtn.onclick = () => {\n  text.style.fontSize = 50 + "px";\n};',
        },
        { type: 'memo', text: L('جرّب تغيّر 50 لـ 20 أو 80', 'Try changing 50 to 20 or 80') },
      ],
      bito: [
        L('style.fontSize بتغيّر حجم الخط من JavaScript.', 'style.fontSize changes the font size from JavaScript.'),
        L('والـ "px" معناها بكسل.', 'And "px" means pixels.'),
      ],
    },
    {
      source: L('جرب بنفسك، ص 200', 'Try it yourself, p. 200'),
      blocks: [
        { type: 'heading', text: L('جرّب بنفسك', 'Try it yourself') },
        {
          type: 'cards',
          items: [
            { title: L('لون وحجم مع بعض', 'Colour and size together'), text: L('خلّي لون النص وحجمه يتغيروا معًا عند الضغط على الزر.', 'Make the text’s colour and size change together when the button is pressed.') },
            { title: L('دالة (Function)', 'A function'), text: L('أضف عنصر جديد للعرض، وحاول تنشئ دالة تدمج تغيير نصوص العنصرين معًا عند النقر على الزر.', 'Add a new element, and try to make a function that changes both elements’ text together when the button is clicked.') },
          ],
        },
        { type: 'memo', text: L('تلميح: style.color بتغيّر اللون زي ما style.fontSize بتغيّر الحجم', 'Hint: style.color changes the colour just as style.fontSize changes the size') },
      ],
      bito: [
        L('كمّل في صفحة الزرار اللي فاتت.', 'Carry on in the button page before.'),
        L('اكتب سطرين جوه onclick.', 'Write two lines inside onclick.'),
      ],
    },
    qpage(
      L('النقاط الرئيسية، ص 196', 'Key Points, p. 196'),
      L('أنهي لغة بتخلّي صفحة الويب تتفاعل مع ضغطة الزر؟', 'Which language makes a web page react to a button press?'),
      ['HTML', 'CSS', 'JavaScript'],
      2,
      L('JavaScript بتخلّي الصفحة تستجيب لإجراءات المستخدم.', 'JavaScript makes the page answer user actions.'),
      L('صح! JavaScript.', 'Correct! JavaScript.'),
      [L('تفاعل = JavaScript.', 'Interaction = JavaScript.'), L('HTML للهيكل وCSS للشكل.', 'HTML is structure and CSS is looks.')],
    ),
    qpage(
      L('النقاط الرئيسية، ص 196', 'Key Points, p. 196'),
      L('بنعمل إيه في وسم HTML عشان JavaScript يقدر يوصله؟', 'What do we add to an HTML tag so JavaScript can reach it?'),
      [L('id', 'id'), L('title', 'title'), L('body', 'body')],
      0,
      L('id بيدّي الوسم اسم فريد، وJavaScript بيوصل له بـ getElementById.', 'id gives the tag a unique name, and JavaScript reaches it with getElementById.'),
      L('صح! id.', 'Correct! id.'),
      [L('الاسم الفريد هو id.', 'The unique name is the id.'), L('وبعدها getElementById.', 'Then getElementById.')],
    ),
    qpage(
      L('تحدي معلوماتك، ص 197', 'Test your information, p. 197'),
      L('الكود document.getElementById("name").textContent = "Omar"; بيعمل إيه؟', 'What does document.getElementById("name").textContent = "Omar"; do?'),
      [L('يغيّر نص الوسم اللي id بتاعه name لـ Omar', 'Changes the text of the tag whose id is name to Omar'), L('يلوّن الصفحة بالأحمر', 'Colours the page red'), L('يمسح الصفحة', 'Deletes the page')],
      0,
      L('getElementById بتلاقي الوسم، وtextContent بتغيّر النص اللي جواه.', 'getElementById finds the tag, and textContent changes the text inside it.'),
      L('صح! بيغيّر النص لـ Omar.', 'Correct! It changes the text to Omar.'),
      [L('الأول بنلاقي الوسم.', 'First we find the tag.'), L('وبعدين نغيّر الكلام.', 'Then we change the words.')],
    ),
    qpage(
      L('تحدي معلوماتك، ص 198', 'Test your information, p. 198'),
      L('في btn.onclick = () => { ... } إمتى بيتنفّذ اللي جوه الأقواس؟', 'In btn.onclick = () => { ... }, when does the code inside run?'),
      [L('لما الصفحة تتفتح بس', 'Only when the page opens'), L('لما حد يضغط على الزرار', 'When someone presses the button'), L('مش بيتنفّذ أبدًا', 'It never runs')],
      1,
      L('onclick معناها "عند الضغط"، فالكود بيتنفّذ كل مرة حد يضغط الزرار.', 'onclick means "on click", so the code runs each time someone presses the button.'),
      L('صح! عند الضغط.', 'Correct! On click.'),
      [L('click = ضغطة.', 'click = a press.'), L('وon = عند.', 'and on = when.')],
    ),
    {
      source: L('آخر الدرس', 'End of lesson'),
      blocks: [
        { type: 'heading', text: L('خلّصت درس 13-3!', 'You finished lesson 13-3!') },
        {
          type: 'recap',
          items: [
            { code: 'id', text: L('اسم الوسم', 'the tag’s name') },
            { code: 'getElementById', text: L('يلاقي الوسم', 'finds the tag') },
            { code: 'onclick', text: L('عند الضغط', 'on click') },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        L('شاطر! لعبة التوصيل: كل جزء كود ووظيفته.', 'Well done! The matching game: each piece of code and its job.'),
        L('فكّر في الجملة بالعربي.', 'Say the line in plain words.'),
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: L('جزء الكود ووظيفته', 'A piece of code and its job'),
        source: L('النقاط الرئيسية وتحدي معلوماتك، ص 196–199', 'Key Points and Test your information, pp. 196–199'),
        pairs: [
          { left: { text: L('id="name"', 'id="name"') }, right: L('اسم فريد للوسم', 'A unique name for the tag') },
          { left: { text: L('getElementById("name")', 'getElementById("name")') }, right: L('يلاقي الوسم باسمه', 'Finds the tag by its name') },
          { left: { text: L('textContent', 'textContent') }, right: L('يغيّر النص جوه الوسم', 'Changes the text inside the tag') },
          { left: { text: L('btn.onclick', 'btn.onclick') }, right: L('الكود اللي هيتنفذ عند الضغط', 'The code that runs on a click') },
          { left: { text: L('style.fontSize', 'style.fontSize') }, right: L('يغيّر حجم الخط', 'Changes the font size') },
        ],
      },
      {
        title: L('لغة إيه بتعمل إيه؟', 'Which language does what?'),
        source: L('النقاط الرئيسية، ص 193 و196', 'Key Points, pp. 193 and 196'),
        pairs: [
          { left: { text: L('HTML', 'HTML') }, right: L('الهيكل والمحتوى', 'Structure and content') },
          { left: { text: L('CSS', 'CSS') }, right: L('الشكل والتصميم', 'Looks and design') },
          { left: { text: L('JavaScript', 'JavaScript') }, right: L('التفاعل مع المستخدم', 'Interacting with the user') },
        ],
      },
    ],
  },
};
