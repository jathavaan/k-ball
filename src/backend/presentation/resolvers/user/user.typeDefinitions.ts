import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from "graphql/type";
import { GraphQLFloat } from "graphql";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

export const UserAuthType = new GraphQLObjectType({
  name: "Auth",
  fields: {
    userId: { type: GraphQLInt },
  },
});

export const UserRegisterType = new GraphQLObjectType({
  name: "Register",
  fields: {
    isUserRegistered: { type: GraphQLBoolean },
  },
});

export const DetailedPlayerRatingType = new GraphQLObjectType({
  name: "DetailedPlayerRating",
  fields: {
    playerId: { type: GraphQLInt },
    fullName: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    averageRating: { type: GraphQLFloat },
  },
});
