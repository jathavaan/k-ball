import { HelperTextProps } from "@features/ui/helper-text/helperText.types.ts";
import { StyledHelperText } from "@features/ui/helper-text/helperText.style.ts";

export const HelperText = ({ description }: HelperTextProps) => {
  return <StyledHelperText>{description}</StyledHelperText>;
};
