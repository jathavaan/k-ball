export class DeletePlayerRatingCommand {
  userId: number;
  playerId: number;

  constructor(userId: number, playerId: number) {
    this.userId = userId;
    this.playerId = playerId;
  }
}
