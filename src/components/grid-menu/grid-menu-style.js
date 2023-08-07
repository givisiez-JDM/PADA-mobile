import styled from "styled-components/native";

export const ContainerGrid = styled.View`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: -2;
`;

export const Item = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  margin-left: 10px;
  margin-right: 10px;
  width: 93px;
  height: 96px;
  shadow-color: rgb(0, 0, 0);
  shadow-offset: -2px 4px;
  shadow-opacity: 0.8;
  shadow-radius: 4px;
  elevation: 8;
  background: #fff;
  border-radius: 20px;
`;

export const ImageItem = styled.Image.attrs({
  resizeMode: "stretch",
})`
  width: 66px;
  height: 66px;
  border-radius: 50px;
`;

export const TextItem = styled.Text`
  height: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  color: #273047;
`;
