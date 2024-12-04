import { TextFieldProps } from "@mui/material";
import { StyledTextField } from "@features/ui/dense-text-field/denseTextField.style.ts";

export const DenseTextField = (props: TextFieldProps) => {
  return <StyledTextField {...props} size="small" />;
};
