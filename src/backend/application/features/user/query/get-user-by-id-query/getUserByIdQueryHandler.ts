import { Request } from "../../../../common/request";
import { GetUserByIdQuery } from "./getUserByIdQuery";
import { UserVm } from "../../../../view-models/userVm";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { UserRepositoryServiceBase } from "../../../../contracts/userRepository.service";

export class GetUserByIdQueryHandler
  implements Request<GetUserByIdQuery, UserVm | null>
{
  userRepositoryService = container.get<UserRepositoryServiceBase>(
    "UserRepositoryServiceBase",
  );

  async handle(request: GetUserByIdQuery): Promise<UserVm | null> {
    const user = await this.userRepositoryService.getUserById(request.id);
    if (!user) return null;
    return new UserVm(user);
  }
}
