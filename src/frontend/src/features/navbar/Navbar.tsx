import {
  LogoButton,
  LogoImage,
  StyledAppBar,
  StyledToolbar,
} from "./navbar.style";
import { Logo } from "@/assets";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "@features/auth";
import { ProfileMenu } from "@features/profile-menu";

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
          <LogoImage src={Logo} alt="Logo" />
        </LogoButton>
        {isUserLoggedIn() && <ProfileMenu />}
      </StyledToolbar>
    </StyledAppBar>
  );
}
