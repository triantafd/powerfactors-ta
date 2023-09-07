/** @format */

export type SortDirection = "asc" | "desc";

export type SortedByState<T> = {
  field: keyof T;
  direction: SortDirection;
}[];

export function multiLevelSort<T>(data: T[], sortedBy: SortedByState<T>): T[] {
  console.log(data, "ok", sortedBy);
  return [...data].sort((a, b) => {
    for (const sortState of sortedBy) {
      if (a[sortState.field] < b[sortState.field]) {
        return sortState.direction === "asc" ? -1 : 1;
      }
      if (a[sortState.field] > b[sortState.field]) {
        return sortState.direction === "asc" ? 1 : -1;
      }
    }
    return 0;
  });
}
