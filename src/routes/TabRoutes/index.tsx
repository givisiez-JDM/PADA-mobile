import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Image } from "react-native";
import TelaPrincipal from "../../screen/home/telaPrincipal";
import PatientLogin from "../../screen/patient-login/patientLogin";
import React from "react";

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  const getOverviewTabIcon = (focused: boolean, nome: string) => {
    if (nome === "home") {
      return <Image source={require("../../assets/home.png")} />;
    } else {
      return <Image source={require("../../assets/logOut.png")} />;
    }
  };

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 60, backgroundColor: "#d3d3d3" },
      }}
    >
      <Screen
        name="Início"
        component={TelaPrincipal}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ focused }) => getOverviewTabIcon(focused, "home"),
          tabBarActiveBackgroundColor: "#334C76",
          tabBarActiveTintColor: "#fff",
          tabBarInactiveBackgroundColor: "#d1d1d1",
          tabBarInactiveTintColor: "#334c76",
          tabBarStyle: { height: 60 },
        }}
      ></Screen>
      <Screen
        name="PatientLogin"
        component={PatientLogin}
        options={{
          tabBarLabel: "Sair",
          tabBarIcon: ({ focused }) => getOverviewTabIcon(focused, "out"),
          tabBarStyle: { height: 60 },
          tabBarActiveBackgroundColor: "#d1d1d1",
          tabBarActiveTintColor: "#334c76",
          tabBarInactiveBackgroundColor: "#334c76",
          tabBarInactiveTintColor: "#fff",
        }}
      ></Screen>
    </Navigator>
  );
}
