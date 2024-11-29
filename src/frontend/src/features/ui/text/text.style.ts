import { styled, Typography } from "@mui/material";

export const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textAlign: "center",
}));
