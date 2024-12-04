import { Request } from "../../../../common";
import { CreateThreadCommand } from "./createThreadCommand";
import { ThreadRepositoryServiceBase } from "../../../../contracts";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { CreateThreadCommandValidator } from "./createThreadCommandValidator";

export class CreateThreadCommandHandler
  implements Request<CreateThreadCommand, boolean>
{
  private validator = new CreateThreadCommandValidator();
  private threadRepositoryService = container.get<ThreadRepositoryServiceBase>(
    "ThreadRepositoryServiceBase",
  );

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
