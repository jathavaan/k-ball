import {
  GraphQLBoolean,
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
    userId: { type: GraphQLInt },
    email: { type: GraphQLString },
    content: { type: GraphQLString },
    commentsCount: { type: GraphQLInt },
    timestamp: { type: GraphQLDateTime },
  },
});

export const ThreadType = new GraphQLObjectType({
  name: "Thread",
  fields: {
    id: { type: GraphQLInt },
    userId: { type: GraphQLInt },
    email: { type: GraphQLString },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    commentsCount: { type: GraphQLInt },
    timestamp: { type: GraphQLDateTime },
  },
});

export const PostThreadType = new GraphQLObjectType({
  name: "PostThread",
  fields: {
    isPostSuccessful: { type: GraphQLBoolean },
  },
});

export const DeleteThreadType = new GraphQLObjectType({
  name: "DeleteThread",
  fields: {
    isDeleteSuccessful: { type: GraphQLBoolean },
  },
});

export const EditThreadType = new GraphQLObjectType({
  name: "EditThread",
  fields: {
    isEditSuccessful: { type: GraphQLBoolean },
  },
});
