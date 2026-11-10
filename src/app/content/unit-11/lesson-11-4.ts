import { Lesson } from '@core/models';

/**
 * Lesson 11-4 "Queues: طوابير الانتظار" — ministry book pp. 165–166.
 * Book notes:
 * - p.165 Key Points: a queue; service start time, service end time, arrival time.
 * - p.165 chart: 4 customers arrive every 20 minutes, each needs 40 minutes: starts at 0, 40, 80, 120; ends at 40, 80, 120, 160;
 *   waits 0, 20, 40, 60. Key: service time 40 min; customer 1's arrival to customer 3's service start = 80 min;
 *   customer 4 from arrival to finish = 100 min; customer 4 waited longest.
 * - The exercises on p.166 have no printed answers and are not used.
 */
export const LESSON_11_4: Lesson = {
  unitId: 11,
  id: '11-4',
  title: { ar: 'طوابير الانتظار (Queues)', en: 'Queues' },
  bookPages: '165 – 166',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! كل ما تقف في طابور الكاشير في السوبر ماركت، إنت جوه نموذج طابور.', en: 'Hi! Whenever you stand in the supermarket cashier queue, you are inside a queue model.' },
        { ar: 'في الآخر لعبة توصيل: وصّل كل زمن بمعناه.', en: 'At the end there is a matching game: link each time to its meaning.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية، ص 165', en: 'Key Points, p. 165' },
      blocks: [
        { type: 'heading', text: { ar: 'قائمة الانتظار', en: 'The queue' }, code: '(Queue)' },
        {
          type: 'cards',
          items: [
            { title: { ar: 'قائمة الانتظار', en: 'Queue' }, en: 'Queue', text: { ar: 'خط بيتشكل لما ينتظر العملاء خدمة ما.', en: 'A line that forms when customers wait for a service.' }, example: { ar: 'عند الكاشير في السوبر ماركت، أو مدخل المعالم السياحية', en: 'At the supermarket cashier or at a tourist site’s entrance' } },
            { title: { ar: 'مش بس بشر!', en: 'Not only people!' }, text: { ar: 'نفس النموذج بيحدد ترتيب العمليات الحاسوبية، زي معالج المهام في المعالج، وطابور الطباعة.', en: 'The same model sets the order of computer jobs, like the task scheduler in the processor and the printer queue.' }, example: { ar: 'مستندات بتتطبع واحد ورا التاني', en: 'Documents printing one after another' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: أول واصل أول مخدوم', en: 'Remember: first come, first served' } },
      ],
      bito: [
        { ar: 'الطابور حتى جوه الكمبيوتر: ملفات الطباعة بتستنى دورها.', en: 'Even inside a computer there is a queue: print files wait for their turn.' },
        { ar: 'ده بيخلّي النموذج مفيد جدًا.', en: 'That makes the model very useful.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (1 إلى 3)، ص 165', en: 'Key Points (1 to 3), p. 165' },
      blocks: [
        { type: 'heading', text: { ar: 'الأزمنة الثلاثة', en: 'The three times' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'وقت بدء الخدمة', en: 'Service start time' }, text: { ar: 'لو مفيش حد قدامك (مفيش طابور): وقت بدء الخدمة = وقت وصولك. ولو فيه عميل سابق: وقت بدء الخدمة = وقت انتهاء خدمة العميل السابق.', en: 'If nobody is ahead of you (no queue): start time = your arrival time. If someone is ahead: start time = the end time of the previous customer’s service.' } },
            { title: { ar: 'وقت انتهاء الخدمة', en: 'Service end time' }, text: { ar: 'وقت بدء الخدمة + مدة الخدمة.', en: 'Service start time + service duration.' } },
            { title: { ar: 'وقت الانتظار', en: 'Waiting time' }, text: { ar: 'وقت بدء الخدمة − وقت الوصول.', en: 'Service start time − arrival time.' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: انتظار = بدأت الخدمة − وصلت', en: 'Remember: wait = service started − arrived' } },
      ],
      bito: [
        { ar: 'لو وصلت والكاشير فاضي، مفيش انتظار.', en: 'If you arrive and the cashier is free, there is no wait.' },
        { ar: 'ولو وصلت والكاشير مشغول، تستنى لحد ما يخلّص اللي قبلك.', en: 'If the cashier is busy, you wait until the one before you finishes.' },
      ],
    },
    {
      source: { ar: 'مثال الكتاب، ص 165', en: 'The book’s example, p. 165' },
      blocks: [
        { type: 'heading', text: { ar: 'جرّب الطابور بنفسك', en: 'Try the queue yourself' } },
        {
          type: 'lead',
          text: { ar: 'رسم الكتاب: 4 عملاء يوصلوا كل 20 دقيقة، وكل واحد خدمته 40 دقيقة. الرمادي = انتظار، والأسود = خدمة. غيّر الأرقام وشوف متى بيزيد الطابور:', en: 'The book’s chart: 4 customers arrive every 20 minutes and each needs 40 minutes. Grey = waiting, black = service. Change the numbers and see when the queue builds:' },
        },
        { type: 'queue-lab' },
        { type: 'memo', text: { ar: 'افتكر: الخدمة أطول من الفرق بين الوصول = الطابور بيطول', en: 'Remember: service longer than the gap between arrivals = the queue grows' } },
      ],
      bito: [
        { ar: 'الأرقام على اليمين هي دقايق الانتظار: 0 و20 و40 و60 زي الكتاب.', en: 'The numbers on the right are the waiting minutes: 0, 20, 40, 60 like the book.' },
        { ar: 'خلّي الفرق بين الوصول 40 أو أكتر وشوف الانتظار بيختفي.', en: 'Set the gap between arrivals to 40 or more and watch the waiting vanish.' },
      ],
    },
    {
      source: { ar: 'الحل (1)، ص 165', en: 'Solution (1), p. 165' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'في رسم الكتاب، كل عميل بياخد خدمة 40 دقيقة. العميل 1 وصل عند 0. متى بتخلّص خدمته؟', en: 'In the book’s chart each customer needs 40 minutes. Customer 1 arrives at 0. When does the service finish?' },
          options: ['20', '40', '60', '80'],
          answer: 1,
          explanation: {
            ar: 'مفيش طابور، فالخدمة بتبدأ عند 0 وتخلّص عند 0 + 40 = 40 دقيقة.',
            en: 'There is no queue, so service starts at 0 and finishes at 0 + 40 = 40 minutes.',
          },
          success: { ar: 'صح! 0 + 40 = 40. +10 نقط', en: 'Correct! 0 + 40 = 40. +10 pts' },
        },
      ],
      bito: [
        { ar: 'وقت النهاية = البداية + المدة.', en: 'End time = start + duration.' },
        { ar: 'وبعده العميل 2 يبدأ.', en: 'Then customer 2 starts.' },
      ],
    },
    {
      source: { ar: 'الحل (2)، ص 165', en: 'Solution (2), p. 165' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'العميل 1 وصل عند 0. العميل 3 بدأ خدمته عند 80 دقيقة. كام دقيقة من وصول العميل 1 لحد بدء خدمة العميل 3؟', en: 'Customer 1 arrived at 0. Customer 3 started service at 80 minutes. How many minutes from customer 1’s arrival until customer 3’s service starts?' },
          options: ['40', '60', '80', '120'],
          answer: 2,
          explanation: {
            ar: 'العميل 2 بيخلّص عند 80، فالعميل 3 بيبدأ عند 80. المدة من 0 لـ80 = 80 دقيقة.',
            en: 'Customer 2 finishes at 80, so customer 3 starts at 80. From 0 to 80 = 80 minutes.',
          },
          success: { ar: 'صح! 80 دقيقة. +10 نقط', en: 'Correct! 80 minutes. +10 pts' },
        },
      ],
      bito: [
        { ar: 'العميل 3 بيستنى لحد ما العميل 2 يخلّص.', en: 'Customer 3 waits until customer 2 finishes.' },
        { ar: 'شوف الأسود في الرسم.', en: 'Look at the black bars in the chart.' },
      ],
    },
    {
      source: { ar: 'الحل (3)، ص 165', en: 'Solution (3), p. 165' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'العميل 4 وصل عند 60 وخدمته انتهت عند 160. كام دقيقة من وصوله لحد انتهاء خدمته؟', en: 'Customer 4 arrived at 60 and was finished at 160. How many minutes from arrival until the end of service?' },
          options: ['40', '60', '100', '160'],
          answer: 2,
          explanation: {
            ar: '160 − 60 = 100 دقيقة (60 انتظار + 40 خدمة).',
            en: '160 − 60 = 100 minutes (60 waiting + 40 service).',
          },
          success: { ar: 'صح! 100 دقيقة. +10 نقط', en: 'Correct! 100 minutes. +10 pts' },
        },
      ],
      bito: [
        { ar: 'انتظار 60 + خدمة 40.', en: 'Waiting 60 + service 40.' },
        { ar: 'يعني ساعة وأربعين دقيقة في المتجر.', en: 'That is an hour and forty minutes in the shop.' },
      ],
    },
    {
      source: { ar: 'الحل (4)، ص 165', en: 'Solution (4), p. 165' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'من العملاء 1 إلى 4، أنهي واحد انتظاره الأطول؟', en: 'Among customers 1 to 4, who waited the longest?' },
          options: ['العميل 1', 'العميل 2', 'العميل 3', 'العميل 4'],
          answer: 3,
          explanation: {
            ar: 'أوقات الانتظار: 0 و20 و40 و60 دقيقة. العميل 4 انتظر الأطول (60 دقيقة).',
            en: 'The waiting times: 0, 20, 40 and 60 minutes. Customer 4 waited the longest (60 minutes).',
          },
          success: { ar: 'صح! العميل 4. +10 نقط', en: 'Correct! Customer 4. +10 pts' },
        },
      ],
      bito: [
        { ar: 'اللي وصل أخر واحد استنى أكتر لأن الطابور اتراكم.', en: 'The last to arrive waited longest because the queue had built up.' },
        { ar: 'في الأداة: أطول انتظار العميل 4.', en: 'In the tool: the longest wait is customer 4.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 11-4 والوحدة 11!', en: 'You finished lesson 11-4 and Unit 11!' } },
        {
          type: 'recap',
          items: [
            { code: 'start + مدة', text: { ar: 'نهاية الخدمة', en: 'end of service' } },
            { code: 'start − وصول', text: { ar: 'وقت الانتظار', en: 'waiting time' } },
            { code: '0 · 20 · 40 · 60', text: { ar: 'انتظار مثال الكتاب', en: 'the book’s waits' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة التوصيل: الأزمنة وأرقام الكتاب.', en: 'Well done! The matching game: the times and the book’s numbers.' },
        { ar: 'استعن برسم الطابور لو احتجت.', en: 'Use the queue chart if you need it.' },
      ],
    },
  ],

  game: {
    kind: 'match',
    rounds: [
      {
        title: { ar: 'الزمن ومعناه', en: 'The time and its meaning' },
        source: { ar: 'النقاط الرئيسية، ص 165', en: 'Key Points, p. 165' },
        pairs: [
          { left: { text: { ar: 'وقت بدء الخدمة (من غير طابور)', en: 'Service start time (no queue)' } }, right: { ar: 'يساوي وقت الوصول', en: 'Equals the arrival time' } },
          { left: { text: { ar: 'وقت بدء الخدمة (مع عميل سابق)', en: 'Service start time (customer ahead)' } }, right: { ar: 'نهاية خدمة العميل السابق', en: 'The end of the previous customer’s service' } },
          { left: { text: { ar: 'وقت انتهاء الخدمة', en: 'Service end time' } }, right: { ar: 'البدء + مدة الخدمة', en: 'The start + the service duration' } },
          { left: { text: { ar: 'وقت الانتظار', en: 'Waiting time' } }, right: { ar: 'البدء − وقت الوصول', en: 'The start − the arrival time' } },
        ],
      },
      {
        title: { ar: 'أرقام مثال الكتاب', en: 'The numbers of the book’s example' },
        source: { ar: 'الحل، ص 165', en: 'The solution, p. 165' },
        pairs: [
          { left: { text: { ar: 'مدة خدمة كل عميل', en: 'Each customer’s service time' } }, right: { ar: '40 دقيقة', en: '40 minutes' } },
          { left: { text: { ar: 'انتظار العميل 2', en: 'Customer 2’s wait' } }, right: { ar: '20 دقيقة', en: '20 minutes' } },
          { left: { text: { ar: 'انتظار العميل 4', en: 'Customer 4’s wait' } }, right: { ar: '60 دقيقة (الأطول)', en: '60 minutes (the longest)' } },
          { left: { text: { ar: 'من وصول العميل 4 لانتهاء خدمته', en: 'From customer 4’s arrival to the end of service' } }, right: { ar: '100 دقيقة', en: '100 minutes' } },
        ],
      },
    ],
  },
};
