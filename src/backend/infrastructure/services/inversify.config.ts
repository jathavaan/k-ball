import { Container } from "inversify";
import { UserRepositoryServiceBase } from "../../application/contracts/userRepository.service";
import { UserRepositoryService } from "./user-service/userRepository.service";

const container = new Container();
container
  .bind<UserRepositoryServiceBase>("UserRepositoryServiceBase")
  .to(UserRepositoryService);

export { container };
