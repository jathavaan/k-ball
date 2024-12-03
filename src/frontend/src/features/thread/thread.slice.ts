import { ThreadState } from "@features/thread/thread.types.ts";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store.ts";

const initialState: ThreadState = {
  isCommentSectionOpen: false,
};

const threadSlice = createSlice({
  name: "thread",
  initialState,
  reducers: {
    toggleCommentSection: (state) => {
      state.isCommentSectionOpen = !state.isCommentSectionOpen;
    },
  },
});

export const { toggleCommentSection } = threadSlice.actions;
export const threadReducer = threadSlice.reducer;
export const selectIsCommentSectionOpen = (state: RootState) =>
  state.threadReducer.isCommentSectionOpen;
