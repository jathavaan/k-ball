import { useQuery } from '@tanstack/react-query';
import { getSearchResults } from './searchbar.api.ts';
import { PlayerCardProps } from '../player-card/playerCard.types';


export const useSearchPlayersQuery = (query: string) => {
    return useQuery<PlayerCardProps[]>({
        queryKey: ['searchPlayers', query],
        queryFn: () => getSearchResults(query), // Funksjonen som henter data
      });
    };