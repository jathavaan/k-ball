import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store.ts";
import { toggleCommentSection } from "@features/thread/thread.slice.ts";

export const useThread = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onCommentSectionClick = () => {
    dispatch(toggleCommentSection());
  };

  return {
    onCommentSectionClick,
  };
};
