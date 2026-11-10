import { Lesson } from '@core/models';

/**
 * Lesson 5-3 "الإنترنت والاتصالات" — ministry book pp. 58–60.
 * Book notes:
 * - p.59 answer key: bulletin board → (ت), social media → (ب), video-sharing platform → (ث);
 *   Q2 statements: (أ) false, (ب) true, (ت) true.
 * - The exercises on p.60 have no answer key; only the Key Points are used where they settle the answer.
 */
export const LESSON_5_3: Lesson = {
  unitId: 5,
  id: '5-3',
  title: { ar: 'الإنترنت والاتصالات', en: 'The Internet and Communication' },
  bookPages: '58 – 60',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! الدرس ده عن أدوات التواصل على الإنترنت اللي بتستخدمها كل يوم.', en: 'Hi! This lesson is about the online communication tools you use every day.' },
        { ar: 'في الآخر لعبة توصيل: وصّل كل أداة بوصفها.', en: 'At the end there is a matching game: link each tool to its description.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1)، ص 58', en: 'Key Points (a-1), p. 58' },
      blocks: [
        { type: 'heading', text: { ar: 'البريد الإلكتروني', en: 'Email' }, code: '(Email)' },
        {
          type: 'lead',
          text: { ar: 'أداة بتبعت وتستقبل الرسائل بالنص على الإنترنت. وفيه ميزة: تبعت نفس الرسالة لناس كتير مرة واحدة (قدرة البث).', en: 'A tool for sending and receiving text messages on the internet. A bonus: you can send one message to many people at once (broadcast capability).' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'إلى (To)', en: 'To' }, en: 'To', text: { ar: 'عنوان المستلم اللي بتبعتله الرسالة.', en: 'The address of the person you are sending the message to.' }, example: { ar: 'المدرس اللي بتبعتله الواجب', en: 'The teacher you send homework to' } },
            { title: { ar: 'نسخة (CC)', en: 'Carbon copy (CC)' }, en: 'CC', text: { ar: 'عنوان مستلم بتبعتله نسخة، وكل المستلمين بيشوفوا إنه أخد نسخة.', en: 'The address of someone you send a copy to; everyone can see they got a copy.' }, example: { ar: 'مدير المدرسة يشوف الرسالة', en: 'The principal gets to see the message' } },
            { title: { ar: 'نسخة مخفية (BCC)', en: 'Blind carbon copy (BCC)' }, en: 'BCC', text: { ar: 'نسخة لمستلم، بس باقي المستلمين مبيعرفوش إنه أخد نسخة.', en: 'A copy to someone, but the other recipients cannot see they got one.' }, example: { ar: 'تبعت دعوة لناس مش عايز يشوفوا بعض', en: 'Sending an invite to people who should not see each other' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: إلى = الأساسي · CC = نسخة ظاهرة · BCC = نسخة مخفية', en: 'Remember: To = main · CC = visible copy · BCC = hidden copy' } },
      ],
      bito: [
        { ar: 'BCC زي ما تبعت لصحابك دعوة من غير ما كل واحد يشوف مين تاني اتدعى.', en: 'BCC is like inviting friends without each one seeing who else was invited.' },
        { ar: 'الحرف B معناه Blind: أعمى، يعني التاني مش شايف.', en: 'The B means Blind: the others cannot see.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-2 إلى 4)، ص 58', en: 'Key Points (a-2 to 4), p. 58' },
      blocks: [
        { type: 'heading', text: { ar: 'أدوات الكلام والرد', en: 'Tools for talking and replying' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'نظام لوحة الإعلانات', en: 'Bulletin board system' }, en: 'Bulletin board system (BBS)', text: { ar: 'أداة بتخلي المستخدم ينشر الرسائل ويكتب ردود على الرسائل التانية.', en: 'A tool that lets a user post messages and write replies to other messages.' }, example: { ar: 'منتدى مواد المدرسة', en: 'A school subject forum' } },
            { title: { ar: 'تطبيق المراسلة', en: 'Messaging app' }, en: 'Messaging app', text: { ar: 'أداة بتبادل النصوص والصور ومقاطع الفيديو، فتبقى أسهل للأفراد أو المجموعات.', en: 'A tool for exchanging text, images and video clips, easy for people or groups.' }, example: { ar: 'SMS، LINE، وواتساب', en: 'SMS, LINE and similar chat apps' } },
            { title: { ar: 'مكالمة الفيديو', en: 'Video call' }, en: 'Video call', text: { ar: 'أداة بتتحادث فيها في نفس اللحظة وإنت شايف الشخص التاني على الإنترنت.', en: 'A tool for talking in real time while seeing the other person online.' }, example: { ar: 'تكلم صاحبك في بلد تانية', en: 'Talking to a friend in another country' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: لوحة = تنشر وترد · مراسلة = نص وصور · فيديو = تشوفه دلوقتي', en: 'Remember: board = post and reply · messaging = text and pictures · video = see them now' } },
      ],
      bito: [
        { ar: 'لوحة الإعلانات زي لوحة في الفصل: حد يكتب وناس تعلّق تحتها.', en: 'A bulletin board is like a class board: one person writes and others comment under it.' },
        { ar: 'ومكالمة الفيديو لازم الاتنين موجودين دلوقتي.', en: 'And a video call needs both of you there right now.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-5 إلى 7)، ص 58', en: 'Key Points (a-5 to 7), p. 58' },
      blocks: [
        { type: 'heading', text: { ar: 'أدوات النشر والمشاركة', en: 'Tools for publishing and sharing' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'المدونة', en: 'Blog' }, en: 'Blog (web + log)', text: { ar: 'خدمة بتجمّع كتاباتك ونشرها على الإنترنت زي يومياتك.', en: 'A service that gathers your writing and publishes it online, like a diary.' }, example: { ar: 'يوميات رحلة سفر', en: 'A travel diary' } },
            { title: { ar: 'وسائل التواصل الاجتماعي', en: 'Social media' }, en: 'Social Media', text: { ar: 'خدمات منصات بيتواصل فيها الأفراد مع بعضهم على الإنترنت.', en: 'Services and platforms where individuals communicate with each other online.' }, example: { ar: 'فيسبوك وإنستجرام', en: 'Facebook and Instagram' } },
            { title: { ar: 'منصة مشاركة الفيديو', en: 'Video-sharing platform' }, en: 'Video sharing platform', text: { ar: 'خدمة بتخلي جمهور واسع يشاهد مقاطع الفيديو اللي بيرفعها مستخدمين مش محددين.', en: 'A service that lets a wide audience watch video clips posted by unspecified users.' }, example: { ar: 'يوتيوب', en: 'YouTube' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: مدونة = يوميات · تواصل = ناس مع ناس · منصة فيديو = جمهور واسع', en: 'Remember: blog = diary · social media = people with people · video platform = wide audience' } },
      ],
      bito: [
        { ar: 'كلمة blog جاية من web + log: يعني سجل على الويب.', en: 'The word blog comes from web + log: a record on the web.' },
        { ar: 'ومنصة الفيديو بتوصّل مقطعك لأي حد في العالم.', en: 'And a video platform can get your clip to anyone in the world.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-1)، ص 58', en: 'Key Points (b-1), p. 58' },
      blocks: [
        { type: 'heading', text: { ar: 'إخفاء الهوية', en: 'Anonymity' }, code: '(Anonymity)' },
        {
          type: 'lead',
          text: { ar: 'المستخدم بيخفي معلومات التعريف الشخصية (زي الاسم والانتماء) على الإنترنت.', en: 'A user hides identifying details (like their name or affiliation) online.' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الميزة', en: 'The plus' }, text: { ar: 'تعبّر عن نفسك بحرية بغض النظر عن وضعك الاجتماعي.', en: 'You can express yourself freely, whatever your social standing.' }, example: { ar: 'تسأل سؤال محرج من غير ما حد يعرف إنك إنت', en: 'Asking an embarrassing question without anyone knowing it is you' } },
            { tone: 'no', title: { ar: 'العيب', en: 'The minus' }, text: { ar: 'ممكن يتساء استخدامه، فتتجمع تعليقات مسيئة على الشخص من غير ما يتعرف مين كتبها.', en: 'It can be misused: hurtful comments pile up on a person without anyone knowing who wrote them.' }, example: { ar: 'تعليق جارح من حساب مجهول', en: 'A hurtful comment from an unknown account' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: إخفاء الهوية = حرية + خطر الإساءة', en: 'Remember: anonymity = freedom + risk of abuse' } },
      ],
      bito: [
        { ar: 'الحرية بتيجي معاها مسؤولية: حتى لو محدش يعرفك، اكتب كأنك قدام الشخص.', en: 'Freedom comes with responsibility: even if nobody knows you, write as if the person is in front of you.' },
        { ar: 'وده يبقى سؤال: هتقولها في وشه؟', en: 'A good test: would you say it to their face?' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-2 إلى 4)، ص 58', en: 'Key Points (b-2 to 4), p. 58' },
      blocks: [
        { type: 'heading', text: { ar: 'صفات التواصل على الإنترنت', en: 'Features of online communication' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'الفورية', en: 'Immediacy' }, en: 'Immediacy', text: { ar: 'المستخدم بيستقبل ردًا فوريًا من الطرف التاني.', en: 'The user gets an instant reply from the other side.' }, example: { ar: 'تبعت رسالة وتتردّ عليها في ثواني', en: 'You send a message and get a reply in seconds' } },
            { title: { ar: 'الملاءمة', en: 'Convenience' }, en: 'Convenience', text: { ar: 'المستخدم بيتواصل بسلاسة.', en: 'The user communicates smoothly.' }, example: { ar: 'في أي وقت ومن أي مكان', en: 'Any time and from anywhere' } },
            { title: { ar: 'القابلية للتسجيل', en: 'Recordability' }, en: 'Recordability', text: { ar: 'الإنترنت بيحتفظ بسجل الرسائل والمعلومات، فالمنشور مبيتمحيش بالكامل.', en: 'The internet keeps a log of messages and information, so what is posted is hard to erase completely.' }, example: { ar: 'ستوري اتمسحت، ولسه حد ممكن يكون صوّرها', en: 'A deleted story that someone may already have captured' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: فورية · ملاءمة · سجل دايم', en: 'Remember: instant · convenient · a lasting record' } },
      ],
      bito: [
        { ar: 'القابلية للتسجيل أهم نقطة: اللي تنشره ممكن يفضل موجود حتى لو مسحته.', en: 'Recordability matters most: what you post can stay even if you delete it.' },
        { ar: 'فكّر مرتين قبل ما تضغط "نشر".', en: 'Think twice before you press "post".' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 59', en: 'Test Your Knowledge (1), p. 59' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه الشرح الأنسب لـ "نظام لوحة الإعلانات"؟', en: 'Which description fits "bulletin board system" best?' },
          options: [
            { ar: 'أداة بتسمح بالمحادثة في الوقت الفعلي أثناء مشاهدة فيديو الشخص التاني', en: 'A tool for real-time talking while watching the other person on video' },
            { ar: 'خدمات منصات بيتواصل فيها الأفراد مع بعضهم', en: 'Services and platforms where individuals communicate' },
            { ar: 'أداة بتسمح للمستخدم بنشر الرسائل وكتابة الردود على الرسائل التانية', en: 'A tool that lets a user post messages and write replies to others' },
            { ar: 'خدمة بتسمح لجمهور واسع بمشاهدة مقاطع فيديو', en: 'A service letting a wide audience watch videos' },
          ],
          answer: 2,
          explanation: {
            ar: 'لوحة الإعلانات أداة لنشر الرسائل والرد عليها. الأولى مكالمة فيديو، والتانية وسائل التواصل، والرابعة منصة مشاركة الفيديو.',
            en: 'A bulletin board is for posting messages and replying. The first is a video call, the second is social media, the fourth is a video-sharing platform.',
          },
          success: { ar: 'صح! لوحة إعلانات = نشر وردود. +10 نقط', en: 'Correct! Bulletin board = posts and replies. +10 pts' },
        },
      ],
      bito: [
        { ar: 'تخيّل لوحة في الفصل: حد يكتب وناس تعلّق.', en: 'Picture a class board: one writes, others comment.' },
        { ar: 'الكلمة المفتاحية: "الردود".', en: 'The key phrase: "replies".' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 59', en: 'Test Your Knowledge (1), p. 59' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'أنهي وصف يناسب "منصة مشاركة الفيديو"؟', en: 'Which description fits "video-sharing platform"?' },
          options: [
            { ar: 'أداة بتسمح بالمحادثة وإنت شايف الشخص التاني', en: 'A tool for talking while seeing the other person' },
            { ar: 'خدمة بتجمّع كتاباتك ونشرها يوميًا', en: 'A service gathering and publishing your writing daily' },
            { ar: 'خدمة بتسمح لجمهور واسع بمشاهدة مقاطع فيديو رفعها مستخدمين مش محددين', en: 'A service letting a wide audience watch clips posted by unspecified users' },
          ],
          answer: 2,
          explanation: {
            ar: 'منصة مشاركة الفيديو بتوصّل المقاطع لجمهور واسع. الأولى مكالمة فيديو، والتانية مدونة.',
            en: 'A video-sharing platform gets clips to a wide audience. The first is a video call, the second is a blog.',
          },
          success: { ar: 'صح! جمهور واسع = منصة فيديو. +10 نقط', en: 'Correct! Wide audience = video platform. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الكلمة المفتاحية: "جمهور واسع".', en: 'The key phrase: "wide audience".' },
        { ar: 'اللي بيحكي يومياته ده مدونة.', en: 'The one telling their days is a blog.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2) أ، ص 59', en: 'Test Your Knowledge (2) a, p. 59' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: بما إن الكلام على الإنترنت ممكن يبقى مجهول، فلا مانع من كتابة أي معلومات إنت عايزها.', en: 'True or false: since online posts can be anonymous, you can write any information you like.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 1,
          explanation: {
            ar: '✕. لازم تراعي وجهة نظر الشخص التاني وتتعاطف معاه. المجهولية ممكن تتساء، والمنشور بيتسجّل ومبيتمحيش بالكامل.',
            en: '✕. You must respect the other person’s point of view and show empathy. Anonymity can be abused, and what is posted is recorded and cannot be fully erased.',
          },
          success: { ar: 'صح! حتى المجهول لازم يراعي غيره. +10 نقط', en: 'Correct! Even an anonymous user must be considerate. +10 pts' },
        },
      ],
      bito: [
        { ar: 'مجهول مش معناه مسموح بكل حاجة.', en: 'Anonymous does not mean anything goes.' },
        { ar: 'افتكر القابلية للتسجيل.', en: 'Remember recordability.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2) ت، ص 59', en: 'Test Your Knowledge (2) c, p. 59' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: بما إن سجل التفاعلات بيتحفظ، فمن المهم تكون مراعي وتتأكد إن رسايلك مش بتجرح المستلم.', en: 'True or false: since a log of interactions is kept, it is important to be considerate and make sure your messages do not upset the receiver.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. الاتصال على الإنترنت بيحتفظ بسجل التفاعلات، فلازم تراعي مشاعر اللي بتكلمه.',
            en: '✓. Online communication keeps a log of interactions, so you should be mindful of the other person’s feelings.',
          },
          success: { ar: 'صح! السجل بيفضل، فراعي الناس. +10 نقط', en: 'Correct! The log stays, so be considerate. +10 pts' },
        },
      ],
      bito: [
        { ar: 'اللي بتكتبه بيتسجّل، فاكتبه بلطف.', en: 'What you write is recorded, so write it kindly.' },
        { ar: 'كأنك بتتكلم مع الشخص وش لوش.', en: 'As if you were speaking face to face.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 5-3 والوحدة 5!', en: 'You finished lesson 5-3 and Unit 5!' } },
        {
          type: 'recap',
          items: [
            { code: 'To / CC / BCC', text: { ar: 'البريد الإلكتروني', en: 'email' } },
            { code: '7', text: { ar: 'أدوات تواصل', en: 'communication tools' } },
            { code: '4', text: { ar: 'صفات للتواصل', en: 'features' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة التوصيل: وصّل كل أداة بوصفها.', en: 'Well done! The matching game: link each tool to its description.' },
        { ar: 'الجولة التانية فيها مواقف من حياتك.', en: 'The second round has situations from your life.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'الأداة ووصفها', en: 'The tool and its description' },
        source: { ar: 'النقاط الرئيسية (أ)، ص 58', en: 'Key Points (a), p. 58' },
        pairs: [
          { left: { text: { ar: 'نظام لوحة الإعلانات', en: 'Bulletin board system' } }, right: { ar: 'نشر رسائل وكتابة ردود', en: 'Posting messages and writing replies' } },
          { left: { text: { ar: 'تطبيق المراسلة', en: 'Messaging app' } }, right: { ar: 'تبادل نصوص وصور ومقاطع فيديو', en: 'Exchanging text, images and video clips' } },
          { left: { text: { ar: 'مكالمة الفيديو', en: 'Video call' } }, right: { ar: 'محادثة فورية وإنت شايف التاني', en: 'A live chat while seeing the other person' } },
          { left: { text: { ar: 'المدونة', en: 'Blog' } }, right: { ar: 'يوميات بتتنشر على الإنترنت', en: 'A diary published on the internet' } },
          { left: { text: { ar: 'منصة مشاركة الفيديو', en: 'Video-sharing platform' } }, right: { ar: 'مقاطع بيشوفها جمهور واسع', en: 'Clips watched by a wide audience' } },
        ],
      },
      {
        title: { ar: 'الصفة والموقف', en: 'The feature and its situation' },
        source: { ar: 'النقاط الرئيسية (ب)، ص 58', en: 'Key Points (b), p. 58' },
        pairs: [
          { left: { text: { ar: 'إخفاء الهوية', en: 'Anonymity' } }, right: { ar: 'تعليق من حساب ما حدش عارف صاحبه', en: 'A comment from an account nobody can identify' } },
          { left: { text: { ar: 'الفورية', en: 'Immediacy' } }, right: { ar: 'بعتّ رسالة وجاك الرد في ثواني', en: 'You sent a message and got a reply in seconds' } },
          { left: { text: { ar: 'الملاءمة', en: 'Convenience' } }, right: { ar: 'بتتواصل في أي وقت ومن أي مكان', en: 'You communicate any time, from anywhere' } },
          { left: { text: { ar: 'القابلية للتسجيل', en: 'Recordability' } }, right: { ar: 'منشور مسحته ولسه ليه أثر', en: 'A post you deleted that still leaves a trace' } },
        ],
      },
    ],
  },
};
