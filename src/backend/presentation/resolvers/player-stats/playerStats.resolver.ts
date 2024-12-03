import {
  GetPlayerStatisticsQuery,
  GetPlayerStatisticsQueryHandler,
} from "../../../application/features/player/query/";

const getPlayerStatsQueryHandler = new GetPlayerStatisticsQueryHandler();

export const playerStatsResolver = {
  PlayerStatsQuery: {
    playerStats: async (_: any, args: { playerId: number }) => {
      const { playerId } = args;
      const result = await getPlayerStatsQueryHandler.handle(
        new GetPlayerStatisticsQuery(playerId)
      );
      return result;
    },
  },
};
