import { Lesson } from '@core/models';

/**
 * Lesson 7-2 "برامج الكمبيوتر" — ministry book pp. 101–102.
 * Book notes:
 * - p.101 Key Points: hardware, software, operating system (OS), application software, device driver.
 * - The exercises on p.101–102 have a partly unclear answer key; the site uses the Key Points' definitions.
 */
export const LESSON_7_2: Lesson = {
  unitId: 7,
  id: '7-2',
  title: { ar: 'برامج الكمبيوتر', en: 'Computer Programs' },
  bookPages: '101 – 102',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! الكمبيوتر جسم وعقل. الجسم أجهزة، والعقل برامج.', en: 'Hi! A computer is a body and a mind. The body is hardware, the mind is software.' },
        { ar: 'في الآخر لعبة فرز: أجهزة ولا برمجيات؟', en: 'At the end there is a sorting game: hardware or software?' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (1، 2)، ص 101', en: 'Key Points (1, 2), p. 101' },
      blocks: [
        { type: 'heading', text: { ar: 'الأجهزة والبرمجيات', en: 'Hardware and software' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الأجهزة (Hardware)', en: 'Hardware' }, en: 'Hardware', text: { ar: 'أجهزة زي وحدة الكمبيوتر الرئيسية والأجهزة الطرفية.', en: 'Devices such as the main computer unit and the peripheral devices.' }, example: { ar: 'المعالج، الذاكرة، التخزين: حاجات بتلمسها', en: 'CPU, memory, storage: things you can touch' } },
            { title: { ar: 'البرمجيات (Software)', en: 'Software' }, en: 'Software', text: { ar: 'برامج والبيانات اللي بتشغّل الأجهزة.', en: 'Programs and data that make the hardware work.' }, example: { ar: 'Windows وWord والألعاب: حاجات مبتلمسهاش', en: 'Windows, Word and games: things you cannot touch' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: أجهزة = بتلمسها · برمجيات = بتشغّلها', en: 'Remember: hardware = you touch it · software = you run it' } },
      ],
      bito: [
        { ar: 'الموبايل نفسه أجهزة، لكن التطبيقات اللي عليه برمجيات.', en: 'The phone itself is hardware, but the apps on it are software.' },
        { ar: 'من غير برامج الجهاز مجرد قطعة بلاستيك.', en: 'Without programs the device is just a piece of plastic.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2-1، 2-2)، ص 101', en: 'Key Points (2-1, 2-2), p. 101' },
      blocks: [
        { type: 'heading', text: { ar: 'نظام التشغيل', en: 'The operating system' }, code: '(OS)' },
        {
          type: 'cards',
          items: [
            { title: { ar: 'نظام التشغيل', en: 'Operating system' }, en: 'Operating system (OS)', text: { ar: 'برنامج مسؤول عن الوظائف الأساسية للكمبيوتر: إدارة المهام والذاكرة والملفات.', en: 'The program in charge of the computer’s basic functions: managing tasks, memory and files.' }, example: { ar: 'Windows وmacOS وAndroid', en: 'Windows, macOS and Android' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: نظام التشغيل هو مدير الكمبيوتر', en: 'Remember: the operating system is the computer’s manager' } },
      ],
      bito: [
        { ar: 'هو أول حاجة بتشتغل لما تفتح الجهاز، وبيشغّل الباقي.', en: 'It is the first thing to start when you switch on, and it runs everything else.' },
        { ar: 'موبايلك الأندرويد ده نظام تشغيل.', en: 'The Android on your phone is an operating system.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2-3، 3)، ص 101', en: 'Key Points (2-3, 3), p. 101' },
      blocks: [
        { type: 'heading', text: { ar: 'برامج التطبيقات والدرايفر', en: 'Applications and drivers' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'برنامج التطبيق', en: 'Application software' }, en: 'Application software', text: { ar: 'برنامج بيشتغل فوق نظام التشغيل. اسمه كمان "التطبيق".', en: 'A program that runs on top of the operating system. Also just called an "app".' }, example: { ar: 'جداول بيانات، معالج نصوص', en: 'Spreadsheets, word processors' } },
            { title: { ar: 'برنامج تشغيل الجهاز (Driver)', en: 'Device driver' }, en: 'Device driver', text: { ar: 'برنامج بيتحكم في عملية الاتصال بين الجهاز الموصّل والكمبيوتر.', en: 'A program that controls the communication between a connected device and the computer.' }, example: { ar: 'درايفر الطابعة: يخلّي الكمبيوتر يفهم الطابعة', en: 'A printer driver: lets the computer understand the printer' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: تطبيق = لشغلك · درايفر = مترجم للجهاز', en: 'Remember: app = for your work · driver = a translator for the device' } },
      ],
      bito: [
        { ar: 'لما تركّب طابعة جديدة، الكمبيوتر بيحتاج الـ Driver بتاعها.', en: 'When you plug in a new printer, the computer needs its driver.' },
        { ar: 'من غيره مش هيعرف يكلمها.', en: 'Without it the computer cannot talk to it.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2-2)، ص 101', en: 'Key Points (2-2), p. 101' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: نظام التشغيل هو نوع من البرامج المسؤول عن الوظائف الأساسية للكمبيوتر.', en: 'True or false: an operating system is a kind of program in charge of the computer’s basic functions.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. نظام التشغيل (زي Windows وAndroid) بيدير المهام والذاكرة والملفات.',
            en: '✓. An operating system (like Windows or Android) manages tasks, memory and files.',
          },
          success: { ar: 'صح! نظام التشغيل = برنامج المدير. +10 نقط', en: 'Correct! The OS = the manager program. +10 pts' },
        },
      ],
      bito: [
        { ar: 'نظام التشغيل برنامج، مش جهاز.', en: 'An operating system is a program, not a device.' },
        { ar: 'وبيدير كل حاجة تانية.', en: 'And it manages everything else.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2-3)، ص 101', en: 'Key Points (2-3), p. 101' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: برنامج التطبيق هو برنامج بيشتغل فوق نظام التشغيل.', en: 'True or false: application software is a program that runs on top of the operating system.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. التطبيقات (جداول بيانات، معالج نصوص) بتشتغل فوق نظام التشغيل.',
            en: '✓. Apps (spreadsheets, word processors) run on top of the operating system.',
          },
          success: { ar: 'صح! التطبيق فوق نظام التشغيل. +10 نقط', en: 'Correct! An app sits on the OS. +10 pts' },
        },
      ],
      bito: [
        { ar: 'نظام التشغيل هو الأرض، والتطبيقات اللي فوقيها.', en: 'The OS is the ground and the apps stand on it.' },
        { ar: 'من غير نظام تشغيل مفيش تطبيقات.', en: 'Without an OS there are no apps.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (3)، ص 101', en: 'Key Points (3), p. 101' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه اسم البرنامج اللي بيتحكم في الاتصال بين الجهاز الموصّل بالكمبيوتر والكمبيوتر؟', en: 'What is the program that controls the communication between a connected device and the computer called?' },
          options: [
            { ar: 'نظام التشغيل', en: 'Operating system' },
            { ar: 'برنامج التطبيق', en: 'Application software' },
            { ar: 'برنامج تشغيل الجهاز (Driver)', en: 'Device driver' },
          ],
          answer: 2,
          explanation: {
            ar: 'الـ Driver هو اللي بيتحكم في الاتصال مع الجهاز الموصّل. نظام التشغيل بيدير الكمبيوتر كله، والتطبيق لشغلك.',
            en: 'The driver controls the communication with the connected device. The OS manages the whole computer, and an app is for your work.',
          },
          success: { ar: 'صح! Driver = مترجم الجهاز. +10 نقط', en: 'Correct! Driver = the device’s translator. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الكلمة المفتاحية: "الجهاز الموصّل".', en: 'The key phrase: "a connected device".' },
        { ar: 'مثال: الطابعة والماوس.', en: 'For example: a printer and a mouse.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 7-2!', en: 'You finished lesson 7-2!' } },
        {
          type: 'recap',
          items: [
            { code: 'HW', text: { ar: 'أجهزة', en: 'hardware' } },
            { code: 'SW', text: { ar: 'برمجيات', en: 'software' } },
            { code: 'OS', text: { ar: 'نظام التشغيل', en: 'operating system' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة الفرز: أجهزة ولا برمجيات؟', en: 'Well done! The sorting game: hardware or software?' },
        { ar: 'وجولة تانية: نظام تشغيل ولا تطبيق ولا Driver.', en: 'A second round: OS, app or driver.' },
      ],
    },
  ],

  game: {
    kind: 'sort',
    rounds: [
      {
        title: { ar: 'أجهزة ولا برمجيات؟', en: 'Hardware or software?' },
        source: { ar: 'النقاط الرئيسية (1، 2)، ص 101', en: 'Key Points (1, 2), p. 101' },
        bins: [
          { id: 'hw', label: { ar: 'أجهزة (Hardware)', en: 'Hardware' } },
          { id: 'sw', label: { ar: 'برمجيات (Software)', en: 'Software' } },
        ],
        items: [
          { text: { ar: 'المعالج (CPU)', en: 'The processor (CPU)' }, bin: 'hw' },
          { text: { ar: 'جهاز التخزين', en: 'The storage device' }, bin: 'hw' },
          { text: { ar: 'الأجهزة الطرفية', en: 'Peripheral devices' }, bin: 'hw' },
          { text: { ar: 'Windows', en: 'Windows' }, bin: 'sw' },
          { text: { ar: 'macOS', en: 'macOS' }, bin: 'sw' },
          { text: { ar: 'معالج النصوص', en: 'A word processor' }, bin: 'sw' },
        ],
      },
      {
        title: { ar: 'نظام تشغيل ولا تطبيق ولا Driver؟', en: 'OS, application or driver?' },
        source: { ar: 'النقاط الرئيسية (2، 3)، ص 101', en: 'Key Points (2, 3), p. 101' },
        bins: [
          { id: 'os', label: { ar: 'نظام التشغيل', en: 'Operating system' } },
          { id: 'app', label: { ar: 'تطبيق', en: 'Application' } },
          { id: 'driver', label: { ar: 'Driver', en: 'Driver' } },
        ],
        items: [
          { text: { ar: 'Windows', en: 'Windows' }, bin: 'os' },
          { text: { ar: 'macOS', en: 'macOS' }, bin: 'os' },
          { text: { ar: 'Android', en: 'Android' }, bin: 'os' },
          { text: { ar: 'برنامج جداول بيانات', en: 'A spreadsheet program' }, bin: 'app' },
          { text: { ar: 'معالج نصوص', en: 'A word processor' }, bin: 'app' },
          { text: { ar: 'برنامج يتحكم في الاتصال بجهاز موصّل', en: 'A program that controls the link to a connected device' }, bin: 'driver' },
        ],
      },
    ],
  },
};
