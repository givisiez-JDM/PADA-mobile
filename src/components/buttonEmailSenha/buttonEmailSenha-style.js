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
  border: 2px #4c7abb;

  &:hover {
    background: #b4b4b4;
  }
`;

export const TextInputButton = styled.Text`
  color: #4c7abb;
  font-size: 22px;
  font-weight: bold;
  padding: 2px;
  font-weight: bold;
`;

export const ButtonImageIcon = styled.View`
  margin-left: 5px;
  padding: 3px;
  //padding-bottom: 2px;
  border: 2px solid red;
`;

export const ImageLogo = styled.View`
  margin-left: 10px;
`;
