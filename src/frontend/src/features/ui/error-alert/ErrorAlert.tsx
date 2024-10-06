import { ErrorAlertProps } from "./errorAlert.types.ts";
import { StyledErrorAlert } from "./errorAlert.style.ts";

export const ErrorAlert = ({ message, ...props }: ErrorAlertProps) => {
  return (
    <StyledErrorAlert {...props} variant="filled" severity="error">
      {message}
    </StyledErrorAlert>
  );
};
