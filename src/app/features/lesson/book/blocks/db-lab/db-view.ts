import { DbClub, DbStudent, Localized } from '@core/models';

/** What the lab shows: the whole table, or the result of one relational operation. */
export type DbMode = 'table' | 'selection' | 'projection' | 'join';

export type DbColumn = 'id' | 'name' | 'club' | 'activity';

export interface DbRow {
  id: string;
  name: Localized;
  club: string;
  /** The club's activity, only filled in by a join. */
  activity?: Localized;
  /** False when a selection drops the row. */
  kept: boolean;
}

export interface DbView {
  columns: readonly { key: DbColumn; kept: boolean; added: boolean }[];
  rows: readonly DbRow[];
  /** How many rows and columns make up the result. */
  rowCount: number;
  colCount: number;
}

/**
 * Runs one operation on the students table.
 * - selection: keeps only the rows of `club`.
 * - projection: keeps only the student-name column.
 * - join: adds each student's club activity from the clubs table (matched on the club code).
 */
export function dbView(students: readonly DbStudent[], clubs: readonly DbClub[], club: string, mode: DbMode): DbView {
  const base: DbColumn[] = ['id', 'name', 'club'];
  const keys: DbColumn[] = mode === 'join' ? [...base, 'activity'] : base;
  const columns = keys.map((key) => ({
    key,
    kept: mode !== 'projection' || key === 'name',
    added: key === 'activity',
  }));
  const rows = students.map((s) => ({
    ...s,
    activity: mode === 'join' ? clubs.find((c) => c.id === s.club)?.name : undefined,
    kept: mode !== 'selection' || s.club === club,
  }));
  return {
    columns,
    rows,
    rowCount: rows.filter((r) => r.kept).length,
    colCount: columns.filter((c) => c.kept).length,
  };
}
