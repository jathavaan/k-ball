import { Request } from "../../../../common";
import { GetPlayerStatisticsQuery } from "./getPlayerStatisticsQuery";
import { PlayerStatsVm } from "../../../../view-models";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { PlayerStatisticsRepositoryServiceBase } from "../../../../contracts";
import { GetPlayerStatisticsQueryValidator } from "./getPlayerStatisticsQueryValidator";

export class GetPlayerStatisticsQueryHandler
  implements Request<GetPlayerStatisticsQuery, PlayerStatsVm[] | null>
{
  validator = new GetPlayerStatisticsQueryValidator();
  playerStatsRepositoryService =
    container.get<PlayerStatisticsRepositoryServiceBase>(
      "PlayerStatisticsRepositoryServiceBase"
    );

  async handle(
    request: GetPlayerStatisticsQuery
  ): Promise<PlayerStatsVm[] | null> {
    this.validator.validate(request);
    const playerStats =
      await this.playerStatsRepositoryService.getPlayerStatsByPlayerId(
        request.playerId
      );
    if (!playerStats) return null;
    const result = playerStats.map(
      (playerStats) => new PlayerStatsVm(playerStats)
    );
    return result;
  }
}
