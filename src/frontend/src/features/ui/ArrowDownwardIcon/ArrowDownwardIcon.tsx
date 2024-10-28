import { ArrowDownwardIconProps } from "./ArrowDownwardIcon.types";
import { StyledArrow } from "./ArrowDownwardIcon.style";

const ArrowDownwardIcon = ({ onClick }: ArrowDownwardIconProps) => {
  return <StyledArrow onClick={onClick} />;
};

export default ArrowDownwardIcon;
