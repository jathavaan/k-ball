export interface Rating {
  attack: number;
  defence: number;
  passing: number;
  intelligence: number;
}

export interface SaveRatingResponse {
  isUpsertSuccessful: boolean;
}

export interface PlayerRatingState {
  ratingsByPlayer: {
    [playerId: number]: {
      overall: Rating;
      userRating?: Rating; // Brukerens rating for spilleren, hvis den finnes
    };
  };
}

export interface PlayerRatingProps {
  playerId: number;
}
