import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "0.4rem",
  [theme.breakpoints.up("md")]: {
    maxHeight: "17.5rem",
  },
  [theme.breakpoints.down("md")]: {
    maxHeight: "16.5rem",
  },
}));

export const StyledImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: "60%",
    transform: "rotate(90deg) translate(-20%, 0%)",
  },
  [theme.breakpoints.down("md")]: {
    width: "40%",
    paddingBottom: "0.8rem",
  },
}));
