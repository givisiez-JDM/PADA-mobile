import styled from "styled-components/native";

export const ContainerTagFluxo = styled.TouchableOpacity`
  width: 110px;
  height: 159px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  border-radius: 20px;
  shadow-color: rgb(0, 0, 0);
  shadow-offset: -2px 4px;
  shadow-opacity: 0.8;
  shadow-radius: 4px;
  elevation: 8;
  background: #fff;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ImageTagFluxo = styled.View`
  width: 62px;
  height: 61px;
`;

export const TitleTagFluxo = styled.Text`
  width: 98px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #273047;
  transform: rotate(0.03deg);
`;

export const TextFlagFluxo = styled.Text`
  width: 98px;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  color: #273047;
`;
