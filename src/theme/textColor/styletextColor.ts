import styled from 'styled-components/native';

export const SubtitleText = styled.Text`
  font-size: ${props => props.theme.textSize.title};
  font-family: ${props => props.theme.fontType.main};
  font-weight: ${props => props.theme.textWeight.normal};
  color: ${props => props.theme.colors.main};
`;

export const TextHeaderTitle = styled.Text`
  font-size: ${props => props.theme.textSize.title};
  font-family: ${props => props.theme.fontType.main};
  font-weight: ${props => props.theme.textWeight.bold};
  color: ${props => props.theme.colors.main};
`;

export const TitleHeaderDoctor = styled.Text`
  padding: 30px 0 15px 40px;
  font-style: normal;
  font-weight: ${props => props.theme.textWeight.bold};
  font-size: ${props => props.theme.textSize.title};
  line-height: 29px;
  color: ${props => props.theme.colors.main};
  font-family: ${props => props.theme.fontType.main};
`;

export const BoldTextTitle = styled.Text`
  font-size: ${props => props.theme.textSize.textDefault};
  font-weight: ${props => props.theme.textWeight.bold};
  color: ${props => props.theme.colors.darkerBlue};
  font-family: ${props => props.theme.fontType.main};
`;

export const BaseText = styled.Text`
  font-size: ${props => props.theme.textSize.textDefault};
  font-weight: ${props => props.theme.textWeight.soft};
  color: ${props => props.theme.colors.darkerBlue};
  font-family: ${props => props.theme.fontType.main};
`;

export const TitleHeaderVaccines = styled.Text`
  color: ${props => props.theme.colors.main};
  font-size: ${props => props.theme.textSize.textDefault};
  font-weight: ${props => props.theme.textWeight.bold};
  padding-top: 18px;
  font-family: ${props => props.theme.fontType.main};
`;

export const TextTitleProgressBar = styled.Text`
  font-weight: ${props => props.theme.textWeight.bold};
  font-size: ${props => props.theme.textSize.smallerTittle};
  color: ${props => props.theme.colors.darkerBlue};
  transform: rotate(0.03deg);
  font-family: ${props => props.theme.fontType.main};
`;

export const SubTitleHeaderFluxo = styled.Text`
  font-style: normal;
  font-weight: ${props => props.theme.textWeight.softer};
  font-size: ${props => props.theme.textSize.smallerTittle};
  line-height: 15px;
  width: 140px;
  height: 29px;
  color: ${props => props.theme.colors.main};
  text-decoration: underline;
  font-family: ${props => props.theme.fontType.main};
`;

export const TextDataVaccine = styled.Text`
  font-size: ${props => props.theme.textSize.smallText};
  font-weight: ${props => props.theme.textWeight.semiBold};
  color: ${props => props.theme.colors.darkerBlue};
  font-family: ${props => props.theme.fontType.main};
`;

export const TextCheckBoxAllergy = styled.Text`
  font-size: ${props => props.theme.textSize.smallText};
  font-weight: ${props => props.theme.textWeight.soft};
  color: ${props => props.theme.colors.darkerBlue};
  font-family: ${props => props.theme.fontType.main};
`;

export const InfoText = styled.Text`
  font-size: ${props => props.theme.textSize.smallText};
  font-weight: ${props => props.theme.textWeight.softer};
  color: ${props => props.theme.colors.darkerBlue};
  font-family: ${props => props.theme.fontType.main};
`;

export const TitleCard = styled.Text`
  font-size: ${props => props.theme.textSize.smallerText};
  font-weight: ${props => props.theme.textWeight.bold};
  color: ${props => props.theme.colors.darkerBlue};
  font-family: ${props => props.theme.fontType.main};
`;

export const TextCard = styled.Text`
  font-size: ${props => props.theme.textSize.dropDownText};
  font-weight: ${props => props.theme.textWeight.softer};
  color: ${props => props.theme.colors.darkerBlue};
  text-align: center;
  font-family: ${props => props.theme.fontType.main};
`;

export const SubtitlePrincipal = styled.Text`
  width: 125.77px;
  height: 27.3px;
  font-style: normal;
  font-weight: ${props => props.theme.textWeight.semiBold};
  font-size: ${props => props.theme.textSize.dropDownText};
  line-height: 14px;
  color: ${props => props.theme.colors.main};
  font-family: ${props => props.theme.fontType.main};
`;
