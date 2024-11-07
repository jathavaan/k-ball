import { AppBar, Toolbar, Button, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  padding: "0.3rem",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: theme.zIndex.drawer + 1,
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  padding: "0.3rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const LogoButton = styled(Button)(() => ({
  padding: 0,
}));

export const LogoImage = styled("img")({
  height: "60px",
  transition: "transform 0.3s ease",
  "&:hover": {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
});
