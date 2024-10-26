import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql/type";
import { UserType } from "@presentation/resolvers/user/user.typeDefinitions";
import { userResolver } from "@presentation/resolvers/user/user.resolver";
import { ClubType } from "@presentation/resolvers/club/club.typeDefinitions";
import { clubResolver } from "@presentation/resolvers/club/club.resolver";
import { countryResolver } from "@presentation/resolvers/country/country.resolver";
import { CountryType } from "@presentation/resolvers/country/country.typeDefinitions";
import { PositionType } from "@presentation/resolvers/position/position.typeDefinitions";
import { positionResolver } from "@presentation/resolvers/position/position.resolver";

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
  },
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
