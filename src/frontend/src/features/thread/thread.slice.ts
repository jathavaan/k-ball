import {
  ThreadCommentResponse,
  ThreadState,
} from "@features/thread/thread.types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store.ts";

const initialState: ThreadState = {
  openCommentSectionIds: [],
  openReplySectionIds: [],
  threadReplies: [],
  threadCommentsResponse: [],
};

const threadSlice = createSlice({
  name: "thread",
  initialState,
  reducers: {
    addOpenReplySectionId: (state, action: PayloadAction<number>) => {
      state.openReplySectionIds.push(action.payload);
    },
    removeOpenReplySectionId: (state, action: PayloadAction<number>) => {
      state.openReplySectionIds = state.openReplySectionIds.filter(
        (id) => id !== action.payload,
      );
    },
    addOpenCommentSectionId: (state, action: PayloadAction<number>) => {
      state.openCommentSectionIds.push(action.payload);
    },
    removeOpenCommentSectionId: (state, action: PayloadAction<number>) => {
      state.openCommentSectionIds = state.openCommentSectionIds.filter(
        (id) => id !== action.payload,
      );
    },
    addThreadReply: (state, action: PayloadAction<number>) => {
      state.threadReplies[action.payload] = {
        value: "",
        error: {
          isError: false,
          message: undefined,
        },
      };
    },
    setThreadReplyValue: (
      state,
      action: PayloadAction<{ threadId: number; value: string }>,
    ) => {
      const { threadId, value } = action.payload;
      state.threadReplies[threadId].value = value;
    },
    setThreadReplyError: (
      state,
      action: PayloadAction<{ threadId: number; errorMessage: string }>,
    ) => {
      const { threadId, errorMessage } = action.payload;
      state.threadReplies[threadId].error.message = errorMessage;
      state.threadReplies[threadId].error.isError = true;
    },
    clearThreadReplyForm: (state, action: PayloadAction<number>) => {
      state.threadReplies[action.payload].value = "";
      state.threadReplies[action.payload].error.message = undefined;
      state.threadReplies[action.payload].error.isError = false;
    },
    clearThreadReplyError: (state, action: PayloadAction<number>) => {
      state.threadReplies[action.payload].error.message = undefined;
      state.threadReplies[action.payload].error.isError = false;
    },
    addThreadCommentResponse: (
      state,
      action: PayloadAction<{
        threadId: number;
        threadComments: ThreadCommentResponse[];
      }>,
    ) => {
      const { threadId, threadComments } = action.payload;
      state.threadCommentsResponse[threadId] = threadComments;
    },
  },
});

export const {
  addOpenReplySectionId,
  removeOpenReplySectionId,
  addOpenCommentSectionId,
  addThreadReply,
  removeOpenCommentSectionId,
  setThreadReplyValue,
  setThreadReplyError,
  clearThreadReplyError,
  clearThreadReplyForm,
  addThreadCommentResponse,
} = threadSlice.actions;
export const threadReducer = threadSlice.reducer;
export const selectThreadReplies = (state: RootState) =>
  state.threadReducer.threadReplies;
export const selectOpenCommentSectionIds = (state: RootState) =>
  state.threadReducer.openCommentSectionIds;
export const selectOpenReplySectionIds = (state: RootState) =>
  state.threadReducer.openReplySectionIds;
export const selectThreadCommentResponse = (state: RootState) =>
  state.threadReducer.threadCommentsResponse;
