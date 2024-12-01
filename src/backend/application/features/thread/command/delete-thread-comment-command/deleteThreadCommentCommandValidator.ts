import { Validator } from "../../../../common";
import { DeleteThreadCommentCommand } from "./deleteThreadCommentCommand";
import { GraphQLError } from "graphql/error";

export class DeleteThreadCommentCommandValidator
  implements Validator<DeleteThreadCommentCommand>
{
  validate(request: DeleteThreadCommentCommand): void {
    if (!request.threadCommentId)
      throw new GraphQLError("Thread comment ID is required");
  }
}
