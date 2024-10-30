import { Player } from "domain/entities";
import { GetPlayersQuery, GetPlayersQueryHandler, GetPlayerByIdQuery, GetPlayerByIdQueryHandler } from "../../../application/features/player/query";

const getPlayersQueryHandler = new GetPlayersQueryHandler();
const getPlayerByIdQueryHandler = new GetPlayerByIdQueryHandler();

export const playerResolver = {
    PlayerQuery: {
        players: async (_: any, args: {playerId?: number}) => {
            const {playerId} = args;
            if (playerId === undefined) {
                return await getPlayersQueryHandler.handle(new GetPlayersQuery());
            } else {
                return await getPlayerByIdQueryHandler.handle(new GetPlayerByIdQuery(playerId));
            }
        }
    }
}