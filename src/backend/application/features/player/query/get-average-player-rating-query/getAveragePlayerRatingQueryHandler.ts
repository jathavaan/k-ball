import { Request } from "../../../../common/request";
import { GetAveragePlayerRatingQuery } from "./getAveragePlayerRatingQuery";
import { PlayerRatingVm } from "../../../../view-models/playerRatingVm";
import { PlayerRatingRepositoryServiceBase } from "../../../../contracts";
import { container } from "../../../../../infrastructure/services/inversify.config";

export class GetAveragePlayerRatingQueryHandler
  implements Request<GetAveragePlayerRatingQuery, PlayerRatingVm | null>
{
  playerRatingRepositoryService =
    container.get<PlayerRatingRepositoryServiceBase>(
      "PlayerRatingRepositoryServiceBase",
    );

  async handle(
    request: GetAveragePlayerRatingQuery,
  ): Promise<PlayerRatingVm | null> {
    const averagePlayerRating =
      await this.playerRatingRepositoryService.getAveragePlayerRating(
        request.playerId,
      );

    return averagePlayerRating
      ? new PlayerRatingVm(
          averagePlayerRating.attack,
          averagePlayerRating.defence,
          averagePlayerRating.passing,
          averagePlayerRating.intelligence,
        )
      : null;
  }
}
