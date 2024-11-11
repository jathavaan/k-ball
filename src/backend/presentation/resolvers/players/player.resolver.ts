import {
  GetPlayerByIdQuery,
  GetPlayerByIdQueryHandler,
  GetPlayersQuery,
  GetPlayersQueryHandler,
} from "../../../application/features/player/query";
import {
  UpsertPlayerRatingCommand,
  UpsertPlayerRatingCommandHandler,
} from "../../../application/features/player/command";

const getPlayersQueryHandler = new GetPlayersQueryHandler();
const getPlayerByIdQueryHandler = new GetPlayerByIdQueryHandler();
const upsertPlayerRatingCommandHandler = new UpsertPlayerRatingCommandHandler();

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
  },
  PlayerMutation: {
    upsertPlayerRating: async (
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
  },
};
