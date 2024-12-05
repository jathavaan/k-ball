import { CreateUserCommand } from "./createUserCommand";
import { Request } from "../../../../common";
import { User } from "../../../../../domain/entities";
import { UserRepositoryServiceBase } from "../../../../contracts";
import { CreateUserCommandValidator } from "./createUserCommandValidator";
import { inject, injectable } from "inversify";

@injectable()
export class CreateUserCommandHandler
  implements Request<CreateUserCommand, boolean>
{
  constructor(
    @inject("UserRepositoryServiceBase")
    private readonly userRepositoryService: UserRepositoryServiceBase,
  ) {}

  private readonly validator = new CreateUserCommandValidator();

  async handle(request: CreateUserCommand): Promise<boolean> {
    this.validator.validate(request);
    const user = new User();
    user.firstName = request.firstName;
    user.lastName = request.lastName;
    user.email = request.email;
    user.password = request.password;

    return await this.userRepositoryService.addUser(user);
  }
}
