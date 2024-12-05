import { Validator } from "../../../../common";
import { GetThreadCommentsQuery } from "./getThreadCommentsQuery";
import { GraphQLError } from "graphql/error";

export class GetThreadCommentsQueryValidator
  implements Validator<GetThreadCommentsQuery>
{
  validate(request: GetThreadCommentsQuery): void {
    if (!request.threadId) throw new GraphQLError("Thread ID is required");
  }
}
