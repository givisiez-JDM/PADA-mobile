import React, { useCallback } from "react";
import "react-native-gesture-handler";
import { Router } from "./src/routes/Stack/index";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/store/store";
import { Provider } from "react-redux";
import * as ScreenOrientation from "expo-screen-orientation";
import { NativeBaseProvider } from 'native-base';
import { useFonts } from 'expo-font';
import { SplashScreen } from "expo-router";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'NotoSansKR-Black': require("./src/assets/fonts/NotoSansKR-Black.otf"),
    'NotoSansKR-Bold': require("./src/assets/fonts/NotoSansKR-Bold.otf"),
    'NotoSansKR-Light': require("./src/assets/fonts/NotoSansKR-Light.otf"),
    'NotoSansKR-Medium': require("./src/assets/fonts/NotoSansKR-Medium.otf"),
    'NotoSansKR-Regular': require("./src/assets/fonts/NotoSansKR-Regular.otf"),
    'NotoSansKR-Thin': require("./src/assets/fonts/NotoSansKR-Thin.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const lockScreenOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
  };

  lockScreenOrientation();
  return (
    <NativeBaseProvider>
      <Provider store={store} children={undefined}>
        <NavigationContainer children={undefined}>
          <Router />
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}
