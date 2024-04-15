import styled from "styled-components/native";

export const ContainerModalCheckVaccines = styled.Modal``;

export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const ContainerContentModal = styled.View`
  position: absolute;
  bottom: 60px;
  left: 0%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  width: 100%;
  padding: 10px;
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
  row-gap: 20px;
`;

export const TextInputModal = styled.TextInput.attrs({
  placeholderTextColor: '#ffffff',
  multiline: true,
  textAlignVertical: 'top',
  numberOfLines: 10,
  
 })`
  margin-top: 10px;
  width: 75%;
  max-height: 130px;
  background-color: #94afd6;
  border-radius: 8px;
  color: #ffffff;
  font-size: 12px;
  padding: 10px;
  overflow: hidden;
  line-height: 18px;
`;

export const TextOption = styled.Text`
  font-size: 15px;
  color: #ffffff; 
`;
