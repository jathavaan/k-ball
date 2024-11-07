import { SuccessAlertProps } from "./successAlert.types.ts";
import { StyledSuccessAlert } from "./successAlert.style.ts";

export const SuccessAlert = ({ message, ...props }: SuccessAlertProps) => {
  return (
    <StyledSuccessAlert {...props} variant="filled" severity="success">
      {message}
    </StyledSuccessAlert>
  );
};
