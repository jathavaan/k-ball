import { PlayerStats } from "../../domain/entities";

export interface PlayerStatsRepositoryServiceBase {
  getPlayerStatsByPlayerId: (playerId: number) => Promise<PlayerStats[] | null>;
}
