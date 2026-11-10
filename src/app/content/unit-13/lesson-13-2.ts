import { Lesson } from '@core/models';
import { L, qpage } from '../unit-12/helpers';

const HTML_BASIC = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>About Me</title>
</head>
<body>
  <h1>Adam</h1>
</body>
</html>`;

const HTML_P = `<h1>My page</h1>
<p>HELLO</p>
<p>WORLD</p>`;

const HTML_CLASS = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>About Me</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1 class="name">Adam</h1>
</body>
</html>`;

/**
 * Lesson 13-2 "HTML, CSS" — ministry book pp. 193–195.
 * Book notes:
 * - p.193: HTML is the structure and content, CSS is the design; the book's p{color:red} example.
 * - pp.194–195: the "Adam" page and the class="name" example. The book runs them on WebDen; the site runs them
 *   in its own editor with the same code.
 * - The exercises on pp.195 have no answer key.
 */
export const LESSON_13_2: Lesson = {
  unitId: 13,
  id: '13-2',
  title: L('HTML وCSS', 'HTML and CSS'),
  bookPages: '193 – 195',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        L('أهلًا! أي موقع إنت بتشوفه مبني من لغتين: واحدة للهيكل وواحدة للشكل.', 'Hi! Every website you see is built from two languages: one for the structure, one for the look.'),
        L('وهتعدّل الكود بإيدك وتشوف الصفحة بتتغير.', 'And you edit the code by hand and watch the page change.'),
      ],
    },
    {
      source: L('النقاط الرئيسية، ص 193', 'Key Points, p. 193'),
      blocks: [
        { type: 'heading', text: L('HTML للهيكل وCSS للشكل', 'HTML for structure, CSS for looks') },
        {
          type: 'cards',
          items: [
            { title: L('HTML', 'HTML'), en: 'Hypertext Markup Language', text: L('اللغة الأساسية لعرض صفحات الويب. بتحدد العناصر الأساسية بالوسوم (tags): عناوين وجداول وقوائم.', 'The basic language for showing web pages. It marks the main elements with tags: headings, tables, lists.'), example: L('زي هيكل البيت: الحيطان والأبواب', 'Like the frame of a house: walls and doors') },
            { title: L('CSS', 'CSS'), en: 'Cascading Style Sheets', text: L('بتحدد شكل وتصميم الصفحة: الألوان والخطوط والخلفيات والمسافات.', 'Sets the look and design of the page: colours, fonts, backgrounds and spacing.'), example: L('زي دهان البيت وفرشه', 'Like the paint and furniture of the house') },
          ],
        },
        { type: 'memo', text: L('افتكر: HTML + CSS = صفحة منظمة وحلوة', 'Remember: HTML + CSS = a well-organised, nice-looking page') },
      ],
      bito: [
        L('من غير CSS الصفحة بتبقى سادة.', 'Without CSS the page is plain.'),
        L('ومن غير HTML مفيش صفحة أصلًا.', 'And without HTML there is no page at all.'),
      ],
    },
    {
      source: L('النقاط الرئيسية، ص 193', 'Key Points, p. 193'),
      blocks: [
        { type: 'heading', text: L('جرّب: <p> تبقى حمرا', 'Try it: make <p> red') },
        { type: 'web-lab', html: HTML_P, css: 'p {\n  color: red;\n}' },
        { type: 'memo', text: L('جرّب تغيّر red لـ blue وداس شغّل', 'Try changing red to blue and press Run') },
      ],
      bito: [
        L('الـ HTML بيكتب الكلام، والـ CSS بيلوّن كل <p>.', 'HTML writes the words; CSS colours every <p>.'),
        L('قاعدة واحدة بتغيّر كل الفقرات.', 'One rule changes every paragraph.'),
      ],
    },
    {
      source: L('تحدي معلوماتك، ص 194', 'Test your information, p. 194'),
      blocks: [
        { type: 'heading', text: L('أول صفحة: About Me', 'Your first page: About Me') },
        { type: 'web-lab', html: HTML_BASIC },
        { type: 'memo', text: L('الكتاب بيكتبها في موقع WebDen. جرّب تغيّر Adam لاسمك', 'The book writes it on WebDen. Try changing Adam to your name') },
      ],
      bito: [
        L('كل وسم بيتفتح <h1> وبيتقفل </h1>.', 'Each tag opens <h1> and closes </h1>.'),
        L('والكلام بينهم هو اللي بيظهر.', 'The words between them are what shows.'),
      ],
    },
    {
      source: L('تحدي معلوماتك، ص 194–195', 'Test your information, pp. 194–195'),
      blocks: [
        { type: 'heading', text: L('class: نربط الوسم بتصميم', 'class: link a tag to a style') },
        { type: 'web-lab', html: HTML_CLASS, css: '.name {\n  color: blue;\n}' },
        { type: 'memo', text: L('class="name" في HTML ← .name { } في CSS', 'class="name" in HTML ← .name { } in CSS') },
      ],
      bito: [
        L('الاسم name هو الجسر بين الاتنين.', 'The name "name" is the bridge between the two.'),
        L('وبالـ class نقدر ننسّق كل عنصر لوحده حتى لو وسومهم زي بعض.', 'With class we can style each element on its own even if the tags are alike.'),
      ],
    },
    {
      source: L('جرب بنفسك، ص 195', 'Try it yourself, p. 195'),
      blocks: [
        { type: 'heading', text: L('جرّب بنفسك', 'Try it yourself') },
        {
          type: 'cards',
          items: [
            { title: L('غيّر حجم الخط ونوعه', 'Change the font size and type'), text: L('في صفحة Adam، غيّر الخط بقاعدة CSS.', 'In the Adam page, change the font with a CSS rule.') },
            { title: L('أضف عنصر', 'Add an element'), text: L('زوّد عنصر جديد في الصفحة عن طريق HTML.', 'Add a new element to the page with HTML.') },
          ],
        },
        { type: 'memo', text: L('افتكر: كل تعديل في الشكل بيتعمل في CSS', 'Remember: every change of looks is made in CSS') },
      ],
      bito: [
        L('ارجع لصفحة class وعدّل فيها.', 'Go back to the class page and edit it.'),
        L('مفيش حاجة هتتكسر.', 'Nothing will break.'),
      ],
    },
    qpage(
      L('النقاط الرئيسية، ص 193', 'Key Points, p. 193'),
      L('أنهي لغة بتحدد هيكل الصفحة ومحتواها (العناوين والجداول)؟', 'Which language sets the page’s structure and content (headings and tables)?'),
      ['HTML', 'CSS'],
      0,
      L('HTML هي اللي بتحدد العناصر الأساسية: عناوين وجداول وقوائم.', 'HTML sets the basic elements: headings, tables and lists.'),
      L('صح! HTML للهيكل.', 'Correct! HTML is for structure.'),
      [L('الهيكل = المحتوى.', 'Structure = content.'), L('زي حيطان البيت.', 'Like the walls of a house.')],
    ),
    qpage(
      L('النقاط الرئيسية، ص 193', 'Key Points, p. 193'),
      L('لو عايز تخلّي لون الكلام أحمر، تستخدم إيه؟', 'To make the text red, what do you use?'),
      ['HTML', 'CSS'],
      1,
      L('CSS هي اللي بتتحكم في الألوان والخطوط والخلفيات: p { color: red; }', 'CSS controls colours, fonts and backgrounds: p { color: red; }'),
      L('صح! CSS للألوان.', 'Correct! CSS is for colours.'),
      [L('اللون = شكل.', 'Colour = looks.'), L('والشكل شغل CSS.', 'And looks are CSS’s job.')],
    ),
    qpage(
      L('تحدي معلوماتك، ص 195', 'Test your information, p. 195'),
      L('كود CSS ده: .name { color: blue; } بيتطبّق على أنهي وسم؟', 'The CSS code .name { color: blue; } applies to which tag?'),
      ['<h1 class="name">', '<h1 id="name">', '<p>'],
      0,
      L('النقطة قبل name معناها class: بيتطبق على أي وسم فيه class="name".', 'The dot before name means class: it applies to any tag with class="name".'),
      L('صح! class="name".', 'Correct! class="name".'),
      [L('النقطة . في CSS = class.', 'The dot . in CSS = class.'), L('دوّر على class في الوسم.', 'Look for class in the tag.')],
    ),
    {
      source: L('آخر الدرس', 'End of lesson'),
      blocks: [
        { type: 'heading', text: L('خلّصت درس 13-2!', 'You finished lesson 13-2!') },
        {
          type: 'recap',
          items: [
            { code: 'HTML', text: L('الهيكل والمحتوى', 'structure and content') },
            { code: 'CSS', text: L('الشكل والتصميم', 'looks and design') },
            { code: 'class', text: L('بيربط وسم HTML بقاعدة CSS', 'links an HTML tag to a CSS rule') },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        L('شاطر! لعبة الفرز: HTML ولا CSS؟', 'Well done! The sorting game: HTML or CSS?'),
        L('اسأل: هل ده محتوى ولا شكل؟', 'Ask: is it content, or looks?'),
      ],
    },
  ],

  game: {
    kind: 'sort',
    rounds: [
      {
        title: L('HTML ولا CSS؟', 'HTML or CSS?'),
        source: L('النقاط الرئيسية، ص 193', 'Key Points, p. 193'),
        bins: [
          { id: 'html', label: L('HTML (الهيكل)', 'HTML (structure)') },
          { id: 'css', label: L('CSS (الشكل)', 'CSS (looks)') },
        ],
        items: [
          { text: L('عنوان الصفحة', 'A page heading'), bin: 'html' },
          { text: L('جدول', 'A table'), bin: 'html' },
          { text: L('قائمة', 'A list'), bin: 'html' },
          { text: L('لون الكلام', 'The text colour'), bin: 'css' },
          { text: L('نوع الخط', 'The font'), bin: 'css' },
          { text: L('لون الخلفية', 'The background colour'), bin: 'css' },
        ],
      },
      {
        title: L('الكود ده بتاع مين؟', 'Whose code is this?'),
        source: L('النقاط الرئيسية وتحدي معلوماتك، ص 193–195', 'Key Points and Test your information, pp. 193–195'),
        bins: [
          { id: 'html', label: L('HTML', 'HTML') },
          { id: 'css', label: L('CSS', 'CSS') },
        ],
        items: [
          { text: L('<h1>My page</h1>', '<h1>My page</h1>'), bin: 'html' },
          { text: L('<p>HELLO</p>', '<p>HELLO</p>'), bin: 'html' },
          { text: L('<h1 class="name">Adam</h1>', '<h1 class="name">Adam</h1>'), bin: 'html' },
          { text: L('p { color: red; }', 'p { color: red; }'), bin: 'css' },
          { text: L('.name { color: blue; }', '.name { color: blue; }'), bin: 'css' },
        ],
      },
    ],
  },
};
