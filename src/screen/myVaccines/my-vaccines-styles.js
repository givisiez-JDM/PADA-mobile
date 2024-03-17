import styled from "styled-components/native";

export const ContainerVaccinesView = styled.SafeAreaView`
  flex: 1;
  background: rgba(209, 209, 209, 0.2);
`;

export const ContainerProgressBar = styled.View`
  padding:10px;
  
  background: #ffffff;
  //box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.25);
  /* elevation: 5;  Isso adicionará sombreamento no Android 
  shadow-color: rgba(0, 0, 0, 0.25);
  shadow-offset: 4px 2px;
  shadow-opacity: 0.3;
  border-radius: 5px; */
`;

export const TextTitleProgressBar = styled.Text`
  font-weight: 700;
  font-size: 15px;
  color: #273047;
  transform: rotate(0.03deg);
`;
export const ContainerTextProgressBar = styled.View`
display:flex;
flex-direction:row;
align-items:center;
justify-content: space-between;
`;

export const TextSubTitleProgressBar = styled.Text`
  font-weight: 400;
  line-height:12px;
  font-size:8px;
  color: #273047;
  text-decoration:underline;
  `;
// border-bottom-color: #d9d9d9;

export const ContainerItemInformationVaccine = styled.View`

`;


export const ContainerLegend = styled.View`
  gap: 10px;
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