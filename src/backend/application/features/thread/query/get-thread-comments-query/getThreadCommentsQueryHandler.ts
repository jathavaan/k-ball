import { Request } from "../../../../common";
import { GetThreadCommentsQuery } from "./getThreadCommentsQuery";
import { ThreadCommentVm } from "../../../../view-models";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { ThreadRepositoryServiceBase } from "../../../../contracts";
import { GetThreadCommentsQueryValidator } from "./getThreadCommentQueryValidator";

export class GetThreadCommentsQueryHandler
  implements Request<GetThreadCommentsQuery, ThreadCommentVm[]>
{
  private validator = new GetThreadCommentsQueryValidator();
  private threadRepositoryService = container.get<ThreadRepositoryServiceBase>(
    "ThreadRepositoryServiceBase",
  );

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
