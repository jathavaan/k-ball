import { GetAllUsersQuery } from "@application/features/user/query/get-all-users-query/getAllUsersQuery";
import { UserVm } from "@application/view-models/userVm";
import { Request } from "@application/common/request";
import { container } from "@infrastructure/services/inversify.config";
import { UserRepositoryServiceBase } from "@application/contracts/userRepository.service";

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
