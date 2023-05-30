import React from "react";
import { StyleSheet } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#808080",
    alignItems: "center",
    justifyContent: "center",
  },
});
