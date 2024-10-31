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
  getPlayerById: (id: number) => Promise<Player | null>;
  addPlayer: (player: Player) => Promise<void>;
}
