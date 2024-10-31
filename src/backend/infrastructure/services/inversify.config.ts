import { Container } from "inversify";
import { UserRepositoryService } from "./user-service/userRepository.service";
import { ClubRepositoryService } from "./club-service/clubRepository.service";
import { CountryRepositoryService } from "./country-service/countryRepository.service";
import { PositionRepositoryService } from "./position-service/positionRepository.service";
import { PlayerRepositoryService } from "./player-service/playerRepository.service";
import { PlayerStatsRepositoryService } from "./player-stats-service/playerStatsRepository.service";
import {
  ClubRepositoryServiceBase,
  CountryRepositoryServiceBase,
  PositionRepositoryServiceBase,
  UserRepositoryServiceBase,
  PlayerRepositoryServiceBase,
  PlayerStatsRepositoryServiceBase
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

container
  .bind<PlayerRepositoryServiceBase>("PlayerRepositoryServiceBase")
  .to(PlayerRepositoryService);

container
  .bind<PlayerStatsRepositoryServiceBase>("PlayerStatsRepositoryServiceBase")
  .to(PlayerStatsRepositoryService);

export { container };
