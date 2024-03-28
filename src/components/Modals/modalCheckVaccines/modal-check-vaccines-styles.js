import styled from "styled-components/native";

export const ContainerModalCheckVaccines = styled.Modal``;

export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const ContainerContentModal = styled.View` 
  position: absolute;
  bottom: 0%;
  left: 0%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  width: 410px;
  height: 410px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  background: #4c7abb;
  
`;

export const TextTitleModal = styled.Text`
  margin-top: 50px;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
`;

export const ContainerCheckItemsModal = styled.View`
  flex-direction: column;
  row-gap: 10px;
  margin-top: 10px;
`;

export const TextInputModal = styled.TextInput.attrs({
  placeholderTextColor: '#ffffff',
 })`
  margin-top: 10px;
  width: 60%;
  height: 35%;
  background-color: #94afd6;
  border-radius: 8px;
  color: #ffffff;
  text-align: left;
  padding-bottom: 90px;
  padding-left: 10px;

  // falta setar o tipo de estado que o checkbox esta selecionado ou nao, o que tem feito, e o tipo de cor do checkbox e nao a opropriedade de selecionar ele. Colocar uma propriedade de gerenciamento de estado //
 `;

