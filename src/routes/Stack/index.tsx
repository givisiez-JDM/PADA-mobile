import React from "react";

import LoginCadastro from "../../screen/loginCadastro/loginCadastro";
import Login from "../../screen/login/login";
import { propsNavigationStack } from "./Models";
import PatientRecord from "../../screen/cadastro/cadastro";
import TelaPrincipal from "../../screen/telaPrincipal/telaPrincipal";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TabRoutes } from "../TabRoutes";


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
      <Screen name="TelaPrincipal" component={TabRoutes} />
      {/* <Screen name="TabRoutes" component={TabRoutes} /> */}
    </Navigator>



  );
}

