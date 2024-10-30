import {
  GetUserByIdQuery,
  GetUserByIdQueryHandler,
  GetUsersQuery,
  GetUsersQueryHandler,
} from "../../../application/features/user/query";
import {
  CreateUserCommand,
  CreateUserCommandHandler,
} from "../../../application/features/user/command";

const createUserCommandHandler = new CreateUserCommandHandler();
const getUserByIdQueryHandler = new GetUserByIdQueryHandler();
const getUsersQueryHandler = new GetUsersQueryHandler();

export const userResolver = {
  UserQuery: {
    user: async (_: any, args: { userId: number }) => {
      const { userId } = args;
      return await getUserByIdQueryHandler.handle(new GetUserByIdQuery(userId));
    },
    users: async () => await getUsersQueryHandler.handle(new GetUsersQuery()),
  },
  UserMutation: {
    addUser: async (
      _: any,
      args: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
      },
    ) => {
      const { firstName, lastName, email, password } = args;
      return await createUserCommandHandler.handle(
        new CreateUserCommand(firstName, lastName, email, password),
      );
    },
  },
};
