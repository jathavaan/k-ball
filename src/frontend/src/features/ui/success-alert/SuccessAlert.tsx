import { SuccessAlertProps } from "@features/ui/success-alert/successAlert.types.ts";
import { StyledSuccessAlert } from "@features/ui/success-alert/successAlert.style.ts";

export const SuccessAlert = ({ message, ...props }: SuccessAlertProps) => {
  return (
    <StyledSuccessAlert {...props} variant="filled" severity="success">
      {message}
    </StyledSuccessAlert>
  );
};
