import { injectable } from "inversify";
import { KBallDbContext } from "../../persistence/dataSource";
import { Player, PlayerStatistics } from "../../../domain/entities";
import { PlayerStatisticsRepositoryServiceBase } from "../../../application/contracts";

@injectable()
export class PlayerStatisticsRepositoryService
  implements PlayerStatisticsRepositoryServiceBase
{
  dbContext = KBallDbContext.manager;

  async getPlayerStatsByPlayerId(
    playerId: number,
  ): Promise<PlayerStatistics[] | null> {
    const player = await this.dbContext.findOne(Player, {
      where: { id: playerId },
      relations: { playerSeasons: { playerStats: true } },
    });

    return (
      player?.playerSeasons?.flatMap((season) => season.playerStats) || null
    );
  }
}
