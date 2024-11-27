import { Box } from "@mui/material";
import { CardInfoTextProps } from "@features/ui/card-info-text/CardInfoTextProps.ts";
import {
  StyledContentText,
  StyledTitleText,
} from "@features/ui/card-info-text/cardInfoText.style.ts";

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
