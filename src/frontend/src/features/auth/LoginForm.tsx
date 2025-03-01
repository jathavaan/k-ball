import { Navigate, useNavigate } from "react-router-dom";
import {
  StyledContainer,
  StyledLink,
  StyledPaper,
  StyledTypography,
} from "@features/auth/auth.style.ts";
import { Button, ErrorAlert, TextField } from "@features/ui";
import {
  loginEmailSelector,
  loginPasswordSelector,
} from "@features/auth/auth.slice.ts";
import { useSelector } from "react-redux";
import { useLogin, useLoginForm } from "@features/auth/auth.hooks.ts";
import Grid from "@mui/material/Grid2";

export const LoginForm = () => {
  const navigate = useNavigate();
  const email = useSelector(loginEmailSelector);
  const password = useSelector(loginPasswordSelector);
  const { handleEmailChange, handlePasswordChange } = useLoginForm();
  const {
    onLoginClick,
    handleKeyDown,
    isLoginButtonDisabled,
    data,
    error,
    isPending,
  } = useLogin();

  return (
    <StyledContainer maxWidth="sm" onKeyDown={(e) => handleKeyDown(e)}>
      <StyledPaper elevation={3}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StyledTypography variant="h5" gutterBottom>
              Welcome! Log in to see players
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
              required
              label="Email"
              placeholder="Enter your email address"
              variant="outlined"
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
              required
              label="Password"
              placeholder="Enter your password"
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
              text="Log in"
              disabled={isLoginButtonDisabled}
              isLoading={isPending}
              fullWidth
              onClick={() => onLoginClick()}
            />
          </Grid>

          {error ? (
            <ErrorAlert
              message="Something went wrong while logging in"
              sx={{ width: "100%" }}
            />
          ) : null}

          {data === null ? (
            <Grid
              size={{ xs: 12 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ErrorAlert
                message={"Incorrect username and password"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              />
            </Grid>
          ) : data !== undefined && data >= 1 ? (
            <Navigate to="/project2/players" replace />
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
              href={"/project2/register#"}
              onClick={() => navigate("/project2/register")}
              variant="body2"
              underline="hover"
            >
              New user?
            </StyledLink>
          </Grid>
        </Grid>
      </StyledPaper>
    </StyledContainer>
  );
};
