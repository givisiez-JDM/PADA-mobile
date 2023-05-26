import styled from "styled-components/native";

export const ButtonLoginContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 50px;
  border-radius: 50px;
  background: #4C7ABB;
  border: none;
  text-align: center;
  //margin-bottom: 7px;
  margin-top: 40px;

  &:hover {
    background: #b4b4b4;
  }
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  padding: 2px;
  font-weight: bold;
 text-align: center;
 
`;

export const ButtonImageIcon = styled.View`
margin: 12px;
padding: 3px;
padding-bottom: 2px;
`;
