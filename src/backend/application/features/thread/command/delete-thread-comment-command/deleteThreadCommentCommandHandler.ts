import { Request } from "../../../../common";
import { DeleteThreadCommentCommand } from "./deleteThreadCommentCommand";
import { DeleteThreadCommentCommandValidator } from "./deleteThreadCommentCommandValidator";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { ThreadRepositoryServiceBase } from "../../../../contracts";

export class DeleteThreadCommentCommandHandler
  implements Request<DeleteThreadCommentCommand, boolean>
{
  private validator = new DeleteThreadCommentCommandValidator();
  private threadRepositoryService = container.get<ThreadRepositoryServiceBase>(
    "ThreadRepositoryServiceBase",
  );
  async handle(request: DeleteThreadCommentCommand): Promise<boolean> {
    this.validator.validate(request);
    return await this.threadRepositoryService.deleteThreadComment(
      request.threadCommentId,
    );
  }
}
