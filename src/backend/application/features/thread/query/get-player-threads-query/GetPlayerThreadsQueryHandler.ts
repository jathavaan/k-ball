import { Request } from "../../../../common";
import { ThreadVm } from "../../../../view-models";
import { GetPlayerThreadsQuery } from "./GetPlayerThreadsQuery";
import { GetPlayerThreadsQueryValidator } from "./GetPlayerThreadsQueryValidator";
import { ThreadRepositoryServiceBase } from "../../../../contracts";
import { inject, injectable } from "inversify";

@injectable()
export class GetPlayerThreadsQueryHandler
  implements Request<GetPlayerThreadsQuery, ThreadVm[]>
{
  constructor(
    @inject("ThreadRepositoryServiceBase")
    private readonly threadRepositoryService: ThreadRepositoryServiceBase,
  ) {}

  private readonly validator = new GetPlayerThreadsQueryValidator();

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
