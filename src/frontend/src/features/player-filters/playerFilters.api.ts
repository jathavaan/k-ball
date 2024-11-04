import {
  ClubProps,
  CountryProps,
  PositionProps,
} from "./playerFilters.types.ts";
import { apiClient } from "../../shared/api.client.ts";
import { gql } from "@apollo/client";

export const getCountries = async (): Promise<CountryProps[]> => {
  const GET_COUNTRIES = gql`
    query {
      countries {
        id
        name
        flagUrl
      }
    }
  `;
  const response = await apiClient.query({
    query: GET_COUNTRIES,
  });

  return response.data.countries;
};

export const getPositions = async (): Promise<PositionProps[]> => {
  const GET_POSITIONS = gql`
    query {
      positions {
        id
        name
      }
    }
  `;

  const response = await apiClient.query({
    query: GET_POSITIONS,
  });

  return response.data.positions;
};

export const getClubs = async (): Promise<ClubProps[]> => {
  const GET_CLUBS = gql`
    query {
      clubs {
        id
        name
        logoUrl
      }
    }
  `;

  const response = await apiClient.query({
    query: GET_CLUBS,
  });

  return response.data.clubs;
};

const GET_COUNT = gql`
  query GetCount(
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
      totalPlayers
    }
  }
`;

export const getCount = async ({
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
}): Promise<{ totalPlayers: number }> => {
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

  const response = await apiClient.query({
    query: GET_COUNT,
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

  return { totalPlayers: response.data.players.totalPlayers };
};
