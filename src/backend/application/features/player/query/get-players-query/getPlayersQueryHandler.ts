import { Request } from "../../../../common/request";
import { GetPlayersQuery } from "./getPlayersQuery";
import { PlayerVm } from "../../../../view-models";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { PlayerRepositoryServiceBase } from "../../../../contracts";

export class GetPlayersQueryHandler
    implements Request<GetPlayersQuery, PlayerVm[]>
    {
        playerRepositoryService = container.get<PlayerRepositoryServiceBase>(
            "PlayerRepositoryServiceBase",
        );
        
        async handle(request: GetPlayersQuery): Promise<PlayerVm[]> {
            const players = await this.playerRepositoryService.getPlayers();
            return players.map((player) => new PlayerVm(player));
        }
    }

