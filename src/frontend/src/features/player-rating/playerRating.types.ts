export interface Rating {
  attack: number;
  defence: number;
  passing: number;
  intelligence: number;
  average: number | null;
}

export interface SaveRatingResponse {
  isUpsertSuccessful: boolean;
}

export interface DeleteRatingResponse {
  isDeleteSuccessful: boolean;
}

export interface PlayerRatingState {
  attack: number | null;
  defence: number | null;
  passing: number | null;
  intelligence: number | null;
  average: number | null;
  overallAttack: number | null;
  overallDefence: number | null;
  overallPassing: number | null;
  overallIntelligence: number | null;
  overallAverage: number | null;
  isEditingPlayerRating: boolean;
  isPlayerRatingInDb: boolean;
}

export interface PlayerRatingProps {
  playerId: number;
}
