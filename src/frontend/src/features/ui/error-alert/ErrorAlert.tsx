import { ErrorAlertProps } from "@features/ui/error-alert/errorAlert.types.ts";
import { StyledErrorAlert } from "@features/ui/error-alert/errorAlert.style.ts";

export const ErrorAlert = ({ message, ...props }: ErrorAlertProps) => {
  return (
    <StyledErrorAlert {...props} variant="filled" severity="error">
      {message}
    </StyledErrorAlert>
  );
};
