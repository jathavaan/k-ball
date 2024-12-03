export interface ThreadProps {
  threadId: number;
  playerId: number;
  timestamp: string;
  userId: number;
  email: string;
  title: string;
  content: string;
  commentsCount: number;
}

export interface ThreadCommentProps {
  threadId: number;
  commentId: number;
  userId: number;
  email: string;
  content: string;
  timestamp: string;
}

export interface ThreadCommentResponse {
  id: number;
  userId: number;
  email: string;
  content: string;
  timestamp: string;
}

export interface ThreadState {
  openCommentSectionIds: number[];
  openReplySectionIds: number[];
  threadReplies: Record<number, ThreadFormInput>;
  threadCommentsResponse: Record<number, ThreadCommentResponse[]>;
}

export interface ThreadFormInput {
  value: string;
  error: ThreadFormError;
}

export interface ThreadFormError {
  isError: boolean;
  message?: string;
}
