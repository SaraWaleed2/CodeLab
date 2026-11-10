import { Lesson } from '@core/models';

/**
 * Lesson 3-5 "تقنيات المعلومات للسلامة (٢)" — ministry book pp. 44–47.
 * Book notes:
 * - The lesson's heading (p.44) reads "تقنيات المعلومات للسلامة 2"; the unit cover's title is used.
 * - The six steps are taken from the diagram and list on p.44 (sender 1–3, receiver 4–6).
 * - The hash value "06fe3f3e" is the book's own sample.
 * - p.45 answer key: (1) a ✕, b ✓, c ✓, d ✕. Exercises on p.47 have no answer key.
 */
export const LESSON_3_5: Lesson = {
  unitId: 3,
  id: '3-5',
  title: { ar: 'تقنيات المعلومات للسلامة (٢)', en: 'Information Technologies for Safety (2)' },
  bookPages: '44 – 47',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! الدرس ده عن التوقيع الرقمي: إزاي نتأكد إن الرسالة جاية من صاحبها ومحدش غيّر فيها.', en: 'Hi! This lesson is about digital signatures: how to be sure a message came from its sender and nobody changed it.' },
        { ar: 'في الآخر لعبة ترتيب: رتّب خطوات المُرسل والمستلم.', en: 'At the end there is an ordering game: put the sender’s and receiver’s steps in order.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-1)، ص 44', en: 'Key Points (a-1), p. 44' },
      blocks: [
        { type: 'heading', text: { ar: 'دالة التجزئة', en: 'Hash function' }, code: '(Hash function)' },
        {
          type: 'cards',
          items: [
            { title: { ar: 'دالة التجزئة', en: 'Hash function' }, en: 'Hash function', text: { ar: 'أداة بتحسب قيمة فريدة بناءً على بيانات الإدخال.', en: 'A tool that computes a unique value from the input data.' } },
            { title: { ar: 'قيمة التجزئة', en: 'Hash value' }, en: 'hash value', text: { ar: 'القيمة الناتجة من دالة التجزئة. مينفعش نستعيد البيانات الأصلية منها.', en: 'The value the hash function produces. You cannot get the original data back from it.' }, example: { ar: '06fe3f3e', en: '06fe3f3e' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: البيانات ← دالة ← بصمة قصيرة فريدة', en: 'Remember: data → function → short unique fingerprint' } },
      ],
      bito: [
        { ar: 'قيمة التجزئة زي بصمة الإصبع للبيانات: صغيرة، ومميزة لكل بيانات.', en: 'A hash value is like a fingerprint for data: small, and unique to each piece of data.' },
        { ar: 'لو حرف واحد اتغيّر في الأصل، البصمة بتتغير تمامًا.', en: 'Change one character in the original and the fingerprint changes completely.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-2)، ص 44', en: 'Key Points (a-2), p. 44' },
      blocks: [
        { type: 'heading', text: { ar: 'التوقيع الرقمي', en: 'Digital signature' }, code: '(Digital signature)' },
        {
          type: 'lead',
          text: { ar: 'تقنية بتستخدم التشفير بالمفتاح العام عشان تثبت إن الرسالة جاية من المُرسل فعلًا، ومحدش غيّر فيها.', en: 'A technique that uses public key encryption to prove a message really came from the sender and was not changed.' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'من المُرسل؟', en: 'Who sent it?' }, text: { ar: 'بيثبت إن المُرسل هو فعلًا اللي بعت الرسالة.', en: 'Proves the sender really sent the message.' } },
            { title: { ar: 'اتغيّرت؟', en: 'Was it changed?' }, text: { ar: 'بيثبت إن الرسالة متعدّلتش في الطريق.', en: 'Proves the message was not altered on the way.' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: التوقيع = هوية + سلامة الرسالة', en: 'Remember: signature = identity + message integrity' } },
      ],
      bito: [
        { ar: 'زي توقيعك على ورقة: بيثبت إنك إنت اللي كتبتها.', en: 'Like signing a paper: it proves you wrote it.' },
        { ar: 'بس التوقيع الرقمي كمان بيكشف لو حد غيّر في الورقة بعد ما وقّعت.', en: 'But a digital signature also reveals if someone changed the paper after you signed.' },
      ],
    },
    {
      source: { ar: 'الرسم والإجراءات، ص 44', en: 'The diagram and steps, p. 44' },
      blocks: [
        { type: 'heading', text: { ar: 'خطوات التوقيع الرقمي', en: 'The steps of a digital signature' } },
        {
          type: 'sequence',
          groups: [
            {
              who: { ar: 'إجراءات المُرسل', en: 'The sender’s steps' },
              steps: [
                { text: { ar: 'تستخدم دالة التجزئة لتوليد قيمة تجزئة من النص العادي للرسالة.', en: 'Use a hash function to make a hash value from the message’s plaintext.' }, sample: '06fe3f3e' },
                { text: { ar: 'تشفّر قيمة التجزئة بالمفتاح الخاص للمُرسل. القيمة المشفرة دي هي التوقيع الرقمي.', en: 'Encrypt the hash value with the sender’s private key. That encrypted value is the digital signature.' } },
                { text: { ar: 'تبعت النص العادي والتوقيع الرقمي للمستلم.', en: 'Send the plaintext and the digital signature to the receiver.' } },
              ],
            },
            {
              who: { ar: 'إجراءات المستلم', en: 'The receiver’s steps' },
              steps: [
                { text: { ar: 'يستخدم المفتاح العام للمُرسل عشان يفك تشفير التوقيع الرقمي ويسترجع قيمة التجزئة الأصلية.', en: 'Use the sender’s public key to decrypt the signature and recover the original hash value.' }, sample: '06fe3f3e' },
                { text: { ar: 'يستخدم نفس دالة التجزئة عشان يولّد قيمة تجزئة جديدة من النص العادي اللي استلمه.', en: 'Use the same hash function to make a new hash value from the plaintext received.' }, sample: '06fe3f3e' },
                { text: { ar: 'يقارن القيمتين: لو اتطابقت، يتأكد إن الرسالة جاية من المُرسل ومحدش غيّر فيها.', en: 'Compare the two values: if they match, the message really came from the sender and was not changed.' } },
              ],
            },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: المُرسل: جزّئ · شفّر · ابعت. المستلم: فك · جزّئ · قارن', en: 'Remember: sender: hash · encrypt · send. Receiver: decrypt · hash · compare' } },
      ],
      bito: [
        { ar: 'اضغط "الخطوة اللي بعدها" وشوف القيمة 06fe3f3e بتتحرك بين الاتنين.', en: 'Press "next step" and watch the value 06fe3f3e travel between the two.' },
        { ar: 'لو القيمتين اختلفوا، يبقى الرسالة اتلعب فيها أو مش من المُرسل.', en: 'If the two values differ, the message was tampered with or is not from the sender.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (أ-3)، ص 45', en: 'Key Points (a-3), p. 45' },
      blocks: [
        { type: 'heading', text: { ar: 'جهة التصديق والشهادة الرقمية', en: 'Certification authority and digital certificate' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'جهة التصديق', en: 'Certification authority' }, en: 'Certification authority (CA)', text: { ar: 'منظمة طرف ثالث موثوقة بتتحقق إذا كان المفتاح العام بتاع شخص بيخصه فعلًا.', en: 'A trusted third-party organisation that checks whether a public key really belongs to a person.' } },
            { title: { ar: 'الشهادة الرقمية', en: 'Digital certificate' }, text: { ar: 'بتصدرها جهة التصديق، وبتتضمن المفتاح العام ومعلومات تعريف صاحب المفتاح.', en: 'Issued by the CA; it contains the public key and information identifying its owner.' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: الشهادة = بطاقة هوية للمفتاح العام', en: 'Remember: a certificate = an ID card for the public key' } },
      ],
      bito: [
        { ar: 'إيه اللي يضمن إن المفتاح العام ده بتاع صاحبه فعلًا؟ جهة التصديق.', en: 'What guarantees this public key really belongs to its owner? The certification authority.' },
        { ar: 'زي قسم الشرطة اللي بيصدر بطاقة الهوية.', en: 'Like the office that issues your ID card.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (ب)، ص 45', en: 'Key Points (b), p. 45' },
      blocks: [
        { type: 'heading', text: { ar: 'SSL/TLS', en: 'SSL/TLS' } },
        {
          type: 'lead',
          text: { ar: 'تقنية بتشفّر الاتصال بين خادم الويب والمتصفح بطريقة المفتاح المؤقت (Session Key). عنوان الموقع بيبدأ بـ https://.', en: 'A technology that encrypts the connection between a web server and a browser using the session key method. The site address starts with https://.' },
        },
        {
          type: 'cards',
          items: [
            { title: { ar: 'SSL', en: 'SSL' }, text: { ar: 'الاسم القديم (Secure Sockets Layer).', en: 'The older name (Secure Sockets Layer).' } },
            { title: { ar: 'TLS', en: 'TLS' }, text: { ar: 'الإصدار الأحدث والأكثر أمانًا (Transport Layer Security).', en: 'The newer, more secure version (Transport Layer Security).' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: https = اتصال مشفّر', en: 'Remember: https = encrypted connection' } },
      ],
      bito: [
        { ar: 'القفل اللي بيظهر جنب عنوان الموقع معناه إن الاتصال مشفّر.', en: 'The padlock beside the site address means the connection is encrypted.' },
        { ar: 'الاسم "SSL" لسه مشهور، بس اللي بيتستخدم فعليًا دلوقتي هو TLS.', en: 'The name "SSL" is still popular, but what is actually used now is TLS.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1) ب، ص 45', en: 'Test Your Knowledge (1) b, p. 45' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: التوقيع الرقمي بيتعمل عن طريق تشفير قيمة تجزئة الرسالة بالمفتاح الخاص للمُرسل.', en: 'True or false: a digital signature is made by encrypting the message’s hash value with the sender’s private key.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 0,
          explanation: {
            ar: '✓. المُرسل بيشفّر قيمة التجزئة بمفتاحه الخاص، والناتج هو التوقيع الرقمي.',
            en: '✓. The sender encrypts the hash value with their private key, and the result is the digital signature.',
          },
          success: { ar: 'صح! تجزئة + مفتاح خاص = توقيع. +10 نقط', en: 'Correct! Hash + private key = signature. +10 pts' },
        },
      ],
      bito: [
        { ar: 'افتكر الخطوة 2 عند المُرسل.', en: 'Think of step 2 at the sender.' },
        { ar: 'المفتاح الخاص هو اللي بيتوقّع بيه، والعام هو اللي بيتحقق بيه.', en: 'The private key signs; the public key verifies.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (1) أ، ص 45', en: 'Test Your Knowledge (1) a, p. 45' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'صح ولا غلط: لو اتغيّر حرف واحد في البيانات الأصلية، قيمة التجزئة هتتغير في حرف واحد بس.', en: 'True or false: if one character in the original data changes, the hash value changes in only one character.' },
          options: [
            { ar: '✓ صح', en: '✓ True' },
            { ar: '✕ غلط', en: '✕ False' },
          ],
          answer: 1,
          explanation: {
            ar: '✕. لو في حرف واحد مختلف في الرسالة الأصلية، قيمة التجزئة الناتجة هتبقى مختلفة تمامًا.',
            en: '✕. If even one character differs in the original, the resulting hash value will be completely different.',
          },
          success: { ar: 'صح! تغيير بسيط = بصمة مختلفة تمامًا. +10 نقط', en: 'Correct! A tiny change = a totally different fingerprint. +10 pts' },
        },
      ],
      bito: [
        { ar: 'عشان كده الهاش بيكشف أي تلاعب مهما كان صغير.', en: 'That is why a hash reveals any tampering, however small.' },
        { ar: 'جرّب تتخيل: حرف زيادة في الرسالة = بصمة تانية خالص.', en: 'Picture it: one extra letter in the message = a whole different fingerprint.' },
      ],
    },
    {
      source: { ar: 'تحدى معلوماتك (3)، ص 45', en: 'Test Your Knowledge (3), p. 45' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'إيه اسم التكنولوجيا المستخدمة لتشفير الاتصال بين خادم الويب والمتصفح؟', en: 'What is the technology used to encrypt the connection between a web server and a browser?' },
          options: [
            { ar: 'SSL/TLS', en: 'SSL/TLS' },
            { ar: 'دالة التجزئة', en: 'A hash function' },
            { ar: 'جهة التصديق', en: 'A certification authority' },
            { ar: 'السياسة الأساسية', en: 'A basic policy' },
          ],
          answer: 0,
          explanation: {
            ar: 'SSL/TLS هي التقنية اللي بتشفّر الاتصال بين خادم الويب والمتصفح بطريقة المفتاح المؤقت.',
            en: 'SSL/TLS encrypts the connection between a web server and a browser using the session key method.',
          },
          success: { ar: 'صح! https = SSL/TLS. +10 نقط', en: 'Correct! https = SSL/TLS. +10 pts' },
        },
      ],
      bito: [
        { ar: 'فكّر في العنوان اللي بيبدأ بـ https.', en: 'Think of the address that starts with https.' },
        { ar: 'القفل جنب العنوان علامته.', en: 'The padlock beside the address is its sign.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 3-5 والوحدة 3!', en: 'You finished lesson 3-5 and Unit 3!' } },
        {
          type: 'recap',
          items: [
            { code: '06fe3f3e', text: { ar: 'قيمة التجزئة', en: 'hash value' } },
            { code: '3 + 3', text: { ar: 'خطوات التوقيع', en: 'signature steps' } },
            { code: 'CA', text: { ar: 'جهة التصديق', en: 'certification authority' } },
            { code: 'https', text: { ar: 'SSL/TLS', en: 'SSL/TLS' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! آخر لعبة في الوحدة: رتّب خطوات التوقيع الرقمي.', en: 'Well done! The last game of the unit: order the digital-signature steps.' },
        { ar: 'ابدأ بالمُرسل: جزّئ، شفّر، ابعت.', en: 'Start with the sender: hash, encrypt, send.' },
      ],
    },
  ],

  game: {
    kind: 'order',
    rounds: [
      {
        title: { ar: 'خطوات المُرسل', en: 'The sender’s steps' },
        source: { ar: 'إجراءات المُرسل، ص 44', en: 'The sender’s steps, p. 44' },
        steps: [
          { ar: 'يولّد قيمة تجزئة من النص العادي', en: 'Makes a hash value from the plaintext' },
          { ar: 'يشفّر قيمة التجزئة بمفتاحه الخاص (التوقيع الرقمي)', en: 'Encrypts the hash value with their private key (the digital signature)' },
          { ar: 'يبعت النص العادي والتوقيع الرقمي', en: 'Sends the plaintext and the digital signature' },
        ],
      },
      {
        title: { ar: 'خطوات المستلم', en: 'The receiver’s steps' },
        source: { ar: 'إجراءات المستلم، ص 44', en: 'The receiver’s steps, p. 44' },
        steps: [
          { ar: 'يفك تشفير التوقيع بالمفتاح العام للمُرسل ويسترجع قيمة التجزئة', en: 'Decrypts the signature with the sender’s public key to recover the hash value' },
          { ar: 'يولّد قيمة تجزئة جديدة من النص العادي المستلم', en: 'Makes a new hash value from the plaintext received' },
          { ar: 'يقارن القيمتين: لو اتطابقت، الرسالة سليمة', en: 'Compares the two values: if they match, the message is genuine' },
        ],
      },
      {
        title: { ar: 'العملية كلها', en: 'The whole process' },
        source: { ar: 'الرسم والإجراءات، ص 44', en: 'The diagram and steps, p. 44' },
        steps: [
          { ar: 'المُرسل يولّد قيمة تجزئة من الرسالة', en: 'The sender makes a hash value from the message' },
          { ar: 'المُرسل يشفّرها بمفتاحه الخاص', en: 'The sender encrypts it with their private key' },
          { ar: 'المُرسل يبعت الرسالة والتوقيع', en: 'The sender sends the message and the signature' },
          { ar: 'المستلم يفك التوقيع بالمفتاح العام', en: 'The receiver decrypts the signature with the public key' },
          { ar: 'المستلم يولّد قيمة تجزئة جديدة', en: 'The receiver makes a new hash value' },
          { ar: 'المستلم يقارن القيمتين', en: 'The receiver compares the two values' },
        ],
      },
    ],
  },
};
