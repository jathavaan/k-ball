import { CardHeaderProps } from "@features/ui/card-header/cardHeader.types.ts";
import { StyledCardHeader } from "@features/ui/card-header/cardHeader.style.ts";

export const CardHeader = ({ headerText, ...props }: CardHeaderProps) => {
  return (
    <StyledCardHeader {...props} variant="h4">
      {headerText}
    </StyledCardHeader>
  );
};
