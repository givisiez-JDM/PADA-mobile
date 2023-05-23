import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import LoginCadastro from "../../screen/loginCadastro/loginCadastro";
import Login from "../../screen/login/login"
import { propsNavigationStack } from "./Models";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function(){

  return(
    <Navigator initialRouteName="LoginCadastro" screenOptions={{headerShown:false}}>
      <Screen name="LoginCadastro" component={LoginCadastro}/>
      <Screen name="Login" component={Login}/>
    </Navigator>
  )

}