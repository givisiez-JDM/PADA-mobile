import styled from "styled-components/native";

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalView = styled.View`
  width: 300px;
  background-color: #4b7abb;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const ModalText = styled.Text`
  margin-bottom: 20px;
  text-align: center;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 20;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 20px;
  padding: 10px;
  width: 100px;
`;

export const ButtonStay = styled(Button)`
  background-color: #76a7ec;
`;

export const ButtonExit = styled(Button)`
  background-color: #76a7ec;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;
