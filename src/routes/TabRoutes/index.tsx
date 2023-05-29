import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Screen, Navigator } = createBottomTabNavigator()

import  Login  from "../../screen/login/login"
import TelaPrincipal from "../../screen/telaPrincipal/telaPrincipal";

export function TabRoutes(){

  return(
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Início" 
              component={TelaPrincipal}
              options={{tabBarLabel: "Início"}}
      ></Screen>
      <Screen name="Login" 
              component={TelaPrincipal}
              options={{tabBarLabel: "Sair"}}
      ></Screen>
    </Navigator>
  )

}