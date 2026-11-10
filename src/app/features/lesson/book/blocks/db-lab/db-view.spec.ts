import { dbView } from './db-view';

const students = [
  { id: 'S1', name: { ar: 'خالد', en: 'Khaled' }, club: 'C1' },
  { id: 'S2', name: { ar: 'آدم', en: 'Adam' }, club: 'C2' },
  { id: 'S3', name: { ar: 'يوسف', en: 'Youssef' }, club: 'C2' },
];
const clubs = [
  { id: 'C1', name: { ar: 'نادي السباحة', en: 'Swimming club' } },
  { id: 'C2', name: { ar: 'نادي التنس', en: 'Tennis club' } },
];

describe('dbView', () => {
  it('shows the whole table', () => {
    const v = dbView(students, clubs, 'C2', 'table');
    expect(v.rowCount).toBe(3);
    expect(v.colCount).toBe(3);
  });

  it('selection keeps only the rows of the chosen club', () => {
    const v = dbView(students, clubs, 'C2', 'selection');
    expect(v.rows.filter((r) => r.kept).map((r) => r.id)).toEqual(['S2', 'S3']);
    expect(v.colCount).toBe(3);
  });

  it('projection keeps only the name column', () => {
    const v = dbView(students, clubs, 'C2', 'projection');
    expect(v.columns.filter((c) => c.kept).map((c) => c.key)).toEqual(['name']);
    expect(v.rowCount).toBe(3);
  });

  it('join adds each student’s club activity', () => {
    const v = dbView(students, clubs, 'C2', 'join');
    expect(v.colCount).toBe(4);
    expect(v.rows.map((r) => r.activity?.en)).toEqual(['Swimming club', 'Tennis club', 'Tennis club']);
  });
});
