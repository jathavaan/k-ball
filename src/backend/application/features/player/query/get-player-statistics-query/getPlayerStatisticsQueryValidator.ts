import { Validator } from "../../../../common";
import { GetPlayerStatisticsQuery } from "./getPlayerStatisticsQuery";
import { GraphQLError } from "graphql/error";

export class GetPlayerStatisticsQueryValidator
  implements Validator<GetPlayerStatisticsQuery>
{
  validate(request: GetPlayerStatisticsQuery): void {
    if (!request.playerId) throw new GraphQLError("PlayerId is required");
    if (request.playerId <= 0)
      throw new GraphQLError("PlayerId must be greater than 0");
  }
}
