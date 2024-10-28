/* import { useQuery } from '@tanstack/react-query';
import { fetchPlayers } from './playerSorting.api.ts';
import { PlayerCardProps } from '../player-card/playerCard.types.ts'; // Importer typene


export const useSortedPlayersQuery = (sortBy: string, sortOrder: string) => {
    return useQuery<PlayerCardProps[]>(
      ['players', sortBy, sortOrder], // Query keys
      () => fetchPlayers(sortBy, sortOrder), // Funksjon som henter data
      { 
        keepPreviousData: true, 
      }
    );
  }; */
