import { useNavigate } from "react-router-dom";
import {
  StyledBox,
  StyledContainer,
  StyledLink,
  StyledPaper,
  StyledTypography,
} from "./auth.style";
import {
  Button,
  ErrorAlert,
  LinearProgressBar,
  SuccessAlert,
  TextField,
} from "../ui";
import { useState } from "react";
import { RegisterProps } from "./auth.types.ts";
import { useRegister } from "./auth.hooks.ts";

export const SignUpForm = () => {
  const navigate = useNavigate();

  const [registerFormData, setRegisterFormData] = useState<RegisterProps>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isSubmitted: false,
  });

  const { handleRegister, data, error, isLoading } =
    useRegister(registerFormData);

  return (
    <StyledContainer maxWidth="sm">
      <StyledPaper elevation={3}>
        <StyledBox>
          <StyledTypography variant="h5" gutterBottom>
            Create your account
          </StyledTypography>

          {registerFormData.isSubmitted && isLoading ? (
            <LinearProgressBar />
          ) : null}
          {registerFormData.isSubmitted && error ? (
            <ErrorAlert message="Oops! Something went wrong" />
          ) : null}
          {registerFormData.isSubmitted && data !== undefined && data ? (
            <SuccessAlert message="Registration successful" />
          ) : (
            <ErrorAlert message="An account with this email have already been registered" />
          )}

          <TextField
            label="First name"
            placeholder="Enter your first name"
            variant="outlined"
            onChange={(e) =>
              setRegisterFormData({
                ...registerFormData,
                firstName: e.target.value,
                isSubmitted: false,
              })
            }
            fullWidth
          />

          <TextField
            label="Last name"
            placeholder="Enter your last name"
            variant="outlined"
            onChange={(e) =>
              setRegisterFormData({
                ...registerFormData,
                lastName: e.target.value,
                isSubmitted: false,
              })
            }
            fullWidth
          />

          <TextField
            label="E-mail"
            placeholder="Enter your email address"
            variant="outlined"
            onChange={(e) =>
              setRegisterFormData({
                ...registerFormData,
                email: e.target.value,
                isSubmitted: false,
              })
            }
            fullWidth
            type="email"
          />

          <TextField
            label="Password"
            placeholder="Create a password"
            variant="outlined"
            onChange={(e) =>
              setRegisterFormData({
                ...registerFormData,
                password: e.target.value,
                isSubmitted: false,
              })
            }
            fullWidth
            type="password"
          />
          <Button
            onClick={async () => {
              setRegisterFormData({ ...registerFormData, isSubmitted: true });
              await handleRegister();
            }}
            fullWidth
            text="Sign Up"
          />
          <StyledLink
            variant="body2"
            underline="hover"
            onClick={() => navigate("/project2/login")}
          >
            Go back to login
          </StyledLink>
        </StyledBox>
      </StyledPaper>
    </StyledContainer>
  );
};
