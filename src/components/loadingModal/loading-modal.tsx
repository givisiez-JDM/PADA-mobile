import { ContainerModalLoading, LoadingComponent } from "./loading-modal-style";
import GIF from "react-native-gif";
import gifLoading from "../../assets/loading-waiting.gif";

const LoadingModal = (props: { visible: boolean; onClose: () => void }) => {
  return (
    <LoadingComponent
      animationType="slide"
      transparent={false}
      visible={props.visible}
      onRequestClose={props.onClose}
    >
      <ContainerModalLoading>
        <GIF
          source={gifLoading}
          resizeMode="contain"
          style={{ width: 200, height: 200 }}
        />
      </ContainerModalLoading>
    </LoadingComponent>
  );
};

export default LoadingModal;
