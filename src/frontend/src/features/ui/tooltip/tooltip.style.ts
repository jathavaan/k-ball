import { styled, Tooltip } from "@mui/material";

export const StyledTooltip = styled(Tooltip)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  textTransform: "none",
  minWidth: "3.6rem",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
  "&.Mui-disabled": {
    backgroundColor: "#d3d3d3",
    color: "white",
  },
}));
