import { Lesson } from '@core/models';

/**
 * Lesson 7-1 "بنية الكمبيوتر" — ministry book pp. 97–100.
 * Book notes:
 * - p.97: CPU = control unit + arithmetic and logic unit. A "storage device" holds both the main memory (RAM, temporary)
 *   and the secondary storage (SSD, hard disk, USB drive; long-term).
 * - p.98 answer key: control unit is where data flow starts; ALU and CU are inside the CPU; input device → main memory → output.
 * - The exercises on p.99–100 are only partly keyed; only the Key Points are used.
 */
export const LESSON_7_1: Lesson = {
  unitId: 7,
  id: '7-1',
  title: { ar: 'بنية الكمبيوتر', en: 'Computer Structure' },
  bookPages: '97 – 100',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! إيه اللي جوه الكمبيوتر؟ كل جزء وشغلته.', en: 'Hi! What is inside a computer? Each part and its job.' },
        { ar: 'في الآخر لعبة فرز: حط كل جهاز في مكانه.', en: 'At the end there is a sorting game: put each device in its place.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1، 2)، ص 97', en: 'Key Points (a-1, 2), p. 97' },
      blocks: [
        { type: 'heading', text: { ar: 'مكونات الكمبيوتر', en: 'The parts of a computer' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الوحدة الرئيسية', en: 'The main unit' }, en: 'Main computer unit', text: { ar: 'العقل بتاع الكمبيوتر: المعالج والذاكرة.', en: 'The computer’s brain: the processor and memory.' }, example: { ar: 'الصندوق اللي جواه اللوحة الأم', en: 'The box that holds the motherboard' } },
            { title: { ar: 'الأجهزة الطرفية', en: 'Peripheral devices' }, en: 'Peripheral devices', text: { ar: 'أجهزة بتتوصل بالوحدة الرئيسية بواسطة واجهة.', en: 'Devices connected to the main unit through an interface.' }, example: { ar: 'لوحة المفاتيح، الفأرة، الشاشة، الطابعة', en: 'Keyboard, mouse, screen, printer' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: رئيسية = العقل · طرفية = أجهزة بتتوصل بيه', en: 'Remember: main = the brain · peripheral = devices plugged into it' } },
      ],
      bito: [
        { ar: 'الكيبورد والماوس والشاشة كلها طرفية: بتتوصل بالصندوق.', en: 'The keyboard, mouse and screen are all peripherals: they plug into the box.' },
        { ar: 'واللابتوب بيحط الاتنين في جسم واحد.', en: 'A laptop puts both in one body.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-3)، ص 97', en: 'Key Points (a-3), p. 97' },
      blocks: [
        { type: 'heading', text: { ar: 'الخمس مكونات الرئيسية', en: 'The five main components' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'وحدة التحكم (CU)', en: 'Control unit (CU)' }, en: 'Control unit', text: { ar: 'بتنفذ التعليمات (instructions) وتصدر الأوامر لكل جزء.', en: 'Carries out the instructions and sends commands to every part.' }, example: { ar: 'زي المدير اللي بيوزع الشغل', en: 'Like a manager handing out the work' } },
            { title: { ar: 'وحدة الحساب والمنطق (ALU)', en: 'Arithmetic and logic unit (ALU)' }, en: 'ALU', text: { ar: 'بتعمل الحسابات والمقارنات.', en: 'Does the calculations and comparisons.' }, example: { ar: 'زي الآلة الحاسبة جوه الكمبيوتر', en: 'Like the calculator inside the computer' } },
            { title: { ar: 'جهاز التخزين', en: 'Storage device' }, en: 'Storage device', text: { ar: 'بيخزّن البيانات والبرامج. فيه نوعين: ذاكرة رئيسية وثانوية.', en: 'Stores data and programs. It has two kinds: main and secondary memory.' }, example: { ar: 'زي الدرج والدولاب', en: 'Like a desk drawer and a wardrobe' } },
            { title: { ar: 'جهاز الإدخال', en: 'Input device' }, en: 'Input device', text: { ar: 'بيدخل البيانات للكمبيوتر من مصدر خارجي.', en: 'Feeds data into the computer from outside.' }, example: { ar: 'لوحة المفاتيح، الفأرة', en: 'Keyboard, mouse' } },
            { title: { ar: 'جهاز الإخراج', en: 'Output device' }, en: 'Output device', text: { ar: 'بيطلّع المعلومات برا الكمبيوتر.', en: 'Sends information out of the computer.' }, example: { ar: 'الشاشة، الطابعة', en: 'Screen, printer' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: تحكم · حساب · تخزين · إدخال · إخراج', en: 'Remember: control · calculate · store · input · output' } },
      ],
      bito: [
        { ar: 'وحدة التحكم + وحدة الحساب = المعالج (CPU).', en: 'Control unit + arithmetic unit = the processor (CPU).' },
        { ar: 'يعني المعالج هو العقل بتاع الكمبيوتر.', en: 'So the processor is the computer’s brain.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-3)، ص 97', en: 'Key Points (a-3), p. 97' },
      blocks: [
        { type: 'heading', text: { ar: 'نوعين من الذاكرة', en: 'Two kinds of memory' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الذاكرة الرئيسية (RAM)', en: 'Main memory (RAM)' }, en: 'RAM', text: { ar: 'بتخزّن البيانات والبرامج مؤقتًا.', en: 'Stores data and programs temporarily.' }, example: { ar: 'زي سطح مكتبك: بتشتغل عليه دلوقتي', en: 'Like your desk: you work on it right now' } },
            { title: { ar: 'الذاكرة الثانوية', en: 'Secondary storage' }, en: 'Secondary storage', text: { ar: 'بتخزّن البيانات والبرامج لفترة طويلة.', en: 'Stores data and programs for a long time.' }, example: { ar: 'SSD، القرص الصلب، فلاشة USB: زي الدولاب', en: 'SSD, hard disk, USB drive: like a wardrobe' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: RAM = مؤقتة · SSD = دايمة', en: 'Remember: RAM = temporary · SSD = permanent' } },
      ],
      bito: [
        { ar: 'لو الكهربا قطعت، اللي في الـ RAM بيضيع واللي في الـ SSD بيفضل.', en: 'If the power cuts, what is in RAM is lost and what is on the SSD stays.' },
        { ar: 'عشان كده بنحفظ الملف قبل ما نقفل.', en: 'That is why we save a file before shutting down.' },
      ],
    },
    {
      source: { ar: 'مخطط المكونات، ص 97', en: 'The components diagram, p. 97' },
      blocks: [
        { type: 'heading', text: { ar: 'خريطة الكمبيوتر', en: 'The computer map' } },
        {
          type: 'computer-map',
          parts: [
            { id: 'input', name: { ar: 'جهاز الإدخال', en: 'Input device' }, text: { ar: 'بيبعت البيانات اللي بتكتبها للذاكرة الرئيسية.', en: 'Sends the data you type to the main memory.' }, example: { ar: 'مثال: لوحة المفاتيح، الفأرة', en: 'Example: keyboard, mouse' } },
            { id: 'cu', name: { ar: 'وحدة التحكم', en: 'Control unit' }, text: { ar: 'بتنفذ التعليمات وتتحكم في باقي الأجزاء (تدفق التحكم).', en: 'Carries out the instructions and controls the other parts (control flow).' }, example: { ar: 'جوه المعالج', en: 'Inside the processor' } },
            { id: 'alu', name: { ar: 'وحدة الحساب والمنطق', en: 'Arithmetic and logic unit' }, text: { ar: 'بتحسب وتقارن البيانات اللي بتوصلها.', en: 'Calculates and compares the data it receives.' }, example: { ar: 'جوه المعالج', en: 'Inside the processor' } },
            { id: 'main', name: { ar: 'الذاكرة الرئيسية', en: 'Main memory' }, text: { ar: 'بتشيل البيانات والبرامج مؤقتًا، وبتكلّم المعالج مباشرة.', en: 'Holds data and programs temporarily and talks to the processor directly.' }, example: { ar: 'RAM', en: 'RAM' } },
            { id: 'storage', name: { ar: 'الذاكرة الثانوية', en: 'Secondary storage' }, text: { ar: 'بتحفظ البيانات لفترة طويلة، حتى لو قفلت الجهاز.', en: 'Keeps data for a long time, even when the device is off.' }, example: { ar: 'SSD، القرص الصلب، USB', en: 'SSD, hard disk, USB' } },
            { id: 'output', name: { ar: 'جهاز الإخراج', en: 'Output device' }, text: { ar: 'بيعرض النتيجة بعد المعالجة.', en: 'Shows the result after processing.' }, example: { ar: 'مثال: الشاشة، الطابعة', en: 'Example: screen, printer' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: إدخال ← ذاكرة ← معالج ← إخراج', en: 'Remember: input → memory → processor → output' } },
      ],
      bito: [
        { ar: 'البيانات بتمشي من الإدخال للذاكرة، وبعدها المعالج بيشتغل عليها، وبعدين تطلع للإخراج.', en: 'Data goes from input to memory, the processor works on it, and then it comes out at output.' },
        { ar: 'دوس على كل جزء وشوف شغلته.', en: 'Tap each part and see its job.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-4)، ص 98', en: 'Key Points (a-4), p. 98' },
      blocks: [
        { type: 'heading', text: { ar: 'الواجهات', en: 'Interfaces' }, code: '(Interface)' },
        {
          type: 'lead',
          text: { ar: 'الواجهة هي المكوّن اللي بيوسّط تبادل المعلومات بين وحدة الكمبيوتر الرئيسية والأجهزة الطرفية.', en: 'An interface is the component that carries information between the main unit and the peripheral devices.' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'USB', en: 'USB' }, en: 'USB', text: { ar: 'أكتر واجهة استخدامًا للأجهزة الطرفية: كيبورد، ماوس، طابعة، فلاشة.', en: 'The most used interface for peripherals: keyboard, mouse, printer, flash drive.' }, example: { ar: 'فلاشتك', en: 'Your flash drive' } },
            { title: { ar: 'HDMI', en: 'HDMI' }, en: 'HDMI', text: { ar: 'بتنقل الفيديو والصوت الرقمي بكابل واحد. متوافقة مع التلفزيونات.', en: 'Carries digital video and sound over one cable. Works with TVs.' }, example: { ar: 'توصّل اللابتوب بالتلفزيون', en: 'Connecting a laptop to a TV' } },
            { title: { ar: 'Ethernet', en: 'Ethernet' }, en: 'Ethernet', text: { ar: 'معيار اتصال لشبكة LAN السلكية في المنازل والمكاتب.', en: 'A connection standard for wired LANs in homes and offices.' }, example: { ar: 'كابل النت للراوتر', en: 'The internet cable to the router' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: USB = أجهزة · HDMI = صورة وصوت · Ethernet = شبكة', en: 'Remember: USB = devices · HDMI = picture and sound · Ethernet = network' } },
      ],
      bito: [
        { ar: 'USB تقريبًا في أي جهاز طرفي: ماوس، طابعة، فلاشة.', en: 'USB is on almost every peripheral: mouse, printer, flash drive.' },
        { ar: 'والـ HDMI الكابل اللي بيوصّل اللابتوب بالتلفزيون.', en: 'And HDMI is the cable linking a laptop to a TV.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-3)، ص 97', en: 'Key Points (a-3), p. 97' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'أنهي جزء بيخزّن البيانات والبرامج مؤقتًا؟', en: 'Which part stores data and programs temporarily?' },
          options: [
            { ar: 'الذاكرة الرئيسية (RAM)', en: 'Main memory (RAM)' },
            { ar: 'SSD', en: 'SSD' },
            { ar: 'القرص الصلب', en: 'The hard disk' },
            { ar: 'فلاشة USB', en: 'A USB flash drive' },
          ],
          answer: 0,
          explanation: {
            ar: 'الذاكرة الرئيسية (RAM) مؤقتة. SSD والقرص الصلب والفلاشة ذاكرة ثانوية بتحفظ لفترة طويلة.',
            en: 'Main memory (RAM) is temporary. An SSD, hard disk and flash drive are secondary storage that keep data for a long time.',
          },
          success: { ar: 'صح! RAM = مؤقتة. +10 نقط', en: 'Correct! RAM = temporary. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الكلمة المفتاحية: "مؤقتًا".', en: 'The key word: "temporarily".' },
        { ar: 'اللي بيحفظ بعد ما تقفل ده التاني.', en: 'The ones that keep data after shutdown are the others.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2)، ص 98', en: 'Test Your Knowledge (2), p. 98' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'أنهي جهاز من دول من أجهزة الإخراج؟', en: 'Which of these is an output device?' },
          options: [
            { ar: 'لوحة المفاتيح', en: 'Keyboard' },
            { ar: 'الفأرة (الماوس)', en: 'Mouse' },
            { ar: 'الشاشة', en: 'Screen' },
            { ar: 'ذاكرة USB', en: 'USB drive' },
          ],
          answer: 2,
          explanation: {
            ar: 'الشاشة (والطابعة) بيطلّعوا المعلومات برا الكمبيوتر. لوحة المفاتيح والفأرة للإدخال، وذاكرة USB للتخزين.',
            en: 'The screen (and the printer) send information out of the computer. The keyboard and mouse are for input, and a USB drive is for storage.',
          },
          success: { ar: 'صح! الشاشة = إخراج. +10 نقط', en: 'Correct! The screen = output. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الإخراج = بيطلّع قدامك حاجة تشوفها أو تسمعها.', en: 'Output = something comes out for you to see or hear.' },
        { ar: 'اللي بتكتب بيه ده إدخال.', en: 'What you type with is input.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (4)، ص 99', en: 'Test Your Knowledge (4), p. 99' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه الواجهة اللي بتنقل الفيديو والصوت الرقمي بكابل واحد وبتشتغل مع التلفزيونات؟', en: 'Which interface carries digital video and sound over one cable and works with TVs?' },
          options: [
            { ar: 'USB', en: 'USB' },
            { ar: 'HDMI', en: 'HDMI' },
            { ar: 'Ethernet', en: 'Ethernet' },
          ],
          answer: 1,
          explanation: {
            ar: 'HDMI بتنقل الفيديو والصوت. USB للأجهزة الطرفية، وEthernet لشبكة الإنترنت السلكية.',
            en: 'HDMI carries video and sound. USB is for peripherals, and Ethernet is for wired networks.',
          },
          success: { ar: 'صح! HDMI = صورة وصوت. +10 نقط', en: 'Correct! HDMI = picture and sound. +10 pts' },
        },
      ],
      bito: [
        { ar: 'فكّر في كابل التلفزيون.', en: 'Think of the TV cable.' },
        { ar: 'الاتنين التانيين للأجهزة والشبكة.', en: 'The other two are for devices and the network.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 7-1!', en: 'You finished lesson 7-1!' } },
        {
          type: 'recap',
          items: [
            { code: '5', text: { ar: 'مكونات رئيسية', en: 'main components' } },
            { code: 'CPU', text: { ar: 'تحكم + حساب', en: 'control + arithmetic' } },
            { code: 'RAM', text: { ar: 'مؤقتة', en: 'temporary' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة الفرز: حط كل جهاز في صندوقه.', en: 'Well done! The sorting game: put each device in its box.' },
        { ar: 'وجولة تانية عن الذاكرة.', en: 'And a second round about memory.' },
      ],
    },
  ],

  game: {
    kind: 'sort',
    rounds: [
      {
        title: { ar: 'إدخال، إخراج، تخزين، معالجة', en: 'Input, output, storage, processing' },
        source: { ar: 'النقاط الرئيسية (أ)، ص 97', en: 'Key Points (a), p. 97' },
        bins: [
          { id: 'input', label: { ar: 'إدخال', en: 'Input' } },
          { id: 'output', label: { ar: 'إخراج', en: 'Output' } },
          { id: 'storage', label: { ar: 'تخزين', en: 'Storage' } },
          { id: 'cpu', label: { ar: 'معالج (CPU)', en: 'Processor (CPU)' } },
        ],
        items: [
          { text: { ar: 'لوحة المفاتيح', en: 'Keyboard' }, bin: 'input' },
          { text: { ar: 'الفأرة', en: 'Mouse' }, bin: 'input' },
          { text: { ar: 'الشاشة', en: 'Screen' }, bin: 'output' },
          { text: { ar: 'الطابعة', en: 'Printer' }, bin: 'output' },
          { text: { ar: 'SSD', en: 'SSD' }, bin: 'storage' },
          { text: { ar: 'فلاشة USB', en: 'USB drive' }, bin: 'storage' },
          { text: { ar: 'وحدة التحكم', en: 'Control unit' }, bin: 'cpu' },
          { text: { ar: 'وحدة الحساب والمنطق', en: 'Arithmetic and logic unit' }, bin: 'cpu' },
        ],
      },
      {
        title: { ar: 'RAM ولا ذاكرة ثانوية؟', en: 'RAM or secondary storage?' },
        source: { ar: 'النقاط الرئيسية (أ-3)، ص 97', en: 'Key Points (a-3), p. 97' },
        bins: [
          { id: 'ram', label: { ar: 'الذاكرة الرئيسية (مؤقتة)', en: 'Main memory (temporary)' } },
          { id: 'secondary', label: { ar: 'الذاكرة الثانوية (طويلة الأمد)', en: 'Secondary storage (long-term)' } },
        ],
        items: [
          { text: { ar: 'RAM', en: 'RAM' }, bin: 'ram' },
          { text: { ar: 'بتخزّن البيانات والبرامج مؤقتًا', en: 'Stores data and programs temporarily' }, bin: 'ram' },
          { text: { ar: 'القرص الصلب', en: 'Hard disk' }, bin: 'secondary' },
          { text: { ar: 'SSD', en: 'SSD' }, bin: 'secondary' },
          { text: { ar: 'فلاشة USB', en: 'USB drive' }, bin: 'secondary' },
          { text: { ar: 'بتحفظ البيانات لفترة طويلة', en: 'Keeps data for a long time' }, bin: 'secondary' },
        ],
      },
    ],
  },
};
