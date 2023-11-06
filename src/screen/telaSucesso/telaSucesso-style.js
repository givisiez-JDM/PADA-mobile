import styled from "styled-components/native";

export const ContainerSafePrincipalPacientes = styled.KeyboardAvoidingView`
  flex: 1;
  display: flex;
  background: #d1d1d1;
`;

export const ContainerGeral = styled.View`
  display: flex;
  margin-top: 230px;
`;

export const TextTitleSucesso = styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: #334C76;
`;
export const TextSucesso = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: #334C76;
`;

export const ButtonEntrar = styled.View`
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
  margin-top: 60px;
  margin-bottom: 40px;

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
  margin-top: 150px;
  margin-bottom: 30px;
`;