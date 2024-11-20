import {
  CheckUserCredentialsQuery,
  CheckUserCredentialsQueryHandler,
  GetGivenPlayerRatingsQuery,
  GetGivenPlayerRatingsQueryHandler,
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
const getGivenPlayerRatingsQueryHandler =
  new GetGivenPlayerRatingsQueryHandler();
const checkUserCredentialsQueryHandler = new CheckUserCredentialsQueryHandler();

export const userResolver = {
  UserQuery: {
    user: async (_: any, args: { userId: number }) => {
      const { userId } = args;
      return await getUserByIdQueryHandler.handle(new GetUserByIdQuery(userId));
    },
    users: async () => await getUsersQueryHandler.handle(new GetUsersQuery()),
    auth: async (_: any, args: { email: string; password: string }) => {
      const { email, password } = args;
      const userId = await checkUserCredentialsQueryHandler.handle(
        new CheckUserCredentialsQuery(email, password),
      );

      return { userId };
    },
    detailedPlayerRating: async (_: any, args: { userId: number }) => {
      const { userId } = args;
      return await getGivenPlayerRatingsQueryHandler.handle(
        new GetGivenPlayerRatingsQuery(userId),
      );
    },
  },
  UserMutation: {
    register: async (
      _: any,
      args: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
      },
    ) => {
      const { firstName, lastName, email, password } = args;
      const isUserRegistered = await createUserCommandHandler.handle(
        new CreateUserCommand(firstName, lastName, email, password),
      );

      return { isUserRegistered };
    },
  },
};
