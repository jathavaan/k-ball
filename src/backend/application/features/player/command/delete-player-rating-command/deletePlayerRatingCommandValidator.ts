import { DeletePlayerRatingCommand } from "./deletePlayerRatingCommand";
import { Validator } from "../../../../common";
import { GraphQLError } from "graphql/error";

export class DeletePlayerRatingCommandValidator
  implements Validator<DeletePlayerRatingCommand>
{
  validate(request: DeletePlayerRatingCommand): void {
    if (!request.playerId) throw new GraphQLError("Player ID is required");
    if (!request.userId) throw new GraphQLError("User ID is required");
  }
}
