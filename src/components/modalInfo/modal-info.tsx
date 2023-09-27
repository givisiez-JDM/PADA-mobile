import { ImageSource } from "react-native-vector-icons/Icon";
import {
  ButtonCloseModal,
  ContainerModal,
  ImageModal,
  ModalComponent,
  TextModal,
} from "./modal-info-style";

const ModalInfo = (props: {
  visible: boolean;
  onClose: () => void;
  image: ImageSource;
  text: string;
}) => {
  return (
    <ModalComponent
      animationType="slide"
      transparent={false}
      visible={props.visible}
      onRequestClose={props.onClose}
    >
      <ContainerModal>
        <ImageModal source={props.image} />
        <TextModal colorText="#000">{props.text}</TextModal>
        <ButtonCloseModal onPress={props.onClose}>
          <TextModal colorText="#fff">Ok</TextModal>
        </ButtonCloseModal>
      </ContainerModal>
    </ModalComponent>
  );
};

export default ModalInfo;
