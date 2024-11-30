import { Validator } from "../../../../common";
import { CreateThreadCommand } from "./createThreadCommand";
import { GraphQLError } from "graphql/error";

export class CreateThreadCommandValidator
  implements Validator<CreateThreadCommand>
{
  validate(request: CreateThreadCommand): void {
    if (!request.playerId) throw new GraphQLError("Player ID is required");
    if (!request.userId) throw new GraphQLError("Player ID is required");
    if (!request.title) throw new GraphQLError("Title is required");
    if (!request.content) throw new GraphQLError("Title is required");
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
