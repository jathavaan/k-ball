import { Card, styled } from "@mui/material";

export const StyledPlayerCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  padding: "0.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.05s ease-in-out, box-shadow 0.05s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.03)",
    boxShadow: "0px 5px 10px rgba(0,0,0,0.19), 0px 2px 2px rgba(0,0,0,0.13)",
  },
}));
