import React from "react";

import { ContainerModalLoading, LoadingComponent } from "./loading-modal-style";

import { ActivityIndicator } from "react-native";
import { ViewSplash } from "@/src/screen/splash-screen/splashScreen-style";

//tipagem adicionada
const LoadingModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  return (
    <LoadingComponent
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >

      <ContainerModalLoading>
        <ViewSplash>
          <ActivityIndicator />
        </ViewSplash>
      </ContainerModalLoading>
    </LoadingComponent>
  );
};

export default LoadingModal;
