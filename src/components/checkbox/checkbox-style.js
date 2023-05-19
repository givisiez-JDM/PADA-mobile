import styled from "styled-components/native";

export const ContainerViewCheckBox = styled.TouchableHighlight`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  margin-top: 10px;
  margin-left: -120px;
`;

export const ButtonViewCheckBox = styled.View`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const Check = styled.View`
  width: 15px;
  height: 15px;
  border-width: 1px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  border-color: ${({ checked }) => (checked ? "#4C7ABB" : "#4C7ABB")};
  background: ${({ checked }) => (checked ? "#4C7ABB" : "#F1F2F3")};

  &:hover {
    background: transparent;
  }
`;

export const TitleCheck = styled.Text`
  color: #4c7abb;
  font-size: 12.8px;
  font-weight: 300;
`;
