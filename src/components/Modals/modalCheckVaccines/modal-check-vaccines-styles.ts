import styled from "styled-components/native";

export const ContainerModalCheckVaccines = styled.Modal``;

export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const ContainerContentModal = styled.View`
  position: absolute;
  bottom: 25%;
  left: 0%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  width: 100%;
  padding: 20px;
  padding-bottom: 50px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  background: #4c7abb;
`;

export const TextTitleModal = styled.Text`
  margin-top: 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
`;

export const ContainerCheckItemsModal = styled.View`
  flex-direction: column;
  row-gap: 10px;
  margin-top: -20px;
`;

export const TextOption = styled.Text`
  font-size: 15px;
  color: #ffffff; /* Cor branca */
`;
