// Import the necessary components and hooks
import {
  LogoButton,
  LogoImage,
  StyledAppBar,
  StyledToolbar,
} from "./navbar.style";
import ProfileIcon from "./../ui/profile-icon/ProfileIcon.tsx";
import logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../auth/auth.hooks.ts"; // Import the isUserLoggedIn function

export function Navbar() {
  const navigate = useNavigate();

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <LogoButton onClick={() => navigate("/project2/players")}>
          <LogoImage src={logo} alt="Logo" />
        </LogoButton>
        {/* Conditionally render the ProfileIcon based on user login status */}
        {isUserLoggedIn() && <ProfileIcon />}
      </StyledToolbar>
    </StyledAppBar>
  );
}
