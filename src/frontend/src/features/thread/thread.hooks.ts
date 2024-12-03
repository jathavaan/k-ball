import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store.ts";
import {
  addOpenCommentSectionId,
  addOpenReplySectionId,
  addThreadCommentResponse,
  addThreadReply,
  clearThreadReplyError,
  clearThreadReplyForm,
  removeOpenCommentSectionId,
  removeOpenReplySectionId,
  selectOpenCommentSectionIds,
  selectOpenReplySectionIds,
  selectThreadReplies,
  setThreadReplyError,
  setThreadReplyValue,
} from "@features/thread/thread.slice.ts";
import { getLoggedInUser } from "@features/auth";
import {
  useDeleteThread,
  useDeleteThreadComment,
  usePostThreadComment,
  useThreadComments,
} from "@features/thread/thread.query.ts";
import { usePlayerThreads } from "@features/threads/threads.query.ts";
import { setThreads } from "@features/threads/threads.slice.ts";

export const useThread = (threadId: number, playerId: number) => {
  const dispatch = useDispatch<AppDispatch>();
  const openCommentSectionIds = useSelector(selectOpenCommentSectionIds);
  const openReplySectionIds = useSelector(selectOpenReplySectionIds);
  const threadReplies = useSelector(selectThreadReplies);

  const userId = getLoggedInUser();
  if (!userId) throw new Error("User is not logged in");

  const {
    mutate: mutatePostThreadComment,
    isPending: isPostThreadCommentPending,
    isError: isPostThreadCommentError,
  } = usePostThreadComment(userId, threadId, threadReplies[threadId]?.value);

  const {
    mutate: mutateThreadComments,
    isPending: isThreadCommentsPending,
    isError: isThreadCommentsError,
  } = useThreadComments(threadId);

  const {
    mutate: mutateDeleteThread,
    isPending: isDeleteThreadPending,
    isError: isDeleteThreadError,
  } = useDeleteThread(threadId);

  const onCommentSectionClick = (threadId: number) => {
    if (openCommentSectionIds.includes(threadId)) {
      dispatch(removeOpenCommentSectionId(threadId));
    } else {
      dispatch(addOpenCommentSectionId(threadId));
      mutateThreadComments(undefined, {
        onSuccess: (data) =>
          dispatch(
            addThreadCommentResponse({ threadId, threadComments: data }),
          ),
      });
    }
  };

  const onReplySectionClick = (threadId: number) => {
    if (!threadReplies[threadId]) dispatch(addThreadReply(threadId));
    if (openReplySectionIds.includes(threadId)) {
      dispatch(removeOpenReplySectionId(threadId));
    } else {
      dispatch(addOpenReplySectionId(threadId));
    }
  };

  const onThreadReplyChange = (threadId: number, value: string) => {
    if (value.length > 4000) {
      dispatch(
        setThreadReplyError({
          threadId,
          errorMessage: "Comment cannot be longer than 4 000 characters",
        }),
      );
      return;
    }

    dispatch(setThreadReplyValue({ threadId, value }));

    if (value.length === 0) {
      dispatch(
        setThreadReplyError({
          threadId,
          errorMessage: "This field is required",
        }),
      );
      return;
    }

    dispatch(clearThreadReplyError(threadId));
  };

  const onPostThreadCommentClick = () => {
    if (threadReplies[threadId]?.value) {
      mutatePostThreadComment(undefined, {
        onSuccess: () => {
          dispatch(clearThreadReplyForm(threadId));
          mutateThreadComments(undefined, {
            onSuccess: (data) => {
              dispatch(
                addThreadCommentResponse({ threadId, threadComments: data }),
              );
              dispatch(removeOpenReplySectionId(threadId));
              dispatch(addOpenCommentSectionId(threadId));
            },
          });
        },
      });
    }
  };

  const { mutate: mutatePlayerThreads } = usePlayerThreads(playerId);

  const onDeleteThreadClick = () => {
    mutateDeleteThread(undefined, {
      onSuccess: () => {
        mutatePlayerThreads(undefined, {
          onSuccess: (data) => {
            dispatch(setThreads(data));
          },
        });
      },
    });
  };

  return {
    onCommentSectionClick,
    onReplySectionClick,
    onThreadReplyChange,
    onPostThreadCommentClick,
    onDeleteThreadClick,
    isPostThreadCommentPending,
    isPostThreadCommentError,
    isThreadCommentsPending,
    isThreadCommentsError,
    isDeleteThreadPending,
    isDeleteThreadError,
  };
};

export const useThreadComment = (threadId: number, threadCommentId: number) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    mutate: mutateDeleteThreadComment,
    isPending: isDeleteThreadCommentPending,
    isError: isDeleteThreadCommentError,
  } = useDeleteThreadComment(threadCommentId);

  const {
    mutate: mutateThreadComments,
    isPending: isThreadCommentsPending,
    isError: isThreadCommentsError,
  } = useThreadComments(threadId);

  const onDeleteThreadCommentClick = () => {
    mutateDeleteThreadComment(undefined, {
      onSuccess: () => {
        mutateThreadComments(undefined, {
          onSuccess: (data) => {
            dispatch(
              addThreadCommentResponse({ threadId, threadComments: data }),
            );
          },
        });
      },
    });
  };

  return {
    onDeleteThreadCommentClick,
    isDeleteThreadCommentPending,
    isDeleteThreadCommentError,
    isThreadCommentsPending,
    isThreadCommentsError,
  };
};
