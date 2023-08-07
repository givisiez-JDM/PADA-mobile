import styled from "styled-components/native";

export const ContainerFooter = styled.View``;

export const ImageFooterCurto = styled.Image.attrs({
  resizeMode: "stretch",
})`
  width: ${(props) => props.screenWidth};
  height: 180px;
  z-index: 1;
`;
