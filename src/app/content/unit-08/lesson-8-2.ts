import { Lesson } from '@core/models';

/**
 * Lesson 8-2 "عناوين IP وأسماء النطاقات" — ministry book pp. 112–113.
 * Book notes:
 * - p.112 solution: the IPv4 example is 192.168.0.1 (each number 0–255); IPv6 uses 128 bits.
 * - The exercises on p.113 have no answer key; only the Key Points are used.
 */
export const LESSON_8_2: Lesson = {
  unitId: 8,
  id: '8-2',
  title: { ar: 'عناوين IP وأسماء النطاقات', en: 'IP Addresses and Domain Names' },
  bookPages: '112 – 113',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! كل جهاز على النت ليه "عنوان بيت". ده عنوان IP.', en: 'Hi! Every device on the internet has a "home address". That is an IP address.' },
        { ar: 'في الآخر لعبة توصيل: وصّل كل مصطلح بمعناه.', en: 'At the end there is a matching game: link each term to its meaning.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1)، ص 112', en: 'Key Points (a-1), p. 112' },
      blocks: [
        { type: 'heading', text: { ar: 'عنوان IP', en: 'The IP address' }, code: '(IP address)' },
        {
          type: 'lead',
          text: { ar: 'رقم فريد بيتعيّن لكل جهاز متصل بالإنترنت، علشان يتعرف عليه. بيتمثل بالنظام الثنائي في IPv4 على 32 بت، مقسومة لـ 4 أجزاء، كل جزء 8 بت من 0 لـ 255.', en: 'A unique number given to every device connected to the internet so it can be identified. In IPv4 it is shown in binary on 32 bits, split into 4 parts of 8 bits each, from 0 to 255.' },
        },
        { type: 'ip-lab', address: '192.168.3.1' },
        { type: 'memo', text: { ar: 'افتكر: IP = 4 أرقام (0–255) = 32 بت', en: 'Remember: IP = 4 numbers (0–255) = 32 bits' } },
      ],
      bito: [
        { ar: 'مثال الكتاب: 192.168.3.1 = 11000000.10101000.00000011.00000001.', en: 'The book’s example: 192.168.3.1 = 11000000.10101000.00000011.00000001.' },
        { ar: 'جرّب 255.255.255.255 وشوف كل البتات 1.', en: 'Try 255.255.255.255 and see every bit as 1.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-2)، ص 112', en: 'Key Points (a-2), p. 112' },
      blocks: [
        { type: 'heading', text: { ar: 'عنوان عالمي وخاص', en: 'Global and private addresses' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'عنوان IP العالمي', en: 'Global IP address' }, en: 'Global IP address', text: { ar: 'بيُستخدم على الإنترنت، ومفيش اتنين ليهم نفس العنوان.', en: 'Used on the internet; no two share the same address.' }, example: { ar: 'عنوان موقع على النت', en: 'The address of a website' } },
            { title: { ar: 'عنوان IP الخاص', en: 'Private IP address' }, en: 'Private IP address', text: { ar: 'بيُستخدم جوه شبكة محلية زي LAN.', en: 'Used inside a local network like a LAN.' }, example: { ar: 'جهازك في شبكة البيت (192.168...)', en: 'Your device on the home network (192.168...)' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: عالمي = للإنترنت · خاص = جوه الشبكة', en: 'Remember: global = for the internet · private = inside the network' } },
      ],
      bito: [
        { ar: 'كل البيوت ممكن يبقى فيها جهاز 192.168.0.1، وده عادي لأنه خاص بشبكة كل بيت.', en: 'Many homes can have a 192.168.0.1 device, and that is fine because it is private to each home.' },
        { ar: 'لكن العنوان العالمي واحد بس في الدنيا.', en: 'But a global address is unique in the world.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-3)، ص 112', en: 'Key Points (a-3), p. 112' },
      blocks: [
        { type: 'heading', text: { ar: 'العناوين خلصت!', en: 'Running out of addresses!' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'المشكلة', en: 'The problem' }, text: { ar: 'مع انتشار الإنترنت، عناوين IPv4 بدأت تنفد.', en: 'As the internet spread, IPv4 addresses started to run out.' }, example: { ar: '32 بت = حوالي 4 مليار عنوان بس', en: '32 bits = only about 4 billion addresses' } },
            { title: { ar: 'الحل: IPv6', en: 'The fix: IPv6' }, en: 'IPv6 (128 bit)', text: { ar: 'عنوان IP بيتمثل على 128 بت، فعدده ضخم جدًا.', en: 'An IP address shown on 128 bits, so there are vastly more of them.' }, example: { ar: 'تكفي لكل جهاز في العالم', en: 'Enough for every device in the world' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: IPv4 = 32 بت · IPv6 = 128 بت', en: 'Remember: IPv4 = 32 bits · IPv6 = 128 bits' } },
      ],
      bito: [
        { ar: 'IPv6 أكبر بأربع مرات في البتات، لكن عدده أكبر بمليارات المرات.', en: 'IPv6 has four times the bits, but billions of times more addresses.' },
        { ar: 'كل بت زيادة بيضاعف الاحتمالات.', en: 'Each extra bit doubles the possibilities.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-4، 5)، ص 112', en: 'Key Points (a-4, 5), p. 112' },
      blocks: [
        { type: 'heading', text: { ar: 'اسم النطاق والـ DNS', en: 'Domain name and DNS' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'اسم النطاق', en: 'Domain name' }, en: 'Domain name', text: { ar: 'سلسلة حروف بتتعيّن لعنوان IP عشان تبقى أسهل في الفهم والحفظ.', en: 'A string of letters assigned to an IP address to make it easier to understand and remember.' }, example: { ar: 'google.com بدل أرقام طويلة', en: 'google.com instead of a long number' } },
            { title: { ar: 'نظام DNS', en: 'DNS' }, en: 'DNS', text: { ar: 'نظام بيربط أسماء النطاقات بعناوين IP وبالعكس.', en: 'A system that links domain names to IP addresses and back.' }, example: { ar: 'زي دليل التليفون: الاسم يدّيك الرقم', en: 'Like a phone book: the name gives you the number' } },
            { title: { ar: 'خادم DNS', en: 'DNS server' }, en: 'DNS server', text: { ar: 'الخادم المسؤول عن أداء الدور ده.', en: 'The server responsible for doing this job.' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: DNS = دليل تليفون الإنترنت', en: 'Remember: DNS = the internet’s phone book' } },
      ],
      bito: [
        { ar: 'إنت بتكتب الاسم، والـ DNS بيجيب العنوان الرقمي.', en: 'You type the name and DNS fetches the numeric address.' },
        { ar: 'من غيره كنت هتحفظ أرقام كل مواقعك!', en: 'Without it you would have to memorize the numbers of all your sites!' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك، ص 112', en: 'Test Your Knowledge, p. 112' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'أنهي مثال مناسب لعنوان IPv4 لجهاز كمبيوتر؟', en: 'Which is a suitable example of an IPv4 address of a computer?' },
          options: ['192.168.0.1', '555-1234-5678', 'kantei.go.jp', 'https://www.example.co.jp/'],
          answer: 0,
          explanation: {
            ar: 'عنوان IPv4 هو 4 أرقام بينها نقط، كل رقم من 0 لـ 255. 555-1234-5678 رقم تليفون، وkantei.go.jp اسم نطاق، والرابع URL.',
            en: 'An IPv4 address is 4 numbers separated by dots, each from 0 to 255. 555-1234-5678 is a phone number, kantei.go.jp is a domain name, and the last is a URL.',
          },
          success: { ar: 'صح! 4 أرقام بينها نقط. +10 نقط', en: 'Correct! 4 numbers with dots. +10 pts' },
        },
      ],
      bito: [
        { ar: 'جرّب كتابته في آلة IP: لو رقم زاد عن 255 هتشوفه بيقف عند 255.', en: 'Try typing it in the IP box: a number above 255 stops at 255.' },
        { ar: 'مفيش حروف في IPv4.', en: 'There are no letters in IPv4.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-3)، ص 112', en: 'Key Points (a-3), p. 112' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: عنوان IPv6 بيتمثل على 128 بت.', en: 'True or false: an IPv6 address is shown on 128 bits.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. IPv6 على 128 بت، وده الحل لمشكلة نفاد عناوين IPv4 (32 بت).',
            en: '✓. IPv6 uses 128 bits, the answer to IPv4 (32 bit) addresses running out.',
          },
          success: { ar: 'صح! IPv6 = 128 بت. +10 نقط', en: 'Correct! IPv6 = 128 bits. +10 pts' },
        },
      ],
      bito: [
        { ar: 'IPv4 = 32 بت.', en: 'IPv4 = 32 bits.' },
        { ar: 'و IPv6 أكبر بكتير.', en: 'And IPv6 is much bigger.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-5)، ص 112', en: 'Key Points (a-5), p. 112' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه الخادم اللي بيحوّل اسم النطاق لعنوان IP؟', en: 'Which server turns a domain name into an IP address?' },
          options: [
            { ar: 'خادم DNS', en: 'DNS server' },
            { ar: 'خادم البريد', en: 'Mail server' },
            { ar: 'خادم الطباعة', en: 'Printer server' },
          ],
          answer: 0,
          explanation: {
            ar: 'خادم DNS هو اللي بيربط أسماء النطاقات بعناوين IP.',
            en: 'The DNS server links domain names to IP addresses.',
          },
          success: { ar: 'صح! DNS = دليل التليفون. +10 نقط', en: 'Correct! DNS = the phone book. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الاسم ← الرقم: ده شغل الدليل.', en: 'Name → number: that is the phone book’s job.' },
        { ar: 'كل مرة بتفتح موقع بيحصل ده.', en: 'It happens every time you open a site.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 8-2!', en: 'You finished lesson 8-2!' } },
        {
          type: 'recap',
          items: [
            { code: '32 bit', text: { ar: 'IPv4', en: 'IPv4' } },
            { code: '128 bit', text: { ar: 'IPv6', en: 'IPv6' } },
            { code: 'DNS', text: { ar: 'اسم ← رقم', en: 'name → number' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة التوصيل.', en: 'Well done! The matching game.' },
        { ar: 'وصّل المصطلحات بمعانيها.', en: 'Link the terms to their meanings.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'المصطلح ومعناه', en: 'The term and its meaning' },
        source: { ar: 'النقاط الرئيسية (أ)، ص 112', en: 'Key Points (a), p. 112' },
        pairs: [
          { left: { text: { ar: 'عنوان IP', en: 'IP address' } }, right: { ar: 'رقم فريد لكل جهاز على الإنترنت', en: 'A unique number for each device on the internet' } },
          { left: { text: { ar: 'عنوان IP خاص', en: 'Private IP address' } }, right: { ar: 'بيُستخدم جوه شبكة محلية', en: 'Used inside a local network' } },
          { left: { text: { ar: 'عنوان IP عالمي', en: 'Global IP address' } }, right: { ar: 'بيُستخدم على الإنترنت', en: 'Used on the internet' } },
          { left: { text: { ar: 'اسم النطاق', en: 'Domain name' } }, right: { ar: 'اسم حروف سهل الحفظ لعنوان IP', en: 'An easy-to-remember name for an IP address' } },
          { left: { text: { ar: 'DNS', en: 'DNS' } }, right: { ar: 'بيربط الاسم بالعنوان الرقمي', en: 'Links the name to the numeric address' } },
        ],
      },
      {
        title: { ar: 'الأرقام والبتات', en: 'Numbers and bits' },
        source: { ar: 'النقاط الرئيسية (أ-1، 3)، ص 112', en: 'Key Points (a-1, 3), p. 112' },
        pairs: [
          { left: { text: { ar: 'IPv4', en: 'IPv4' } }, right: { ar: '32 بت', en: '32 bits' } },
          { left: { text: { ar: 'IPv6', en: 'IPv6' } }, right: { ar: '128 بت', en: '128 bits' } },
          { left: { text: { ar: 'كل جزء من IPv4', en: 'Each part of an IPv4 address' } }, right: { ar: '8 بت (من 0 لـ 255)', en: '8 bits (from 0 to 255)' } },
          { left: { text: { ar: 'عدد أجزاء IPv4', en: 'Number of parts in IPv4' } }, right: { ar: '4 أجزاء', en: '4 parts' } },
        ],
      },
    ],
  },
};
