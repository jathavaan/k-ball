import { Validator } from "../../../../common";
import { EditThreadCommentCommand } from "./editThreadCommentCommand";
import { GraphQLError } from "graphql/error";

export class EditThreadCommentCommandValidator
  implements Validator<EditThreadCommentCommand>
{
  validate(request: EditThreadCommentCommand): void {
    if (!request.threadCommentId)
      throw new GraphQLError("Thread ID is required");
    if (!request.content) throw new GraphQLError("Content ID is required");

    if (request.content.length > 2_000)
      throw new GraphQLError(
        "Thread content cannot be longer than  2000 characters",
      );
  }
}
