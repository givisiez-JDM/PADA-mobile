import React from "react";
import SplashScreen from "../../screen/splash-screen/splashScreen";
import { propsNavigationStack } from "./Models";
import Patient from "../../screen/patient/patient";
import TelaPrincipal from "../../screen/home/telaPrincipal";
import ProfissionalResponsavel from "../../screen/responsible-doctor/profissionalResponsavel";
import MyVaccines from "../../screen/myVaccines/my-vaccines";

import RedefinirSenha from "../../screen/password-redefine/redefinirSenha";
import PassRecovery from "../../screen/password-recovery";
import NewPassSuccess from "../../screen/new-pass-success";
import PatientLogin from "../../screen/login/login";

const { createNativeStackNavigator } = require("@react-navigation/native-stack");
const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Navigator name="Login" component={PatientLogin} />
      <Stack.Navigator name="TelaPrincipal" component={TelaPrincipal} />
      <Stack.Navigator name="Paciente" component={Patient} />
      <Stack.Navigator
        name="ProfissionalResponsavel"
        component={ProfissionalResponsavel}
      />
      <Stack.Navigator name="SplashScreen" component={SplashScreen} />
      <Stack.Navigator name="MyVaccines" component={MyVaccines} />

      <Stack.Navigator name="RedefinirSenha" component={RedefinirSenha} />
      <Stack.Navigator name="PassRecovery" component={PassRecovery} />
      <Stack.Navigator name="NewPassSuccess" component={NewPassSuccess} />
      {/* <Stack.Navigator name="TabRoutes" component={TabRoutes} /> */}
    </Stack.Navigator>
  );
}