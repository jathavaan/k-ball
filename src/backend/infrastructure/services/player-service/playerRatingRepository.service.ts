import { PlayerRatingRepositoryServiceBase } from "../../../application/contracts/player-service/playerRatingRepository.service.base";
import { PlayerRating } from "../../../domain/entities";
import { KBallDbContext } from "../../persistence/dataSource";
import { PlayerRatingDto } from "../../../application/contracts";
import { injectable } from "inversify";

@injectable()
export class PlayerRatingRepositoryService
  implements PlayerRatingRepositoryServiceBase
{
  dbContext = KBallDbContext.manager;

  async getPlayerRatingByUserId(playerId: number, userId: number) {
    return await this.dbContext.findOne(PlayerRating, {
      where: {
        playerId: playerId,
        userId: userId,
      },
    });
  }

  async getAllPlayerRatings(playerId: number) {
    const playerRatings = await this.dbContext.find(PlayerRating, {
      where: {
        playerId: playerId,
      },
    });

    return playerRatings.map(
      (playerRating) =>
        new PlayerRatingDto(
          playerRating.attack,
          playerRating.defence,
          playerRating.passing,
          playerRating.intelligence,
        ),
    );
  }

  async getAveragePlayerRating(playerId: number) {
    const playerRatings = await this.getAllPlayerRatings(playerId);
    const numberOfRatings = playerRatings.length;

    if (numberOfRatings === 0) {
      return null;
    }

    const averageAttack =
      playerRatings.reduce(
        (sum, playerRating) => sum + playerRating.attack,
        0,
      ) / numberOfRatings;

    const averageDefence =
      playerRatings.reduce(
        (sum, playerRating) => sum + playerRating.defence,
        0,
      ) / numberOfRatings;

    const averagePassing =
      playerRatings.reduce(
        (sum, playerRating) => sum + playerRating.passing,
        0,
      ) / numberOfRatings;

    const averageIntelligence =
      playerRatings.reduce(
        (sum, playerRating) => sum + playerRating.intelligence,
        0,
      ) / numberOfRatings;

    return new PlayerRatingDto(
      averageAttack,
      averageDefence,
      averagePassing,
      averageIntelligence,
    );
  }

  async getUsersPlayerRating(userId: number) {
    const playerRatings = await this.dbContext.find(PlayerRating, {
      where: {
        userId: userId,
      },
    });

    return playerRatings.map(
      (playerRating) =>
        new PlayerRatingDto(
          playerRating.attack,
          playerRating.defence,
          playerRating.passing,
          playerRating.intelligence,
        ),
    );
  }

  async upsertPlayerRating(playerRating: PlayerRating) {
    try {
      const existingPlayerRating = await this.getPlayerRatingByUserId(
        playerRating.playerId,
        playerRating.userId,
      );

      if (existingPlayerRating) {
        existingPlayerRating.attack = playerRating.attack;
        existingPlayerRating.defence = playerRating.defence;
        existingPlayerRating.passing = playerRating.passing;
        existingPlayerRating.intelligence = playerRating.intelligence;
        await this.dbContext.save(PlayerRating, existingPlayerRating);
      } else {
        await this.dbContext.save(PlayerRating, playerRating);
      }

      return true;
    } catch (err) {
      return false;
    }
  }
}
