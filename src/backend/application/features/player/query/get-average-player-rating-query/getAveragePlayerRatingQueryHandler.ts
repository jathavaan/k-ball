import { Request } from "../../../../common";
import { GetAveragePlayerRatingQuery } from "./getAveragePlayerRatingQuery";
import { PlayerRatingVm } from "../../../../view-models";
import { PlayerRatingRepositoryServiceBase } from "../../../../contracts";
import { inject, injectable } from "inversify";

@injectable()
export class GetAveragePlayerRatingQueryHandler
  implements Request<GetAveragePlayerRatingQuery, PlayerRatingVm | null>
{
  constructor(
    @inject("PlayerRatingRepositoryServiceBase")
    private readonly playerRatingRepositoryService: PlayerRatingRepositoryServiceBase,
  ) {}

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
