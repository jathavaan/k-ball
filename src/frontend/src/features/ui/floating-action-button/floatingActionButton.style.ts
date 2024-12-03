import { Fab, styled } from "@mui/material";

export const StyledFloatingActionButton = styled(Fab)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.secondary.dark,
  textTransform: "none",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.5rem 1rem",
  marginRight: "0.5rem",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
  "&.Mui-disabled": {
    backgroundColor: "#d3d3d3",
    color: "white",
  },
}));
