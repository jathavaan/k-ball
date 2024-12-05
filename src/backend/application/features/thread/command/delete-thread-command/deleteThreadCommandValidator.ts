import { Validator } from "../../../../common";
import { DeleteThreadCommand } from "./deleteThreadCommand";
import { GraphQLError } from "graphql/error";

export class DeleteThreadCommandValidator
  implements Validator<DeleteThreadCommand>
{
  validate(request: DeleteThreadCommand): void {
    if (!request.threadId) throw new GraphQLError("Thread ID is required");
  }
}
