import { StyledCardHeader } from "./cardHeader.style.ts";
import { CardHeaderProps } from "./cardHeader.types.ts";

export const CardHeader = ({ headerText, ...props }: CardHeaderProps) => {
  return (
    <StyledCardHeader {...props} variant="h4">
      {headerText}
    </StyledCardHeader>
  );
};
