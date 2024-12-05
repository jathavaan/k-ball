import { Request } from "../../../../common";
import { GetPlayerStatisticsQuery } from "./getPlayerStatisticsQuery";
import { PlayerStatsVm } from "../../../../view-models";
import { PlayerStatisticsRepositoryServiceBase } from "../../../../contracts";
import { GetPlayerStatisticsQueryValidator } from "./getPlayerStatisticsQueryValidator";
import { inject, injectable } from "inversify";

@injectable()
export class GetPlayerStatisticsQueryHandler
  implements Request<GetPlayerStatisticsQuery, PlayerStatsVm[] | null>
{
  constructor(
    @inject("PlayerStatisticsRepositoryServiceBase")
    private readonly playerStatisticsRepositoryService: PlayerStatisticsRepositoryServiceBase,
  ) {}

  private readonly validator = new GetPlayerStatisticsQueryValidator();

  async handle(
    request: GetPlayerStatisticsQuery,
  ): Promise<PlayerStatsVm[] | null> {
    this.validator.validate(request);
    const playerStats =
      await this.playerStatisticsRepositoryService.getPlayerStatsByPlayerId(
        request.playerId,
      );
    if (!playerStats) return null;
    const result = playerStats.map(
      (playerStats) => new PlayerStatsVm(playerStats),
    );
    return result;
  }
}
