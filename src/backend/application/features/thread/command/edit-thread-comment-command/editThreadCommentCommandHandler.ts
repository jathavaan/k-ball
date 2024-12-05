import { Request } from "../../../../common";
import { EditThreadCommentCommand } from "./editThreadCommentCommand";
import { EditThreadCommentCommandValidator } from "./editThreadCommentCommandValidator";
import { ThreadRepositoryServiceBase } from "../../../../contracts";
import { inject, injectable } from "inversify";

@injectable()
export class EditThreadCommentCommandHandler
  implements Request<EditThreadCommentCommand, boolean>
{
  constructor(
    @inject("ThreadRepositoryServiceBase")
    private readonly threadRepositoryService: ThreadRepositoryServiceBase,
  ) {}

  private readonly validator = new EditThreadCommentCommandValidator();

  handle(request: EditThreadCommentCommand): Promise<boolean> {
    this.validator.validate(request);
    return this.threadRepositoryService.updateThreadComment(
      request.threadCommentId,
      request.content,
    );
  }
}
