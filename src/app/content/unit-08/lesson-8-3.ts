import { Lesson } from '@core/models';

/**
 * Lesson 8-3 "بروتوكولات الاتصال" — ministry book pp. 114–117.
 * Book notes:
 * - p.114: a packet = a small piece of data with a header; TCP, UDP and IP; the four TCP/IP layers.
 * - p.115 key: only the IP statement is true; TCP does not "give priority to real-time"; UDP is the real-time one;
 *   the order of steps is: split data into packets → give sender/receiver IP → choose the route → keep packet order.
 * - The exercises on pp.116–117 have no answer key; only the Key Points are used.
 */
export const LESSON_8_3: Lesson = {
  unitId: 8,
  id: '8-3',
  title: { ar: 'بروتوكولات الاتصال', en: 'Communication Protocols' },
  bookPages: '114 – 117',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! الأجهزة محتاجة تتفق على "لغة" عشان تفهم بعض. دي البروتوكولات.', en: 'Hi! Devices need to agree on a "language" to understand each other. Those are protocols.' },
        { ar: 'في الآخر لعبة ترتيب: رتّب رحلة الحزمة والطبقات.', en: 'At the end there is an ordering game: put the packet’s journey and the layers in order.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1، 2)، ص 114', en: 'Key Points (a-1, 2), p. 114' },
      blocks: [
        { type: 'heading', text: { ar: 'الحزمة والبروتوكول', en: 'The packet and the protocol' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الحزمة (Packet)', en: 'Packet' }, en: 'Packet', text: { ar: 'وحدة بتقسّم البيانات لأجزاء صغيرة عند النقل. بتتبعت ومعاها معلومات الترويسة (header).', en: 'A unit that splits data into small parts for sending. It travels with header information.' }, example: { ar: 'زي طرد في البريد وعليه ورقة عنوان', en: 'Like a parcel with an address label' } },
            { title: { ar: 'بروتوكول الاتصال', en: 'Communication protocol' }, en: 'Communication protocol', text: { ar: 'اتفاقية مشتركة في شبكات المعلومات والاتصالات.', en: 'A shared agreement in information and communication networks.' }, example: { ar: 'زي قواعد المرور: الكل متفق عليها', en: 'Like traffic rules: everyone follows them' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: حزمة = قطعة صغيرة بعنوان · بروتوكول = اتفاق', en: 'Remember: packet = a small piece with a label · protocol = an agreement' } },
      ],
      bito: [
        { ar: 'من غير اتفاق، الجهاز المرسل والمستقبل مش هيفهموا بعض.', en: 'Without an agreement the sender and receiver would not understand each other.' },
        { ar: 'والترويسة هي ورقة العنوان على الطرد.', en: 'And the header is the address label on the parcel.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-2-1 إلى 3)، ص 114', en: 'Key Points (a-2-1 to 3), p. 114' },
      blocks: [
        { type: 'heading', text: { ar: 'TCP و UDP و IP', en: 'TCP, UDP and IP' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'TCP', en: 'TCP' }, en: 'TCP', text: { ar: 'بروتوكول بيقسّم البيانات لحزم، ويرتّبها عند المستقبل، ويطلب إعادة إرسال أي حزمة ضاعت.', en: 'A protocol that splits data into packets, puts them in order at the receiver, and asks for any lost packet to be resent.' }, example: { ar: 'تحميل ملف: لازم يوصل كامل', en: 'Downloading a file: it must arrive whole' } },
            { title: { ar: 'UDP', en: 'UDP' }, en: 'UDP', text: { ar: 'بروتوكول بيؤكد الإرسال في الوقت الفعلي، من غير ما يتأكد من وصول كل حزمة.', en: 'A protocol that sends in real time without making sure every packet arrives.' }, example: { ar: 'بث فيديو مباشر: أهم حاجة السرعة', en: 'A live video: speed matters most' } },
            { title: { ar: 'IP', en: 'IP' }, en: 'IP', text: { ar: 'بروتوكول بيحدد عنوان IP اللي بيتسلّم للحزمة، علشان توصل للوجهة الصحيحة.', en: 'A protocol that sets the IP address given to a packet so it reaches the right destination.' }, example: { ar: 'عنوان الطرد', en: 'The parcel’s address' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: TCP = أمان وترتيب · UDP = سرعة · IP = عنوان', en: 'Remember: TCP = safety and order · UDP = speed · IP = address' } },
      ],
      bito: [
        { ar: 'لو حزمة فيديو ضاعت في بث مباشر، مفيش وقت نستناها، فبنستخدم UDP.', en: 'If a live-video packet is lost there is no time to wait for it, so we use UDP.' },
        { ar: 'لكن لو حزمة من ملف ضاعت، لازم TCP يجيبها تاني.', en: 'But if a packet of a file is lost, TCP must fetch it again.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-1)، ص 114', en: 'Key Points (b-1), p. 114' },
      blocks: [
        { type: 'heading', text: { ar: 'نموذج TCP/IP: 4 طبقات', en: 'The TCP/IP model: 4 layers' } },
        {
          type: 'lead',
          text: { ar: 'TCP/IP مجموعة بروتوكولات بتتحكم في إرسال واستقبال البيانات عبر الإنترنت. وبتتقسم لأربع طبقات، من الأعلى للأدنى:', en: 'TCP/IP is a set of protocols that control sending and receiving data across the internet. It splits into four layers, from top to bottom:' },
        },
        {
          type: 'steps',
          items: [
            { title: { ar: 'الطبقة الرابعة: التطبيقات', en: 'Layer 4: Application' }, en: 'Application layer', text: { ar: 'الاتصال بين التطبيقات.', en: 'Communication between applications.' }, example: { ar: 'HTTP و SMTP', en: 'HTTP and SMTP' } },
            { title: { ar: 'الطبقة الثالثة: النقل', en: 'Layer 3: Transport' }, en: 'Transport layer', text: { ar: 'التحكم في الاتصال، كشف الأخطاء وإعادة الإرسال.', en: 'Controls the connection, detects errors and resends.' }, example: { ar: 'TCP و UDP', en: 'TCP and UDP' } },
            { title: { ar: 'الطبقة الثانية: الإنترنت', en: 'Layer 2: Internet' }, en: 'Internet layer', text: { ar: 'تخصيص عنوان IP وتحديد مسار الإرسال.', en: 'Gives the IP address and sets the route.' }, example: { ar: 'IP', en: 'IP' } },
            { title: { ar: 'الطبقة الأولى: واجهة الشبكة', en: 'Layer 1: Network interface' }, en: 'Network interface layer', text: { ar: 'الاتصال المادي بين الأجهزة.', en: 'The physical link between devices.' }, example: { ar: 'Ethernet', en: 'Ethernet' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: تطبيق ← نقل ← إنترنت ← واجهة الشبكة', en: 'Remember: application → transport → internet → network interface' } },
      ],
      bito: [
        { ar: 'تخيّل خطاب: الكلام (تطبيق)، الظرف والتأكيد (نقل)، العنوان (إنترنت)، وساعي البريد (واجهة).', en: 'Picture a letter: the message (application), the envelope and tracking (transport), the address (internet), and the postman (interface).' },
        { ar: 'كل طبقة بتعمل شغلتها وتسلّم اللي بعدها.', en: 'Each layer does its job and hands over to the next.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-2)، ص 114', en: 'Key Points (b-2), p. 114' },
      blocks: [
        { type: 'heading', text: { ar: 'رحلة البيانات على الإنترنت', en: 'The journey of data on the internet' } },
        {
          type: 'sequence',
          groups: [
            {
              who: { ar: 'عند المرسل', en: 'At the sender' },
              steps: [
                { text: { ar: 'تتقسّم البيانات لحزم (packets).', en: 'The data is split into packets.' } },
                { text: { ar: 'يتحط في ترويسة كل حزمة عنوان IP للمرسل والمستقبل.', en: 'Each packet’s header gets the sender’s and receiver’s IP addresses.' } },
              ],
            },
            {
              who: { ar: 'في الطريق وعند المستقبل', en: 'On the way and at the receiver' },
              steps: [
                { text: { ar: 'كل حزمة بتتوجّه (routing) لوجهتها بأفضل مسار.', en: 'Each packet is routed to its destination along the best path.' } },
                { text: { ar: 'لو حزمة ضاعت، بيتطلب إعادة إرسالها، وبعدين بتترتب الحزم بالترتيب الصح.', en: 'If a packet is missing, a resend is requested, then the packets are put in the right order.' } },
              ],
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: قسّم · عنوّن · وجّه · رتّب', en: 'Remember: split · address · route · reorder' } },
      ],
      bito: [
        { ar: 'اضغط "الخطوة اللي بعدها" وراقب الحزمة وهي ماشية.', en: 'Press "next step" and watch the packet travel.' },
        { ar: 'الحزم ممكن تعدّي من طرق مختلفة وتتجمع عند المستقبل.', en: 'Packets may take different routes and gather at the receiver.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 115', en: 'Test Your Knowledge (1), p. 115' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: IP هو بروتوكول بيُستخدم لتعيين عنوان IP للحزمة عشان توصل للوجهة الصحيحة.', en: 'True or false: IP is a protocol used to give a packet an IP address so it reaches the right destination.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. IP بيحدد عنوان الحزمة. أما TCP فبيهتم بالترتيب وإعادة الإرسال، وUDP للوقت الفعلي.',
            en: '✓. IP sets the packet’s address. TCP handles order and resending, and UDP is for real time.',
          },
          success: { ar: 'صح! IP = العنوان. +10 نقط', en: 'Correct! IP = the address. +10 pts' },
        },
      ],
      bito: [
        { ar: 'IP هو الـ "I" في Internet: العنوان.', en: 'IP is the "I" of Internet: the address.' },
        { ar: 'الترتيب بتاع الحزم شغل TCP.', en: 'Putting packets in order is TCP’s job.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 115', en: 'Test Your Knowledge (1), p. 115' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: UDP هو البروتوكول اللي بيضمن إن كل البيانات توصل سليمة وبالترتيب.', en: 'True or false: UDP is the protocol that guarantees all the data arrives safe and in order.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 1,
          explanation: {
            ar: '✕. اللي بيضمن الوصول والترتيب هو TCP. UDP بيدّي أولوية للإرسال في الوقت الفعلي من غير ما يضمن إن كل حاجة توصل.',
            en: '✕. TCP is the one that guarantees arrival and order. UDP gives priority to real-time sending without guaranteeing everything arrives.',
          },
          success: { ar: 'صح! الضمان شغل TCP. +10 نقط', en: 'Correct! Guaranteeing is TCP’s job. +10 pts' },
        },
      ],
      bito: [
        { ar: 'UDP = سرعة من غير ضمان.', en: 'UDP = speed without a guarantee.' },
        { ar: 'TCP = ضمان وترتيب.', en: 'TCP = guarantee and order.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2)، ص 115', en: 'Test Your Knowledge (2), p. 115' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه أول خطوة في رحلة البيانات على الإنترنت؟', en: 'What is the first step in the journey of data on the internet?' },
          options: [
            { ar: 'تقسيم البيانات إلى حزم', en: 'Splitting the data into packets' },
            { ar: 'تعيين عنوان IP للمرسل أو المستقبل', en: 'Giving the sender or receiver an IP address' },
            { ar: 'تحديد مسار الإرسال للحزمة', en: 'Choosing the packet’s route' },
            { ar: 'ترتيب الحزم في التسلسل', en: 'Putting the packets in order' },
          ],
          answer: 0,
          explanation: {
            ar: 'الترتيب: نقسّم البيانات لحزم، بعدها نضيف عنوان IP، بعدها نحدد المسار، وأخيرًا نرتّب الحزم عند المستقبل.',
            en: 'The order: split into packets, then add the IP address, then choose the route, and finally order the packets at the receiver.',
          },
          success: { ar: 'صح! الأول نقسّم لحزم. +10 نقط', en: 'Correct! First we split into packets. +10 pts' },
        },
      ],
      bito: [
        { ar: 'قبل أي حاجة، الملف الكبير لازم يتقطّع.', en: 'Before anything else, the big file must be cut up.' },
        { ar: 'بعدين نكتب العنوان على كل قطعة.', en: 'Then we write the address on each piece.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-1)، ص 114', en: 'Key Points (b-1), p. 114' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'أنهي طبقة في TCP/IP مسؤولة عن كشف الأخطاء وإعادة الإرسال (TCP و UDP)؟', en: 'Which TCP/IP layer handles detecting errors and resending (TCP and UDP)?' },
          options: [
            { ar: 'طبقة التطبيقات', en: 'Application layer' },
            { ar: 'طبقة النقل', en: 'Transport layer' },
            { ar: 'طبقة الإنترنت', en: 'Internet layer' },
            { ar: 'طبقة واجهة الشبكة', en: 'Network interface layer' },
          ],
          answer: 1,
          explanation: {
            ar: 'طبقة النقل (TCP و UDP) بتتحكم في الاتصال وكشف الأخطاء وإعادة الإرسال.',
            en: 'The transport layer (TCP and UDP) controls the connection, error detection and resending.',
          },
          success: { ar: 'صح! النقل = TCP و UDP. +10 نقط', en: 'Correct! Transport = TCP and UDP. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الأمثلة في الجدول: TCP و UDP.', en: 'The examples in the table: TCP and UDP.' },
        { ar: 'الاتنين بينقلوا البيانات.', en: 'Both carry the data.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 8-3!', en: 'You finished lesson 8-3!' } },
        {
          type: 'recap',
          items: [
            { code: 'TCP', text: { ar: 'ضمان وترتيب', en: 'guarantee and order' } },
            { code: 'UDP', text: { ar: 'وقت فعلي', en: 'real time' } },
            { code: 'IP', text: { ar: 'عنوان', en: 'address' } },
            { code: '4', text: { ar: 'طبقات', en: 'layers' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة الترتيب: رحلة الحزمة، وبعدها الطبقات.', en: 'Well done! The ordering game: the packet’s journey, then the layers.' },
        { ar: 'ابدأ من أول خطوة.', en: 'Start from the first step.' },
      ],
    },
  ],

  game: {
    kind: 'order',
    rounds: [
      {
        title: { ar: 'رحلة البيانات', en: 'The journey of data' },
        source: { ar: 'النقاط الرئيسية (ب-2)، ص 114', en: 'Key Points (b-2), p. 114' },
        steps: [
          { ar: 'نقسّم البيانات لحزم', en: 'Split the data into packets' },
          { ar: 'نكتب عنوان IP للمرسل والمستقبل في الترويسة', en: 'Write the sender’s and receiver’s IP in the header' },
          { ar: 'نوجّه كل حزمة لوجهتها', en: 'Route each packet to its destination' },
          { ar: 'نرتّب الحزم عند المستقبل', en: 'Put the packets in order at the receiver' },
        ],
      },
      {
        title: { ar: 'طبقات TCP/IP من الأعلى للأدنى', en: 'The TCP/IP layers from top to bottom' },
        source: { ar: 'جدول الطبقات، ص 114', en: 'The layers table, p. 114' },
        steps: [
          { ar: 'طبقة التطبيقات (HTTP, SMTP)', en: 'Application layer (HTTP, SMTP)' },
          { ar: 'طبقة النقل (TCP, UDP)', en: 'Transport layer (TCP, UDP)' },
          { ar: 'طبقة الإنترنت (IP)', en: 'Internet layer (IP)' },
          { ar: 'طبقة واجهة الشبكة (Ethernet)', en: 'Network interface layer (Ethernet)' },
        ],
      },
    ],
  },
};
