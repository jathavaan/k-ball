import { ThreadsResponse } from "@features/threads/threads.types.ts";
import { apiClient } from "@shared/api.client.ts";
import { gql } from "@apollo/client";

export const getThreads = async (
  playerId: number,
): Promise<ThreadsResponse[]> => {
  const GET_THREADS = gql`
    query PlayerThreads($playerId: Int!) {
      playerThreads(playerId: $playerId) {
        id
        userId
        email
        title
        content
        timestamp
        commentsCount
      }
    }
  `;

  const response = await apiClient.query({
    query: GET_THREADS,
    variables: { playerId },
    fetchPolicy: "no-cache",
  });

  return response.data.playerThreads;
};

export const postThread = async (
  userId: number,
  playerId: number,
  title: string,
  content: string,
): Promise<boolean> => {
  const POST_THREAD = gql`
    mutation PostThread(
      $userId: Int!
      $playerId: Int!
      $title: String!
      $content: String!
    ) {
      postThread(
        userId: $userId
        playerId: $playerId
        title: $title
        content: $content
      ) {
        isPostSuccessful
      }
    }
  `;

  const response = await apiClient.mutate({
    mutation: POST_THREAD,
    variables: {
      userId,
      playerId,
      title,
      content,
    },
    fetchPolicy: "no-cache",
  });

  return response.data.postThread.isPostSuccessful;
};
