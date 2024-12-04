import { newDb } from "pg-mem";
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

export const mockDatabase = async (): Promise<DataSource> => {
  const mockDb = newDb();

  // Mock PostgreSQL functions
  mockDb.public.registerFunction({
    name: "current_database",
    args: [],
    implementation: () => "pg_mem",
  });

  mockDb.public.registerFunction({
    name: "version",
    args: [],
    implementation: () => "PostgreSQL 12.3 (pg-mem)", // Mock version string
  });

  // Create a new PostgreSQL datasource
  const dataSource = await mockDb.adapters.createTypeormDataSource({
    type: "postgres",
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
    synchronize: true, // Automatically synchronize schema
  });

  await dataSource.initialize();

  // Data seed with dummy users
  await seedDummyCountries(dataSource);
  await seedDummyBirthPlaces(dataSource);
  await seedDummyClubs(dataSource);
  await seedDummyPositions(dataSource);
  await seedDummyPlayers(dataSource);
  await seedDummyUsers(dataSource);

  // Inject mock database instead of production database
  container
    .rebind<EntityManager>("EntityManager")
    .toDynamicValue(() => dataSource.manager);

  return dataSource;
};
