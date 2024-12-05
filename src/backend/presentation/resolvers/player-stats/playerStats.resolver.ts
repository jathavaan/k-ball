import {
  GetPlayerStatisticsQuery,
  GetPlayerStatisticsQueryHandler,
} from "../../../application/features/player/query/";
import { container } from "../../../infrastructure/services/inversify.config";

const getPlayerStatsQueryHandler = container.get(
  GetPlayerStatisticsQueryHandler,
);

export const playerStatsResolver = {
  PlayerStatsQuery: {
    playerStats: async (_: any, args: { playerId: number }) => {
      const { playerId } = args;
      return await getPlayerStatsQueryHandler.handle(
        new GetPlayerStatisticsQuery(playerId),
      );
    },
  },
};
