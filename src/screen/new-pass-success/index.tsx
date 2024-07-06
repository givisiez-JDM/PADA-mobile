import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "@/src/components/Button";
import HeaderNFooter from "../../components/HeaderNFooterSVG";

import { useNavigation } from "@react-navigation/native";
import { propsStack } from "@/src/routes/Stack/Models";


const NewPassSuccess = () => {
  const navigation = useNavigation<propsStack>();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderNFooter fill={""} />
      <View style={styles.container}>
        <Text style={styles.title}>Recuperação de senha</Text>
        <Text style={styles.subtitle}>Sua nova senha foi criada com sucesso!</Text>
        <Image style={{ marginTop: 25 }} source={require("../../assets/images/image-icons/sucesso.png")} />
        <Button text="Entrar" onPress={() => navigation.navigate("Login")} />
      </View>
    </SafeAreaView>
  );
};

export default NewPassSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: '#334c76'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '300',
    marginTop: 25,
    color: '#334c76'
  }
})