import {
  StyledAppBar,
  StyledToolbar,
  LogoButton,
  LogoImage,
} from "./navbar.style";
import logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <LogoButton onClick={() => navigate("/project2")}>
          <LogoImage src={logo} alt="Logo" />
        </LogoButton>
      </StyledToolbar>
    </StyledAppBar>
  );
}
