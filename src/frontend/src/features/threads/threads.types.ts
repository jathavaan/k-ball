export interface ThreadsProps {
  playerId: number;
}

export interface ThreadsResponse {
  id: number;
  user: string;
  timestamp: string;
  title: string;
  content: string;
  comments: ThreadCommentResponse[];
}

export interface ThreadCommentResponse {
  id: number;
  user: string;
  timestamp: string;
  content: string;
}

export interface ThreadsState {
  threads: ThreadsResponse[] | undefined;
  title: ThreadFormInput;
  content: ThreadFormInput;
}

export interface ThreadFormInput {
  value: string;
  error: ThreadFormError;
}

export interface ThreadFormError {
  isError: boolean;
  message?: string;
}
