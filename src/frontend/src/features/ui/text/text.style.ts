import { styled, Typography } from "@mui/material";

export const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: "Outfit",
  fontWeight: 400,
  margin: "0.5rem 0",
  textAlign: "center",
}));
