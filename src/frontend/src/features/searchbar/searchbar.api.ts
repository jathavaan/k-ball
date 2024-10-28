import { PlayerCardProps } from '../player-card/playerCard.types.ts';
import { getPlayerCards } from '../player-card/playerCard.api.ts';

// hente søkeresultater basert på query (navn)
export const getSearchResults = async (query: string): Promise<PlayerCardProps[]> => {
  const playerCards = await getPlayerCards(); // Gjenbruker funksjon fra playerCard.api

  
  const filteredPlayers = playerCards.filter((player) =>
    player.name.toLowerCase().includes(query.toLowerCase())
  );

  return filteredPlayers;
};
