import styled from "styled-components/native";

export const ContainerFooter = styled.View`
  position: relative;
  width: 500vw;
  bottom: 0;
  margin-top: 10px;
`;

export const ImageFooterLongo = styled.Image.attrs({
  resizeMode: "stretch",
})`
  width: ${(props) => props.screenWidth};
  z-index: 1;
`;