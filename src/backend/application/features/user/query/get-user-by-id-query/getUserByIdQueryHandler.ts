import { Request } from "@application/common/request";
import { container } from "@infrastructure/services/inversify.config";
import { UserRepositoryServiceBase } from "@application/contracts/userRepository.service.base";
import { GetUserByIdQuery } from "@application/features/user/query/get-user-by-id-query/getUserByIdQuery";
import { UserVm } from "@application/view-models/userVm";

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
