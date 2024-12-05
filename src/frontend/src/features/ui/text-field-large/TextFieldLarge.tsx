import { TextField } from "@features/ui";
import { TextFieldProps } from "@mui/material";

export const TextFieldLarge = (props: TextFieldProps) => {
  return <TextField multiline {...props} />;
};
