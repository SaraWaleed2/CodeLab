import { DbClub, DbStudent, Lesson } from '@core/models';

/**
 * Lesson 9-2 "قواعد البيانات [2]" — ministry book pp. 129–132.
 * Book notes:
 * - p.129: table / record (row) / field (column), relationships, SQL, and the relational operations
 *   selection (rows of C2), projection (student names) and join (students + clubs) on the same students table.
 * - p.129 heads the first table "كود الطالب"; the other tables say "رمز الطالب" — the site uses "رمز الطالب".
 * - p.130 key: Q1 [1] RDB [2] record [3] field [4] relationships; Q2 table 3 = join + projection.
 * - "Normalization - التسوية" appears only as a wrong option on pp.131–132 and is never explained, so the site skips it.
 * - The exercises on pp.131–132 have no answer key; the site answers them from the Key Points.
 */
const STUDENTS: readonly DbStudent[] = [
  { id: 'S2023010101', name: { ar: 'خالد', en: 'Khaled' }, club: 'C1' },
  { id: 'S2023010102', name: { ar: 'آدم', en: 'Adam' }, club: 'C2' },
  { id: 'S2023010103', name: { ar: 'مالك', en: 'Malek' }, club: 'C1' },
  { id: 'S2023010104', name: { ar: 'عمر', en: 'Omar' }, club: 'C1' },
  { id: 'S2023010105', name: { ar: 'يوسف', en: 'Youssef' }, club: 'C2' },
];

const CLUBS: readonly DbClub[] = [
  { id: 'C1', name: { ar: 'نادي السباحة', en: 'Swimming club' } },
  { id: 'C2', name: { ar: 'نادي التنس', en: 'Tennis club' } },
];

