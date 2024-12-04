import { Validator } from "../../../../common";
import { EditThreadCommand } from "./editThreadCommand";
import { GraphQLError } from "graphql/error";

export class EditThreadCommandValidator
  implements Validator<EditThreadCommand>
{
  validate(request: EditThreadCommand): void {
    if (!request.threadId) throw new GraphQLError("Thread ID is required");
    if (!request.title) throw new GraphQLError("Title is required");
    if (!request.content) throw new GraphQLError("Content ID is required");

    if (request.title.length > 150)
      throw new GraphQLError(
        "Thread title cannot be longer than 150 characters",
      );

    if (request.content.length > 2_000)
      throw new GraphQLError(
        "Thread content cannot be longer than  2000 characters",
      );
  }
}
