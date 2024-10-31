import { injectable } from "inversify";
import { KBallDbContext } from "../../persistence/dataSource";
import { PlayerStats } from "../../../domain/entities";
import { PlayerStatsRepositoryServiceBase } from "../../../application/contracts";

@injectable()
export class PlayerStatsRepositoryService implements PlayerStatsRepositoryServiceBase {
    dbContext = KBallDbContext.manager;

    async getPlayerStatsByPlayerId(playerId: number): Promise<PlayerStats[] | null> {
        const playerStats = await this.dbContext
            .createQueryBuilder(PlayerStats, "playerStats")
            .innerJoin("playerStats.playerSeason", "playerSeason")
            .where("playerSeason.player = :playerId", { playerId })
            .getMany();
        
        //console.log(playerStats);
        return playerStats;
    }
}
