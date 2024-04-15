import {
  ButtonClose,
  ContainerCheckItemsModal,
  ContainerContentModal,
  ContainerModalCheckVaccines,
  TextInputModal,
  TextTitleModal,
} from "./modal-check-vaccines-styles";

import Icon from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";
import React from "react";
import Check from "../../Check/check";

const ModalCheckVaccines = (props: {
  visible: boolean;
  onClose: () => void;
  status: string;
}) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(false);
  const [colorBorderLeft, setColorBorderLeft] = useState('');

  const multipleOptions = [
    {
      id: 1,
      text: "Apliquei na data correta",
      color: "#5CED38",
    },
    {
      id: 2,
      text: "Apliquei com atraso",
      color: "#afafaf",
    },
    {
      id: 3,
      text: "Não apliquei",
      color: "#E85656",
    },
  ];

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
        <TextTitleModal>Monitore seu tratamento:</TextTitleModal>
        <ContainerCheckItemsModal>
        <Check
            options={multipleOptions}
            onChange={() => setColorBorderLeft('#000000')}
            multiple={false} title={""} size={""} checked={false} setChecked={function (checked: boolean): void {
              throw new Error("Function not implemented.");
            } }          />
        </ContainerCheckItemsModal>
        <TextInputModal placeholder="Observações"/> 
      </ContainerContentModal>
    </ContainerModalCheckVaccines>
  );
};

export default ModalCheckVaccines;