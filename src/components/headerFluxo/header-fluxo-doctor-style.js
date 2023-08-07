import styled from "styled-components/native";

export const ContainerSafeHeader = styled.View`
  flex: 1;
  z-index: 1;
`;

export const ContainerHeaderFluxo = styled.View`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  height: 200px;
  background: #4c7abb;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 10px;
`;

export const ContainerHeaderInformationDoctor = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const TitleHeaderDoctor = styled.Text`
  padding: 40px 0 20px 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
`;

export const ContainerInfoDoctor = styled.View`
  display: flex;
  flex-direction: row;
`

export const ContainerImageDoctor = styled.View`
  flex: 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ImageDoctor = styled.Image.attrs({
    resizeMode: "stretch",
  })`
    width: 66px;
    height: 66px;
    z-index: 1;
  `;

export const ContainerSubtitles = styled.View`
  flex: 2 0;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const SubTitleHeaderName = styled.Text`
  flex: 1 0;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
`;

export const SubTitleHeaderSpecialty  = styled.Text`
flex: 1 0;
font-style: normal;
font-size: 20px;
color: #ffffff;
`;