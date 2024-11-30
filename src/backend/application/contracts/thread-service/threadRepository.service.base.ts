import { Thread, ThreadComment } from "../../../domain/entities";

export interface ThreadRepositoryServiceBase {
  getThread(threadId: number): Promise<Thread | null>;

  getPlayerThreads(playerId: number): Promise<Thread[]>;

  insertThread(
    userId: number,
    playerId: number,
    title: string,
    content: string,
  ): Promise<boolean>;

  updateThread(
    threadId: number,
    title: string,
    content: string,
  ): Promise<boolean>;

  deleteThread(threadId: number): Promise<boolean>;

  getThreadComment(threadCommentId: number): Promise<ThreadComment | null>;

  insertThreadComment(
    userId: number,
    threadId: number,
    content: string,
  ): Promise<boolean>;

  updateThreadComment(
    threadCommentId: number,
    content: string,
  ): Promise<boolean>;

  deleteThreadComment(threadCommentId: number): Promise<boolean>;
}
