import { StyledButton } from "./button.style";
import { ButtonProps } from "./button.types";


export const Button = (props: ButtonProps) => {
    return <StyledButton {...props}>{props.text}</StyledButton>
}

