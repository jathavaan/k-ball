import { DataSource } from "typeorm";
import {
  BirthPlace,
  Club,
  Country,
  Player,
  Position,
  User,
} from "@domain/entities";

export const KBallDbContext = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "k-ball-db",
  synchronize: true,
  logging: ["error"],
  entities: [BirthPlace, Club, Country, Player, Position, User],
  migrations: ["migrations/*{.ts,.js}"],
  migrationsTableName: "__migration_history__",
});
