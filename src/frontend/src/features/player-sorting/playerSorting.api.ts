import { PlayerCardProps } from "../player-card/playerCard.types.ts";
import { getPlayerCards } from "../player-card/playerCard.api.ts";

// Funksjon for å mocke et API-kall som henter spillerdata og sorterer dem
export const fetchPlayers = async (
  sortBy: string,
  sortOrder: string,
): Promise<PlayerCardProps[]> => {
  const players = await getPlayerCards(); // Hent mockede spillerkort

  // Sorteringslogikk
  const sortedPlayers = players.sort((a, b) => {
    if (sortBy === "name") {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortBy === "age") {
      return sortOrder === "asc" ? a.age - b.age : b.age - a.age;
    }
    return 0;
  });

  return sortedPlayers;
};
