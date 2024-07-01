import styled from "styled-components/native";

export const ContainerSafePrincipalPacientes = styled.KeyboardAvoidingView`
  flex: 1;
  display: flex;
  background: #ffffff;
`;

export const ContainerGeral = styled.View`
  display: flex;
  margin-top: 150px;
  align-items: center;
`;

export const TextTitleSucesso = styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: #334c76;
`;

export const TextSucesso = styled.Text`
  font-size: 16px;
  font-weight: 300;
  margin-top: 25px;
  color: #334c76;
`;

export const ButtonEntrar = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 50px;
  border-radius: 50px;
  background: #4c7abb;
  border: none;
  text-align: center;
  margin-top: 25px;
  &:hover {
    background: #b4b4b4;
  }
`;

export const TextButtonEntrar = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  padding: 2px;
  font-weight: bold;
  text-align: center;
`;

export const ImageSucesso = styled.Image`
  margin-top: 25px;
`;
