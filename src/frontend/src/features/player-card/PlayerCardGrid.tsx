import { usePlayerCardGrid } from "./playerCardGrid.hooks.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../store.ts";
import Grid from "@mui/material/Grid2";
import { ErrorAlert, LinearProgressBar } from "../ui";
import { PlayerCard } from "./PlayerCard.tsx";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  selectSortBy,
  selectSortOrder,
} from "../player-sorting/playerSorting.slice.ts";
import {
  selectCurrentPage,
  selectTotalPages,
  selectPlayerCards,
} from "./playerCardGrid.slice.ts";

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
  const sortBy = useSelector(selectSortBy);
  const sortOrder = useSelector(selectSortOrder);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const { isLoading, isError, loadMorePlayers } = usePlayerCardGrid(
    currentPage,
    24,
    searchQuery,
    selectedClubIds,
    selectedCountryIds,
    selectedPositionIds,
    sortBy,
    sortOrder,
  );
  const playerCards = useSelector(selectPlayerCards);

  const isInitialLoad = currentPage === 1 && isLoading;
  const noResultsOnFirstPage =
    currentPage === 1 && !isLoading && playerCards.length === 0;

  return (
    <InfiniteScroll
      dataLength={playerCards.length}
      next={loadMorePlayers}
      hasMore={currentPage < totalPages}
      loader={<LinearProgressBar />}
      scrollThreshold={0.9}
      hasChildren={true}
    >
      <Grid
        container
        spacing={4}
        sx={{ overflowX: "hidden", overflowY: "hidden" }}
      >
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
        ) : noResultsOnFirstPage ? (
          <Grid size={{ xs: 12 }}>
            <ErrorAlert
              message={
                "No players match your search or filter criteria. Please try different filters."
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
