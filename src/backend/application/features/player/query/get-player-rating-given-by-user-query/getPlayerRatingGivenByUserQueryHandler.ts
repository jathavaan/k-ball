import { PlayerRatingVm } from "../../../../view-models/playerRatingVm";
import { Request } from "../../../../common";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { PlayerRatingRepositoryServiceBase } from "../../../../contracts";
import { GetPlayerRatingGivenByUserQueryValidator } from "./getPlayerRatingGivenByUserQueryValidator";
import { GetPlayerRatingGivenByUserQuery } from "./getPlayerRatingGivenByUserQuery";

export class GetPlayerRatingGivenByUserQueryHandler
  implements Request<GetPlayerRatingGivenByUserQuery, PlayerRatingVm | null>
{
  validator = new GetPlayerRatingGivenByUserQueryValidator();
  playerRatingRepositoryService =
    container.get<PlayerRatingRepositoryServiceBase>(
      "PlayerRatingRepositoryServiceBase",
    );

  async handle(
    request: GetPlayerRatingGivenByUserQuery,
  ): Promise<PlayerRatingVm | null> {
    this.validator.validate(request);
    const playerRating =
      await this.playerRatingRepositoryService.getPlayerRatingByUserId(
        request.playerId,
        request.userId,
      );

    return playerRating
      ? new PlayerRatingVm(
          playerRating.attack,
          playerRating.defence,
          playerRating.passing,
          playerRating.intelligence,
        )
      : null;
  }
}
