import { PlayerRatingVm } from "../../../../view-models";
import { Request } from "../../../../common";
import { PlayerRatingRepositoryServiceBase } from "../../../../contracts";
import { GetPlayerRatingGivenByUserQueryValidator } from "./getPlayerRatingGivenByUserQueryValidator";
import { GetPlayerRatingGivenByUserQuery } from "./getPlayerRatingGivenByUserQuery";
import { inject, injectable } from "inversify";

@injectable()
export class GetPlayerRatingGivenByUserQueryHandler
  implements Request<GetPlayerRatingGivenByUserQuery, PlayerRatingVm | null>
{
  constructor(
    @inject("PlayerRatingRepositoryServiceBase")
    private readonly playerRatingRepositoryService: PlayerRatingRepositoryServiceBase,
  ) {}

  private readonly validator = new GetPlayerRatingGivenByUserQueryValidator();

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
