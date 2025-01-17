﻿import { Request } from "../../../../common";
import { PlayerRatingRepositoryServiceBase } from "../../../../contracts";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { PlayerRating } from "../../../../../domain/entities";
import { UpsertPlayerRatingCommand } from "./upsertPlayerRatingCommand";
import { inject, injectable } from "inversify";

@injectable()
export class UpsertPlayerRatingCommandHandler
  implements Request<UpsertPlayerRatingCommand, boolean>
{
  constructor(
    @inject("PlayerRatingRepositoryServiceBase")
    private readonly playerRatingRepositoryService: PlayerRatingRepositoryServiceBase,
  ) {}

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
