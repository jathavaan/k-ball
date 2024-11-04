import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface SortState {
  sortBy: "fullName" | "rating";
  sortOrder: "DESC" | "ASC";
}

const initialState: SortState = {
  sortBy: "fullName",
  sortOrder: "ASC",
};

const playerSortingSlice = createSlice({
  name: "playerSorting",
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<"fullName" | "rating">) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<"DESC" | "ASC">) => {
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
