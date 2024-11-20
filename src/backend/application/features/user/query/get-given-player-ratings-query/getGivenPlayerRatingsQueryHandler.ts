import { Request } from "../../../../common";
import { GetGivenPlayerRatingsQuery } from "./getGivenPlayerRatingsQuery";
import { PlayerRatingInfoVm } from "../../../../view-models/playerRatingVm";
import { GetGivenRatingsQueryValidator } from "./getGivenRatingsQueryValidator";
import { PlayerRatingRepositoryServiceBase } from "../../../../contracts";
import { container } from "../../../../../infrastructure/services/inversify.config";

export class GetGivenPlayerRatingsQueryHandler
  implements Request<GetGivenPlayerRatingsQuery, PlayerRatingInfoVm[]>
{
  validator = new GetGivenRatingsQueryValidator();
  playerRatingRepositoryService =
    container.get<PlayerRatingRepositoryServiceBase>(
      "PlayerRatingRepositoryServiceBase",
    );

  async handle(
    request: GetGivenPlayerRatingsQuery,
  ): Promise<PlayerRatingInfoVm[]> {
    this.validator.validate(request);
    return await this.playerRatingRepositoryService.getUsersDetailedPlayerRating(
      request.userId,
    );
  }
}
