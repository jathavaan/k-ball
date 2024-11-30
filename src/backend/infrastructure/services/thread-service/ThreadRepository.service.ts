import {
  PlayerRepositoryServiceBase,
  ThreadRepositoryServiceBase,
  UserRepositoryServiceBase,
} from "../../../application/contracts";
import { Thread, ThreadComment } from "../../../domain/entities";
import { KBallDbContext } from "../../persistence/dataSource";
import { injectable } from "inversify";
import { container } from "../inversify.config";

@injectable()
export class ThreadRepositoryService implements ThreadRepositoryServiceBase {
  dbContext = KBallDbContext.manager;
  playerRepositoryService = container.get<PlayerRepositoryServiceBase>(
    "PlayerRepositoryServiceBase",
  );
  userRepositoryService = container.get<UserRepositoryServiceBase>(
    "UserRepositoryServiceBase",
  );

  async getThread(threadId: number): Promise<Thread | null> {
    return await this.dbContext.findOne(Thread, {
      where: {
        id: threadId,
      },
    });
  }

  async getPlayerThreads(playerId: number): Promise<Thread[]> {
    return await this.dbContext.find(Thread, {
      where: {
        player: {
          id: playerId,
        },
      },
      relations: {
        player: true,
        threadComments: true,
      },
    });
  }

  async insertThread(
    userId: number,
    playerId: number,
    content: string,
  ): Promise<boolean> {
    const user = await this.userRepositoryService.getUserById(userId);
    if (!user) return false;

    const player = await this.playerRepositoryService.getPlayerById(playerId);
    if (!player) return false;

    const thread = new Thread();
    thread.user = user;
    thread.player = player;
    thread.content = content;

    await this.dbContext.save(thread);
    return true;
  }

  async updateThread(threadId: number, content: string): Promise<boolean> {
    const thread = await this.getThread(threadId);
    if (!thread) return false;

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
