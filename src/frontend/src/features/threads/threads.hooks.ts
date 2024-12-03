import {
  usePlayerThreads,
  usePostPlayerThread,
} from "@features/threads/threads.query.ts";
import { useEffect } from "react";
import { getLoggedInUser } from "@features/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store.ts";
import {
  clearThreadContentError,
  clearThreadForm,
  clearThreadTitleError,
  selectThreadContent,
  selectThreadContentError,
  selectThreadTitle,
  selectThreadTitleError,
  setThreadContent,
  setThreadContentError,
  setThreads,
  setThreadTitle,
  setThreadTitleError,
} from "@features/threads/threads.slice.ts";

export const useThreads = (playerId: number) => {
  const dispatch = useDispatch<AppDispatch>();

  const userId = getLoggedInUser();
  const title = useSelector(selectThreadTitle);
  const content = useSelector(selectThreadContent);
  const threadTitleError = useSelector(selectThreadTitleError);
  const threadContentError = useSelector(selectThreadContentError);

  const {
    mutate: mutatePlayerThreads,
    isPending: isPlayerThreadsPending,
    isError: isPlayerThreadsError,
  } = usePlayerThreads(playerId);

  useEffect(() => {
    mutatePlayerThreads(undefined, {
      onSuccess: (data) => {
        dispatch(setThreads(data));
      },
    });
  }, [dispatch, mutatePlayerThreads, playerId]);

  const {
    mutate: mutatePostThread,
    isPending: isPostThreadPending,
    isError: isPostThreadError,
  } = usePostPlayerThread(userId!, playerId, title, content);

  const handleTitleChange = (title: string) => {
    dispatch(setThreadTitle(title));
    if (!title) {
      dispatch(setThreadTitleError("This field is required"));
      return;
    }

    dispatch(clearThreadTitleError());
  };

  const handleContentChange = (content: string) => {
    dispatch(setThreadContent(content));
    if (!content) {
      dispatch(setThreadContentError("This field is required"));
      return;
    }

    dispatch(clearThreadContentError());
  };

  const onPostThreadClick = () => {
    if (threadContentError.isError || threadTitleError.isError) return;
    mutatePostThread(undefined, {
      onSuccess: () => {
        dispatch(clearThreadForm());
        mutatePlayerThreads(undefined, {
          onSuccess: (data) => dispatch(setThreads(data)),
        });
      },
    });
  };

  return {
    isPlayerThreadsPending,
    isPlayerThreadsError,
    isPostThreadPending,
    isPostThreadError,
    onPostThreadClick,
    handleTitleChange,
    handleContentChange,
  };
};
