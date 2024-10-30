import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface SearchbarState {
  search: string;
}

const initialState: SearchbarState = {
  search: "",
};

const searchbarSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = searchbarSlice.actions;

export const selectSearchQuery = (state: RootState) =>
  state.searchbarReducer.search;

export const searchbarReducer = searchbarSlice.reducer;
