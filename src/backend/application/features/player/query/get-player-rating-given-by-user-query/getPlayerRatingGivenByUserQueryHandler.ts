import { GetPlayerRatingGivenByUserQuery } from "./GetPlayerRatingGivenByUserQuery";
import { PlayerRatingVm } from "../../../../view-models/playerRatingVm";
import { Request } from "../../../../common/request";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { PlayerRatingRepositoryServiceBase } from "../../../../contracts";

export class GetPlayerRatingGivenByUserQueryHandler
  implements Request<GetPlayerRatingGivenByUserQuery, PlayerRatingVm | null>
{
  playerRatingRepositoryService =
    container.get<PlayerRatingRepositoryServiceBase>(
      "PlayerRatingRepositoryServiceBase",
    );

  async handle(
    request: GetPlayerRatingGivenByUserQuery,
  ): Promise<PlayerRatingVm | null> {
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
