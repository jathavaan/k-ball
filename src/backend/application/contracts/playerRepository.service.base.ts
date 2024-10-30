import { Player } from "../../domain/entities";

export interface PlayerRepositoryServiceBase {
  getPlayers: () => Promise<Player[]>;
  getPlayerById: (id: number) => Promise<Player | null>;
  addPlayer: (player: Player) => Promise<void>;
}