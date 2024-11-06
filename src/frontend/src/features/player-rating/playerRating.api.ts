// playerRating.api.ts

// Mock API-funksjon som henter alle ratings for en spesifikk spiller
export const fetchOverallRating = async (playerId: string) => {
  const ratings = [
    { attack: 4, defence: 3, passes: 5, intelligence: 4 },
    { attack: 3, defence: 4, passes: 3, intelligence: 5 },
    { attack: 5, defence: 5, passes: 4, intelligence: 4 },
  ];
  return ratings;
};

// Mock API-funksjon som henter brukerens rating for en spesifikk spiller
export const fetchUserRating = async (playerId: string, userId: string) => {
  // Simulert brukerens rating (null hvis brukeren ikke har vurdert spilleren)
  return { attack: 4, defence: 3, passes: 5, intelligence: 4 };
};

// Mock API-funksjon for å lagre brukerens rating for en spesifikk spiller
export const saveUserRating = async (
  playerId: string,
  userId: string,
  userRating: any,
) => {
  console.log(
    `Saving user rating for player ${playerId}, user ${userId}:`,
    userRating,
  );
  return userRating;
};
