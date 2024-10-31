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
  return (
    <StyledContainer maxWidth="sm">
      <StyledPaper elevation={3}>
        <StyledBox>
          <StyledTypography variant="h5" gutterBottom>
            Create your account
          </StyledTypography>

          <StyledTextField
            label="Username"
            placeholder="Choose a username"
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
            type="password" //spesifisere hva - type er prop til textfield fra mui
          />

          <StyledButton
            href="/project2/players"
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign Up
          </StyledButton>

          <StyledLink href="/project2/login" variant="body2" underline="hover">
            Go back to login
          </StyledLink>
        </StyledBox>
      </StyledPaper>
    </StyledContainer>
  );
};
