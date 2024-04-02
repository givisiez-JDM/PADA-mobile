import React from "react";

import GIF from "react-native-gif";

import { LoadingComponent } from "./loading-modal-style";

import gifLoading from "../../../assets/images/loading-waiting.gif";
import { ActivityIndicator } from "react-native";
import { ViewSplash } from "@/src/screen/splash-screen/splashScreen-style";

const LoadingModal = (props: { visible: boolean; onClose: () => void }) => {
  return (
    <LoadingComponent
      animationType="slide"
      transparent={false}
      visible={props.visible}
      onRequestClose={props.onClose}
    >
      {/* <GIF
          source={gifLoading}
          resizeMode="contain"
          style={{
            width: 500,
            height: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        /> */}
      <ViewSplash>
        <ActivityIndicator />
      </ViewSplash>
    </LoadingComponent>
  );
};

export default LoadingModal;
