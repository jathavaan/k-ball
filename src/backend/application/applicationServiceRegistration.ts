import { Container } from "inversify";
import { GetClubsQueryHandler } from "./features/club/query";
import {
  ClubRepositoryServiceBase,
  CountryRepositoryServiceBase,
  PlayerRatingRepositoryServiceBase,
  PlayerRatingServiceBase,
  PlayerRepositoryServiceBase,
  PlayerStatisticsRepositoryServiceBase,
  PositionRepositoryServiceBase,
  ThreadRepositoryServiceBase,
  UserRepositoryServiceBase,
} from "./contracts";
import { GetCountriesQueryHandler } from "./features/country/query";
import { GetPositionsQueryHandler } from "./features/position/query";
import {
  GetAveragePlayerRatingQueryHandler,
  GetPlayerByIdQueryHandler,
  GetPlayerRatingGivenByUserQueryHandler,
  GetPlayersQueryHandler,
  GetPlayerStatisticsQueryHandler,
} from "./features/player/query";
import {
  DeletePlayerRatingCommandHandler,
  UpsertPlayerRatingCommandHandler,
} from "./features/player/command";
import { CreateUserCommandHandler } from "./features/user/command";
import {
  CheckUserCredentialsQueryHandler,
  GetGivenPlayerRatingsQueryHandler,
  GetUserByIdQueryHandler,
  GetUsersQueryHandler,
} from "./features/user/query";
import {
  CreateThreadCommandHandler,
  CreateThreadCommentCommandHandler,
  DeleteThreadCommandHandler,
  DeleteThreadCommentCommandHandler,
  EditThreadCommandHandler,
  EditThreadCommentCommandHandler,
} from "./features/thread/command";
import { GetPlayerThreadsQueryHandler } from "./features/thread/query";
import { GetThreadCommentsQueryHandler } from "./features/thread/query/get-thread-comments-query/getThreadCommentsQueryHandler";

