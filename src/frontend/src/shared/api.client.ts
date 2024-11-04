import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apiClient = new ApolloClient({
  uri: "http://it2810-25.idi.ntnu.no:4000/graphql",
  cache: new InMemoryCache(),
});

//  uri: "http://it2810-25.idi.ntnu.no:4000/graphql",
