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
import { GetThreadCommentsQueryHandler } from "../../../application/features/thread/query/get-thread-comments-query/getThreadCommentsQueryHandler";
import { GetThreadCommentsQuery } from "../../../application/features/thread/query/get-thread-comments-query/getThreadCommentsQuery";
import { container } from "../../../infrastructure/services/inversify.config";

const getPlayerThreadsQueryHandler = container.get(
  GetPlayerThreadsQueryHandler,
);
const getThreadCommentsQueryHandler = container.get(
  GetThreadCommentsQueryHandler,
);
const createThreadCommandHandler = container.get(CreateThreadCommandHandler);
const deleteThreadCommandHandler = container.get(DeleteThreadCommandHandler);
const editThreadCommandHandler = container.get(EditThreadCommandHandler);
const createThreadCommentCommandHandler = container.get(
  CreateThreadCommentCommandHandler,
);
const editThreadCommentCommandHandler = container.get(
  EditThreadCommentCommandHandler,
);
const deleteThreadCommentCommandHandler = container.get(
  DeleteThreadCommentCommandHandler,
);

export const threadResolver = {
  ThreadQuery: {
    playerThreads: async (_: any, args: { playerId: number }) => {
      const { playerId } = args;
      return await getPlayerThreadsQueryHandler.handle(
        new GetPlayerThreadsQuery(playerId),
      );
    },
    playerThreadsComments: async (_: any, args: { threadId: number }) => {
      const { threadId } = args;
      return await getThreadCommentsQueryHandler.handle(
        new GetThreadCommentsQuery(threadId),
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
