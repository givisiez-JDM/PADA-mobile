import React from "react";
import { ButtonContainer, TextButton } from "./button.style";

interface ButtonProps {
    buttontext: string;
}

const Button: React.FC<ButtonProps> = ({ buttontext }) => {
    return (
        <ButtonContainer buttontext={buttontext}>
            <TextButton>{buttontext}</TextButton>
        </ButtonContainer>
    );
};

export default Button;