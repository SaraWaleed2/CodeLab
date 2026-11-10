import { Lesson } from '@core/models';
import { L, qpage } from '../unit-12/helpers';

/**
 * Lesson 13-1 "الذكاء الاصطناعي التوليدي" — ministry book pp. 191–192.
 * Book notes:
 * - p.191: what generative AI is, how a Prompt works, the "Truth" caution (it predicts the likeliest word, it does not
 *   know facts), and the tools named (ChatGPT, Google Gemini, Microsoft Copilot). p.192: using it to make a quiz.
 * - The book's activities ask the student to open Copilot; the site keeps to the ideas and the prompts the book prints.
 * - The exercise on p.192 has no answer key.
 */
export const LESSON_13_1: Lesson = {
  unitId: 13,
  id: '13-1',
  title: L('الذكاء الاصطناعي التوليدي', 'Generative AI'),
  bookPages: '191 – 192',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        L('أهلًا! النهارده هنعرف إزاي الذكاء الاصطناعي بيكتب لك قصة وبيعمل لك اختبار.', 'Hi! Today we find out how AI writes you a story and makes you a quiz.'),
        L('وأهم حاجة: إمتى نصدّقه وإمتى نتأكد منه.', 'And most important: when to trust it and when to check.'),
      ],
    },
    {
      source: L('النقاط الرئيسية، ص 191', 'Key Points, p. 191'),
      blocks: [
        { type: 'heading', text: L('ما هو الذكاء الاصطناعي التوليدي؟', 'What is generative AI?') },
        {
          type: 'cards',
          items: [
            { title: L('الذكاء الاصطناعي التوليدي', 'Generative AI'), en: 'Generative AI', text: L('بيقوم بمهام ذهنية بتحاكي الإنسان: بيولّد أفكار ونصوص جديدة.', 'Does mental tasks that imitate people: it generates new ideas and texts.'), example: L('تقول له "اكتب قصة" فيكتب لك قصة', 'You say "write a story" and it writes you one') },
            { title: L('بيستخدمه الناس في', 'People use it for'), text: L('الإنتاجية، والتعليم، والبرمجة (يكتب لك الكود).', 'Productivity, education and programming (it writes code for you).'), example: L('ملخص درس، أو اختبار، أو صفحة ويب', 'A lesson summary, a quiz or a web page') },
          ],
        },
        { type: 'memo', text: L('افتكر: توليدي = بيولّد حاجة جديدة مش بيدوّر على حاجة قديمة', 'Remember: generative = it generates something new, not just looks something up') },
      ],
      bito: [
        L('زي صديق شاطر في الكتابة، بس بيتعلم من كمية ضخمة من الكلام.', 'Like a friend who writes well, but learned from a huge amount of text.'),
        L('وده بيخلّي ردوده شكلها طبيعي.', 'That makes its replies sound natural.'),
      ],
    },
    {
      source: L('النقاط الرئيسية، ص 191', 'Key Points, p. 191'),
      blocks: [
        { type: 'heading', text: L('الأمر (Prompt) وإزاي بيرد', 'The Prompt and how it replies') },
        {
          type: 'cards',
          items: [
            { title: L('Prompt', 'Prompt'), en: 'Prompts', text: L('الأمر أو السؤال اللي إنت بتكتبه له.', 'The command or question you type to it.'), example: L('"اكتب قصة قصيرة عن مغامرة في مصر"', '"Write a short story about an adventure in Egypt"') },
            { title: L('بيرد إزاي؟', 'How does it answer?'), text: L('بيبني ردّه كلمة ورا كلمة، ويختار الكلمة الأكتر احتمالًا.', 'It builds its answer word after word, picking the likeliest word.'), example: L('"عاصمة مصر هي ..." ← الأرجح "القاهرة" ← وهكذا لحد آخر الجملة', '"The capital of Egypt is ..." → the likeliest is "Cairo" → and so on to the end of the sentence') },
          ],
        },
        { type: 'memo', text: L('افتكر: بيتنبأ بالكلمة الجاية، مش بيفتكر الحقيقة', 'Remember: it predicts the next word; it does not remember the truth') },
      ],
      bito: [
        L('زي ما موبايلك بيقترح الكلمة الجاية وإنت بتكتب، بس أقوى بكتير.', 'Like your phone suggesting the next word as you type, but much stronger.'),
        L('الفكرة نفسها.', 'Same idea.'),
      ],
    },
    {
      source: L('النقطة الجوهرية، ص 191', 'The core point, p. 191'),
      blocks: [
        { type: 'heading', text: L('تنبيه مهم!', 'An important warning!') },
        {
          type: 'cards',
          items: [
            { title: L('مش بيفهم زينا', 'It does not understand as we do'), text: L('الذكاء الاصطناعي بيعتمد على التسلسل اللغوي في البيانات اللي اتدرّب عليها، مش على معرفة بشرية.', 'It relies on the language sequences in its training data, not on human knowledge.'), example: L('ممكن يكتب جملة شكلها صح وهي غلط', 'It can write a sentence that sounds right and is wrong') },
            { title: L('ما نعتمدش عليه 100%', 'Do not depend on it 100%'), tone: 'no', text: L('لازم نفهم خصائصه ونتأكد من اللي بيطلّعه.', 'We must understand its nature and check what it gives.'), example: L('معلومة تاريخية؟ اتأكد من مصدر موثوق', 'A historical fact? Check a trustworthy source') },
          ],
        },
        { type: 'memo', text: L('افتكر: رد حلو الشكل ≠ رد صحيح', 'Remember: a nice-looking reply ≠ a correct reply') },
      ],
      bito: [
        L('ده أهم درس في الوحدة كلها.', 'This is the most important lesson of the whole unit.'),
        L('اسأل دايمًا: مين قال؟ وأتأكد منين؟', 'Always ask: who says so? And where do I check?'),
      ],
    },
    {
      source: L('تحدي معلوماتك، ص 191', 'Test your information, p. 191'),
      blocks: [
        { type: 'heading', text: L('أدوات الذكاء الاصطناعي التوليدي', 'Generative AI tools') },
        { type: 'chips', items: [L('ChatGPT', 'ChatGPT'), L('Google Gemini', 'Google Gemini'), L('Microsoft Copilot', 'Microsoft Copilot')] },
        { type: 'memo', text: L('الكتاب هيشتغل على Microsoft Copilot (من تطبيقات Microsoft 365)', 'The book works with Microsoft Copilot (one of the Microsoft 365 apps)') },
      ],
      bito: [
        L('كلهم بيشتغلوا بنفس الفكرة: تكتب أمر ويرد.', 'They all work the same way: you type a prompt and it replies.'),
        L('الفرق في الشركة اللي عملته.', 'The difference is the company that made it.'),
      ],
    },
    {
      source: L('تحدي معلوماتك، ص 191–192', 'Test your information, pp. 191–192'),
      blocks: [
        { type: 'heading', text: L('جرّب Prompts الكتاب', 'Try the book’s prompts') },
        {
          type: 'steps',
          items: [
            { title: L('أولًا: اكتب قصة', 'First: write a story'), text: L('"اكتب قصة قصيرة عن مغامرة في مصر."', '"Write a short story about an adventure in Egypt."'), example: L('بعدها عدّل: "عدّل القصة لتحتوي على نهاية أخرى."', 'Then change it: "Edit the story to have another ending."') },
            { title: L('ثانيًا: اعمل اختبار', 'Second: make a quiz'), text: L('"قدم لي اختبارًا قصيرًا (Quiz) عن مصر، وانتظر حتى أجيب."', '"Give me a short quiz about Egypt, and wait until I answer."'), example: L('ويقدر يغيّره من اختيار من متعدد لأسئلة مقالية', 'And it can turn it from multiple choice into essay questions') },
          ],
        },
        { type: 'memo', text: L('افتكر: Prompt أوضح = رد أحسن', 'Remember: a clearer prompt = a better reply') },
      ],
      bito: [
        L('إنت بتتحكم في الرد بالأمر اللي بتكتبه.', 'You steer the reply with the prompt you write.'),
        L('جرّب تغيّر الأمر وشوف الفرق.', 'Try changing the prompt and see the difference.'),
      ],
    },
    {
      source: L('جرب بنفسك (3)، ص 192', 'Try it yourself (3), p. 192'),
      blocks: [
        { type: 'heading', text: L('البحث والتقصي', 'Research and checking') },
        {
          type: 'cards',
          items: [
            { title: L('اسأل عن حقيقة', 'Ask about a fact'), text: L('زي: "من بنى أهرامات مصر؟" وتعمّق في الأسئلة.', 'Like: "Who built the pyramids of Egypt?" and dig into follow-up questions.') },
            { title: L('نقطة التحقق', 'The check'), text: L('استعن بمحركات البحث الموثوقة (أو معلم التاريخ) للتأكد من صحة المعلومات.', 'Use trustworthy search engines (or your history teacher) to check the information.') },
          ],
        },
        { type: 'memo', text: L('افتكر: اسأل الذكاء الاصطناعي، وبعدين اتأكد من مصدر تاني', 'Remember: ask the AI, then check with another source') },
      ],
      bito: [
        L('ده اللي بيفرّق الطالب الشاطر.', 'This is what sets a smart student apart.'),
        L('مش كل رد بنصدّقه من أول مرة.', 'We do not believe every reply the first time.'),
      ],
    },
    qpage(
      L('النقاط الرئيسية، ص 191', 'Key Points, p. 191'),
      L('الذكاء الاصطناعي التوليدي بيعمل إيه؟', 'What does generative AI do?'),
      [L('بيولّد نصوص وأفكار جديدة', 'Generates new texts and ideas'), L('بيخزّن ملفاتك بس', 'Only stores your files'), L('بيصلّح الكمبيوتر', 'Repairs the computer')],
      0,
      L('الذكاء الاصطناعي التوليدي بينفّذ مهام ذهنية بتحاكي الإنسان، وبيولّد أفكار ونصوص جديدة.', 'Generative AI does mental tasks that imitate people and generates new ideas and texts.'),
      L('صح! بيولّد حاجة جديدة.', 'Correct! It generates something new.'),
      [L('الكلمة "توليدي" هي الدليل.', 'The word "generative" is the clue.'), L('يعني بيطلّع حاجة جديدة.', 'It brings out something new.')],
    ),
    qpage(
      L('النقاط الرئيسية، ص 191', 'Key Points, p. 191'),
      L('إيه اسم الأمر أو السؤال اللي بنكتبه للذكاء الاصطناعي؟', 'What is the command or question we type to the AI called?'),
      ['Prompt', 'Quiz', 'Workflow'],
      0,
      L('الأمر اللي بنكتبه للذكاء الاصطناعي اسمه Prompt.', 'The command we type to the AI is called a Prompt.'),
      L('صح! Prompt.', 'Correct! Prompt.'),
      [L('Prompt = أمر.', 'Prompt = command.'), L('وبيحدد شكل الرد.', 'It shapes the reply.')],
    ),
    qpage(
      L('النقطة الجوهرية، ص 191', 'The core point, p. 191'),
      L('لما الذكاء الاصطناعي يجاوب "عاصمة مصر هي القاهرة"، هو عمل كده إزاي؟', 'When the AI answers "the capital of Egypt is Cairo", how did it do that?'),
      [L('اختار الكلمة الأكتر احتمالًا بعد الجملة', 'It picked the likeliest word after the sentence'), L('فتح الأطلس وقرا منه', 'It opened an atlas and read it'), L('سأل شخص وانتظر', 'It asked a person and waited')],
      0,
      L('بيبني الرد كلمة ورا كلمة، ويختار الكلمة الأرجح احتمالًا حسب اللي اتدرّب عليه.', 'It builds the reply word by word, picking the likeliest word from what it was trained on.'),
      L('صح! أرجح كلمة.', 'Correct! The likeliest word.'),
      [L('مش بيدوّر في كتاب.', 'It does not search a book.'), L('بيتوقّع الكلمة الجاية.', 'It guesses the next word.')],
    ),
    qpage(
      L('النقطة الجوهرية، ص 191', 'The core point, p. 191'),
      L('بعد ما الذكاء الاصطناعي يديك معلومة، المفروض تعمل إيه؟', 'After the AI gives you a fact, what should you do?'),
      [L('أصدّقها 100% علطول', 'Believe it 100% straight away'), L('أتأكد منها من مصدر موثوق', 'Check it with a trustworthy source'), L('أحذفها', 'Delete it')],
      1,
      L('ما نعتمدش عليه 100%: لازم نفهم خصائصه ونتأكد من اللي بيطلّعه.', 'We do not depend on it 100%: we must understand its nature and check what it gives.'),
      L('صح! اتأكد دايمًا.', 'Correct! Always check.'),
      [L('الرد الحلو مش معناه صح.', 'A nice reply does not mean a correct one.'), L('اتأكد من مصدر موثوق.', 'Check a trustworthy source.')],
    ),
    {
      source: L('آخر الدرس', 'End of lesson'),
      blocks: [
        { type: 'heading', text: L('خلّصت درس 13-1!', 'You finished lesson 13-1!') },
        {
          type: 'recap',
          items: [
            { code: 'Prompt', text: L('الأمر اللي بنكتبه', 'the command we type') },
            { code: '≠ 100%', text: L('نتأكد من الرد', 'check the reply') },
            { code: '3', text: L('أدوات: ChatGPT وGemini وCopilot', 'tools: ChatGPT, Gemini, Copilot') },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        L('شاطر! لعبة التوصيل: المصطلحات، وبعدها "الموقف وتصرفك الصح".', 'Well done! The matching game: the terms, then "the situation and the right move".'),
        L('فكّر: Prompt ولا تحقّق؟', 'Think: a prompt, or a check?'),
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: L('مصطلحات الذكاء الاصطناعي', 'AI terms'),
        source: L('النقاط الرئيسية، ص 191', 'Key Points, p. 191'),
        pairs: [
          { left: { text: L('Generative AI', 'Generative AI') }, right: L('يولّد أفكار ونصوص جديدة', 'Generates new ideas and texts') },
          { left: { text: L('Prompt', 'Prompt') }, right: L('الأمر اللي بنكتبه له', 'The command we type to it') },
          { left: { text: L('ChatGPT', 'ChatGPT') }, right: L('أداة ذكاء اصطناعي توليدي', 'A generative AI tool') },
          { left: { text: L('Microsoft Copilot', 'Microsoft Copilot') }, right: L('الأداة اللي بيستخدمها الكتاب', 'The tool the book uses') },
        ],
      },
      {
        title: L('الموقف وتصرفك الصح', 'The situation and the right move'),
        source: L('تحدي معلوماتك وجرب بنفسك، ص 191–192', 'Test your information and Try it yourself, pp. 191–192'),
        pairs: [
          { left: { text: L('عايز قصة مغامرة', 'You want an adventure story') }, right: L('اكتب Prompt: "اكتب قصة قصيرة"', 'Type a prompt: "Write a short story"') },
          { left: { text: L('عايز تغيّر نهاية القصة', 'You want to change the ending') }, right: L('اكتب أمر جديد: "عدّل القصة لنهاية أخرى"', 'Type a new prompt: "Edit the story for another ending"') },
          { left: { text: L('عايز تختبر نفسك', 'You want to test yourself') }, right: L('اطلب: "قدم لي اختبارًا قصيرًا"', 'Ask: "Give me a short quiz"') },
          { left: { text: L('رد فيه معلومة تاريخية', 'A reply with a historical fact') }, right: L('اتأكد من مصدر موثوق', 'Check a trustworthy source') },
        ],
      },
    ],
  },
};
