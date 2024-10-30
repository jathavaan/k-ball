import { Request } from "../../../../common/request";
import { GetPlayerByIdQuery } from "./getPlayerByIdQuery";
import { ExtendedPlayerVm, PlayerVm } from "../../../../view-models";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { PlayerRepositoryServiceBase } from "../../../../contracts";

export class GetPlayerByIdQueryHandler
    implements Request<GetPlayerByIdQuery, PlayerVm[]>
    {
        playerRepositoryService = container.get<PlayerRepositoryServiceBase>(
            "PlayerRepositoryServiceBase",
        );
        
        async handle(request: GetPlayerByIdQuery): Promise<PlayerVm[]> {
            const player = await this.playerRepositoryService.getPlayerById(request.id);
            if (!player) return [];
            return [new ExtendedPlayerVm(player)];
        }
    }