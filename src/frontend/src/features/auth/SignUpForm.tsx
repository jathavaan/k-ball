import { useNavigate } from "react-router-dom";
import {
  StyledContainer,
  StyledLink,
  StyledPaper,
  StyledTypography,
} from "@features/auth/auth.style";
import { Button, ErrorAlert, TextField } from "@features/ui";
import { useRegister, useRegisterForm } from "@features/auth/auth.hooks.ts";
import Grid from "@mui/material/Grid2";
import {
  registerEmailSelector,
  registerFirstNameSelector,
  registerLastNameSelector,
  registerPasswordSelector,
} from "@features/auth/auth.slice.ts";
import { useSelector } from "react-redux";

export const SignUpForm = () => {
  const navigate = useNavigate();

  const firstName = useSelector(registerFirstNameSelector);
  const lastName = useSelector(registerLastNameSelector);
  const email = useSelector(registerEmailSelector);
  const password = useSelector(registerPasswordSelector);

  const {
    onRegisterClick,
    handleKeyDown,
    isRegisterButtonDisabled,
    registerData,
    error,
    isPending,
  } = useRegister();
  const {
    handleFirstNameChange,
    handlePasswordChange,
    handleEmailChange,
    handleLastNameChange,
  } = useRegisterForm();

  const handleRegisterClick = () => {
    onRegisterClick(
      {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      },
      () => navigate("/project2/players"),
    );
  };

  return (
    <StyledContainer maxWidth="sm" onKeyDown={(e) => handleKeyDown(e)}>
      <StyledPaper elevation={3}>
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StyledTypography variant="h5" gutterBottom>
              Create your account
            </StyledTypography>
          </Grid>

          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              label="First name"
              placeholder="Enter your first name"
              variant="outlined"
              fullWidth
              value={firstName.value}
              error={firstName.error.isError}
              helperText={firstName.error.message}
              onChange={(e) => handleFirstNameChange(e.target.value)}
            />
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              label="Last name"
              placeholder="Enter your last name"
              variant="outlined"
              fullWidth
              value={lastName.value}
              error={lastName.error.isError}
              helperText={lastName.error.message}
              onChange={(e) => handleLastNameChange(e.target.value)}
            />
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              label="E-mail"
              placeholder="Enter your email address"
              variant="outlined"
              type="email"
              fullWidth
              value={email.value}
              error={email.error.isError}
              helperText={email.error.message}
              onChange={(e) => handleEmailChange(e.target.value)}
            />
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              label="Password"
              placeholder="Create a password"
              variant="outlined"
              fullWidth
              type="password"
              value={password.value}
              error={password.error.isError}
              helperText={password.error.message}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              text="Sign up"
              disabled={isRegisterButtonDisabled}
              isLoading={isPending}
              fullWidth
              onClick={handleRegisterClick}
            />
          </Grid>
          {error ? (
            <Grid
              size={{ xs: 12 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ErrorAlert
                message={`Oops! Something went wrong`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </Grid>
          ) : null}
          {typeof registerData === "boolean" && !registerData ? (
            <Grid
              size={{ xs: 12 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ErrorAlert
                message={`There is already an account with this email address`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              />
            </Grid>
          ) : typeof registerData === "boolean" && registerData ? (
            <Grid
              size={{ xs: 12 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Grid>
          ) : null}
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StyledLink
              variant="body2"
              underline="hover"
              href="/project2/login#"
              onClick={() => {
                navigate("/project2/login", { replace: true });
              }}
            >
              Go back to login
            </StyledLink>
          </Grid>
        </Grid>
      </StyledPaper>
    </StyledContainer>
  );
};