export const LESSON_9_2: Lesson = {
  unitId: 9,
  id: '9-2',
  title: { ar: 'قواعد البيانات [2]', en: 'Databases [2]' },
  bookPages: '129 – 132',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! النهارده هنلعب بجدول طلاب حقيقي من الكتاب: نختار ونعرض ونربط.', en: 'Hi! Today we play with a real students table from the book: select, project and join.' },
        { ar: 'في الآخر لعبة توصيل، وتحدي كود بتعمل فيه انتقاء بنفسك.', en: 'At the end there is a matching game, and a code challenge where you do a selection yourself.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1)، ص 129', en: 'Key Points (a-1), p. 129' },
      blocks: [
        { type: 'heading', text: { ar: 'قاعدة البيانات العلائقية', en: 'The relational database' }, code: '(RDB)' },
        {
          type: 'lead',
          text: { ar: 'قاعدة بيانات بيتم فيها تنظيم البيانات اللي اتجمعت وإدارتها في جداول متعددة مرتبطة ببعض. الجدول بيتكون من صفوف (سجلات) وأعمدة (حقول).', en: 'A database where the collected data is organized and managed in several linked tables. A table is made of rows (records) and columns (fields).' },
        },
        { type: 'db-lab', show: 'parts', students: STUDENTS, clubs: CLUBS, club: 'C2' },
        { type: 'memo', text: { ar: 'افتكر: صف = سجل (Record) · عمود = حقل (Field)', en: 'Remember: row = record · column = field' } },
      ],
      bito: [
        { ar: 'الجدول زي كشف الفصل: كل سطر = طالب، وكل عمود = معلومة واحدة عن كل الطلاب.', en: 'A table is like the class register: each line = one student, each column = one fact about every student.' },
        { ar: 'دوس على "صف" وبعدين "عمود" وشوف الفرق.', en: 'Tap "row" then "column" and see the difference.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1، 2)، ص 129', en: 'Key Points (a-1, 2), p. 129' },
      blocks: [
        { type: 'heading', text: { ar: 'العلاقات ولغة SQL', en: 'Relationships and SQL' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'العلاقات', en: 'Relationships' },
              en: 'Relationships',
              text: { ar: 'ربط جداول متعددة ببعض بيخلّينا نتخلص من البيانات المكررة، ونتعامل مع البيانات بشكل متكامل.', en: 'Linking several tables lets us get rid of repeated data and handle the data as one whole.' },
              example: { ar: 'اسم النادي بيتكتب مرة واحدة في جدول النوادي، والطالب بيتكتب جنبه الرمز C1 بس', en: 'The club name is written once in the clubs table; next to each student we write only C1' },
            },
            {
              title: { ar: 'لغة SQL', en: 'SQL' },
              en: 'SQL',
              text: { ar: 'لغة بتُستخدم في قواعد البيانات العلائقية لمعالجة البيانات: تسجيل وإدراج واسترجاع وحذف.', en: 'A language used in relational databases to process data: recording, inserting, retrieving and deleting.' },
              example: { ar: 'زي ما بتكلم الـ DBMS: "هات لي طلاب نادي التنس"', en: 'Like talking to the DBMS: "give me the tennis club students"' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: العلاقات = مفيش تكرار · SQL = لغة الكلام مع الجداول', en: 'Remember: relationships = no repeats · SQL = the language for talking to tables' } },
      ],
      bito: [
        { ar: 'تخيّل تكتب "نادي السباحة" جنب 100 طالب! الأسهل تكتب C1 وتربطه بجدول النوادي.', en: 'Imagine writing "Swimming club" next to 100 students! Easier to write C1 and link it to the clubs table.' },
        { ar: 'وSQL هي اللغة اللي بنطلب بيها البيانات دي.', en: 'And SQL is the language we use to ask for that data.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-3)، ص 129 – 130', en: 'Key Points (a-3), pp. 129 – 130' },
      blocks: [
        { type: 'heading', text: { ar: 'عمليات الجبر العلائقي', en: 'Relational operations' } },
        {
          type: 'cards',
          items: [
            {
              title: { ar: 'الانتقاء', en: 'Selection' },
              en: 'Selection',
              text: { ar: 'استخراج وعرض الصفوف اللي بتستوفي شروط معينة بس.', en: 'Pulling out and showing only the rows that meet certain conditions.' },
              example: { ar: 'طلاب نادي C2 بس: آدم ويوسف', en: 'Only the C2 club students: Adam and Youssef' },
            },
            {
              title: { ar: 'العرض', en: 'Projection' },
              en: 'Projection',
              text: { ar: 'عرض أعمدة معينة بس من الجدول.', en: 'Showing only certain columns of a table.' },
              example: { ar: 'عمود اسم الطالب بس', en: 'Only the student-name column' },
            },
            {
              title: { ar: 'الربط', en: 'Join' },
              en: 'Join',
              text: { ar: 'ربط بيانات من جداول متعددة حسب شروط محددة، وعرضها كجدول واحد.', en: 'Linking data from several tables by set conditions and showing it as one table.' },
              example: { ar: 'جدول الطلاب + جدول النوادي = نشاط كل طالب', en: 'Students table + clubs table = each student’s activity' },
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: انتقاء = صفوف · عرض = أعمدة · ربط = جداول', en: 'Remember: selection = rows · projection = columns · join = tables' } },
      ],
      bito: [
        { ar: 'الانتقاء بيقص الجدول بالعرض (صفوف)، والعرض بيقصه بالطول (أعمدة).', en: 'Selection cuts the table across (rows); projection cuts it down (columns).' },
        { ar: 'والربط بيلزق جدولين في جدول واحد.', en: 'And join glues two tables into one.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-3)، ص 129 – 130', en: 'Key Points (a-3), pp. 129 – 130' },
      blocks: [
        { type: 'heading', text: { ar: 'جرّب العمليات بنفسك', en: 'Try the operations yourself' } },
        { type: 'db-lab', show: 'ops', students: STUDENTS, clubs: CLUBS, club: 'C2' },
        { type: 'memo', text: { ar: 'افتكر: اللي بيبهت = اللي العملية شالته', en: 'Remember: what fades = what the operation took away' } },
      ],
      bito: [
        { ar: 'دوس "انتقاء": هتفضل صفوف C2 بس، زي جدول الكتاب.', en: 'Tap "Selection": only the C2 rows stay, like the book’s table.' },
        { ar: 'وبعدين "ربط": هيظهر عمود نشاط النادي من الجدول التاني.', en: 'Then "Join": the club activity column appears from the other table.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 130', en: 'Test Your Knowledge (1), p. 130' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'الصفوف في جدول قاعدة البيانات العلائقية اسمها إيه؟', en: 'What are the rows of a relational database table called?' },
          options: [
            { ar: 'سجلات (Records)', en: 'Records' },
            { ar: 'حقول (Fields)', en: 'Fields' },
            { ar: 'علاقات (Relationships)', en: 'Relationships' },
          ],
          answer: 0,
          explanation: {
            ar: 'الصفوف = سجلات (Records)، والأعمدة = حقول (Fields).',
            en: 'Rows = records, and columns = fields.',
          },
          success: { ar: 'صح! صف = سجل. +10 نقط', en: 'Correct! Row = record. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الصف = كل بيانات طالب واحد.', en: 'A row = all of one student’s data.' },
        { ar: 'زي "سجل" الطالب في المدرسة.', en: 'Like a student’s "record" at school.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 130', en: 'Test Your Knowledge (1), p. 130' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إنشاء ...... بين جداول متعددة بيخلّينا نتخلص من البيانات المكررة.', en: 'Creating ...... between several tables lets us get rid of repeated data.' },
          options: [
            { ar: 'حقول', en: 'Fields' },
            { ar: 'سجلات', en: 'Records' },
            { ar: 'علاقات', en: 'Relationships' },
          ],
          answer: 2,
          explanation: {
            ar: 'العلاقات (Relationships) بين الجداول بتخلّينا نتخلص من البيانات المكررة ونتعامل مع البيانات بشكل متكامل.',
            en: 'Relationships between tables let us get rid of repeated data and handle the data as one whole.',
          },
          success: { ar: 'صح! العلاقات = مفيش تكرار. +10 نقط', en: 'Correct! Relationships = no repeats. +10 pts' },
        },
      ],
      bito: [
        { ar: 'فاكر C1 بدل "نادي السباحة" 100 مرة؟', en: 'Remember C1 instead of "Swimming club" 100 times?' },
        { ar: 'الربط بين الجدولين ده اسمه علاقة.', en: 'That link between the two tables is a relationship.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2)، ص 130', en: 'Test Your Knowledge (2), p. 130' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'جدول 3 فيه: رمز الطالب واسم الطالب من جدول 1، ونشاط النادي من جدول 2، ومفيهوش رمز النادي. إيه العمليات اللي اتعملت؟', en: 'Table 3 has the student code and name from table 1 and the club activity from table 2, with no club code. Which operations were done?' },
          options: [
            { ar: 'الانتقاء بس', en: 'Selection only' },
            { ar: 'الربط والعرض', en: 'Join and projection' },
            { ar: 'العرض بس', en: 'Projection only' },
            { ar: 'الانتقاء والربط', en: 'Selection and join' },
          ],
          answer: 1,
          explanation: {
            ar: 'جدول 3 جمع أعمدة من جدول 1 وجدول 2، يبقى في ربط. ورمز النادي اللي في جدول 1 مش موجود في جدول 3، يبقى في عرض كمان. عشان كده الربط والعرض.',
            en: 'Table 3 brings together columns from tables 1 and 2, so there is a join. The club code from table 1 is missing from table 3, so there is a projection too. So: join and projection.',
          },
          success: { ar: 'صح! جدولين اتلزقوا + عمود اتشال. +10 نقط', en: 'Correct! Two tables glued + one column removed. +10 pts' },
        },
      ],
      bito: [
        { ar: 'اسأل نفسك سؤالين: في جدولين اتجمعوا؟ وفي عمود اختفى؟', en: 'Ask yourself two things: were two tables brought together? Did a column vanish?' },
        { ar: 'الصفوف كلها موجودة، يبقى مفيش انتقاء.', en: 'All the rows are there, so no selection.' },
      ],
    },
    {
      source: { ar: 'جرب بنفسك (3)، ص 131', en: 'Try It Yourself (3), p. 131' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'عملية استخراج الصفوف اللي بتستوفي الشروط المطلوبة بس لإنشاء جدول جديد اسمها إيه؟', en: 'What is the operation that pulls out only the rows meeting the required conditions to make a new table?' },
          options: [
            { ar: 'العرض (Projection)', en: 'Projection' },
            { ar: 'الربط (Join)', en: 'Join' },
            { ar: 'الانتقاء (Selection)', en: 'Selection' },
            { ar: 'التسوية (Normalization)', en: 'Normalization' },
          ],
          answer: 2,
          explanation: {
            ar: 'الانتقاء (Selection): استخراج وعرض الصفوف اللي بتستوفي شروط معينة بس (النقاط الرئيسية أ-3، ص 129).',
            en: 'Selection: pulling out and showing only the rows that meet certain conditions (Key Points a-3, p. 129).',
          },
          success: { ar: 'صح! صفوف = انتقاء. +10 نقط', en: 'Correct! Rows = selection. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الكلمة المهمة هنا: "الصفوف".', en: 'The key word here: "rows".' },
        { ar: 'انتقاء = صفوف · عرض = أعمدة.', en: 'Selection = rows · projection = columns.' },
      ],
    },
    {
      source: { ar: 'تمرين (2)، ص 132', en: 'Exercise (2), p. 132' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'اختار العبارة الصحيحة عن SQL:', en: 'Choose the correct statement about SQL:' },
          options: [
            { ar: 'آلية بتضمن سلامة البيانات المتخزنة في قاعدة بيانات علائقية.', en: 'A mechanism that keeps the data in a relational database safe.' },
            { ar: 'التخلص من البيانات المكررة من قاعدة بيانات علائقية.', en: 'Getting rid of repeated data from a relational database.' },
            { ar: 'لغة برمجة لمعالجة قواعد البيانات العلائقية.', en: 'A programming language for processing relational databases.' },
            { ar: 'عمليات بتتعمل على قاعدة بيانات علائقية زي الانتقاء والعرض والربط.', en: 'Operations done on a relational database like selection, projection and join.' },
          ],
          answer: 2,
          explanation: {
            ar: 'SQL لغة بتُستخدم في قواعد البيانات العلائقية لمعالجة البيانات (النقاط الرئيسية أ-2، ص 129). الانتقاء والعرض والربط اسمها عمليات الجبر العلائقي.',
            en: 'SQL is a language used in relational databases to process data (Key Points a-2, p. 129). Selection, projection and join are the relational operations.',
          },
          success: { ar: 'صح! SQL = لغة. +10 نقط', en: 'Correct! SQL = a language. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الـ L في SQL معناها Language = لغة.', en: 'The L in SQL stands for Language.' },
        { ar: 'والعمليات التلاتة اسمها الجبر العلائقي.', en: 'And the three operations are called relational operations.' },
      ],
    },
    {
      source: { ar: 'تمرين (3)، ص 132', en: 'Exercise (3), p. 132' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'اختار العبارة الصحيحة عن عملية الربط (Join):', en: 'Choose the correct statement about the join operation:' },
          options: [
            { ar: 'إنشاء جدول جديد عن طريق ربط المعلومات من جداول متعددة حسب شروط معينة.', en: 'Making a new table by linking information from several tables by certain conditions.' },
            { ar: 'استخدام لغة SQL لتسجيل أو حذف البيانات في جدول.', en: 'Using SQL to record or delete data in a table.' },
            { ar: 'استخراج السجلات اللي بتستوفي شروط محددة بس من جدول.', en: 'Pulling out only the records that meet set conditions from a table.' },
            { ar: 'استخراج الحقول اللي بتستوفي شروط محددة بس من جدول.', en: 'Pulling out only the fields that meet set conditions from a table.' },
          ],
          answer: 0,
          explanation: {
            ar: 'الربط: ربط بيانات من جداول متعددة حسب شروط محددة وعرضها كجدول واحد. استخراج السجلات = انتقاء، واستخراج الحقول = عرض.',
            en: 'Join: linking data from several tables by set conditions and showing it as one table. Pulling out records = selection; pulling out fields = projection.',
          },
          success: { ar: 'صح! ربط = جداول متعددة. +10 نقط', en: 'Correct! Join = several tables. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الربط محتاج أكتر من جدول.', en: 'A join needs more than one table.' },
        { ar: 'دوّر على "جداول متعددة".', en: 'Look for "several tables".' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 9-2!', en: 'You finished lesson 9-2!' } },
        {
          type: 'recap',
          items: [
            { code: 'Record', text: { ar: 'صف', en: 'row' } },
            { code: 'Field', text: { ar: 'عمود', en: 'column' } },
            { code: 'Selection', text: { ar: 'صفوف بشرط', en: 'rows by a condition' } },
            { code: 'Projection', text: { ar: 'أعمدة معينة', en: 'certain columns' } },
            { code: 'Join', text: { ar: 'جداول ← جدول', en: 'tables → one table' } },
            { code: 'SQL', text: { ar: 'لغة المعالجة', en: 'the processing language' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة التوصيل أولًا، وتحدي الكود بعدها.', en: 'Well done! The matching game first, then the code challenge.' },
        { ar: 'في التحدي هتكتب شرط الانتقاء بنفسك.', en: 'In the challenge you write the selection condition yourself.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'المصطلح ومعناه', en: 'The term and its meaning' },
        source: { ar: 'النقاط الرئيسية (أ-1، 2)، ص 129', en: 'Key Points (a-1, 2), p. 129' },
        pairs: [
          { left: { text: { ar: 'الجدول (Table)', en: 'Table' } }, right: { ar: 'بيتكون من صفوف وأعمدة', en: 'Made of rows and columns' } },
          { left: { text: { ar: 'السجل (Record)', en: 'Record' } }, right: { ar: 'صف واحد = بيانات طالب واحد', en: 'One row = one student’s data' } },
          { left: { text: { ar: 'الحقل (Field)', en: 'Field' } }, right: { ar: 'عمود واحد = نوع واحد من البيانات', en: 'One column = one kind of data' } },
          { left: { text: { ar: 'العلاقات', en: 'Relationships' } }, right: { ar: 'ربط الجداول عشان مفيش تكرار', en: 'Linking tables so nothing repeats' } },
          { left: { text: { ar: 'SQL', en: 'SQL' } }, right: { ar: 'لغة معالجة البيانات العلائقية', en: 'The language for processing relational data' } },
        ],
      },
      {
        title: { ar: 'العملية وناتجها', en: 'The operation and its result' },
        source: { ar: 'النقاط الرئيسية (أ-3)، ص 129 – 130', en: 'Key Points (a-3), pp. 129 – 130' },
        pairs: [
          { left: { text: { ar: 'الانتقاء (Selection)', en: 'Selection' } }, right: { ar: 'صفوف نادي C2 بس: آدم ويوسف', en: 'Only the C2 rows: Adam and Youssef' } },
          { left: { text: { ar: 'العرض (Projection)', en: 'Projection' } }, right: { ar: 'عمود اسم الطالب بس', en: 'Only the student-name column' } },
          { left: { text: { ar: 'الربط (Join)', en: 'Join' } }, right: { ar: 'جدول الطلاب + جدول النوادي في جدول واحد', en: 'Students table + clubs table in one table' } },
        ],
      },
    ],
  },

  challenge: {
    title: { ar: 'انتقاء طلاب نادي', en: 'Select a club’s students' },
    intro: {
      ar: 'الدالة countInClub بتعدّ طلاب نادي معيّن من جدول الكتاب (C1 أو C2). ناقصها سطر واحد: شرط الانتقاء.',
      en: 'The function countInClub counts the students of one club in the book’s table (C1 or C2). It is missing one line: the selection condition.',
    },
    source: { ar: 'الفكرة من: الانتقاء ص 129', en: 'Idea from: selection p. 129' },
    functionName: 'countInClub',
    starter: {
      ar: "function countInClub(club) {\n  // عمود رمز النادي من جدول الطلاب (خالد، آدم، مالك، عمر، يوسف)\n  const clubs = ['C1', 'C2', 'C1', 'C1', 'C2'];\n  let count = 0;\n  for (const c of clubs) {\n    // ← اكتب هنا سطر الانتقاء: لو c يساوي 'C' + club زوّد count\n\n  }\n  return count;\n}\n",
      en: "function countInClub(club) {\n  // The club-code column of the students table (Khaled, Adam, Malek, Omar, Youssef)\n  const clubs = ['C1', 'C2', 'C1', 'C1', 'C2'];\n  let count = 0;\n  for (const c of clubs) {\n    // ← write the selection line here: if c equals 'C' + club, add 1 to count\n\n  }\n  return count;\n}\n",
    },
    tests: [
      { input: 1, expected: 3 },
      { input: 2, expected: 2 },
      { input: 3, expected: 0 },
    ],
    banned: { pattern: 'return\\s+\\d', label: 'إرجاع رقم ثابت' },
    hints: [
      {
        ar: 'الانتقاء = نختار الصفوف اللي بتحقق شرط. الشرط هنا: رمز النادي يساوي النادي المطلوب.',
        en: 'Selection = choosing the rows that meet a condition. Here the condition is: the club code equals the club asked for.',
      },
      {
        ar: "استخدم if، وقارن c بـ 'C' + club، ولو صح زوّد count بواحد.",
        en: "Use if, compare c with 'C' + club, and if it matches add one to count.",
      },
      { ar: "if (c === 'C' + club) count++;", en: "if (c === 'C' + club) count++;" },
    ],
  },
};
