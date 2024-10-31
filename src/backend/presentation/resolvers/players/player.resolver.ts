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
            }) => {
            const {id, page = 1, limit = 30, search = "", clubIds = [], countryIds = [], positionIds = []} = args;
            const offset = (page - 1) * limit;
            const options = {limit, offset, filters: {search, clubIds, countryIds, positionIds}};
            return await getPlayersQueryHandler.handle(new GetPlayersQuery(options));
            },
        player: async (_: any, args: {id: number}) => {
            const {id} = args;
            const playerData = await getPlayerByIdQueryHandler.handle(new GetPlayerByIdQuery(id));
            return playerData[0];
        }
    }
}