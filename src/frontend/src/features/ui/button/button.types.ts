import { ButtonProps as MuiButtonProps } from "@mui/material";

export interface ButtonProps extends MuiButtonProps {
  text: string;
  isLoading?: boolean;
}
