import { Validator } from "../../../../common";
import { GetPlayerByIdQuery } from "./getPlayerByIdQuery";
import { GraphQLError } from "graphql/error";

export class GetPlayerByIdQueryValidator
  implements Validator<GetPlayerByIdQuery>
{
  public validate(request: GetPlayerByIdQuery) {
    if (!request.id) throw new GraphQLError("Id is required");
    if (request.id <= 0) throw new GraphQLError("Id must be greater than 0");
  }
}
