import { Validator } from "../../../../common";
import { GetPlayerThreadsQuery } from "./GetPlayerThreadsQuery";
import { GraphQLError } from "graphql/error";

export class GetPlayerThreadsQueryValidator
  implements Validator<GetPlayerThreadsQuery>
{
  validate(request: GetPlayerThreadsQuery): void {
    if (!request.playerId) throw new GraphQLError("Player ID is required");
  }
}
