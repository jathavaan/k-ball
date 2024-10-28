import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql/type";

export const ClubType = new GraphQLObjectType({
  name: "Club",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    logoUrl: { type: GraphQLString },
  },
});
