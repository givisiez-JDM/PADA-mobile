import React, { useState } from "react";
import {
  ButtonClose,
  ContainerCheckItemsModal,
  ContainerContentModal,
  ContainerModalCheckVaccines,
  TextTitleModal,
} from "./modal-check-vaccines-styles";
import Icon from "react-native-vector-icons/Ionicons";
import { Checkbox } from "native-base";
import { ViewInformationDate } from "../../Cards/itemVaccine/style";

const ModalCheckVaccines = (props: {
  colorBorderLeft: string;
  visible: boolean;
  onClose: () => void;
 
}) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null);

  /*const handleCheckboxSelection = (value: string | null) => {
    setSelectedCheckbox(value);

    switch (value) {
      case "aplicada":
        props.setColorBorderLeft('#5CED38');
        break;
      case "aplicada em atraso":
        props.setColorBorderLeft('#FACB71');
        break;
      case "não aplicada":
        props.setColorBorderLeft('#E85656');
        break;
      default:
        props.setColorBorderLeft('#000000');
        break;
    }
  }; */

  return (
    <ContainerModalCheckVaccines
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onClose}
    >
      <ContainerContentModal>
        <ButtonClose onPress={props.onClose}>
          <Icon name="close" color="#000" size={20} />
        </ButtonClose>
        <TextTitleModal>Monitore seu tratamento</TextTitleModal>
        <ContainerCheckItemsModal>
          <Checkbox
            value="aplicada"
            isChecked={selectedCheckbox === "aplicada"}
            onChange={(isSelected) => handleCheckboxSelection(isSelected ? "aplicada" : null)}
          >
            Apliquei na data correta
          </Checkbox>

          <Checkbox
            value="aplicada em atraso"
            isChecked={selectedCheckbox === "aplicada em atraso"}
            onChange={(isSelected) => handleCheckboxSelection(isSelected ? "aplicada em atraso" : null)}
          >
            Apliquei com atraso
          </Checkbox>

          <Checkbox
            value="não aplicada"
            isChecked={selectedCheckbox === "não aplicada"}
            onChange={(isSelected) => handleCheckboxSelection(isSelected ? "não aplicada" : null)}
          >
            Não Apliquei
          </Checkbox>
          <ViewInformationDate colorBorderLeft={props.colorBorderLeft} />
        </ContainerCheckItemsModal>
      </ContainerContentModal>
    </ContainerModalCheckVaccines>
  );
};

export default ModalCheckVaccines;
