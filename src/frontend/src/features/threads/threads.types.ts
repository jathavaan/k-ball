export interface ThreadsProps {
  playerId: number;
}

export interface ThreadsResponse {
  id: number;
  userId: number;
  email: string;
  timestamp: string;
  title: string;
  content: string;
  commentsCount: number;
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
