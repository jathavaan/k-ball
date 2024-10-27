import { Request } from "../../../../common/request";
import { GetAllUsersQuery } from "./getAllUsersQuery";
import { UserVm } from "../../../../view-models/userVm";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { UserRepositoryServiceBase } from "../../../../contracts/userRepository.service";

export class GetUsersQueryHandler implements Request<GetUsersQuery, UserVm[]> {
  userRepositoryService = container.get<UserRepositoryServiceBase>(
    "UserRepositoryServiceBase",
  );

  async handle(request: GetUsersQuery): Promise<UserVm[]> {
    const users = await this.userRepositoryService.getUsers();
    return users.map((user) => new UserVm(user));
  }
}
