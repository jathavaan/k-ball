// profileIcon.api.ts
import { gql } from "@apollo/client";
import { apiClient } from "../../../shared/api.client";

export const fetchUserDetails = async (userId: number) => {
  const FETCH_USER_DETAILS = gql`
    query GetUserDetails($userId: Int!) {
      user(id: $userId) {
        firstName
        lastName
        email
      }
    }
  `;

  try {
    const result = await apiClient.query({
      query: FETCH_USER_DETAILS,
      variables: { userId },
    });
    return result.data.user;
  } catch (error) {
    console.error("Failed to fetch user details:", error);
    throw error;
  }
};
