import styled from "styled-components/native";

export const ContainerVaccinesView = styled.SafeAreaView`
  flex: 1;
  z-index: 0;
  background: rgba(209, 209, 209, 0.2);
`;

export const ContainerProgressBar = styled.View`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 316px;
  height: 50px;
  left: 12.5%;
  top: 150px;
  background: #ffffff;
  //box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.25);
  elevation: 5; /* Isso adicionará sombreamento no Android */
  shadow-color: rgba(0, 0, 0, 0.25);
  shadow-offset: 4px 2px;
  shadow-opacity: 0.3;
  border-radius: 5px;
`;

export const TextTitleProgressBar = styled.Text`
  font-weight: 700;
  font-size: 15px;
  color: #273047;
  transform: rotate(0.03deg);
  margin-left: 10px;
  margin-top: 5px;
`;

export const TextSubTitleProgressBar = styled.Text`
  position: absolute;
  right: 20px;
  top: 10px;
  height: 12px;
  font-weight: 400;
  font-size: 8px;
  color: #273047;
  border-bottom-width: 1px;
  border-bottom-color: #d9d9d9;
`;

export const ContainerItemInformationVaccine = styled.View`
  width: 322.67px;
  margin-left: 12%;
  margin-top: 170px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const ContainerLegend = styled.View`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 180px;
  margin-left: 50px;
`;

export const TextContainerLegend = styled.Text`
  font-weight: 700;
  font-size: 12px;
  color: #273047;
`;

export const ContainerItemsLegends = styled.View`
  flex-direction: row;
  column-gap: 10px;
`;
