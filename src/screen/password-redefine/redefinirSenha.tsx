import React, { useState } from "react";
import {
  ContainerEnviaremos,
  ImageIconLogoRedefinir,
  SubtittleRedefinePass,
  TitleRedefinePass,
  ContainerFooterBottom,
} from "./redefinirSenha-style";
import logo from "../../assets/logo/logo.png";

import Header from "../../components/Headers/header/header";
import FooterCurto from "../../components/Footers/footer/footer";
import { useNavigation } from "@react-navigation/native";
import { ContainerSafe, ImageIconLogo, Scroll } from "../login/login-style";
import { ContainerTelaPrincipal } from "../home/telaPrincipal-style";
import InputGeral from "../../components/Forms/inputGeral/inputGeral";
import { TextButton } from "../password-creation/cadastro-style";
import { propsStack } from "../../routes/Stack/Models";
import { Platform } from "react-native";
import BlueButton from "../../components/Buttons/bluebutton/BlueButton";

const RedefinirSenha = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Scroll>
        <ContainerTelaPrincipal>
          <Header back={true} />
          <ImageIconLogoRedefinir source={logo} />
          <ContainerEnviaremos>
            <TitleRedefinePass>Redefinir senha</TitleRedefinePass>
            <SubtittleRedefinePass>Enviaremos um código de 6 dígitos para você no seu e-mail.</SubtittleRedefinePass>
          </ContainerEnviaremos>

          <InputGeral inputtext={'Email'} />
          <BlueButton buttontext={'Avançar'}></BlueButton>
          <FooterCurto />
        </ContainerTelaPrincipal>
      </Scroll>
    </ContainerSafe>
  );
};

export default RedefinirSenha;
