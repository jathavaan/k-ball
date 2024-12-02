import { CardText, ImageContainer, Text } from "@features/ui";
import Grid from "@mui/material/Grid2";
import { CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { StyledPlayerCard } from "@features/player-card/playerCard.style.ts";
import { PlayerCardProps } from "@features/player-card/playerCard.types.ts";
import PublicIcon from "@mui/icons-material/Public";
import CakeIcon from "@mui/icons-material/Cake";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import StarIcon from "@mui/icons-material/Star";

export const PlayerCard = (props: PlayerCardProps) => {
  return (
    <StyledPlayerCard data-testid="player-card">
      <CardActionArea component={RouterLink} to={`${props.playerId}`}>
        <Grid
          container
          sx={{
            position: "relative",
            minHeight: "8rem",
            overflow: "hidden",
          }}
          spacing={0}
        >
          <Grid
            size={{ xs: 6 }}
            sx={() => ({
              position: "relative",
              clipPath: "polygon(0 0, 90% 0, 100% 100%, 0 100%)",
              backgroundColor: "#c2c2c2",
              zIndex: 1,
            })}
          >
            <ImageContainer
              alt={`Profile picture for ${props.fullName}`}
              src={props.imageUrl}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "0",
              }}
            />
          </Grid>
          <Grid
            container
            spacing={1}
            size={{ xs: 6 }}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "space-between",
              marginBottom: "0.1rem",
            }}
          >
            <Grid
              size={{ xs: 12 }}
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "space-between",
                backgroundColor: theme.palette.secondary.dark,
                borderBottomRightRadius: "0.4rem",
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
                position: "relative",
                left: "-10%",
                width: "110%",
                minHeight: {
                  xs: "1.8rem",
                  md: "2.5rem",
                },
              })}
            >
              <Text
                text={props.fullName}
                sx={(theme) => ({
                  color: theme.palette.secondary.contrastText,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  fontWeight: 300,
                  textAlign: "left",
                  marginLeft: "0.6rem",
                })}
              />
              <Text
                text={
                  props.averageRating
                    ? `Rating: ${parseFloat(props.averageRating.toString()).toFixed(0)}/5`
                    : `Be the first to rate!`
                }
                sx={(theme) => ({
                  fontSize: {
                    xs: "0.7rem",
                    md: "0.8rem",
                  },
                  color: theme.palette.grey["300"],
                  textAlign: "left",
                  marginLeft: "0.6rem",
                })}
              />
            </Grid>
            <Grid
              size={{ xs: 12 }}
              sx={{
                display: "flex",
                flexDirection: "row",
                position: "relative",
                alignItems: "center",
                left: "-8%",
              }}
            >
              <CardText
                icon={
                  <ImageContainer
                    src={props.clubLogoUrl}
                    alt={`${props.currentClub} logo`}
                    style={{
                      height: "1.2rem",
                      width: "1.2rem",
                    }}
                  />
                }
                text={props.currentClub}
              />
            </Grid>
            <Grid
              size={{ xs: 12 }}
              sx={{
                display: "flex",
                flexDirection: "row",
                position: "relative",
                alignItems: "center",
                left: "-6%",
              }}
            >
              <CardText
                icon={
                  <FmdGoodIcon
                    sx={{
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  />
                }
                text={props.position}
              />
            </Grid>
            <Grid
              size={{ xs: 12 }}
              sx={{
                display: "flex",
                flexDirection: "row",
                position: "relative",
                alignItems: "center",
                left: "-4%",
              }}
            >
              <CardText
                icon={
                  <CakeIcon
                    sx={{
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  />
                }
                text={`${Intl.DateTimeFormat("en-US", {
                  //month: "short",
                  //day: "numeric",
                  year: "numeric",
                }).format(new Date(props.birthDate))} | ${props.age} years`}
              />
            </Grid>
            <Grid
              size={{ xs: 12 }}
              sx={{
                display: "flex",
                flexDirection: "row",
                position: "relative",
                alignItems: "center",
                left: "-2%",
              }}
            >
              <CardText
                icon={
                  <PublicIcon
                    sx={{
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  />
                }
                text={props.nationality}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardActionArea>
    </StyledPlayerCard>
  );
};
