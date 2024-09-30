import { styled, Typography } from "@mui/material";

export const StyledCardHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontWeight: "200",
  fontSize: "1.5rem",
}));
