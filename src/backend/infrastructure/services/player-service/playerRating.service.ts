import { PlayerRatingServiceBase } from "../../../application/contracts/player-service/playerRating.service.base";
import { injectable } from "inversify";
import { PlayerRating } from "../../../domain/entities";

@injectable()
export class PlayerRatingService implements PlayerRatingServiceBase {
  getAverageRating(ratings: number[]) {
    return ratings.reduce((sum, rating) => sum + rating) / ratings.length;
  }

  getAveragePlayerRating(playerRatings: PlayerRating[]): number | undefined {
    if (playerRatings.length === 0) return undefined;
    const averageAttack = this.getAverageRating(
      playerRatings.map((rating) => rating.attack),
    );
    const averageDefence = this.getAverageRating(
      playerRatings.map((rating) => rating.defence),
    );

    const averagePassing = this.getAverageRating(
      playerRatings.map((rating) => rating.passing),
    );
    const averageIntelligence = this.getAverageRating(
      playerRatings.map((rating) => rating.intelligence),
    );

    return this.getAverageRating([
      averageAttack,
      averageDefence,
      averagePassing,
      averageIntelligence,
    ]);
  }
}
