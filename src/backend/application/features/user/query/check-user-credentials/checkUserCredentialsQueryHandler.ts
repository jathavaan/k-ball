import { CheckUserCredentialsQuery } from "./checkUserCredentialsQuery";
import { UserRepositoryServiceBase } from "../../../../contracts";
import { Request } from "../../../../common";
import { CheckUserCredentialsQueryValidator } from "./checkUserCredentialsQueryValidator";
import { inject, injectable } from "inversify";

@injectable()
export class CheckUserCredentialsQueryHandler
  implements Request<CheckUserCredentialsQuery, number | null>
{
  constructor(
    @inject("UserRepositoryServiceBase")
    private readonly userRepositoryService: UserRepositoryServiceBase,
  ) {}

  private readonly validator = new CheckUserCredentialsQueryValidator();

  async handle(request: CheckUserCredentialsQuery): Promise<number | null> {
    this.validator.validate(request);
    return await this.userRepositoryService.checkCredentials(
      request.email,
      request.password,
    );
  }
}
