import { CardContentTextProps } from "./cardContentText.types.ts";
import { StyledCardContentText } from "./cardContentText.style.ts";

export const CardContentText = (props: CardContentTextProps) => {
  return (
    <StyledCardContentText {...props} variant="body1">
      <b>{props.title}:</b> {props.text}
    </StyledCardContentText>
  );
};
