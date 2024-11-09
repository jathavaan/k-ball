import { usePlayerCardGrid } from "./playerCardGrid.hooks.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../store.ts";
import Grid from "@mui/material/Grid2";
import { Button, ErrorAlert, LinearProgressBar } from "../ui";
import { PlayerCard } from "./PlayerCard.tsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

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
  const noResultsOnFirstPage =
    currentPage === 1 && !isLoading && playerCards.length === 0;

  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 200) {
      // Show button after scrolling 200px
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };
  const handleScrollToTop = () => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <InfiniteScroll
      dataLength={playerCards.length}
      next={loadMorePlayers}
      hasMore={currentPage < totalPages}
      loader={
        <Grid size={{ xs: 12 }}>
          <LinearProgressBar
            sx={{
              marginTop: "1rem",
            }}
          />
        </Grid>
      }
      scrollThreshold={0.8}
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
                currentClub={playerCard.club}
                imageUrl={playerCard.imageUrl}
              />
            </Grid>
          ))
        )}
        {showScrollToTop ? (
          <Grid
            size={{ xs: 12 }}
            sx={{
              position: "fixed",
              bottom: 16,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <Button
              text="To the top"
              sx={{
                borderRadius: "100rem",
              }}
              onClick={() => handleScrollToTop()}
            />
          </Grid>
        ) : null}
      </Grid>
    </InfiniteScroll>
  );
};
