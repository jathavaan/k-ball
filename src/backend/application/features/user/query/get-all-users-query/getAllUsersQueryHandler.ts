import { Request } from "../../../../common/request";
import { GetAllUsersQuery } from "./getAllUsersQuery";
import { UserVm } from "../../../../view-models/userVm";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { UserRepositoryServiceBase } from "../../../../contracts/userRepository.service";

export class GetAllUsersQueryHandler
  implements Request<GetAllUsersQuery, UserVm[]>
{
  userRepositoryService = container.get<UserRepositoryServiceBase>(
    "UserRepositoryServiceBase",
  );

  async handle(request: GetAllUsersQuery): Promise<UserVm[]> {
    const users = await this.userRepositoryService.getUsers();
    return users.map((user) => new UserVm(user));
  }
}
