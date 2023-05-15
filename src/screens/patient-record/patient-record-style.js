import styled from "styled-components/native";

export const ContainerFormPatient = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const TitleForm = styled.Text`
  color: #334c76;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const ContainerIconForm = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const IconForm = styled.View`
  width: 25px;
  height: 25px;
  background: #253248;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
`;

export const ContainerIconInput = styled.View`
  width: 25px;
  border-bottom-width: 2px;
  border-bottom-color: #4c7abb;
  padding: 10px;
  position: relative;
  left: 2px;
`;

export const Input = styled.TextInput`
  width: 260px;
  border-bottom-width: 2px;
  border-bottom-color: #4c7abb;
  padding: 10px;
  color: #334c76;
  z-index: 1;
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
  border-color: ${({ checked }) => (checked ? "#334C76" : "#000")};
  background: ${({ checked }) => (checked ? "#334C76" : "#F1F2F3")};
`;

export const TitleCheck = styled.Text`
  color: #334c76;
  font-size: 12.8px;
  font-weight: 300;
`;

export const Button = styled.TouchableOpacity`
  width: 180px;
  height: 50px;
  margin-top: 20px;
  border-radius: 50px;
  background: #334c76;
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
