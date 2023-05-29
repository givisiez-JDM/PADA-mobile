import React from "react";
import "react-native-gesture-handler";
import Route from "./src/routes/Stack/index";
import { NavigationContainer } from "@react-navigation/native";





export default function App() {
  return (
  
   <NavigationContainer>
   <Route />
   </NavigationContainer>
    
  
  );
}
