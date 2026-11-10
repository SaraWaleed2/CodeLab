import { Lesson } from '@core/models';

/**
 * Every lesson, loaded only when opened. To add a lesson: create its file under
 * content/unit-XX/ and add one line here.
 */
const LESSONS: Record<string, () => Promise<Lesson>> = {
  '1/1-1': () => import('./unit-01/lesson-1-1').then((m) => m.LESSON_1_1),
  '1/1-2': () => import('./unit-01/lesson-1-2').then((m) => m.LESSON_1_2),
  '2/2-1': () => import('./unit-02/lesson-2-1').then((m) => m.LESSON_2_1),
  '2/2-2': () => import('./unit-02/lesson-2-2').then((m) => m.LESSON_2_2),
  '2/2-3': () => import('./unit-02/lesson-2-3').then((m) => m.LESSON_2_3),
  '3/3-1': () => import('./unit-03/lesson-3-1').then((m) => m.LESSON_3_1),
  '3/3-2': () => import('./unit-03/lesson-3-2').then((m) => m.LESSON_3_2),
  '3/3-3': () => import('./unit-03/lesson-3-3').then((m) => m.LESSON_3_3),
  '3/3-4': () => import('./unit-03/lesson-3-4').then((m) => m.LESSON_3_4),
  '3/3-5': () => import('./unit-03/lesson-3-5').then((m) => m.LESSON_3_5),
  '4/4-1': () => import('./unit-04/lesson-4-1').then((m) => m.LESSON_4_1),
  '5/5-1': () => import('./unit-05/lesson-5-1').then((m) => m.LESSON_5_1),
  '5/5-2': () => import('./unit-05/lesson-5-2').then((m) => m.LESSON_5_2),
  '5/5-3': () => import('./unit-05/lesson-5-3').then((m) => m.LESSON_5_3),
  '6/6-1': () => import('./unit-06/lesson-6-1').then((m) => m.LESSON_6_1),
  '6/6-2': () => import('./unit-06/lesson-6-2').then((m) => m.LESSON_6_2),
  '6/6-3': () => import('./unit-06/lesson-6-3').then((m) => m.LESSON_6_3),
  '6/6-4': () => import('./unit-06/lesson-6-4').then((m) => m.LESSON_6_4),
  '6/6-5': () => import('./unit-06/lesson-6-5').then((m) => m.LESSON_6_5),
  '6/6-6': () => import('./unit-06/lesson-6-6').then((m) => m.LESSON_6_6),
  '6/6-7': () => import('./unit-06/lesson-6-7').then((m) => m.LESSON_6_7),
  '6/6-8': () => import('./unit-06/lesson-6-8').then((m) => m.LESSON_6_8),
  '6/6-9': () => import('./unit-06/lesson-6-9').then((m) => m.LESSON_6_9),
  '6/6-10': () => import('./unit-06/lesson-6-10').then((m) => m.LESSON_6_10),
  '7/7-1': () => import('./unit-07/lesson-7-1').then((m) => m.LESSON_7_1),
  '7/7-2': () => import('./unit-07/lesson-7-2').then((m) => m.LESSON_7_2),
  '7/7-3': () => import('./unit-07/lesson-7-3').then((m) => m.LESSON_7_3),
  '8/8-1': () => import('./unit-08/lesson-8-1').then((m) => m.LESSON_8_1),
  '8/8-2': () => import('./unit-08/lesson-8-2').then((m) => m.LESSON_8_2),
  '8/8-3': () => import('./unit-08/lesson-8-3').then((m) => m.LESSON_8_3),
  '8/8-4': () => import('./unit-08/lesson-8-4').then((m) => m.LESSON_8_4),
  '8/8-5': () => import('./unit-08/lesson-8-5').then((m) => m.LESSON_8_5),
  '9/9-1': () => import('./unit-09/lesson-9-1').then((m) => m.LESSON_9_1),
  '9/9-2': () => import('./unit-09/lesson-9-2').then((m) => m.LESSON_9_2),
  '9/9-3': () => import('./unit-09/lesson-9-3').then((m) => m.LESSON_9_3),
  '10/10-1': () => import('./unit-10/lesson-10-1').then((m) => m.LESSON_10_1),
  '10/10-2': () => import('./unit-10/lesson-10-2').then((m) => m.LESSON_10_2),
  '10/10-3': () => import('./unit-10/lesson-10-3').then((m) => m.LESSON_10_3),
  '10/10-4': () => import('./unit-10/lesson-10-4').then((m) => m.LESSON_10_4),
  '10/10-5': () => import('./unit-10/lesson-10-5').then((m) => m.LESSON_10_5),
  '10/10-6': () => import('./unit-10/lesson-10-6').then((m) => m.LESSON_10_6),
  '11/11-1': () => import('./unit-11/lesson-11-1').then((m) => m.LESSON_11_1),
  '11/11-2': () => import('./unit-11/lesson-11-2').then((m) => m.LESSON_11_2),
  '11/11-3': () => import('./unit-11/lesson-11-3').then((m) => m.LESSON_11_3),
  '11/11-4': () => import('./unit-11/lesson-11-4').then((m) => m.LESSON_11_4),
  '12/12-1': () => import('./unit-12/lesson-12-1').then((m) => m.LESSON_12_1),
  '12/12-2': () => import('./unit-12/lesson-12-2').then((m) => m.LESSON_12_2),
  '12/12-3': () => import('./unit-12/lesson-12-3').then((m) => m.LESSON_12_3),
  '12/12-4': () => import('./unit-12/lesson-12-4').then((m) => m.LESSON_12_4),
  '12/12-5': () => import('./unit-12/lesson-12-5').then((m) => m.LESSON_12_5),
  '13/13-1': () => import('./unit-13/lesson-13-1').then((m) => m.LESSON_13_1),
  '13/13-2': () => import('./unit-13/lesson-13-2').then((m) => m.LESSON_13_2),
  '13/13-3': () => import('./unit-13/lesson-13-3').then((m) => m.LESSON_13_3),
  '13/13-4': () => import('./unit-13/lesson-13-4').then((m) => m.LESSON_13_4),
  '13/13-5': () => import('./unit-13/lesson-13-5').then((m) => m.LESSON_13_5),
  '13/13-6': () => import('./unit-13/lesson-13-6').then((m) => m.LESSON_13_6),
};

export function loadLesson(unitId: string | null, lessonId: string | null): Promise<Lesson | null> {
  const load = LESSONS[`${unitId}/${lessonId}`];
  return load ? load() : Promise.resolve(null);
}
