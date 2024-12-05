import { DataSource, EntityManager } from "typeorm";
import {
  BirthPlace,
  Club,
  ClubSeason,
  Country,
  Player,
  PlayerImportState,
  PlayerRating,
  PlayerSeason,
  PlayerStatistics,
  Position,
  Season,
  Thread,
  ThreadComment,
  User,
} from "../../domain/entities";
import { seedDummyCountries } from "./seed.mock.countires";
import { seedDummyBirthPlaces } from "./seed.mock.birthPlaces";
import { seedDummyClubs } from "./seed.mock.clubs";
import { seedDummyPositions } from "./seed.mock.positions";
import { seedDummyUsers } from "./seed.mock.users";
import { seedDummyPlayers } from "./seed.mock.players";
import { container } from "../../infrastructure/services/inversify.config";
import { seedDummySeasons } from "./seed.mock.season";
import { seedDummyPlayerSeason } from "./seed.mock.playerSeason";
import { seedDummyPlayerStatistics } from "./seed.mock.playerStatistics";

export const mockDatabase = async (): Promise<DataSource> => {
  const dataSource = new DataSource({
    type: "sqlite",
    database: ":memory:",
    entities: [
      BirthPlace,
      Club,
      ClubSeason,
      Country,
      Player,
      PlayerImportState,
      PlayerRating,
      PlayerSeason,
      PlayerStatistics,
      Position,
      Season,
      Thread,
      ThreadComment,
      User,
    ],
    synchronize: true,
  });

  await dataSource.initialize();

  // Seed data
  await seedDummyCountries(dataSource);
  await seedDummyBirthPlaces(dataSource);
  await seedDummyClubs(dataSource);
  await seedDummyPositions(dataSource);
  await seedDummyPlayers(dataSource);
  await seedDummySeasons(dataSource);
  await seedDummyPlayerSeason(dataSource);
  await seedDummyPlayerStatistics(dataSource);
  await seedDummyUsers(dataSource);

  // Inject mock database instead of production database
  container
    .rebind<EntityManager>("EntityManager")
    .toDynamicValue(() => dataSource.manager);

  return dataSource;
};
