import { PlayerRating } from "../../../domain/entities";

export interface PlayerRatingServiceBase {
  getAveragePlayerRating(playerRatings: PlayerRating[]): number | undefined;
  getAverageRating(ratings: number[]): number;
}
