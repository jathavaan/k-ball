import { DataSource } from "typeorm";
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
  User,
} from "../../domain/entities";
import { config } from "../../config";

export const KBallDbContext = new DataSource({
  type: "postgres",
  host: config.DB_HOST,
  port: config.DB_PORT,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  synchronize: true,
  logging: ["error"],
  entities: [
    User,
    BirthPlace,
    Club,
    Country,
    Player,
    PlayerRating,
    Position,
    ClubSeason,
    PlayerSeason,
    PlayerStatistics,
    Season,
    PlayerImportState,
  ],
  migrations: ["migrations/*{.ts,.js}"],
  migrationsTableName: "__migration_history__",
});
