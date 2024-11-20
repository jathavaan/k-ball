import { CheckUserCredentialsQuery } from "./checkUserCredentialsQuery";
import { Validator } from "../../../../common";
import { GraphQLError } from "graphql/error";

export class CheckUserCredentialsQueryValidator
  implements Validator<CheckUserCredentialsQuery>
{
  validate(request: CheckUserCredentialsQuery): void {
    if (!request.email) throw new GraphQLError("Email is required");
    const regexp = new RegExp(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    );
    if (!regexp.test(request.email)) throw new GraphQLError("Invalid email");
    if (!request.password) throw new GraphQLError("Password is required");
  }
}
