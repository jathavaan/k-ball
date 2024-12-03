import { Request } from "../../../../common";
import { ThreadRepositoryServiceBase } from "../../../../contracts";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { CreateThreadCommentCommand } from "./createThreadCommentCommand";
import { CreateThreadCommentCommandValidator } from "./createThreadCommentCommandValidator";

export class CreateThreadCommentCommandHandler
  implements Request<CreateThreadCommentCommand, boolean>
{
  private validator = new CreateThreadCommentCommandValidator();
  private threadRepositoryService = container.get<ThreadRepositoryServiceBase>(
    "ThreadRepositoryServiceBase",
  );

  async handle(request: CreateThreadCommentCommand): Promise<boolean> {
    this.validator.validate(request);
    return await this.threadRepositoryService.insertThreadComment(
      request.userId,
      request.threadId,
      request.content,
    );
  }
}
