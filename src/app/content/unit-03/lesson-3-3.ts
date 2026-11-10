import { Lesson } from '@core/models';

/**
 * Lesson 3-3 "التهديدات والتدابير المضادة في أمن المعلومات (٣)" — ministry book pp. 38–40.
 * Book notes:
 * - p.38 prints "Dumper diving"; the real term is "Dumpster diving", written correctly here.
 * - Skimming is translated "التزوير" in the book; the card explains what it really is (copying card data).
 * - Exercises on p.40 have no answer key; the answers used here follow the Key Points on p.38.
 */
export const LESSON_3_3: Lesson = {
  unitId: 3,
  id: '3-3',
  title: { ar: 'التهديدات والتدابير المضادة في أمن المعلومات (٣)', en: 'Information Security Threats and Countermeasures (3)' },
  bookPages: '38 – 40',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! الدرس ده عن الحيل اللي بيستخدمها المحتالين، وإزاي المؤسسات بتحمي نفسها بسياسة أمن.', en: 'Hi! This lesson is about tricks scammers use, and how organisations protect themselves with a security policy.' },
        { ar: 'في الآخر لعبة مواقف: إنت تحكم الموقف ده صح ولا فيه خطر.', en: 'At the end there is a situations game: you judge whether each one is safe or risky.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ)، ص 38', en: 'Key Points (a), p. 38' },
      blocks: [
        { type: 'heading', text: { ar: 'الاحتيال بالفواتير', en: 'Billing fraud' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'احتيال فاتورة مزيفة', en: 'Fraudulent billing' },
              en: 'Fraudulent billing',
              text: { ar: 'احتيال بيتم فيه إصدار فاتورة لشخص مقابل خدمة أو سلعة هو ماستخدمهاش، بهدف الحصول على فلوس.', en: 'A scam where a person is sent an invoice for a service or item they never used, to get money.' },
            },
            {
              title: { ar: 'الاحتيال بنقرة واحدة', en: 'One-click fraud' },
              en: 'One-click fraud',
              text: { ar: 'بتضغط على رابط (URL) في موقع أو بريد إلكتروني، فتظهر رسالة تقول إنك اشتركت في خدمة وبتطلب منك تدفع.', en: 'You click a link (URL) on a site or in an email, and a message claims you subscribed to a service and demands payment.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: فاتورة على حاجة مستخدمتهاش = احتيال', en: 'Remember: a bill for something you never used = fraud' } },
      ],
      bito: [
        { ar: 'لو جالك طلب دفع على حاجة معملتهاش، ماتدفعش وماتضغطش على الرابط.', en: 'If you get a payment request for something you never did, do not pay and do not click the link.' },
        { ar: 'النقرة الواحدة بس هي اللي بيستخدموها عشان يقولوا إنك وافقت.', en: 'That single click is what they use to claim you agreed.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب)، ص 38', en: 'Key Points (b), p. 38' },
      blocks: [
        { type: 'heading', text: { ar: 'الحصول على المعلومات بحيلة', en: 'Getting information by trickery' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'التصيّد', en: 'Phishing' },
              en: 'Phishing',
              text: { ar: 'بريد أو موقع مزيف بيتظاهر إنه من مؤسسة مالية أو هيئة عامة، عشان يسرق معلوماتك الشخصية زي رقم PIN.', en: 'A fake email or site pretending to be from a financial or public body, to steal personal details like your PIN.' },
            },
            {
              title: { ar: 'الهندسة الاجتماعية', en: 'Social engineering' },
              en: 'Social engineering',
              text: { ar: 'الحصول على معلومات عن طريق استغلال نقط ضعف الإنسان، مش ثغرات الأجهزة.', en: 'Getting information by exploiting human weaknesses, not computer holes.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: تصيّد = طُعم مزيف · هندسة اجتماعية = خداع الإنسان', en: 'Remember: phishing = fake bait · social engineering = tricking the person' } },
      ],
      bito: [
        { ar: 'التصيّد زي الصيد: بيرموا طُعم (رسالة شكلها حقيقي) ويستنوا حد يعضّ.', en: 'Phishing is like fishing: they throw bait (a real-looking message) and wait for a bite.' },
        { ar: 'البنك الحقيقي مبيطلبش PIN بالبريد أبدًا.', en: 'A real bank never asks for your PIN by email.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب)، ص 38', en: 'Key Points (b), p. 38' },
      blocks: [
        { type: 'heading', text: { ar: 'ثلاثة أشكال للهندسة الاجتماعية', en: 'Three kinds of social engineering' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'انتحال الشخصية', en: 'Impersonation' },
              en: 'Impersonation',
              text: { ar: 'يتصل بيك شخص وبيقول إنه حد تاني (زي موظف بنك) عشان ياخد معلوماتك.', en: 'Someone calls and claims to be another person (like a bank clerk) to get your information.' },
            },
            {
              title: { ar: 'التلصص من الكتف', en: 'Shoulder surfing' },
              en: 'Shoulder surfing',
              text: { ar: 'حد بيتفرج من ورا كتفك على شاشتك أو لوحة المفاتيح عشان يعرف كلمة المرور أو PIN.', en: 'Someone watches over your shoulder at your screen or keyboard to learn a password or PIN.' },
            },
            {
              title: { ar: 'البحث في المهملات', en: 'Dumpster diving' },
              en: 'Dumpster diving',
              text: { ar: 'يدوّر في الزبالة عشان يلاقي معلومات سرية اتخلص منها صاحبها.', en: 'Searching through the trash for secret information someone threw away.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: انتحال · تلصص · مهملات', en: 'Remember: pretend · peek · trash' } },
      ],
      bito: [
        { ar: 'الورق اللي فيه بيانات؟ قطّعه قبل ما ترميه.', en: 'Paper with personal data? Shred it before you throw it away.' },
        { ar: 'وإنت بتكتب الـ PIN في ATM، غطّي لوحة الأرقام بإيدك.', en: 'When you type your PIN at an ATM, cover the keypad with your hand.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب)، ص 38', en: 'Key Points (b), p. 38' },
      blocks: [
        { type: 'heading', text: { ar: 'نسخ بيانات البطاقة', en: 'Copying card data' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'استنساخ البطاقة', en: 'Skimming' },
              en: 'Skimming',
              text: { ar: 'جهاز غير قانوني بيقرأ بيانات بطاقة الائتمان أو الصراف الآلي، وبتتستخدم البيانات بعدين عشان يعملوا بطاقة مزورة.', en: 'An illegal device reads the data from a credit or ATM card, and the data is later used to make a forged card.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: راقب أي جهاز غريب متركّب على الماكينة', en: 'Remember: watch for odd devices attached to the machine' } },
      ],
      bito: [
        { ar: 'الكتاب ترجمها "التزوير"، لكن اللي بيحصل فعلًا إنهم بينسخوا بيانات الكارت.', en: 'The book translates it as forgery, but what really happens is that your card data gets copied.' },
        { ar: 'لو ماكينة الـ ATM شكلها فيه حاجة متركّبة زيادة، ماتستخدمهاش.', en: 'If an ATM looks like it has something extra attached, do not use it.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ت)، ص 38', en: 'Key Points (c), p. 38' },
      blocks: [
        { type: 'heading', text: { ar: 'سياسة أمن المعلومات', en: 'Information security policy' } },
        {
          type: 'lead',
          text: { ar: 'مجموعة من القواعد والإرشادات الأساسية اللي بتحافظ على أمن معلومات المؤسسة وبتحميها. بتتبني على 3 طبقات:', en: 'A set of basic rules and guidelines that keep an organisation’s information safe. It has 3 layers:' },
        },
        {
          type: 'pyramid',
          levels: [
            { title: { ar: 'السياسة الأساسية', en: 'Basic policy' }, text: { ar: 'تصف المبادئ الأساسية والإعلانات المتعلقة بأمن المعلومات الخاصة بالمنظمة.', en: 'Describes the basic principles and statements about the organisation’s information security.' } },
            { title: { ar: 'معايير الأمان', en: 'Security standards' }, text: { ar: 'تحدد القواعد اللازمة لتطبيق السياسة الأساسية عمليًا.', en: 'Set the rules needed to put the basic policy into practice.' } },
            { title: { ar: 'إجراءات التشغيل والتنفيذ', en: 'Operating and implementation procedures' }, text: { ar: 'تحدد الإجراءات اللازمة بناءً على الجمهور المستهدف والغرض المقصود.', en: 'Define the procedures needed, based on the target audience and purpose.' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: مبدأ ← قواعد ← خطوات تنفيذ', en: 'Remember: principle → rules → steps' } },
      ],
      bito: [
        { ar: 'فكّر فيها زي المدرسة: قانون عام، بعدين لوائح، بعدين تعليمات اليوم.', en: 'Think of a school: a general law, then regulations, then daily instructions.' },
        { ar: 'كل طبقة بتنزل أقرب للتفاصيل العملية.', en: 'Each layer comes closer to the practical details.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 39', en: 'Test Your Knowledge (1), p. 39' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'اختر الخيار اللي بيوصف التصيّد (Phishing) بشكل صحيح.', en: 'Choose the option that correctly describes phishing.' },
          options: [
            { ar: 'برنامج بيقرّص بيانات من الكمبيوتر وبيرسلها لطرف تالت', en: 'A program that takes data from the computer and sends it to a third party' },
            { ar: 'بريد إلكتروني بيتظاهر إنه من مؤسسة مالية لإغراء الشخص بالدخول على موقع مزيف والحصول على PIN أو معلومات شخصية', en: 'An email pretending to come from a financial institution to lure a person to a fake site and get a PIN or personal details' },
            { ar: 'الضغط على رابط بيظهر إعلان فيه عقد وطلب دفع كبير', en: 'Clicking a link that shows an ad with a contract and a big payment demand' },
            { ar: 'فاتورة اتبعتت لخدمة مستخدمتهاش', en: 'A bill sent for a service you did not use' },
          ],
          answer: 1,
          explanation: {
            ar: 'التصيّد بريد أو موقع مزيف بيتظاهر إنه من جهة موثوقة عشان يسرق معلوماتك. الأولى برنامج تجسس، والتالتة احتيال بنقرة واحدة، والرابعة احتيال فاتورة.',
            en: 'Phishing is a fake email or site posing as a trusted body to steal your details. The first is spyware, the third is one-click fraud, the fourth is billing fraud.',
          },
          success: { ar: 'صح! طُعم مزيف عشان معلوماتك. +10 نقط', en: 'Correct! Fake bait for your details. +10 pts' },
        },
      ],
      bito: [
        { ar: 'دوّر على الكلمة المفتاحية: "بيتظاهر إنه من جهة موثوقة".', en: 'Look for the key phrase: "pretending to be a trusted body".' },
        { ar: 'اللي بيقرص بيانات ويبعتها ده برنامج تجسس مش تصيّد.', en: 'A program taking data and sending it is spyware, not phishing.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب)، ص 38', en: 'Key Points (b), p. 38' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: البحث في المهملات (Dumpster diving) هو الحصول على معلومات سرية اتخلص منها صاحبها.', en: 'True or false: dumpster diving is getting secret information that its owner threw away.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. البحث في المهملات شكل من الهندسة الاجتماعية، بيدوّر فيه المحتال على معلومات سرية في الزبالة.',
            en: '✓. Dumpster diving is a form of social engineering where the scammer searches the trash for secret information.',
          },
          success: { ar: 'صح! الزبالة ممكن تبقى منجم معلومات. +10 نقط', en: 'Correct! Trash can be a goldmine of information. +10 pts' },
        },
      ],
      bito: [
        { ar: 'سؤال سهل لو افتكرت: انتحال، تلصص، مهملات.', en: 'Easy if you remember: impersonation, peeking, trash.' },
        { ar: 'عشان كده بنقطّع الورق المهم قبل ما نرميه.', en: 'That is why we shred important paper before throwing it out.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1) ت، ص 39', en: 'Test Your Knowledge (1) c, p. 39' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه المصطلح للضغط على رابط (URL) في موقع أو بريد فيظهر إعلان فيه عقد وطلب دفع كبير؟', en: 'What is the term for clicking a link (URL) on a site or email and getting an ad with a contract and a big payment demand?' },
          options: [
            { ar: 'احتيال فاتورة مزيفة (Fraudulent billing)', en: 'Fraudulent billing' },
            { ar: 'الاحتيال بنقرة واحدة (One-click fraud)', en: 'One-click fraud' },
            { ar: 'التصيّد (Phishing)', en: 'Phishing' },
            { ar: 'استنساخ البطاقة (Skimming)', en: 'Skimming' },
          ],
          answer: 1,
          explanation: {
            ar: 'الاحتيال بنقرة واحدة: بتضغط على رابط فتظهر رسالة إنك اشتركت في خدمة وعليك دفع. احتيال الفاتورة بيبعت فاتورة من غير نقر.',
            en: 'One-click fraud: you click a link and a message says you subscribed and must pay. Billing fraud just sends a bill with no click.',
          },
          success: { ar: 'صح! نقرة واحدة = كل المشكلة. +10 نقط', en: 'Correct! One click = the whole problem. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الكلمة المفتاحية في السؤال: "الضغط على رابط".', en: 'The key phrase in the question: "clicking a link".' },
        { ar: 'اسم المصطلح نفسه بيدّيك التلميح.', en: 'The term’s own name gives it away.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 3-3!', en: 'You finished lesson 3-3!' } },
        {
          type: 'recap',
          items: [
            { code: '2', text: { ar: 'احتيال بالفواتير', en: 'billing frauds' } },
            { code: '3', text: { ar: 'هندسة اجتماعية', en: 'social engineering kinds' } },
            { code: '3', text: { ar: 'طبقات سياسة الأمن', en: 'security-policy layers' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! جرّب لعبة المواقف: احكم على كل موقف.', en: 'Well done! Try the situations game: judge each situation.' },
        { ar: 'كل موقف معاه السبب من الكتاب، فاقرأه لو غلطت.', en: 'Each situation comes with the book’s reason, so read it if you slip.' },
      ],
    },
  ],

  game: {
    kind: 'scenarios',
    items: [
      {
        text: { ar: 'جالك إيميل شكله من بنكك بيطلب رقم الـ PIN عشان "تحديث الحساب". تبعته.', en: 'You get an email that looks like your bank’s asking for your PIN to “update your account”. You send it.' },
        ok: false,
        why: { ar: 'ده تصيّد: بريد مزيف بيتظاهر إنه من مؤسسة مالية عشان ياخد PIN.', en: 'This is phishing: a fake email posing as a financial body to get your PIN.' },
        source: { ar: 'ص 38 (ب-1)', en: 'p. 38 (b-1)' },
      },
      {
        text: { ar: 'بتقطّع الورق اللي عليه بيانات شخصية قبل ما ترميه.', en: 'You shred paper with personal data before throwing it away.' },
        ok: true,
        why: { ar: 'كده بتمنع البحث في المهملات (Dumpster diving).', en: 'That prevents dumpster diving.' },
        source: { ar: 'ص 38 (ب-2-3)', en: 'p. 38 (b-2-3)' },
      },
      {
        text: { ar: 'ظهرتلك رسالة "اشتركت في خدمة، ادفع دلوقتي" بعد ما ضغطت على رابط. فدفعت.', en: 'After clicking a link, a message says “you subscribed, pay now”. You pay.' },
        ok: false,
        why: { ar: 'ده احتيال بنقرة واحدة: ما اشتركتش فعلًا.', en: 'That is one-click fraud: you never really subscribed.' },
        source: { ar: 'ص 38 (أ-2)', en: 'p. 38 (a-2)' },
      },
      {
        text: { ar: 'بتغطّي لوحة الأرقام بإيدك وإنت بتكتب الـ PIN في ماكينة الصراف.', en: 'You cover the keypad with your hand while typing your PIN at the ATM.' },
        ok: true,
        why: { ar: 'كده بتمنع التلصص من الكتف (Shoulder surfing).', en: 'That prevents shoulder surfing.' },
        source: { ar: 'ص 38 (ب-2-2)', en: 'p. 38 (b-2-2)' },
      },
      {
        text: { ar: 'اتصل بيك شخص بيقول إنه من البنك وطلب منك كلمة المرور. أديتها له.', en: 'Someone calls claiming to be from the bank and asks for your password. You give it.' },
        ok: false,
        why: { ar: 'ده انتحال شخصية (Impersonation) وهو شكل من الهندسة الاجتماعية.', en: 'That is impersonation, a form of social engineering.' },
        source: { ar: 'ص 38 (ب-2-1)', en: 'p. 38 (b-2-1)' },
      },
      {
        text: { ar: 'جاتلك فاتورة على خدمة مستخدمتهاش أبدًا، فتجاهلتها وبلّغت الجهة.', en: 'You get a bill for a service you never used, so you ignore it and report it.' },
        ok: true,
        why: { ar: 'ده احتيال فاتورة مزيفة، والتصرف الصح إنك ماتدفعش.', en: 'It is fraudulent billing, and not paying is the right move.' },
        source: { ar: 'ص 38 (أ-1)', en: 'p. 38 (a-1)' },
      },
      {
        text: { ar: 'لقيت ماكينة صراف فيها جهاز متركّب شكله غريب، فاستخدمتها عادي.', en: 'You find an ATM with an odd-looking device attached, and use it anyway.' },
        ok: false,
        why: { ar: 'ده ممكن يكون Skimming: جهاز بينسخ بيانات الكارت.', en: 'It could be skimming: a device copying card data.' },
        source: { ar: 'ص 38 (ب-2-4)', en: 'p. 38 (b-2-4)' },
      },
      {
        text: { ar: 'مؤسستك بتكتب مبادئ أمن أساسية، وبعدها قواعد، وبعدها خطوات تنفيذ.', en: 'Your organisation writes basic security principles, then rules, then implementation steps.' },
        ok: true,
        why: { ar: 'ده بالظبط هرم سياسة أمن المعلومات: سياسة أساسية ← معايير ← إجراءات.', en: 'That is exactly the security-policy pyramid: basic policy → standards → procedures.' },
        source: { ar: 'ص 38 (ت)', en: 'p. 38 (c)' },
      },
      {
        text: { ar: 'بتفتح موقع بنكك بكتابة العنوان بنفسك، مش من رابط في إيميل.', en: 'You open your bank’s site by typing the address yourself, not from an email link.' },
        ok: true,
        why: { ar: 'كده بتتجنب مواقع التصيّد المزيفة.', en: 'That avoids fake phishing sites.' },
        source: { ar: 'ص 38 (ب-1)', en: 'p. 38 (b-1)' },
      },
    ],
  },
};
