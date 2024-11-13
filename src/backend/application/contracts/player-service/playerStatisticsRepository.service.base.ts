import { PlayerStatistics } from "../../../domain/entities";

export interface PlayerStatisticsRepositoryServiceBase {
  getPlayerStatsByPlayerId: (
    playerId: number,
  ) => Promise<PlayerStatistics[] | null>;
}
