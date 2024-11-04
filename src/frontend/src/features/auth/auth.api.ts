import { LoginProps, RegisterProps } from "./auth.types.ts";
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
      )
    }
  `;

  try {
    const response = await apiClient.mutate<{ addUser: boolean }>({
      mutation: REGISTER_USER,
      variables: {
        firstName: props.firstName,
        lastName: props.lastName,
        email: props.email,
        password: props.password,
      },
    });

    const result = response.data?.addUser;
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
      loginUser(email: $email, password: $password)
    }
  `;

  try {
    const response = await apiClient.query<number>({
      query: USER_AUTHENTICATION,
      variables: {
        email: props.email,
        password: props.password,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Something went wrong while logging in");
    throw error;
  }
};
