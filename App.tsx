import React from "react";
import "react-native-gesture-handler";
import Route from "./src/routes/Stack/index";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/store/store";
import { Provider } from "react-redux";
import * as ScreenOrientation from "expo-screen-orientation";

export default function App() {
  const lockScreenOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
  };

  lockScreenOrientation();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </Provider>
  );
}
