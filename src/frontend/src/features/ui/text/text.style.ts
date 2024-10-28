import { styled, Typography } from "@mui/material";

export const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: "Futura",
  fontSize: "64",
  fontWeight: 400,
  margin: "0.5rem 0",
  textAlign: "center",
}));
