export class GetPlayerStatsQuery {
  playerId: number;

  constructor(id: number) {
    this.playerId = id;
  }
}
