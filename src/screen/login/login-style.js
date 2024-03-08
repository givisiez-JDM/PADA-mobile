import styled from "styled-components/native";


export const ContainerLogin = styled.View`
  flex: 1;
  align-items: center;
  gap:10px;
  width: 100%;
`;

export const TextAcesso = styled.Text`
  width: 157px;
  height: 29px;
  font-size: 22px;
  line-height: 32px;
  color: #4c7abb;
  font-weight: bold;
  text-align: left;
  margin-left: 2px;
`;

export const ButtonImageIcon = styled.View`
  margin: 12px;
  //padding: 3px;
  padding-bottom: 2px;
`;

export const ImageIconLogo = styled.Image`
  margin-top: -20px;
  margin-bottom: 30px;
`;

export const ContainerSafe = styled.KeyboardAvoidingView`
  flex: 1;
  display: flex;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
`;

export const InputLogin = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 240px;
  height: 50px;
  border-radius: 50px;
  background: red;
  margin-bottom: 15px;
  border: 2px #4c7abb;
`;

export const TextInput = styled.View`
  color: #4c7abb;
  font-size: 22px;
  padding: 2px;
`;

export const PatientInput = styled.TextInput`
width:100%;
  font-size: 15px;
  font-weight: 500;
  padding: 10px;
`;

export const ButtonSenha = styled.Text`
  font-weight: 300;
  font-size: 15px;
  color: #000000;
`;