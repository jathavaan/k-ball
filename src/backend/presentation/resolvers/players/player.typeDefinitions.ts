import { GraphQLObjectType, GraphQLString } from "graphql";

export const playerDashboardType = new GraphQLObjectType({
    name: "PlayerDashboard",
    fields: {
        id: { type: GraphQLString },
        fullName: { type: GraphQLString },
        currentClub: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
        position: { type: GraphQLString },
        nationality: { type: GraphQLString },
        age: { type: GraphQLString },
    }
});

