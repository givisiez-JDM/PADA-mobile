import React from "react";

import LoginCadastro from "../../screen/loginCadastro/loginCadastro";
import Login from "../../screen/login/login";
import { propsNavigationStack } from "./Models";
import PatientRecord from "../../screen/cadastro/cadastro";
import TelaPrincipal from "../../screen/telaPrincipal/telaPrincipal";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PatientList from "../../screen/listaPacientes/lista-pacientes";
import Patient from "../../screen/paciente/patient";
import ProfissionalResponsavel from "../../screen/profissionalResponsável/profissionalResponsável";
import MyVaccines from "../../screen/minhasVacinas/my-vaccines";

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
      <Screen name="Paciente" component={Patient} />
      <Screen
        name="ProfissionalResponsavel"
        component={ProfissionalResponsavel}
      />
      <Screen name="MyVaccines" component={MyVaccines} />
      {/* <Screen name="TabRoutes" component={TabRoutes} /> */}
    </Navigator>
  );
}

/*
      <Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Screen name="ListaPacientes" component={PatientList} />
      <Screen name="Paciente" component={Patient} />
      <Screen
        name="ProfissionalResponsavel"
        component={ProfissionalResponsavel}
      />
      <Screen name="MyVaccines" component={MyVaccines} />
      */
