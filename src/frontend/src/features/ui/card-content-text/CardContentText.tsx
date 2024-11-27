import { CardContentTextProps } from "@features/ui/card-content-text/cardContentText.types.ts";
import { StyledCardContentText } from "@features/ui/card-content-text/cardContentText.style.ts";

export const CardContentText = (props: CardContentTextProps) => {
  return (
    <StyledCardContentText {...props} variant="body1">
      <b>{props.title}:</b> {props.text}
    </StyledCardContentText>
  );
};
