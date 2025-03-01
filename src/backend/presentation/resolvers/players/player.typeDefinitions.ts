import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { GraphQLBoolean } from "graphql/type";

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
    clubLogoUrl: { type: GraphQLString },
    flagUrl: { type: GraphQLString },
    birthDate: { type: GraphQLString },
    height: { type: GraphQLInt },
    weight: { type: GraphQLInt },
    birthPlace: { type: GraphQLString },
    averageRating: { type: GraphQLFloat },
  },
});

export const UpsertPlayerRatingType = new GraphQLObjectType({
  name: "UpsertPlayerRatingType",
  fields: {
    isUpsertSuccessful: { type: GraphQLBoolean },
  },
});

export const DeletePlayerRatingType = new GraphQLObjectType({
  name: "DeletePlayerRatingType",
  fields: {
    isDeleteSuccessful: { type: GraphQLBoolean },
  },
});

export const PlayerRatingType = new GraphQLObjectType({
  name: "PlayerRating",
  fields: {
    attack: { type: GraphQLFloat },
    defence: { type: GraphQLFloat },
    passing: { type: GraphQLFloat },
    intelligence: { type: GraphQLFloat },
    average: { type: GraphQLFloat },
  },
});
