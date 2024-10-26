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
