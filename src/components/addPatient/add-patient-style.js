import styled from "styled-components/native";

export const ContainerAddPatient = styled.TouchableOpacity`
  display: flex;
  margin-left: 12%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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

export const ContainerImageAddPatient = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55.51px;
  height: 54.22px;
  background: #76a7ed;
  border-radius: 50px;
`;

export const ImageAddPatient = styled.Image.attrs({
  resizeMode: "stretch",
})`
  width: 20px;
  height: 20px;
`;

export const TextAddPatient = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
`;