export const applicationServiceRegistration = (container: Container) => {
  container
    .bind<GetClubsQueryHandler>(GetClubsQueryHandler)
    .toDynamicValue((context) => {
      const clubRepositoryService =
        context.container.get<ClubRepositoryServiceBase>(
          "ClubRepositoryServiceBase",
        );

      return new GetClubsQueryHandler(clubRepositoryService);
    });

  container
    .bind<GetCountriesQueryHandler>(GetCountriesQueryHandler)
    .toDynamicValue((context) => {
      const countryRepositoryService =
        context.container.get<CountryRepositoryServiceBase>(
          "CountryRepositoryServiceBase",
        );

      return new GetCountriesQueryHandler(countryRepositoryService);
    });

  container
    .bind<GetPositionsQueryHandler>(GetPositionsQueryHandler)
    .toDynamicValue((context) => {
      const positionRepositoryService =
        context.container.get<PositionRepositoryServiceBase>(
          "PositionRepositoryServiceBase",
        );

      return new GetPositionsQueryHandler(positionRepositoryService);
    });

  container
    .bind<GetPlayersQueryHandler>(GetPlayersQueryHandler)
    .toDynamicValue((context) => {
      const playerRepositoryService =
        context.container.get<PlayerRepositoryServiceBase>(
          "PlayerRepositoryServiceBase",
        );

      const playerRatingService =
        context.container.get<PlayerRatingServiceBase>(
          "PlayerRatingServiceBase",
        );

      return new GetPlayersQueryHandler(
        playerRepositoryService,
        playerRatingService,
      );
    });

  container
    .bind<GetPlayerStatisticsQueryHandler>(GetPlayerStatisticsQueryHandler)
    .toDynamicValue(() => {
      const playerStatisticsRepositoryService =
        container.get<PlayerStatisticsRepositoryServiceBase>(
          "PlayerStatisticsRepositoryServiceBase",
        );

      return new GetPlayerStatisticsQueryHandler(
        playerStatisticsRepositoryService,
      );
    });

  container
    .bind<DeletePlayerRatingCommandHandler>(DeletePlayerRatingCommandHandler)
    .toDynamicValue((context) => {
      const playerRatingRepositoryService =
        context.container.get<PlayerRatingRepositoryServiceBase>(
          "PlayerRatingRepositoryServiceBase",
        );

      return new DeletePlayerRatingCommandHandler(
        playerRatingRepositoryService,
      );
    });

  container
    .bind<UpsertPlayerRatingCommandHandler>(UpsertPlayerRatingCommandHandler)
    .toDynamicValue((context) => {
      const playerRatingRepositoryService =
        context.container.get<PlayerRatingRepositoryServiceBase>(
          "PlayerRatingRepositoryServiceBase",
        );

      return new UpsertPlayerRatingCommandHandler(
        playerRatingRepositoryService,
      );
    });

  container
    .bind<GetAveragePlayerRatingQueryHandler>(
      GetAveragePlayerRatingQueryHandler,
    )
    .toDynamicValue((context) => {
      const playerRatingRepositoryService =
        context.container.get<PlayerRatingRepositoryServiceBase>(
          "PlayerRatingRepositoryServiceBase",
        );

      return new GetAveragePlayerRatingQueryHandler(
        playerRatingRepositoryService,
      );
    });

  container
    .bind<GetPlayerByIdQueryHandler>(GetPlayerByIdQueryHandler)
    .toDynamicValue((context) => {
      const playerRepositoryService =
        context.container.get<PlayerRepositoryServiceBase>(
          "PlayerRepositoryServiceBase",
        );

      return new GetPlayerByIdQueryHandler(playerRepositoryService);
    });

  container
    .bind<GetPlayerRatingGivenByUserQueryHandler>(
      GetPlayerRatingGivenByUserQueryHandler,
    )
    .toDynamicValue((context) => {
      const playerRatingRepositoryService =
        context.container.get<PlayerRatingRepositoryServiceBase>(
          "PlayerRatingRepositoryServiceBase",
        );

      return new GetPlayerRatingGivenByUserQueryHandler(
        playerRatingRepositoryService,
      );
    });

  container
    .bind<CreateUserCommandHandler>(CreateUserCommandHandler)
    .toDynamicValue((context) => {
      const userRepositoryService =
        context.container.get<UserRepositoryServiceBase>(
          "UserRepositoryServiceBase",
        );

      return new CreateUserCommandHandler(userRepositoryService);
    });

  container
    .bind<CheckUserCredentialsQueryHandler>(CheckUserCredentialsQueryHandler)
    .toDynamicValue((context) => {
      const userRepositoryService =
        context.container.get<UserRepositoryServiceBase>(
          "UserRepositoryServiceBase",
        );

      return new CheckUserCredentialsQueryHandler(userRepositoryService);
    });

  container
    .bind<GetGivenPlayerRatingsQueryHandler>(GetGivenPlayerRatingsQueryHandler)
    .toDynamicValue((context) => {
      const playerRatingRepositoryService =
        context.container.get<PlayerRatingRepositoryServiceBase>(
          "PlayerRatingRepositoryServiceBase",
        );

      return new GetGivenPlayerRatingsQueryHandler(
        playerRatingRepositoryService,
      );
    });

  container
    .bind<GetUserByIdQueryHandler>(GetUserByIdQueryHandler)
    .toDynamicValue((context) => {
      const userRepositoryService =
        context.container.get<UserRepositoryServiceBase>(
          "UserRepositoryServiceBase",
        );

      return new GetUserByIdQueryHandler(userRepositoryService);
    });

  container
    .bind<GetUsersQueryHandler>(GetUsersQueryHandler)
    .toDynamicValue((context) => {
      const userRepositoryService =
        context.container.get<UserRepositoryServiceBase>(
          "UserRepositoryServiceBase",
        );

      return new GetUsersQueryHandler(userRepositoryService);
    });

  container
    .bind<CreateThreadCommandHandler>(CreateThreadCommandHandler)
    .toDynamicValue((context) => {
      const threadRepositoryService =
        context.container.get<ThreadRepositoryServiceBase>(
          "ThreadRepositoryServiceBase",
        );

      return new CreateThreadCommandHandler(threadRepositoryService);
    });

  container
    .bind<CreateThreadCommentCommandHandler>(CreateThreadCommentCommandHandler)
    .toDynamicValue((context) => {
      const threadRepositoryService =
        context.container.get<ThreadRepositoryServiceBase>(
          "ThreadRepositoryServiceBase",
        );

      return new CreateThreadCommentCommandHandler(threadRepositoryService);
    });

  container
    .bind<DeleteThreadCommandHandler>(DeleteThreadCommandHandler)
    .toDynamicValue((context) => {
      const threadRepositoryService =
        context.container.get<ThreadRepositoryServiceBase>(
          "ThreadRepositoryServiceBase",
        );

      return new DeleteThreadCommandHandler(threadRepositoryService);
    });

  container
    .bind<DeleteThreadCommentCommandHandler>(DeleteThreadCommentCommandHandler)
    .toDynamicValue((context) => {
      const threadRepositoryService =
        context.container.get<ThreadRepositoryServiceBase>(
          "ThreadRepositoryServiceBase",
        );

      return new DeleteThreadCommentCommandHandler(threadRepositoryService);
    });

  container
    .bind<EditThreadCommandHandler>(EditThreadCommandHandler)
    .toDynamicValue((context) => {
      const threadRepositoryService =
        context.container.get<ThreadRepositoryServiceBase>(
          "ThreadRepositoryServiceBase",
        );

      return new EditThreadCommandHandler(threadRepositoryService);
    });

  container
    .bind<EditThreadCommentCommandHandler>(EditThreadCommentCommandHandler)
    .toDynamicValue((context) => {
      const threadRepositoryService =
        context.container.get<ThreadRepositoryServiceBase>(
          "ThreadRepositoryServiceBase",
        );

      return new EditThreadCommentCommandHandler(threadRepositoryService);
    });

  container
    .bind<GetPlayerThreadsQueryHandler>(GetPlayerThreadsQueryHandler)
    .toDynamicValue((context) => {
      const threadRepositoryService =
        context.container.get<ThreadRepositoryServiceBase>(
          "ThreadRepositoryServiceBase",
        );

      return new GetPlayerThreadsQueryHandler(threadRepositoryService);
    });

  container
    .bind<GetThreadCommentsQueryHandler>(GetThreadCommentsQueryHandler)
    .toDynamicValue((context) => {
      const threadRepositoryService =
        context.container.get<ThreadRepositoryServiceBase>(
          "ThreadRepositoryServiceBase",
        );

      return new GetThreadCommentsQueryHandler(threadRepositoryService);
    });
};
