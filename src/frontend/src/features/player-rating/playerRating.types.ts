export interface Rating {
  attack: number;
  defence: number;
  passing: number;
  intelligence: number;
}

// for respons fra `saveUserRating`-mutasjonen
export interface SaveRatingResponse {
  isUpsertSuccessful: boolean;
}
