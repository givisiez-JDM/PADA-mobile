import styled, { css } from "styled-components/native";

export const MainContainerVaccine = styled.View`
  flex: 1;
  margin-botton:20px;
`;

export const ContainerHeaderVaccineFluxo = styled.View`
display:flex;  
padding:30px 20px 10px 20px;
  height: 200px;
  background: #4c7abb;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 10px;
`;

export const ContainerButtonVaccine = styled.View`
  position: absolute;
  width: 101px;
  height: 43px;
  left: 27px;
  top: 100px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

export const ContainerImagePerson = styled.View`
  display: flex;
  flex-direction:row;
  border-radius: 50px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ImagePerson = styled.Image.attrs({
  resizeMode: "cover",
})`
  border-radius: 50px;
  width: 80px;
  height: 80px;
`;

export const ContainerShadowVaccine = styled.View`
  width: 101px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50px;
  background-color: #76a7ed;
  opacity: 0.8;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 1;
  shadow-radius: 4;
`;

export const TextButtonVaccine = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
`;

export const ContainerBackFluxo = styled.TouchableOpacity`
  position: absolute;
  width: 30px;
  height: 30px;
  right: 30px;
  top: 25px;
  background: #fff;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const ContainerTitles = styled.View`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  position: absolute;
  left: 125px;
  top: 50px;
`;

export const ContainerInputSearch = styled.View`
  flex-direction: row;
`;

export const TitleHeaderFluxo = styled.Text`
margin-top:15px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
`;

export const SubTitleHeaderFluxo = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  width: 133px;
  height: 29px;
  color: #ffffff;
`;

export const ContainerDataPatient = styled.View`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  margin-top: 5px;
`;

export const TextDataPatient = styled.Text`
  width: 133px;
  height: 16px;
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 17px;
  color: #ffffff;
`;

export const ImageCalendar = styled.Image.attrs({
  resizeMode: "stretch",
})`
  z-index: 1;
`;

export const ContainerButtonsHeaderFluxo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

export const ButtonNextVaccine = styled.TouchableOpacity`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 34px;
  background: rgba(118, 167, 237, 0.6);
  border-radius: 10px;
`;

export const TextButtonNextVaccine = styled.Text`
  width: 85.77px;
  height: 27.3px;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  color: #ffffff;
`;

export const IconButtonNextVaccine = styled.View`
  position: relative;
  right: 5px;
  display: flex;
  width: 20.4px;
  height: 21.18px;
  background: #fff;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  transform: rotate(179.15deg);
`;

export const ButtonRemember = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 73px;
  height: 20px;
  background: #49895b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-top: 5px;
`;

export const TextButtonRemember = styled.Text`
  width: 43.4px;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  text-align: center;
  color: #ffffff;
`;

export const IconTime = styled.Image.attrs({
  resizeMode: "stretch",
})`
  width: 9.9px;
  height: 10.28px;
  transform: rotate(179.15deg);
`;

export const ContainerInputVaccines = styled.View`
  display: flex;
  gap:5px;
  padding:10px;
`;

export const TitleHeaderVaccines = styled.Text`
  color: #ffffff;
  //font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 700;
`;

export const ContainerInputCalendarVaccines = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InputCalendarVaccines = styled.TextInput`
width:70%;
font-size: 15px;
font-weight: 400;
color: rgba(39, 48, 71, 0.5);
background: rgba(218, 218, 218, 1);
`;

export const InputWrapper = styled.View`
display:flex;
flex-direction:row;
justify-content:space-evenly;
padding: 10px 10px 10px 0px;
border-radius: 5px;
background: rgba(218, 218, 218, 1);
`;


