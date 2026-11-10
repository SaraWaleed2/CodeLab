import { Lesson } from '@core/models';

/**
 * Lesson 3-2 "تهديدات وإجراءات مواجهة أمن المعلومات (٢)" — ministry book pp. 34–37.
 * Book notes:
 * - The lesson's page heading (p.34) reads "التهديدات والتدابير المضادة في أمن المعلومات 2"; the unit cover's title is used.
 * - Two-factor = two DIFFERENT kinds of factor (e.g. knowledge + possession); two-step = two steps of the SAME kind.
 * - p.35 "الحل" (4): 10 digits + 26 letters = 36 symbols per place, so 3 places give 36³ = 46,656 — used by the code challenge.
 * - p.35 question 2 asks to pick several statements; the site turns the OTP one into a true/false question.
 * - Exercises on pp.36–37 have no answer key and are only used where the Key Points settle the answer.
 */
export const LESSON_3_2: Lesson = {
  unitId: 3,
  id: '3-2',
  title: { ar: 'تهديدات وإجراءات مواجهة أمن المعلومات (٢)', en: 'Information Security Threats and Responses (2)' },
  bookPages: '34 – 37',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        {
          ar: 'أهلًا! الدرس ده عن كلمات المرور وطرق التأكد إنك إنت صاحب الحساب.',
          en: 'Hi! This lesson is about passwords and the ways to confirm you are the account owner.',
        },
        {
          ar: 'في الآخر لعبة فرز، وتحدي كود بتحسب فيه كام تركيبة ممكنة لكلمة مرور.',
          en: 'At the end there is a sorting game, and a code challenge where you count how many passwords are possible.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 34', en: 'Key Points, p. 34' },
      blocks: [
        { type: 'heading', text: { ar: 'كلمة المرور', en: 'The password' }, code: '(Password)' },
        {
          type: 'lead',
          text: { ar: 'سلسلة أحرف بتتستخدم للتحقق إنك فعلًا صاحب الحساب الشرعي. وإرشادات إنشائها:', en: 'A string of characters used to check that you really are the legitimate account owner. How to create one:' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'خلّيها طويلة', en: 'Make it long' }, text: { ar: 'استخدم سلسلة أحرف طويلة قدر الإمكان.', en: 'Use as long a string of characters as you can.' } },
            { title: { ar: 'نوّع الرموز', en: 'Mix the symbols' }, text: { ar: 'اجمع بين الأحرف الكبيرة والصغيرة والأرقام والرموز.', en: 'Combine capital and small letters, numbers and symbols.' } },
            { tone: 'no', title: { ar: 'مفيش معلومات شخصية', en: 'No personal details' }, text: { ar: 'متستخدمش تاريخ ميلادك أو عنوان بريدك الإلكتروني أو معرّف المستخدم.', en: "Don't use your birthday, email address or user ID." } },
            { tone: 'no', title: { ar: 'متكررهاش', en: "Don't reuse it" }, text: { ar: 'متعيدش استخدام نفس كلمة المرور في خدمات تانية.', en: "Don't reuse the same password in other services." } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: طويلة · متنوعة · مش شخصية · مش مكررة', en: 'Remember: long · mixed · not personal · not reused' } },
      ],
      bito: [
        {
          ar: 'اسمك أو تاريخ ميلادك أسهل حاجة حد يخمّنها. كلمة المرور القوية بتبان كأنها كلام عشوائي.',
          en: 'Your name or birthday is the easiest thing to guess. A strong password looks like random text.',
        },
        {
          ar: 'ولو استخدمت نفس الباسورد في كل مكان، لو حد عرفه في موقع، هيدخل بيه على الباقي.',
          en: 'If you use the same password everywhere, once someone learns it on one site they can try it on the rest.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 34', en: 'Key Points, p. 34' },
      blocks: [
        { type: 'heading', text: { ar: 'كلمة المرور لمرة واحدة والمصادقة', en: 'One-time passwords and authentication' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'كلمة المرور لمرة واحدة', en: 'One-time password' },
              en: 'One-time-password',
              text: { ar: 'كلمة مرور بتتغير كل فترة، ومينفعش تستخدمها غير مرة واحدة.', en: 'A password that changes every so often and can be used only once.' },
            },
            {
              title: { ar: 'المصادقة', en: 'Authentication' },
              en: 'Authentication',
              text: { ar: 'عملية التحقق من هوية المستخدم على كمبيوتر أو شبكة.', en: "The process of checking a user's identity on a computer or network." },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: المصادقة = اتأكد إنك إنت', en: 'Remember: authentication = make sure it is you' } },
      ],
      bito: [
        {
          ar: 'كود الـ SMS اللي بيجيلك مرة واحدة ويتغيّر؟ ده شكل من كلمة المرور لمرة واحدة.',
          en: 'The SMS code that arrives once and then changes? That is a one-time password.',
        },
        {
          ar: 'المصادقة هي اللحظة اللي النظام بيسألك فيها: إنت فعلًا اللي بتقول عليه؟',
          en: 'Authentication is the moment the system asks: are you really who you say you are?',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 34', en: 'Key Points, p. 34' },
      blocks: [
        { type: 'heading', text: { ar: 'أنواع المصادقة (1)', en: 'Kinds of authentication (1)' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'بالمعرفة', en: 'Knowledge-based' },
              en: 'Knowledge-based authentication',
              text: { ar: 'بمعلومات يعرفها الفرد وحده.', en: 'Using information only the person knows.' },
              example: { ar: 'معرّف المستخدم وكلمة المرور، رمز PIN', en: 'User ID and password, a PIN' },
            },
            {
              title: { ar: 'البيومترية', en: 'Biometric' },
              en: 'Biometric authentication (Biometrics)',
              text: { ar: 'بالخصائص الجسدية أو السلوكية للفرد.', en: "Using the person's physical or behavioural traits." },
              example: { ar: 'بصمة الإصبع، القزحية، نمط الوريد، خط اليد', en: 'Fingerprint, iris, vein pattern, handwriting' },
            },
            {
              title: { ar: 'بالحيازة', en: 'Possession-based' },
              en: 'Possession-based authentication',
              text: { ar: 'بعنصر يمتلكه الفرد.', en: 'Using something the person has.' },
              example: { ar: 'بطاقة ذكية، كلمة مرور لمرة واحدة، التحقق من الرسائل النصية', en: 'A smart card, a one-time password, SMS verification' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: حاجة بتعرفها · حاجة فيك · حاجة بتملكها', en: 'Remember: something you know · something you are · something you have' } },
      ],
      bito: [
        {
          ar: 'ATM بيطلب كارت (حاجة بتملكها) والـ PIN (حاجة بتعرفها). تنطبق الاتنين مع بعض هنا.',
          en: 'An ATM asks for a card (something you have) and the PIN (something you know). Both together.',
        },
        {
          ar: 'والبصمة حاجة فيك إنت: مينفعش تنساها ولا تضيّعها.',
          en: 'A fingerprint is part of you: you cannot forget it or lose it.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 34', en: 'Key Points, p. 34' },
      blocks: [
        { type: 'heading', text: { ar: 'أنواع المصادقة (2)', en: 'Kinds of authentication (2)' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'المصادقة الثنائية (عاملين مختلفين)', en: 'Two-factor (two different factors)' },
              en: 'Two-factor authentication',
              text: { ar: 'طريقة بتجمع بين نوعين مختلفين من العوامل، زي التحقق بالمعرفة والحيازة.', en: 'A method combining two different kinds of factor, like knowledge and possession.' },
              example: { ar: 'رقم PIN ورمز عبر SMS', en: 'A PIN and a code by SMS' },
            },
            {
              title: { ar: 'المصادقة متعددة الخطوات', en: 'Two-step authentication' },
              en: 'Two-step authentication',
              text: { ar: 'طريقة بتتم على خطوتين بمعلومتين من نفس نوع العامل.', en: 'A method done in two steps using two pieces of information of the same kind of factor.' },
              example: { ar: 'كلمة المرور + سؤال سري', en: 'A password + a secret question' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: ثنائية = نوعين مختلفين · متعددة الخطوات = نفس النوع مرتين', en: 'Remember: two-factor = two different kinds · two-step = the same kind twice' } },
      ],
      bito: [
        {
          ar: 'كلمة المرور وسؤال سري الاتنين حاجة بتعرفها، يبقى نفس النوع مرتين: متعددة الخطوات.',
          en: 'A password and a secret question are both things you know: the same kind twice, so two-step.',
        },
        {
          ar: 'لكن PIN (بتعرفه) وكود SMS (بتملك التليفون): نوعين مختلفين، فده ثنائية العوامل.',
          en: 'But a PIN (you know it) and an SMS code (you own the phone) are two different kinds: that is two-factor.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 34', en: 'Key Points, p. 34' },
      blocks: [
        { type: 'heading', text: { ar: 'إجراءات أمن المعلومات', en: 'Information security measures' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'التحكم في الوصول', en: 'Access control' },
              en: 'Access control',
              text: { ar: 'يسمح بالوصول للأنظمة أو البيانات لمستخدمين محددين بس، ويتحقق منهم بالمصادقة.', en: 'Allows access to systems or data only for named users, who are verified by authentication.' },
            },
            {
              title: { ar: 'جدار الحماية', en: 'Firewall' },
              en: 'Firewall',
              text: { ar: 'بيتركّب عند نقط دخول الشبكة: بيمنع الوصول غير المصرّح به من الخارج، وتسرّب البيانات من الداخل.', en: 'Installed at a network’s entry points: it blocks unauthorised access from outside and data leaks from inside.' },
            },
            {
              title: { ar: 'برنامج مكافحة الفيروسات', en: 'Antivirus software' },
              text: { ar: 'بنركّبه عشان يشيل الفيروسات أو يعزلها، ونحدّث تعريفاته باستمرار.', en: 'Installed to remove or isolate viruses; keep its definitions updated.' },
            },
            {
              title: { ar: 'التحديث الدائم', en: 'Always update' },
              text: { ar: 'خلّي نظام التشغيل وبرامج التطبيقات محدّثة عشان تقفل الثغرات الأمنية.', en: 'Keep the operating system and apps updated so security holes are closed.' },
            },
            {
              title: { ar: 'النسخ الاحتياطي', en: 'Backups' },
              text: { ar: 'اعمل نسخ احتياطية لبياناتك بانتظام.', en: 'Make backups of your data regularly.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: تحكّم · جدار · مكافحة · تحديث · نسخ احتياطي', en: 'Remember: control · firewall · antivirus · updates · backups' } },
      ],
      bito: [
        {
          ar: 'الجدار زي الحارس على باب العمارة: بيمنع الغريب يدخل، وبيمنع حد من جوه يخرّج حاجة من غير ما يتأكد.',
          en: 'A firewall is like a building guard: stops strangers coming in, and stops anything leaving unchecked.',
        },
        {
          ar: 'والنسخة الاحتياطية هي طوق النجاة لو حصل أي حاجة: فيروس أو فدية أو جهاز باظ.',
          en: 'A backup is your lifeline if anything happens: a virus, ransomware or a dead device.',
        },
      ],
    },
    {
      source: { ar: 'الحل (4)، ص 35', en: 'Solution (4), p. 35' },
      blocks: [
        { type: 'heading', text: { ar: 'كام تركيبة لكلمة المرور؟', en: 'How many possible passwords?' } },
        {
          type: 'lead',
          text: { ar: 'لو كلمة المرور من أرقام (0–9) وحروف صغيرة (a–z):', en: 'If a password uses digits (0–9) and small letters (a–z):' },
        },
        {
          type: 'cards',
          items: [
            {
              title: { ar: '36 اختيار لكل خانة', en: '36 choices for each place' },
              text: { ar: '10 أرقام + 26 حرف = 36 رمز محتمل.', en: '10 digits + 26 letters = 36 possible symbols.' },
            },
            {
              title: { ar: 'كلمة من 3 خانات', en: 'A password of 3 places' },
              text: { ar: '36 × 36 × 36 = 36³ = 46,656 تركيبة.', en: '36 × 36 × 36 = 36³ = 46,656 combinations.' },
            },
            {
              title: { ar: 'كل خانة زيادة', en: 'Every extra place' },
              text: { ar: 'بتضرب عدد التركيبات في 36.', en: 'multiplies the number of combinations by 36.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: خانة زيادة = × 36', en: 'Remember: one more place = × 36' } },
      ],
      bito: [
        {
          ar: 'كلمة من 3 خانات فيها 46,656 احتمال، ودي تتجرّب بالكمبيوتر في ثواني. عشان كده بنخلّيها طويلة.',
          en: 'A 3-place password has 46,656 possibilities, which a computer can try in seconds. That is why we make them long.',
        },
        {
          ar: 'في تحدي الكود هتكتب سطر بيضرب في 36 لكل خانة، وتشوف الرقم بيكبر إزاي.',
          en: 'In the code challenge you write one line that multiplies by 36 for each place, and watch the number grow.',
        },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك 1 (1)، ص 35', en: 'Test Your Knowledge 1 (1), p. 35' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'اختر العبارة غير الصحيحة بخصوص أفضل ممارسات كلمة المرور.', en: 'Choose the INCORRECT statement about password best practice.' },
          options: [
            { ar: 'متعيدش استخدام نفس كلمة المرور في خدمات متعددة.', en: "Don't reuse the same password across several services." },
            { ar: 'الأفضل تكمّل بكلمة المرور الافتراضية اللي اتحطت في البداية.', en: 'It is best to keep using the default password set at the start.' },
            { ar: 'اجمع بين الأحرف الكبيرة والصغيرة والأرقام والرموز.', en: 'Combine capital and small letters, numbers and symbols.' },
            { ar: 'تجنّب المعلومات الشخصية السهل تخمينها، زي اسمك أو تاريخ ميلادك.', en: 'Avoid easy-to-guess personal details, like your name or birthday.' },
          ],
          answer: 1,
          explanation: {
            ar: 'لو كلمة المرور الأولية اتبعتت بالبريد الإلكتروني أو مذكرة، فاحتمال إنها تكون اتسرّبت لطرف تالت. عشان كده لازم تغيّر كلمة المرور الأولية.',
            en: 'If the first password was sent by email or on a note, it may have leaked to a third party. So the initial password must be changed.',
          },
          success: { ar: 'صح! الباسورد الافتراضي لازم يتغيّر. +10 نقط', en: 'Correct! A default password must be changed. +10 pts' },
        },
      ],
      bito: [
        { ar: 'المطلوب العبارة الغلط. تلات عبارات من التلاتة نصايح صح.', en: 'You need the wrong statement. Three of the four are good advice.' },
        { ar: 'اسأل نفسك: الباسورد اللي جالك جاهز، حد تاني شافه قبلك؟', en: 'Ask yourself: a ready-made password that was sent to you, could someone else have seen it first?' },
      ],
    },
    {
      source: { ar: 'جرب بنفسك 1 (3)، ص 35', en: 'Try It Yourself 1 (3), p. 35' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'أنهي مثال هو المصادقة البيومترية الصحيح؟', en: 'Which is the right example of biometric authentication?' },
          options: [
            { ar: 'المصادقة بمعرّف مستخدم وكلمة مرور مخصصة لكل فرد', en: 'Authenticating with a user ID and a password set for each person' },
            { ar: 'المصادقة برسالة SMS مرسلة إلى هاتف ذكي', en: 'Authenticating with an SMS sent to a smartphone' },
            { ar: 'المصادقة بمسح بصمة الإصبع على جهاز استشعار', en: 'Authenticating by scanning a fingerprint on a sensor' },
            { ar: 'المصادقة بكلمة مرور لمرة واحدة', en: 'Authenticating with a one-time password' },
          ],
          answer: 2,
          explanation: {
            ar: 'المصادقة البيومترية بتستخدم الخصائص الجسدية أو السلوكية: بصمة الإصبع أو القزحية أو نمط الوريد أو خط اليد. الأولى مصادقة بالمعرفة، والتانية والرابعة بالحيازة.',
            en: 'Biometric authentication uses physical or behavioural traits: fingerprint, iris, vein pattern or handwriting. The first is knowledge-based; the second and fourth are possession-based.',
          },
          success: { ar: 'صح! البصمة = بيومترية. +10 نقط', en: 'Correct! A fingerprint = biometric. +10 pts' },
        },
      ],
      bito: [
        { ar: 'بيومترية معناها "خصائص جسمك": بصمة، قزحية، وريد.', en: 'Biometric means "your body’s traits": fingerprint, iris, vein.' },
        { ar: 'كود SMS وكلمة المرور لمرة واحدة بتملكهم، مش خصائص فيك.', en: 'An SMS code and a one-time password are things you have, not traits of you.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك 1 (2)، ص 35', en: 'Test Your Knowledge 1 (2), p. 35' },
      blocks: [
        {
          type: 'question',
          question: {
            ar: 'صح ولا غلط: كلمة المرور لمرة واحدة ليها وقت استخدام محدد وبتبقى غير صالحة بعد انتهاء الصلاحية.',
            en: 'True or false: a one-time password has a limited time of use and becomes invalid after it expires.',
          },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. كلمة المرور لمرة واحدة بتتغير على فترات ومينفعش تُستخدم غير مرة واحدة، وبعد انتهاء صلاحيتها مبتشتغلش.',
            en: '✓. A one-time password changes at intervals and can be used only once; after it expires it stops working.',
          },
          success: { ar: 'صح! مرة واحدة ومدة محدودة. +10 نقط', en: 'Correct! Once only, and for a limited time. +10 pts' },
        },
      ],
      bito: [
        { ar: 'افتكر اسمها: "لمرة واحدة". يعني مبتفضلش صالحة.', en: 'Remember its name: "one-time". So it does not stay valid.' },
        { ar: 'كود البنك اللي بيجيلك ده مثال: بتستخدمه ويتغيّر.', en: 'The code your bank sends you is an example: you use it and it changes.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 3-2!', en: 'You finished lesson 3-2!' } },
        {
          type: 'recap',
          items: [
            { code: '4', text: { ar: 'إرشادات لكلمة المرور', en: 'password rules' } },
            { code: '3 + 2', text: { ar: 'أنواع المصادقة', en: 'kinds of authentication' } },
            { code: '5', text: { ar: 'إجراءات أمن', en: 'security measures' } },
            { code: '36ⁿ', text: { ar: 'تركيبات كلمة المرور', en: 'password combinations' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة الفرز: صنّف أمثلة المصادقة. وبعدها تحدي الكود لو حبيت.', en: 'Well done! The sorting game: sort the authentication examples. Then the code challenge if you like.' },
        { ar: 'في تحدي الكود هتكتب سطر واحد جوه لوب، والنتيجة هتبان قدامك.', en: 'In the code challenge you write one line inside a loop, and the result shows right away.' },
      ],
    },
  ],

  game: {
    kind: 'sort',
    rounds: [
      {
        title: { ar: 'أنهي نوع مصادقة؟', en: 'Which kind of authentication?' },
        source: { ar: 'جدول أنواع المصادقة، ص 34', en: 'The table of authentication kinds, p. 34' },
        bins: [
          { id: 'knowledge', label: { ar: 'بالمعرفة', en: 'Knowledge' } },
          { id: 'biometric', label: { ar: 'بيومترية', en: 'Biometric' } },
          { id: 'possession', label: { ar: 'بالحيازة', en: 'Possession' } },
        ],
        items: [
          { text: { ar: 'معرّف المستخدم وكلمة المرور', en: 'User ID and password' }, bin: 'knowledge' },
          { text: { ar: 'بصمة الإصبع', en: 'Fingerprint' }, bin: 'biometric' },
          { text: { ar: 'بطاقة ذكية', en: 'A smart card' }, bin: 'possession' },
          { text: { ar: 'رمز PIN', en: 'A PIN' }, bin: 'knowledge' },
          { text: { ar: 'القزحية', en: 'The iris' }, bin: 'biometric' },
          { text: { ar: 'كلمة مرور لمرة واحدة', en: 'A one-time password' }, bin: 'possession' },
          { text: { ar: 'نمط الوريد', en: 'Vein pattern' }, bin: 'biometric' },
          { text: { ar: 'التحقق من الرسائل النصية القصيرة', en: 'SMS verification' }, bin: 'possession' },
          { text: { ar: 'خط اليد', en: 'Handwriting' }, bin: 'biometric' },
        ],
      },
      {
        title: { ar: 'ثنائية العوامل ولا متعددة الخطوات؟', en: 'Two-factor or two-step?' },
        source: { ar: 'جدول أنواع المصادقة، ص 34', en: 'The table of authentication kinds, p. 34' },
        bins: [
          { id: 'factor', label: { ar: 'ثنائية (عاملين مختلفين)', en: 'Two-factor' } },
          { id: 'step', label: { ar: 'متعددة الخطوات', en: 'Two-step' } },
        ],
        items: [
          { text: { ar: 'رقم PIN ورمز عبر SMS', en: 'A PIN and a code by SMS' }, bin: 'factor' },
          { text: { ar: 'كلمة المرور + سؤال سري', en: 'A password + a secret question' }, bin: 'step' },
          { text: { ar: 'نوعين مختلفين من العوامل، زي المعرفة والحيازة', en: 'Two different kinds of factor, like knowledge and possession' }, bin: 'factor' },
          { text: { ar: 'خطوتين بمعلومتين من نفس نوع العامل', en: 'Two steps with two pieces of information of the same kind' }, bin: 'step' },
        ],
      },
    ],
  },

  challenge: {
    title: { ar: 'كام تركيبة لكلمة المرور؟', en: 'How many possible passwords?' },
    intro: {
      ar: 'كلمة المرور من أرقام (0–9) وحروف صغيرة (a–z)، يعني 36 اختيار لكل خانة. الدالة countPasswords بتحسب عدد التركيبات الممكنة، وناقصها سطر واحد بس.',
      en: 'A password uses digits (0–9) and small letters (a–z), so 36 choices per place. countPasswords counts the possible combinations, and it is missing just one line.',
    },
    source: { ar: 'الفكرة من: الحل (4) ص 35، وتمرين 1 (6) ص 37', en: 'Idea from: Solution (4) p. 35, and Exercise 1 (6) p. 37' },
    functionName: 'countPasswords',
    starter: {
      ar: 'function countPasswords(length) {\n  let total = 1;\n  for (let i = 0; i < length; i++) {\n    // ← اكتب هنا السطر الناقص: اضرب total في 36 (عدد الاختيارات لكل خانة)\n\n  }\n  return total;\n}\n',
      en: 'function countPasswords(length) {\n  let total = 1;\n  for (let i = 0; i < length; i++) {\n    // ← write the missing line here: multiply total by 36 (the choices per place)\n\n  }\n  return total;\n}\n',
    },
    tests: [
      { input: 1, expected: 36 },
      { input: 2, expected: 1296 },
      { input: 3, expected: 46656 },
      { input: 4, expected: 1679616 },
    ],
    banned: { pattern: 'Math\\s*\\.\\s*pow|\\*\\*', label: 'Math.pow / **' },
    hints: [
      {
        ar: 'كل لفة في اللوب بتمثّل خانة. لما تزود خانة، عدد التركيبات بيتضرب في كام؟',
        en: 'Each turn of the loop is one place. When you add a place, the number of combinations is multiplied by what?',
      },
      {
        ar: 'جوه اللوب، اضرب المتغير total في 36 وخزّن الناتج في total نفسه.',
        en: 'Inside the loop, multiply the variable total by 36 and store the result back in total.',
      },
      { ar: 'total = total * 36;', en: 'total = total * 36;' },
    ],
  },
};
