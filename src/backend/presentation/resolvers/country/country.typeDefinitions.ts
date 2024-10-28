import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql/type";

export let CountryType: GraphQLObjectType<any, any>;
CountryType = new GraphQLObjectType({
  name: "Country",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    flagUrl: { type: GraphQLString },
  },
});
