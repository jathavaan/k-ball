import { Request } from "../../../../common";
import { EditThreadCommand } from "./editThreadCommand";
import { EditThreadCommandValidator } from "./editThreadCommandValidator";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { ThreadRepositoryServiceBase } from "../../../../contracts";

export class EditThreadCommandHandler
  implements Request<EditThreadCommand, boolean>
{
  private validator = new EditThreadCommandValidator();
  private threadRepositoryService = container.get<ThreadRepositoryServiceBase>(
    "ThreadRepositoryServiceBase",
  );
  handle(request: EditThreadCommand): Promise<boolean> {
    this.validator.validate(request);
    return this.threadRepositoryService.updateThread(
      request.threadId,
      request.title,
      request.content,
    );
  }
}
