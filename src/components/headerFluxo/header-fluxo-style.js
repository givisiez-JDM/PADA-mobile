import styled from "styled-components/native";

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
  margin-top: 38px;
  margin-left: 40px;
`;

export const TitleHeaderFluxo = styled.Text`
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 43px;
  color: #ffffff;
`;

export const SubTitleHeaderFluxo = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
`;
