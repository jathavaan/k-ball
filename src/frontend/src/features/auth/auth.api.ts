import {
  LoginProps,
  LoginResponse,
  RegisterProps,
  RegisterResponse,
} from "./auth.types.ts";
import { gql } from "@apollo/client";
import { apiClient } from "../../shared/api.client.ts";

export const registerUser = async (props: RegisterProps): Promise<boolean> => {
  const REGISTER_USER = gql`
    mutation AddUser(
      $firstName: String!
      $lastName: String!
      $email: String!
      $password: String!
    ) {
      register(
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
      ) {
        isUserRegistered
      }
    }
  `;

  try {
    const response = await apiClient.mutate<RegisterResponse>({
      mutation: REGISTER_USER,
      variables: {
        firstName: props.firstName,
        lastName: props.lastName,
        email: props.email,
        password: props.password,
      },
    });

    const result = response.data?.register.isUserRegistered;
    if (result === undefined) {
      throw new Error("Failed to create a user. Response was undefined");
    }

    return result;
  } catch (error) {
    console.error("Something went wrong while creating a user:", error);
    throw error;
  }
};

export const authenticateUser = async (
  props: LoginProps,
): Promise<number | null> => {
  const USER_AUTHENTICATION = gql`
    query auth($email: String!, $password: String!) {
      auth(email: $email, password: $password) {
        userId
      }
    }
  `;

  try {
    const response = await apiClient.query<LoginResponse>({
      query: USER_AUTHENTICATION,
      variables: {
        email: props.email,
        password: props.password,
      },
    });

    return Number(response.data.auth.userId);
  } catch (error) {
    console.error("Something went wrong while logging in");
    console.error(error);
    throw error;
  }
};

// Continuing from your existing auth.api.ts file...

import { UserInfoResponse } from "./auth.types.ts";

export const fetchUserInfo = async (
  userId: number,
): Promise<UserInfoResponse["user"]> => {
  const GET_USER_INFO = gql`
    query GetUser($userId: Int!) {
      user(userId: $userId) {
        firstName
        lastName
        email
      }
    }
  `;

  try {
    const response = await apiClient.query<UserInfoResponse>({
      query: GET_USER_INFO,
      variables: { userId },
    });

    if (!response.data.user) {
      throw new Error("User not found");
    }

    return response.data.user;
  } catch (error) {
    console.error(
      "Something went wrong while fetching user information:",
      error,
    );
    throw error;
  }
};
