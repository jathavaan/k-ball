import { Request } from "../../../../common";
import { GetPlayerStatisticsQuery } from "./getPlayerStatisticsQuery";
import { PlayerStatsVm } from "../../../../view-models";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { PlayerStatisticsRepositoryServiceBase } from "../../../../contracts";
import { GetPlayerStatsQueryValidator } from "./getPlayerStatsQueryValidator";

export class GetPlayerStatisticsQueryHandler
  implements Request<GetPlayerStatisticsQuery, PlayerStatsVm[] | null>
{
  validator = new GetPlayerStatsQueryValidator();
  playerStatsRepositoryService =
    container.get<PlayerStatisticsRepositoryServiceBase>(
      "PlayerStatsRepositoryServiceBase",
    );

  async handle(
    request: GetPlayerStatisticsQuery,
  ): Promise<PlayerStatsVm[] | null> {
    this.validator.validate(request);
    const playerStats =
      await this.playerStatsRepositoryService.getPlayerStatsByPlayerId(
        request.playerId,
      );
    if (!playerStats) return null;
    return playerStats.map((playerStats) => new PlayerStatsVm(playerStats));
  }
}
