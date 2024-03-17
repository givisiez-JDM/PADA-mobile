import {
  ButtonClose,
  ContainerCheckItemsModal,
  ContainerContentModal,
  ContainerModalCheckVaccines,
  TextTitleModal,
} from "./modal-check-vaccines-styles";

import Icon from "react-native-vector-icons/Ionicons";
import CheckBox from "../../checkBox/checkBox";
import { useState } from "react";
import React from "react";

const ModalCheckVaccines = (props: {
  visible: boolean;
  onClose: () => void;
  // typeCheck: string;
}) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxSelection = (index: any) => {
    let number: any;
    if (index === "#bbf7ac") {
      number = 0;
    }
    if (index === "#FCE0AA") {
      number = 1;
    }
    if (index === "#F19A9A") {
      number = 2;
    }
    return number;
  };

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
        {/* <ContainerCheckItemsModal>
          <CheckBox
            title="Apliquei na data correta"
            size="24"
            checked={
              props.typeCheck !== "#FCE0AA" &&
                props.typeCheck !== "#F19A9A" &&
                props.typeCheck === "#bbf7ac"
                ? true
                : false
            }
          />

          <CheckBox
            title="Apliquei com atraso"
            size="24"
            checked={
              props.typeCheck !== "#bbf7ac" &&
                props.typeCheck !== "#F19A9A" &&
                props.typeCheck === "#FCE0AA"
                ? true
                : false
            }
          />

          <CheckBox
            title="Não Apliquei"
            size="24"
            checked={
              props.typeCheck !== "#bbf7ac" &&
                props.typeCheck !== "#FCE0AA" &&
                props.typeCheck === "#F19A9A"
                ? true
                : false
            }
          />
        </ContainerCheckItemsModal> */}
      </ContainerContentModal>
    </ContainerModalCheckVaccines>
  );
};

export default ModalCheckVaccines;
