import { CheckUserCredentialsQuery } from "./checkUserCredentialsQuery";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { UserRepositoryServiceBase } from "../../../../contracts";
import { Request } from "../../../../common";
import { CheckUserCredentialsQueryValidator } from "./checkUserCredentialsQueryValidator";

export class CheckUserCredentialsQueryHandler
  implements Request<CheckUserCredentialsQuery, number | null>
{
  validator = new CheckUserCredentialsQueryValidator();
  userRepositoryService = container.get<UserRepositoryServiceBase>(
    "UserRepositoryServiceBase",
  );

  async handle(request: CheckUserCredentialsQuery): Promise<number | null> {
    this.validator.validate(request);
    return await this.userRepositoryService.checkCredentials(
      request.email,
      request.password,
    );
  }
}
