import { Request } from "../../../../common";
import { GetThreadCommentsQuery } from "./getThreadCommentsQuery";
import { ThreadCommentVm } from "../../../../view-models";
import { ThreadRepositoryServiceBase } from "../../../../contracts";
import { GetThreadCommentsQueryValidator } from "./getThreadCommentsQueryValidator";
import { inject, injectable } from "inversify";

@injectable()
export class GetThreadCommentsQueryHandler
  implements Request<GetThreadCommentsQuery, ThreadCommentVm[]>
{
  constructor(
    @inject("ThreadRepositoryServiceBase")
    private readonly threadRepositoryService: ThreadRepositoryServiceBase,
  ) {}

  private readonly validator = new GetThreadCommentsQueryValidator();

  async handle(request: GetThreadCommentsQuery): Promise<ThreadCommentVm[]> {
    this.validator.validate(request);
    const threadComments = await this.threadRepositoryService.getThreadComments(
      request.threadId,
    );

    return threadComments
      .sort(
        (a, b) =>
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
      )
      .map(
        (threadComment) =>
          new ThreadCommentVm(
            threadComment.id,
            threadComment.user.id,
            threadComment.user.email,
            threadComment.content,
            threadComment.timestamp,
          ),
      );
  }
}
