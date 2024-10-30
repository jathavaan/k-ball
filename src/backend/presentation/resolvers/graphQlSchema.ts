import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql/type";
import { UserType } from "./user/user.typeDefinitions";
import { userResolver } from "./user/user.resolver";
import { ClubType } from "./club/club.typeDefinitions";
import { clubResolver } from "./club/club.resolver";
import { countryResolver } from "./country/country.resolver";
import { CountryType } from "./country/country.typeDefinitions";
import { PositionType } from "./position/position.typeDefinitions";
import { positionResolver } from "./position/position.resolver";
import { PlayerType } from "./players/player.typeDefinitions";
import { playerResolver } from "./players/player.resolver";

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
      type: new GraphQLList(PlayerType),
      args: {
        playerId: { type: GraphQLInt },
      },
      resolve: playerResolver.PlayerQuery.players,
    },
  }
});

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: GraphQLBoolean,
      resolve: userResolver.UserMutation.addUser,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
