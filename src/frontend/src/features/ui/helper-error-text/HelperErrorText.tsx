import { HelperErrorTextProps } from "@features/ui/helper-error-text/helperErrorText.types.ts";
import { StyledHelperErrorText } from "@features/ui/helper-error-text/helperErrorText.style.ts";

export const HelperErrorText = ({ description }: HelperErrorTextProps) => {
  return <StyledHelperErrorText>{description}</StyledHelperErrorText>;
};
