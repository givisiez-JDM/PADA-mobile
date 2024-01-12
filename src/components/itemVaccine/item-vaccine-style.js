import styled from "styled-components/native";

export const ContainerItemInformationVaccine = styled.View`
  width: 322.67px;
  margin-left: 12%;
  margin-top: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonInformationVaccine = styled.TouchableOpacity`
  width: 370px;
  height: ${({ expanded }) => (expanded ? "91.25px" : "48.68px")};
  background: #ffffff;
  border-bottom-width: 2px;
  border-bottom-color: rgba(76, 122, 187, 0.5);
`;

export const ViewInformationDate = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 35px;
  margin-top: 5px;
  border-right-width: 1px;
  border-left-width: 4px;
  border-left-color: ${({ colorBorderLeft }) => colorBorderLeft};
  border-right-color: #4c7abb;
`;

export const ContainerNameVaccine = styled.View`
  flex: 1;
  display: flex;
  position: absolute;
  top: 5px;
  left: 170px;
  width: 160px;
  height: 22px;
  background: rgba(76, 122, 187, 0.1);
  border-radius: 10px;
`;

export const TextNameVaccine = styled.Text`
  font-weight: 500;
  font-size: 13px;
  color: #273047;
  margin-left: 10px;
  margin-top: 2px;
`;

export const TextDateInformation = styled.Text`
  width: 120px;
  font-weight: 500;
  font-size: 12px;
  color: #273047;
  margin-left: 2px;
`;

export const TextHourInformation = styled.Text`
  width: 120px;
  font-weight: 500;
  font-size: 12px;
  color: #273047;
  margin-left: 2px;
`;

export const MainContentVaccine = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const HiddenContent = styled.View`
  position: absolute;
  right: 25px;
  top: 30px;
  display: ${({ expanded }) => (expanded ? "flex" : "none")};
  width: 165px;
  height: 52px;
  background: rgba(76, 122, 187, 0.1);
  border-radius: 10px;
  padding-left: 8px;
  padding-top: 2px;
`;

export const TextHiddenContent = styled.Text`
  width: 150px;
  height: 52px;
  font-weight: 300;
  font-size: 10px;
  line-height: 10px;
  color: #273047;
`;

export const ExpandedContainer = styled(ButtonInformationVaccine)`
  height: 150px;
`;

export const ViewItemHidden = styled.TouchableHighlight`
  position: absolute;
  right: 15px;
  top: 5px;
  width: 9.09px;
  height: 18.26px;
`;

export const ImageHidden = styled.Image`
  width: 18px;
  height: 25px;
  transform: ${({ expanded }) =>
    expanded ? "rotate(180deg)" : "rotate(0deg)"};
`;
