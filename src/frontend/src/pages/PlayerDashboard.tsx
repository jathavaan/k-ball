import { PlayerCardGrid } from "../features/player-card";
import Searchbar from "../features/searchbar/Searchbar.tsx";

export const PlayerDashboard = () => {
  return (
    <div>
      <Searchbar />
      <PlayerCardGrid />
    </div>
  );
};
