export class PlayerRatingInfoVm {
  playerId: number;
  fullName: string;
  imageUrl: string;
  averageRating: number;

  constructor(
    playerId: number,
    fullName: string,
    imageUrl: string,
    averageRating: number,
  ) {
    this.playerId = playerId;
    this.fullName = fullName;
    this.imageUrl = imageUrl;
    this.averageRating = parseFloat(averageRating.toFixed(2));
  }
}
