import React, { useEffect } from "react";
import { ContainerMain } from "./loginCadastro-style";
import logo from "../../assets/logo/logo.png";
import { Image, TouchableOpacity } from "react-native";
import ButtonCadastrar from "../../components/Buttons/buttonCadastrar/buttonCadastrar";
import Header from "../../components/Headers/header/header";
import FooterLongo from "../../components/Footers/footerLongo/footerLongo";
import { ContainerTelaPrincipal } from "../telaPrincipal/telaPrincipal-style";
import { checkLoginStatus } from "../../service/requests";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";
import BlueButton from "../../components/Buttons/bluebutton/BlueButton";

const LoginCadastro = () => {
  const navigation = useNavigation<propsStack>();

  useEffect(() => {
    const checkStatus = async () => {
      const isLoggedIn = await checkLoginStatus();
      if (isLoggedIn) {
        navigation.navigate("TelaPrincipal");
      }
    };

    checkStatus();
  }, []);

  return (
    <ContainerTelaPrincipal>
      <Header back={false} />
      <ContainerMain>
        <Image source={logo} />

        <TouchableOpacity onPress={() => navigation.navigate("Login", { name: "Login" })}>
          <BlueButton buttontext={'Login'} />
        </TouchableOpacity>

        <ButtonCadastrar />
      </ContainerMain>
      <FooterLongo />
    </ContainerTelaPrincipal>
  );
};

export default LoginCadastro;
