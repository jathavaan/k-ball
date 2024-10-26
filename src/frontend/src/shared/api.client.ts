import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apiClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
