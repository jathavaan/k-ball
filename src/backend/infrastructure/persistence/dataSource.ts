import { DataSource } from "typeorm";
import { BirthPlace, Club, Country, Player, User } from "@domain/entities";

export const KBallDbContext = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "k-ball-db",
  synchronize: true,
  logging: ["error"],
  entities: [User, BirthPlace, Club, Country, Player],
  migrations: ["migrations/*{.ts,.js}"],
  migrationsTableName: "__migration_history__",
});
