import { Validator } from "../../../../common";
import { GetGivenPlayerRatingsQuery } from "./getGivenPlayerRatingsQuery";
import { GraphQLError } from "graphql/error";

export class GetGivenRatingsQueryValidator
  implements Validator<GetGivenPlayerRatingsQuery>
{
  validate(request: GetGivenPlayerRatingsQuery): void {
    if (!request.userId) throw new GraphQLError("User ID is required");
    if (request.userId <= 0)
      throw new GraphQLError("User ID have to be greater than 0");
  }
}
