import {
  LogoButton,
  LogoImage,
  StyledAppBar,
  StyledLogoutIcon,
  StyledToolbar,
} from "./navbar.style";
import logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { isUserLoggedIn, logOutUser } from "../auth/auth.hooks.ts";

export function Navbar() {
  const navigate = useNavigate();
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <LogoButton onClick={() => navigate("/project2/players")}>
          <LogoImage src={logo} alt="Logo" />
        </LogoButton>
        {isUserLoggedIn() ? (
          <IconButton
            aria-label="Log out"
            onClick={() => {
              logOutUser();
              navigate("/project2");
            }}
          >
            <StyledLogoutIcon />
          </IconButton>
        ) : null}
      </StyledToolbar>
    </StyledAppBar>
  );
}
