export class GetPlayerStatisticsQuery {
  playerId: number;

  constructor(id: number) {
    this.playerId = id;
  }
}
