﻿import {
  GetPlayerThreadsQuery,
  GetPlayerThreadsQueryHandler,
} from "../../../application/features/thread/query";
import {
  CreateThreadCommand,
  CreateThreadCommandHandler,
  DeleteThreadCommand,
  DeleteThreadCommandHandler,
} from "../../../application/features/thread/command";

const getPlayerThreadsQueryHandler = new GetPlayerThreadsQueryHandler();
const createThreadCommandHandler = new CreateThreadCommandHandler();
const deleteThreadCommandHandler = new DeleteThreadCommandHandler();
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
      const isPostSuccessful = await createThreadCommandHandler.handle(
        new CreateThreadCommand(userId, playerId, title, content),
      );

      return { isPostSuccessful };
    },
    deleteThread: async (
      _: any,
      args: {
        threadId: number;
      },
    ) => {
      const { threadId } = args;
      const isDeleteSuccessful = await deleteThreadCommandHandler.handle(
        new DeleteThreadCommand(threadId),
      );

      return { isDeleteSuccessful };
    },
  },
};
