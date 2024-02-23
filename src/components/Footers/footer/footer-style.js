import styled from "styled-components/native";

export const ContainerFooter = styled.View`
 width: ${(props) => props.screenWidth};`;

export const ImageFooterCurto = styled.Image.attrs({
  resizeMode: "stretch",
})`
  height: 120px;
`;

export const FooterText = styled.Text`
font-size:16px`;