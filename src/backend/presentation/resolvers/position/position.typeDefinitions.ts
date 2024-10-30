import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql/type";

export const PositionType = new GraphQLObjectType({
  name: "Position",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  },
});
