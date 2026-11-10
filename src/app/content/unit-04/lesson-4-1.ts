import { Lesson } from '@core/models';

/**
 * Lesson 4-1 "تطور تكنولوجيا المعلومات" — ministry book pp. 49–52.
 * Book notes:
 * - Key Points (a)–(c) on pp. 49–50. The answer key (p.51) matches the questions on p.50:
 *   [1] IoT, [2] machine learning, [3] big data, [4] virtual reality; Q3 = digital divide.
 * - The exercises on pp.51–52 have no answer key, so only the Key Points are used where they settle the answer.
 * - Dates in the book: agrarian society from about 13,000 years before the common era; industrial society
 *   from the mid-18th century; information society from the second half of the 20th century.
 */
export const LESSON_4_1: Lesson = {
  unitId: 4,
  id: '4-1',
  title: { ar: 'تطور تكنولوجيا المعلومات', en: 'The Development of Information Technology' },
  bookPages: '49 – 52',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! الدرس ده حكاية: إزاي الناس عاشت زمان، وإزاي التكنولوجيا غيّرت حياتنا.', en: 'Hi! This lesson is a story: how people lived long ago, and how technology changed our lives.' },
        { ar: 'في الآخر لعبة توصيل: وصّل كل حاجة بمثالها من حياتك.', en: 'At the end there is a matching game: link each thing to an example from your own life.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1)، ص 49', en: 'Key Points (a-1), p. 49' },
      blocks: [
        { type: 'heading', text: { ar: 'أربع مراحل للمجتمع', en: 'Four stages of society' } },
        {
          type: 'lead',
          text: { ar: 'كل مرحلة اتغيّرت لما الناس اخترعت حاجة جديدة. دوس على السلّم من تحت لفوق:', en: 'Each stage changed when people invented something new. Climb the staircase from the bottom up:' },
        },
        {
          type: 'steps',
          items: [
            {
              title: { ar: 'مجتمع الصيد وجمع الثمار', en: 'Hunter-gatherer society' },
              en: 'Hunter-gatherer society',
              text: { ar: 'ناس بتعيش من صيد الحيوانات وجمع النباتات.', en: 'People live by hunting animals and gathering plants.' },
              example: { ar: 'أدواتهم: فؤوس حجرية، أقواس وسهام، النار', en: 'Their tools: stone axes, bows and arrows, fire' },
            },
            {
              title: { ar: 'المجتمع الزراعي', en: 'Agrarian society' },
              en: 'Agrarian society',
              text: { ar: 'منذ حوالي 13,000 سنة قبل الميلاد. الناس استقرت في مكان وزرعت أكلها وحصدته.', en: 'From about 13,000 years before the common era. People settled down and grew and harvested their food.' },
              example: { ar: 'أدواتهم: المحراث وأدوات الري', en: 'Their tools: the plough and irrigation tools' },
            },
            {
              title: { ar: 'المجتمع الصناعي', en: 'Industrialized society' },
              en: 'Industrialized society',
              text: { ar: 'منذ منتصف القرن الثامن عشر. المصانع بقت تنتج كميات ضخمة بالآلات، بفضل اختراع المحرك البخاري والكهرباء.', en: 'From the mid-18th century. Factories made huge amounts with machines, thanks to the steam engine and electricity.' },
              example: { ar: 'أدواتهم: المحركات البخارية، الآلات الصناعية، الطباعة', en: 'Their tools: steam engines, industrial machines, printing' },
            },
            {
              title: { ar: 'مجتمع المعلومات', en: 'Information society' },
              en: 'Information society',
              text: { ar: 'منذ النصف التاني من القرن العشرين. الأتمتة (الشغل بالآلة لوحدها) زادت بفضل الكمبيوتر.', en: 'From the second half of the 20th century. Automation grew thanks to computers.' },
              example: { ar: 'أدواتهم: الكمبيوتر والإنترنت', en: 'Their tools: computers and the internet' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: صيد ← زراعة ← صناعة ← معلومات', en: 'Remember: hunting → farming → industry → information' } },
      ],
      bito: [
        { ar: 'تخيّل جدّ جدّك: بيجري ورا الحيوان، مش وراء الموبايل!', en: 'Imagine your great-great-grandfather: chasing animals, not chasing a phone!' },
        { ar: 'ولاحظ: كل مرحلة بدأت باختراع جديد: النار، المحراث، المحرك البخاري، الكمبيوتر.', en: 'Notice: each stage began with a new invention: fire, the plough, the steam engine, the computer.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-2)، ص 49', en: 'Key Points (a-2), p. 49' },
      blocks: [
        { type: 'heading', text: { ar: 'المجتمع الجاي', en: 'The next society' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'مجتمع الجيل الخامس', en: 'Fifth-generation society' },
              text: { ar: 'مجتمع بيدمج الفضاء الافتراضي (الإلكتروني) مع الفضاء الحقيقي (المادي) عشان يحل مشاكل المجتمع ويحقق التنمية الاقتصادية.', en: 'A society that merges the virtual (electronic) space with the real (physical) space to solve social problems and drive economic growth.' },
              example: { ar: 'مثال: حاجة في الإنترنت بتساعد الناس في الواقع', en: 'Example: something online that helps people in real life' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: افتراضي + حقيقي = مجتمع الجيل الخامس', en: 'Remember: virtual + real = fifth-generation society' } },
      ],
      bito: [
        { ar: 'الفكرة: العالم اللي في النت والعالم اللي حوالينا يشتغلوا كأنهم حاجة واحدة.', en: 'The idea: the online world and the world around us work as one.' },
        { ar: 'الكتاب بيسميه مجتمع الجيل الخامس، وده اللي بنتجه له.', en: 'The book calls it the fifth-generation society, and that is where we are heading.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-1)، ص 49', en: 'Key Points (b-1), p. 49' },
      blocks: [
        { type: 'heading', text: { ar: 'البيانات الضخمة', en: 'Big data' }, code: '(Big Data)' },
        {
          type: 'lead',
          text: { ar: 'كمية هائلة من البيانات بأشكال وأنواع مختلفة. ليها 3 صفات:', en: 'A huge amount of data in many forms and kinds. It has 3 features:' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الحجم', en: 'Volume' }, en: 'volume', text: { ar: 'كمية ضخمة جدًا.', en: 'A very large amount.' }, example: { ar: 'كل بوستات الناس على فيسبوك', en: 'Every post people make on social media' } },
            { title: { ar: 'التنوّع', en: 'Variety' }, en: 'variety', text: { ar: 'أنواع مختلفة.', en: 'Many different kinds.' }, example: { ar: 'نصوص وصور وفيديوهات', en: 'Texts, photos and videos' } },
            { title: { ar: 'سرعة التوليد', en: 'Generation frequency' }, en: 'generation/update frequency', text: { ar: 'بتتولّد وتتحدّث بسرعة.', en: 'It is created and updated fast.' }, example: { ar: 'رسائل بتتبعت كل ثانية', en: 'Messages sent every second' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: كبيرة · متنوعة · سريعة', en: 'Remember: big · varied · fast' } },
      ],
      bito: [
        { ar: 'مفيش كمبيوتر واحد عادي يقدر يشيلها، عشان كده اسمها "ضخمة".', en: 'One ordinary computer cannot hold it, which is why it is called "big".' },
        { ar: 'مثال: كل الصور اللي الناس بترفعها في يوم واحد.', en: 'Example: all the photos people upload in a single day.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-2، 3)، ص 49', en: 'Key Points (b-2, 3), p. 49' },
      blocks: [
        { type: 'heading', text: { ar: 'الذكاء الاصطناعي والتعلّم الآلي', en: 'Artificial intelligence and machine learning' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'الذكاء الاصطناعي', en: 'Artificial intelligence' },
              en: 'AI (Artificial Intelligence)',
              text: { ar: 'تقنية بتخلي أجهزة الكمبيوتر تقلّد سلوك البشر الفكري بشكل مصطنع.', en: 'A technology that lets computers copy human thinking behaviour artificially.' },
              example: { ar: 'السيارة اللي بتسوق نفسها، والرعاية الطبية عن بُعد', en: 'A self-driving car, remote medical care' },
            },
            {
              title: { ar: 'التعلّم الآلي', en: 'Machine learning' },
              en: 'Machine Learning',
              text: { ar: 'تقنية الكمبيوتر فيها بيتعلّم من كمية كبيرة من البيانات، عشان يستخرج القواعد والأنماط.', en: 'A technology where the computer learns from a large amount of data to find rules and patterns.' },
              example: { ar: 'زي طالب بيحل مئة تمرين فيفهم النمط', en: 'Like a student who solves a hundred exercises and spots the pattern' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: الذكاء يقلّد الإنسان · التعلّم يطلع الأنماط من البيانات', en: 'Remember: AI copies people · learning finds patterns in data' } },
      ],
      bito: [
        { ar: 'التعلّم الآلي بيتعلّم من أمثلة، زيك بالظبط وإنت بتذاكر من حلول محلولة.', en: 'Machine learning learns from examples, just like you studying from solved problems.' },
        { ar: 'وكل ما البيانات تكتر، يطلع قواعد أحسن.', en: 'And the more data there is, the better rules it finds.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-4)، ص 50', en: 'Key Points (b-4), p. 50' },
      blocks: [
        { type: 'heading', text: { ar: 'إنترنت الأشياء', en: 'The Internet of Things' }, code: '(IoT)' },
        {
          type: 'lead',
          text: { ar: 'تقنية بتربط الأجهزة المنزلية وغيرها بالإنترنت، فتتواصل مع بعض.', en: 'A technology that connects household and other devices to the internet so they talk to each other.' },
        },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'المنزل الذكي', en: 'The smart home' },
              en: 'Smart Home',
              text: { ar: 'نظام بيستخدم IoT والذكاء الاصطناعي عشان تعيش براحة أكتر.', en: 'A system that uses IoT and AI so you live more comfortably.' },
              example: { ar: 'التكييف بيشتغل قبل ما توصل البيت', en: 'The air conditioner turns on before you arrive home' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: IoT = أجهزة متصلة بالنت وبتكلّم بعض', en: 'Remember: IoT = devices on the internet talking to each other' } },
      ],
      bito: [
        { ar: 'تخيّل ثلاجة تبعتلك رسالة: "اللبن خلص!"', en: 'Picture a fridge sending you a message: "the milk is finished!"' },
        { ar: 'ده بالظبط إنترنت الأشياء: حتى الحاجات العادية بقت متصلة.', en: 'That is exactly the Internet of Things: even ordinary objects are connected.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-5، 6)، ص 50', en: 'Key Points (b-5, 6), p. 50' },
      blocks: [
        { type: 'heading', text: { ar: 'الواقع الافتراضي والمعزّز', en: 'Virtual and augmented reality' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'الواقع الافتراضي', en: 'Virtual reality' },
              en: 'VR (Virtual Reality)',
              text: { ar: 'تقنية بتخلي المستخدم يجرّب بيئة بتتعمل بالكمبيوتر وتبان واقعية.', en: 'A technology that lets the user experience a computer-made environment that looks real.' },
              example: { ar: 'نظارة ألعاب بتنقلك لعالم تاني', en: 'Gaming goggles that take you to another world' },
            },
            {
              title: { ar: 'الواقع المعزّز', en: 'Augmented reality' },
              en: 'AR (Augmented Reality)',
              text: { ar: 'تقنية بتضيف معلومات (صور، فيديو) للبيئة الحقيقية اللي حواليك.', en: 'A technology that adds information (images, video) to the real world around you.' },
              example: { ar: 'فلتر في الكاميرا بيحط حاجات على وشك', en: 'A camera filter that puts things on your face' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: افتراضي = عالم جديد · معزّز = إضافة على عالمك', en: 'Remember: virtual = a new world · augmented = an addition to yours' } },
      ],
      bito: [
        { ar: 'الافتراضي بيخدك لمكان تاني بالكامل. المعزّز بيفضّلك في مكانك وبيضيف عليه.', en: 'Virtual takes you somewhere else entirely. Augmented keeps you where you are and adds to it.' },
        { ar: 'سهلها: افتراضي = عالم جديد، معزّز = إضافة على عالمك.', en: 'Make it easy: virtual = a new world, augmented = an addition to yours.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ت)، ص 50', en: 'Key Points (c), p. 50' },
      blocks: [
        { type: 'heading', text: { ar: 'لما التكنولوجيا تتعب', en: 'When technology causes trouble' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'إجهاد التكنولوجيا', en: 'Technostress' },
              en: 'Technostress',
              text: { ar: 'مشاكل نفسية بتحصل من استخدام أجهزة الكمبيوتر.', en: 'Mental strain from using computers.' },
              example: { ar: 'ضغط من كتر الإشعارات والرسايل', en: 'Pressure from too many notifications and messages' },
            },
            {
              title: { ar: 'رهاب التكنولوجيا', en: 'Technophobia' },
              en: 'Technophobia',
              text: { ar: 'خوف أو قلق من استخدام الأجهزة، أو عدم ثقة فيها.', en: 'Fear or worry about using devices, or distrust of them.' },
              example: { ar: 'حد بيخاف يدفع أونلاين', en: 'Someone afraid to pay online' },
            },
            {
              title: { ar: 'إدمان التكنولوجيا', en: 'Techno-addiction' },
              en: 'Techno-Addiction',
              text: { ar: 'اعتماد مفرط على الأجهزة.', en: 'Excessive dependence on devices.' },
              example: { ar: 'مش قادر تقعد من غير موبايلك', en: 'You cannot sit without your phone' },
            },
            {
              title: { ar: 'اضطراب شاشة العرض', en: 'VDT disorder' },
              en: 'VDT Disorder',
              text: { ar: 'تعب جسدي بسبب النظر الطويل للشاشة.', en: 'Physical strain from looking at a screen for a long time.' },
              example: { ar: 'صداع وتعب في العين بعد ساعات', en: 'Headache and tired eyes after hours' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: إجهاد · رهاب · إدمان · شاشة', en: 'Remember: stress · fear · addiction · screen' } },
      ],
      bito: [
        { ar: 'الحل مش إنك ترمي الموبايل، إنك تستخدمه بحساب وتريّح عينك.', en: 'The answer is not throwing your phone away, but using it wisely and resting your eyes.' },
        { ar: 'جرّب قاعدة بسيطة: كل ساعة، شوف حاجة بعيدة لدقيقة.', en: 'Try a simple rule: every hour, look at something far away for a minute.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ت-2)، ص 50', en: 'Key Points (c-2), p. 50' },
      blocks: [
        { type: 'heading', text: { ar: 'الفجوة الرقمية', en: 'The digital divide' }, code: '(Digital Divide)' },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'الفجوة الرقمية', en: 'Digital divide' },
              en: 'Digital Divide',
              text: { ar: 'الفرق بين ناس قادرة تستفيد من الإنترنت والمعلومات، وناس مش قادرة.', en: 'The gap between people who can benefit from the internet and information, and people who cannot.' },
              example: { ar: 'طالب عنده نت وكمبيوتر، وطالب مفيش عنده', en: 'A student with internet and a computer, and one without' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: فجوة = ناس معاها التكنولوجيا وناس لأ', en: 'Remember: gap = some have technology, some do not' } },
      ],
      bito: [
        { ar: 'مش كل الناس عندها نفس الفرصة، وده اللي الكتاب بيسميه الفجوة الرقمية.', en: 'Not everyone has the same chance, and this is what the book calls the digital divide.' },
        { ar: 'والحل إن الفرصة تبقى متاحة لأكبر عدد من الناس.', en: 'The answer is to make the chance available to as many people as possible.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 50', en: 'Test Your Knowledge (1), p. 50' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'اختر التسلسل الأكتر ملاءمة لتطور المجتمع.', en: 'Choose the sequence that best fits how society developed.' },
          options: [
            { ar: 'صيد وجمع ← زراعي ← صناعي ← معلومات', en: 'Hunter-gatherer → agrarian → industrial → information' },
            { ar: 'زراعي ← صيد وجمع ← معلومات ← صناعي', en: 'Agrarian → hunter-gatherer → information → industrial' },
            { ar: 'صناعي ← زراعي ← صيد وجمع ← معلومات', en: 'Industrial → agrarian → hunter-gatherer → information' },
            { ar: 'معلومات ← صناعي ← زراعي ← صيد وجمع', en: 'Information → industrial → agrarian → hunter-gatherer' },
          ],
          answer: 0,
          explanation: {
            ar: 'الترتيب الصح: الصيد وجمع الثمار، بعده الزراعة (منذ حوالي 13,000 سنة قبل الميلاد)، بعده الصناعة (منتصف القرن 18)، بعده المعلومات (النصف التاني من القرن 20).',
            en: 'The right order: hunting and gathering, then farming (about 13,000 years before the common era), then industry (mid-18th century), then information (second half of the 20th century).',
          },
          success: { ar: 'صح! الترتيب بيتبع الاختراعات. +10 نقط', en: 'Correct! The order follows the inventions. +10 pts' },
        },
      ],
      bito: [
        { ar: 'ابدأ بالأقدم: مين اللي كان بيصيد وبيجمع؟', en: 'Start with the oldest: who was hunting and gathering?' },
        { ar: 'والكمبيوتر هو اللي جه في الآخر.', en: 'And the computer came last.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2)، ص 50', en: 'Test Your Knowledge (2), p. 50' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'أنهي تقنية بتربط كل الأشياء بالإنترنت فتتواصل مع بعض؟', en: 'Which technology connects all things to the internet so they communicate with each other?' },
          options: [
            { ar: 'التعلّم الآلي', en: 'Machine learning' },
            { ar: 'البيانات الضخمة', en: 'Big data' },
            { ar: 'إنترنت الأشياء (IoT)', en: 'The Internet of Things (IoT)' },
            { ar: 'الواقع الافتراضي', en: 'Virtual reality' },
          ],
          answer: 2,
          explanation: {
            ar: 'إنترنت الأشياء بيربط الأجهزة بالإنترنت وبيخليها تتواصل مع بعض. التعلّم الآلي بيتعلم من البيانات، والبيانات الضخمة كمية ضخمة منها، والافتراضي بيئة بيعملها الكمبيوتر.',
            en: 'The Internet of Things connects devices to the internet so they talk to each other. Machine learning learns from data, big data is a huge amount of it, and virtual reality is a computer-made environment.',
          },
          success: { ar: 'صح! IoT = أجهزة بتكلّم بعض. +10 نقط', en: 'Correct! IoT = devices talking to each other. +10 pts' },
        },
      ],
      bito: [
        { ar: 'افتكر ثلاجة بتبعتلك رسالة.', en: 'Think of a fridge sending you a message.' },
        { ar: 'الكلمة المفتاحية: "تربط بالإنترنت".', en: 'The key phrase: "connects to the internet".' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2)، ص 50', en: 'Test Your Knowledge (2), p. 50' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'اسم كمية ضخمة من البيانات اللي اتجمعت وبتتحلل لحل المشاكل؟', en: 'What is a huge amount of collected data, analysed to help solve problems, called?' },
          options: [
            { ar: 'الذكاء الاصطناعي', en: 'Artificial intelligence' },
            { ar: 'البيانات الضخمة', en: 'Big data' },
            { ar: 'المنزل الذكي', en: 'The smart home' },
            { ar: 'الواقع المعزّز', en: 'Augmented reality' },
          ],
          answer: 1,
          explanation: {
            ar: 'البيانات الضخمة هي كميات هائلة من البيانات بأنواع مختلفة. الذكاء الاصطناعي بيقلّد تفكير الإنسان، والمنزل الذكي بيستخدم IoT، والمعزّز بيضيف معلومات لبيئتك.',
            en: 'Big data is a huge amount of data of many kinds. AI copies human thinking, the smart home uses IoT, and augmented reality adds information to your surroundings.',
          },
          success: { ar: 'صح! ضخمة، متنوعة، وسريعة. +10 نقط', en: 'Correct! Big, varied and fast. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الاسم نفسه فيه الإجابة: "ضخمة".', en: 'The name holds the answer: "big".' },
        { ar: 'تلات صفات: حجم، تنوّع، سرعة.', en: 'Three features: volume, variety, speed.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (3)، ص 50', en: 'Test Your Knowledge (3), p. 50' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه المصطلح اللي بيشير للفجوة بين اللي يقدروا يستفيدوا من تكنولوجيا المعلومات (زي الإنترنت) واللي مش يقدروا؟', en: 'What term refers to the gap between those who can benefit from information technology (like the internet) and those who cannot?' },
          options: [
            { ar: 'إجهاد التكنولوجيا', en: 'Technostress' },
            { ar: 'الفجوة الرقمية', en: 'The digital divide' },
            { ar: 'إدمان التكنولوجيا', en: 'Techno-addiction' },
            { ar: 'اضطراب شاشة العرض', en: 'VDT disorder' },
          ],
          answer: 1,
          explanation: {
            ar: 'الفجوة الرقمية (Digital Divide) هي الفرق بين اللي يقدروا يستفيدوا من الإنترنت والمعلومات واللي مش يقدروا. الباقي مشاكل نفسية أو جسدية من استخدام الأجهزة.',
            en: 'The digital divide is the gap between those who can benefit from the internet and information and those who cannot. The rest are mental or physical problems from using devices.',
          },
          success: { ar: 'صح! فجوة = فرق في الفرصة. +10 نقط', en: 'Correct! A gap = a difference in opportunity. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الكلمة المفتاحية: "الفجوة بين".', en: 'The key phrase: "the gap between".' },
        { ar: 'الباقي مشاكل بتحصل للشخص نفسه.', en: 'The others are problems that happen to the person.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 4-1 والوحدة 4!', en: 'You finished lesson 4-1 and Unit 4!' } },
        {
          type: 'recap',
          items: [
            { code: '4', text: { ar: 'مراحل للمجتمع', en: 'stages of society' } },
            { code: '3', text: { ar: 'صفات للبيانات الضخمة', en: 'big-data features' } },
            { code: 'IoT', text: { ar: 'إنترنت الأشياء', en: 'Internet of Things' } },
            { code: 'VR / AR', text: { ar: 'افتراضي ومعزّز', en: 'virtual and augmented' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! جرّب لعبة التوصيل: وصّل كل حاجة بمثالها.', en: 'Well done! Try the matching game: link each thing to its example.' },
        { ar: 'الأمثلة من حياتك اليومية، يعني هتعرفها بسهولة.', en: 'The examples are from your daily life, so you will spot them easily.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'المجتمع وأداته', en: 'The society and its tool' },
        source: { ar: 'جدول مراحل المجتمع، ص 49', en: 'The table of society stages, p. 49' },
        pairs: [
          { left: { text: { ar: 'مجتمع الصيد وجمع الثمار', en: 'Hunter-gatherer society' } }, right: { ar: 'الفؤوس الحجرية والأقواس والسهام', en: 'Stone axes, bows and arrows' } },
          { left: { text: { ar: 'المجتمع الزراعي', en: 'Agrarian society' } }, right: { ar: 'المحراث وأدوات الري', en: 'The plough and irrigation tools' } },
          { left: { text: { ar: 'المجتمع الصناعي', en: 'Industrialized society' } }, right: { ar: 'المحرك البخاري والآلات الصناعية', en: 'The steam engine and industrial machines' } },
          { left: { text: { ar: 'مجتمع المعلومات', en: 'Information society' } }, right: { ar: 'الكمبيوتر والإنترنت', en: 'Computers and the internet' } },
        ],
      },
      {
        title: { ar: 'التقنية ومثالها', en: 'The technology and its example' },
        source: { ar: 'النقاط الرئيسية (ب)، ص 49–50', en: 'Key Points (b), pp. 49–50' },
        pairs: [
          { left: { text: { ar: 'البيانات الضخمة', en: 'Big data' } }, right: { ar: 'كل بوستات الناس على السوشيال ميديا', en: 'Every post people make on social media' } },
          { left: { text: { ar: 'الذكاء الاصطناعي', en: 'Artificial intelligence' } }, right: { ar: 'سيارة بتسوق نفسها', en: 'A self-driving car' } },
          { left: { text: { ar: 'إنترنت الأشياء', en: 'The Internet of Things' } }, right: { ar: 'تكييف بيشتغل قبل ما توصل البيت', en: 'An air conditioner that starts before you get home' } },
          { left: { text: { ar: 'الواقع الافتراضي', en: 'Virtual reality' } }, right: { ar: 'نظارة بتنقلك لعالم لعبة', en: 'Goggles that take you into a game world' } },
        ],
      },
      {
        title: { ar: 'المشكلة وموقفها', en: 'The problem and its situation' },
        source: { ar: 'النقاط الرئيسية (ت)، ص 50', en: 'Key Points (c), p. 50' },
        pairs: [
          { left: { text: { ar: 'إجهاد التكنولوجيا', en: 'Technostress' } }, right: { ar: 'ضغط نفسي من كتر الإشعارات', en: 'Mental pressure from too many notifications' } },
          { left: { text: { ar: 'رهاب التكنولوجيا', en: 'Technophobia' } }, right: { ar: 'خوف من استخدام الأجهزة', en: 'Fear of using devices' } },
          { left: { text: { ar: 'إدمان التكنولوجيا', en: 'Techno-addiction' } }, right: { ar: 'مش قادر تقعد من غير موبايلك', en: 'Cannot sit without your phone' } },
          { left: { text: { ar: 'اضطراب شاشة العرض', en: 'VDT disorder' } }, right: { ar: 'صداع وتعب في العين من الشاشة', en: 'Headache and tired eyes from the screen' } },
          { left: { text: { ar: 'الفجوة الرقمية', en: 'The digital divide' } }, right: { ar: 'طالب معاه نت وطالب مفيش عنده', en: 'One student has internet, another does not' } },
        ],
      },
    ],
  },
};
