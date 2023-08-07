import styled from "styled-components/native";

export const ContainerFooter = styled.View`
  position: relative;
  bottom: 0;
`;

export const ImageFooterLongo = styled.Image.attrs({
  resizeMode: "stretch",
})`
  width: ${(props) => props.screenWidth};
  z-index: 1;
`;
