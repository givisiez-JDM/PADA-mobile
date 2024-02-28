import styled, { css } from "styled-components/native";

export const ContainerSafeHeader = styled.View`
  flex: 1;
  z-index: 1;
`;

export const ContainerHeaderFluxo = styled.View`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
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

export const ContainerHeaderInformationPerson = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerImagePerson = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 66px;
  height: 66px;
  left: 40px;
  top: 40px;
  border-radius: 50px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ImagePerson = styled.Image.attrs({
  resizeMode: "cover",
})`
  border-radius: 50px;
  width: 80px;
  height: 80px;
  z-index: 1;
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
  width: 25px;
  height: 25px;
  right: 15px;
  top: 23px;
  background: #fff;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  z-index: 3;
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

export const ContainerHeaderVaccines = styled.View`
  display: flex;
  flex-direction: column;
  position: relative;
  left: -100px;
  top: 35px;
`;

export const TitleHeaderVaccines = styled.Text`
  color: #273047;
  //font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 700;
`;

export const ContainerInputCalendarVaccines = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 47.5px;
`;

export const InputCalendarVaccines = styled.TextInput`
  background: rgba(218, 218, 218, 1);
  width: 280px;
  height: 47.5px;
  color: rgba(39, 48, 71, 0.5);
  font-size: 15px;
  font-weight: 400;
`;

export const IconWrapper = styled.View`
  background: rgba(218, 218, 218, 1);
  width: 35px;
  height: 47.5px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const IconWrapperCalendar = styled.View`
  background: rgba(218, 218, 218, 1);
  width: 50px;
  height: 47.5px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  position: relative;
  left: -1px;
  z-index: 5;
`;
