import { Validator } from "../../../../common";
import { CreateThreadCommentCommand } from "./createThreadCommentCommand";
import { GraphQLError } from "graphql/error";

export class CreateThreadCommentCommandValidator
  implements Validator<CreateThreadCommentCommand>
{
  validate(request: CreateThreadCommentCommand): void {
    if (!request.threadId) throw new GraphQLError("Thread ID is required");
    if (!request.userId) throw new GraphQLError("User ID is required");
    if (!request.content) throw new GraphQLError("Content is required");
    if (request.content.length > 2_000)
      throw new GraphQLError(
        "Thread content cannot be longer than  2000 characters",
      );
  }
}
