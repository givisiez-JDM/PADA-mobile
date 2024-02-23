import styled from "styled-components/native";

export const ModalComponent = styled.Modal``;

export const ContainerModal = styled.View`
  position: relative;
  top: 25%;
  left: 10%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  width: 80%;
  height: 250px;
  border-radius: 10px;
  background: rgba(255, 255, 255);
`;

export const ImageModal = styled.Image.attrs({
  resizeMode: "stretch",
})`
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

export const ButtonCloseModal = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 150px;
  height: 50px;
  border-radius: 20px;
  background: #4c7abb;
  margin-top: 10px;
`;

export const TextModal = styled.Text`
  font-size: 25px;
  font-weight: 700;
  color: ${({ colorText }) => colorText};
`;
