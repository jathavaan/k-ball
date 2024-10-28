import { useEffect } from "react";
import { AppDispatch } from "../../store.ts";
import { useDispatch } from "react-redux";
import { setSearch } from "./searchbar.slice.ts";
import { useSearchPlayersQuery } from "./searchbar.query.ts";
import { setPlayerCards } from "../player-card/playerCard.slice.ts";

export const useSearch = () => {
  const dispatch = useDispatch<AppDispatch>();

  const triggerSearch = (query: string) => {
    dispatch(setSearch(query)); // Dispatch search action to update the Redux state
  };

  const searchPlayers = (search: string) => {
    const { data: players } = useSearchPlayersQuery(search);

    useEffect(() => {
      if (players) {
        dispatch(setPlayerCards(players)); // Set player cards if available
      }
    }, [dispatch, players]);
  };

  return { triggerSearch, searchPlayers };
};
