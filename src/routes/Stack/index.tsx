import React from "react";
import SplashScreen from "../../screen/splash-screen/splashScreen";
import { propsNavigationStack } from "./Models";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Patient from "../../screen/patient/patient";
import PatientRecord from "../../screen/password-creation/cadastro";
import TelaPrincipal from "../../screen/home/telaPrincipal";
import ProfissionalResponsavel from "../../screen/responsible-doctor/profissionalResponsável";
import MyVaccines from "../../screen/myVaccines/my-vaccines";
import RecuperacaoSenha from "../../screen/password-recovery/recuperacaoSenha";
import TelaSucesso from "../../screen/password-recovery-success/telaSucesso";
import PatientLogin from "../../screen/login/login";

const { Navigator, Screen } =
  createNativeStackNavigator<propsNavigationStack>();

export default function () {
  return (
    <Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Login" component={PatientLogin} />
      <Screen name="Cadastro" component={PatientRecord} />
      <Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Screen name="Paciente" component={Patient} />
      <Screen
        name="ProfissionalResponsavel"
        component={ProfissionalResponsavel}
      />
      <Screen name="SplashScreen" component={SplashScreen} />
      <Screen name="MyVaccines" component={MyVaccines} />




      <Screen name="RecuperacaoSenha" component={RecuperacaoSenha} />
      <Screen name="TelaSucesso" component={TelaSucesso} />
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
