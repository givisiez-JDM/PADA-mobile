import React, { Fragment, useEffect } from "react";
import { ContainerMain } from "./loginCadastro-style";
import logo from "../../assets/logo.png";
import { Image } from "react-native";
import ButtonLogin from "../../components/buttonLogin/buttonLogin";
import ButtonCadastrar from "../../components/buttonCadastrar/buttonCadastrar";
import Header from "../../components/header/header";
import FooterLongo from "../../components/footerLongo/footerLongo";
import { ContainerTelaPrincipal } from "../telaPrincipal/telaPrincipal-style";
import { checkLoginStatus } from "../../service/requests";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

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
        <Image source={logo}></Image>
        <ButtonLogin />
        <ButtonCadastrar />
      </ContainerMain>

      <FooterLongo />
    </ContainerTelaPrincipal>
  );
};

export default LoginCadastro;
