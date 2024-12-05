import { Request } from "../../../../common";
import { ThreadRepositoryServiceBase } from "../../../../contracts";
import { CreateThreadCommentCommand } from "./createThreadCommentCommand";
import { CreateThreadCommentCommandValidator } from "./createThreadCommentCommandValidator";
import { inject, injectable } from "inversify";

@injectable()
export class CreateThreadCommentCommandHandler
  implements Request<CreateThreadCommentCommand, boolean>
{
  constructor(
    @inject("ThreadRepositoryServiceBase")
    private readonly threadRepositoryService: ThreadRepositoryServiceBase,
  ) {}

  private readonly validator = new CreateThreadCommentCommandValidator();

  async handle(request: CreateThreadCommentCommand): Promise<boolean> {
    this.validator.validate(request);
    return await this.threadRepositoryService.insertThreadComment(
      request.userId,
      request.threadId,
      request.content,
    );
  }
}
