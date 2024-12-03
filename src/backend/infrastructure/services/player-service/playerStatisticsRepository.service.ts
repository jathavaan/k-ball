import { injectable } from "inversify";
import { KBallDbContext } from "../../persistence/dataSource";
import {
  Player,
  PlayerSeason,
  PlayerStatistics,
} from "../../../domain/entities";
import { PlayerStatisticsRepositoryServiceBase } from "../../../application/contracts";

@injectable()
export class PlayerStatisticsRepositoryService
  implements PlayerStatisticsRepositoryServiceBase
{
  dbContext = KBallDbContext.manager;

  async getPlayerStatsByPlayerId(
    playerId: number
  ): Promise<PlayerStatistics[] | null> {
    const player = await this.dbContext.findOne(Player, {
      where: { id: playerId },
      relations: {
        playerSeasons: {
          playerStats: { playerSeason: { season: true } },
          season: true,
        },
      },
    });

    if (!player?.playerSeasons) {
      return null;
    }

    const playerStats = player.playerSeasons.flatMap(
      (season) => season.playerStats
    );

    const sortedPlayerStats = playerStats.sort(
      (a, b) =>
        (b.playerSeason.season.year || 0) - (a.playerSeason.season.year || 0)
    );

    return sortedPlayerStats;
  }

  async generatePlayerStatistics(playerSeason: PlayerSeason): Promise<void> {
    const appearances = Math.round(Math.random() * 38);

    let maxGoals = 0;
    let maxAssists = 0;
    let yellowCardProbability = 0.1;
    let redCardProbability = 0.02;

    const position = playerSeason.player.position?.name;

    if (position) {
      switch (position.toLowerCase()) {
        case "goalkeeper":
          maxGoals = 0;
          maxAssists = 2;
          yellowCardProbability = 0.08;
          redCardProbability = 0.05;
          break;
        case "defender":
          maxGoals = 5;
          maxAssists = 5;
          yellowCardProbability = 0.2;
          redCardProbability = 0.08;
          break;
        case "midfielder":
          maxGoals = 14;
          maxAssists = 16;
          yellowCardProbability = 0.15;
          redCardProbability = 0.06;
          break;
        case "attacker":
          maxGoals = 25;
          maxAssists = 14;
          yellowCardProbability = 0.1;
          redCardProbability = 0.05;
          break;
      }
    }

    const goals = Math.min(
      Math.round(Math.random() * Math.sqrt(appearances) * (maxGoals / 5)),
      maxGoals
    );

    const assists = Math.min(
      Math.round(Math.random() * Math.sqrt(appearances) * (maxAssists / 5)),
      maxAssists
    );

    const yellowCards = Math.min(
      Math.round(Math.random() * appearances * yellowCardProbability),
      6
    );

    const redCards =
      Math.random() < yellowCards / 30
        ? Math.min(
            Math.round(Math.random() * redCardProbability * appearances),
            2
          )
        : 0;

    const playerStats = new PlayerStatistics();
    playerStats.playerSeasonId = playerSeason.id;
    playerStats.appearances = appearances;
    playerStats.goals = goals;
    playerStats.assists = assists;
    playerStats.yellowCards = yellowCards;
    playerStats.redCards = redCards;

    await this.dbContext.save(PlayerStatistics, playerStats);
  }
}
