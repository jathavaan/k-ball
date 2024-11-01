export interface Player {
  playerId: number;
  fullName: string;
  club: string;
  imageUrl: string;
}

export interface ApolloResult<T> {
  data: T;
}
