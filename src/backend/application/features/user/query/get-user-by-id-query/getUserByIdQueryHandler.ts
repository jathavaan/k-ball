import { Request } from "../../../../common/request";
import { GetUserByIdQuery } from "./getUserByIdQuery";
import { UserVm } from "../../../../view-models";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { UserRepositoryServiceBase } from "../../../../contracts";
import { GetUserByIdQueryValidator } from "./getUserByIdQueryValidator";

export class GetUserByIdQueryHandler
  implements Request<GetUserByIdQuery, UserVm | null>
{
  validator = new GetUserByIdQueryValidator();
  userRepositoryService = container.get<UserRepositoryServiceBase>(
    "UserRepositoryServiceBase",
  );

  async handle(request: GetUserByIdQuery): Promise<UserVm | null> {
    this.validator.validate(request);
    const user = await this.userRepositoryService.getUserById(request.id);
    if (!user) return null;
    return new UserVm(user);
  }
}
