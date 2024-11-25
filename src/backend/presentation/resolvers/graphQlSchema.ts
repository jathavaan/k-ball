import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql/type";
import {
  DetailedPlayerRatingType,
  UserAuthType,
  UserRegisterType,
  UserType,
} from "./user/user.typeDefinitions";
import { userResolver } from "./user/user.resolver";
import { ClubType } from "./club/club.typeDefinitions";
import { clubResolver } from "./club/club.resolver";
import { countryResolver } from "./country/country.resolver";
import { CountryType } from "./country/country.typeDefinitions";
import { PositionType } from "./position/position.typeDefinitions";
import { positionResolver } from "./position/position.resolver";
import {
  DeletePlayerRatingType,
  PlayerRatingType,
  PlayerType,
  UpsertPlayerRatingType,
} from "./players/player.typeDefinitions";
import { playerResolver } from "./players/player.resolver";
import { PlayerStatsType } from "./player-stats/playerStats.typeDefinitions";
import { playerStatsResolver } from "./player-stats/playerStats.resolver";

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: {
      type: UserType,
      args: {
        userId: { type: GraphQLInt },
      },
      resolve: userResolver.UserQuery.user,
    },
    users: {
      type: new GraphQLList(UserType),
      resolve: userResolver.UserQuery.users,
    },
    auth: {
      type: UserAuthType,
      resolve: userResolver.UserQuery.auth,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
    },
    clubs: {
      type: new GraphQLList(ClubType),
      resolve: clubResolver.ClubQuery.clubs,
    },
    countries: {
      type: new GraphQLList(CountryType),
      resolve: countryResolver.CountryQuery.countries,
    },
    positions: {
      type: new GraphQLList(PositionType),
      resolve: positionResolver.PositionQuery.positions,
    },
    players: {
      type: new GraphQLObjectType({
        name: "Players",
        fields: {
          playerCards: { type: new GraphQLList(PlayerType) },
          totalPlayers: { type: GraphQLInt },
          totalPages: { type: GraphQLInt },
          currentPage: { type: GraphQLInt },
        },
      }),
      args: {
        page: { type: GraphQLInt },
        limit: { type: GraphQLInt },
        search: { type: GraphQLString },
        clubIds: { type: new GraphQLList(GraphQLInt) },
        countryIds: { type: new GraphQLList(GraphQLInt) },
        positionIds: { type: new GraphQLList(GraphQLInt) },
        sortBy: { type: GraphQLString },
        sortOrder: { type: GraphQLString },
      },
      resolve: playerResolver.PlayerQuery.players,
    },
    player: {
      type: PlayerType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: playerResolver.PlayerQuery.player,
    },
    playerStats: {
      type: new GraphQLList(PlayerStatsType),
      args: {
        playerId: { type: GraphQLInt },
      },
      resolve: playerStatsResolver.PlayerStatsQuery.playerStats,
    },
    playerRating: {
      type: PlayerRatingType,
      args: {
        playerId: { type: GraphQLInt },
        userId: { type: GraphQLInt, defaultValue: null },
      },
      resolve: playerResolver.PlayerQuery.playerRating,
    },
    detailedPlayerRating: {
      type: new GraphQLList(DetailedPlayerRatingType),
      args: {
        userId: { type: GraphQLInt },
      },
      resolve: userResolver.UserQuery.detailedPlayerRating,
    },
  },
});

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    register: {
      type: UserRegisterType,
      resolve: userResolver.UserMutation.register,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
    },
    playerRating: {
      type: UpsertPlayerRatingType,
      args: {
        playerId: { type: GraphQLInt },
        userId: { type: GraphQLInt },
        attack: { type: GraphQLInt },
        defence: { type: GraphQLInt },
        passing: { type: GraphQLInt },
        intelligence: { type: GraphQLInt },
      },
      resolve: playerResolver.PlayerMutation.playerRating,
    },
    deletePlayerRating: {
      type: DeletePlayerRatingType,
      args: {
        playerId: { type: GraphQLInt },
        userId: { type: GraphQLInt },
      },
      resolve: playerResolver.PlayerMutation.deletePlayerRating,
    },
  },
});

export const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
