import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";

export const PlayerType = new GraphQLObjectType({
    name: "Player",
    fields: {
        id: { type: GraphQLString },
        fullName: { type: GraphQLString },
        currentClub: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
        position: { type: GraphQLString },
        nationality: { type: GraphQLString },
        age: { type: GraphQLInt },
        clubLogo: { type: GraphQLString },
        flagUrl: { type: GraphQLString },
        birthDate: { type: GraphQLString },
        height: { type: GraphQLInt },
        weight: { type: GraphQLInt },
        birthPlace: { type: GraphQLString },
        
    }
});

