import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  width: ${(props) => props.screenWidth};`;

export const ImageHeader = styled.Image.attrs({
  resizeMode: "stretch",
})`
  height: 160px;
`;

export const BackgroundHeaderContainer = styled.TouchableOpacity`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 15px;
  top: 10px;
  background: #fff;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;
