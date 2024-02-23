import React, { useState } from "react";
import {
  ButtonAvancar,
  ContainerEnviaremos,
  ImageIconLogoRedefinir,
  TextEnviaremos,
  TextEnviaremos1,
  TextRedefinir,
  ContainerFooterBottom,
} from "./redefinirSenha-style";
import logo from "../../assets/logo/logo.png";

import Header from "../../components/Headers/header/header";
import FooterCurto from "../../components/Footers/footer/footer";
import { useNavigation } from "@react-navigation/native";
import { ContainerSafe, ImageIconLogo, Scroll } from "../login/login-style";
import { ContainerTelaPrincipal } from "../telaPrincipal/telaPrincipal-style";
import InputGeral from "../../components/Forms/inputGeral/inputGeral";
import { TextButton } from "../cadastro/cadastro-style";
import { propsStack } from "../../routes/Stack/Models";
import { Platform } from "react-native";

const RedefinirSenha = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Scroll>
        <ContainerTelaPrincipal>
          <Header back={true} />
          <ImageIconLogoRedefinir source={logo} />
          <TextRedefinir>Redefinir senha</TextRedefinir>
          <ContainerEnviaremos>
            <TextEnviaremos>Enviaremos um código de 6 dígitos </TextEnviaremos>
            <TextEnviaremos1>para você no seu e-mail.</TextEnviaremos1>
          </ContainerEnviaremos>

          <InputGeral />

          <ButtonAvancar>
            <TextButton>Avançar</TextButton>
          </ButtonAvancar>

          <ContainerFooterBottom>
            <FooterCurto />
          </ContainerFooterBottom>
        </ContainerTelaPrincipal>
      </Scroll>
    </ContainerSafe>
  );
};

export default RedefinirSenha;
