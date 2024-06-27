import React from "react";
import SplashScreen from "../../screen/splash-screen/splashScreen";
import { propsNavigationStack } from "./Models";
import Profile from "../../screen/profile";
import Home from "../../screen/home";
import Doctor from "../../screen/responsible-doctor";
import MyVaccines from "../../screen/myVaccines";

import PassCreation from "../../screen/password-creation";
import PassRedefine from "../../screen/password-redefine";
import PassChange from "../../screen/password-change";
import PassRecovery from "../../screen/password-recovery";
import NewPassSuccess from "../../screen/new-pass-success";
import PatientLogin from "../../screen/login";

const { createNativeStackNavigator } = require("@react-navigation/native-stack");
const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={PatientLogin} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Doctor" component={Doctor} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="MyVaccines" component={MyVaccines} />

      <Stack.Screen name="PassCreation" component={PassCreation} />
      <Stack.Screen name="PassChange" component={PassChange} />
      <Stack.Screen name="PassRedefine" component={PassRedefine} />
      <Stack.Screen name="PassRecovery" component={PassRecovery} />
      <Stack.Screen name="NewPassSuccess" component={NewPassSuccess} />
      {/* <Stack.Navigator name="TabRoutes" component={TabRoutes} /> */}
    </Stack.Navigator>
  );
}