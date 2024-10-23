import { Container } from "inversify";
import { UserRepositoryService } from "@infrastructure/services/user-service/userRepository.service";
import { UserRepositoryServiceBase } from "@application/contracts/userRepository.service.base";
import { ClubRepositoryServiceBase } from "@application/contracts/clubRepository.service.base";
import { ClubRepositoryService } from "@infrastructure/services/club-service/clubRepository.service";
import { CountryRepositoryServiceBase } from "@application/contracts/countryRepository.service.base";
import { CountryRepositoryService } from "@infrastructure/services/country-service/countryRepository.service";

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

export { container };
