import { GraphQLInt, GraphQLObjectType } from "graphql";

export const PlayerStatsType = new GraphQLObjectType({
  name: "PlayerStats",
  fields: {
    playerSeasonId: { type: GraphQLInt },
    goals: { type: GraphQLInt },
    assists: { type: GraphQLInt },
    appearances: { type: GraphQLInt },
    yellowCards: { type: GraphQLInt },
    redCards: { type: GraphQLInt },
  },
});
