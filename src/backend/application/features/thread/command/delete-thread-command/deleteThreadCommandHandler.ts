import { Request } from "../../../../common";
import { DeleteThreadCommand } from "./deleteThreadCommand";
import { DeleteThreadCommandValidator } from "./deleteThreadCommandValidator";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { ThreadRepositoryServiceBase } from "../../../../contracts";

export class DeleteThreadCommandHandler
  implements Request<DeleteThreadCommand, boolean>
{
  private validator = new DeleteThreadCommandValidator();
  private threadRepositoryService = container.get<ThreadRepositoryServiceBase>(
    "ThreadRepositoryServiceBase",
  );
  async handle(request: DeleteThreadCommand): Promise<boolean> {
    this.validator.validate(request);
    return await this.threadRepositoryService.deleteThread(request.threadId);
  }
}
