import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginCadastro from "../../screen/loginCadastro/loginCadastro";
import Login from "../../screen/login/login";
import { propsNavigationStack } from "./Models";
import PatientRecord from "../../screen/cadastro/cadastro";
import TelaPrincipal from "../../screen/telaPrincipal/telaPrincipal";

const { Navigator, Screen } =
  createNativeStackNavigator<propsNavigationStack>();

export default function () {
  return (
    <Navigator
      initialRouteName="LoginCadastro"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="LoginCadastro" component={LoginCadastro} />
      <Screen name="Login" component={Login} />
      <Screen name="Cadastro" component={PatientRecord} />
      <Screen name="TelaPrincipal" component={TelaPrincipal} />
    </Navigator>
  );
}
