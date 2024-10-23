import { GetUsersQuery } from "@application/features/user/query/get-users-query/getUsersQuery";
import { UserVm } from "@application/view-models/userVm";
import { Request } from "@application/common/request";
import { container } from "@infrastructure/services/inversify.config";
import { UserRepositoryServiceBase } from "@application/contracts/userRepository.service.base";

export class GetUsersQueryHandler implements Request<GetUsersQuery, UserVm[]> {
  userRepositoryService = container.get<UserRepositoryServiceBase>(
    "UserRepositoryServiceBase",
  );

  async handle(request: GetUsersQuery): Promise<UserVm[]> {
    const users = await this.userRepositoryService.getUsers();
    return users.map((user) => new UserVm(user));
  }
}
