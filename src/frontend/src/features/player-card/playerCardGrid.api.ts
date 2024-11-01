import { PlayerCardProps } from "./playerCard.types";
import { apiClient } from "../../shared/api.client";
import { gql } from "@apollo/client";

const GET_PLAYER_CARDS = gql`
  query GetPlayerCards(
    $page: Int!
    $limit: Int!
    $search: String
    $clubIds: [Int!]
    $countryIds: [Int!]
    $positionIds: [Int!]
    $sortBy: String
    $sortOrder: String
  ) {
    players(
      page: $page
      limit: $limit
      search: $search
      clubIds: $clubIds
      countryIds: $countryIds
      positionIds: $positionIds
      sortBy: $sortBy
      sortOrder: $sortOrder
    ) {
      playerCards {
        playerId: id
        fullName
        club: currentClub
        imageUrl
        position
        nationality
        age
      }
      totalPages
      currentPage
    }
  }
`;

export const getPlayerCards = async ({
  queryKey,
}: {
  queryKey: [
    string,
    number,
    number,
    string,
    number[],
    number[],
    number[],
    string,
    string,
  ];
}): Promise<
  | { playerCards: PlayerCardProps[]; totalPages: number; currentpage: number }
  | undefined
> => {
  const [
    _,
    page,
    limit,
    search,
    clubIds,
    countryIds,
    positionIds,
    sortBy,
    sortOrder,
  ] = queryKey;

  try {
    const response = await apiClient.query({
      query: GET_PLAYER_CARDS,
      variables: {
        page,
        limit,
        search,
        clubIds,
        countryIds,
        positionIds,
        sortBy,
        sortOrder,
      },
    });

    return response.data.players;
  } catch (error) {
    console.error("Error fetching player cards:", error);
    throw error;
  }
};
