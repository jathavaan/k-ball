import { Validator } from "../../../../common";
import { GetUserByIdQuery } from "./getUserByIdQuery";
import { GraphQLError } from "graphql/error";

export class GetUserByIdQueryValidator implements Validator<GetUserByIdQuery> {
  validate(request: GetUserByIdQuery): void {
    if (!request.id) throw new GraphQLError("Id is required");
    if (request.id <= 0)
      throw new GraphQLError("Id have to be greater or equal to 1");
  }
}
