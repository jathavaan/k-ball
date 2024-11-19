import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apiClient = new ApolloClient({
  uri: "http://it2810-25.idi.ntnu.no:3001/graphql",
  // uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});
