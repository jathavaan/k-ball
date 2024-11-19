import { injectable } from "inversify";
import { KBallDbContext } from "../../persistence/dataSource";
import { Player, PlayerStats } from "../../../domain/entities";
import { PlayerStatsRepositoryServiceBase } from "../../../application/contracts";

@injectable()
export class PlayerStatsRepositoryService
  implements PlayerStatsRepositoryServiceBase
{
  dbContext = KBallDbContext.manager;

  async getPlayerStatsByPlayerId(
    playerId: number,
  ): Promise<PlayerStats[] | null> {
    const player = await this.dbContext.findOne(Player, {
      where: { id: playerId },
      relations: { playerSeasons: { playerStats: true } },
    });

    return (
      player?.playerSeasons?.flatMap((season) => season.playerStats) || null
    );
  }
}
