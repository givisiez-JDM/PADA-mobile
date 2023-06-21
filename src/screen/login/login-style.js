import styled from "styled-components/native";

export const ContainerMain = styled.View`
  display: flex;
  margin-top: 35%;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  text-align: center;
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
  margin-top: 75px;
  margin-bottom: 80;
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
  background: #fff;
  margin-bottom: 15px;
  border: 2px #4c7abb;
`;

export const TextInput = styled.View`
  color: #4c7abb;
  font-size: 22px;
  font-weight: bold;
  padding: 2px;
  font-weight: bold;
`;
