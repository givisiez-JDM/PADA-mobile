import styled from "styled-components/native";

export const ContainerItemLegend = styled.View`
  flex-direction: row;
  column-gap: 10px;
`;

export const BoxLegend = styled.View`
  width: 9.68px;
  height: 9.13px;
  background-color: ${({ color }) => color};
  opacity: 0.6;
`;

export const TextItemLegend = styled.Text`
  font-weight: 700;
  font-size: 8px;
  color: #273047;
`;
