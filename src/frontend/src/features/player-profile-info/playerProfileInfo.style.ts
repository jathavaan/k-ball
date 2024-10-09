import { Card, styled } from "@mui/material";

export const StyledPlayerInfoCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  padding: "1.5rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "8px",
  transition: "box-shadow 0.2s ease-in-out",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "1rem",
    alignItems: "flex-start",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "0.5rem",
  },
}));
