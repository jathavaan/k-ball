import {
  StyledCloseIcon,
  StyledDrawer,
  StyledList,
  StyledListItem,
  StyledListItemButton,
  StyledListItemIcon,
  StyledProfileIcon,
} from "@features/profile-menu/profileMenu.style.ts";
import {
  useProfileMenu,
  useProfileMenuToggle,
} from "@features/profile-menu/profileMenu.hooks.ts";
import { Collapse, IconButton, ListItemText } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Person2Icon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";
import BadgeIcon from "@mui/icons-material/Badge";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { CircularProgressBar, ErrorAlert, ImageContainer } from "@features/ui";
import { DetailedPlayerRatingResponse } from "@features/profile-menu/profileMenu.types.ts";

export const ProfileMenu = () => {
  const { openDrawer, isProfileMenuOpen } = useProfileMenuToggle();
  return (
    <IconButton aria-label="Toggle profile view" onClick={() => openDrawer()}>
      {!isProfileMenuOpen ? (
        <StyledProfileIcon aria-label="Show profile view" />
      ) : (
        <StyledCloseIcon aria-label="Show profile view" />
      )}
    </IconButton>
  );
};

export const ProfileMenuDrawer = () => {
  const {
    userInfo,
    isUserInfoPending,
    isUserInfoError,
    playerRatings,
    isPlayerRatingsPending,
    isPlayerRatingsError,
    isProfileInfoExpanded,
    isRatingsExpanded,
    toggleIsProfileInfoExpanded,
    toggleIsRatingsExpanded,
    onPlayerRatingClick,
    logOut,
  } = useProfileMenu();
  const { isProfileMenuOpen, closeDrawer } = useProfileMenuToggle();
  return (
    <StyledDrawer
      anchor="right"
      open={isProfileMenuOpen}
      onClose={() => closeDrawer()}
    >
      <StyledList>
        <StyledListItem>
          <StyledListItemButton
            disableRipple
            onClick={() => toggleIsProfileInfoExpanded()}
          >
            <StyledListItemIcon>
              <Person2Icon />
            </StyledListItemIcon>
            <ListItemText primary="My Profile" />
            {isProfileInfoExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </StyledListItemButton>
        </StyledListItem>
        <Collapse in={isProfileInfoExpanded} timeout="auto" unmountOnExit>
          <StyledList sx={{ mt: 0 }}>
            {isUserInfoError && (
              <StyledListItem sx={{ pl: 4 }}>
                <ErrorAlert message="Something went wrong when retrieving your information" />
              </StyledListItem>
            )}

            <StyledListItem sx={{ pl: 4 }}>
              <StyledListItemIcon>
                <BadgeIcon />
              </StyledListItemIcon>
              {!isUserInfoPending ? (
                <ListItemText
                  primary={`${userInfo?.firstName} ${userInfo?.lastName}`}
                />
              ) : (
                <CircularProgressBar size={15} />
              )}
            </StyledListItem>
            <StyledListItem sx={{ pl: 4 }}>
              <StyledListItemIcon>
                <AlternateEmailIcon />
              </StyledListItemIcon>
              {!isUserInfoPending ? (
                <ListItemText primary={userInfo?.email} />
              ) : (
                <CircularProgressBar size={15} />
              )}
            </StyledListItem>
          </StyledList>
        </Collapse>
        <StyledListItem>
          <StyledListItemButton
            disableRipple
            onClick={() => toggleIsRatingsExpanded()}
          >
            <StyledListItemIcon>
              {isRatingsExpanded ? <StarIcon /> : <StarBorderIcon />}
            </StyledListItemIcon>
            <ListItemText primary="View my ratings" />
            {isRatingsExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </StyledListItemButton>
        </StyledListItem>
        <Collapse in={isRatingsExpanded} timeout="auto" unmountOnExit>
          <StyledList sx={{ mt: 0 }}>
            {isPlayerRatingsError ? (
              <StyledListItem sx={{ pl: 4 }}>
                <StyledListItemIcon>
                  <FormatListBulletedIcon />
                </StyledListItemIcon>
                <ListItemText primary="Error loading player ratings." />
              </StyledListItem>
            ) : isPlayerRatingsPending ? (
              <StyledListItem sx={{ pl: 4 }}>
                <StyledListItemIcon>
                  <CircularProgressBar size={20} />
                </StyledListItemIcon>
                <ListItemText primary="Loading..." />
              </StyledListItem>
            ) : playerRatings !== undefined && playerRatings.length > 0 ? (
              playerRatings.map(
                (playerRating: DetailedPlayerRatingResponse) => (
                  <StyledListItem sx={{ pl: 4 }} key={playerRating.playerId}>
                    <StyledListItemButton
                      disableRipple
                      onClick={() => onPlayerRatingClick(playerRating.playerId)}
                    >
                      <StyledListItemIcon>
                        <ImageContainer
                          src={playerRating.imageUrl}
                          alt={`Portrait of ${playerRating.fullName}`}
                          style={{
                            height: "2rem",
                            width: "2rem",
                          }}
                        />
                      </StyledListItemIcon>
                      <ListItemText primary={playerRating.fullName} />
                      <ListItemText
                        primary={`(Rating ${playerRating.averageRating.toFixed(2)})`}
                        primaryTypographyProps={{ sx: { fontSize: "0.8rem" } }}
                        sx={(theme) => ({
                          textAlign: "right",
                          minWidth: "4rem",
                          marginLeft: "1rem",
                          color: theme.palette.text.disabled,
                        })}
                      />
                    </StyledListItemButton>
                  </StyledListItem>
                ),
              )
            ) : (
              <StyledListItem sx={{ pl: 4 }}>
                <StyledListItemIcon>
                  <FormatListBulletedIcon />
                </StyledListItemIcon>
                <ListItemText primary="No ratings available" />
              </StyledListItem>
            )}
          </StyledList>
        </Collapse>

        <StyledListItem>
          <StyledListItemButton disableRipple onClick={() => logOut()}>
            <StyledListItemIcon>
              <LogoutIcon />
            </StyledListItemIcon>
            <ListItemText primary="Sign out" />
          </StyledListItemButton>
        </StyledListItem>
      </StyledList>
    </StyledDrawer>
  );
};
