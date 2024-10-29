import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
export const searchbarReducer = searchbarSlice.reducer;
