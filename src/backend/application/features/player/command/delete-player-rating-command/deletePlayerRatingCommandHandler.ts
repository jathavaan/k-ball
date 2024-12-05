import { Request } from "../../../../common";
import { DeletePlayerRatingCommandValidator } from "./deletePlayerRatingCommandValidator";
import { DeletePlayerRatingCommand } from "./deletePlayerRatingCommand";
import { inject, injectable } from "inversify";
import { PlayerRatingRepositoryServiceBase } from "../../../../contracts";

@injectable()
export class DeletePlayerRatingCommandHandler
  implements Request<DeletePlayerRatingCommand, boolean>
{
  constructor(
    @inject("PlayerRatingRepositoryServiceBase")
    private readonly playerRatingRepositoryService: PlayerRatingRepositoryServiceBase,
  ) {}

  private readonly validator = new DeletePlayerRatingCommandValidator();

  handle(request: DeletePlayerRatingCommand): Promise<boolean> {
    this.validator.validate(request);
    return this.playerRatingRepositoryService.deletePlayerRating(
      request.userId,
      request.playerId,
    );
  }
}
