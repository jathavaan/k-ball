export class GetAveragePlayerRatingQuery {
  playerId: number;

  constructor(playerId: number) {
    this.playerId = playerId;
  }
}
