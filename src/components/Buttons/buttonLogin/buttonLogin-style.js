import styled from "styled-components/native";

export const ButtonLoginContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 44px;
  border-radius: 50px;
  background: #4c7abb;
  border: none;
  text-align: center;
  margin-top:20px;
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
  position: relative;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;
