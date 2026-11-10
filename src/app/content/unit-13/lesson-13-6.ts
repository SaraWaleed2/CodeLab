import { Lesson } from '@core/models';
import { L, qpage } from '../unit-12/helpers';

/**
 * Lesson 13-6 "لعبة تكسير القوالب" — ministry book pp. 211–217 (lessons 9, 10, 11 and 12 of the book).
 * Book notes:
 * - The game is written by Copilot from a Prompt and the code is NOT printed in the book (it differs each time), so
 *   the site does not include a game; it keeps the book's prompts, the changes it suggests and its development stories.
 * - pp.212, 214, 216 and 217 are exercises and presentation tasks (what the game is, the creative points, the
 *   difficulties, what the AI can and cannot do); they have no answer key. The site's game sorts the book's own
 *   examples from p.215.
 */
export const LESSON_13_6: Lesson = {
  unitId: 13,
  id: '13-6',
  title: L('لعبة تكسير القوالب', 'The Brick-Breaker Game'),
  bookPages: '211 – 217',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        L('أهلًا! آخر درس: لعبة تكسير القوالب. الذكاء الاصطناعي بيكتبها، وإنت تطوّرها.', 'Hi! The last lesson: the brick-breaker game. The AI writes it, you improve it.'),
        L('وبعدين هنحكي قصة تطويرها.', 'Then we tell the story of how it was developed.'),
      ],
    },
    {
      source: L('النقاط الرئيسية، ص 211', 'Key Points, p. 211'),
      blocks: [
        { type: 'heading', text: L('نطلب اللعبة من الذكاء الاصطناعي', 'Asking the AI for the game') },
        {
          type: 'cards',
          items: [
            { title: L('الـ Prompt', 'The prompt'), text: L('اطلب من Copilot: "اصنع لعبة تكسير قوالب بسيطة. اجعل أكواد HTML وCSS وJavaScript منفصلة."', 'Ask Copilot: "Make a simple brick-breaker game. Keep the HTML, CSS and JavaScript code separate."'), example: L('كرة بتخبط في مضرب وقوالب بتتكسر', 'A ball hits a paddle and bricks break') },
            { title: L('الملفات التلاتة', 'The three files'), text: L('انسخ كل كود في تبويبه في WebDen وشغّله.', 'Copy each code into its own tab in WebDen and run it.'), example: L('HTML للهيكل، CSS للشكل، JavaScript للحركة', 'HTML for structure, CSS for looks, JavaScript for movement') },
          ],
        },
        { type: 'memo', text: L('ملحوظة الكتاب: الكود بيختلف في كل مرة، فده مجرد مثال', 'The book’s note: the code differs each time, so this is just an example') },
      ],
      bito: [
        L('الصورة في الكتاب: صفوف قوالب برتقالي، وكرة زرقا، ومضرب تحت.', 'The picture in the book: rows of orange bricks, a blue ball and a paddle below.'),
        L('الكتاب مش بيطبع الكود، فمش هنخترعه.', 'The book does not print the code, so we will not invent it.'),
      ],
    },
    {
      source: L('جرب بنفسك، ص 212', 'Try it yourself, p. 212'),
      blocks: [
        { type: 'heading', text: L('عدّل اللعبة بنفسك', 'Edit the game yourself') },
        {
          type: 'cards',
          items: [
            { title: L('حاول من غير الذكاء الاصطناعي', 'Without the AI this time'), text: L('فكّر في البرنامج بنفسك وعدّله يدويًا.', 'Think about the program yourself and edit it by hand.') },
            { title: L('تعديلات الكتاب', 'The book’s changes'), text: L('تكبير حجم الكرة · تغيير لون القوالب (Blocks) · زيادة عدد القوالب.', 'Make the ball bigger · change the colour of the blocks · add more blocks.') },
          ],
        },
        { type: 'memo', text: L('بعد التعديل اكتب: إيه الصعب؟ وإيه استراتيجيتك؟', 'After editing, write: what was hard, and what was your strategy?') },
      ],
      bito: [
        L('ده التمرين الأهم: تعدّل كود مش إنت كاتبه.', 'This is the key exercise: editing code you did not write.'),
        L('وده شغل المبرمج كل يوم.', 'And it is a programmer’s daily work.'),
      ],
    },
    {
      source: L('تطوير اللعبة (2)، ص 213–214', 'Developing the game (2), pp. 213–214'),
      blocks: [
        { type: 'heading', text: L('نطوّر اللعبة بأوامر جديدة', 'Develop the game with new prompts') },
        {
          type: 'cards',
          items: [
            { title: L('أمر تحديث', 'An update prompt'), text: L('"اجعل زاوية الكرة تتغير في كل مرة تصطدم فيها باللاعب."', '"Make the ball’s angle change every time it hits the player."') },
            { title: L('تغييرات أكتر', 'More changes'), text: L('تغيير سرعة الكرة · عرض النتيجة (Score) · تعيين عدد المحاولات (Lives) · تغيير صلابة القوالب.', 'Change the ball’s speed · show the score · set the number of tries (Lives) · change how hard the blocks are.') },
          ],
        },
        { type: 'memo', text: L('تقدر تستخدم الذكاء الاصطناعي في توليد الكود، أو تعدّله بنفسك يدويًا', 'You can use the AI to generate the code, or edit it yourself by hand') },
      ],
      bito: [
        L('نقطة الـ Score والـ Lives هي اللي بتخلّي اللعبة لعبة بجد.', 'The score and the lives are what make it a real game.'),
        L('كل ميزة جديدة = أمر جديد.', 'Each new feature = a new prompt.'),
      ],
    },
    {
      source: L('تحدي معلوماتك (2)، ص 215', 'Test your information (2), p. 215'),
      blocks: [
        { type: 'heading', text: L('قصص التطوير', 'Development stories') },
        {
          type: 'cards',
          items: [
            { title: L('نقاط إبداع', 'Creative points'), text: L('سرعة الكرة بتتغير كل مرة تخبط في اللاعب. ولون النص بيتغير لما نحقق رقم قياسي جديد (High Score).', 'The ball’s speed changes each time it hits the player. The text colour changes when we reach a new high score.') },
            { title: L('صعوبات واجهتنا', 'Difficulties we met'), tone: 'no', text: L('لما زوّدنا عدد القوالب بقت اللعبة صعبة جدًا. ولما البرنامج وقف عن العمل اضطررنا نعيد بناءه من البداية.', 'When we added many blocks the game became too hard. When the program stopped working we had to rebuild it from the start.') },
          ],
        },
      ],
      bito: [
        L('دي قصص حقيقية من الكتاب لطلاب عملوا اللعبة.', 'These are real stories from the book of students who made the game.'),
        L('الصعوبات جزء طبيعي من البرمجة.', 'Difficulties are a normal part of programming.'),
      ],
    },
    {
      source: L('تمرين (1) و(2)، ص 212 و215', 'Exercise (1) and (2), pp. 212 and 215'),
      blocks: [
        { type: 'heading', text: L('استراتيجيات التعامل مع كود مش بتاعك', 'Strategies for code that is not yours') },
        {
          type: 'cards',
          items: [
            { title: L('صعوبة', 'A difficulty'), tone: 'no', text: L('ما عرفتش أي قيمة لازم أغيّرها عشان أكبّر الكرة، وكان صعب ألاقي مكان رسم الكرة جوه الكود الكامل.', 'I did not know which value to change to enlarge the ball, and it was hard to find where the ball is drawn inside the full code.') },
            { title: L('استراتيجية', 'A strategy'), text: L('خمّنت المعنى من أسماء المتغيرات وبحثت عن الأجزاء ذات الصلة. غيّرت القيم شوية وتأكدت من الحركة.', 'I guessed the meaning from the variable names and searched for the related parts. I changed the values slightly and checked the movement.') },
          ],
        },
        { type: 'memo', text: L('افتكر: غيّر حاجة صغيرة، وشوف النتيجة، وكرر', 'Remember: change one small thing, look at the result, repeat') },
      ],
      bito: [
        L('أسماء المتغيرات هي أحسن دليل.', 'Variable names are the best clue.'),
        L('ball أو speed أو score بتقولك هي إيه.', 'ball, speed or score tell you what they are.'),
      ],
    },
    {
      source: L('تحدي معلوماتك (3)، ص 215–217', 'Test your information (3), pp. 215–217'),
      blocks: [
        { type: 'heading', text: L('عرض مشروعك', 'Present your project') },
        {
          type: 'cards',
          items: [
            { title: L('اشرح اللعبة', 'Explain the game'), text: L('ما هي اللعبة اللي صنعتها؟ عنوانها وقواعدها وعدد المحاولات والتصنيف.', 'What game did you make? Its title, rules, number of tries and ranking.') },
            { title: L('المناقشة', 'Discuss'), text: L('نقاط الإبداع والصعوبات، وإيه اللي يقدر الذكاء الاصطناعي يعمله وإيه اللي مايقدرش.', 'The creative points and difficulties, and what the AI can and cannot do.') },
            { title: L('العرض', 'The presentation'), text: L('لخّص في 4 لـ 5 شرائح (Slides). ويمكنك الاستعانة بالذكاء الاصطناعي في التلخيص.', 'Summarise in 4 to 5 slides. You can use the AI to help summarise.') },
          ],
        },
      ],
      bito: [
        L('العرض ده بتعمله في الفصل مع زمايلك.', 'You give this presentation in class with your classmates.'),
        L('اتكلم عن اللي إنت عملته مش بس اللي الذكاء الاصطناعي عمله.', 'Talk about what you did, not just what the AI did.'),
      ],
    },
    qpage(
      L('النقاط الرئيسية، ص 211', 'Key Points, p. 211'),
      L('لما نطلب لعبة تكسير القوالب، ليه بنطلب إن أكواد HTML وCSS وJavaScript تكون منفصلة؟', 'When we ask for the brick-breaker game, why do we ask for HTML, CSS and JavaScript code to be separate?'),
      [L('عشان ننسخ كل واحد في تبويبه في WebDen', 'So we can copy each into its own tab in WebDen'), L('عشان اللعبة تبقى أسرع', 'So the game is faster'), L('عشان ما نحتاجش JavaScript', 'So we do not need JavaScript')],
      0,
      L('الكتاب بيقول ننسخ كل كود في تبويبه في WebDen ونشغّله.', 'The book says to copy each code into its own tab in WebDen and run it.'),
      L('صح! كل كود في تبويبه.', 'Correct! Each code in its own tab.'),
      [L('تلات ملفات = تلات تبويبات.', 'Three files = three tabs.'), L('وبكده الشغل منظم.', 'And the work stays organised.')],
    ),
    qpage(
      L('تطوير اللعبة، ص 213', 'Developing the game, p. 213'),
      L('أمر التحديث "اجعل زاوية الكرة تتغير في كل مرة تصطدم فيها باللاعب" بيطلب إيه؟', 'The update prompt "Make the ball’s angle change every time it hits the player" asks for what?'),
      [L('الكرة تغيّر زاويتها كل ما تخبط في المضرب', 'The ball changes its angle each time it hits the paddle'), L('القوالب تتلوّن', 'The bricks change colour'), L('اللعبة تقف', 'The game stops')],
      0,
      L('الأمر بيطلب إن زاوية الكرة تتغير عند كل اصطدام باللاعب (المضرب).', 'The prompt asks for the ball’s angle to change at each hit with the player (the paddle).'),
      L('صح! الزاوية بتتغير.', 'Correct! The angle changes.'),
      [L('الأمر واضح ومحدد.', 'The prompt is clear and specific.'), L('وده سر الـ Prompt الكويس.', 'That is the secret of a good prompt.')],
    ),
    qpage(
      L('تحدي معلوماتك (2)، ص 215', 'Test your information (2), p. 215'),
      L('لما زوّدنا عدد القوالب كتير، إيه اللي حصل في قصة الكتاب؟', 'When many blocks were added, what happened in the book’s story?'),
      [L('اللعبة بقت صعبة جدًا', 'The game became too hard'), L('اللعبة بقت أسهل', 'The game became easier'), L('الكرة اختفت', 'The ball disappeared')],
      0,
      L('الكتاب بيذكر إنه لما اتزوّد عدد القوالب، أصبحت اللعبة صعبة للغاية.', 'The book says that when the number of blocks was increased, the game became extremely hard.'),
      L('صح! بقت صعبة جدًا.', 'Correct! It became too hard.'),
      [L('كل تعديل ليه تأثير.', 'Every change has an effect.'), L('لازم نجرّب ونوازن.', 'We must try and balance.')],
    ),
    {
      source: L('آخر الدرس', 'End of lesson'),
      blocks: [
        { type: 'heading', text: L('خلّصت درس 13-6 ووحدة الذكاء الاصطناعي التوليدي!', 'You finished lesson 13-6 and the generative AI unit!') },
        {
          type: 'recap',
          items: [
            { code: 'Prompt', text: L('أمر واضح = كود أحسن', 'a clear prompt = better code') },
            { code: '≠ 100%', text: L('راجع كود الذكاء الاصطناعي', 'review the AI’s code') },
            { code: '+', text: L('عدّل بنفسك وجرّب', 'edit it yourself and experiment') },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        L('شاطر! لعبة الفرز الأخيرة: إبداع ولا صعوبة ولا استراتيجية؟', 'Well done! The last sorting game: creativity, difficulty or strategy?'),
        L('كل الأمثلة من قصص الكتاب.', 'All the examples come from the book’s stories.'),
      ],
    },
  ],

  game: {
    kind: 'sort',
    rounds: [
      {
        title: L('قصص التطوير: إبداع ولا صعوبة ولا استراتيجية؟', 'Development stories: creativity, difficulty or strategy?'),
        source: L('تحدي معلوماتك (2)، ص 215', 'Test your information (2), p. 215'),
        bins: [
          { id: 'creative', label: L('نقطة إبداع', 'Creative point') },
          { id: 'difficulty', label: L('صعوبة', 'Difficulty') },
          { id: 'strategy', label: L('استراتيجية', 'Strategy') },
        ],
        items: [
          { text: L('سرعة الكرة بتتغير مع كل خبطة في اللاعب', 'The ball’s speed changes with each hit on the player'), bin: 'creative' },
          { text: L('لون النص بيتغير عند رقم قياسي جديد', 'The text colour changes on a new high score'), bin: 'creative' },
          { text: L('لما زوّدنا القوالب بقت اللعبة صعبة جدًا', 'When we added blocks the game became too hard'), bin: 'difficulty' },
          { text: L('البرنامج وقف واضطررنا نعيد بناءه من البداية', 'The program stopped and we had to rebuild it from the start'), bin: 'difficulty' },
          { text: L('خمّنا المعنى من أسماء المتغيرات', 'We guessed the meaning from the variable names'), bin: 'strategy' },
          { text: L('غيّرنا القيم شوية وتأكدنا من الحركة', 'We changed the values slightly and checked the movement'), bin: 'strategy' },
        ],
      },
    ],
  },
};
