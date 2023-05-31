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
