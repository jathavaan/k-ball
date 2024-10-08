import { StyledImage } from "./imageContainer.style.ts";
import { ImageContainerProps } from "./imageContainer.types.ts";

export const ImageContainer = (props: ImageContainerProps) => {
  return <StyledImage {...props} />;
};
