import { Request } from "../../../../common";
import { GetPlayerByIdQuery } from "./getPlayerByIdQuery";
import { ExtendedPlayerVm, PlayerVm } from "../../../../view-models";
import { PlayerRepositoryServiceBase } from "../../../../contracts";
import { inject, injectable } from "inversify";
import { GetPlayerByIdQueryValidator } from "./getPlayerByIdQueryValidator";

@injectable()
export class GetPlayerByIdQueryHandler
  implements Request<GetPlayerByIdQuery, PlayerVm[]>
{
  constructor(
    @inject("PlayerRepositoryServiceBase")
    private readonly playerRepositoryService: PlayerRepositoryServiceBase,
  ) {}

  private readonly validator = new GetPlayerByIdQueryValidator();

  async handle(request: GetPlayerByIdQuery): Promise<PlayerVm[]> {
    this.validator.validate(request);
    const player = await this.playerRepositoryService.getPlayerById(request.id);
    if (!player) return [];
    const result = [new ExtendedPlayerVm(player)];
    return result;
  }
}
