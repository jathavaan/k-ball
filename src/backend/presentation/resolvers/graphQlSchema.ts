import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql/type";
import { UserType } from "./users/user.typeDefinitions";
import { userResolver } from "./users/user.resolver";

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
