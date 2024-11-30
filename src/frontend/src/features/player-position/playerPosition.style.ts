import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "0.4rem",
  [theme.breakpoints.up("md")]: {
    maxHeight: "17.5rem", // Applies on medium and larger screens
  },
  [theme.breakpoints.down("md")]: {
    maxHeight: "16.5rem", // Applies on small and smaller screens
  },
}));

export const StyledImage = styled("img")(() => ({
  width: "60%",
  transform: "rotate(90deg) translate(-20%, 0%)",
}));
