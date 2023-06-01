import React, { Fragment } from "react";
import { ContainerMain } from "./loginCadastro-style";
import logo from "../../assets/logo.png";
import { Image } from "react-native";
import ButtonLogin from "../../components/buttonLogin/buttonLogin";
import ButtonCadastrar from "../../components/buttonCadastrar/buttonCadastrar";
import Header from "../../components/header/header";
import FooterLongo from "../../components/footerLongo/footerLongo";
import { ContainerTelaPrincipal } from "../telaPrincipal/telaPrincipal-style";

const LoginCadastro = () => {
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
