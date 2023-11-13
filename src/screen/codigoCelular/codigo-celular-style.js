import styled from "styled-components/native";

export const ContainerSafe = styled.KeyboardAvoidingView`
  display: flex;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
`;

export const ContainerMain = styled.View`
  display: flex;
  margin-top: 35%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const TitleMainCodigo = styled.Text`
  position: absolute;
  top: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color: #334c76;
  z-index: 2;
`;

export const ContainerInformationCodigo = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const TitleInformationCodigo = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  color: #334c76;
`;

export const SubTitleInformationCodigo = styled.Text`
  width: 250px;
  height: 70px;
  margin-top: 20px;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  text-align: center;
  color: #334c76;
`;

export const ContainerCode = styled.View`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  margin-top: 10px;
`;

export const CodeInput = styled.TextInput`
  text-align: center;
  background: #e1e0e0;
  width: 30px;
  height: 40px;
  border-bottom-width: 1px;
  border-color: #000;
  border-radius: 1px;
  font-size: 16px;
  width: 30px;
`;

export const ButtonAdvanced = styled.TouchableOpacity`
  position: relative;
  top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 50px;
  background: #4c7abb;
  border-radius: 50px;
`;

export const TextButtonAdvanced = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  color: #fff;
`;

export const ContainerFooterBottom = styled.View`
  margin-top: 15px;
`;
