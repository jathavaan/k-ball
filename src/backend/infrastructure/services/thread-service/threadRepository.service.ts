import {
  PlayerRepositoryServiceBase,
  ThreadRepositoryServiceBase,
  UserRepositoryServiceBase,
} from "../../../application/contracts";
import { Thread, ThreadComment } from "../../../domain/entities";
import { inject, injectable } from "inversify";
import { EntityManager } from "typeorm";

@injectable()
export class ThreadRepositoryService implements ThreadRepositoryServiceBase {
  constructor(
    @inject("EntityManager") private readonly dbContext: EntityManager,
    @inject("PlayerRepositoryServiceBase")
    private readonly playerRepositoryService: PlayerRepositoryServiceBase,
    @inject("UserRepositoryServiceBase")
    private readonly userRepositoryService: UserRepositoryServiceBase,
  ) {}

  async getThread(threadId: number): Promise<Thread | null> {
    return await this.dbContext.findOne(Thread, {
      where: {
        id: threadId,
      },
      relations: {
        threadComments: true,
      },
    });
  }

  async getPlayerThreads(playerId: number): Promise<Thread[]> {
    return await this.dbContext.find(Thread, {
      select: {
        id: true,
        title: true,
        content: true,
        timestamp: true,
        user: {
          id: true,
          email: true,
        },
        threadComments: {
          id: true,
          user: {
            email: true,
          },
          content: true,
          timestamp: true,
        },
      },
      where: {
        player: {
          id: playerId,
        },
      },
      relations: {
        player: true,
        user: true,
        threadComments: {
          user: true,
        },
      },
    });
  }

  async insertThread(
    userId: number,
    playerId: number,
    title: string,
    content: string,
  ): Promise<boolean> {
    const user = await this.userRepositoryService.getUserById(userId);
    if (!user) return false;

    const player = await this.playerRepositoryService.getPlayerById(playerId);
    if (!player) return false;

    const thread = new Thread();
    thread.user = user;
    thread.player = player;
    thread.title = title;
    thread.content = content;

    await this.dbContext.save(thread);
    return true;
  }

  async updateThread(
    threadId: number,
    title: string,
    content: string,
  ): Promise<boolean> {
    const thread = await this.getThread(threadId);
    if (!thread) return false;

    thread.title = title;
    thread.content = content;
    await this.dbContext.save(thread);
    return true;
  }

  async deleteThread(threadId: number): Promise<boolean> {
    const thread = await this.getThread(threadId);
    if (!thread) return false;
    await this.dbContext.remove(thread);
    return true;
  }

  async getThreadComment(
    threadCommentId: number,
  ): Promise<ThreadComment | null> {
    return await this.dbContext.findOne(ThreadComment, {
      where: { id: threadCommentId },
    });
  }

  getThreadComments(threadId: number) {
    return this.dbContext.find(ThreadComment, {
      select: {
        id: true,
        content: true,
        timestamp: true,
        user: {
          id: true,
          email: true,
        },
      },
      where: {
        thread: {
          id: threadId,
        },
      },
      relations: {
        user: true,
        thread: true,
      },
    });
  }

  async insertThreadComment(
    userId: number,
    threadId: number,
    content: string,
  ): Promise<boolean> {
    const user = await this.userRepositoryService.getUserById(userId);
    if (!user) return false;
    const thread = await this.getThread(threadId);
    if (!thread) return false;

    const threadComment = new ThreadComment();
    threadComment.user = user;
    threadComment.thread = thread;
    threadComment.content = content;

    await this.dbContext.save(threadComment);
    return true;
  }

  async updateThreadComment(
    threadCommentId: number,
    content: string,
  ): Promise<boolean> {
    const threadComment = await this.getThreadComment(threadCommentId);
    if (!threadComment) return false;

    threadComment.content = content;
    await this.dbContext.save(threadComment);
    return true;
  }

  async deleteThreadComment(threadCommentId: number): Promise<boolean> {
    const threadComment = await this.getThreadComment(threadCommentId);
    if (!threadComment) return false;
    await this.dbContext.remove(threadComment);
    return true;
  }
}
