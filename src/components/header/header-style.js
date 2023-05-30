import styled from "styled-components/native";

export const ContainerHeader = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
`;

export const ImageHeader = styled.Image.attrs({
  resizeMode: "stretch",
})`
  width: ${(props) => props.screenWidth};
  height: 200px;
  z-index: 1;
`;

export const ContainerBack = styled.View`
  width: 25px;
  height: 25px;
  left: 35px;
  top: 35px;
  background: #e3e3e3;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;
`;
