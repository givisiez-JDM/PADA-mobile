import styled from "styled-components/native";

export const ContainerViewCheckBox = styled.TouchableHighlight`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`;

export const ButtonViewCheckBox = styled.View`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const Check = styled.View`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-width: 1px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  border-color: ${({ checked }) => (checked ? "#FFFFFF" : "#4C7ABB")};
  background: ${({ checked }) =>
    checked ? "#4C7ABB" : "rgba(255,255,255,0.42)"};

  &:hover {
    background: transparent;
  }
  margin-top: 20px;
`;

export const TitleCheck = styled.Text`
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;
  margin-top: 20px;
`;
