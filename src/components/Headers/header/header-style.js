import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  width: ${(props) => props.screenWidth};`;

export const ImageHeader = styled.Image.attrs({
  resizeMode: "stretch",
})`
  height: 160px;
`;

export const BackgroundHeaderContainer = styled.TouchableOpacity`
position:absolute;
top:30px;
left:15px;

width: 25px;
height: 25px;

background: #fff;
border-radius: 50px;
justify-content: center;
align-items: center;
`;
