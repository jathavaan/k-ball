import { StyledTextField } from "@features/ui/text-field/textField.style.ts";
import { TextFieldProps } from "@mui/material";

export const TextField = (props: TextFieldProps) => {
  return <StyledTextField {...props} />;
};
