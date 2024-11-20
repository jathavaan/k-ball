import {
  LogoButton,
  LogoImage,
  StyledAppBar,
  StyledToolbar,
} from "./navbar.style";
import logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../auth/auth.hooks.ts";
import { ProfileMenu } from "../profile-menu"; // Import the isUserLoggedIn function

export function Navbar() {
  const navigate = useNavigate();

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <LogoButton onClick={() => navigate("/project2/players")}>
          <LogoImage src={logo} alt="Logo" />
        </LogoButton>
        {isUserLoggedIn() && <ProfileMenu />}
      </StyledToolbar>
    </StyledAppBar>
  );
}
