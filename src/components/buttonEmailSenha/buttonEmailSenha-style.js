import styled from "styled-components/native";

export const ButtonEmailSenhaContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 240px;
  height: 50px;
  border-radius: 50px;
  background: #fff;
  margin-bottom: 15px;
  border: 2px #4C7ABB;

  &:hover {
    background: #b4b4b4;
  }
`;

export const TextButton = styled.Text`
  color: #4C7ABB;
  font-size: 22px;
  font-weight: bold;
  padding: 2px;
  font-weight: bold;
 
`;

export const ButtonImageIcon = styled.View`
margin-right: 50px;
padding: 3px;
//padding-bottom: 2px;

`;

export const ImageLogo = styled.View`
  margin-left: 4px;

`;