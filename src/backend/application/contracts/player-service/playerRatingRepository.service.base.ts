import { PlayerRating } from "../../../domain/entities";
import { PlayerRatingDto } from "./playerRating.dto";

export interface PlayerRatingRepositoryServiceBase {
  getPlayerRatingByUserId: (
    playerId: number,
    userId: number,
  ) => Promise<PlayerRating | null>;
  getAllPlayerRatings: (playerId: number) => Promise<PlayerRatingDto[]>;
  getAveragePlayerRating: (playerId: number) => Promise<PlayerRatingDto | null>;
  getUsersPlayerRating: (userId: number) => Promise<PlayerRatingDto[]>;
  upsertPlayerRating: (playerRating: PlayerRating) => Promise<boolean>;
}
