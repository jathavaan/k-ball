import { HelperTextProps } from "./helperText.types";
import { StyledHelperText } from "./helperText.style";

export const HelperText = ({ description, ...props }: HelperTextProps) => {
  return <StyledHelperText {...props}>{description}</StyledHelperText>;
};
