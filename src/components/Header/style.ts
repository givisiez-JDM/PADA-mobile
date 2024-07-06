import { units } from "@/src/hooks/hooks";
import styled, { css } from "styled-components/native";

export const ContainerSafeHeader = styled.View`
  flex:1px;
  margin-bottom:20px;
`;

export const ContainerHeaderFluxo = styled.View`
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  height: 200px;
  background: #4c7abb;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 10px;
`;



export const ContainerHeaderFluxo162 = styled.View`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  height: 162px;
  background:#4c7abb ;
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
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  position: absolute;
  height:66px;
  left: 13px;
  top: 25px;
  border-radius: 50px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  gap:10px;
`;

export const ContainerImagePersonPrincipal = styled.View`
  display: flex;
  flex-direction: row;
  position: absolute;
  height:66px;
  left:15px;
  top: 24px;
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
  /* shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 1;
  shadow-radius: 4; */
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
  left: 30%;
  top: 35px;
 
`;

export const ContainerTitlesPatiente = styled.View`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  position: absolute;
  left: 35%;
  top: 95px;
 
`;

export const ContainerTitlesPrincipal = styled.View`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  position: absolute;
  left: 35%;
  top: 95px;
 
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


export const ContainerDataPatient = styled.View`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  margin-top: 5px;
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



export const ContainerInputCalendarVaccines = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 47.5px;
`;

// Doctor

export const ContainerHeaderInformationDoctor = styled.View`
  display: flex;
  align-items: flex-start;
  margin-left:5px;
  padding:5px;
 
`;

export const ContainerInfoDoctor = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left:32px;
  
`;

export const ContainerImageDoctor = styled.View`
  flex: 1 0;
  display: flex;
  border-radius: 50px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ImageDoctor = styled.Image.attrs({
  resizeMode: "cover",
})`
  border-radius: 50px;
  width: 66px;
  height: 66px;
`;

export const ContainerSubtitles = styled.View`
padding-right:160px;
margin-bottom: 10px;
gap:8px;
`;

// pagina principal

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

