import { Request } from "../../../../common";
import { DeleteThreadCommentCommand } from "./deleteThreadCommentCommand";
import { DeleteThreadCommentCommandValidator } from "./deleteThreadCommentCommandValidator";
import { ThreadRepositoryServiceBase } from "../../../../contracts";
import { inject, injectable } from "inversify";

@injectable()
export class DeleteThreadCommentCommandHandler
  implements Request<DeleteThreadCommentCommand, boolean>
{
  constructor(
    @inject("ThreadRepositoryServiceBase")
    private readonly threadRepositoryService: ThreadRepositoryServiceBase,
  ) {}

  private readonly validator = new DeleteThreadCommentCommandValidator();

  async handle(request: DeleteThreadCommentCommand): Promise<boolean> {
    this.validator.validate(request);
    return await this.threadRepositoryService.deleteThreadComment(
      request.threadCommentId,
    );
  }
}
