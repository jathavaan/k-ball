import { Request } from "../../../../common";
import { ThreadCommentVm, ThreadVm } from "../../../../view-models";
import { GetPlayerThreadsQuery } from "./GetPlayerThreadsQuery";
import { GetPlayerThreadsQueryValidator } from "./GetPlayerThreadsQueryValidator";
import { ThreadRepositoryServiceBase } from "../../../../contracts";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { Thread } from "../../../../../domain/entities";

export class GetPlayerThreadsQueryHandler
  implements Request<GetPlayerThreadsQuery, ThreadVm[]>
{
  private validator = new GetPlayerThreadsQueryValidator();
  private threadRepositoryService = container.get<ThreadRepositoryServiceBase>(
    "ThreadRepositoryServiceBase",
  );

  async handle(request: GetPlayerThreadsQuery): Promise<ThreadVm[]> {
    this.validator.validate(request);
    const threads = await this.threadRepositoryService.getPlayerThreads(
      request.playerId,
    );

    return threads.map((thread) => this.mapThreadToThreadVm(thread));
  }

  private mapThreadToThreadVm(thread: Thread): ThreadVm {
    const comments: ThreadCommentVm[] = thread.threadComments.map(
      (threadComment) =>
        new ThreadCommentVm(
          threadComment.id,
          threadComment.user.email,
          threadComment.content,
          threadComment.timestamp,
        ),
    );
    return new ThreadVm(
      thread.id,
      thread.user.email,
      thread.title,
      thread.content,
      thread.timestamp,
      comments,
    );
  }
}
