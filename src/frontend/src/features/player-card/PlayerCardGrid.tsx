import { usePlayerCardGrid } from "./playerCardGrid.hooks.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../store.ts";
import Grid from "@mui/material/Grid2";
import { ErrorAlert, LinearProgressBar } from "../ui";
import { PlayerCard } from "./PlayerCard.tsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { current } from "@reduxjs/toolkit";

export const PlayerCardGrid = () => {
  const searchQuery = useSelector(
    (state: RootState) => state.searchbarReducer.search,
  );
  let { selectedClubIds, selectedCountryIds, selectedPositionIds } =
    useSelector((state: RootState) => state.playerFiltersReducer);

  [selectedClubIds, selectedCountryIds, selectedPositionIds] = [
    selectedClubIds,
    selectedCountryIds,
    selectedPositionIds,
  ].map((ids) => (ids.includes(-1) ? [] : ids));
  const sortBy = useSelector(
    (state: RootState) => state.playerSortingReducer.sortBy,
  );
  const sortOrder = useSelector(
    (state: RootState) => state.playerSortingReducer.sortOrder,
  );
  const currentPage = useSelector(
    (state: RootState) => state.playerCardGridReducer.currentPage,
  );
  const totalPages = useSelector(
    (state: RootState) => state.playerCardGridReducer.totalPages,
  );
  console.log("Current Page: ", currentPage);
  const { isLoading, isError, loadMorePlayers } = usePlayerCardGrid(
    currentPage,
    12,
    searchQuery,
    selectedClubIds,
    selectedCountryIds,
    selectedPositionIds,
    sortBy,
    sortOrder,
  );
  const playerCards = useSelector(
    (state: RootState) => state.playerCardGridReducer.playerCards,
  );

  const isInitialLoad = currentPage === 1 && isLoading;
  return (
    <InfiniteScroll
      dataLength={playerCards.length}
      next={loadMorePlayers}
      hasMore={currentPage < totalPages}
      loader={<LinearProgressBar />}
      scrollThreshold={1.0}
      hasChildren={true}
    >
      <Grid container spacing={4}>
        {isInitialLoad ? (
          <Grid size={{ xs: 12 }}>
            <LinearProgressBar />
          </Grid>
        ) : isError ? (
          <Grid size={{ xs: 12 }}>
            <ErrorAlert
              message={
                "Oops! Something went wrong while fetching the player data"
              }
            />
          </Grid>
        ) : (
          playerCards.map((playerCard) => (
            <Grid key={playerCard.playerId} size={{ xs: 12, md: 6, lg: 4 }}>
              <PlayerCard
                key={playerCard.playerId}
                playerId={playerCard.playerId}
                position={playerCard.position}
                nationality={playerCard.nationality}
                age={playerCard.age}
                fullName={playerCard.fullName}
                club={playerCard.club}
                imageUrl={playerCard.imageUrl}
              />
            </Grid>
          ))
        )}
      </Grid>
    </InfiniteScroll>
  );
};
