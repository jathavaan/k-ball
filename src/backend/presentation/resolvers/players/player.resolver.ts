import { GetPlayersQuery, GetPlayersQueryHandler, GetPlayerByIdQuery, GetPlayerByIdQueryHandler } from "../../../application/features/player/query";

const getPlayersQueryHandler = new GetPlayersQueryHandler();
const getPlayerByIdQueryHandler = new GetPlayerByIdQueryHandler();

export const playerResolver = {
    PlayerQuery: {
        players: async (_: any, 
            args: {id?: number
                page?: number,
                limit?: number
                search?: string 
                clubIds?: number[]
                countryIds?: number[]
                positionIds?: number[]
                sortBy?: string
                sortOrder?: string
            }) => {
            const {id, page = 1, limit = 30, search, clubIds, countryIds, positionIds, sortBy, sortOrder} = args;
            const offset = (page - 1) * limit;
            const options = {limit, offset, filters: {search, clubIds, countryIds, positionIds, sortBy, sortOrder}};
            return await getPlayersQueryHandler.handle(new GetPlayersQuery(options));
            },
        player: async (_: any, args: {id: number}) => {
            const {id} = args;
            const playerData = await getPlayerByIdQueryHandler.handle(new GetPlayerByIdQuery(id));
            return playerData[0];
        }
    }
}