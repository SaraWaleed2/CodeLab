import { Lesson } from '@core/models';

/**
 * Lesson 5-2 "الاتصال وأشكاله" — ministry book pp. 56–57.
 * Book notes:
 * - p.56 lists the telephone as an example of both one-to-one and indirect and synchronous communication.
 * - The test questions on pp.56–57 have an unclear answer key, so the site uses the Key Points' definitions and examples.
 */
export const LESSON_5_2: Lesson = {
  unitId: 5,
  id: '5-2',
  title: { ar: 'الاتصال وأشكاله', en: 'Communication and Its Forms' },
  bookPages: '56 – 57',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! الدرس ده عن طرق الاتصال: مين بيكلم مين، وإزاي، وإمتى.', en: 'Hi! This lesson is about kinds of communication: who talks to whom, how and when.' },
        { ar: 'في الآخر لعبة فرز: حط كل مثال في مكانه.', en: 'At the end there is a sorting game: put each example in its place.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1)، ص 56', en: 'Key Points (a-1), p. 56' },
      blocks: [
        { type: 'heading', text: { ar: 'الاتصال', en: 'Communication' }, code: '(Communication)' },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الاتصال', en: 'Communication' }, en: 'Communication', text: { ar: 'عملية استقبال وتبادل المعلومات بين الناس.', en: 'The process of receiving and exchanging information between people.' }, example: { ar: 'إنت وصاحبك بتتكلموا: ده اتصال', en: 'You and a friend talking: that is communication' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: اتصال = تبادل معلومات', en: 'Remember: communication = exchanging information' } },
      ],
      bito: [
        { ar: 'الاتصال مش بس تليفون. أي مرة تبعت أو تستقبل معلومة فهو اتصال.', en: 'Communication is not just phones. Any time you send or receive information, it is communication.' },
        { ar: 'وإحنا هنقسّمه 3 تقسيمات.', en: 'And we will split it three ways.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-2-1)، ص 56', en: 'Key Points (a-2-1), p. 56' },
      blocks: [
        { type: 'heading', text: { ar: 'التقسيم الأول: كام مُرسل وكام مستلم؟', en: 'First split: how many senders and receivers?' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'واحد إلى واحد', en: 'One-to-one' }, en: 'One-to-one (Individual type)', text: { ar: 'مرسل واحد إلى مستلم واحد.', en: 'One sender to one receiver.' }, example: { ar: 'رسالة لصاحبك، مكالمة هاتف', en: 'A message to a friend, a phone call' } },
            { title: { ar: 'واحد إلى العديد', en: 'One-to-many' }, en: 'One-to-many (Mass media type)', text: { ar: 'مرسل واحد إلى مستلمين كتير.', en: 'One sender to many receivers.' }, example: { ar: 'الصحف، الراديو، التلفزيون، صفحات الويب', en: 'Newspapers, radio, TV, web pages' } },
            { title: { ar: 'متعدد إلى واحد', en: 'Many-to-one' }, en: 'Many-to-one (Reverse mass media type)', text: { ar: 'مرسلين كتير إلى مستلم واحد.', en: 'Many senders to one receiver.' }, example: { ar: 'جدولة الاستبيانات، الاستفسارات', en: 'Polling surveys, enquiries' } },
            { title: { ar: 'متعدد إلى متعدد', en: 'Many-to-many' }, en: 'Many-to-many (Conference type)', text: { ar: 'مرسلين كتير إلى مستلمين كتير.', en: 'Many senders to many receivers.' }, example: { ar: 'مؤتمرات الفيديو، المكالمات الجماعية، وسائل التواصل الاجتماعي', en: 'Video conferences, group calls, social media' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: 1:1 · 1:كتير · كتير:1 · كتير:كتير', en: 'Remember: 1:1 · 1:many · many:1 · many:many' } },
      ],
      bito: [
        { ar: 'نشرة الأخبار واحد بيتكلم وملايين بيسمعوا: واحد إلى العديد.', en: 'A news broadcast has one speaker and millions listening: one-to-many.' },
        { ar: 'وجروب الواتساب كلكم بتكلموا بعض: متعدد إلى متعدد.', en: 'And a group chat where everyone talks to everyone: many-to-many.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-2-2)، ص 56', en: 'Key Points (a-2-2), p. 56' },
      blocks: [
        { type: 'heading', text: { ar: 'التقسيم التاني: المكان بين المُرسل والمستلم', en: 'Second split: where the sender and receiver are' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الاتصال المباشر', en: 'Direct communication' }, en: 'Direct communication', text: { ar: 'المرسل والمستلم وجهًا لوجه. تقدر تشوف ردود فعل الشخص التاني، بس فيه قيود على الوقت والمكان.', en: 'Sender and receiver are face to face. You can see the other person’s reaction, but time and place are limited.' }, example: { ar: 'المحادثات، العروض التقديمية', en: 'Conversations, presentations' } },
            { title: { ar: 'الاتصال غير المباشر', en: 'Indirect communication' }, en: 'Indirect communication', text: { ar: 'المرسل والمستلم منفصلين. مش بتشوف رد فعل التاني مباشرة، بس مفيش قيود وقت ومكان.', en: 'Sender and receiver are apart. You cannot see the other’s reaction right away, but there are no time or place limits.' }, example: { ar: 'الهواتف، البريد الإلكتروني، صفحات الويب', en: 'Phones, email, web pages' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: مباشر = وجهًا لوجه · غير مباشر = من بعيد', en: 'Remember: direct = face to face · indirect = from afar' } },
      ],
      bito: [
        { ar: 'وإنت بتتكلم مع صاحبك قدامك: مباشر. وإنت بتبعتله إيميل: غير مباشر.', en: 'Talking to your friend in front of you: direct. Sending them an email: indirect.' },
        { ar: 'الميزة: غير المباشر مبيحتاجش تكونوا في نفس المكان.', en: 'The plus: indirect does not need you to be in the same place.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-2-3)، ص 56', en: 'Key Points (a-2-3), p. 56' },
      blocks: [
        { type: 'heading', text: { ar: 'التقسيم التالت: التوقيت', en: 'Third split: timing' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'متزامن', en: 'Synchronous' }, en: 'Synchronous', text: { ar: 'المرسل والمستلم بيشاركوا المعلومات في نفس الوقت تقريبًا.', en: 'Sender and receiver share information at about the same time.' }, example: { ar: 'الهواتف، المحادثات، مكالمات الفيديو، البث التلفزيوني المباشر', en: 'Phones, conversations, video calls, live TV' } },
            { title: { ar: 'غير متزامن', en: 'Asynchronous' }, en: 'Asynchronous', text: { ar: 'المعلومات بتتبعت وبتتستقبل في أوقات مناسبة لكل واحد منهم.', en: 'Information is sent and received at times that suit each person.' }, example: { ar: 'البريد الإلكتروني، لوحات الإعلانات، تطبيقات التواصل الاجتماعي', en: 'Email, notice boards, social-media apps' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: متزامن = دلوقتي مع بعض · غير متزامن = كل واحد في وقته', en: 'Remember: synchronous = now, together · asynchronous = each in their own time' } },
      ],
      bito: [
        { ar: 'مكالمة الفيديو لازم الاتنين يكونوا موجودين دلوقتي. الإيميل تقرأه بعد ساعة عادي.', en: 'A video call needs both people there now. An email you can read an hour later.' },
        { ar: 'عشان كده مكالمة الفيديو متزامنة، والإيميل مش متزامن.', en: 'That is why a video call is synchronous and email is not.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك، ص 56', en: 'Test Your Knowledge, p. 56' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه اسم نوع الاتصال اللي فيه مرسل واحد وبيوصل لمستلمين كتير زي التلفزيون والراديو؟', en: 'What is the kind of communication with one sender reaching many receivers, like TV and radio, called?' },
          options: [
            { ar: 'واحد إلى واحد (فردي)', en: 'One-to-one (individual)' },
            { ar: 'واحد إلى العديد (وسائل الاتصال الجماهيرية)', en: 'One-to-many (mass media)' },
            { ar: 'متعدد إلى واحد (العكسية)', en: 'Many-to-one (reverse mass media)' },
            { ar: 'متعدد إلى متعدد (مؤتمر)', en: 'Many-to-many (conference)' },
          ],
          answer: 1,
          explanation: {
            ar: 'مرسل واحد لمستلمين كتير = واحد إلى العديد (وسائل الاتصال الجماهيرية)، زي الصحف والراديو والتلفزيون.',
            en: 'One sender to many receivers = one-to-many (mass media), like newspapers, radio and TV.',
          },
          success: { ar: 'صح! واحد ← كتير. +10 نقط', en: 'Correct! One → many. +10 pts' },
        },
      ],
      bito: [
        { ar: 'عدّ المرسلين: واحد. وعدّ المستلمين: كتير.', en: 'Count the senders: one. Count the receivers: many.' },
        { ar: 'الاسم الرسمي في الكتاب: وسائل الاتصال الجماهيرية.', en: 'The book’s name: mass media.' },
      ],
    },
    {
      source: { ar: 'جرب بنفسك، ص 57', en: 'Try It Yourself, p. 57' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'البريد الإلكتروني اتصال من أنهي نوع (غير مباشر ولا مباشر، متزامن ولا لا)؟', en: 'What kind of communication is email (indirect or direct, synchronous or not)?' },
          options: [
            { ar: 'مباشر ومتزامن', en: 'Direct and synchronous' },
            { ar: 'غير مباشر ومتزامن', en: 'Indirect and synchronous' },
            { ar: 'غير مباشر وغير متزامن', en: 'Indirect and asynchronous' },
          ],
          answer: 2,
          explanation: {
            ar: 'البريد الإلكتروني غير مباشر (المرسل والمستلم منفصلين) وغير متزامن (كل واحد يقرأ ويرد في وقته).',
            en: 'Email is indirect (sender and receiver are apart) and asynchronous (each reads and replies in their own time).',
          },
          success: { ar: 'صح! إيميل = غير مباشر وغير متزامن. +10 نقط', en: 'Correct! Email = indirect and asynchronous. +10 pts' },
        },
      ],
      bito: [
        { ar: 'هل الاتنين موجودين في نفس اللحظة؟ ولا بيقرأ بعدين؟', en: 'Are both there at the same moment, or does the receiver read later?' },
        { ar: 'والمرسل بعيد عن المستلم، يبقى مش مباشر.', en: 'And the sender is away from the receiver, so it is not direct.' },
      ],
    },
    {
      source: { ar: 'جرب بنفسك، ص 57', en: 'Try It Yourself, p. 57' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'أنهي مثال من دول اتصال متعدد إلى متعدد؟', en: 'Which of these is an example of many-to-many communication?' },
          options: [
            { ar: 'رسالة لصاحبك', en: 'A message to a friend' },
            { ar: 'مؤتمر فيديو بين أشخاص كتير', en: 'A video conference among many people' },
            { ar: 'جريدة', en: 'A newspaper' },
            { ar: 'جدولة استبيان', en: 'A polling survey' },
          ],
          answer: 1,
          explanation: {
            ar: 'مؤتمرات الفيديو والمكالمات الجماعية ووسائل التواصل الاجتماعي مرسلين كتير ومستلمين كتير. الرسالة واحد لواحد، والجريدة واحد لكتير، والاستبيان كتير لواحد.',
            en: 'Video conferences, group calls and social media have many senders and many receivers. A message is one-to-one, a newspaper is one-to-many, and a survey is many-to-one.',
          },
          success: { ar: 'صح! مؤتمر = الكل بيكلم الكل. +10 نقط', en: 'Correct! A conference = everyone talks to everyone. +10 pts' },
        },
      ],
      bito: [
        { ar: 'دوّر على اللي كل الناس فيه بتبعت وتستقبل.', en: 'Look for the one where everyone sends and receives.' },
        { ar: 'الجروب مثال تاني.', en: 'A group chat is another example.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 5-2!', en: 'You finished lesson 5-2!' } },
        {
          type: 'recap',
          items: [
            { code: '4', text: { ar: 'حسب العدد', en: 'by number' } },
            { code: '2', text: { ar: 'مباشر وغير مباشر', en: 'direct and indirect' } },
            { code: '2', text: { ar: 'متزامن وغير متزامن', en: 'synchronous and asynchronous' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة الفرز: حط كل مثال في صندوقه.', en: 'Well done! The sorting game: put each example in its box.' },
        { ar: 'ركّز: مين بيكلم مين، ووقته إمتى.', en: 'Focus: who talks to whom, and when.' },
      ],
    },
  ],

  game: {
    kind: 'sort',
    rounds: [
      {
        title: { ar: 'كام مُرسل وكام مستلم؟', en: 'How many senders and receivers?' },
        source: { ar: 'النقاط الرئيسية (أ-2-1)، ص 56', en: 'Key Points (a-2-1), p. 56' },
        bins: [
          { id: 'one', label: { ar: 'واحد إلى واحد', en: 'One-to-one' } },
          { id: 'many', label: { ar: 'واحد إلى العديد', en: 'One-to-many' } },
          { id: 'rev', label: { ar: 'متعدد إلى واحد', en: 'Many-to-one' } },
          { id: 'conf', label: { ar: 'متعدد إلى متعدد', en: 'Many-to-many' } },
        ],
        items: [
          { text: { ar: 'رسالة لصاحبك', en: 'A message to a friend' }, bin: 'one' },
          { text: { ar: 'مكالمة هاتفية', en: 'A phone call' }, bin: 'one' },
          { text: { ar: 'الصحف', en: 'Newspapers' }, bin: 'many' },
          { text: { ar: 'الراديو', en: 'Radio' }, bin: 'many' },
          { text: { ar: 'التلفزيون', en: 'Television' }, bin: 'many' },
          { text: { ar: 'جدولة الاستبيانات', en: 'Polling surveys' }, bin: 'rev' },
          { text: { ar: 'الاستفسارات', en: 'Enquiries' }, bin: 'rev' },
          { text: { ar: 'مؤتمرات الفيديو', en: 'Video conferences' }, bin: 'conf' },
          { text: { ar: 'وسائل التواصل الاجتماعي', en: 'Social media' }, bin: 'conf' },
        ],
      },
      {
        title: { ar: 'مباشر ولا غير مباشر؟', en: 'Direct or indirect?' },
        source: { ar: 'النقاط الرئيسية (أ-2-2)، ص 56', en: 'Key Points (a-2-2), p. 56' },
        bins: [
          { id: 'direct', label: { ar: 'مباشر (وجهًا لوجه)', en: 'Direct (face to face)' } },
          { id: 'indirect', label: { ar: 'غير مباشر', en: 'Indirect' } },
        ],
        items: [
          { text: { ar: 'المحادثات', en: 'Conversations' }, bin: 'direct' },
          { text: { ar: 'العروض التقديمية', en: 'Presentations' }, bin: 'direct' },
          { text: { ar: 'الهواتف', en: 'Phones' }, bin: 'indirect' },
          { text: { ar: 'البريد الإلكتروني', en: 'Email' }, bin: 'indirect' },
          { text: { ar: 'صفحات الويب', en: 'Web pages' }, bin: 'indirect' },
        ],
      },
      {
        title: { ar: 'متزامن ولا غير متزامن؟', en: 'Synchronous or asynchronous?' },
        source: { ar: 'النقاط الرئيسية (أ-2-3)، ص 56', en: 'Key Points (a-2-3), p. 56' },
        bins: [
          { id: 'sync', label: { ar: 'متزامن (في نفس الوقت)', en: 'Synchronous (same time)' } },
          { id: 'async', label: { ar: 'غير متزامن', en: 'Asynchronous' } },
        ],
        items: [
          { text: { ar: 'الهواتف', en: 'Phones' }, bin: 'sync' },
          { text: { ar: 'المحادثات', en: 'Conversations' }, bin: 'sync' },
          { text: { ar: 'مكالمات الفيديو', en: 'Video calls' }, bin: 'sync' },
          { text: { ar: 'البث التلفزيوني المباشر', en: 'Live TV' }, bin: 'sync' },
          { text: { ar: 'البريد الإلكتروني', en: 'Email' }, bin: 'async' },
          { text: { ar: 'لوحات الإعلانات', en: 'Notice boards' }, bin: 'async' },
          { text: { ar: 'تطبيقات التواصل الاجتماعي', en: 'Social-media apps' }, bin: 'async' },
        ],
      },
    ],
  },
};
