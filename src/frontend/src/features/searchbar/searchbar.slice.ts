import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { SearchbarState } from "./searchbar.types.ts";

const initialState: SearchbarState = {
  searchQuery: "",
  searchQueryForCount: "",
  localSearchQuery: "",
  searchResultCount: 0,
};

const searchbarSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSearchQueryForCount: (state, action: PayloadAction<string>) => {
      state.searchQueryForCount = action.payload;
    },
    setLocalSearchQuery: (state, action: PayloadAction<string>) => {
      state.localSearchQuery = action.payload;
    },
    setSearchResultCount: (
      state,
      action: PayloadAction<number | undefined>,
    ) => {
      state.searchResultCount = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setSearchQueryForCount,
  setLocalSearchQuery,
  setSearchResultCount,
} = searchbarSlice.actions;

export const selectSearchQuery = (state: RootState) =>
  state.searchbarReducer.searchQuery;
export const selectSearchQueryForCount = (state: RootState) =>
  state.searchbarReducer.searchQueryForCount;
export const selectLocalSearchQuery = (state: RootState) =>
  state.searchbarReducer.localSearchQuery;
export const selectSearchResultCount = (state: RootState) =>
  state.searchbarReducer.searchResultCount;

export const searchbarReducer = searchbarSlice.reducer;
