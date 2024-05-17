import React from "react";
import SplashScreen from "../../screen/splash-screen/splashScreen";

import Patient from "../../screen/patient/patient";
import PatientRecord from "../../screen/password-creation/cadastro";
import TelaPrincipal from "../../screen/home/telaPrincipal";
import ProfissionalResponsavel from "../../screen/responsible-doctor/profissionalResponsavel";
import MyVaccines from "../../screen/myVaccines/my-vaccines";

import RedefinirSenha from "../../screen/password-redefine/redefinirSenha";
import RecuperacaoSenha from "../../screen/password-recovery/recuperacaoSenha";
import TelaSucesso from "../../screen/password-recovery-success/telaSucesso";
import PatientLogin from "../../screen/login/login";

const { createNativeStackNavigator } = require("@react-navigation/native-stack");
const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Login"
        component={PatientLogin}
      />
      <Stack.Screen
        name="TelaPrincipal"
        component={TelaPrincipal}
      />
      <Stack.Screen
        name="Paciente"
        component={Patient}
      />
      <Stack.Screen
        name="ProfissionalResponsavel"
        component={ProfissionalResponsavel}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        name="MyVaccines"
        component={MyVaccines}
      />

      <Stack.Screen
        name="RecuperacaoSenha"
        component={RecuperacaoSenha}
      />
      <Stack.Screen
        name="TelaSucesso"
        component={TelaSucesso}
      />
    </Stack.Navigator>
  );
}