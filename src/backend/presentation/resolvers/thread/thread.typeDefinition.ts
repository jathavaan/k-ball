import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql/type";
import { GraphQLDateTime } from "graphql-scalars";

export const ThreadCommentType = new GraphQLObjectType({
  name: "ThreadComment",
  fields: {
    id: { type: GraphQLInt },
    user: { type: GraphQLString },
    content: { type: GraphQLString },
  },
});

export const ThreadType = new GraphQLObjectType({
  name: "Thread",
  fields: {
    id: { type: GraphQLInt },
    user: { type: GraphQLString },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    timestamp: { type: GraphQLDateTime },
    comments: { type: new GraphQLList(ThreadCommentType) },
  },
});
