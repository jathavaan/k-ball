import { ArrowDownwardIconProps } from "./ArrowDownwardIcon.types";
import { StyledArrow } from "./ArrowDownwardIcon.style";

export const ArrowDownwardIcon = ({ onClick }: ArrowDownwardIconProps) => {
  return <StyledArrow onClick={onClick} />;
};
