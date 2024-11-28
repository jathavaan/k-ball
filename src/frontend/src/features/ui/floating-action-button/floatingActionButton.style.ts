import { Fab, styled } from "@mui/material";

export const StyledFloatingActionButton = styled(Fab)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.secondary.dark,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));
