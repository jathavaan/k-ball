import { DataSource } from "typeorm";
import { PlayerSeason, PlayerStatistics } from "../../domain/entities";

export const seedDummyPlayerStatistics = async (dataSource: DataSource) => {
  const playerStatisticsRepository = dataSource.getRepository(PlayerStatistics);
  const playerSeasonRepository = dataSource.getRepository(PlayerSeason);

  const player1Season2023 = await playerSeasonRepository.findOneBy({ id: 1 });
  const player2Season2023 = await playerSeasonRepository.findOneBy({ id: 2 });
  const player1Season2024 = await playerSeasonRepository.findOneBy({ id: 3 });
  const player2Season2024 = await playerSeasonRepository.findOneBy({ id: 4 });

  if (
    !player1Season2023 ||
    !player2Season2023 ||
    !player1Season2024 ||
    !player2Season2024
  ) {
    throw new Error("Required related entites not found in the database");
  }

  await playerStatisticsRepository.save([
    {
      playerSeason: player2Season2024,
      goals: 3,
      assists: 3,
      appearances: 3,
      yellowCards: 3,
      redCards: 3,
    },
    {
      playerSeason: player1Season2023,
      goals: 0,
      assists: 0,
      appearances: 0,
      yellowCards: 0,
      redCards: 0,
    },
    {
      playerSeason: player1Season2024,
      goals: 2,
      assists: 2,
      appearances: 2,
      yellowCards: 2,
      redCards: 2,
    },
    {
      playerSeason: player2Season2023,
      goals: 1,
      assists: 1,
      appearances: 1,
      yellowCards: 1,
      redCards: 1,
    },
  ]);
};
