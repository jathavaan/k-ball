import { Request } from "../../../../common";
import { DeletePlayerRatingCommandValidator } from "./deletePlayerRatingCommandValidator";
import { DeletePlayerRatingCommand } from "./deletePlayerRatingCommand";
import { PlayerRatingRepositoryServiceBase } from "../../../../contracts";
import { container } from "../../../../../infrastructure/services/inversify.config";

export class DeletePlayerRatingCommandHandler
  implements Request<DeletePlayerRatingCommand, boolean>
{
  validator = new DeletePlayerRatingCommandValidator();
  playerRatingRepositoryService =
    container.get<PlayerRatingRepositoryServiceBase>(
      "PlayerRatingRepositoryServiceBase",
    );

  handle(request: DeletePlayerRatingCommand): Promise<boolean> {
    this.validator.validate(request);
    return this.playerRatingRepositoryService.deletePlayerRating(
      request.userId,
      request.playerId,
    );
  }
}
