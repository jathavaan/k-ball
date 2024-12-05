import { Request } from "../../../../common";
import { EditThreadCommand } from "./editThreadCommand";
import { EditThreadCommandValidator } from "./editThreadCommandValidator";
import { ThreadRepositoryServiceBase } from "../../../../contracts";
import { inject, injectable } from "inversify";

@injectable()
export class EditThreadCommandHandler
  implements Request<EditThreadCommand, boolean>
{
  constructor(
    @inject("ThreadRepositoryServiceBase")
    private readonly threadRepositoryService: ThreadRepositoryServiceBase,
  ) {}

  private readonly validator = new EditThreadCommandValidator();

  handle(request: EditThreadCommand): Promise<boolean> {
    this.validator.validate(request);
    return this.threadRepositoryService.updateThread(
      request.threadId,
      request.title,
      request.content,
    );
  }
}
