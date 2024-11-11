import { Container } from "inversify";

import {
  BirthPlaceRepositoryServiceBase,
  ClubRepositoryServiceBase,
  CountryRepositoryServiceBase,
  DatabaseImportServiceBase,
  FootballApiServiceBase,
  PlayerImportStateRepositoryServiceBase,
  PlayerRepositoryServiceBase,
  PlayerStatsRepositoryServiceBase,
  PositionRepositoryServiceBase,
  SeasonRepositoryServiceBase,
  UserRepositoryServiceBase,
} from "../../application/contracts";
import { FootballApiService } from "./database-import-service/footballApi.service";
import { DatabaseImportService } from "./database-import-service/databaseImport.service";
import { PlayerRepositoryService } from "./player-service/playerRepository.service";
import { SeasonRepositoryService } from "./season-service/seasonRepository.service";
import { BirthPlaceRepositoryService } from "./birth-place-service/birthPlaceRepository.service";
import { UserRepositoryService } from "./user-service/userRepository.service";
import { ClubRepositoryService } from "./club-service/clubRepository.service";
import { CountryRepositoryService } from "./country-service/countryRepository.service";
import { PositionRepositoryService } from "./position-service/positionRepository.service";
import { PlayerImportStateRepositoryService } from "./database-import-service/playerImportStateRepository.service";
import { PlayerStatsRepositoryService } from "./player-service/playerStatsRepository.service";

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

container
  .bind<PlayerRepositoryServiceBase>("PlayerRepositoryServiceBase")
  .to(PlayerRepositoryService);

container
  .bind<SeasonRepositoryServiceBase>("SeasonRepositoryServiceBase")
  .to(SeasonRepositoryService);

container
  .bind<BirthPlaceRepositoryServiceBase>("BirthPlaceRepositoryServiceBase")
  .to(BirthPlaceRepositoryService);

container
  .bind<FootballApiServiceBase>("FootballApiServiceBase")
  .to(FootballApiService);

container
  .bind<DatabaseImportServiceBase>("DatabaseImportServiceBase")
  .to(DatabaseImportService);

container
  .bind<PlayerImportStateRepositoryServiceBase>(
    "PlayerImportStateRepositoryServiceBase",
  )
  .to(PlayerImportStateRepositoryService);

container
  .bind<PlayerStatsRepositoryServiceBase>("PlayerStatsRepositoryServiceBase")
  .to(PlayerStatsRepositoryService);

export { container };
