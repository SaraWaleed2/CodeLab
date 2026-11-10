import { Lesson } from '@core/models';

/**
 * Lesson 9-1 "قواعد البيانات [1]" — ministry book pp. 125–128.
 * Book notes:
 * - p.125: the five DBMS functions (consistency, integrity, independence, confidentiality, availability)
 *   and the kinds of database (hierarchical, network, relational, NoSQL) with the shapes drawing.
 * - p.126 key: Q1 database, Q2 option (3) = integrity, Q3 hierarchical.
 * - p.128 Q3 calls integrity "سلامة البيانات"; p.125 calls it "تكامل البيانات" — the site uses p.125's name.
 * - p.127 offers "Object-oriented database" only as a wrong option; it is not explained, so the site skips it.
 * - The exercises on pp.126–128 have no answer key; the site answers them from the Key Points.
 */
export const LESSON_9_1: Lesson = {
  unitId: 9,
  id: '9-1',
  title: { ar: 'قواعد البيانات [1]', en: 'Databases [1]' },
  bookPages: '125 – 128',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! الأسماء اللي في موبايلك متخزنة في قاعدة بيانات. يلا نعرف إزاي.', en: 'Hi! The contacts on your phone are kept in a database. Let us see how.' },
        { ar: 'في الآخر لعبة توصيل: وصّل كل وظيفة وكل نوع بمعناه.', en: 'At the end there is a matching game: link each job and each kind to its meaning.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1، 2)، ص 125', en: 'Key Points (a-1, 2), p. 125' },
      blocks: [
        { type: 'heading', text: { ar: 'قاعدة البيانات ونظام إدارتها', en: 'The database and its management system' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'قاعدة البيانات', en: 'Database' },
              en: 'Database',
              text: { ar: 'مجموعة بيانات منظمة ومتخزنة بشكل يسهّل الوصول ليها لغرض محدد. فبيبقى البحث والتعديل والمشاركة سهل.', en: 'A collection of data organized and stored so it is easy to reach for a set purpose, which makes searching, editing and sharing easy.' },
              example: { ar: 'زي جهات الاتصال في موبايلك، أو معلومات عملاء شركة، أو نظام حجز تذاكر الطيران', en: 'Like the contacts on your phone, a company’s customer details, or a flight booking system' },
            },
            {
              title: { ar: 'نظام إدارة قواعد البيانات', en: 'Database management system' },
              en: 'DBMS',
              text: { ar: 'النظام اللي بيعمل قاعدة البيانات وبيشغّلها وبيديرها.', en: 'The system that creates, runs and manages the database.' },
              example: { ar: 'زي أمين المكتبة: هو اللي بيرتّب الكتب ويطلّعها لك', en: 'Like a librarian: the one who arranges the books and fetches them for you' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: قاعدة البيانات = المكتبة · DBMS = أمين المكتبة', en: 'Remember: database = the library · DBMS = the librarian' } },
      ],
      bito: [
        { ar: 'لما تدوّر على اسم صاحبك في الموبايل وتلاقيه في ثانية، دي قاعدة بيانات شغالة.', en: 'When you search for a friend’s name on your phone and find it in a second, that is a database at work.' },
        { ar: 'البيانات لوحدها = الكتب. والـ DBMS هو اللي بينظّمها ويجيبها لك.', en: 'The data alone = the books. The DBMS is what organizes them and brings them to you.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-3)، ص 125', en: 'Key Points (a-3), p. 125' },
      blocks: [
        { type: 'heading', text: { ar: 'وظائف الـ DBMS (1)', en: 'What a DBMS does (1)' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'تناسق البيانات', en: 'Data consistency' },
              en: 'Data consistency',
              text: { ar: 'يضمن إن العمليات اللي بتحصل في نفس الوقت على نفس البيانات ما تعملش تناقض.', en: 'Makes sure operations done at the same time on the same data do not cause contradictions.' },
              example: { ar: 'إنت وصاحبك بتحجزوا آخر كرسي في السينما في نفس اللحظة: يتحجز لواحد بس', en: 'You and a friend book the last cinema seat at the same moment: only one of you gets it' },
            },
            {
              title: { ar: 'تكامل البيانات', en: 'Data integrity' },
              en: 'Data integrity',
              text: { ar: 'يمنع التكرار والعبث والتسجيل أو التحديث من غير تصريح.', en: 'Stops duplicates, tampering, and recording or updating without permission.' },
              example: { ar: 'اسمك ما يتسجلش مرتين في كشف الفصل، ومحدش يغيّر درجتك من غير إذن', en: 'Your name is not listed twice in the class register, and nobody changes your mark without permission' },
            },
            {
              title: { ar: 'استقلالية البيانات', en: 'Data independence' },
              en: 'Data independence',
              text: { ar: 'إدارة قاعدة البيانات بشكل منفصل عن البرامج اللي بتستخدمها.', en: 'The database is managed separately from the programs that use it.' },
              example: { ar: 'المدرسة غيّرت تطبيق الدرجات، ودرجاتك فضلت زي ما هي', en: 'The school changed its marks app, and your marks stayed the same' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: تناسق = مفيش تناقض · تكامل = مفيش تكرار ولا عبث', en: 'Remember: consistency = no contradictions · integrity = no duplicates or tampering' } },
      ],
      bito: [
        { ar: 'تناسق وتكامل بيتلخبطوا! التناسق للعمليات اللي في نفس الوقت، والتكامل لمنع التكرار والعبث.', en: 'Consistency and integrity get mixed up! Consistency is about operations at the same time; integrity stops duplicates and tampering.' },
        { ar: 'والاستقلالية: البيانات في حتة، والبرنامج في حتة تانية.', en: 'And independence: the data in one place, the program in another.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-3)، ص 125', en: 'Key Points (a-3), p. 125' },
      blocks: [
        { type: 'heading', text: { ar: 'وظائف الـ DBMS (2)', en: 'What a DBMS does (2)' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'سرية البيانات', en: 'Data confidentiality' },
              en: 'Data confidentiality',
              text: { ar: 'بتحدد أذونات الوصول، وبتعمل المصادقة.', en: 'Sets who may access what, and checks who you are (authentication).' },
              example: { ar: 'إنت تشوف درجاتك بس، والمدرس هو اللي يقدر يعدّلها', en: 'You can only see your own marks, and only the teacher can change them' },
            },
            {
              title: { ar: 'توافر البيانات', en: 'Data availability' },
              en: 'Data availability',
              text: { ar: 'بتعمل نسخ احتياطية، وبتسترجع البيانات، وبتستعد للأعطال، عشان البيانات تفضل متاحة.', en: 'Makes backups, restores data and prepares for failures, so the data stays available.' },
              example: { ar: 'موبايلك ضاع؟ صورك بترجع من النسخة الاحتياطية', en: 'Lost your phone? Your photos come back from the backup' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: سرية = مين يشوف · توافر = نسخة احتياطية', en: 'Remember: confidentiality = who can see · availability = a backup' } },
      ],
      bito: [
        { ar: 'الخمس وظايف: تناسق، تكامل، استقلالية، سرية، توافر.', en: 'The five jobs: consistency, integrity, independence, confidentiality, availability.' },
        { ar: 'السرية زي باسورد حسابك، والتوافر زي الـ Backup.', en: 'Confidentiality is like your account password; availability is like a backup.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب)، ص 125', en: 'Key Points (b), p. 125' },
      blocks: [
        { type: 'heading', text: { ar: 'أنواع قواعد البيانات', en: 'Kinds of database' } },
        {
          type: 'db-shapes',
          items: [
            {
              shape: 'tree',
              title: { ar: 'قاعدة بيانات هرمية', en: 'Hierarchical database' },
              en: 'Hierarchical database',
              text: { ar: 'البيانات فيها بتتمثّل في هيكل هرمي يشبه الشجرة.', en: 'Its data is shown as a hierarchy shaped like a tree.' },
              example: { ar: 'زي شجرة العيلة: جد، وتحته أولاده، وتحتهم أحفاده', en: 'Like a family tree: a grandparent, their children below, and the grandchildren below them' },
            },
            {
              shape: 'network',
              title: { ar: 'قاعدة بيانات شبكية', en: 'Network database' },
              en: 'Network database',
              text: { ar: 'البيانات فيها بتتمثّل في شكل يشبه الويب أو الشبكة.', en: 'Its data is shown in a shape like a web or a net.' },
              example: { ar: 'زي خريطة المترو: كل محطة ممكن تتوصل بأكتر من محطة', en: 'Like a metro map: each station can link to more than one station' },
            },
            {
              shape: 'tables',
              title: { ar: 'قاعدة بيانات علائقية', en: 'Relational database' },
              en: 'Relational database',
              text: { ar: 'البيانات فيها بتتنظم وتتدار في جداول متعددة مرتبطة ببعض.', en: 'Its data is organized and managed in several tables linked together.' },
              example: { ar: 'زي جدول الطلاب وجدول النوادي، مربوطين برمز النادي', en: 'Like a students table and a clubs table, linked by the club code' },
            },
          ],
        },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'NoSQL', en: 'NoSQL' },
              en: 'NoSQL',
              text: { ar: 'أنظمة إدارة قواعد بيانات تانية، غير أنظمة قواعد البيانات العلائقية.', en: 'Other database management systems that are not relational ones.' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: شجرة = هرمية · شبكة = شبكية · جداول = علائقية', en: 'Remember: tree = hierarchical · web = network · tables = relational' } },
      ],
      bito: [
        { ar: 'بص على الشكل بس وهتعرف النوع: الشجرة، الشبكة، الجداول.', en: 'Just look at the shape and you know the kind: tree, web, tables.' },
        { ar: 'في الهرمية كل عنصر ليه أب واحد بس. في الشبكية ممكن يبقى ليه أكتر من واحد.', en: 'In a hierarchy each item has only one parent. In a network it can have more than one.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 125', en: 'Test Your Knowledge (1), p. 125' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه المصطلح اللي بيتقال على المعلومات اللي بتتنظم وتتخزن بشكل يسهّل الوصول ليها لغرض محدد؟', en: 'What is the term for information that is organized and stored so it is easy to reach for a set purpose?' },
          options: [
            { ar: 'قاعدة بيانات', en: 'Database' },
            { ar: 'شبكة', en: 'Network' },
            { ar: 'بروتوكول', en: 'Protocol' },
          ],
          answer: 0,
          explanation: {
            ar: 'قاعدة بيانات (Database): مجموعة بيانات منظمة ومتخزنة بشكل يسهّل الوصول ليها لغرض محدد.',
            en: 'A database: a collection of data organized and stored so it is easy to reach for a set purpose.',
          },
          success: { ar: 'صح! دي قاعدة البيانات. +10 نقط', en: 'Correct! That is a database. +10 pts' },
        },
      ],
      bito: [
        { ar: 'منظمة + متخزنة + سهل نوصل لها.', en: 'Organized + stored + easy to reach.' },
        { ar: 'زي جهات الاتصال في موبايلك.', en: 'Like the contacts on your phone.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2)، ص 125 – 126', en: 'Test Your Knowledge (2), pp. 125 – 126' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'اختار العبارة الصحيحة عن تكامل البيانات:', en: 'Choose the correct statement about data integrity:' },
          options: [
            { ar: 'وظيفة بيتم فيها إدارة قاعدة البيانات بشكل منفصل عن البرامج اللي بتستخدمها.', en: 'A job in which the database is managed separately from the programs that use it.' },
            { ar: 'وظيفة بتدّي حقوق الوصول للبيانات لعدد محدد من المستخدمين.', en: 'A job that gives access rights to the data to a set number of users.' },
            { ar: 'وظيفة بتمنع التكرار والعبث والتسجيل أو التحديث غير المصرّح به للبيانات.', en: 'A job that stops duplicates, tampering, and unauthorized recording or updating of data.' },
            { ar: 'وظيفة لعمل نسخ احتياطية والاستعداد لتشغيل استعادة البيانات لما يحصل عطل.', en: 'A job that makes backups and gets ready to restore data when a failure happens.' },
          ],
          answer: 2,
          explanation: {
            ar: 'تكامل البيانات = منع التكرار والعبث والتسجيل أو التحديث غير المصرّح به. الأولى استقلالية، والتانية سرية، والرابعة توافر.',
            en: 'Integrity = stopping duplicates, tampering and unauthorized recording or updating. The first is independence, the second confidentiality, the fourth availability.',
          },
          success: { ar: 'صح! تكامل = مفيش تكرار ولا عبث. +10 نقط', en: 'Correct! Integrity = no duplicates or tampering. +10 pts' },
        },
      ],
      bito: [
        { ar: 'كل اختيار هنا وظيفة من الخمسة. دوّر على "التكرار والعبث".', en: 'Each option here is one of the five jobs. Look for "duplicates and tampering".' },
        { ar: 'اسمك ما يتسجلش مرتين = تكامل.', en: 'Your name not listed twice = integrity.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (3)، ص 126', en: 'Test Your Knowledge (3), p. 126' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'قاعدة بيانات شكلها شجرة: عنصر فوق، وتحته فروع، وتحت كل فرع فروع أصغر. اسمها إيه؟', en: 'A database shaped like a tree: one item on top, branches below it, and smaller branches below each. What is it called?' },
          options: [
            { ar: 'قاعدة بيانات هرمية', en: 'Hierarchical database' },
            { ar: 'قاعدة بيانات شبكية', en: 'Network database' },
            { ar: 'قاعدة بيانات علائقية', en: 'Relational database' },
          ],
          answer: 0,
          explanation: {
            ar: 'البيانات بتتمثّل في هيكل هرمي يشبه الشجرة، وبالتالي دي قاعدة بيانات هرمية.',
            en: 'The data is shown as a hierarchy like a tree, so it is a hierarchical database.',
          },
          success: { ar: 'صح! شجرة = هرمية. +10 نقط', en: 'Correct! Tree = hierarchical. +10 pts' },
        },
      ],
      bito: [
        { ar: 'افتكر الأشكال التلاتة اللي دوست عليها.', en: 'Remember the three shapes you tapped.' },
        { ar: 'شجرة العيلة = هرم.', en: 'A family tree = a hierarchy.' },
      ],
    },
    {
      source: { ar: 'تمرين 2 (2)، ص 127', en: 'Exercise 2 (2), p. 127' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'قاعدة بيانات شكلها شبكة: الفروع متوصلة ببعض بخطوط متقاطعة، والعنصر ممكن يتوصل بأكتر من عنصر فوقه. اسمها إيه؟', en: 'A database shaped like a web: the branches are linked by crossing lines, and an item can link to more than one item above it. What is it called?' },
          options: [
            { ar: 'قاعدة بيانات هرمية', en: 'Hierarchical database' },
            { ar: 'قاعدة بيانات شبكية', en: 'Network database' },
            { ar: 'قاعدة بيانات علائقية', en: 'Relational database' },
          ],
          answer: 1,
          explanation: {
            ar: 'قاعدة البيانات الشبكية بتمثّل البيانات في شكل يشبه الويب أو الشبكة (النقاط الرئيسية ب-2، ص 125).',
            en: 'A network database shows the data in a shape like a web or a net (Key Points b-2, p. 125).',
          },
          success: { ar: 'صح! شبكة = شبكية. +10 نقط', en: 'Correct! Web = network. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الخطوط بتتقاطع = مش شجرة.', en: 'Crossing lines = not a tree.' },
        { ar: 'زي خريطة المترو.', en: 'Like a metro map.' },
      ],
    },
    {
      source: { ar: 'تمرين 2 (3)، ص 127', en: 'Exercise 2 (3), p. 127' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه المصطلح اللي بيتقال على أنظمة إدارة قواعد البيانات التانية، غير أنظمة قواعد البيانات العلائقية؟', en: 'What is the term for the other database management systems that are not relational?' },
          options: [
            { ar: 'SQL', en: 'SQL' },
            { ar: 'NoSQL', en: 'NoSQL' },
            { ar: 'DBMS', en: 'DBMS' },
          ],
          answer: 1,
          explanation: {
            ar: 'NoSQL: أنظمة إدارة قواعد بيانات أخرى غير أنظمة إدارة قواعد البيانات العلائقية (النقاط الرئيسية ب-4، ص 125).',
            en: 'NoSQL: database management systems other than relational ones (Key Points b-4, p. 125).',
          },
          success: { ar: 'صح! NoSQL = مش علائقية. +10 نقط', en: 'Correct! NoSQL = not relational. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الاسم نفسه بيقول: No = لأ.', en: 'The name says it: No = not.' },
        { ar: 'يعني مش النوع اللي بالجداول.', en: 'So not the kind with tables.' },
      ],
    },
    {
      source: { ar: 'تمرين 1 (3) [2]، ص 128', en: 'Exercise 1 (3) [2], p. 128' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: تكامل البيانات معناه ضمان إن العمليات اللي بتحصل في نفس الوقت على البيانات المشتركة ما تعملش تناقض.', en: 'True or false: data integrity means making sure operations at the same time on shared data cause no contradictions.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 1,
          explanation: {
            ar: '✕. ده تعريف تناسق البيانات. التكامل هو منع التكرار والعبث والتسجيل أو التحديث غير المصرّح به.',
            en: '✕. That is the meaning of data consistency. Integrity is stopping duplicates, tampering and unauthorized recording or updating.',
          },
          success: { ar: 'صح! دي فخ: ده التناسق مش التكامل. +10 نقط', en: 'Correct! A trap: that is consistency, not integrity. +10 pts' },
        },
      ],
      bito: [
        { ar: '"في نفس الوقت" و"تناقض" = تناسق.', en: '"At the same time" and "contradictions" = consistency.' },
        { ar: 'فاكر كرسي السينما؟', en: 'Remember the cinema seat?' },
      ],
    },
    {
      source: { ar: 'تمرين 1 (3) [5]، ص 128', en: 'Exercise 1 (3) [5], p. 128' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: استقلالية البيانات معناها إدارة قواعد البيانات بشكل منفصل عن البرامج اللي بتستخدمها.', en: 'True or false: data independence means managing databases separately from the programs that use them.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. ده بالظبط تعريف استقلالية البيانات في النقاط الرئيسية (أ-3)، ص 125.',
            en: '✓. That is exactly how Key Points (a-3), p. 125 defines data independence.',
          },
          success: { ar: 'صح! البيانات في حتة والبرنامج في حتة. +10 نقط', en: 'Correct! The data in one place, the program in another. +10 pts' },
        },
      ],
      bito: [
        { ar: 'مستقل = لوحده.', en: 'Independent = on its own.' },
        { ar: 'فاكر تطبيق الدرجات اللي اتغيّر؟', en: 'Remember the marks app that changed?' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 9-1!', en: 'You finished lesson 9-1!' } },
        {
          type: 'recap',
          items: [
            { code: 'DBMS', text: { ar: 'بيدير قاعدة البيانات', en: 'manages the database' } },
            { code: '5', text: { ar: 'وظائف', en: 'jobs' } },
            { code: '3', text: { ar: 'أشكال: هرمية · شبكية · علائقية', en: 'shapes: hierarchical · network · relational' } },
            { code: 'NoSQL', text: { ar: 'مش علائقية', en: 'not relational' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! يلا على لعبة التوصيل.', en: 'Well done! On to the matching game.' },
        { ar: 'وصّل كل وظيفة وكل نوع بمعناه.', en: 'Link each job and each kind to its meaning.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'وظائف الـ DBMS', en: 'What a DBMS does' },
        source: { ar: 'النقاط الرئيسية (أ-3)، ص 125', en: 'Key Points (a-3), p. 125' },
        pairs: [
          { left: { text: { ar: 'تناسق البيانات', en: 'Data consistency' } }, right: { ar: 'العمليات اللي في نفس الوقت ما تعملش تناقض', en: 'Operations at the same time cause no contradictions' } },
          { left: { text: { ar: 'تكامل البيانات', en: 'Data integrity' } }, right: { ar: 'منع التكرار والعبث والتحديث غير المصرّح به', en: 'Stopping duplicates, tampering and unauthorized updates' } },
          { left: { text: { ar: 'استقلالية البيانات', en: 'Data independence' } }, right: { ar: 'إدارة قاعدة البيانات منفصلة عن البرامج', en: 'Managing the database apart from the programs' } },
          { left: { text: { ar: 'سرية البيانات', en: 'Data confidentiality' } }, right: { ar: 'أذونات الوصول والمصادقة', en: 'Access permissions and authentication' } },
          { left: { text: { ar: 'توافر البيانات', en: 'Data availability' } }, right: { ar: 'نسخ احتياطية واستعادة عند العطل', en: 'Backups and restoring after a failure' } },
        ],
      },
      {
        title: { ar: 'أنواع قواعد البيانات', en: 'Kinds of database' },
        source: { ar: 'النقاط الرئيسية (ب)، ص 125', en: 'Key Points (b), p. 125' },
        pairs: [
          { left: { text: { ar: 'قاعدة بيانات هرمية', en: 'Hierarchical database' } }, right: { ar: 'هيكل هرمي يشبه الشجرة', en: 'A hierarchy shaped like a tree' } },
          { left: { text: { ar: 'قاعدة بيانات شبكية', en: 'Network database' } }, right: { ar: 'شكل يشبه الويب أو الشبكة', en: 'A shape like a web or a net' } },
          { left: { text: { ar: 'قاعدة بيانات علائقية', en: 'Relational database' } }, right: { ar: 'جداول متعددة مرتبطة ببعض', en: 'Several tables linked together' } },
          { left: { text: { ar: 'NoSQL', en: 'NoSQL' } }, right: { ar: 'أنظمة غير علائقية', en: 'Systems that are not relational' } },
        ],
      },
    ],
  },
};
