import React from 'react';
import { ButtonBlueContainer, TextBlueButton } from './blueButton-style';

const BlueButton = ({ buttontext }) => {
  return (
    <ButtonBlueContainer>
      <TextBlueButton>{buttontext}</TextBlueButton>
    </ButtonBlueContainer>
  )
};

export default BlueButton;