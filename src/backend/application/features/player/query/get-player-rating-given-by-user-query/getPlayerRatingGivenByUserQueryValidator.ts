import { Validator } from "../../../../common";
import { GetPlayerRatingGivenByUserQuery } from "./getPlayerRatingGivenByUserQuery";
import { GraphQLError } from "graphql/error";

export class GetPlayerRatingGivenByUserQueryValidator
  implements Validator<GetPlayerRatingGivenByUserQuery>
{
  validate(request: GetPlayerRatingGivenByUserQuery): void {
    if (!request.playerId) throw new GraphQLError("PlayerId is required");
    if (request.playerId <= 0)
      throw new GraphQLError("PlayerId must be greater than 0");
    if (!request.userId) throw new GraphQLError("UserId is required");
    if (request.userId <= 0)
      throw new GraphQLError("UserId must be greater than 0");
  }
}
