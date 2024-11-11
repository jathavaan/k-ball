export interface SortState {
  sortBy: "fullName" | "rating";
  sortOrder: "DESC" | "ASC";
  selectedSortValue: string;
}
