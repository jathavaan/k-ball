export interface ThreadProps {
  threadId: number;
  timestamp: string;
  email: string;
  title: string;
  content: string;
  threadComments: ThreadCommentProps[];
}

export interface ThreadCommentProps {
  commentId: number;
  timestamp: string;
  email: string;
  content: string;
}

export interface ThreadState {
  isCommentSectionOpen: boolean;
}
