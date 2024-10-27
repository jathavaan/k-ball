import { Request } from "../../../../common/request";
import { UserVm } from "../../../../view-models";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { GetUsersQuery } from "./getUsersQuery";
import { UserRepositoryServiceBase } from "../../../../contracts";

export class GetUsersQueryHandler implements Request<GetUsersQuery, UserVm[]> {
  userRepositoryService = container.get<UserRepositoryServiceBase>(
    "UserRepositoryServiceBase",
  );

  async handle(request: GetUsersQuery): Promise<UserVm[]> {
    const users = await this.userRepositoryService.getUsers();
    return users.map((user) => new UserVm(user));
  }
}
