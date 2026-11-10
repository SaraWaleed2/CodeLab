import { Lesson } from '@core/models';

/**
 * Lesson 2-1 "البيانات الشخصية" — ministry book pp. 17–20.
 * Book notes:
 * - The book numbers the lesson "1-2" on its page heading (p.17); the site uses 2-1 (first lesson of unit 2),
 *   matching the unit's contents page.
 * - The terms "البيانات الأساسية" / "أرقام الهوية الشخصية" / "البيانات الشخصية الحساسة" are printed in Arabic only,
 *   so no English term is shown for them.
 * - Only questions whose wording and answer are legible and match the Key Points are used (جرب بنفسك 1 (1) (3) (5),
 *   تحدى معلوماتك 1 (1), تمرين 2 (1)). The book's true/false statements on pp.18–20 are partly garbled or have
 *   no answer key, so they are not used.
 * - "Weather information" (تمرين 2 (1)) is used as a non-personal example: it doesn't describe a person.
 */
export const LESSON_2_1: Lesson = {
  unitId: 2,
  id: '2-1',
  title: { ar: 'البيانات الشخصية', en: 'Personal Data' },
  bookPages: '17 – 20',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        {
          ar: 'أهلًا! الدرس ده عن بياناتك الشخصية: إيه هي، وإزاي القانون بيحميها.',
          en: 'Hi! This lesson is about your personal data: what it is and how the law protects it.',
        },
        {
          ar: 'قلّب الصفحات، وفي الآخر هتلعب لعبة فرز بأمثلة من الكتاب.',
          en: 'Turn the pages; at the end you play a sorting game with examples from the book.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 17', en: 'Key Points, p. 17' },
      blocks: [
        { type: 'heading', text: { ar: 'البيانات الشخصية', en: 'Personal data' }, code: '(Personal information)' },
        {
          type: 'lead',
          text: {
            ar: 'أي بيان أو معلومة بتتعلق بشخص حقيقي، وبتحدده بشكل مباشر أو غير مباشر (حتى لو بربطها ببيانات تانية).',
            en: 'Any fact about a real person that identifies them, directly or indirectly (even by linking it with other data).',
          },
        },
        {
          type: 'chips',
          items: [
            { ar: 'الاسم', en: 'Name' },
            { ar: 'العنوان', en: 'Address' },
            { ar: 'تاريخ الميلاد', en: 'Date of birth' },
            { ar: 'رقم الهاتف', en: 'Phone number' },
            { ar: 'البريد الإلكتروني', en: 'Email' },
            { ar: 'الصورة', en: 'Photo' },
            { ar: 'تسجيل الصوت أو الفيديو', en: 'Voice or video recording' },
            { ar: 'بصمة الإصبع أو قزحية العين (بيومترية)', en: 'Fingerprint or iris (biometric)' },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: لو البيان بيدل على شخص، يبقى بيانات شخصية', en: 'Remember: if a fact points to a person, it is personal data' } },
      ],
      bito: [
        {
          ar: 'اسمك لوحده بيانات شخصية. وكمان رقم تليفونك وصورتك وبصمة صباعك. أي حاجة توصّل لحد معين.',
          en: 'Your name alone is personal data. So are your phone number, photo and fingerprint. Anything that leads to a specific person.',
        },
        {
          ar: 'حتى لو معلومة مش بتقول اسمك، لكن لما تتربط بمعلومة تانية بتدل عليك، تبقى بيانات شخصية برضه.',
          en: "Even a fact that doesn't say your name counts, if linking it with another fact points to you.",
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 17', en: 'Key Points, p. 17' },
      blocks: [
        { type: 'heading', text: { ar: '3 أنواع للبيانات الشخصية', en: '3 kinds of personal data' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'البيانات الأساسية', en: 'Basic data' },
              text: { ar: 'بيانات الهوية العادية.', en: 'Everyday identity details.' },
              example: { ar: 'الاسم، العنوان، تاريخ الميلاد، النوع', en: 'Name, address, date of birth, gender' },
            },
            {
              title: { ar: 'أرقام الهوية الشخصية', en: 'Personal ID numbers' },
              text: { ar: 'أرقام موجودة في وثائق رسمية.', en: 'Numbers found on official documents.' },
              example: { ar: 'جواز السفر، رخصة القيادة، الرقم القومي', en: 'Passport, driving licence, national ID' },
            },
            {
              title: { ar: 'البيانات الحساسة', en: 'Sensitive data' },
              text: {
                ar: 'محتاجة عناية خاصة عشان متسببش تمييز أو ضرر لصاحبها.',
                en: 'Needs special care so it does not lead to discrimination or harm.',
              },
              example: {
                ar: 'العِرق، الديانة، الآراء السياسية، الانتماءات النقابية، الحالة الصحية، الحالة الاقتصادية، السجل الجنائي',
                en: 'Race, religion, political views, union membership, health, financial status, criminal record',
              },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: الحساسة محتاجة عناية أكتر من الباقي', en: 'Remember: sensitive data needs more care than the rest' } },
      ],
      bito: [
        {
          ar: 'اسمك وعنوانك: أساسية. رقم بطاقتك: رقم هوية. وحالتك الصحية: حساسة، لأنها لو اتعرفت ممكن تضايقك.',
          en: 'Your name and address: basic. Your ID number: an ID number. Your health condition: sensitive, because it could hurt you if it got out.',
        },
        {
          ar: 'اسأل نفسك: لو الحاجة دي وصلت لناس غلط، هتضرني أكتر؟ لو آه، فغالبًا حساسة.',
          en: 'Ask yourself: if this reached the wrong people, would it hurt me more? If yes, it is probably sensitive.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 17', en: 'Key Points, p. 17' },
      blocks: [
        { type: 'heading', text: { ar: 'قانون حماية البيانات الشخصية', en: 'The personal data protection law' } },
        {
          type: 'lead',
          text: {
            ar: 'القانون ده بيحدد القواعد الأساسية لأربع حاجات بتحصل في بياناتك:',
            en: 'This law sets the basic rules for four things done with your data:',
          },
        },
        {
          type: 'chips',
          items: [
            { ar: 'جمع', en: 'collecting' },
            { ar: 'معالجة', en: 'processing' },
            { ar: 'تخزين', en: 'storing' },
            { ar: 'نقل', en: 'transferring' },
          ],
        },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'القاعدة الأساسية', en: 'The basic rule' },
              text: {
                ar: 'مينفعش حد يجمع بياناتك أو يعالجها أو يشاركها إلا بعد موافقة صريحة منك.',
                en: 'Nobody may collect, process or share your data without your clear consent.',
              },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: من غير موافقتك صراحةً، مفيش', en: 'Remember: without your clear consent, no' } },
      ],
      bito: [
        {
          ar: 'لو تطبيق عاوز بياناتك، لازم يسألك الأول ويقولك هيعمل بيها إيه. ده بيحميك.',
          en: 'If an app wants your data, it must ask you first and say what it will do with it. That protects you.',
        },
        {
          ar: 'والمهم كلمة "صريحة": يعني تقول آه بوضوح، مش إنه يفترض إنك موافق.',
          en: 'The key word is "clear": you say yes openly; it cannot just assume you agreed.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 17', en: 'Key Points, p. 17' },
      blocks: [
        { type: 'heading', text: { ar: 'إمتى يجوز من غير موافقة؟', en: 'When is consent not needed?' } },
        {
          type: 'lead',
          text: {
            ar: 'فيه 5 حالات بس، بيجوز فيها توفير بياناتك الشخصية لطرف تالت من غير موافقتك:',
            en: 'Only 5 cases allow giving your personal data to a third party without your consent:',
          },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: '1 · القوانين واللوائح', en: '1 · Laws and regulations' }, text: { ar: 'لما التوفير يكون مستند لقوانين ولوائح.', en: 'When it is based on laws and regulations.' } },
            { title: { ar: '2 · الأمن القومي', en: '2 · National security' }, text: { ar: 'لما يكون لازم لحماية الأمن القومي أو مصلحة عامة.', en: 'When needed to protect national security or the public interest.' } },
            { title: { ar: '3 · حماية الشخص', en: '3 · Protecting the person' }, text: { ar: 'لما يكون ضروري لحماية حياته أو صحته أو ممتلكاته.', en: 'When necessary to protect their life, health or property.' } },
            { title: { ar: '4 · القضاء والتحقيق', en: '4 · Courts and investigations' }, text: { ar: 'لتنفيذ حكم قضائي أو بطلب من جهة تحقيق.', en: 'To carry out a court ruling or at an investigating authority’s request.' } },
            { title: { ar: '5 · العقد', en: '5 · A contract' }, text: { ar: 'لما يكون ضروري لإتمام عقد مع الشخص أو لحماية حقوقه.', en: 'When necessary to complete a contract with the person or protect their rights.' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: الأصل الموافقة، والاستثناءات 5 بس', en: 'Remember: consent is the rule, and there are only 5 exceptions' } },
      ],
      bito: [
        {
          ar: 'تخيّل إنسان في خطر ومحتاجين نوصل لأهله بسرعة. مش هننتظر موافقته، ده من حماية الحياة والصحة.',
          en: 'Imagine someone in danger and we must reach their family fast. We cannot wait for consent; that falls under protecting life and health.',
        },
        {
          ar: 'خمس حالات بس، وكلها مرتبطة بحاجة مهمة: القانون، الأمن، الحماية، القضاء، العقد.',
          en: 'Just five cases, all tied to something important: law, security, protection, courts, contracts.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 17', en: 'Key Points, p. 17' },
      blocks: [
        { type: 'heading', text: { ar: 'الخصوصية وحق الصورة', en: 'Privacy and image rights' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'الحق في الخصوصية', en: 'The right to privacy' },
              text: {
                ar: 'حق دستوري عام بيحمي حياتك الخاصة من أي تدخل غير مشروع. الدستور المصري نص عليه صراحةً (المادة 57).',
                en: 'A general constitutional right protecting your private life from unlawful interference. Egypt’s constitution states it clearly (Article 57).',
              },
            },
            {
              title: { ar: 'حقوق الصورة', en: 'Image rights' },
              text: {
                ar: 'من حقك تمنع حد يصوّرك أو يستخدم صورتك أو مظهرك من غير إذنك. ومينفعش تُنشر صورة حد إلا بموافقته.',
                en: 'You may stop anyone filming you or using your picture or appearance without permission. A person’s photo can’t be published without their consent.',
              },
            },
            {
              title: { ar: 'حقوق الدعاية', en: 'Publicity rights' },
              text: {
                ar: 'بتحمي مصالح المشاهير الاقتصادية لما حد يستغل صورهم أو سمعتهم في إعلان أو تجارة.',
                en: 'They protect celebrities’ economic interests when someone uses their image or reputation for ads or business.',
              },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: صورة حد = محتاجة إذنه', en: 'Remember: someone’s photo needs their permission' } },
      ],
      bito: [
        {
          ar: 'صورة صاحبك في الحفلة؟ اسأله قبل ما تنزلها. ده حق الصورة.',
          en: "A photo of your friend at the party? Ask before you post it. That's image rights.",
        },
        {
          ar: 'ولو ممثل مشهور صورته اتحطت في إعلان من غير علمه، ده بقى حقوق الدعاية.',
          en: "And if a famous actor's photo is used in an ad without them knowing, that's publicity rights.",
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 18', en: 'Key Points, p. 18' },
      blocks: [
        { type: 'heading', text: { ar: 'حماية البيانات في الشركات', en: 'Data protection in companies' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'سياسة الخصوصية', en: 'Privacy policy' },
              en: 'Privacy policy',
              text: { ar: 'السياسة اللي الشركة بتكتبها لتوضح إزاي بتجمع وتعالج وتحمي بيانات عملائها.', en: 'The policy a company writes to explain how it collects, processes and protects customer data.' },
            },
            {
              title: { ar: 'ترخيص مركز حماية البيانات الشخصية', en: 'Personal Data Protection Center licence' },
              en: 'Personal Data Protection Center License',
              text: { ar: 'ترخيص بتاخده الشركة من الجهة المنظمة (مركز حماية البيانات الشخصية) عشان تتأكد إنها ملتزمة بالقانون.', en: 'A licence a company gets from the regulator to confirm it follows the law.' },
            },
            {
              title: { ar: 'نظام الموافقة المسبقة', en: 'Prior approval system' },
              en: 'Prior Approval System',
              text: { ar: 'لازم موافقة صريحة ومسبقة من المستخدم قبل ما تجمع بياناته أو تعالجها أو تقدم له الخدمة.', en: 'Clear, advance consent from the user before collecting or processing data or giving the service.' },
            },
            {
              title: { ar: 'نظام الاعتراض', en: 'Objection system' },
              en: 'Objection system',
              text: { ar: 'الشركة تكمّل الخدمة وتعالج البيانات، إلا لو المستخدم اعترض صراحةً أو طلب وقف المعالجة أو الخدمة.', en: 'The company continues the service and processing unless the user clearly objects or asks to stop.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: موافقة مسبقة = اسأل الأول. اعتراض = كمّل إلا لو قال لأ', en: 'Remember: prior approval = ask first. Objection = continue unless they say no' } },
      ],
      bito: [
        {
          ar: 'نظام الموافقة المسبقة زي إنك تستأذن قبل ما تدخل أوضة حد. نظام الاعتراض زي إنك تدخل، وتخرج لو قالك "لأ".',
          en: 'Prior approval is like asking before entering someone’s room. The objection system is like entering, and leaving if they say "no".',
        },
        {
          ar: 'الأول أكتر حماية لصاحب البيانات، لأن مفيش حاجة بتحصل قبل ما يوافق.',
          en: 'The first protects the data owner more, because nothing happens before they agree.',
        },
      ],
    },
    {
      source: { ar: 'جرب بنفسك 1 (1)، ص 19', en: 'Try It Yourself 1 (1), p. 19' },
      blocks: [
        {
          type: 'question',
          question: {
            ar: 'إيه المصطلح اللي بيطلق على البيانات المتعلقة بشخص طبيعي محدد أو ممكن تحديده بشكل مباشر أو غير مباشر؟',
            en: 'Which term names data about a specific natural person, or one who can be identified directly or indirectly?',
          },
          options: [
            { ar: 'البيانات الشخصية', en: 'Personal data' },
            { ar: 'قانون حماية البيانات الشخصية', en: 'The personal data protection law' },
            { ar: 'سياسة الخصوصية', en: 'Privacy policy' },
            { ar: 'حقوق الدعاية', en: 'Publicity rights' },
          ],
          answer: 0,
          explanation: { ar: 'البيانات الشخصية (Personal information).', en: "Personal data (Personal information)." },
          success: { ar: 'صح! البيانات الشخصية. +10 نقط', en: 'Correct! Personal data. +10 pts' },
        },
      ],
      bito: [
        { ar: 'ده التعريف اللي في أول صفحة شرح: بيان بيدل على شخص حقيقي.', en: 'This is the definition from the first explainer page: a fact that points to a real person.' },
        { ar: 'القانون وسياسة الخصوصية حاجات تانية. السؤال عن "البيانات" نفسها.', en: 'The law and the privacy policy are different things. The question is about the data itself.' },
      ],
    },
    {
      source: { ar: 'جرب بنفسك 1 (3)، ص 19', en: 'Try It Yourself 1 (3), p. 19' },
      blocks: [
        {
          type: 'question',
          question: {
            ar: 'إيه المصطلح اللي بيطلق على المعلومات الرقمية الموجودة في وثائق زي جواز السفر ورخصة القيادة وبطاقة الرقم القومي؟',
            en: 'Which term names the numbers on documents like a passport, driving licence and national ID card?',
          },
          options: [
            { ar: 'البيانات الأساسية', en: 'Basic data' },
            { ar: 'أرقام الهوية الشخصية', en: 'Personal ID numbers' },
            { ar: 'البيانات الحساسة', en: 'Sensitive data' },
            { ar: 'حقوق الصورة', en: 'Image rights' },
          ],
          answer: 1,
          explanation: { ar: 'أرقام الهوية الشخصية.', en: "Personal ID numbers." },
          success: { ar: 'صح! أرقام الهوية الشخصية. +10 نقط', en: 'Correct! Personal ID numbers. +10 pts' },
        },
      ],
      bito: [
        { ar: 'افتكر الأنواع التلاتة: أساسية، أرقام هوية، حساسة. الأرقام اللي في الوثائق تنتمي لأنهي نوع؟', en: 'Remember the three kinds: basic, ID numbers, sensitive. Which one do document numbers belong to?' },
        { ar: 'الاسم والعنوان أساسية. دي أرقام مكتوبة على وثيقة رسمية.', en: 'Name and address are basic. These are numbers printed on an official document.' },
      ],
    },
    {
      source: { ar: 'جرب بنفسك 1 (5)، ص 19', en: 'Try It Yourself 1 (5), p. 19' },
      blocks: [
        {
          type: 'question',
          question: {
            ar: 'صور المشاهير ليها قيمة اقتصادية، فليهم حقوق معترف بيها بتحمي الفوائد الاقتصادية الناتجة عن شهرتهم. إيه اسم الحقوق دي؟',
            en: 'Celebrity photos have economic value, so celebrities have recognised rights protecting the income their fame brings. What are these rights called?',
          },
          options: [
            { ar: 'حقوق الصورة', en: 'Image rights' },
            { ar: 'حقوق الدعاية', en: 'Publicity rights' },
            { ar: 'الحق في الخصوصية', en: 'The right to privacy' },
            { ar: 'حقوق المؤلف', en: 'Copyright' },
          ],
          answer: 1,
          explanation: { ar: 'حقوق الدعاية. أما حقوق الصورة فبتحمي أي شخص من تصويره أو نشر صورته من غير إذن.', en: "Publicity rights. Image rights protect anyone from being filmed or having their photo published without permission." },
          success: { ar: 'صح! حقوق الدعاية. +10 نقط', en: 'Correct! Publicity rights. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الكلمة المهمة: "قيمة اقتصادية". أنهي حق بيحمي الفلوس اللي بتيجي من الشهرة؟', en: 'The key words: "economic value". Which right protects the money that comes from fame?' },
        { ar: 'حقوق الصورة بتحمي أي حد. اللي بتحمي المشاهير وفلوسهم اسمها تاني.', en: 'Image rights protect anyone. The one protecting celebrities and their income has another name.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 2-1!', en: 'You finished lesson 2-1!' } },
        {
          type: 'recap',
          items: [
            { code: '3', text: { ar: 'أساسية، رقم هوية، حساسة', en: 'basic, ID number, sensitive' } },
            { code: '✓', text: { ar: 'موافقة صريحة، و5 استثناءات', en: 'clear consent, and 5 exceptions' } },
            { code: 'Art. 57', text: { ar: 'الخصوصية في الدستور', en: 'privacy in the constitution' } },
            { code: '2 systems', text: { ar: 'موافقة مسبقة، واعتراض', en: 'prior approval, and objection' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        {
          ar: 'شاطر! دلوقتي لعبة الفرز: هتفرز أمثلة من الكتاب، بيانات شخصية ولا لأ، ومن أنهي نوع.',
          en: 'Well done! Now the sorting game: you sort examples from the book, personal data or not, and of which kind.',
        },
        {
          ar: 'في اللعبة تقدر تسحب الكارت للصندوق، أو تدوس على الصندوق.',
          en: 'In the game you can drag the card to a box, or just tap the box.',
        },
      ],
    },
  ],

  game: {
    kind: 'sort',
    rounds: [
      {
        title: { ar: 'بيانات شخصية ولا مش شخصية؟', en: 'Personal data or not?' },
        source: { ar: 'تحدى معلوماتك 1 (1) ص 18، وتمرين 2 (1) ص 20', en: 'Test Your Knowledge 1 (1) p. 18, and Exercise 2 (1) p. 20' },
        bins: [
          { id: 'personal', label: { ar: 'بيانات شخصية', en: 'Personal data' } },
          { id: 'not', label: { ar: 'مش شخصية', en: 'Not personal' } },
        ],
        items: [
          { text: { ar: 'عنوان بريد إلكتروني', en: 'An email address' }, bin: 'personal' },
          { text: { ar: 'إحصاءات عدد السكان', en: 'Population statistics' }, bin: 'not' },
          { text: { ar: 'بيانات بصمات الأصابع', en: 'Fingerprint data' }, bin: 'personal' },
          { text: { ar: 'معلومات الطقس ومعدل هطول الأمطار', en: 'Weather and rainfall information' }, bin: 'not' },
          { text: { ar: 'رقم جواز السفر', en: 'A passport number' }, bin: 'personal' },
          { text: { ar: 'الهوية الصحية', en: 'Health identity' }, bin: 'personal' },
        ],
      },
      {
        title: { ar: 'أنهي نوع من البيانات الشخصية؟', en: 'Which kind of personal data?' },
        source: { ar: 'النقاط الرئيسية، ص 17', en: 'Key Points, p. 17' },
        bins: [
          { id: 'basic', label: { ar: 'أساسية', en: 'Basic' } },
          { id: 'id', label: { ar: 'رقم هوية', en: 'ID number' } },
          { id: 'sensitive', label: { ar: 'حساسة', en: 'Sensitive' } },
        ],
        items: [
          { text: { ar: 'الاسم', en: 'Name' }, bin: 'basic' },
          { text: { ar: 'الحالة الصحية', en: 'Health condition' }, bin: 'sensitive' },
          { text: { ar: 'رقم جواز السفر', en: 'Passport number' }, bin: 'id' },
          { text: { ar: 'تاريخ الميلاد', en: 'Date of birth' }, bin: 'basic' },
          { text: { ar: 'السجل الجنائي', en: 'Criminal record' }, bin: 'sensitive' },
          { text: { ar: 'رخصة القيادة', en: 'Driving licence number' }, bin: 'id' },
          { text: { ar: 'العنوان', en: 'Address' }, bin: 'basic' },
          { text: { ar: 'الديانة', en: 'Religion' }, bin: 'sensitive' },
          { text: { ar: 'الرقم القومي', en: 'National ID number' }, bin: 'id' },
          { text: { ar: 'الآراء السياسية', en: 'Political views' }, bin: 'sensitive' },
        ],
      },
    ],
  },
};
