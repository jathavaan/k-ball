import { Container } from "inversify";
import { CountryRepositoryService } from "@infrastructure/services/country-service/countryRepository.service";
import { PositionRepositoryService } from "@infrastructure/services/position-service/positionRepository.service";
import { UserRepositoryService } from "./user-service/userRepository.service";
import { ClubRepositoryService } from "./club-service/clubRepository.service";
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
