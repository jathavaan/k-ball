import { PlayerStatistics } from "domain/entities";

export class PlayerStatsVm {
  playerSeasonId: number;
  goals: number;
  assists: number;
  appearances: number;
  yellowCards: number;
  redCards: number;

  constructor(playerStats: PlayerStatistics) {
    this.playerSeasonId = playerStats.playerSeasonId;
    this.goals = playerStats.goals;
    this.assists = playerStats.assists;
    this.appearances = playerStats.appearances;
    this.yellowCards = playerStats.yellowCards;
    this.redCards = playerStats.redCards;
  }
}
