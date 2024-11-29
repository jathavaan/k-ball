export class UpsertPlayerRatingCommand {
  playerId: number;
  userId: number;
  attack: number;
  defence: number;
  passing: number;
  intelligence: number;

  constructor(
    playerId: number,
    userId: number,
    attack: number,
    defence: number,
    passing: number,
    intelligence: number,
  ) {
    this.playerId = playerId;
    this.userId = userId;
    this.attack = attack;
    this.defence = defence;
    this.passing = passing;
    this.intelligence = intelligence;
  }
}
