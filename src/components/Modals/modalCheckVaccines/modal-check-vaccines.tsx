import React, { useEffect, useState } from "react";
import {
  ButtonClose,
  ContainerCheckItemsModal,
  ContainerContentModal,
  ContainerModalCheckVaccines,
  TextInputModal,
  TextTitleModal,
} from "./modal-check-vaccines-styles";

import Icon from "react-native-vector-icons/Ionicons";
import Check from "../../Check/check";

interface Option {
  id: number;
  text: string;
  color: string;
}

interface ModalCheckVaccinesProps {
  visible: boolean;
  onClose: () => void;
  status: string;
  handleStatusChange: (color: string) => void;
}

const ModalCheckVaccines: React.FC<ModalCheckVaccinesProps> = ({
  visible,
  onClose,
  status,
  handleStatusChange,
}) => {
  const multipleOptions: Option[] = [
    {
      id: 1,
      text: "Apliquei na data correta",
      color: "#5CED38",
    },
    {
      id: 2,
      text: "Apliquei com atraso",
      color: "#FACB71",
    },
    {
      id: 3,
      text: "Não apliquei",
      color: "#E85656",
    },
  ];

  const handleChange = (selectedOption: Option) => {
    handleStatusChange(selectedOption.color);
  };

  return (
    <ContainerModalCheckVaccines
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <ContainerContentModal>
        <ButtonClose onPress={onClose}>
          <Icon name="close" color="#000" size={20}/>
        </ButtonClose>
        <TextTitleModal>Monitore seu tratamento:</TextTitleModal>
        <ContainerCheckItemsModal>
          <Check
            options={multipleOptions}
            onChange={handleChange}/>
        </ContainerCheckItemsModal>
        <TextInputModal placeholder="Observações"/>
      </ContainerContentModal>
    </ContainerModalCheckVaccines>
  );
};

export default ModalCheckVaccines;