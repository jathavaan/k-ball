// ArrowDownwardIcon.tsx
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ArrowDownwardIconProps } from "./ArrowDownwardIcon.types";
import { arrowStyle } from "./ArrowDownwardIcon.style";

const ArrowDownwardIcon = ({ onClick }: ArrowDownwardIconProps) => {
  return <ExpandMoreIcon style={arrowStyle} onClick={onClick} />;
};

export default ArrowDownwardIcon;
