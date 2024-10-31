import {
    GetPlayerStatsQuery,
    GetPlayerStatsQueryHandler,
} from "../../../application/features/player-stats/query";

const getPlayerStatsQueryHandler = new GetPlayerStatsQueryHandler();

export const playerStatsResolver = {
    PlayerStatsQuery: {
        playerStats: async (_: any, args: { playerId: number }) => {
            const { playerId } = args;
            return await getPlayerStatsQueryHandler.handle(new GetPlayerStatsQuery(playerId));
        },
    },
};