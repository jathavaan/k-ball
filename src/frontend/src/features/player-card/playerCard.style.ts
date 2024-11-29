import { Card, styled } from "@mui/material";

export const StyledPlayerCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  borderRadius: "0.4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.05s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main,
  },
}));
