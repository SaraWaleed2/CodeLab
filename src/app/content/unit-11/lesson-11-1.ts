import { Lesson } from '@core/models';

/**
 * Lesson 11-1 "النمذجة" — ministry book pp. 154–156.
 * Book notes:
 * - p.154: a model is a simplified representation of a phenomenon; modelling is making one. Classified by property
 *   (static / dynamic, deterministic / probabilistic) and by representation (physical: enlarged, full-scale, reduced;
 *   diagrammatic; mathematical). p.155: the three steps of modelling.
 * - The answer key on pp.155–156 is partly unclear; the site's questions follow the definitions and examples in the Key Points.
 */
export const LESSON_11_1: Lesson = {
  unitId: 11,
  id: '11-1',
  title: { ar: 'النمذجة', en: 'Modelling' },
  bookPages: '154 – 156',

  pages: [
    {
      cover: true,
      blocks: [],
      bito: [
        { ar: 'أهلًا! كل خريطة وكل لعبة محاكاة هي "نموذج" من الواقع. هنتعلم أنواع النماذج.', en: 'Hi! Every map and every simulation game is a "model" of reality. We learn the kinds of model.' },
        { ar: 'في الآخر لعبة فرز: صنّف النماذج.', en: 'At the end there is a sorting game: classify the models.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (1، 2)، ص 154', en: 'Key Points (1, 2), p. 154' },
      blocks: [
        { type: 'heading', text: { ar: 'النموذج والنمذجة', en: 'Model and modelling' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'النموذج (Model)', en: 'Model' }, en: 'Model', text: { ar: 'تمثيل مبسط لظاهرة ما.', en: 'A simplified representation of a phenomenon.' }, example: { ar: 'خريطة مدينة: بتفضل المهم بس (الطرق والمباني) من غير كل التفاصيل', en: 'A city map: it keeps only what matters (roads and buildings), not every detail' } },
            { title: { ar: 'النمذجة (Modeling)', en: 'Modelling' }, en: 'Modeling', text: { ar: 'عملية إنشاء نماذج للأحداث أو الظواهر.', en: 'The process of building models of events or phenomena.' }, example: { ar: 'رسم خريطة لحيّك', en: 'Drawing a map of your neighbourhood' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: نموذج = نسخة مبسطة من الواقع', en: 'Remember: a model = a simplified copy of reality' } },
      ],
      bito: [
        { ar: 'الخريطة مش هي المدينة، لكنها بتساعدك تفهمها.', en: 'The map is not the city, but it helps you understand it.' },
        { ar: 'والتبسيط ده هو سر النموذج.', en: 'That simplifying is the secret of a model.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (3)، ص 154', en: 'Key Points (3), p. 154' },
      blocks: [
        { type: 'heading', text: { ar: 'تصنيف النماذج حسب الخصائص', en: 'Models classified by their properties' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'نموذج ثابت', en: 'Static model' }, en: 'Static Model', text: { ar: 'لا يخضع للتغييرات بمرور الوقت.', en: 'Does not change with time.' }, example: { ar: 'مخطط تخطيط الغرفة', en: 'A plan of a room’s layout' } },
            { title: { ar: 'نموذج ديناميكي', en: 'Dynamic model' }, en: 'Dynamic Model', text: { ar: 'نموذج بيتأثر بالتغييرات بمرور الوقت.', en: 'A model affected by changes over time.' }, example: { ar: 'رصيد حساب بنكي بيتغير', en: 'A bank balance that changes' } },
            { title: { ar: 'نموذج حتمي', en: 'Deterministic model' }, en: 'Deterministic Model', text: { ar: 'بيظهر سلوكًا غير عشوائي: فيه نتيجة واحدة بس.', en: 'Shows non-random behaviour: there is one result only.' }, example: { ar: 'المسافة = السرعة × الزمن لسيارة بسرعة ثابتة', en: 'Distance = speed × time for a car at constant speed' } },
            { title: { ar: 'نموذج احتمالي', en: 'Probabilistic model' }, en: 'Probabilistic Model', text: { ar: 'بيتضمن سلوكًا عشوائيًا: النتيجة مش واحدة.', en: 'Includes random behaviour: the result is not a single one.' }, example: { ar: 'رمي النرد، توقعات الطقس', en: 'Rolling a die, a weather forecast' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: حتمي = نتيجة واحدة · احتمالي = أكتر من نتيجة', en: 'Remember: deterministic = one result · probabilistic = more than one' } },
      ],
      bito: [
        { ar: 'لو عرفت المدخلات تقدر تحسب الحتمي بالظبط. الاحتمالي لأ.', en: 'If you know the inputs you can work out a deterministic result exactly. A probabilistic one not.' },
        { ar: 'النرد مفيش حد يعرف هيرمي كام.', en: 'Nobody knows what a die will land on.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (4)، ص 154', en: 'Key Points (4), p. 154' },
      blocks: [
        { type: 'heading', text: { ar: 'تصنيف النماذج حسب طريقة التمثيل', en: 'Models classified by how they are shown' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'نموذج فيزيائي (مكبّر)', en: 'Physical model (enlarged)' }, en: 'Enlarged Model', text: { ar: 'نموذج أكبر من الكائن الفعلي.', en: 'A model bigger than the real thing.' }, example: { ar: 'نموذج الحمض النووي DNA', en: 'A DNA model' } },
            { title: { ar: 'نموذج فيزيائي (بالحجم الكامل)', en: 'Physical model (full-scale)' }, en: 'Full-Scale Model', text: { ar: 'نموذج بنفس حجم الكائن الفعلي.', en: 'A model the same size as the real thing.' }, example: { ar: 'غرفة نموذجية', en: 'A model room' } },
            { title: { ar: 'نموذج فيزيائي (مصغّر)', en: 'Physical model (reduced)' }, en: 'Reduced Model', text: { ar: 'نموذج أصغر من الكائن الفعلي.', en: 'A model smaller than the real thing.' }, example: { ar: 'كرة أرضية، نموذج بلاستيك', en: 'A globe, a plastic model' } },
            { title: { ar: 'نموذج تخطيطي', en: 'Diagrammatic model' }, en: 'Diagrammatic Model', text: { ar: 'تمثيل شيء ما باستخدام رسم تخطيطي.', en: 'Showing something with a diagram.' }, example: { ar: 'مخطط تدفق، خريطة قطارات', en: 'A flowchart, a train map' } },
            { title: { ar: 'نموذج رياضي', en: 'Mathematical model' }, en: 'Mathematical Model', text: { ar: 'تمثيل شيء ما بمعادلات أو تعبيرات رياضية.', en: 'Showing something with equations or mathematical expressions.' }, example: { ar: 'الجهد = التيار × المقاومة', en: 'Voltage = current × resistance' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: فيزيائي = تلمسه · تخطيطي = رسم · رياضي = معادلة', en: 'Remember: physical = you can touch it · diagrammatic = a drawing · mathematical = an equation' } },
      ],
      bito: [
        { ar: 'الكرة الأرضية اللي في فصلك نموذج مصغّر للأرض.', en: 'The globe in your classroom is a reduced model of the Earth.' },
        { ar: 'ونموذج الـ DNA بيكبّر حاجة مش بتتشاف بالعين.', en: 'And a DNA model enlarges something your eye cannot see.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (5)، ص 155', en: 'Key Points (5), p. 155' },
      blocks: [
        { type: 'heading', text: { ar: 'خطوات النمذجة', en: 'The steps of modelling' } },
        {
          type: 'cards',
          items: [
            { title: { ar: 'خطوة 1', en: 'Step 1' }, text: { ar: 'حدد الغرض من النمذجة.', en: 'State the purpose of the model.' }, example: { ar: 'خريطة القطارات: توضح الطريق وأماكن التحويل', en: 'A train map: it shows routes and where to change' } },
            { title: { ar: 'خطوة 2', en: 'Step 2' }, text: { ar: 'وضّح العناصر اللي بتأثر في الغرض والعلاقات بينها.', en: 'Make clear the elements that affect the purpose and the relationships between them.' }, example: { ar: 'العناصر: المحطات والخطوط (من غير الجغرافيا الفعلية)', en: 'The elements: stations and lines (without the real geography)' } },
            { title: { ar: 'خطوة 3', en: 'Step 3' }, text: { ar: 'حدد طريقة التمثيل (Representation).', en: 'Choose how to show it (representation).' }, example: { ar: 'رسم تخطيطي بخطوط ملوّنة', en: 'A diagram with coloured lines' } },
          ],
        },
        { type: 'memo', text: { ar: 'افتكر: غرض ← عناصر ← تمثيل', en: 'Remember: purpose → elements → representation' } },
      ],
      bito: [
        { ar: 'الأول اسأل: النموذج ده هيفيد في إيه؟', en: 'First ask: what will this model be for?' },
        { ar: 'وبعدها احذف أي تفصيلة مش محتاجها.', en: 'Then drop any detail you do not need.' },
      ],
    },
    {
      source: { ar: 'اختبر معلوماتك (1)، ص 155', en: 'Test Your Knowledge (1), p. 155' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'نتيجة رمي النرد: النموذج ده من أنهي نوع؟', en: 'The result of rolling a die: which kind of model is this?' },
          options: [
            { ar: 'نموذج ثابت', en: 'Static model' },
            { ar: 'نموذج حتمي', en: 'Deterministic model' },
            { ar: 'نموذج احتمالي', en: 'Probabilistic model' },
          ],
          answer: 2,
          explanation: {
            ar: 'نتيجة النرد عشوائية ومش واحدة، فهي نموذج احتمالي (مثل توقعات الطقس).',
            en: 'A die’s result is random and not a single one, so it is a probabilistic model (like a weather forecast).',
          },
          success: { ar: 'صح! نرد = احتمالي. +10 نقط', en: 'Correct! A die = probabilistic. +10 pts' },
        },
      ],
      bito: [
        { ar: 'هل ممكن نعرف النتيجة قبل الرمي؟ لأ.', en: 'Can we know the result before the throw? No.' },
        { ar: 'يبقى احتمالي.', en: 'So it is probabilistic.' },
      ],
    },
    {
      source: { ar: 'اختبر معلوماتك (1)، ص 155', en: 'Test Your Knowledge (1), p. 155' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'العلاقة بين المسافة والزمن لعربية بسرعة ثابتة (المسافة = السرعة × الزمن) من أنهي نوع؟', en: 'The relation between distance and time for a car at constant speed (distance = speed × time) is which kind?' },
          options: [
            { ar: 'نموذج حتمي', en: 'Deterministic model' },
            { ar: 'نموذج احتمالي', en: 'Probabilistic model' },
          ],
          answer: 0,
          explanation: {
            ar: 'المسافة محددة بالظبط من السرعة والزمن، فالنتيجة واحدة: نموذج حتمي. وهو كمان نموذج رياضي لأنه معادلة.',
            en: 'The distance is fixed exactly by speed and time, so the result is one: a deterministic model. It is also a mathematical model because it is an equation.',
          },
          success: { ar: 'صح! نتيجة واحدة = حتمي. +10 نقط', en: 'Correct! One result = deterministic. +10 pts' },
        },
      ],
      bito: [
        { ar: 'اكتب السرعة والزمن والنتيجة بتطلع واحدة دايمًا.', en: 'Give the speed and the time and the result is always the same.' },
        { ar: 'مفيش عشوائية.', en: 'There is no randomness.' },
      ],
    },
    {
      source: { ar: 'اختبر معلوماتك (2)، ص 155', en: 'Test Your Knowledge (2), p. 155' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'الكرة الأرضية اللي في الفصل، ده أنهي نموذج؟', en: 'The globe in the classroom is which kind of model?' },
          options: [
            { ar: 'فيزيائي مكبّر', en: 'Enlarged physical model' },
            { ar: 'فيزيائي بالحجم الكامل', en: 'Full-scale physical model' },
            { ar: 'فيزيائي مصغّر', en: 'Reduced physical model' },
            { ar: 'رياضي', en: 'Mathematical model' },
          ],
          answer: 2,
          explanation: {
            ar: 'الكرة الأرضية أصغر بكتير من الأرض، فهي نموذج فيزيائي مصغّر.',
            en: 'A globe is much smaller than the Earth, so it is a reduced physical model.',
          },
          success: { ar: 'صح! كرة أرضية = مصغّر. +10 نقط', en: 'Correct! A globe = reduced. +10 pts' },
        },
      ],
      bito: [
        { ar: 'قارن حجمها بالأرض الحقيقية.', en: 'Compare its size with the real Earth.' },
        { ar: 'أصغر بكتير.', en: 'Much smaller.' },
      ],
    },
    {
      source: { ar: 'النقاط الرئيسية (4)، ص 154', en: 'Key Points (4), p. 154' },
      blocks: [
        {
          type: 'question',
          question: { ar: 'مخطط التدفق (Flowchart) نموذج من أنهي نوع؟', en: 'A flowchart is which kind of model?' },
          options: [
            { ar: 'تخطيطي', en: 'Diagrammatic' },
            { ar: 'رياضي', en: 'Mathematical' },
            { ar: 'فيزيائي مصغّر', en: 'Reduced physical' },
          ],
          answer: 0,
          explanation: {
            ar: 'مخطط التدفق بيمثل الشيء برسم تخطيطي، يعني نموذج تخطيطي.',
            en: 'A flowchart shows something with a diagram, so it is a diagrammatic model.',
          },
          success: { ar: 'صح! رسم = تخطيطي. +10 نقط', en: 'Correct! A drawing = diagrammatic. +10 pts' },
        },
      ],
      bito: [
        { ar: 'كل رسم بأسهم وصناديق نموذج تخطيطي.', en: 'Any drawing of arrows and boxes is a diagrammatic model.' },
        { ar: 'زي اللي رسمناه في الوحدة 12.', en: 'Like the ones we draw in Unit 12.' },
      ],
    },
    {
      source: { ar: 'آخر الدرس', en: 'End of lesson' },
      blocks: [
        { type: 'heading', text: { ar: 'خلّصت درس 11-1!', en: 'You finished lesson 11-1!' } },
        {
          type: 'recap',
          items: [
            { code: '4', text: { ar: 'خصائص: ثابت/ديناميكي، حتمي/احتمالي', en: 'properties: static/dynamic, deterministic/probabilistic' } },
            { code: '3', text: { ar: 'تمثيل: فيزيائي، تخطيطي، رياضي', en: 'representation: physical, diagrammatic, mathematical' } },
            { code: '3', text: { ar: 'خطوات النمذجة', en: 'steps of modelling' } },
          ],
        },
        { type: 'next-steps' },
      ],
      bito: [
        { ar: 'شاطر! لعبة الفرز: حتمي ولا احتمالي، وبعدها نوع التمثيل.', en: 'Well done! The sorting game: deterministic or probabilistic, then the kind of representation.' },
        { ar: 'اسأل نفسك: النتيجة واحدة ولا لأ؟', en: 'Ask yourself: is the result a single one?' },
      ],
    },
  ],

  game: {
    kind: 'sort',
    rounds: [
      {
        title: { ar: 'حتمي ولا احتمالي؟', en: 'Deterministic or probabilistic?' },
        source: { ar: 'النقاط الرئيسية (3)، ص 154', en: 'Key Points (3), p. 154' },
        bins: [
          { id: 'det', label: { ar: 'نموذج حتمي', en: 'Deterministic' } },
          { id: 'prob', label: { ar: 'نموذج احتمالي', en: 'Probabilistic' } },
        ],
        items: [
          { text: { ar: 'المسافة = السرعة × الزمن', en: 'Distance = speed × time' }, bin: 'det' },
          { text: { ar: 'فايدة بسعر ثابت بعد 5 سنين', en: 'Interest at a fixed rate after 5 years' }, bin: 'det' },
          { text: { ar: 'الجهد = التيار × المقاومة', en: 'Voltage = current × resistance' }, bin: 'det' },
          { text: { ar: 'رمي النرد', en: 'Rolling a die' }, bin: 'prob' },
          { text: { ar: 'توقعات الطقس', en: 'A weather forecast' }, bin: 'prob' },
          { text: { ar: 'رمي عملة', en: 'Tossing a coin' }, bin: 'prob' },
        ],
      },
      {
        title: { ar: 'أنهي طريقة تمثيل؟', en: 'Which way of showing it?' },
        source: { ar: 'النقاط الرئيسية (4)، ص 154', en: 'Key Points (4), p. 154' },
        bins: [
          { id: 'enlarged', label: { ar: 'فيزيائي مكبّر', en: 'Enlarged physical' } },
          { id: 'reduced', label: { ar: 'فيزيائي مصغّر', en: 'Reduced physical' } },
          { id: 'diagram', label: { ar: 'تخطيطي', en: 'Diagrammatic' } },
          { id: 'math', label: { ar: 'رياضي', en: 'Mathematical' } },
        ],
        items: [
          { text: { ar: 'نموذج الحمض النووي', en: 'A DNA model' }, bin: 'enlarged' },
          { text: { ar: 'كرة أرضية', en: 'A globe' }, bin: 'reduced' },
          { text: { ar: 'نموذج بلاستيك', en: 'A plastic model' }, bin: 'reduced' },
          { text: { ar: 'مخطط تدفق', en: 'A flowchart' }, bin: 'diagram' },
          { text: { ar: 'خريطة قطارات', en: 'A train map' }, bin: 'diagram' },
          { text: { ar: 'معادلة (الجهد = التيار × المقاومة)', en: 'An equation (voltage = current × resistance)' }, bin: 'math' },
        ],
      },
    ],
  },
};
