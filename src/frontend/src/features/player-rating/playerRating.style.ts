import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

export const StyledGridContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  borderRadius: "0.4rem",
}));

export const StyledGridItem = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.2rem",
  borderRadius: "0.4rem",
}));
