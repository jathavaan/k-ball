import {
  GetPlayerThreadsQuery,
  GetPlayerThreadsQueryHandler,
} from "../../../application/features/thread/query";
import {
  CreateThreadCommand,
  CreateThreadCommandHandler,
  CreateThreadCommentCommand,
  CreateThreadCommentCommandHandler,
  DeleteThreadCommand,
  DeleteThreadCommandHandler,
  DeleteThreadCommentCommand,
  DeleteThreadCommentCommandHandler,
  EditThreadCommand,
  EditThreadCommandHandler,
  EditThreadCommentCommand,
  EditThreadCommentCommandHandler,
} from "../../../application/features/thread/command";

const getPlayerThreadsQueryHandler = new GetPlayerThreadsQueryHandler();
const createThreadCommandHandler = new CreateThreadCommandHandler();
const deleteThreadCommandHandler = new DeleteThreadCommandHandler();
const editThreadCommandHandler = new EditThreadCommandHandler();
const createThreadCommentCommandHandler =
  new CreateThreadCommentCommandHandler();
const editThreadCommentCommandHandler = new EditThreadCommentCommandHandler();
const deleteThreadCommentCommandHandler =
  new DeleteThreadCommentCommandHandler();

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
    editThread: async (
      _: any,
      args: {
        threadId: number;
        title: string;
        content: string;
      },
    ) => {
      const { threadId, title, content } = args;
      const isEditSuccessful = await editThreadCommandHandler.handle(
        new EditThreadCommand(threadId, title, content),
      );

      return { isEditSuccessful };
    },
    postThreadComment: async (
      _: any,
      args: {
        userId: number;
        threadId: number;
        content: string;
      },
    ) => {
      const { userId, threadId, content } = args;
      const isPostSuccessful = await createThreadCommentCommandHandler.handle(
        new CreateThreadCommentCommand(threadId, userId, content),
      );

      return { isPostSuccessful };
    },
    editThreadComment: async (
      _: any,
      args: {
        threadCommentId: number;
        content: string;
      },
    ) => {
      const { threadCommentId, content } = args;
      const isEditSuccessful = await editThreadCommentCommandHandler.handle(
        new EditThreadCommentCommand(threadCommentId, content),
      );

      return { isEditSuccessful };
    },
    deleteThreadComment: async (
      _: any,
      args: {
        threadCommentId: number;
      },
    ) => {
      const { threadCommentId } = args;
      const isDeleteSuccessful = await deleteThreadCommentCommandHandler.handle(
        new DeleteThreadCommentCommand(threadCommentId),
      );

      return { isDeleteSuccessful };
    },
  },
};
