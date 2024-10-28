import { Container } from "inversify";
import { UserRepositoryService } from "./user-service/userRepository.service";
import { ClubRepositoryService } from "./club-service/clubRepository.service";
import { CountryRepositoryService } from "./country-service/countryRepository.service";
import { PositionRepositoryService } from "./position-service/positionRepository.service";
import {
  ClubRepositoryServiceBase,
  CountryRepositoryServiceBase,
  PositionRepositoryServiceBase,
  UserRepositoryServiceBase,
} from "../../application/contracts";

const container = new Container();
container
  .bind<UserRepositoryServiceBase>("UserRepositoryServiceBase")
  .to(UserRepositoryService);

container
  .bind<ClubRepositoryServiceBase>("ClubRepositoryServiceBase")
  .to(ClubRepositoryService);

container
  .bind<CountryRepositoryServiceBase>("CountryRepositoryServiceBase")
  .to(CountryRepositoryService);

container
  .bind<PositionRepositoryServiceBase>("PositionRepositoryServiceBase")
  .to(PositionRepositoryService);

export { container };
