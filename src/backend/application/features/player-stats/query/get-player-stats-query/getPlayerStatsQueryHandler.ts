import { Request } from "../../../../common/request";
import { GetPlayerStatsQuery } from "./getPlayerStatsQuery";
import { PlayerStatsVm } from "../../../../view-models";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { PlayerStatsRepositoryServiceBase } from "../../../../contracts";

export class GetPlayerStatsQueryHandler
    implements Request<GetPlayerStatsQuery, PlayerStatsVm[] | null>
{
    playerStatsRepositoryService = container.get<PlayerStatsRepositoryServiceBase>(
        "PlayerStatsRepositoryServiceBase",
    );

    async handle(request: GetPlayerStatsQuery): Promise<PlayerStatsVm[] | null> {
        const playerStats = await this.playerStatsRepositoryService.getPlayerStatsByPlayerId(request.playerId);
        if (!playerStats) return null;
        return playerStats.map((playerStats) => new PlayerStatsVm(playerStats));
    }
}