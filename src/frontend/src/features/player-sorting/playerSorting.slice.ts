import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { SortState } from "./playerSorting.types.ts";

const initialState: SortState = {
  sortBy: "fullName",
  sortOrder: "ASC",
  selectedSortValue: "fullName_ASC",
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
    setSelectedSortValue: (state, action) => {
      state.selectedSortValue = action.payload;
    },
  },
});

export const { setSortBy, setSortOrder, setSelectedSortValue } =
  playerSortingSlice.actions;

export const selectSortBy = (state: RootState) =>
  state.playerSortingReducer.sortBy;
export const selectSortOrder = (state: RootState) =>
  state.playerSortingReducer.sortOrder;

export const selectSelectedSortValue = (state: RootState) =>
  state.playerSortingReducer.selectedSortValue;

export const playerSortingReducer = playerSortingSlice.reducer;
