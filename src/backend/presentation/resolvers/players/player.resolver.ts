import { Player } from "domain/entities";
import { GetPlayersQuery, GetPlayersQueryHandler, GetPlayerByIdQuery, GetPlayerByIdQueryHandler } from "../../../application/features/player/query";

const getPlayersQueryHandler = new GetPlayersQueryHandler();
const getPlayerByIdQueryHandler = new GetPlayerByIdQueryHandler();

export const playerResolver = {
    PlayerQuery: {
        players: async (_: any, 
            args: {playerId?: number
                page?: number,
                limit?: number
                search?: string 
                clubIds?: number[]
                countryIds?: number[]
                positionIds?: number[]
            }) => {
            const {playerId, page = 1, limit = 30, search = "", clubIds = [], countryIds = [], positionIds = []} = args;
            const offset = (page - 1) * limit;
            const options = {limit, offset, filters: {search, clubIds, countryIds, positionIds}};
            if (playerId === undefined) {
                return await getPlayersQueryHandler.handle(new GetPlayersQuery(
                    options));
            } else {
                return await getPlayerByIdQueryHandler.handle(new GetPlayerByIdQuery(playerId));
            }
        }
    }
}