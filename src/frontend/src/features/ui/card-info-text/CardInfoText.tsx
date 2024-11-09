import { CardInfoTextProps } from "./CardInfoTextProps.ts";
import { StyledContentText, StyledTitleText } from "./cardInfoText.style.ts";
import { Box } from "@mui/material";

export const CardInfoText = ({
  titleText,
  contentText,
  ...props
}: CardInfoTextProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledContentText {...props}>{contentText}</StyledContentText>
      <StyledTitleText {...props}>{titleText}</StyledTitleText>
    </Box>
  );
};
