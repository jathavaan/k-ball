import { UpsertPlayerRatingCommand } from "./UpsertPlayerRatingCommand";
import { Request } from "../../../../common/request";
import { PlayerRatingRepositoryServiceBase } from "../../../../contracts/player-service/playerRatingRepository.service.base";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { PlayerRating } from "../../../../../domain/entities";

export class UpsertPlayerRatingCommandHandler
  implements Request<UpsertPlayerRatingCommand, boolean>
{
  playerRatingRepositoryService =
    container.get<PlayerRatingRepositoryServiceBase>(
      "PlayerRatingRepositoryServiceBase",
    );

  async handle(request: UpsertPlayerRatingCommand): Promise<boolean> {
    const playerRating = new PlayerRating();
    playerRating.userId = request.userId;
    playerRating.playerId = request.playerId;
    playerRating.attack = request.attack;
    playerRating.defence = request.defence;
    playerRating.passing = request.passing;
    playerRating.intelligence = request.intelligence;

    return await this.playerRatingRepositoryService.upsertPlayerRating(
      playerRating,
    );
  }
}
