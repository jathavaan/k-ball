import { PlayerStatistics } from "../../../domain/entities";
import { PlayerSeason } from "../../../domain/entities";
import { PlayerStatisticsDto } from "../database-import-service/footballApi.dto";

export interface PlayerStatisticsRepositoryServiceBase {
  getPlayerStatsByPlayerId: (
    playerId: number,
  ) => Promise<PlayerStatistics[] | null>;
  generatePlayerStatistics: (playerSeason: PlayerSeason) => Promise<void>;
}
