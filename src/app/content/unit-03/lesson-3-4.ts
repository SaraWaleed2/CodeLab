import { Lesson } from '@core/models';

/**
 * Lesson 3-4 "تقنيات المعلومات للسلامة (١)" — ministry book pp. 41–43.
 * Book notes:
 * - The lesson's heading (p.41) reads "تقنيات المعلومات للسلامة 4"; the unit cover's title is used.
 * - p.42: the advantages/disadvantages table has its cells swapped between the two columns
 *   (the text under "public key" describes the symmetric key). The table here follows the book's own
 *   definitions on p.41 and the logic of the two methods.
 * - The sample texts "مرحبًا" and "&SA+F¥Cs+A" are the book's own.
 * - Exercises on p.43 have no answer key.
 */
export const LESSON_3_4: Lesson = {
  unitId: 3,
  id: '3-4',
  title: { ar: 'تقنيات المعلومات للسلامة (١)', en: 'Information Technologies for Safety (1)' },
  bookPages: '41 – 43',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! الدرس ده عن التشفير: إزاي نخلّي رسالتنا ماتتقراش لو حد اعترضها.', en: 'Hi! This lesson is about encryption: how to keep a message unreadable if someone intercepts it.' },
        { ar: 'في الآخر لعبة توصيل: وصّل كل مصطلح أو موقف بالطريقة المناسبة.', en: 'At the end there is a matching game: link each term or situation to the right method.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ)، ص 41', en: 'Key Points (a), p. 41' },
      blocks: [
        { type: 'heading', text: { ar: 'التشفير', en: 'Encryption' }, code: '(Encryption)' },
        {
          type: 'lead',
          text: { ar: 'طريقة بنستخدمها عند إرسال المعلومات عشان نمنع أي شخص تاني من اعتراضها، وغير المقصود يقرأها.', en: 'A method used when sending information to stop anyone else from intercepting it, so an unintended reader cannot read it.' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'النص العادي', en: 'Plaintext' }, en: 'plaintext', text: { ar: 'النص الأصلي غير المشفر.', en: 'The original, unencrypted text.' }, example: { ar: 'مرحبًا', en: 'Hello' } },
            { title: { ar: 'النص المشفر', en: 'Ciphertext' }, en: 'ciphertext', text: { ar: 'النص بعد التشفير، شكله كلام غير مفهوم.', en: 'The text after encryption; it looks like gibberish.' }, example: { ar: '&SA+F¥Cs+A', en: '&SA+F¥Cs+A' } },
            { title: { ar: 'فك التشفير', en: 'Decryption' }, en: 'Decryption', text: { ar: 'تحويل النص المشفر تاني لشكله الأصلي كنص عادي.', en: 'Turning the ciphertext back into its original form as plaintext.' } },
            { title: { ar: 'المفتاح', en: 'Key' }, en: 'Key', text: { ar: 'البيانات أو الإجراء المحدد المستخدم للتشفير وفك التشفير.', en: 'The specific data or procedure used for encryption and decryption.' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: عادي ← (مفتاح) ← مشفّر ← (مفتاح) ← عادي', en: 'Remember: plain → (key) → cipher → (key) → plain' } },
      ],
      bito: [
        { ar: 'التشفير زي ما تكتب رسالة بشفرة سرية: اللي معاه المفتاح بس هو اللي يفهمها.', en: 'Encryption is like writing in a secret code: only whoever has the key can understand it.' },
        { ar: 'حتى لو حد خطف الرسالة، هيلاقيها رموز مالهاش معنى.', en: 'Even if someone grabs the message, they just find meaningless symbols.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-1)، ص 41', en: 'Key Points (b-1), p. 41' },
      blocks: [
        { type: 'heading', text: { ar: 'التشفير بالمفتاح المتماثل', en: 'Symmetric key encryption' } },
        {
          type: 'lead',
          text: { ar: 'نفس المفتاح بيُستخدم للتشفير وفك التشفير. المُرسل بيشفّر برسالة بالمفتاح المشترك، والمستلم بيفكّها بنفس المفتاح اللي اتبعت له قبل كده.', en: 'The same key is used to encrypt and decrypt. The sender encrypts with the shared key, and the receiver decrypts with the same key that was sent earlier.' },
        },
        {
          type: 'sequence',
          groups: [
            {
              who: { ar: 'المُرسل', en: 'Sender' },
              steps: [
                { text: { ar: 'يكتب النص العادي', en: 'Writes the plaintext' }, sample: 'مرحبًا' },
                { text: { ar: 'يشفّره بالمفتاح المشترك', en: 'Encrypts it with the shared key' }, sample: '&SA+F¥Cs+A' },
                { text: { ar: 'يرسل النص المشفر', en: 'Sends the ciphertext' } },
              ],
            },
            {
              who: { ar: 'المستلم', en: 'Receiver' },
              steps: [
                { text: { ar: 'يستلم النص المشفر', en: 'Receives the ciphertext' }, sample: '&SA+F¥Cs+A' },
                { text: { ar: 'يفكّه بنفس المفتاح المشترك', en: 'Decrypts it with the same shared key' }, sample: 'مرحبًا' },
              ],
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: مفتاح واحد للاتنين', en: 'Remember: one key for both' } },
      ],
      bito: [
        { ar: 'زي صندوق بقفل واحد وليه نسختين مفتاح: واحدة معاك وواحدة مع صاحبك.', en: 'Like a box with one lock and two copies of its key: one with you, one with your friend.' },
        { ar: 'المشكلة: إزاي توصّل المفتاح لصاحبك بأمان؟', en: 'The problem: how do you get the key to your friend safely?' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-2)، ص 41', en: 'Key Points (b-2), p. 41' },
      blocks: [
        { type: 'heading', text: { ar: 'التشفير بالمفتاح العام', en: 'Public key encryption' } },
        {
          type: 'lead',
          text: { ar: 'طريقة تشفير بتستخدم مفتاحين مختلفين: مفتاح عام (public key) ومفتاح خاص (private key).', en: 'An encryption method using two different keys: a public key and a private key.' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'المفتاح العام', en: 'Public key' }, en: 'public key', text: { ar: 'المُرسل بيشفّر بيه الرسالة. مفتاح المستلم العام، ومتاح للجميع.', en: 'The sender encrypts the message with it. It is the receiver’s public key, available to everyone.' } },
            { title: { ar: 'المفتاح الخاص', en: 'Private key' }, en: 'private key', text: { ar: 'المستلم بيفك بيه الرسالة. وهو عنده بس، محدش تاني بيملكه.', en: 'The receiver decrypts with it. Only the receiver has it.' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: يشفّر بالعام · يفك بالخاص', en: 'Remember: lock with the public · open with the private' } },
      ],
      bito: [
        { ar: 'تخيّل صندوق بريد: أي حد يقدر يحط فيه جواب (المفتاح العام)، لكن إنت بس اللي معاك المفتاح اللي يفتحه (الخاص).', en: 'Picture a mailbox: anyone can drop a letter in (public key), but only you hold the key that opens it (private).' },
        { ar: 'كده مفيش داعي تبعت مفتاح سري لحد.', en: 'So there is no need to send a secret key to anyone.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-3)، ص 42', en: 'Key Points (b-3), p. 42' },
      blocks: [
        { type: 'heading', text: { ar: 'مقارنة بين الطريقتين', en: 'Comparing the two methods' } },
        {
          type: 'compare',
          columns: [
            { ar: 'المفتاح المتماثل', en: 'Symmetric key' },
            { ar: 'المفتاح العام', en: 'Public key' },
          ],
          rows: [
            { label: { ar: 'المفاتيح', en: 'Keys' }, cells: [{ ar: 'مفتاح واحد مشترك', en: 'One shared key' }, { ar: 'مفتاحين: عام وخاص', en: 'Two keys: public and private' }] },
            { label: { ar: 'المزايا', en: 'Advantages' }, cells: [{ ar: 'تشفير وفك تشفير أسرع مقارنة بالمفتاح العام.', en: 'Faster encryption and decryption than public key.' }, { ar: 'مفيش حاجة سرية تتبعت: المفتاح العام متاح للجميع، فإدارة المفاتيح أسهل.', en: 'No secret has to be sent: the public key is open to all, so managing keys is easier.' }] },
            { label: { ar: 'العيوب', en: 'Disadvantages' }, cells: [{ ar: 'أي حد يمسك المفتاح يقدر يفك التشفير، وكل مُرسل محتاج مفتاح مختلف، فإدارتها أصعب.', en: 'Anyone who gets the key can decrypt, and each sender needs a different key, so managing them is harder.' }, { ar: 'أبطأ في التشفير وفك التشفير مقارنة بالمتماثل.', en: 'Slower to encrypt and decrypt than symmetric.' }] },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: متماثل = سريع · عام = إدارة مفاتيح أسهل', en: 'Remember: symmetric = fast · public = easier key handling' } },
      ],
      bito: [
        { ar: 'جدول الكتاب في الصفحة دي فيه خانات اتبدلت بالغلط، فرتّبناها حسب تعريف كل طريقة.', en: 'The book’s table on this page has some cells swapped by mistake, so we set them by each method’s own definition.' },
        { ar: 'اللي بتحتاجه السرعة؟ المتماثل. اللي بتحتاجه الأمان عند التبادل؟ العام.', en: 'Need speed? Symmetric. Need safe exchange? Public.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب-4)، ص 42', en: 'Key Points (b-4), p. 42' },
      blocks: [
        { type: 'heading', text: { ar: 'طريقة المفتاح المؤقت', en: 'Session key method' }, code: '(Session key method)' },
        {
          type: 'lead',
          text: { ar: 'طريقة تجمع بين التشفير بالمفتاح المتماثل والتشفير بالمفتاح العام، عشان نستفيد من مميزات الاتنين.', en: 'A method combining symmetric and public key encryption, to get the benefits of both.' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'المفتاح العام', en: 'Public key' }, text: { ar: 'بيبعت المفتاح المشترك بأمان.', en: 'Sends the shared key safely.' } },
            { title: { ar: 'المفتاح المتماثل', en: 'Symmetric key' }, text: { ar: 'بيشفّر الرسائل نفسها بسرعة.', en: 'Encrypts the messages themselves, fast.' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: العام يبعت المفتاح · المتماثل يشفّر الرسالة', en: 'Remember: public sends the key · symmetric encrypts the message' } },
      ],
      bito: [
        { ar: 'كده بناخد حلاوة الاتنين: أمان تبادل المفتاح مع سرعة التشفير.', en: 'This way we get the best of both: safe key exchange with fast encryption.' },
        { ar: 'ده اللي بيحصل فعلًا في المواقع اللي بتستخدمها كل يوم.', en: 'This is what happens on the sites you use every day.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1)، ص 42', en: 'Test Your Knowledge (1), p. 42' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه الاسم بتاع عملية تحويل النص المشفر تاني لشكله الأصلي كنص عادي؟', en: 'What is the process of turning ciphertext back into its original plaintext called?' },
          options: [
            { ar: 'التشفير (Encryption)', en: 'Encryption' },
            { ar: 'فك التشفير (Decryption)', en: 'Decryption' },
            { ar: 'المفتاح (Key)', en: 'Key' },
            { ar: 'النص المشفر (Ciphertext)', en: 'Ciphertext' },
          ],
          answer: 1,
          explanation: {
            ar: 'فك التشفير هو تحويل النص المشفر لنص عادي. التشفير هو العكس، والمفتاح هو اللي بنستخدمه في الاتنين.',
            en: 'Decryption turns ciphertext into plaintext. Encryption is the opposite, and the key is what both use.',
          },
          success: { ar: 'صح! فك التشفير = رجوع للنص الأصلي. +10 نقط', en: 'Correct! Decryption = back to the original text. +10 pts' },
        },
      ],
      bito: [
        { ar: 'اسأل نفسك: الاتجاه ده بيقفل ولا بيفتح؟', en: 'Ask yourself: does this direction lock or unlock?' },
        { ar: 'التشفير بيقفل، وعكسه بيفتح.', en: 'Encryption locks; its opposite unlocks.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (2)، ص 42', en: 'Test Your Knowledge (2), p. 42' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: في التشفير بالمفتاح المتماثل بيتستخدم نفس المفتاح للتشفير وفك التشفير.', en: 'True or false: symmetric key encryption uses the same key for encrypting and decrypting.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. المفتاح المتماثل بيشفّر ويفك بنفس المفتاح المشترك. اللي بيستخدم مفتاحين هو التشفير بالمفتاح العام.',
            en: '✓. A symmetric key encrypts and decrypts with the same shared key. Using two keys is public key encryption.',
          },
          success: { ar: 'صح! متماثل = نفس المفتاح. +10 نقط', en: 'Correct! Symmetric = same key. +10 pts' },
        },
      ],
      bito: [
        { ar: 'كلمة "متماثل" معناها زي بعض: المفتاحين نفس الحاجة.', en: '"Symmetric" means identical: both sides use the same key.' },
        { ar: 'اللي بيستخدم مفتاحين هو المفتاح العام.', en: 'The one with two keys is public key encryption.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (3)، ص 42', en: 'Test Your Knowledge (3), p. 42' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه اسم الطريقة اللي بتجمع بين التشفير بالمفتاح المتماثل والتشفير بالمفتاح العام؟', en: 'What is the method that combines symmetric key and public key encryption called?' },
          options: [
            { ar: 'طريقة المفتاح المؤقت (Session key method)', en: 'Session key method' },
            { ar: 'التشفير بالمفتاح المتماثل', en: 'Symmetric key encryption' },
            { ar: 'التشفير بالمفتاح العام', en: 'Public key encryption' },
            { ar: 'فك التشفير', en: 'Decryption' },
          ],
          answer: 0,
          explanation: {
            ar: 'طريقة المفتاح المؤقت بتستخدم المفتاح العام لإرسال المفتاح المشترك بأمان، وبعدين المتماثل لتشفير الرسائل بسرعة.',
            en: 'The session key method uses the public key to send the shared key safely, then symmetric encryption to encrypt messages quickly.',
          },
          success: { ar: 'صح! الاتنين مع بعض. +10 نقط', en: 'Correct! Both together. +10 pts' },
        },
      ],
      bito: [
        { ar: 'الاسم فيه كلمة "مفتاح مؤقت"، وده الاسم اللي الكتاب بيدّيه للدمج.', en: 'The name has "session key", which is the book’s name for the combination.' },
        { ar: 'الدمج بيستفيد من أمان العام وسرعة المتماثل.', en: 'The mix takes public key’s safety and symmetric’s speed.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 3-4!', en: 'You finished lesson 3-4!' } },
        {
          type: 'recap',
          items: [
            { code: '1', text: { ar: 'مفتاح للمتماثل', en: 'key for symmetric' } },
            { code: '2', text: { ar: 'مفتاحين للعام', en: 'keys for public' } },
            { code: '1 + 2', text: { ar: 'المفتاح المؤقت', en: 'session key' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! جرّب لعبة التوصيل.', en: 'Well done! Try the matching game.' },
        { ar: 'دوس على كارت وبعدين على معناه.', en: 'Tap a card, then its meaning.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'وصّل المصطلح بمعناه', en: 'Match the term to its meaning' },
        source: { ar: 'النقاط الرئيسية (أ)، ص 41', en: 'Key Points (a), p. 41' },
        pairs: [
          { left: { text: { ar: 'النص العادي', en: 'Plaintext' } }, right: { ar: 'النص الأصلي غير المشفر', en: 'The original, unencrypted text' } },
          { left: { text: { ar: 'النص المشفر', en: 'Ciphertext' } }, right: { ar: 'النص بعد التشفير', en: 'The text after encryption' } },
          { left: { text: { ar: 'فك التشفير', en: 'Decryption' } }, right: { ar: 'تحويل المشفر لنص عادي', en: 'Turning ciphertext back to plaintext' } },
          { left: { text: { ar: 'المفتاح', en: 'Key' } }, right: { ar: 'اللي بنشفّر ونفك بيه', en: 'What we encrypt and decrypt with' } },
        ],
      },
      {
        title: { ar: 'أنهي طريقة تشفير؟', en: 'Which encryption method?' },
        source: { ar: 'النقاط الرئيسية (ب)، ص 41–42', en: 'Key Points (b), pp. 41–42' },
        pairs: [
          { left: { text: { ar: 'المفتاح المتماثل', en: 'Symmetric key' } }, right: { ar: 'مفتاح واحد مشترك، وأسرع في التشفير', en: 'One shared key, and faster encryption' } },
          { left: { text: { ar: 'المفتاح العام', en: 'Public key' } }, right: { ar: 'مفتاحين: عام للتشفير وخاص لفك التشفير', en: 'Two keys: public to encrypt, private to decrypt' } },
          { left: { text: { ar: 'المفتاح المؤقت', en: 'Session key' } }, right: { ar: 'بيجمع بين الطريقتين', en: 'Combines both methods' } },
          { left: { text: { ar: 'المفتاح الخاص', en: 'Private key' } }, right: { ar: 'مع المستلم بس، وبيفك بيه الرسالة', en: 'Only the receiver has it, and decrypts with it' } },
        ],
      },
    ],
  },
};
