import { useNavigate } from "react-router-dom";
import {
  StyledContainer,
  StyledPaper,
  StyledBox,
  StyledButton,
  StyledTextField,
  StyledLink,
  StyledTypography,
} from "../login-form/loginForm.style";

export const SignUpForm = () => {
  const navigate = useNavigate();
  return (
    <StyledContainer maxWidth="sm">
      <StyledPaper elevation={3}>
        <StyledBox>
          <StyledTypography variant="h5" gutterBottom>
            Create your account
          </StyledTypography>

          <StyledTextField
            label="First Name"
            placeholder="Enter your first name"
            variant="outlined"
            fullWidth
          />

          <StyledTextField
            label="Last Name"
            placeholder="Enter your last name"
            variant="outlined"
            fullWidth
          />

          <StyledTextField
            label="Email"
            placeholder="Enter your email address"
            variant="outlined"
            fullWidth
            type="email"
          />

          <StyledTextField
            label="Password"
            placeholder="Create a password"
            variant="outlined"
            fullWidth
            type="password"
          />

          <StyledButton
            onClick={() => navigate("/project2/players")}
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign Up
          </StyledButton>

          <StyledLink
            onClick={() => navigate("/project2/login")}
            //href="/project2/login"
            variant="body2"
            underline="hover"
          >
            Go back to login
          </StyledLink>
        </StyledBox>
      </StyledPaper>
    </StyledContainer>
  );
};
