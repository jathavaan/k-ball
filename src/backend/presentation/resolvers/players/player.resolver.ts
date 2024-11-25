import {
  GetAveragePlayerRatingQuery,
  GetAveragePlayerRatingQueryHandler,
  GetPlayerByIdQuery,
  GetPlayerByIdQueryHandler,
  GetPlayerRatingGivenByUserQuery,
  GetPlayerRatingGivenByUserQueryHandler,
  GetPlayersQuery,
  GetPlayersQueryHandler,
} from "../../../application/features/player/query";
import {
  DeletePlayerRatingCommand,
  DeletePlayerRatingCommandHandler,
  UpsertPlayerRatingCommand,
  UpsertPlayerRatingCommandHandler,
} from "../../../application/features/player/command";

const getPlayersQueryHandler = new GetPlayersQueryHandler();
const getPlayerByIdQueryHandler = new GetPlayerByIdQueryHandler();
const getPlayerRatingGivenByUserQueryHandler =
  new GetPlayerRatingGivenByUserQueryHandler();
const getAveragePlayerRatingQueryHandler =
  new GetAveragePlayerRatingQueryHandler();
const upsertPlayerRatingCommandHandler = new UpsertPlayerRatingCommandHandler();
const deletePlayerRatingCommandHandler = new DeletePlayerRatingCommandHandler();

export const playerResolver = {
  PlayerQuery: {
    players: async (
      _: any,
      args: {
        id?: number;
        page?: number;
        limit?: number;
        search?: string;
        clubIds?: number[];
        countryIds?: number[];
        positionIds?: number[];
        sortBy?: string;
        sortOrder?: string;
      },
    ) => {
      const {
        id,
        page = 1,
        limit = 12,
        search,
        clubIds,
        countryIds,
        positionIds,
        sortBy,
        sortOrder,
      } = args;
      const offset = (page - 1) * limit;
      const options = {
        limit,
        offset,
        filters: {
          search,
          clubIds,
          countryIds,
          positionIds,
          sortBy,
          sortOrder,
        },
      };
      return await getPlayersQueryHandler.handle(new GetPlayersQuery(options));
    },
    player: async (_: any, args: { id: number }) => {
      const { id } = args;
      const playerData = await getPlayerByIdQueryHandler.handle(
        new GetPlayerByIdQuery(id),
      );
      return playerData[0];
    },
    playerRating: async (
      _: any,
      args: { playerId: number; userId?: number },
    ) => {
      const { playerId, userId } = args;
      if (userId) {
        return await getPlayerRatingGivenByUserQueryHandler.handle(
          new GetPlayerRatingGivenByUserQuery(userId, playerId),
        );
      } else {
        return await getAveragePlayerRatingQueryHandler.handle(
          new GetAveragePlayerRatingQuery(playerId),
        );
      }
    },
  },
  PlayerMutation: {
    playerRating: async (
      _: any,
      args: {
        playerId: number;
        userId: number;
        attack: number;
        defence: number;
        passing: number;
        intelligence: number;
      },
    ) => {
      const { playerId, userId, attack, defence, passing, intelligence } = args;
      const isUpsertSuccessful = await upsertPlayerRatingCommandHandler.handle(
        new UpsertPlayerRatingCommand(
          playerId,
          userId,
          attack,
          defence,
          passing,
          intelligence,
        ),
      );
      return { isUpsertSuccessful };
    },
    deletePlayerRating: async (
      _: any,
      args: { playerId: number; userId: number },
    ) => {
      const { playerId, userId } = args;
      const isDeleteSuccessful = await deletePlayerRatingCommandHandler.handle(
        new DeletePlayerRatingCommand(playerId, userId),
      );

      return { isDeleteSuccessful };
    },
  },
};
