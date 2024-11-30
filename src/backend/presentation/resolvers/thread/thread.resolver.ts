import {
  GetPlayerThreadsQuery,
  GetPlayerThreadsQueryHandler,
} from "../../../application/features/thread/query";
import {
  CreateThreadCommand,
  CreateThreadCommandHandler,
} from "../../../application/features/thread/command";

const getPlayerThreadsQueryHandler = new GetPlayerThreadsQueryHandler();
const createThreadCommand = new CreateThreadCommandHandler();
export const threadResolver = {
  ThreadQuery: {
    playerThreads: async (_: any, args: { playerId: number }) => {
      const { playerId } = args;
      return await getPlayerThreadsQueryHandler.handle(
        new GetPlayerThreadsQuery(playerId),
      );
    },
  },
  ThreadMutation: {
    postThread: async (
      _: any,
      args: {
        userId: number;
        playerId: number;
        title: string;
        content: string;
      },
    ) => {
      const { userId, playerId, title, content } = args;
      const isPostSuccessful = await createThreadCommand.handle(
        new CreateThreadCommand(userId, playerId, title, content),
      );

      return { isPostSuccessful };
    },
  },
};
