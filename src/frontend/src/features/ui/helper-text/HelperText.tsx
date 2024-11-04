import { helperTextProps } from "./helperText.types";
import { StyledHelperText } from "./helperText.style";

export const HelperText = ({ description }: helperTextProps) => {
  return <StyledHelperText>{description}</StyledHelperText>;
};
