import { styled, Typography } from "@mui/material";

export const StyledCardContentText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));
