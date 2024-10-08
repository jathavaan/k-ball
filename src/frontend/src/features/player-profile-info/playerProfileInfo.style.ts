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
  transition: "box-shadow 0.2s ease-in-out", // Jevn overgangseffekt ved hover
  "&:hover": {
    boxShadow: "0px 8px 15px rgba(0,0,0,0.2)"
  },
}));
