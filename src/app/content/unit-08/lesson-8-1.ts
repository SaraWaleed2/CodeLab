import { Lesson } from '@core/models';

/**
 * Lesson 8-1 "شبكات الكمبيوتر" — ministry book pp. 108–111.
 * Book notes:
 * - p.109: the table of advantages and disadvantages of circuit switching vs packet switching.
 * - p.109 key: in "Test Your Knowledge (1)" the INCORRECT statement is the one calling a WAN a network inside a house or office
 *   (that describes a LAN); the site turns it into a question.
 * - The exercises on pp.110–111 have partly unclear keys; only the Key Points are used.
 */
export const LESSON_8_1: Lesson = {
  unitId: 8,
  id: '8-1',
  title: { ar: 'شبكات الكمبيوتر', en: 'Computer Networks' },
  bookPages: '108 – 111',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! إزاي الأجهزة بتكلّم بعض؟ بالشبكات. هنشوف أنواعها وأجهزتها.', en: 'Hi! How do devices talk to each other? Through networks. We will see their kinds and their devices.' },
        { ar: 'في الآخر لعبة فرز: شبكة LAN ولا WAN ولا إنترنت؟', en: 'At the end there is a sorting game: LAN, WAN or the internet?' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1، 2)، ص 108', en: 'Key Points (a-1, 2), p. 108' },
      blocks: [
        { type: 'heading', text: { ar: 'إيه هي الشبكة؟', en: 'What is a network?' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'شبكة المعلومات والاتصالات', en: 'Information and communication network' }, en: 'Information and communication network', text: { ar: 'شبكة بتستخدم خطوط اتصال لنقل المعلومات، زي شبكة العنكبوت.', en: 'A network that uses communication lines to carry information, like a spider’s web.' }, example: { ar: 'شبكة الموبايل والتليفون الأرضي', en: 'The mobile and landline networks' } },
            { title: { ar: 'شبكة الكمبيوتر', en: 'Computer network' }, en: 'Computer network', text: { ar: 'نظام اتصال بيربط أجهزة المعلومات زي الكمبيوتر والهواتف الذكية، فيتبادلوا البيانات بينهم.', en: 'A communication system that links information devices like computers and smartphones so they exchange data.' }, example: { ar: 'موبايلك والطابعة على نفس الواي فاي', en: 'Your phone and the printer on the same Wi-Fi' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: شبكة = أجهزة متوصلة وبتتبادل بيانات', en: 'Remember: a network = connected devices exchanging data' } },
      ],
      bito: [
        { ar: 'اسمها شبكة زي شبكة صياد السمك: خيوط بتربط نقط كتير.', en: 'It is called a network like a fishing net: threads linking many points.' },
        { ar: 'كل جهاز نقطة في الشبكة.', en: 'Every device is a point in the network.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-3 إلى 4)، ص 108', en: 'Key Points (a-3 to 4), p. 108' },
      blocks: [
        { type: 'heading', text: { ar: 'أنواع الشبكات', en: 'Kinds of network' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الشبكة المحلية (LAN)', en: 'Local area network (LAN)' }, en: 'LAN', text: { ar: 'بتربط أجهزة جوه منطقة محدودة، زي بيت أو مدرسة.', en: 'Links devices inside a limited area, like a home or a school.' }, example: { ar: 'واي فاي البيت', en: 'Your home Wi-Fi' } },
            { title: { ar: 'الشبكة الواسعة (WAN)', en: 'Wide area network (WAN)' }, en: 'WAN', text: { ar: 'بتربط شبكات في منطقة جغرافية واسعة.', en: 'Links networks across a wide geographic area.' }, example: { ar: 'شبكة بتوصل فروع بنك في مدن مختلفة', en: 'A network linking a bank’s branches in different cities' } },
            { title: { ar: 'الإنترنت', en: 'The internet' }, en: 'Internet', text: { ar: 'شبكة بتربط شبكات LAN و WAN على نطاق عالمي.', en: 'A network linking LANs and WANs on a worldwide scale.' }, example: { ar: 'اللي بتفتحه كل يوم', en: 'What you open every day' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: LAN = محلية · WAN = واسعة · الإنترنت = العالم', en: 'Remember: LAN = local · WAN = wide · the internet = the world' } },
      ],
      bito: [
        { ar: 'الإنترنت هو شبكة الشبكات كلها.', en: 'The internet is the network of all the networks.' },
        { ar: 'وLAN ممكن تبقى سلكية أو لاسلكية (Wi-Fi).', en: 'And a LAN can be wired or wireless (Wi-Fi).' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-3-1)، ص 108', en: 'Key Points (a-3-1), p. 108' },
      blocks: [
        { type: 'heading', text: { ar: 'LAN سلكية ولاسلكية', en: 'Wired and wireless LAN' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'LAN سلكية', en: 'Wired LAN' }, en: 'Wired LAN', text: { ar: 'بتتبادل البيانات بالكابلات.', en: 'Exchanges data through cables.' }, example: { ar: 'كابل Ethernet بين الكمبيوتر والراوتر', en: 'An Ethernet cable between a PC and a router' } },
            { title: { ar: 'LAN لاسلكية', en: 'Wireless LAN' }, en: 'Wireless LAN', text: { ar: 'بتتبادل البيانات بموجات الراديو بدل الكابلات.', en: 'Exchanges data by radio waves instead of cables.' }, example: { ar: 'الواي فاي (Wi-Fi)', en: 'Wi-Fi' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: سلكية = كابل · لاسلكية = راديو', en: 'Remember: wired = cable · wireless = radio' } },
      ],
      bito: [
        { ar: 'الكابل أسرع وأثبت غالبًا، والواي فاي أسهل في الحركة.', en: 'A cable is usually faster and steadier, and Wi-Fi is easier for moving around.' },
        { ar: 'اللاسلكي كمان شبكة LAN.', en: 'Wireless is still a LAN.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-5)، ص 108', en: 'Key Points (a-5), p. 108' },
      blocks: [
        { type: 'heading', text: { ar: 'الاتصال بالإنترنت', en: 'Connecting to the internet' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'مزوّد الخدمة (ISP)', en: 'Internet service provider (ISP)' }, en: 'ISP (provider)', text: { ar: 'شركة بتديك الاتصال بالإنترنت. لازم تعاقد معاها.', en: 'A company that gives you the internet connection. You must sign up with it.' }, example: { ar: 'شركة النت بتاعة بيتك', en: 'Your home internet company' } },
            { title: { ar: 'الراوتر', en: 'Router' }, en: 'Router', text: { ar: 'جهاز بيوجّه البيانات ويربط بين الشبكات المختلفة.', en: 'A device that directs data and links different networks.' }, example: { ar: 'الجهاز اللي بيطلّع الواي فاي', en: 'The device that sends out Wi-Fi' } },
            { title: { ar: 'الهَب (Hub)', en: 'Hub' }, en: 'Hub', text: { ar: 'جهاز مركزي بيوصّل عدة كابلات.', en: 'A central device that connects several cables.' }, example: { ar: 'زي مشترك كهربا بيوزع على كذا جهاز', en: 'Like a power strip serving many devices' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: ISP يوصّلك · الراوتر يوجّه · الهب يوزّع', en: 'Remember: ISP connects you · router directs · hub spreads' } },
      ],
      bito: [
        { ar: 'من غير ISP مفيش إنترنت حتى لو عندك راوتر.', en: 'Without an ISP there is no internet even if you own a router.' },
        { ar: 'الراوتر هو شرطي المرور بتاع البيانات.', en: 'The router is the data’s traffic officer.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب)، ص 108–109', en: 'Key Points (b), pp. 108–109' },
      blocks: [
        { type: 'heading', text: { ar: 'الخادم والعميل', en: 'Server and client' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الخادم (Server)', en: 'Server' }, en: 'Server', text: { ar: 'كمبيوتر بيقدّم خدمات للمستخدمين.', en: 'A computer that provides services to users.' }, example: { ar: 'زي الجرسون في المطعم', en: 'Like the waiter in a restaurant' } },
            { title: { ar: 'العميل (Client)', en: 'Client' }, en: 'Client', text: { ar: 'كمبيوتر بيطلب خدمة من الخادم.', en: 'A computer that asks a server for a service.' }, example: { ar: 'إنت اللي بتطلب الأكل', en: 'You, who order the food' } },
            { title: { ar: 'خادم الملفات', en: 'File server' }, text: { ar: 'بيدير الملفات.', en: 'Manages files.' } },
            { title: { ar: 'خادم الطباعة', en: 'Printer server' }, text: { ar: 'بيتعامل مع الطابعة.', en: 'Handles the printer.' } },
            { title: { ar: 'خادم البريد', en: 'Mail server' }, text: { ar: 'بيرسل ويستقبل رسائل البريد الإلكتروني.', en: 'Sends and receives email messages.' } },
            { title: { ar: 'خادم البروكسي', en: 'Proxy server' }, text: { ar: 'بيعمل وسيط للوصول للإنترنت.', en: 'Acts as a go-between for reaching the internet.' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: الخادم بيقدّم · العميل بيطلب', en: 'Remember: the server serves · the client asks' } },
      ],
      bito: [
        { ar: 'جهازك لما بيفتح موقع هو العميل، والموقع نفسه على خادم.', en: 'Your device opening a site is the client, and the site itself sits on a server.' },
        { ar: 'فيه خادم لكل مهمة.', en: 'There is a server for every job.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-2)، ص 109', en: 'Key Points (b-2), p. 109' },
      blocks: [
        { type: 'heading', text: { ar: 'نمطين للشبكة', en: 'Two network styles' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'العميل-الخادم', en: 'Client-server system' }, en: 'Client-server system', text: { ar: 'نمط فيه خادم بيوفّر الخدمات والعميل بيستقبلها.', en: 'A style where a server provides services and clients receive them.' }, example: { ar: 'موقع على الإنترنت', en: 'A website' } },
            { title: { ar: 'الند للند', en: 'Peer-to-peer system' }, en: 'Peer-to-peer system', text: { ar: 'نمط الأجهزة فيه متساوية في العلاقة، وبتقدّم الخدمات لبعض وبتستقبلها من بعض.', en: 'A style where devices are equal and provide services to each other and receive them from each other.' }, example: { ar: 'جهازين بيتبادلوا ملفات مباشرة', en: 'Two devices swapping files directly' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: عميل-خادم = رئيس ومرؤوس · ند للند = متساويين', en: 'Remember: client-server = boss and staff · peer-to-peer = equals' } },
      ],
      bito: [
        { ar: 'في الند للند محدش أهم من التاني.', en: 'In peer-to-peer nobody is more important than the other.' },
        { ar: 'كل جهاز بيطلب وبيدّي.', en: 'Every device both asks and gives.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ت)، ص 109', en: 'Key Points (c), p. 109' },
      blocks: [
        { type: 'heading', text: { ar: 'طرق الاتصال', en: 'Ways of communicating' } },
        {
          type: 'compare',
          columns: [
            { ar: 'تحويل الدوائر', en: 'Circuit switching' },
            { ar: 'تحويل الحزم', en: 'Packet switching' },
          ],
          rows: [
            { label: { ar: 'الفكرة', en: 'The idea' }, cells: [{ ar: 'نبني مسار اتصال بين المرسل والمستقبل قبل ما نبعت', en: 'We build a path between sender and receiver before sending' }, { ar: 'نقسّم البيانات لحزم صغيرة (Packets) ونبعتها', en: 'We split data into small packets and send them' }] },
            { label: { ar: 'المزايا', en: 'Advantages' }, cells: [{ ar: 'بعد بناء المسار الاتصال بيبقى مستقر', en: 'Once the path is built, the connection is stable' }, { ar: 'بيشتغل حتى لو الشبكة مزدحمة أو جزء منها تالف', en: 'It works even if the network is busy or partly down' }] },
            { label: { ar: 'العيوب', en: 'Disadvantages' }, cells: [{ ar: 'الخط محجوز للمستخدم حتى لو مفيش بيانات بتتنقل', en: 'The line is held for the user even when no data is sent' }, { ar: 'ممكن حزمة تتأخر أو تضيع لما الشبكة تزدحم', en: 'A packet may be delayed or lost when the network is congested' }] },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: دوائر = خط محجوز · حزم = قطع صغيرة', en: 'Remember: circuits = a reserved line · packets = small pieces' } },
      ],
      bito: [
        { ar: 'تحويل الدوائر زي مكالمة تليفون قديمة: الخط محجوز ليك.', en: 'Circuit switching is like an old phone call: the line is reserved for you.' },
        { ar: 'والحزم زي ما تبعت الرسالة بالبريد على أجزاء.', en: 'Packets are like posting a message in several parts.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 109', en: 'Test Your Knowledge (1), p. 109' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'اختر العبارة غير الصحيحة عن مكونات الشبكة.', en: 'Choose the INCORRECT statement about network parts.' },
          options: [
            { ar: 'مزوّد خدمة الإنترنت (ISP) شركة بتقدّم خدمة الاتصال بالإنترنت.', en: 'An internet service provider (ISP) is a company that offers internet access.' },
            { ar: 'الشبكة الواسعة (WAN) هي شبكة محدودة داخل بيت أو مكتب.', en: 'A wide area network (WAN) is a limited network inside a home or office.' },
            { ar: 'الهَب (Hub) جهاز مركزي بيوصّل عدة كابلات.', en: 'A hub is a central device connecting several cables.' },
            { ar: 'الراوتر بيوجّه البيانات ويربط بين شبكات مختلفة.', en: 'A router directs data and links different networks.' },
          ],
          answer: 1,
          explanation: {
            ar: 'الشبكة المحدودة جوه بيت أو مكتب اسمها LAN مش WAN. الـ WAN بتربط شبكات في منطقة جغرافية واسعة.',
            en: 'A limited network inside a home or office is a LAN, not a WAN. A WAN links networks across a wide area.',
          },
          success: { ar: 'صح! دي عبارة LAN مش WAN. +10 نقط', en: 'Correct! That describes a LAN, not a WAN. +10 pts' },
        },
      ],
      bito: [
        { ar: 'المطلوب العبارة الغلط.', en: 'You need the wrong statement.' },
        { ar: 'جرّب تفتكر: الواسعة = واسعة جغرافيًا.', en: 'Try to remember: wide = geographically wide.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-1)، ص 108', en: 'Key Points (b-1), p. 108' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه اسم الكمبيوتر اللي بيطلب خدمة من خادم؟', en: 'What is a computer that asks a server for a service called?' },
          options: [
            { ar: 'عميل (Client)', en: 'Client' },
            { ar: 'خادم ملفات', en: 'File server' },
            { ar: 'راوتر', en: 'Router' },
          ],
          answer: 0,
          explanation: {
            ar: 'العميل (Client) هو اللي بيطلب الخدمة. الخادم هو اللي بيقدّمها.',
            en: 'A client is the one that asks for a service. A server is the one that provides it.',
          },
          success: { ar: 'صح! عميل = بيطلب. +10 نقط', en: 'Correct! Client = asks. +10 pts' },
        },
      ],
      bito: [
        { ar: 'إنت العميل في المطعم.', en: 'You are the client in the restaurant.' },
        { ar: 'والجرسون هو الخادم.', en: 'And the waiter is the server.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ت)، ص 109', en: 'Key Points (c), p. 109' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'أنهي طريقة بتقسّم البيانات لحزم صغيرة وتشتغل حتى لو جزء من الشبكة تالف؟', en: 'Which method splits data into small packets and still works if part of the network is down?' },
          options: [
            { ar: 'تحويل الدوائر', en: 'Circuit switching' },
            { ar: 'تحويل الحزم', en: 'Packet switching' },
          ],
          answer: 1,
          explanation: {
            ar: 'تحويل الحزم بيقسّم البيانات لحزم، وبيشتغل حتى لو الشبكة مزدحمة أو جزء منها تالف. تحويل الدوائر بيحجز خط للمستخدم.',
            en: 'Packet switching splits data into packets and works even if the network is busy or partly down. Circuit switching reserves a line for the user.',
          },
          success: { ar: 'صح! حزم = قطع صغيرة. +10 نقط', en: 'Correct! Packets = small pieces. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الكلمة المفتاحية: "حزم".', en: 'The key word: "packets".' },
        { ar: 'الإنترنت بيستخدم الطريقة دي.', en: 'The internet uses this method.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 8-1!', en: 'You finished lesson 8-1!' } },
        {
          type: 'recap',
          items: [
            { code: 'LAN', text: { ar: 'محلية', en: 'local' } },
            { code: 'WAN', text: { ar: 'واسعة', en: 'wide' } },
            { code: 'ISP', text: { ar: 'مزوّد الإنترنت', en: 'internet provider' } },
            { code: 'S ↔ C', text: { ar: 'خادم وعميل', en: 'server and client' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة الفرز: صنّف الشبكات.', en: 'Well done! The sorting game: sort the networks.' },
        { ar: 'وجولة تانية: تحويل دوائر ولا حزم.', en: 'A second round: circuit or packet switching.' },
      ],
    },
  ],

  game: {
    kind: 'sort',
    rounds: [
      {
        title: { ar: 'LAN ولا WAN ولا إنترنت؟', en: 'LAN, WAN or the internet?' },
        source: { ar: 'النقاط الرئيسية (أ-3، 4)، ص 108', en: 'Key Points (a-3, 4), p. 108' },
        bins: [
          { id: 'lan', label: { ar: 'LAN', en: 'LAN' } },
          { id: 'wan', label: { ar: 'WAN', en: 'WAN' } },
          { id: 'internet', label: { ar: 'الإنترنت', en: 'The internet' } },
        ],
        items: [
          { text: { ar: 'شبكة البيت', en: 'A home network' }, bin: 'lan' },
          { text: { ar: 'شبكة المدرسة', en: 'A school network' }, bin: 'lan' },
          { text: { ar: 'واي فاي المكتب', en: 'Office Wi-Fi' }, bin: 'lan' },
          { text: { ar: 'بتربط شبكات في منطقة جغرافية واسعة', en: 'Links networks across a wide area' }, bin: 'wan' },
          { text: { ar: 'شبكة بتوصل فروع بنك في مدن مختلفة', en: 'A network linking a bank’s branches in different cities' }, bin: 'wan' },
          { text: { ar: 'شبكة بتربط LAN و WAN على نطاق عالمي', en: 'A network linking LANs and WANs worldwide' }, bin: 'internet' },
        ],
      },
      {
        title: { ar: 'تحويل دوائر ولا تحويل حزم؟', en: 'Circuit or packet switching?' },
        source: { ar: 'النقاط الرئيسية (ت)، ص 109', en: 'Key Points (c), p. 109' },
        bins: [
          { id: 'circuit', label: { ar: 'تحويل الدوائر', en: 'Circuit switching' } },
          { id: 'packet', label: { ar: 'تحويل الحزم', en: 'Packet switching' } },
        ],
        items: [
          { text: { ar: 'بنبني مسار اتصال قبل ما نبعت', en: 'We build a path before sending' }, bin: 'circuit' },
          { text: { ar: 'اتصال مستقر بعد بناء المسار', en: 'A stable connection once the path is built' }, bin: 'circuit' },
          { text: { ar: 'الخط محجوز حتى لو مفيش بيانات', en: 'The line is held even with no data' }, bin: 'circuit' },
          { text: { ar: 'بنقسّم البيانات لحزم صغيرة', en: 'We split data into small packets' }, bin: 'packet' },
          { text: { ar: 'بيشتغل حتى لو جزء من الشبكة تالف', en: 'Works even if part of the network is down' }, bin: 'packet' },
          { text: { ar: 'حزمة ممكن تتأخر أو تضيع', en: 'A packet may be delayed or lost' }, bin: 'packet' },
        ],
      },
    ],
  },
};
