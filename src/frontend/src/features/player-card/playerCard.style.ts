import { Card, styled } from "@mui/material";

export const StyledPlayerCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  padding: "0.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    cursor: "pointer",
    shadows: "5rem",
  },
}));
