import { Request } from "../../../../common";
import { UserVm } from "../../../../view-models";
import { GetUsersQuery } from "./getUsersQuery";
import { UserRepositoryServiceBase } from "../../../../contracts";
import { inject, injectable } from "inversify";

@injectable()
export class GetUsersQueryHandler implements Request<GetUsersQuery, UserVm[]> {
  constructor(
    @inject("UserRepositoryServiceBase")
    private readonly userRepositoryService: UserRepositoryServiceBase,
  ) {}

  async handle(request: GetUsersQuery): Promise<UserVm[]> {
    const users = await this.userRepositoryService.getUsers();
    return users.map((user) => new UserVm(user));
  }
}
