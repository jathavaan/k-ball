import {
  GetPlayerThreadsQuery,
  GetPlayerThreadsQueryHandler,
} from "../../../application/features/thread/query";

const getPlayerThreadsQueryHandler = new GetPlayerThreadsQueryHandler();
export const threadResolver = {
  ThreadQuery: {
    playerThreads: async (_: any, args: { playerId: number }) => {
      const { playerId } = args;
      return await getPlayerThreadsQueryHandler.handle(
        new GetPlayerThreadsQuery(playerId),
      );
    },
  },
  ThreadMutation: {},
};
