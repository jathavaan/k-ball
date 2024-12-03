import { apiClient } from "@shared/api.client.ts";
import { gql } from "@apollo/client";
import { ThreadCommentResponse } from "@features/thread/thread.types.ts";

export const getThreadComments = async (
  threadId: number,
): Promise<ThreadCommentResponse[]> => {
  const GET_COMMENTS = gql`
    query PlayerThreadComments($threadId: Int!) {
      playerThreadComments(threadId: $threadId) {
        id
        userId
        email
        content
        timestamp
      }
    }
  `;

  const response = await apiClient.query({
    query: GET_COMMENTS,
    variables: {
      threadId,
    },
    fetchPolicy: "no-cache",
  });

  return response.data.playerThreadComments;
};

export const postThreadComment = async (
  userId: number,
  threadId: number,
  content: string,
): Promise<boolean> => {
  const POST_COMMENT = gql`
    mutation PostThreadComment(
      $userId: Int!
      $threadId: Int!
      $content: String!
    ) {
      postThreadComment(
        userId: $userId
        threadId: $threadId
        content: $content
      ) {
        isPostSuccessful
      }
    }
  `;

  const response = await apiClient.mutate({
    mutation: POST_COMMENT,
    variables: {
      userId,
      threadId,
      content,
    },
    fetchPolicy: "no-cache",
  });

  return response.data.postThreadComment.isPostSuccessful;
};

export const deleteThread = async (threadId: number): Promise<boolean> => {
  const DELETE_THREAD = gql`
    mutation DeleteThread($threadId: Int!) {
      deleteThread(threadId: $threadId) {
        isDeleteSuccessful
      }
    }
  `;

  const response = await apiClient.mutate({
    mutation: DELETE_THREAD,
    variables: {
      threadId,
    },
    fetchPolicy: "no-cache",
  });

  return response.data.deleteThread.isDeleteSuccessful;
};

export const deleteThreadComment = async (
  threadCommentId: number,
): Promise<boolean> => {
  const DELETE_THREAD_COMMENT = gql`
    mutation DeleteThreadComment($threadCommentId: Int!) {
      deleteThreadComment(threadCommentId: $threadCommentId) {
        isDeleteSuccessful
      }
    }
  `;

  const response = await apiClient.mutate({
    mutation: DELETE_THREAD_COMMENT,
    variables: {
      threadCommentId,
    },
    fetchPolicy: "no-cache",
  });

  return response.data.deleteThreadComment.isDeleteSuccessful;
};
