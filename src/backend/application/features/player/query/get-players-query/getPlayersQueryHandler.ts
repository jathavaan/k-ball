// TODO: Add validator for this but consult with @mbergst first
import { Request } from "../../../../common";
import { GetPlayersQuery } from "./getPlayersQuery";
import { PlayerVm } from "../../../../view-models";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { PlayerRepositoryServiceBase } from "../../../../contracts";
import { PlayerRatingServiceBase } from "../../../../contracts/player-service/playerRating.service.base";

export class GetPlayersQueryHandler
  implements
    Request<
      GetPlayersQuery,
      {
        playerCards: PlayerVm[];
        totalPlayers: number;
        totalPages: number;
        currentPage: number;
      }
    >
{
  playerRepositoryService = container.get<PlayerRepositoryServiceBase>(
    "PlayerRepositoryServiceBase",
  );
  playerRatingService = container.get<PlayerRatingServiceBase>(
    "PlayerRatingServiceBase",
  );

  async handle(request: GetPlayersQuery): Promise<{
    playerCards: PlayerVm[];
    totalPlayers: number;
    totalPages: number;
    currentPage: number;
  }> {
    const { limit, offset, filters } = request.options;
    const { playerCards, totalPlayers } =
      await this.playerRepositoryService.getPlayers(limit, offset, filters);

    const totalPages = Math.ceil(totalPlayers / limit);
    const currentPage = Math.ceil(offset / limit) + 1;

    return {
      playerCards: playerCards.map((player) => {
        const averageRating = this.playerRatingService.getAveragePlayerRating(
          player.playerReviews,
        );

        return new PlayerVm(player, averageRating);
      }),
      totalPlayers: totalPlayers,
      totalPages: totalPages,
      currentPage: currentPage,
    };
  }
}
