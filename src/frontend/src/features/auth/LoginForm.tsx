import { useNavigate } from "react-router-dom";
import {
  StyledBox,
  StyledContainer,
  StyledLink,
  StyledPaper,
  StyledTypography,
} from "./auth.style.ts";
import { Button, TextField } from "../ui";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <StyledContainer maxWidth="sm">
      <StyledPaper elevation={3}>
        <StyledBox>
          <StyledTypography variant="h5" gutterBottom>
            Welcome! Log in to see players
          </StyledTypography>

          <TextField
            label="Email"
            placeholder="Enter your email address"
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Password"
            placeholder="Enter your password"
            variant="outlined"
            fullWidth
            type="password"
          />

          <Button
            text="Log in"
            fullWidth
            onClick={() => navigate("/project2/players")}
          />

          <StyledLink
            onClick={() => navigate("/project2/signup")}
            variant="body2"
            underline="hover"
          >
            New user?
          </StyledLink>
        </StyledBox>
      </StyledPaper>
    </StyledContainer>
  );
};
