import { useMutation } from "@tanstack/react-query";
import {
  deleteThread,
  deleteThreadComment,
  getThreadComments,
  postThreadComment,
} from "@features/thread/thread.api.ts";

export const usePostThreadComment = (
  userId: number,
  threadId: number,
  content: string,
) =>
  useMutation({
    mutationKey: ["postThreadComment"],
    mutationFn: () => postThreadComment(userId, threadId, content),
  });

export const useThreadComments = (threadId: number) =>
  useMutation({
    mutationKey: ["threadComments", threadId],
    mutationFn: () => getThreadComments(threadId),
  });

export const useDeleteThread = (threadId: number) =>
  useMutation({
    mutationKey: ["deleteThread", threadId],
    mutationFn: () => deleteThread(threadId),
  });

export const useDeleteThreadComment = (threadCommentId: number) =>
  useMutation({
    mutationKey: ["deleteThreadComment", threadCommentId],
    mutationFn: () => deleteThreadComment(threadCommentId),
  });
