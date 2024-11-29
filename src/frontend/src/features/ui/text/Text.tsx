import { StyledText } from "@features/ui/text/text.style.ts";
import { TextProps } from "@features/ui/text/text.types.ts";

export const Text = (props: TextProps) => {
  return <StyledText {...props}>{props.text}</StyledText>;
};
