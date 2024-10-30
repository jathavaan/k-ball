export interface Player {
  playerId: number;
  name: string;
  team: string;
  imageUrl: string;
}

export interface ApolloResult<T> {
  data: T;
}
