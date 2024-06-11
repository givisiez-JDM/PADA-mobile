import React from "react";
import { Modal} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";
import { RemoveStorage } from "../../../service/requests";
import {
  CenteredView,
  ModalView,
  ModalText,
  ButtonContainer,
  ButtonStay,
  ButtonExit,
  ButtonText
} from "./modalExit-styles";

interface ModalExitProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalExit: React.FC<ModalExitProps> = ({ modalVisible, setModalVisible }) => {
const navigation = useNavigation<NavigationProp<propsStack>>();

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <CenteredView>
        <ModalView>
          <ModalText>Tem certeza que deseja sair de sua conta?</ModalText>
          <ButtonContainer>
            <ButtonStay onPress={() => setModalVisible(false)}>
              <ButtonText>Permanecer</ButtonText>
            </ButtonStay>
            <ButtonExit
              onPress={() => {
                RemoveStorage(navigation);
                setModalVisible(false);
              }}
            >
              <ButtonText>Sair</ButtonText>
            </ButtonExit>
          </ButtonContainer>
        </ModalView>
      </CenteredView>
    </Modal>
  );
};

export default ModalExit;
