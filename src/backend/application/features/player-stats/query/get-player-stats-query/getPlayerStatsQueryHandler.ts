import { Request } from "../../../../common";
import { GetPlayerStatsQuery } from "./getPlayerStatsQuery";
import { PlayerStatsVm } from "../../../../view-models";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { PlayerStatsRepositoryServiceBase } from "../../../../contracts";
import { GetPlayerStatsQueryValidator } from "./getPlayerStatsQueryValidator";

export class GetPlayerStatsQueryHandler
  implements Request<GetPlayerStatsQuery, PlayerStatsVm[] | null>
{
  validator = new GetPlayerStatsQueryValidator();
  playerStatsRepositoryService =
    container.get<PlayerStatsRepositoryServiceBase>(
      "PlayerStatsRepositoryServiceBase",
    );

  async handle(request: GetPlayerStatsQuery): Promise<PlayerStatsVm[] | null> {
    this.validator.validate(request);
    const playerStats =
      await this.playerStatsRepositoryService.getPlayerStatsByPlayerId(
        request.playerId,
      );
    if (!playerStats) return null;
    return playerStats.map((playerStats) => new PlayerStatsVm(playerStats));
  }
}
