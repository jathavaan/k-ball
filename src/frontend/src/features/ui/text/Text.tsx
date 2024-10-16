import { StyledText } from "./text.style.ts";
import { TextProps } from "./text.types.ts";

export const Text = (props: TextProps) => {
  return (
    <StyledText {...props}> 
    {props.text}
  </StyledText>
  );
};
