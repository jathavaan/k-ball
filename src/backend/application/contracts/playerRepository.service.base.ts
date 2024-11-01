import { BirthPlace, Player } from "../../domain/entities";
import { PlayerResponse } from "../dtos";

export interface PlayerRepositoryServiceBase {
  getPlayers(): Promise<Player[]>;
  getPlayerById(playerId: number): Promise<Player | null>;
  getPlayerByExternalId(externalId: number): Promise<Player | null>;
  upsertPlayer(playerResponse: PlayerResponse): Promise<boolean | null>;
}
