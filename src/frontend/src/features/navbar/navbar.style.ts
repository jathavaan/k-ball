import { AppBar, Button, styled, Toolbar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

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
  alignItems: "center",
  justifyContent: "space-between",
}));

export const LogoButton = styled(Button)(() => ({
  padding: 0,
  "&:hover": {
    backgroundColor: "inherit",
    boxShadow: "none",
  },
}));

export const LogoImage = styled("img")({
  height: "60px",
});

export const StyledLogoutIcon = styled(LogoutIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
