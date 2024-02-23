import styled from "styled-components/native";

export const ContainerFooter = styled.View`
  width: ${(props) => props.screenWidth};
`;

export const ImageFooterLongo = styled.Image.attrs({
  resizeMode: "stretch",
})`
 height: 140px
`;
