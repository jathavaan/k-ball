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
    $search: String
    $clubIds: [Int!]
    $countryIds: [Int!]
    $positionIds: [Int!]
  ) {
    players(
      search: $search
      clubIds: $clubIds
      countryIds: $countryIds
      positionIds: $positionIds
    ) {
      totalPlayers
    }
  }
`;

export const getCount = async ({
  queryKey,
}: {
  queryKey: [string, string, number[], number[], number[]];
}): Promise<{ totalPlayers: number | undefined }> => {
  // Ignored as it is needed for tanstack query
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, search, clubIds, countryIds, positionIds] = queryKey;

  const response = await apiClient.query({
    query: GET_COUNT,
    variables: {
      search,
      clubIds,
      countryIds,
      positionIds,
    },
  });

  return { totalPlayers: response.data.players.totalPlayers };
};
