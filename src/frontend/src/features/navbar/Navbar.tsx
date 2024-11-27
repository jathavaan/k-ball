import {
  LogoButton,
  LogoImage,
  StyledAppBar,
  StyledToolbar,
} from "./navbar.style";
import logo from "../../assets/logo.webp";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../auth/auth.hooks.ts";
import { ProfileMenu } from "../profile-menu"; // Import the isUserLoggedIn function

export function Navbar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (window.location.pathname == "/project2/players") {
      window.location.reload();
    } else {
      navigate("/project2/players");
      window.location.reload();
    }
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <LogoButton onClick={handleLogoClick}>
          <LogoImage src={logo} alt="Logo" />
        </LogoButton>
        {isUserLoggedIn() && <ProfileMenu />}
      </StyledToolbar>
    </StyledAppBar>
  );
}
