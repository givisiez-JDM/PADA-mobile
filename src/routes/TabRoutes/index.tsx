import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const { Screen, Navigator } = createBottomTabNavigator();
import Home from "../../assets/home.png";
import Login from "../../screen/login/login";
import TelaPrincipal from "../../screen/telaPrincipal/telaPrincipal";
import { Image } from "react-native";

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
        name="Login"
        component={TelaPrincipal}
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
