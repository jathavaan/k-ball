import { CheckUserCredentialsQuery } from "./checkUserCredentialsQuery";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { UserRepositoryServiceBase } from "../../../../contracts";
import { Request } from "../../../../common/request";

export class CheckUserCredentialsQueryHandler
  implements Request<CheckUserCredentialsQuery, number | null>
{
  userRepositoryService = container.get<UserRepositoryServiceBase>(
    "UserRepositoryServiceBase",
  );

  async handle(request: CheckUserCredentialsQuery): Promise<number | null> {
    return await this.userRepositoryService.checkCredentials(
      request.email,
      request.password,
    );
  }
}
