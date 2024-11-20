export interface ProfileMenuState {
  isProfileMenuOpen: boolean;
  isProfileInfoExpanded: boolean;
  isRatingsExpanded: boolean;
}

export interface DetailedPlayerRatingResponse {
  playerId: number;
  fullName: string;
  imageUrl: string;
  averageRating: number;
}
