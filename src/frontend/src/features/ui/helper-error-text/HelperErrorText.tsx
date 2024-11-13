import { HelperErrorTextProps } from "./helperErrorText.types";
import { StyledHelperErrorText } from "./helperErrorText.style.ts";

export const HelperErrorText = ({ description }: HelperErrorTextProps) => {
  return <StyledHelperErrorText>{description}</StyledHelperErrorText>;
};
