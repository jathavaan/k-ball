import { DataSource } from "typeorm";
import { BirthPlace, Club, ClubSeason, Country, Player, PlayerReview, PlayerSeason, PlayerStats, Season, User } from "@domain/entities";

export const KBallDbContext = new DataSource({
  type: "postgres",
  host: "it2810-25.idi.ntnu.no",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "k-ball-db",
  synchronize: true,
  logging: ["error"],
  entities: [User, BirthPlace, Club, Country, Player, PlayerReview, ClubSeason, PlayerSeason, PlayerStats, Season],
  migrations: ["migrations/*{.ts,.js}"],
  migrationsTableName: "__migration_history__",
});
