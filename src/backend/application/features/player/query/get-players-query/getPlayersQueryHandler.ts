import { Request } from "../../../../common/request";
import { GetPlayersQuery } from "./getPlayersQuery";
import { PlayerVm } from "../../../../view-models";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { PlayerRepositoryServiceBase } from "../../../../contracts";

export class GetPlayersQueryHandler
    implements Request<GetPlayersQuery, { playerCards: PlayerVm[], totalPages: number, currentPage: number}>
    {
        playerRepositoryService = container.get<PlayerRepositoryServiceBase>(
            "PlayerRepositoryServiceBase",
        );
        
        async handle(request: GetPlayersQuery): Promise<{ playerCards: PlayerVm[], totalPages: number, currentPage: number}> {
            const { limit, offset, filters } = request.options;
            const { playerCards, totalPlayers } = await this.playerRepositoryService.getPlayers(
                limit,
                offset,
                filters);

            const totalPages = Math.ceil(totalPlayers / limit);
            const currentPage = Math.ceil(offset / limit) + 1;
            return {
                playerCards: playerCards.map((player) => new PlayerVm(player)),
                totalPages: totalPages,
                currentPage: currentPage
            };
        }
    }

