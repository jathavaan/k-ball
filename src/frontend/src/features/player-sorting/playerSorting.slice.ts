import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface SortState {
  sortBy: "fullName" | "rating";
  sortOrder: "ASC" | "DESC";
}

const initialState: SortState = {
  sortBy: "fullName",
  sortOrder: "DESC",
};

const playerSortingSlice = createSlice({
  name: "playerSorting",
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<"fullName" | "rating">) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<"ASC" | "DESC">) => {
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
