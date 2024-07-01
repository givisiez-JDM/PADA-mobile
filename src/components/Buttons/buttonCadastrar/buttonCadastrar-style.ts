import styled from "styled-components/native";

export const ButtonCadastrarContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 220px;
  height: 44px;
  
  border: none;
  border: 2px #4C7ABB;
  border-radius: 50px;
  
  background: #fff;

  &:hover {
    background: #b4b4b4;
  }
`;

export const TextButton = styled.Text`
text-align: center;

padding: 2px;

font-size: 22px;
font-weight: bold;

color: #4C7ABB;`;

export const ButtonImageIcon = styled.View`
margin: 12px;
padding: 3px;
padding-bottom: 2px;
`;



