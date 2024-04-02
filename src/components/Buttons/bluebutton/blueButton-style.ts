import styled from "styled-components/native";

export const ButtonBlueContainer = styled.View`
  width: 220px;
  padding: 8px 17px;
    
  margin-top:20px;
  
  border-radius: 50px;

  background: #4c7abb;
  border: none;

  &:hover {
    background: #b4b4b4;
  }
`;

export const TextBlueButton = styled.Text`
text-align: center;

font-size: 22px;
font-weight: bold; 

color: #fff;
`;

export const ButtonImageIcon = styled.View`
  position: relative;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;
