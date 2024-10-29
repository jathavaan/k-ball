import { DataSource } from "typeorm";
import {
  BirthPlace,
  Club,
  ClubSeason,
  Country,
  Player,
  PlayerReview,
  PlayerSeason,
  PlayerStats,
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
    PlayerReview,
    Position,
    ClubSeason,
    PlayerSeason,
    PlayerStats,
    Season,
  ],
  migrations: ["migrations/*{.ts,.js}"],
  migrationsTableName: "__migration_history__",
});
