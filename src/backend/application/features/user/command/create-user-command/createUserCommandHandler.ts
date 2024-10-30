import { CreateUserCommand } from "./createUserCommand";
import { Request } from "../../../../common/request";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { User } from "../../../../../domain/entities";
import { UserRepositoryServiceBase } from "../../../../contracts";

export class CreateUserCommandHandler
  implements Request<CreateUserCommand, boolean>
{
  userRepositoryService = container.get<UserRepositoryServiceBase>(
    "UserRepositoryServiceBase",
  );

  async handle(request: CreateUserCommand): Promise<boolean> {
    const user = new User();
    user.firstName = request.firstName;
    user.lastName = request.lastName;
    user.email = request.email;
    user.password = request.password;

    return await this.userRepositoryService.addUser(user);
  }
}
