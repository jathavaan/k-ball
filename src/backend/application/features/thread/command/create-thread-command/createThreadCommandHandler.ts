import { Request } from "../../../../common";
import { CreateThreadCommand } from "./createThreadCommand";
import { ThreadRepositoryServiceBase } from "../../../../contracts";
import { CreateThreadCommandValidator } from "./createThreadCommandValidator";
import { inject, injectable } from "inversify";

@injectable()
export class CreateThreadCommandHandler
  implements Request<CreateThreadCommand, boolean>
{
  constructor(
    @inject("ThreadRepositoryServiceBase")
    private readonly threadRepositoryService: ThreadRepositoryServiceBase,
  ) {}

  private readonly validator = new CreateThreadCommandValidator();

  async handle(request: CreateThreadCommand): Promise<boolean> {
    this.validator.validate(request);
    return await this.threadRepositoryService.insertThread(
      request.userId,
      request.playerId,
      request.title,
      request.content,
    );
  }
}
