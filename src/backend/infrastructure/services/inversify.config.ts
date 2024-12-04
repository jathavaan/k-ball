import { Container } from "inversify";

import {
  BirthPlaceRepositoryServiceBase,
  ClubRepositoryServiceBase,
  CountryRepositoryServiceBase,
  DatabaseImportServiceBase,
  FootballApiServiceBase,
  PlayerImportStateRepositoryServiceBase,
  PlayerRatingRepositoryServiceBase,
  PlayerRatingServiceBase,
  PlayerRepositoryServiceBase,
  PlayerStatisticsRepositoryServiceBase,
  PositionRepositoryServiceBase,
  SeasonRepositoryServiceBase,
  ThreadRepositoryServiceBase,
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
import { PlayerStatisticsRepositoryService } from "./player-service/playerStatisticsRepository.service";
import { PlayerRatingRepositoryService } from "./player-service/playerRatingRepository.service";
import { PlayerRatingService } from "./player-service/playerRating.service";
import { ThreadRepositoryService } from "./thread-service/threadRepository.service";
import { EntityManager } from "typeorm";
import { KBallDbContext } from "../persistence/dataSource";

const container = new Container();

container
  .bind<EntityManager>("EntityManager")
  .toDynamicValue(() => KBallDbContext.manager);

container
  .bind<UserRepositoryServiceBase>("UserRepositoryServiceBase")
  .toDynamicValue((context) => {
    const dbContext = context.container.get<EntityManager>("EntityManager");
    return new UserRepositoryService(dbContext);
  });

container
  .bind<ClubRepositoryServiceBase>("ClubRepositoryServiceBase")
  .toDynamicValue((context) => {
    const dbContext = context.container.get<EntityManager>("EntityManager");
    return new ClubRepositoryService(dbContext);
  });

container
  .bind<CountryRepositoryServiceBase>("CountryRepositoryServiceBase")
  .toDynamicValue((context) => {
    const dbContext = context.container.get<EntityManager>("EntityManager");
    return new CountryRepositoryService(dbContext);
  });

container
  .bind<PositionRepositoryServiceBase>("PositionRepositoryServiceBase")
  .toDynamicValue((context) => {
    const dbContext = context.container.get<EntityManager>("EntityManager");
    return new PositionRepositoryService(dbContext);
  });

container
  .bind<PlayerRepositoryServiceBase>("PlayerRepositoryServiceBase")
  .toDynamicValue((context) => {
    const dbContext = context.container.get<EntityManager>("EntityManager");
    const clubRepositoryService =
      context.container.get<ClubRepositoryServiceBase>(
        "ClubRepositoryServiceBase",
      );

    const birthPlaceRepositoryService =
      context.container.get<BirthPlaceRepositoryServiceBase>(
        "BirthPlaceRepositoryServiceBase",
      );

    const countryRepositoryService =
      container.get<CountryRepositoryServiceBase>(
        "CountryRepositoryServiceBase",
      );

    const positionRepositoryService =
      context.container.get<PositionRepositoryServiceBase>(
        "PositionRepositoryServiceBase",
      );

    const seasonRepositoryService =
      context.container.get<SeasonRepositoryServiceBase>(
        "SeasonRepositoryServiceBase",
      );

    const playerStatisticsRepositoryService =
      context.container.get<PlayerStatisticsRepositoryServiceBase>(
        "PlayerStatisticsRepositoryServiceBase",
      );

    return new PlayerRepositoryService(
      dbContext,
      clubRepositoryService,
      birthPlaceRepositoryService,
      countryRepositoryService,
      positionRepositoryService,
      seasonRepositoryService,
      playerStatisticsRepositoryService,
    );
  });

container
  .bind<SeasonRepositoryServiceBase>("SeasonRepositoryServiceBase")
  .toDynamicValue((context) => {
    const dbContext = context.container.get<EntityManager>("EntityManager");
    return new SeasonRepositoryService(dbContext);
  });

container
  .bind<BirthPlaceRepositoryServiceBase>("BirthPlaceRepositoryServiceBase")
  .toDynamicValue((context) => {
    const dbContext = context.container.get<EntityManager>("EntityManager");
    const countryRepositoryService =
      context.container.get<CountryRepositoryServiceBase>(
        "CountryRepositoryServiceBase",
      );

    return new BirthPlaceRepositoryService(dbContext, countryRepositoryService);
  });

container
  .bind<FootballApiServiceBase>("FootballApiServiceBase")
  .toDynamicValue(() => {
    return new FootballApiService();
  });

container
  .bind<DatabaseImportServiceBase>("DatabaseImportServiceBase")
  .toDynamicValue((context) => {
    const footballApiService = context.container.get<FootballApiServiceBase>(
      "FootballApiServiceBase",
    );

    const clubRepositoryService =
      context.container.get<ClubRepositoryServiceBase>(
        "ClubRepositoryServiceBase",
      );

    const playerRepositoryService =
      context.container.get<PlayerRepositoryServiceBase>(
        "PlayerRepositoryServiceBase",
      );

    return new DatabaseImportService(
      footballApiService,
      clubRepositoryService,
      playerRepositoryService,
    );
  });

container
  .bind<PlayerImportStateRepositoryServiceBase>(
    "PlayerImportStateRepositoryServiceBase",
  )
  .toDynamicValue((context) => {
    const dbContext = context.container.get<EntityManager>("EntityManager");
    return new PlayerImportStateRepositoryService(dbContext);
  });

container
  .bind<PlayerStatisticsRepositoryServiceBase>(
    "PlayerStatisticsRepositoryServiceBase",
  )
  .toDynamicValue((context) => {
    const dbContext = context.container.get<EntityManager>("EntityManager");
    return new PlayerStatisticsRepositoryService(dbContext);
  });

container
  .bind<PlayerRatingRepositoryServiceBase>("PlayerRatingRepositoryServiceBase")
  .toDynamicValue((context) => {
    const dbContext = context.container.get<EntityManager>("EntityManager");
    return new PlayerRatingRepositoryService(dbContext);
  });

container
  .bind<PlayerRatingServiceBase>("PlayerRatingServiceBase")
  .toDynamicValue(() => {
    return new PlayerRatingService();
  });

container
  .bind<ThreadRepositoryServiceBase>("ThreadRepositoryServiceBase")
  .toDynamicValue((context) => {
    const dbContext = context.container.get<EntityManager>("EntityManager");
    const userRepositoryService =
      context.container.get<UserRepositoryServiceBase>(
        "UserRepositoryServiceBase",
      );

    const playerRepositoryService =
      context.container.get<PlayerRepositoryServiceBase>(
        "PlayerRepositoryServiceBase",
      );

    return new ThreadRepositoryService(
      dbContext,
      playerRepositoryService,
      userRepositoryService,
    );
  });

export { container };
