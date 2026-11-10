import { Lesson } from '@core/models';

/**
 * Lesson 8-4 "آلية عمل صفحات الويب والبريد الإلكتروني" — ministry book pp. 118–121.
 * Book notes:
 * - p.118: the URL https://www.mext.go.jp/index.html is split into protocol name, host/server name,
 *   organization name, organization type, country name and file name; the domain name covers www.mext.go.jp.
 * - p.119: email address = username@domain name; SMTP sends, POP downloads, IMAP reads mail kept on the server.
 * - The exercises on pp.119–121 are only partly keyed; only the Key Points are used.
 */
export const LESSON_8_4: Lesson = {
  unitId: 8,
  id: '8-4',
  title: { ar: 'آلية عمل صفحات الويب والبريد الإلكتروني', en: 'How Web Pages and Email Work' },
  bookPages: '118 – 121',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! إيه اللي بيحصل في الثواني بين ما تكتب عنوان موقع وتظهرلك الصفحة؟', en: 'Hi! What happens in the seconds between typing a site address and seeing the page?' },
        { ar: 'في الآخر لعبة توصيل: أجزاء العنوان وبروتوكولات البريد.', en: 'At the end there is a matching game: the parts of an address and the email protocols.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1، 2)، ص 118', en: 'Key Points (a-1, 2), p. 118' },
      blocks: [
        { type: 'heading', text: { ar: 'الويب و HTML', en: 'The web and HTML' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الويب (WWW)', en: 'World Wide Web (WWW)' }, en: 'WWW', text: { ar: 'نظام بيربط عددًا لا حصر له من المحتويات على الإنترنت، فتقدر تتصفحها. بنسميها صفحات الويب.', en: 'A system that links countless pieces of content on the internet so you can browse them. We call them web pages.' }, example: { ar: 'مواقع، فيديوهات، مقالات', en: 'Sites, videos, articles' } },
            { title: { ar: 'HTML', en: 'HTML' }, en: 'HTML', text: { ar: 'لغة بتُستخدم لإنشاء صفحات الويب.', en: 'A language used to build web pages.' }, example: { ar: 'هتتعلمها في الوحدة 13', en: 'You will learn it in Unit 13' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: WWW = الشبكة · HTML = لغة الصفحة', en: 'Remember: WWW = the web · HTML = the page’s language' } },
      ],
      bito: [
        { ar: 'الويب جزء من الإنترنت، مش هو الإنترنت كله.', en: 'The web is a part of the internet, not all of it.' },
        { ar: 'والبريد الإلكتروني مثلًا من الإنترنت لكن مش من الويب.', en: 'Email, for instance, is on the internet but is not the web.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-3)، ص 118', en: 'Key Points (a-3), p. 118' },
      blocks: [
        { type: 'heading', text: { ar: 'عنوان الصفحة (URL)', en: 'The page address (URL)' }, code: '(URL)' },
        {
          type: 'lead',
          text: { ar: 'URL هو طريقة التعبير عن موقع صفحة الويب. دوس على كل جزء من العنوان وشوف معناه:', en: 'A URL is the way to express the location of a web page. Tap each part of the address to see what it means:' },
        },
        {
          type: 'url-lab',
          parts: [
            { text: 'https://', name: { ar: 'اسم البروتوكول', en: 'Protocol name' }, meaning: { ar: 'طريقة الاتصال. https معناها اتصال مشفّر.', en: 'The way to connect. https means an encrypted connection.' } },
            { text: 'www', name: { ar: 'اسم المضيف (الخادم)', en: 'Host (server) name' }, meaning: { ar: 'اسم الخادم اللي عليه الصفحة.', en: 'The name of the server holding the page.' } },
            { text: '.mext', name: { ar: 'اسم المؤسسة', en: 'Organization name' }, meaning: { ar: 'اسم الجهة صاحبة الموقع.', en: 'The name of the organization that owns the site.' } },
            { text: '.go', name: { ar: 'نوع المؤسسة', en: 'Organization type' }, meaning: { ar: 'go = جهة حكومية.', en: 'go = a government body.' } },
            { text: '.jp', name: { ar: 'اسم الدولة', en: 'Country name' }, meaning: { ar: 'jp = اليابان.', en: 'jp = Japan.' } },
            { text: '/index.html', name: { ar: 'اسم الملف', en: 'File name' }, meaning: { ar: 'الصفحة اللي عايز تفتحها على الخادم.', en: 'The page you want to open on the server.' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: بروتوكول ← خادم ← مؤسسة ← نوع ← دولة ← ملف', en: 'Remember: protocol → server → organization → type → country → file' } },
      ],
      bito: [
        { ar: 'اسم النطاق هو الجزء من www لحد jp.', en: 'The domain name is the part from www to jp.' },
        { ar: 'مثال الكتاب موقع وزارة التعليم اليابانية.', en: 'The book’s example is the Japanese education ministry’s site.' },
      ],
    },
    {
      source: { ar: 'جداول النطاقات، ص 118', en: 'The domain tables, p. 118' },
      blocks: [
        { type: 'heading', text: { ar: 'أنواع المؤسسات ورموز الدول', en: 'Organization types and country codes' } },
        {
          type: 'compare',
          columns: [
            { ar: 'الرمز', en: 'Code' },
            { ar: 'المعنى', en: 'Meaning' },
          ],
          rows: [
            { label: { ar: 'نوع المؤسسة', en: 'Type' }, cells: [{ ar: 'gov', en: 'gov' }, { ar: 'جهة حكومية', en: 'Government body' }] },
            { label: { ar: '', en: '' }, cells: [{ ar: 'co', en: 'co' }, { ar: 'شركة', en: 'Company' }] },
            { label: { ar: '', en: '' }, cells: [{ ar: 'edu', en: 'edu' }, { ar: 'مدرسة (ابتدائية، إعدادية، ثانوية)', en: 'A school (primary, middle, secondary)' }] },
            { label: { ar: '', en: '' }, cells: [{ ar: 'ac', en: 'ac' }, { ar: 'جامعة أو مؤسسة تعليمية', en: 'A university or educational institution' }] },
            { label: { ar: 'اسم الدولة', en: 'Country' }, cells: [{ ar: 'jp', en: 'jp' }, { ar: 'اليابان', en: 'Japan' }] },
            { label: { ar: '', en: '' }, cells: [{ ar: 'eg', en: 'eg' }, { ar: 'مصر', en: 'Egypt' }] },
            { label: { ar: '', en: '' }, cells: [{ ar: 'kr', en: 'kr' }, { ar: 'كوريا الجنوبية', en: 'South Korea' }] },
            { label: { ar: '', en: '' }, cells: [{ ar: 'cn', en: 'cn' }, { ar: 'الصين', en: 'China' }] },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: eg = مصر · edu = مدرسة · gov = حكومة', en: 'Remember: eg = Egypt · edu = school · gov = government' } },
      ],
      bito: [
        { ar: 'لو شفت موقع ينتهي بـ .eg يبقى مصري.', en: 'If you see a site ending in .eg it is Egyptian.' },
        { ar: 'وكل دولة ليها رمز من حرفين.', en: 'And each country has a two-letter code.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-4)، ص 118', en: 'Key Points (a-4), p. 118' },
      blocks: [
        { type: 'heading', text: { ar: 'إزاي بتظهر الصفحة؟', en: 'How does the page appear?' } },
        {
          type: 'sequence',
          groups: [
            {
              who: { ar: 'متصفحك وخوادم الإنترنت', en: 'Your browser and the internet’s servers' },
              steps: [
                { text: { ar: 'المتصفح يسأل خادم DNS عن عنوان IP للاسم اللي كتبته.', en: 'The browser asks a DNS server for the IP address of the name you typed.' } },
                { text: { ar: 'خادم DNS يرجّع عنوان IP.', en: 'The DNS server sends back the IP address.' } },
                { text: { ar: 'المتصفح يدخل على خادم الويب بعنوان IP ده.', en: 'The browser reaches the web server with that IP address.' } },
                { text: { ar: 'خادم الويب يعرض صفحة الويب.', en: 'The web server shows the web page.' } },
              ],
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: اسم ← IP ← الخادم ← الصفحة', en: 'Remember: name → IP → the server → the page' } },
      ],
      bito: [
        { ar: 'أول حاجة بتحصل إنه بيسأل "الدليل" (DNS).', en: 'The first thing that happens is it asks the "phone book" (DNS).' },
        { ar: 'وكل ده بياخد أجزاء من الثانية.', en: 'And all of it takes a fraction of a second.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب)، ص 118–119', en: 'Key Points (b), pp. 118–119' },
      blocks: [
        { type: 'heading', text: { ar: 'البريد الإلكتروني', en: 'Email' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'عنوان البريد', en: 'The email address' }, en: 'email address', text: { ar: 'بيتكون من اسم المستخدم ثم @ ثم اسم النطاق.', en: 'Made of the username, then @, then the domain name.' }, example: { ar: 'hanako@example.co.jp', en: 'hanako@example.co.jp' } },
            { title: { ar: 'اسم المستخدم', en: 'Username' }, en: 'Username', text: { ar: 'بيحدد المستلم.', en: 'Identifies the recipient.' }, example: { ar: 'hanako', en: 'hanako' } },
            { title: { ar: 'اسم النطاق', en: 'Domain name' }, en: 'Domain name', text: { ar: 'بيحدد خادم البريد اللي بيستخدمه المستلم.', en: 'Identifies the mail server the recipient uses.' }, example: { ar: 'example.co.jp', en: 'example.co.jp' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: اسم المستخدم @ النطاق', en: 'Remember: username @ domain' } },
      ],
      bito: [
        { ar: 'زي عنوان بيت: الاسم والمكان.', en: 'Like a home address: the name and the place.' },
        { ar: 'اللي قبل @ هو إنت، واللي بعدها خادم البريد.', en: 'What is before @ is you, and after it is the mail server.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-2)، ص 119', en: 'Key Points (b-2), p. 119' },
      blocks: [
        { type: 'heading', text: { ar: 'بروتوكولات البريد', en: 'Email protocols' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'SMTP', en: 'SMTP' }, en: 'SMTP', text: { ar: 'بروتوكول لإرسال رسائل البريد إلى خادم البريد.', en: 'A protocol for sending email messages to a mail server.' }, example: { ar: 'لما تدوس "إرسال"', en: 'When you press "send"' } },
            { title: { ar: 'POP', en: 'POP' }, en: 'POP', text: { ar: 'بروتوكول لاستلام رسائل البريد من الخادم وحذفها منه.', en: 'A protocol for receiving mail from the server and removing it from there.' }, example: { ar: 'بتنزّل الرسالة على جهازك', en: 'You download the message to your device' } },
            { title: { ar: 'IMAP', en: 'IMAP' }, en: 'IMAP', text: { ar: 'بروتوكول للوصول إلى رسائل البريد المخزنة على الخادم.', en: 'A protocol for reaching mail kept on the server.' }, example: { ar: 'بتقرأ الرسالة وهي لسه على الخادم', en: 'You read the message while it stays on the server' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: SMTP يبعت · POP ينزّل · IMAP يقرأ على الخادم', en: 'Remember: SMTP sends · POP downloads · IMAP reads on the server' } },
      ],
      bito: [
        { ar: 'S = Send، ودي سهلة.', en: 'S = Send, an easy one.' },
        { ar: 'IMAP بيخلّي بريدك يظهر على كل أجهزتك لأنه بيفضل على الخادم.', en: 'IMAP lets your mail show on all your devices because it stays on the server.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-4)، ص 118', en: 'Key Points (a-4), p. 118' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه الخادم اللي بيرجّع عنوان IP للاسم اللي كتبته في المتصفح؟', en: 'Which server sends back the IP address for the name you typed in the browser?' },
          options: [
            { ar: 'خادم DNS', en: 'DNS server' },
            { ar: 'خادم الويب', en: 'Web server' },
            { ar: 'خادم البريد', en: 'Mail server' },
          ],
          answer: 0,
          explanation: {
            ar: 'خادم DNS هو اللي بيحوّل الاسم لعنوان IP. بعدها المتصفح بيروح لخادم الويب ويجيب الصفحة.',
            en: 'The DNS server turns the name into an IP address. Then the browser goes to the web server and gets the page.',
          },
          success: { ar: 'صح! DNS الأول. +10 نقط', en: 'Correct! DNS comes first. +10 pts' },
        },
      ],
      bito: [
        { ar: 'اسم ← رقم: ده شغل الدليل.', en: 'Name → number: the phone book’s job.' },
        { ar: 'خادم الويب بييجي بعده.', en: 'The web server comes after.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (3)، ص 120', en: 'Test Your Knowledge (3), p. 120' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'في https://www.mext.go.jp/index.html، إيه اللي بيمثّله الجزء "jp"؟', en: 'In https://www.mext.go.jp/index.html, what does the part "jp" stand for?' },
          options: [
            { ar: 'اسم الدولة', en: 'The country name' },
            { ar: 'نوع المؤسسة', en: 'The organization type' },
            { ar: 'اسم الملف', en: 'The file name' },
            { ar: 'اسم البروتوكول', en: 'The protocol name' },
          ],
          answer: 0,
          explanation: {
            ar: '"jp" رمز دولة اليابان. و"go" نوع المؤسسة (حكومية)، و"index.html" اسم الملف، و"https" اسم البروتوكول.',
            en: '"jp" is Japan’s country code. "go" is the organization type (government), "index.html" is the file name and "https" is the protocol.',
          },
          success: { ar: 'صح! jp = اليابان. +10 نقط', en: 'Correct! jp = Japan. +10 pts' },
        },
      ],
      bito: [
        { ar: 'رمز الدولة بيجي آخر النطاق.', en: 'The country code comes at the end of the domain.' },
        { ar: 'تقدر تدوس على الأجزاء في المجهر اللي فات.', en: 'You can tap the parts in the magnifier from earlier.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-2)، ص 119', en: 'Key Points (b-2), p. 119' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'أنهي بروتوكول بيُستخدم لإرسال رسالة بريد إلكتروني إلى خادم البريد؟', en: 'Which protocol is used to send an email message to the mail server?' },
          options: ['SMTP', 'POP', 'IMAP'],
          answer: 0,
          explanation: {
            ar: 'SMTP للإرسال. POP لتنزيل الرسائل من الخادم، وIMAP لقراءة الرسائل وهي على الخادم.',
            en: 'SMTP is for sending. POP downloads messages from the server, and IMAP reads messages while they stay on the server.',
          },
          success: { ar: 'صح! SMTP = إرسال. +10 نقط', en: 'Correct! SMTP = sending. +10 pts' },
        },
      ],
      bito: [
        { ar: 'S = Send.', en: 'S = Send.' },
        { ar: 'الاتنين التانيين للاستقبال.', en: 'The other two are for receiving.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 8-4!', en: 'You finished lesson 8-4!' } },
        {
          type: 'recap',
          items: [
            { code: 'URL', text: { ar: 'عنوان الصفحة', en: 'the page address' } },
            { code: 'DNS', text: { ar: 'اسم ← IP', en: 'name → IP' } },
            { code: '@', text: { ar: 'مستخدم @ نطاق', en: 'user @ domain' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة التوصيل: أجزاء العنوان، وبروتوكولات البريد.', en: 'Well done! The matching game: address parts and email protocols.' },
        { ar: 'استعن بالمجهر لو احتجت.', en: 'Use the magnifier if you need it.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'جزء العنوان ومعناه', en: 'The address part and its meaning' },
        source: { ar: 'النقاط الرئيسية (أ-3)، ص 118', en: 'Key Points (a-3), p. 118' },
        pairs: [
          { left: { text: { ar: 'https', en: 'https' } }, right: { ar: 'اسم البروتوكول', en: 'The protocol name' } },
          { left: { text: { ar: 'www', en: 'www' } }, right: { ar: 'اسم الخادم (المضيف)', en: 'The server (host) name' } },
          { left: { text: { ar: 'go', en: 'go' } }, right: { ar: 'نوع المؤسسة: حكومة', en: 'Organization type: government' } },
          { left: { text: { ar: 'jp', en: 'jp' } }, right: { ar: 'اسم الدولة: اليابان', en: 'Country: Japan' } },
          { left: { text: { ar: 'index.html', en: 'index.html' } }, right: { ar: 'اسم الملف', en: 'The file name' } },
        ],
      },
      {
        title: { ar: 'البروتوكول ودوره', en: 'The protocol and its job' },
        source: { ar: 'النقاط الرئيسية (ب-2)، ص 119', en: 'Key Points (b-2), p. 119' },
        pairs: [
          { left: { text: { ar: 'SMTP', en: 'SMTP' } }, right: { ar: 'إرسال البريد لخادم البريد', en: 'Sending mail to the mail server' } },
          { left: { text: { ar: 'POP', en: 'POP' } }, right: { ar: 'تنزيل البريد من الخادم', en: 'Downloading mail from the server' } },
          { left: { text: { ar: 'IMAP', en: 'IMAP' } }, right: { ar: 'قراءة البريد وهو على الخادم', en: 'Reading mail while it stays on the server' } },
          { left: { text: { ar: 'خادم DNS', en: 'DNS server' } }, right: { ar: 'يرجّع عنوان IP للاسم', en: 'Gives back the IP address for a name' } },
        ],
      },
    ],
  },
};
