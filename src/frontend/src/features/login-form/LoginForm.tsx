import {
  StyledContainer,
  StyledPaper,
  StyledBox,
  StyledButton,
  StyledTextField,
  StyledLink,
  StyledTypography,
} from "./loginForm.style.ts";

export const Login = () => {
  return (
    <StyledContainer maxWidth="sm">
      <StyledPaper elevation={3}>
        <StyledBox>
          <StyledTypography variant="h5" gutterBottom>
            Welcome! Log in to see players
          </StyledTypography>

          <StyledTextField
            label="Username"
            placeholder="Enter your email address"
            variant="outlined"
            fullWidth
          />

          <StyledTextField
            label="Password"
            placeholder="Enter your password"
            variant="outlined"
            fullWidth
            type="password"
          />

          <StyledButton
            href="players"
            variant="contained"
            color="primary"
            fullWidth
          >
            Log In
          </StyledButton>

          <StyledLink href="signup" variant="body2" underline="hover">
            New user?
          </StyledLink>
        </StyledBox>
      </StyledPaper>
    </StyledContainer>
  );
};
