import { Request } from "../../../../common/request";
import { GetPlayerStatisticsQuery } from "./getPlayerStatisticsQuery";
import { PlayerStatsVm } from "../../../../view-models";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { PlayerStatsRepositoryServiceBase } from "../../../../contracts";

export class GetPlayerStatisticsQueryHandler
  implements Request<GetPlayerStatisticsQuery, PlayerStatsVm[] | null>
{
  playerStatsRepositoryService =
    container.get<PlayerStatsRepositoryServiceBase>(
      "PlayerStatsRepositoryServiceBase",
    );

  async handle(
    request: GetPlayerStatisticsQuery,
  ): Promise<PlayerStatsVm[] | null> {
    const playerStats =
      await this.playerStatsRepositoryService.getPlayerStatsByPlayerId(
        request.playerId,
      );
    if (!playerStats) return null;
    return playerStats.map((playerStats) => new PlayerStatsVm(playerStats));
  }
}
