import React from "react";
import { ContainerMain, ImageIconLogo } from "./login-style";
import logo from "../../assets/logo.png";
import { Image } from "react-native";

import ButtonEmailSenha from "../../components/buttonEmailSenha/buttonEmailSenha";
import Header from "../../components/header/header";
import FooterCurto from "../../components/footer/footer";
import logoEmail from "../../assets/logoEmail.png";
import logoSenha from "../../assets/logoSenha.png";
import ButtonEntrar from "../../components/buttonEntrar/buttonEntrar";
import { ContainerTelaPrincipal } from "../telaPrincipal/telaPrincipal-style";

const Login = () => {
  return (
    <ContainerTelaPrincipal>
      <Header back={true} />
      <ContainerMain>
        <ImageIconLogo source={logo} />
        <ButtonEmailSenha imageButton={logoEmail} labelButton={"E-mail"} />
        <ButtonEmailSenha imageButton={logoSenha} labelButton={"Senha"} />
        <ButtonEntrar></ButtonEntrar>
      </ContainerMain>
      <FooterCurto />
    </ContainerTelaPrincipal>
  );
};

export default Login;
