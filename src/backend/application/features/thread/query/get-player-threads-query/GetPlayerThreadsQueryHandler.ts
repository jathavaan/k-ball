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

    return threads
      .sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
      )
      .map(
        (thread) =>
          new ThreadVm(
            thread.id,
            thread.user.id,
            thread.user.email,
            thread.title,
            thread.content,
            thread.threadComments.length,
            thread.timestamp,
          ),
      );
  }
}
