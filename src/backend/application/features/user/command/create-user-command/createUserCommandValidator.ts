import { CreateUserCommand } from "./createUserCommand";
import { Validator } from "../../../../common";
import { GraphQLError } from "graphql/error";

export class CreateUserCommandValidator
  implements Validator<CreateUserCommand>
{
  validate(request: CreateUserCommand): void {
    if (!request.firstName) throw new GraphQLError("First name is required");
    if (!request.lastName) throw new GraphQLError("Last name is required");
    if (!request.email) throw new GraphQLError("Email is required");
    if (!request.password) throw new GraphQLError("Password is required");

    const regexp = new RegExp(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    );
    if (!regexp.test(request.email)) throw new GraphQLError("Invalid email");
  }
}
