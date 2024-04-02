import styled from "styled-components/native";

export const ContainerDataPatient = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 15px;
  margin-left: 49px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ContainerData = styled.View`
  flex-direction: column;
  row-gap: 5px;
`;

export const TitleDataPatient = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  color: #273047;
`;

export const SubTitlePatient = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #273047;
`;

export const ButtonPatient = styled.TouchableOpacity`
  display: flex;
  width: 156px;
  height: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #4c7abb;
  border-radius: 20px;
  margin-left: 20%;
  margin-bottom: 50px;
`;

export const TextButtonPatient = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
`;

export const SubTitlePatientAllergies = styled.Text`
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  line-height: 23px;
  color: #273047;
  margin-top: 10px;
  margin-right: 50px;
`;
