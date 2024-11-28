import { StyledButton } from "@features/ui/button/button.style";
import { ButtonProps } from "@features/ui/button/button.types";
import { CircularProgress } from "@mui/material";

export const Button = ({ text, isLoading = false, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {!isLoading ? text : <CircularProgress color="inherit" size={25} />}
    </StyledButton>
  );
};
