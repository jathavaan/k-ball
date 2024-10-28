import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface SortState {
  sortBy: "name" | "rating";
  sortOrder: "asc" | "desc";
}

const initialState: SortState = {
  sortBy: "name",
  sortOrder: "asc",
};

const playerSortingSlice = createSlice({
  name: "playerSorting",
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<"name" | "rating">) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<"asc" | "desc">) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { setSortBy, setSortOrder } = playerSortingSlice.actions;

export const selectSortBy = (state: RootState) =>
  state.playerSortingReducer.sortBy;
export const selectSortOrder = (state: RootState) =>
  state.playerSortingReducer.sortOrder;

export const playerSortingReducer = playerSortingSlice.reducer;
