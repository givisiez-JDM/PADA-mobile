import React from 'react';
import { ButtonBlueContainer, TextBlueButton } from './blueButton-style';

const BlueButton = (props: { buttontext: string }) => {
  return (
    <ButtonBlueContainer>
      <TextBlueButton>{props.buttontext}</TextBlueButton>
    </ButtonBlueContainer>
  )
};

export default BlueButton;