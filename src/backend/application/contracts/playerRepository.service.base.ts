import { PlayerResponse } from "../dtos";
import { Player } from "../../domain/entities";

export interface PlayerRepositoryServiceBase {
  getPlayers: (
    limit: number,
    offset: number,
    filters: {
      search?: string;
      clubIds?: number[];
      countryIds?: number[];
      positionIds?: number[];
      sortBy?: string;
      sortOrder?: string;
    },
  ) => Promise<{ playerCards: Player[]; totalPlayers: number }>;

  getPlayerById(playerId: number): Promise<Player | null>;

  getPlayerByExternalId(externalId: number): Promise<Player | null>;

  upsertPlayer(playerResponse: PlayerResponse): Promise<boolean | null>;
}
