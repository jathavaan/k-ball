export interface ImageContainerProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}
