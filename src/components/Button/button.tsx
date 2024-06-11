import React from "react";
import { ButtonContainer, TextButton } from "./button.style";

interface ButtonProps {
    buttontext: string;
    onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ buttontext, onPress }) => {
    return (
        <ButtonContainer buttontext={buttontext} onPressIn={onPress}>
            <TextButton>{buttontext}</TextButton>
        </ButtonContainer>
    );
};

export default Button;