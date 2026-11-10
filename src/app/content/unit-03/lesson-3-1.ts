import { Lesson } from '@core/models';

/**
 * Lesson 3-1 "تهديدات وإجراءات مواجهة أمن المعلومات (١)" — ministry book pp. 30–33.
 * Book notes:
 * - The lesson's title is written differently on the unit cover (p.29) and in the contents; the unit cover's is used.
 * - "الاختراق" is defined as Cracking on p.30, but p.33 lists "قرصنة (Cracking)" and "اختراق (Hacking)" as options;
 *   the site follows p.30.
 * - The keylogger and adware appear as bullets under spyware (p.30); they are shown as its kinds.
 * - "جرب بنفسك 1" (p.33) and the exercises have no answer key. The sorting game's mapping follows the definitions
 *   of confidentiality / integrity / availability (p.30), and the first question's answer is given in "الشرح" (p.31).
 */
export const LESSON_3_1: Lesson = {
  unitId: 3,
  id: '3-1',
  title: { ar: 'تهديدات وإجراءات مواجهة أمن المعلومات (١)', en: 'Information Security Threats and Responses (1)' },
  bookPages: '30 – 33',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        {
          ar: 'أهلًا! ده أول درس في أمن المعلومات: إيه اللي بنحميه، وإيه اللي بيهدده.',
          en: 'Hi! This is the first lesson on information security: what we protect, and what threatens it.',
        },
        {
          ar: 'في الآخر هتلعب لعبة فرز: كل موقف بيتأثر بأنهي عنصر أمن، وأنهي برنامج ضار هو.',
          en: 'At the end you play a sorting game: which security element each situation affects, and which malware is which.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 30', en: 'Key Points, p. 30' },
      blocks: [
        { type: 'heading', text: { ar: 'أمن المعلومات', en: 'Information security' }, code: '(Information security)' },
        {
          type: 'lead',
          text: {
            ar: 'هو إدارة المعلومات بشكل صحيح والحفاظ عليها آمنة. وليه 3 عناصر أساسية:',
            en: 'Managing information properly and keeping it safe. It has 3 basic elements:',
          },
        },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'السرية', en: 'Confidentiality' },
              en: 'Confidentiality',
              text: { ar: 'بس الأشخاص المصرّح لهم يقدروا يوصلوا للمعلومات.', en: 'Only authorised people can reach the information.' },
            },
            {
              title: { ar: 'السلامة', en: 'Integrity' },
              en: 'Integrity',
              text: { ar: 'المعلومات متتدمرش، ومحدش يعبث بيها أو يمحيها.', en: 'The information is not destroyed, tampered with or erased.' },
            },
            {
              title: { ar: 'التوافرية', en: 'Availability' },
              en: 'Availability',
              text: { ar: 'تقدر توصل للمعلومات في أي وقت لما تحتاجها.', en: 'You can reach the information any time you need it.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: سرية = مين يشوف · سلامة = متتغيّرش · توافرية = موجودة وقت الحاجة', en: 'Remember: confidentiality = who sees · integrity = unchanged · availability = there when needed' } },
      ],
      bito: [
        {
          ar: 'فكّر في موبايلك: الباسورد بيحمي السرية. صورك اللي محدش بيمسحها بتحفظ السلامة. وإنه يفتح وقت ما تحتاجه هي التوافرية.',
          en: 'Think of your phone: the password protects confidentiality. Your photos staying untouched is integrity. It opening when you need it is availability.',
        },
        {
          ar: 'لو حد قرا رسايلك من غير إذنك، السرية اتكسرت. لو حد غيّر في رسالة، السلامة اتكسرت. ولو التطبيق وقع، التوافرية راحت.',
          en: 'If someone reads your messages without permission, confidentiality is broken. If they change one, integrity is broken. If the app crashes, availability is gone.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 30', en: 'Key Points, p. 30' },
      blocks: [
        { type: 'heading', text: { ar: 'الوصول غير المصرّح به والاختراق', en: 'Unauthorised access and cracking' } },
        {
          type: 'cards',
          items: [
            {
              tone: 'no',
              title: { ar: 'الوصول غير المصرّح به', en: 'Unauthorised access' },
              en: 'Unauthorized access',
              text: { ar: 'الوصول لنظام بشكل غير قانوني عشان تتلاعب بالبيانات أو تمحيها أو تسرقها.', en: 'Getting into a system illegally to tamper with, erase or steal data.' },
            },
            {
              tone: 'no',
              title: { ar: 'الاختراق', en: 'Cracking' },
              en: 'Cracking',
              text: { ar: 'نفس الفعل: الوصول لنظام بشكل غير قانوني. والشخص اللي بيعمل كده اسمه المخترق (cracker).', en: 'The same act: getting into a system illegally. The person doing it is called a cracker.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: دخول من غير إذن = تهديد، وفاعله اسمه cracker', en: 'Remember: entering without permission = a threat, and the person is a cracker' } },
      ],
      bito: [
        {
          ar: 'تخيّل حد عرف باسورد حساب صاحبك ودخل بيه من غير علمه. ده وصول غير مصرّح به.',
          en: "Imagine someone learning your friend's password and logging in without them knowing. That is unauthorised access.",
        },
        {
          ar: 'الكتاب بيسمّي الشخص اللي بيعمل كده "المخترق"، وبالإنجليزي cracker.',
          en: 'The book calls the person doing this "the cracker".',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 30', en: 'Key Points, p. 30' },
      blocks: [
        { type: 'heading', text: { ar: 'البرمجيات الخبيثة (1)', en: 'Malware (1)' }, code: '(Malware)' },
        {
          type: 'lead',
          text: {
            ar: 'مصطلح عام للبرامج الضارة المصمّمة لإلحاق الضرر بأجهزة الكمبيوتر. والإصابة ممكن تيجي من:',
            en: 'A general term for harmful programs designed to damage computers. Infection can come through:',
          },
        },
        {
          type: 'chips',
          items: [
            { ar: 'مواقع الويب', en: 'Websites' },
            { ar: 'مرفقات البريد الإلكتروني', en: 'Email attachments' },
            { ar: 'أقراص USB', en: 'USB drives' },
            { ar: 'الشبكات', en: 'Networks' },
          ],
        },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'فيروس الكمبيوتر', en: 'Computer virus' },
              en: 'Computer virus',
              text: { ar: 'برنامج مصمم لإحداث ضرر بشكل متعمد، زي تدمير البيانات أو البرامج.', en: 'A program built to cause deliberate harm, like destroying data or programs.' },
            },
            {
              title: { ar: 'حصان طروادة', en: 'Trojan horse' },
              en: 'Trojan horse',
              text: { ar: 'برنامج متنكر على إنه برنامج شرعي، بيتسلل للنظام ويبدأ الهجمات بهدوء.', en: 'A program disguised as a legitimate one that slips in and quietly starts attacking.' },
            },
            {
              title: { ar: 'الدودة', en: 'Worm' },
              en: 'Worm',
              text: { ar: 'برنامج بينسخ نفسه وبينتشر عبر الإنترنت، فبيوسّع نطاق الإصابة.', en: 'A program that copies itself and spreads over the internet, widening the infection.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: فيروس يخرّب · طروادة تتنكّر · دودة تنتشر', en: 'Remember: virus damages · trojan disguises · worm spreads' } },
      ],
      bito: [
        {
          ar: 'حصان طروادة زي هدية شكلها حلو وجواها حاجة وحشة. إنت اللي بتفتحها بإيدك.',
          en: 'A trojan horse is like a nice-looking gift with something bad inside. You open it yourself.',
        },
        {
          ar: 'والدودة بتنسخ نفسها وتنتقل من جهاز لجهاز زي العدوى.',
          en: 'A worm copies itself and jumps from device to device like an infection.',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 30', en: 'Key Points, p. 30' },
      blocks: [
        { type: 'heading', text: { ar: 'البرمجيات الخبيثة (2)', en: 'Malware (2)' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'برنامج التجسس', en: 'Spyware' },
              en: 'Spyware',
              text: { ar: 'برنامج بيجمع معلوماتك الشخصية من غير علمك ويبعتها لأطراف تالتة.', en: 'A program that collects your personal information without your knowledge and sends it to third parties.' },
            },
            {
              title: { ar: 'مسجل لوحة المفاتيح', en: 'Keylogger' },
              en: 'Keylogger',
              text: { ar: 'نوع من التجسس: بيراقب ويسجل كل ضغطة على الكيبورد.', en: 'A kind of spyware: it watches and records every key you press.' },
            },
            {
              title: { ar: 'برنامج الإعلانات', en: 'Adware' },
              en: 'Adware',
              text: { ar: 'برنامج بيعرض إعلانات غير مرغوب فيها من غير موافقتك.', en: 'A program that shows unwanted ads without your approval.' },
            },
            {
              tone: 'no',
              title: { ar: 'برنامج الفدية', en: 'Ransomware' },
              en: 'Ransomware',
              text: { ar: 'برنامج بيخلّي بياناتك مش متاحة ويطلب فدية عشان ترجعلك.', en: 'A program that makes your data unreachable and demands a ransom to restore it.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: تجسس يسرق · فدية تقفل وتطلب فلوس', en: 'Remember: spyware steals · ransomware locks and demands money' } },
      ],
      bito: [
        {
          ar: 'الكيلوجر بيسجل كل ضغطة، يعني ممكن يشوف أي حاجة بتكتبها.',
          en: 'A keylogger records every press, so it could see anything you type.',
        },
        {
          ar: 'برنامج الفدية زي حد يقفل باب بيتك عليك ويقولك ادفع الأول.',
          en: 'Ransomware is like someone locking your front door and saying "pay first".',
        },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 30', en: 'Key Points, p. 30' },
      blocks: [
        { type: 'heading', text: { ar: 'الجريمة الإلكترونية', en: 'Cybercrime' }, code: '(Cybercrime)' },
        {
          type: 'lead',
          text: { ar: 'أفعال إجرامية بتتعمل عبر شبكات الكمبيوتر. وليها 3 أشكال:', en: 'Criminal acts carried out over computer networks. They take 3 forms:' },
        },
        {
          type: 'cards',
          items: [
            {
              tone: 'no',
              title: { ar: 'انتهاك قانون الوصول غير المصرّح به', en: 'Breaking the unauthorised-access law' },
              text: { ar: 'الدخول غير القانوني لكمبيوتر باستخدام هوية مستخدم أو كلمة مرور شخص تاني.', en: "Illegally entering a computer using someone else's user ID or password." },
            },
            {
              tone: 'no',
              title: { ar: 'جرائم تخص بيانات الكمبيوتر', en: 'Crimes involving computer data' },
              text: { ar: 'العبث بالبيانات المخزنة أو التلاعب غير المصرّح به بالأجهزة.', en: 'Tampering with stored data, or unauthorised interference with devices.' },
            },
            {
              tone: 'no',
              title: { ar: 'جرائم قائمة على الشبكة', en: 'Network-based crimes' },
              text: { ar: 'جرائم بتتعمل باستخدام الشبكات، زي الاحتيال والتشهير وانتهاك حقوق المؤلف.', en: 'Crimes committed using networks, such as fraud, defamation and copyright infringement.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: جريمة إلكترونية = جريمة بتتم بالكمبيوتر والشبكات', en: 'Remember: cybercrime = crime committed with computers and networks' } },
      ],
      bito: [
        {
          ar: 'لاحظ إن انتهاك حقوق المؤلف اللي اتعلمناه في الوحدة 2 ممكن يبقى جريمة إلكترونية لو اتعمل على الشبكة.',
          en: 'Notice that the copyright infringement from unit 2 can be a cybercrime when done over a network.',
        },
        {
          ar: 'الجريمة الإلكترونية ملهاش شكل واحد: ممكن دخول غير قانوني، أو عبث ببيانات، أو احتيال على الشبكة.',
          en: 'Cybercrime has no single shape: it can be illegal entry, tampering with data, or fraud on a network.',
        },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك 1 (1)، ص 31', en: 'Test Your Knowledge 1 (1), p. 31' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'أنهي حالة من دي بتعرّض التوافرية (Availability) للخطر؟', en: 'Which of these puts availability at risk?' },
          options: [
            { ar: 'هجوم إلكتروني تسبب في تعطيل موقع ويب', en: 'A cyber attack took a website down' },
            { ar: 'اتدخلت بيانات غلط بسبب خطأ في الكتابة', en: 'Wrong data was entered because of a typing mistake' },
            { ar: 'اتسرّبت معلومات شخصية بسبب برنامج خبيث على الكمبيوتر', en: 'Personal information leaked because of malware on a computer' },
          ],
          answer: 0,
          explanation: {
            ar: 'التوافرية معناها إنك توصل للمعلومات وقت الحاجة، وموقع معطّل مبيتوصلش ليه. الخطأ في الكتابة بيخص السلامة، والتسريب بيخص السرية.',
            en: 'Availability means you can reach the information when needed, and a downed website cannot be reached. A typing mistake affects integrity, and a leak affects confidentiality.',
          },
          success: { ar: 'صح! الهجوم عطّل الموقع فالتوافرية راحت. +10 نقط', en: 'Correct! The attack took the site down, so availability was lost. +10 pts' },
        },
      ],
      bito: [
        { ar: 'افتكر معنى التوافرية: المعلومة موجودة وتقدر توصلها في أي وقت.', en: 'Remember what availability means: the information is there and you can reach it any time.' },
        { ar: 'اسأل نفسك: أنهي حالة بتمنعك توصل للمعلومة؟', en: 'Ask yourself: which case stops you from reaching the information?' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك 1 (2) ت، ص 31', en: 'Test Your Knowledge 1 (2) c, p. 31' },
      blocks: [
        {
          type: 'question',
          question: {
            ar: 'صح ولا غلط: مشاركة هوية مستخدم وكلمة مرور صديقك مع شخص تاني من غير إذن صديقك تُعتبر انتهاكًا لقانون الوصول غير المصرّح به.',
            en: "True or false: sharing a friend's user ID and password with someone else without the friend's permission breaks the unauthorised-access law.",
          },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. استخدام هوية مستخدم وكلمة مرور حد من غير إذنه للدخول على كمبيوتر انتهاك، ومشاركتهم مع شخص تاني من غير إذن صاحبهم كمان.',
            en: "✓. Using someone's user ID and password without permission to get into a computer is a violation, and so is sharing them with another person without the owner's permission.",
          },
          success: { ar: 'صح! ده انتهاك. +10 نقط', en: 'Correct! That is a violation. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الباسورد بتاعك مش ملكك إنت بس في الاستخدام: صاحبه هو اللي بيقرر مين يستخدمه.', en: "A password's owner decides who may use it." },
        { ar: 'استخدام الهوية والباسورد من غير إذن صاحبهم هو الانتهاك. المشاركة من غير إذن زيها.', en: "Using the ID and password without the owner's permission is the violation. Sharing without permission is the same." },
      ],
    },
    {
      source: { ar: 'جرب بنفسك 2 (1) [4]، ص 33', en: 'Try It Yourself 2 (1) [4], p. 33' },
      blocks: [
        {
          type: 'question',
          question: {
            ar: 'إيه المصطلح اللي بيطلق على البرامج الضارة اللي بتشمل فيروسات الكمبيوتر وحصان طروادة وما شابه؟',
            en: 'Which term names the harmful programs that include computer viruses, trojan horses and the like?',
          },
          options: [
            { ar: 'البرمجيات الخبيثة (Malware)', en: 'Malware' },
            { ar: 'الاختراق (Cracking)', en: 'Cracking' },
            { ar: 'برنامج التجسس (Spyware)', en: 'Spyware' },
            { ar: 'برنامج الإعلانات (Adware)', en: 'Adware' },
          ],
          answer: 0,
          explanation: {
            ar: 'البرمجيات الخبيثة (Malware) هي المصطلح العام لكل البرامج الضارة، ومنها الفيروس وحصان طروادة والدودة.',
            en: 'Malware is the general term for all harmful programs, including viruses, trojan horses and worms.',
          },
          success: { ar: 'صح! Malware. +10 نقط', en: 'Correct! Malware. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الكلمة العامة اللي بتغطي كل البرامج الضارة. الباقي أنواع جواها.', en: 'The general word covering every harmful program. The others are kinds inside it.' },
        { ar: 'التجسس والإعلانات أنواع جوّه الـ Malware، مش هما المصطلح العام.', en: 'Spyware and adware are kinds inside malware, not the umbrella term.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 3-1!', en: 'You finished lesson 3-1!' } },
        {
          type: 'recap',
          items: [
            { code: '3', text: { ar: 'سرية، سلامة، توافرية', en: 'confidentiality, integrity, availability' } },
            { code: 'cracker', text: { ar: 'اللي بيخترق', en: 'the one who breaks in' } },
            { code: 'Malware', text: { ar: 'فيروس، طروادة، دودة، تجسس، فدية', en: 'virus, trojan, worm, spyware, ransomware' } },
            { code: '3', text: { ar: 'أشكال للجريمة الإلكترونية', en: 'forms of cybercrime' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة الفرز: هتحط كل موقف تحت العنصر اللي بيتأثر، وتفرز البرامج الضارة.', en: 'Well done! The sorting game: put each situation under the element it affects, and sort the malware.' },
        { ar: 'تقدر تسحب الكارت للصندوق، أو تدوس على الصندوق.', en: 'You can drag the card to a box, or just tap the box.' },
      ],
    },
  ],

  game: {
    kind: 'sort',
    rounds: [
      {
        title: { ar: 'أنهي عنصر أمن بيتأثر؟', en: 'Which security element is affected?' },
        source: { ar: 'جرب بنفسك 1 ص 33، وتحدى معلوماتك 1 (1) ص 31', en: 'Try It Yourself 1 p. 33, and Test Your Knowledge 1 (1) p. 31' },
        bins: [
          { id: 'confidentiality', label: { ar: 'سرية', en: 'Confidentiality' } },
          { id: 'integrity', label: { ar: 'سلامة', en: 'Integrity' } },
          { id: 'availability', label: { ar: 'توافرية', en: 'Availability' } },
        ],
        items: [
          { text: { ar: 'التنصت على الشبكة', en: 'Eavesdropping on the network' }, bin: 'confidentiality' },
          { text: { ar: 'انقطاع الخدمة، زي توقف النظام', en: 'A service outage, like a system stopping' }, bin: 'availability' },
          { text: { ar: 'تسرّب كلمة المرور', en: 'A password leak' }, bin: 'confidentiality' },
          { text: { ar: 'التلاعب بالمعلومات أو تدميرها', en: 'Tampering with or destroying information' }, bin: 'integrity' },
          { text: { ar: 'هجوم إلكتروني بيعطّل موقع ويب', en: 'A cyber attack taking a website down' }, bin: 'availability' },
          { text: { ar: 'إدخال بيانات غلط بسبب خطأ في الكتابة', en: 'Entering wrong data by a typing mistake' }, bin: 'integrity' },
          { text: { ar: 'تسريب معلومات شخصية بسبب برنامج خبيث', en: 'Personal information leaking through malware' }, bin: 'confidentiality' },
        ],
      },
      {
        title: { ar: 'أنهي برنامج ضار؟', en: 'Which harmful program?' },
        source: { ar: 'النقاط الرئيسية، ص 30', en: 'Key Points, p. 30' },
        bins: [
          { id: 'virus', label: { ar: 'فيروس', en: 'Virus' } },
          { id: 'trojan', label: { ar: 'حصان طروادة', en: 'Trojan horse' } },
          { id: 'worm', label: { ar: 'دودة', en: 'Worm' } },
          { id: 'ransomware', label: { ar: 'فدية', en: 'Ransomware' } },
        ],
        items: [
          { text: { ar: 'برنامج متنكر على إنه شرعي، بيتسلل للنظام ويبدأ الهجمات بهدوء', en: 'A program disguised as legitimate that slips in and quietly starts attacking' }, bin: 'trojan' },
          { text: { ar: 'برنامج بينسخ نفسه وبينتشر عبر الإنترنت', en: 'A program that copies itself and spreads over the internet' }, bin: 'worm' },
          { text: { ar: 'برنامج مصمم لإحداث ضرر متعمد، زي تدمير البيانات', en: 'A program built to cause deliberate harm, like destroying data' }, bin: 'virus' },
          { text: { ar: 'برنامج بيخلّي البيانات مش متاحة ويطلب فدية', en: 'A program that makes data unreachable and demands a ransom' }, bin: 'ransomware' },
        ],
      },
      {
        title: { ar: 'عيلة برامج التجسس', en: 'The spyware family' },
        source: { ar: 'النقاط الرئيسية، ص 30', en: 'Key Points, p. 30' },
        bins: [
          { id: 'spyware', label: { ar: 'برنامج تجسس', en: 'Spyware' } },
          { id: 'keylogger', label: { ar: 'مسجل لوحة المفاتيح', en: 'Keylogger' } },
          { id: 'adware', label: { ar: 'برنامج إعلانات', en: 'Adware' } },
        ],
        items: [
          { text: { ar: 'بيراقب ويسجل ضغطات المفاتيح', en: 'Watches and records key presses' }, bin: 'keylogger' },
          { text: { ar: 'بيجمع معلوماتك الشخصية من غير علمك ويبعتها لأطراف تالتة', en: 'Collects your personal information without your knowledge and sends it to third parties' }, bin: 'spyware' },
          { text: { ar: 'بيعرض إعلانات غير مرغوب فيها من غير موافقتك', en: 'Shows unwanted ads without your approval' }, bin: 'adware' },
        ],
      },
    ],
  },
};
