import { Lesson } from '@core/models';

/**
 * Lesson 5-1 "تطوير وسائل الاتصال" — ministry book pp. 54–55.
 * Book notes:
 * - p.54 prints the telephone inventor as "Bill"; the real name is Bell, written correctly here.
 * - p.54 answer key: Gutenberg → printing press, Morse → telegraph, Bell → telephone, Marconi → wireless telegraph.
 * - The exercises on p.55 have no answer key; the order of events follows the dates in the Key Points.
 */
export const LESSON_5_1: Lesson = {
  unitId: 5,
  id: '5-1',
  title: { ar: 'تطوير وسائل الاتصال', en: 'The Development of Communication Media' },
  bookPages: '54 – 55',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! الدرس ده رحلة: إزاي الناس كانت بتبعت الأخبار زمان، ووصلنا للإنترنت إزاي.', en: 'Hi! This lesson is a journey: how people sent news long ago, and how we got to the internet.' },
        { ar: 'في الآخر لعبة ترتيب: رتّب الاختراعات بالتاريخ.', en: 'At the end there is an ordering game: put the inventions in date order.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (1-1)، ص 54', en: 'Key Points (1-1), p. 54' },
      blocks: [
        { type: 'heading', text: { ar: 'قبل الأسلاك والموجات', en: 'Before wires and waves' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'النار والطبول', en: 'Fires and drums' }, en: 'signal fires', text: { ar: 'في العصور القديمة كانوا بينقلوا الخبر بإشعال النار أو ضرب الطبول.', en: 'In ancient times news travelled by lighting fires or beating drums.' }, example: { ar: 'زي إنذار: النار على الجبل يعني خطر', en: 'Like an alarm: fire on a hill meant danger' } },
            { title: { ar: 'رسائل الورق', en: 'Paper letters' }, en: 'paper', text: { ar: 'بعد ما الكتابة اتطورت، اتكتبت رسايل على ورق وسلّمها مُرسِل أو حمام زاجل.', en: 'Once writing developed, letters were written on paper and delivered by a messenger or a carrier pigeon.' }, example: { ar: 'الحمام الزاجل كان "واتساب" زمان', en: 'A carrier pigeon was the old-time "chat app"' } },
            { title: { ar: 'البريد الحديث', en: 'The modern postal system' }, en: 'modern postal system', text: { ar: 'اتعمل نظام البريد الحديث سنة 1840.', en: 'The modern postal system was created in 1840.' }, example: { ar: 'الطابع والصندوق الأحمر', en: 'The stamp and the red postbox' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: نار وطبول ← ورق ← بريد (1840)', en: 'Remember: fire and drums → paper → post (1840)' } },
      ],
      bito: [
        { ar: 'تخيّل تستنى أسابيع عشان رسالة توصل!', en: 'Imagine waiting weeks for a letter to arrive!' },
        { ar: 'البريد كان أسرع حاجة وقتها.', en: 'The post was the fastest thing back then.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (1-2)، ص 54', en: 'Key Points (1-2), p. 54' },
      blocks: [
        { type: 'heading', text: { ar: 'الأسلاك واللاسلكي', en: 'Wires and wireless' } },
        {
          type: 'steps',
          items: [
            { title: { ar: '1837: التلغراف', en: '1837: The telegraph' }, en: 'Morse telegraph', text: { ar: 'مورس (أمريكي) اخترعه: بيبعت إشارات عبر أسلاك.', en: 'Morse (American) invented it: it sends signals along wires.' }, example: { ar: 'شفرة مورس: نقط وشرط', en: 'Morse code: dots and dashes' } },
            { title: { ar: '1876: الهاتف', en: '1876: The telephone' }, en: 'telephone', text: { ar: 'بيل (أمريكي) اخترعه: بقى الصوت نفسه بيتنقل.', en: 'Bell (American) invented it: the voice itself could now travel.' }, example: { ar: 'أول مكالمة في التاريخ', en: 'The first call in history' } },
            { title: { ar: '1895: التلغراف اللاسلكي', en: '1895: The wireless telegraph' }, en: 'Wireless telegraph', text: { ar: 'ماركوني (إيطالي) اخترعه: من غير أسلاك!', en: 'Marconi (Italian) invented it: no wires at all!' }, example: { ar: 'الإشارة بتطير في الهوا', en: 'The signal flies through the air' } },
            { title: { ar: '1946: الهاتف المحمول', en: '1946: The mobile phone' }, en: 'cellular phones', text: { ar: 'بدأ استخدام خدمة الهاتف المحمول في الولايات المتحدة.', en: 'Mobile-phone service began in the United States.' }, example: { ar: 'جدّ موبايلك الأول', en: 'The grandfather of your phone' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: تلغراف ← هاتف ← لاسلكي ← محمول', en: 'Remember: telegraph → telephone → wireless → mobile' } },
      ],
      bito: [
        { ar: 'اتسلسلوا: أسلاك الأول، وبعدين من غير أسلاك.', en: 'They came in order: wires first, then no wires.' },
        { ar: 'كل اختراع خلّى الرسالة أسرع وأبعد.', en: 'Each invention made messages faster and farther.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (2)، ص 54', en: 'Key Points (2), p. 54' },
      blocks: [
        { type: 'heading', text: { ar: 'الاتصال الجماهيري', en: 'Mass communication' }, code: '(Mass media)' },
        {
          type: 'cards',
          items: [
            { title: { ar: 'وسائل الاتصال الجماهيري', en: 'Mass media' }, en: 'Mass media', text: { ar: 'وسيلة بتنقل المعلومات لعدد كبير من الناس في نفس الوقت.', en: 'A medium that carries information to a large number of people at the same time.' }, example: { ar: 'الصحف، المجلات، الراديو، التلفزيون', en: 'Newspapers, magazines, radio, television' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: واحد بيتكلم، ناس كتير بتسمع في نفس الوقت', en: 'Remember: one speaks, many listen at the same time' } },
      ],
      bito: [
        { ar: 'نشرة الأخبار على التلفزيون بيشوفها ملايين في نفس اللحظة.', en: 'A TV news bulletin is watched by millions at the same moment.' },
        { ar: 'عشان كده اسمه جماهيري: جمهور كبير في نفس الوقت.', en: 'That is why it is called mass: a big audience at the same time.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (3)، ص 54', en: 'Key Points (3), p. 54' },
      blocks: [
        { type: 'heading', text: { ar: 'تطور الاتصال الجماهيري', en: 'How mass communication grew' } },
        {
          type: 'steps',
          items: [
            { title: { ar: 'منتصف القرن 15: المطبعة', en: 'Mid-15th century: the printing press' }, en: 'movable-type printing press', text: { ar: 'غوتنبرغ (ألماني) اخترع طابعة الحروف المتحركة، فاتنسخت الكتب بسهولة.', en: 'Gutenberg (German) invented the movable-type press, so books could be copied easily.' }, example: { ar: 'كتب كتير بدل نسخة بخط اليد', en: 'Many books instead of one handwritten copy' } },
            { title: { ar: '1906: الراديو', en: '1906: Radio' }, en: 'radio', text: { ar: 'أول بث إذاعي في الولايات المتحدة.', en: 'The first radio broadcast, in the United States.' }, example: { ar: 'صوت بيوصل من بعيد', en: 'Sound that reaches from afar' } },
            { title: { ar: '1928: التلفزيون', en: '1928: Television' }, en: 'Television', text: { ar: 'أول بث تلفزيوني في الولايات المتحدة.', en: 'The first TV broadcast, in the United States.' }, example: { ar: 'صوت وصورة مع بعض', en: 'Sound and picture together' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: مطبعة ← راديو (1906) ← تلفزيون (1928)', en: 'Remember: press → radio (1906) → TV (1928)' } },
      ],
      bito: [
        { ar: 'المطبعة اللي في القرن الـ15 هي اللي خلّت المعرفة توصل لناس أكتر.', en: 'The 15th-century press let knowledge reach more people.' },
        { ar: 'وبعدها الراديو والتلفزيون زوّدوها.', en: 'Then radio and TV made it bigger.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (4)، ص 54', en: 'Key Points (4), p. 54' },
      blocks: [
        { type: 'heading', text: { ar: 'ولادة الإنترنت', en: 'The birth of the internet' } },
        {
          type: 'cards',
          items: [
            { title: { ar: '1969: أربانت', en: '1969: ARPANET' }, en: 'ARPANET', text: { ar: 'وزارة الدفاع الأمريكية جرّبت شبكة كمبيوتر اسمها ARPANET.', en: 'The US Department of Defense tried a computer network called ARPANET.' }, example: { ar: 'تجربة صغيرة بين أجهزة قليلة', en: 'A small trial between a few machines' } },
            { title: { ar: 'في البداية', en: 'At first' }, en: 'Research institutions', text: { ar: 'اتستخدمت أساسًا في مؤسسات بحثية.', en: 'It was used mainly in research institutions.' }, example: { ar: 'جامعات ومراكز أبحاث', en: 'Universities and research centres' } },
            { title: { ar: 'بعدها', en: 'Then' }, en: 'Internet', text: { ar: 'انتشرت بين عامة الناس وبقت اسمها الإنترنت.', en: 'It spread to ordinary people and became known as the internet.' }, example: { ar: 'دلوقتي في جيبك', en: 'Now it is in your pocket' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: 1969 تجربة ← أبحاث ← الناس', en: 'Remember: 1969 trial → research → everyone' } },
      ],
      bito: [
        { ar: 'الإنترنت بدأ كتجربة صغيرة، مش كحاجة للعامة.', en: 'The internet started as a small experiment, not as something for everyone.' },
        { ar: 'وبقى في كل بيت.', en: 'And now it is in every home.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 54', en: 'Test Your Knowledge (1), p. 54' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'غوتنبرغ اخترع حاجة في منتصف القرن الخامس عشر. إيه هي؟', en: 'Gutenberg invented something in the mid-15th century. What was it?' },
          options: [
            { ar: 'التلغراف اللاسلكي', en: 'The wireless telegraph' },
            { ar: 'التلغراف المورسي', en: 'The Morse telegraph' },
            { ar: 'طابعة الحروف المتحركة', en: 'The movable-type printing press' },
            { ar: 'الهاتف', en: 'The telephone' },
          ],
          answer: 2,
          explanation: {
            ar: 'غوتنبرغ اخترع طابعة الحروف المتحركة. التلغراف المورسي لمورس (1837)، والهاتف لبيل (1876)، واللاسلكي لماركوني (1895).',
            en: 'Gutenberg invented the movable-type press. The telegraph was Morse (1837), the telephone was Bell (1876), and the wireless was Marconi (1895).',
          },
          success: { ar: 'صح! غوتنبرغ = المطبعة. +10 نقط', en: 'Correct! Gutenberg = the printing press. +10 pts' },
        },
      ],
      bito: [
        { ar: 'افتكر: الكتب كتير بفضل مين؟', en: 'Remember: who made books plentiful?' },
        { ar: 'مفتاح السؤال: "القرن الخامس عشر".', en: 'The key phrase: "15th century".' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (4)، ص 54', en: 'Test Your Knowledge (4), p. 54' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'ماركوني اخترع حاجة سنة 1895. إيه هي؟', en: 'Marconi invented something in 1895. What was it?' },
          options: [
            { ar: 'التلغراف اللاسلكي', en: 'The wireless telegraph' },
            { ar: 'التلفزيون', en: 'Television' },
            { ar: 'الهاتف', en: 'The telephone' },
            { ar: 'طابعة الحروف المتحركة', en: 'The movable-type printing press' },
          ],
          answer: 0,
          explanation: {
            ar: 'ماركوني (إيطالي) اخترع التلغراف اللاسلكي سنة 1895، يعني إشارات من غير أسلاك.',
            en: 'Marconi (Italian) invented the wireless telegraph in 1895: signals with no wires.',
          },
          success: { ar: 'صح! ماركوني = لاسلكي. +10 نقط', en: 'Correct! Marconi = wireless. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الكلمة المفتاحية: "من غير أسلاك".', en: 'The key phrase: "no wires".' },
        { ar: 'الهاتف كان قبله بتسع عشرة سنة.', en: 'The telephone came nineteen years before.' },
      ],
    },
    {
      source: { ar: 'جرب بنفسك، ص 55', en: 'Try It Yourself, p. 55' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه الحدث اللي حصل الأول؟', en: 'Which event happened first?' },
          options: [
            { ar: 'اتخترع الهاتف', en: 'The telephone was invented' },
            { ar: 'اتعمل نظام البريد الحديث', en: 'The modern postal system was created' },
            { ar: 'نقل المعلومات بإشعال النار أو ضرب الطبول', en: 'Information was passed by lighting fires or beating drums' },
            { ar: 'الهواتف المحمولة انتشرت', en: 'Mobile phones became widespread' },
          ],
          answer: 2,
          explanation: {
            ar: 'الترتيب: النار والطبول في العصور القديمة، بعدين البريد الحديث (1840)، بعدين الهاتف (1876)، بعدين الهواتف المحمولة (1946).',
            en: 'The order: fires and drums in ancient times, then the modern post (1840), then the telephone (1876), then mobile phones (1946).',
          },
          success: { ar: 'صح! النار والطبول الأقدم. +10 نقط', en: 'Correct! Fires and drums are the oldest. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الأقدم: اللي كان قبل ما الكتابة تتطور أصلًا.', en: 'The oldest: what was used even before writing developed.' },
        { ar: 'والأحدث هو الموبايل.', en: 'And the newest is the mobile phone.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 5-1!', en: 'You finished lesson 5-1!' } },
        {
          type: 'recap',
          items: [
            { code: '1837', text: { ar: 'التلغراف', en: 'telegraph' } },
            { code: '1876', text: { ar: 'الهاتف', en: 'telephone' } },
            { code: '1895', text: { ar: 'اللاسلكي', en: 'wireless' } },
            { code: '1969', text: { ar: 'أربانت', en: 'ARPANET' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة الترتيب: رتّب الاختراعات بالتاريخ.', en: 'Well done! The ordering game: put the inventions in date order.' },
        { ar: 'ابدأ بالأقدم وطلّع للأحدث.', en: 'Start with the oldest and go to the newest.' },
      ],
    },
  ],

  game: {
    kind: 'order',
    rounds: [
      {
        title: { ar: 'قبل الاتصالات الحديثة', en: 'Before modern communication' },
        source: { ar: 'النقاط الرئيسية (1-1)، ص 54', en: 'Key Points (1-1), p. 54' },
        steps: [
          { ar: 'إشعال النار وضرب الطبول', en: 'Lighting fires and beating drums' },
          { ar: 'رسائل على ورق', en: 'Letters on paper' },
          { ar: 'نظام البريد الحديث (1840)', en: 'The modern postal system (1840)' },
        ],
      },
      {
        title: { ar: 'الأسلاك واللاسلكي', en: 'Wires and wireless' },
        source: { ar: 'النقاط الرئيسية (1-2)، ص 54', en: 'Key Points (1-2), p. 54' },
        steps: [
          { ar: 'التلغراف (1837)', en: 'The telegraph (1837)' },
          { ar: 'الهاتف (1876)', en: 'The telephone (1876)' },
          { ar: 'التلغراف اللاسلكي (1895)', en: 'The wireless telegraph (1895)' },
          { ar: 'الهاتف المحمول (1946)', en: 'The mobile phone (1946)' },
        ],
      },
      {
        title: { ar: 'الاتصال الجماهيري والإنترنت', en: 'Mass media and the internet' },
        source: { ar: 'النقاط الرئيسية (3، 4)، ص 54', en: 'Key Points (3, 4), p. 54' },
        steps: [
          { ar: 'مطبعة غوتنبرغ (القرن 15)', en: 'Gutenberg’s press (15th century)' },
          { ar: 'أول بث إذاعي (1906)', en: 'The first radio broadcast (1906)' },
          { ar: 'أول بث تلفزيوني (1928)', en: 'The first TV broadcast (1928)' },
          { ar: 'تجربة أربانت (1969)', en: 'The ARPANET trial (1969)' },
        ],
      },
    ],
  },
};
