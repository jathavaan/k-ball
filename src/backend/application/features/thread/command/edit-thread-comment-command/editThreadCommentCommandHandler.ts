import { Request } from "../../../../common";
import { EditThreadCommentCommand } from "./editThreadCommentCommand";
import { EditThreadCommentCommandValidator } from "./editThreadCommentCommandValidator";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { ThreadRepositoryServiceBase } from "../../../../contracts";

export class EditThreadCommentCommandHandler
  implements Request<EditThreadCommentCommand, boolean>
{
  private validator = new EditThreadCommentCommandValidator();
  private threadRepositoryService = container.get<ThreadRepositoryServiceBase>(
    "ThreadRepositoryServiceBase",
  );

  handle(request: EditThreadCommentCommand): Promise<boolean> {
    this.validator.validate(request);
    return this.threadRepositoryService.updateThreadComment(
      request.threadCommentId,
      request.content,
    );
  }
}
