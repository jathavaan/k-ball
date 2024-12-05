import { Request } from "../../../../common";
import { GetUserByIdQuery } from "./getUserByIdQuery";
import { UserVm } from "../../../../view-models";
import { UserRepositoryServiceBase } from "../../../../contracts";
import { GetUserByIdQueryValidator } from "./getUserByIdQueryValidator";
import { inject, injectable } from "inversify";

@injectable()
export class GetUserByIdQueryHandler
  implements Request<GetUserByIdQuery, UserVm | null>
{
  constructor(
    @inject("UserRepositoryServiceBase")
    private readonly userRepositoryService: UserRepositoryServiceBase,
  ) {}

  private readonly validator = new GetUserByIdQueryValidator();

  async handle(request: GetUserByIdQuery): Promise<UserVm | null> {
    this.validator.validate(request);
    const user = await this.userRepositoryService.getUserById(request.id);
    if (!user) return null;
    return new UserVm(user);
  }
}
