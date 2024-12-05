import { Request } from "../../../../common";
import { DeleteThreadCommand } from "./deleteThreadCommand";
import { DeleteThreadCommandValidator } from "./deleteThreadCommandValidator";
import { ThreadRepositoryServiceBase } from "../../../../contracts";
import { inject, injectable } from "inversify";

@injectable()
export class DeleteThreadCommandHandler
  implements Request<DeleteThreadCommand, boolean>
{
  constructor(
    @inject("ThreadRepositoryServiceBase")
    private readonly threadRepositoryService: ThreadRepositoryServiceBase,
  ) {}

  private readonly validator = new DeleteThreadCommandValidator();

  async handle(request: DeleteThreadCommand): Promise<boolean> {
    this.validator.validate(request);
    return await this.threadRepositoryService.deleteThread(request.threadId);
  }
}
