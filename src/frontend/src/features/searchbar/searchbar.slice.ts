import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface SearchbarState {
  search: string;
  tempSearch: string;
}

const initialState: SearchbarState = {
  search: "",
  tempSearch: "",
};

const searchbarSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setTempSearch: (state, action: PayloadAction<string>) => {
      state.tempSearch = action.payload;
    },
  },
});

export const { setSearch, setTempSearch } = searchbarSlice.actions;

export const selectSearchQuery = (state: RootState) =>
  state.searchbarReducer.search;
export const selectTempSearchQuery = (state: RootState) =>
  state.searchbarReducer.tempSearch;

export const searchbarReducer = searchbarSlice.reducer;
