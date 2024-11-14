import {
  usePlayerCardGrid,
  useScrollToTopButton,
} from "./playerCardGrid.hooks.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../store.ts";
import Grid from "@mui/material/Grid2";
import { Button, ErrorAlert, LinearProgressBar } from "../ui";
import { PlayerCard } from "./PlayerCard.tsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { selectSortBy, selectSortOrder } from "../player-sorting";
import {
  selectCurrentPage,
  selectPlayerCards,
  selectTotalPages,
} from "./playerCardGrid.slice.ts";
import { Slide } from "@mui/material";
import { selectSearchQuery } from "../searchbar";

export const PlayerCardGrid = () => {
  const searchQuery = useSelector(selectSearchQuery);
  const sortBy = useSelector(selectSortBy);
  const sortOrder = useSelector(selectSortOrder);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const playerCards = useSelector(selectPlayerCards);

  let { selectedClubIds, selectedCountryIds, selectedPositionIds } =
    useSelector((state: RootState) => state.playerFiltersReducer);

  [selectedClubIds, selectedCountryIds, selectedPositionIds] = [
    selectedClubIds,
    selectedCountryIds,
    selectedPositionIds,
  ].map((ids) => (ids.includes(-1) ? [] : ids));

  const { showScrollToTopButton, handleScrollToTop } = useScrollToTopButton();
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

  const isInitialLoad = currentPage === 1 && isLoading;
  const noResultsOnFirstPage =
    currentPage === 1 && !isLoading && playerCards.length === 0;

  return (
    <InfiniteScroll
      dataLength={playerCards.length}
      next={loadMorePlayers}
      hasMore={currentPage < totalPages}
      style={{
        marginBottom: "3.5rem",
      }}
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
      <Grid
        container
        spacing={4}
        sx={{
          overflowX: "hidden",
          overflowY: "hidden",
        }}
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
              message={"No players match your search or filter criteria"}
            />
          </Grid>
        ) : (
          playerCards.map((playerCard) => (
            <Grid key={playerCard.playerId} size={{ xs: 12, sm: 6, lg: 4 }}>
              <PlayerCard
                key={playerCard.playerId}
                playerId={playerCard.playerId}
                position={playerCard.position}
                nationality={playerCard.nationality}
                age={playerCard.age}
                fullName={playerCard.fullName}
                currentClub={playerCard.currentClub}
                imageUrl={playerCard.imageUrl}
              />
            </Grid>
          ))
        )}

        <Slide
          in={showScrollToTopButton}
          direction="up"
          timeout={{ enter: 100, exit: 300 }}
          unmountOnExit
        >
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
              text="Scroll to the top"
              sx={{
                borderRadius: "100rem",
              }}
              onClick={() => handleScrollToTop()}
            />
          </Grid>
        </Slide>
      </Grid>
    </InfiniteScroll>
  );
};
