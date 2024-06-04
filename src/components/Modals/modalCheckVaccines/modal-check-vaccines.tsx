import {
  ButtonClose,
  ContainerCheckItemsModal,
  ContainerContentModal,
  ContainerModalCheckVaccines,
  TextTitleModal,
} from "./modal-check-vaccines-styles";

import Icon from "react-native-vector-icons/Ionicons";
import CheckBox from "../../checkBox/checkBox";
import { useEffect, useState } from "react";
import React from "react";


const ModalCheckVaccines = (props: {
  visible: boolean;
  onClose: () => void;
  status: string;
}) => {
  //tipagem adicionada
  const [selectedCheckbox, setSelectedCheckbox] = useState<boolean>(false);
  const [colorBorderLeft, setColorBorderLeft] = useState<string>('');

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

  useEffect(() => {

  }, [])

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

          {/* <CheckBox
            title="Apliquei na data correta"
            size="24"
            status='aplicada'
            checked={selectedCheckbox}
            setSelectedCheckbox={setSelectedCheckbox}
          />

          <CheckBox
            title="Apliquei com atraso"
            size="24"
            status='aplicada em atraso'
            checked={selectedCheckbox}
            setSelectedCheckbox={setSelectedCheckbox}
          />

          <CheckBox
            title="Não Apliquei"
            size="24"
            status='não aplicada'
            checked={selectedCheckbox}
            setSelectedCheckbox={setSelectedCheckbox}
          /> */}
        </ContainerCheckItemsModal>
      </ContainerContentModal>
    </ContainerModalCheckVaccines>
  );
};

export default ModalCheckVaccines;
