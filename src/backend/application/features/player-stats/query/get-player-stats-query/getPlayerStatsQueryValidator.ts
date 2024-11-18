import { Validator } from "../../../../common";
import { GetPlayerStatsQuery } from "./getPlayerStatsQuery";
import { GraphQLError } from "graphql/error";

export class GetPlayerStatsQueryValidator
  implements Validator<GetPlayerStatsQuery>
{
  validate(request: GetPlayerStatsQuery): void {
    if (!request.playerId) throw new GraphQLError("PlayerId is required");
    if (request.playerId <= 0)
      throw new GraphQLError("PlayerId must be greater than 0");
  }
}
