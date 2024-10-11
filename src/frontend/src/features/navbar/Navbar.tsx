import {
  StyledAppBar,
  StyledToolbar,
  LogoButton,
  LogoImage,
} from "./navbar.style";
import logo from "../../assets/Logo.png";

export function Navbar() {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <LogoButton href="/">
          {" "}
          {/*Huske å endre dette når routing blir aktuelt*/}
          <LogoImage src={logo} alt="Logo" />
        </LogoButton>
      </StyledToolbar>
    </StyledAppBar>
  );
}
