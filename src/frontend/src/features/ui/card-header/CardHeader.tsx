import { StyledCardHeader } from "./cardHeader.style.ts";
import { CardHeaderProps } from "./cardHeader.types.ts";

export const CardHeader = (props: CardHeaderProps) => {
  return (
    <StyledCardHeader {...props} variant="h4">
      {props.headerText}
    </StyledCardHeader>
  );
};
