import {
  ButtonClose,
  ContainerCheckItemsModal,
  ContainerContentModal,
  ContainerModalCheckVaccines,
  TextTitleModal,
} from "./modal-check-vaccines-styles";

import Icon from "react-native-vector-icons/Ionicons";
import CheckBox from "../checkBox/checkBox";
import { useState } from "react";

const ModalCheckVaccines = (props: {
  visible: boolean;
  onClose: () => void;
}) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxSelection = (index: any) => {
    setSelectedCheckbox(index);
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
        <ContainerCheckItemsModal>
          <CheckBox
            title="Apliquei na data correta"
            size="24"
            checked={selectedCheckbox === 0}
            setChecked={() => handleCheckboxSelection(0)}
          />

          <CheckBox
            title="Apliquei com atraso"
            size="24"
            checked={selectedCheckbox === 1}
            setChecked={() => handleCheckboxSelection(1)}
          />

          <CheckBox
            title="Não Apliquei"
            size="24"
            checked={selectedCheckbox === 2}
            setChecked={() => handleCheckboxSelection(2)}
          />
        </ContainerCheckItemsModal>
      </ContainerContentModal>
    </ContainerModalCheckVaccines>
  );
};

export default ModalCheckVaccines;
