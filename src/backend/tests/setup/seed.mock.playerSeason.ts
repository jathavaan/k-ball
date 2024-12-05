import { DataSource } from "typeorm";
import { Player, PlayerSeason, Season } from "../../domain/entities";

export const seedDummyPlayerSeason = async (
  dataSource: DataSource,
): Promise<void> => {
  const playerSeasonRepository = dataSource.getRepository(PlayerSeason);
  const seasonRepository = dataSource.getRepository(Season);
  const playerRepository = dataSource.getRepository(Player);

  const player1 = await playerRepository.findOneBy({ id: 1 });
  const player2 = await playerRepository.findOneBy({ id: 2 });

  const season2023 = await seasonRepository.findOneBy({ year: 2023 });
  const season2024 = await seasonRepository.findOneBy({ year: 2024 });

  if (!player1 || !player2 || !season2023 || !season2024) {
    throw new Error("Required related entities not found in the database");
  }

  await playerSeasonRepository.save([
    {
      id: 1,
      season: season2023,
      player: player1,
    },
    {
      id: 2,
      season: season2023,
      player: player2,
    },
    {
      id: 3,
      season: season2024,
      player: player1,
    },
    {
      id: 4,
      season: season2024,
      player: player2,
    },
  ]);
};
