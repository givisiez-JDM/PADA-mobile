import styled from "styled-components/native";

export const ContainerFormPatient = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -50px;
`;

export const ImageLogo = styled.Image`
  width: 60px;
  height: 70px;
`;

export const TitleForm = styled.Text`
  color: #4c7abb;
  font-size: 25px;
  margin-bottom: 5px;
  font-weight: 700;
`;

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
`;

export const TitleCheck = styled.Text`
  color: #4c7abb;
  font-size: 12.8px;
  font-weight: 300;
`;

export const Button = styled.TouchableOpacity`
  width: 180px;
  height: 50px;
  margin-top: 20px;
  border-radius: 50px;
  background: #4c7abb;
  border: none;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    background: #b4b4b4;
  }
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
`;
