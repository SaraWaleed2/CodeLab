import { Lesson } from '@core/models';

/**
 * Lesson 1-2 "أخلاقيات المعلومات" — ministry book pp. 12–15.
 * Book notes:
 * - p.13 answer key labels its answers (أ ب جـ د) while the questions use (أ ب ت ث); the site uses the questions' letters.
 * - p.14 Q3 asks for the general term for social platforms; the Key Points term (p.12) "وسائل التواصل الاجتماعي"
 *   is not among its options, so that question is not used.
 * - p.14 Q5 (د) is garbled in the book ("أرسل صورتي إلى غير مقابلة…") and is not used.
 * - "جرب بنفسك" and "تمرين" (pp.14–15) have no answer key; their right/wrong answers here follow the Key Points (pp.12–13).
 */
export const LESSON_1_2: Lesson = {
  unitId: 1,
  id: '1-2',
  title: { ar: 'أخلاقيات المعلومات', en: 'Information Ethics' },
  bookPages: '12 – 15',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        {
          ar: 'أهلًا! الدرس ده عن إزاي نتصرف صح على النت. حاجات بنعملها كل يوم من غير ما ناخد بالنا.',
          en: "Hi! This lesson is about acting right online. Things we do every day without noticing.",
        },
        { ar: 'قلّب الصفحات، وفي الآخر هتلعب "تعمل إيه؟" بمواقف من الكتاب.', en: 'Turn the pages; at the end you will play "What would you do?" with situations from the book.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 12', en: 'Key Points, p. 12' },
      blocks: [
        { type: 'heading', text: { ar: 'أخلاقيات المعلومات', en: 'Information ethics' }, code: '(Information Ethics)' },
        {
          type: 'lead',
          text: {
            ar: 'المفاهيم والتوجهات اللي محتاجينها عشان نتصرف صح في مجتمع المعلومات، سواء فيه قانون يمنع الحاجة ولا لأ.',
            en: 'The ideas and attitudes we need to act properly in the information society, whether or not a law forbids something.',
          },
        },
        { type: 'memo', text: { ar: 'افتكر: الصح صح، حتى لو مفيش قانون', en: 'Remember: right is right, even without a law' } },
      ],
      bito: [
        { ar: 'مفيش قانون بيمنعك تكتب تعليق رخم على بوست صاحبك. بس هل ده صح؟ دي بقى الأخلاق.', en: "No law stops you from writing a mean comment on a friend's post. But is it right? That's ethics." },
        { ar: 'القانون بيقولك الممنوع. الأخلاق بتقولك الصح، حتى في الحاجات اللي القانون مبيتكلمش عنها.', en: "The law tells you what's forbidden. Ethics tells you what's right, even where the law says nothing." },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 12', en: 'Key Points, p. 12' },
      blocks: [
        { type: 'heading', text: { ar: 'قبل ما تنشر أي حاجة', en: 'Before you post anything' } },
        {
          type: 'lead',
          text: {
            ar: 'المعلومات على النت بتنتشر بسهولة، وأول ما تتنشر مبتختفيش بسهولة. عشان كده:',
            en: 'Information online spreads easily, and once posted it does not easily disappear. So:',
          },
        },
        {
          type: 'cards',
          items: [
            {
              tone: 'no',
              title: { ar: 'صور وفيديوهات الناس', en: "Other people's photos and videos" },
              text: { ar: 'متشاركش صور أو فيديوهات لناس من غير إذنهم.', en: "Don't share photos or videos of people without their permission." },
            },
            {
              tone: 'no',
              title: { ar: 'المعلومات الشخصية', en: 'Personal information' },
              en: 'personal information',
              text: { ar: 'متسرّبش المعلومات الشخصية بتاعة حد تاني.', en: "Don't leak someone else's personal information." },
            },
            {
              tone: 'no',
              title: { ar: 'حقوق المؤلف', en: 'Copyright' },
              en: 'copyright',
              text: { ar: 'متشاركش صور أو فيديوهات ليها حقوق مؤلف من غير إذن.', en: "Don't share copyrighted photos or videos without permission." },
            },
            {
              tone: 'no',
              title: { ar: 'الخصوصية والتنمر الإلكتروني', en: 'Privacy and cyberbullying' },
              en: 'privacy · cyber bullying',
              text: { ar: 'احترم خصوصية الناس، ومتنشرش تعليقات بتهين أو بتجرح حد.', en: "Respect people's privacy, and don't post comments that insult or hurt anyone." },
            },
          ],
        },
      ],
      bito: [
        { ar: 'قبل ما تدوس "نشر"، اسأل نفسك: لو حد عمل كده فيا، هيضايقني؟', en: 'Before you tap "Post", ask yourself: would it upset me if someone did this to me?' },
        { ar: 'صورة صاحبك في الفصل؟ استأذنه الأول. ده بالظبط أول قاعدة.', en: "A photo of your friend in class? Ask first. That's exactly the first rule." },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 12', en: 'Key Points, p. 12' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّي بالك من الحاجات دي', en: 'Watch out for these' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'العلامة الجغرافية', en: 'Geotagging' },
              en: 'Geotagging',
              text: {
                ar: 'معلومات خطوط الطول والعرض اللي بتتحط في الصور والفيديوهات اللي بتصوّرها بالموبايل. ممكن حد يعرف منها مكانك، زي بيتك.',
                en: 'Latitude and longitude saved inside photos and videos taken with your phone. Someone could find your location from it, like your home.',
              },
            },
            {
              title: { ar: 'المعلومات المضللة والشائعات', en: 'Disinformation and rumors' },
              en: 'Disinformation and rumors',
              text: { ar: 'معلومات كدب بتتنشر عن قصد، أو شائعات ملهاش أساس.', en: 'False information spread on purpose, or rumors with no basis.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: الصورة ممكن تقول مكانك من غير ما تقول إنت', en: 'Remember: a photo can reveal where you are without you saying it' } },
      ],
      bito: [
        { ar: 'صوّرت صورة في البيت ونزلتها؟ الصورة نفسها ممكن يكون جواها مكان البيت بالظبط. ده اسمه العلامة الجغرافية.', en: 'Took a photo at home and posted it? The photo itself may hold your exact home location. That is geotagging.' },
        { ar: 'شفت خبر غريب في جروب؟ متعملوش "فوروارد" غير لما تتأكد. الشائعة بتنتشر أسرع من الحقيقة.', en: "Saw a strange story in a group? Don't forward it until you check. Rumors spread faster than the truth." },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 12 – 13', en: 'Key Points, pp. 12 – 13' },
      blocks: [
        { type: 'heading', text: { ar: 'مشاكل الموبايل ووسائل التواصل', en: 'Problems with phones and social media' } },
        {
          type: 'lead',
          text: {
            ar: 'وسائل التواصل الاجتماعي (Social media) خدمات بتوفر منصات يتواصل فيها الناس على الإنترنت. بس معاها مشاكل:',
            en: 'Social media are services that give people platforms to connect online. But they come with problems:',
          },
        },
        {
          type: 'cards',
          items: [
            {
              tone: 'no',
              title: { ar: 'إدمان الإنترنت', en: 'Internet addiction' },
              en: 'Internet addiction',
              text: { ar: 'تبقى منغمس في النت لدرجة إن حياتك اليومية تتعطل.', en: 'Being so absorbed online that daily life is disrupted.' },
            },
            {
              tone: 'no',
              title: { ar: 'الموبايل وإنت ماشي', en: 'Phone while walking' },
              en: 'Using smartphone while walking',
              text: { ar: 'تلعب أو تستخدم الموبايل وإنت ماشي في الشارع.', en: 'Playing on or using your phone while walking.' },
            },
            {
              tone: 'no',
              title: { ar: 'الجريمة الإلكترونية', en: 'Cybercrime' },
              en: 'Cybercrime',
              text: { ar: 'استخدام الكمبيوتر والشبكات في أنشطة إجرامية.', en: 'Misusing computers and networks for criminal activity.' },
            },
            {
              tone: 'no',
              title: { ar: 'انتحال الشخصية وتسريب البيانات', en: 'Identity theft and data leaks' },
              en: 'Identity theft · Leakage',
              text: {
                ar: 'حد ينتحل شخصيتك عشان يسرق قرض أو هويتك أو كلمات المرور، أو يكشف معلومات شخصية المفروض تفضل سرية.',
                en: 'Someone pretends to be you to steal a loan, your identity or passwords, or reveals personal information that should stay secret.',
              },
            },
          ],
        },
      ],
      bito: [
        { ar: 'لو بتفتح الموبايل أول ما تصحى وآخر حاجة قبل ما تنام، وبقيت بتنسى المذاكرة… خد بالك، دي بداية إدمان الإنترنت.', en: "If your phone is the first thing you open when you wake and the last before sleep, and you forget to study… careful, that's how internet addiction starts." },
        { ar: 'كلمة السر بتاعتك زي مفتاح البيت. لو حد خدها يقدر يعمل نفسه إنت. ده انتحال الشخصية.', en: "Your password is like your house key. If someone gets it, they can pretend to be you. That's identity theft." },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 13', en: 'Test Your Knowledge (1), p. 13' },
      blocks: [
        {
          type: 'question',
          question: {
            ar: 'إيه المصطلح اللي بيشير للمفاهيم والتوجهات اللازمة عشان نتصرف صح في مجتمع المعلومات؟',
            en: 'Which term means the ideas and attitudes needed to act properly in the information society?',
          },
          options: [
            { ar: 'أخلاقيات المعلومات', en: 'Information ethics' },
            { ar: 'الثقافة الإعلامية', en: 'Media literacy' },
            { ar: 'العلامة الجغرافية', en: 'Geotagging' },
            { ar: 'التنمر الإلكتروني', en: 'Cyberbullying' },
          ],
          answer: 0,
          explanation: { ar: 'أخلاقيات المعلومات.', en: "Information ethics." },
          success: { ar: 'صح! أخلاقيات المعلومات. +10 نقط', en: 'Correct! Information ethics. +10 pts' },
        },
      ],
      bito: [
        { ar: 'التعريف ده كان في أول صفحة شرح في الدرس.', en: 'This definition was on the first explainer page.' },
        { ar: 'الثقافة الإعلامية عن "نفهم" المعلومة. السؤال هنا عن "نتصرف صح".', en: 'Media literacy is about understanding information. This question is about acting right.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2) ب، ص 13', en: 'Test Your Knowledge (2) b, p. 13' },
      blocks: [
        {
          type: 'question',
          question: {
            ar: 'صح ولا غلط: فيه خطر إن حد يعرف عنوان بيتك من العلامة الجغرافية اللي في الصور والفيديوهات.',
            en: 'True or false: someone could find your home address from the geotags in photos and videos.',
          },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. الصور جواها خطوط الطول والعرض، وممكن يتحدد منها مكانك.',
            en: "✓. Photos hold latitude and longitude, which can reveal where you are.",
          },
          success: { ar: 'صح! العلامة الجغرافية ممكن تكشف مكانك. +10 نقط', en: 'Correct! Geotags can reveal where you are. +10 pts' },
        },
      ],
      bito: [
        { ar: 'افتكر صفحة "خلّي بالك": الصورة بتحفظ إيه جواها؟', en: 'Remember the "Watch out" page: what does a photo store inside it?' },
        { ar: 'خطوط الطول والعرض = مكان على الخريطة.', en: 'Latitude and longitude = a place on the map.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2) ت، ص 13', en: 'Test Your Knowledge (2) c, p. 13' },
      blocks: [
        {
          type: 'question',
          question: {
            ar: 'صح ولا غلط: تقدر تكتب اللي إنت عاوزه على لوحة إعلانات مجهولة الهوية، لأن محدش هيعرف إن إنت اللي كتبت.',
            en: 'True or false: you can write anything on an anonymous board, because nobody will know it was you.',
          },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 1,
          explanation: {
            ar: '✕. متنشرش أبدًا إساءة أو معلومات مضللة أو شائعات، حتى لو مش باسمك.',
            en: "✕. Never post insults, disinformation or rumors, even anonymously.",
          },
          success: { ar: 'صح! الأخلاق مش بتتغير لما الاسم يختفي. +10 نقط', en: "Correct! Ethics don't change when your name is hidden. +10 pts" },
        },
      ],
      bito: [
        { ar: 'لو محدش عارفك، يبقى الكلام الوحش بقى عادي؟', en: "If nobody knows it's you, do mean words become OK?" },
        { ar: 'افتكر أول صفحة: الصح صح حتى لو مفيش قانون، وحتى لو مفيش اسم.', en: 'Remember the first page: right is right even without a law, and even without a name.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 1-2!', en: 'You finished lesson 1-2!' } },
        {
          type: 'recap',
          items: [
            { code: 'Ethics', text: { ar: 'الصح حتى من غير قانون', en: 'right even without a law' } },
            { code: '✕ ×4', text: { ar: 'قبل ما تنشر', en: 'before you post' } },
            { code: 'Geotag', text: { ar: 'الصورة بتقول مكانك', en: 'photos reveal location' } },
            { code: '⚠', text: { ar: 'إدمان، جريمة، انتحال', en: 'addiction, crime, identity theft' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! يلا على "تعمل إيه؟": مواقف من الكتاب، وإنت تقرر التصرف صح ولا غلط.', en: 'Well done! On to "What would you do?": situations from the book, and you decide if each action is right or wrong.' },
        { ar: 'في كل موقف، فكّر: لو حد عمل ده معايا، هيبقى كويس؟', en: 'For each situation, think: if someone did this to me, would it be OK?' },
      ],
    },
  ],

  game: {
    kind: 'scenarios',
    items: [
      {
        text: { ar: 'وسائل التواصل الاجتماعي مش أكتر من أداة خطيرة بتسبب الإدمان.', en: 'Social media are nothing more than a dangerous, addictive tool.' },
        ok: false,
        why: {
          ar: 'الكتاب بيقول إنها أداة ملائمة على النت بتخلي الناس يتواصلوا. بتبقى خطيرة لو ما استخدمناهاش صح.',
          en: 'The book says they are a convenient online tool for people to connect. They become dangerous only if misused.',
        },
        source: { ar: 'تحدى معلوماتك (2) أ، ص 13', en: 'Test Your Knowledge (2) a, p. 13' },
      },
      {
        text: {
          ar: 'خليك فاكر إن فيه ناس حقيقية على الجانب التاني من النت، وشارك المعلومات وإنت بتحترم وجهة نظرهم.',
          en: 'Remember there are real people on the other side of the internet, and share information while respecting their views.',
        },
        ok: true,
        why: { ar: 'إجابة الكتاب ✓: ورا كل حساب إنسان حقيقي ليه مشاعر.', en: "The book's answer is ✓: behind every account is a real person with feelings." },
        source: { ar: 'تحدى معلوماتك (2) ث، ص 13', en: 'Test Your Knowledge (2) d, p. 13' },
      },
      {
        text: { ar: 'مواقع الويب ملزمة قانونًا إنها تقدم معلومات دقيقة دايمًا.', en: 'Websites are always legally required to give accurate information.' },
        ok: false,
        why: {
          ar: 'المعلومات اللي على المواقع ممكن تبقى غلط أو مضللة، عشان كده بنعمل تحقق متبادل ونقارن بأكتر من مصدر.',
          en: 'Website information can be wrong or misleading, which is why we cross-check with more than one source.',
        },
        source: { ar: 'جرب بنفسك (4) ب، ص 14', en: 'Try It Yourself (4) b, p. 14' },
      },
      {
        text: {
          ar: 'لازم تبقى حريص مش بس على معلوماتك الشخصية، كمان على طريقة تعاملك مع المعلومات الشخصية بتاعة غيرك.',
          en: "Be careful not only with your own personal information, but also with how you handle other people's.",
        },
        ok: true,
        why: { ar: 'من قواعد النشر في الكتاب: متسرّبش المعلومات الشخصية بتاعة حد تاني.', en: "One of the book's posting rules: don't leak someone else's personal information." },
        source: { ar: 'جرب بنفسك (4) ت، ص 14', en: 'Try It Yourself (4) c, p. 14' },
      },
      {
        text: { ar: 'أي محتوى، الأحسن تنشره على لوحة إعلانات عشان يوصل لعدد أكبر من الناس.', en: 'For any content, it is best to post it on a board so it reaches more people.' },
        ok: false,
        why: {
          ar: 'المعلومات بتنتشر بسهولة ومبتختفيش. مش كل حاجة ينفع تتنشر لناس كتير، فكّر الأول في الخصوصية والصح.',
          en: "Information spreads easily and doesn't disappear. Not everything should reach many people; think about privacy and what's right first.",
        },
        source: { ar: 'جرب بنفسك (4) ث، ص 14', en: 'Try It Yourself (4) d, p. 14' },
      },
      {
        text: { ar: 'تستخدم الموبايل وإنت سايق عربية.', en: 'Using a smartphone while driving a car.' },
        ok: false,
        why: { ar: 'زي استخدام الموبايل وإنت ماشي: بيشتت انتباهك ويعرّضك ويعرّض غيرك للخطر.', en: 'Like using your phone while walking: it distracts you and puts you and others in danger.' },
        source: { ar: 'جرب بنفسك (5) أ، ص 14', en: 'Try It Yourself (5) a, p. 14' },
      },
      {
        text: { ar: 'تشغّل الموبايل في السينما أو في المحاضرة.', en: 'Using your phone in the cinema or during a lecture.' },
        ok: false,
        why: { ar: 'بيضايق اللي حواليك. احترام الناس جزء من أخلاقيات المعلومات.', en: 'It bothers people around you. Respecting others is part of information ethics.' },
        source: { ar: 'جرب بنفسك (5) ب، ص 14', en: 'Try It Yourself (5) b, p. 14' },
      },
      {
        text: { ar: 'تنشر تعليقات سلبية عن ناس تانية على النت.', en: 'Posting negative comments about others online.' },
        ok: false,
        why: { ar: 'التعليقات اللي بتهين أو بتجرح حد اسمها تنمر إلكتروني، والكتاب بيقول متعملهاش.', en: 'Comments that insult or hurt someone are cyberbullying, and the book says not to do it.' },
        source: { ar: 'جرب بنفسك (5) جـ، ص 14', en: 'Try It Yourself (5) c, p. 14' },
      },
      {
        text: {
          ar: 'شفت حد مشهور في المول، فصوّرته ونزّلت الصورة على السوشيال ميديا. مفيش مشكلة لأن الصورة في مكان عام.',
          en: 'You saw a celebrity at the mall, took a photo and posted it on social media. It is fine because it was a public place.',
        },
        ok: false,
        why: { ar: 'أول قاعدة في الكتاب: متشاركش صور لناس من غير إذنهم، حتى لو في مكان عام.', en: "The book's first rule: don't share photos of people without their permission, even in a public place." },
        source: { ar: 'تمرين (3) ث، ص 15', en: 'Exercise (3) d, p. 15' },
      },
      {
        text: { ar: 'وإنت بتتعامل مع الناس على النت، مهم تتكلم بطريقة مناسبة عشان محدش يفهمك غلط.', en: 'When dealing with people online, communicate properly to avoid misunderstandings.' },
        ok: true,
        why: { ar: 'الكلام المكتوب ملوش نبرة صوت، فلازم تختار كلامك كويس.', en: 'Written words have no tone of voice, so choose them carefully.' },
        source: { ar: 'تمرين (3) أ، ص 15', en: 'Exercise (3) a, p. 15' },
      },
      {
        text: {
          ar: 'لو صفحة اتشالت من على الإنترنت، كده مش ممكن تبقى ضحية جريمة إلكترونية.',
          en: "If a page is removed from the internet, you can't become a victim of cybercrime.",
        },
        ok: false,
        why: {
          ar: 'المعلومات ليها خاصية الاستمرارية: أول ما تتنشر مبتتمسحش بالكامل، وممكن حد يكون نسخها.',
          en: 'Information persists: once posted it is never fully erased, and someone may have copied it.',
        },
        source: { ar: 'تمرين (4) ت، ص 15', en: 'Exercise (4) c, p. 15' },
      },
      {
        text: { ar: 'وإنت بتنشر أي معلومة، اتأكد إنها مش بتنتهك خصوصية حد.', en: "When posting information, make sure it doesn't violate anyone's privacy." },
        ok: true,
        why: { ar: 'من قواعد الكتاب: احترم خصوصية الناس.', en: "One of the book's rules: respect people's privacy." },
        source: { ar: 'تمرين (4) ث، ص 15', en: 'Exercise (4) d, p. 15' },
      },
    ],
  },
};
