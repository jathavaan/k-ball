import { Request } from "../../../../common";
import { GetGivenPlayerRatingsQuery } from "./getGivenPlayerRatingsQuery";
import { GetGivenRatingsQueryValidator } from "./getGivenRatingsQueryValidator";
import { PlayerRatingRepositoryServiceBase } from "../../../../contracts";
import { PlayerRatingInfoVm } from "../../../../view-models";
import { inject, injectable } from "inversify";

@injectable()
export class GetGivenPlayerRatingsQueryHandler
  implements Request<GetGivenPlayerRatingsQuery, PlayerRatingInfoVm[]>
{
  constructor(
    @inject("PlayerRatingRepositoryServiceBase")
    private readonly playerRatingRepositoryService: PlayerRatingRepositoryServiceBase,
  ) {}

  private readonly validator = new GetGivenRatingsQueryValidator();

  async handle(
    request: GetGivenPlayerRatingsQuery,
  ): Promise<PlayerRatingInfoVm[]> {
    this.validator.validate(request);
    return await this.playerRatingRepositoryService.getUsersDetailedPlayerRating(
      request.userId,
    );
  }
}
