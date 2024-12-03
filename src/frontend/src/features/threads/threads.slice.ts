import {
  ThreadsResponse,
  ThreadsState,
} from "@features/threads/threads.types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store.ts";

const initialState: ThreadsState = {
  threads: undefined,
  title: {
    value: "",
    error: {
      isError: false,
      message: undefined,
    },
  },
  content: {
    value: "",
    error: {
      isError: false,
      message: undefined,
    },
  },
};

const threadsSlice = createSlice({
  name: "threadForm",
  initialState: initialState,
  reducers: {
    setThreads: (
      state,
      action: PayloadAction<ThreadsResponse[] | undefined>,
    ) => {
      state.threads = action.payload;
    },
    setThreadTitle: (state, action: PayloadAction<string>) => {
      state.title.value = action.payload;
    },
    setThreadTitleError: (state, action: PayloadAction<string>) => {
      state.title.error.isError = true;
      state.title.error.message = action.payload;
    },
    clearThreadTitleError: (state) => {
      state.title.error.isError = false;
      state.title.error.message = undefined;
    },
    setThreadContent: (state, action: PayloadAction<string>) => {
      state.content.value = action.payload;
    },
    setThreadContentError: (state, action: PayloadAction<string>) => {
      state.content.error.isError = true;
      state.content.error.message = action.payload;
    },
    clearThreadContentError: (state) => {
      state.content.error.isError = false;
      state.content.error.message = undefined;
    },
    clearThreadForm: (state) => {
      state.title.value = "";
      state.title.error.isError = false;
      state.title.error.message = undefined;
      state.content.value = "";
      state.content.error.isError = false;
      state.content.error.message = undefined;
    },
    clearThreadFormErrors: (state) => {
      state.title.error.isError = false;
      state.title.error.message = undefined;
      state.content.error.isError = false;
      state.content.error.message = undefined;
    },
  },
});

export const {
  setThreads,
  setThreadTitle,
  setThreadTitleError,
  clearThreadTitleError,
  setThreadContent,
  setThreadContentError,
  clearThreadContentError,
  clearThreadForm,
  clearThreadFormErrors,
} = threadsSlice.actions;

export const selectThreads = (state: RootState) =>
  state.threadFormReducer.threads;
export const selectThreadTitle = (state: RootState) =>
  state.threadFormReducer.title.value;
export const selectThreadTitleError = (state: RootState) =>
  state.threadFormReducer.title.error;
export const selectThreadContent = (state: RootState) =>
  state.threadFormReducer.content.value;
export const selectThreadContentError = (state: RootState) =>
  state.threadFormReducer.content.error;

export const threadsReducer = threadsSlice.reducer;
