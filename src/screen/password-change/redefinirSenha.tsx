import React from "react";
import {
  ContainerEnviaremos,
  ImageIconLogoRedefinir,
  TextEnviaremos,
  TextEnviaremos1,
  TextRedefinir,
  ContainerFooterBottom,
} from "./redefinirSenha-style";
import logo from "../../assets/images/logo/logo.png";

import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";
import { propsStack } from "@/src/routes/Stack/Models";
import InputGeral from "@/src/components/Forms/inputGeral/inputGeral";
import { ContainerTelaPrincipal } from "../home/telaPrincipal-style";
import { ContainerSafe, Scroll } from "../login/login-style";
import Button from "@/src/components/Buttons/button/button";
import Footer from "../../components/Footers/footerCorrect/footerCorrect";
import Header from "../../components/Footers/footerCorrect/headerCorrect";

const RedefinirSenha = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Scroll>
        <ContainerTelaPrincipal>
          <Header />
          <ImageIconLogoRedefinir source={logo} />
          <TextRedefinir>Redefinir senha</TextRedefinir>
          <ContainerEnviaremos>
            <TextEnviaremos>Enviaremos um código de 6 dígitos </TextEnviaremos>
            <TextEnviaremos1>para você no seu e-mail.</TextEnviaremos1>
          </ContainerEnviaremos>

          <InputGeral inputtext={undefined} />

          <Button buttontext="Avançar" />

          <ContainerFooterBottom>

          <Footer/>

          </ContainerFooterBottom>
        </ContainerTelaPrincipal>
      </Scroll>
    </ContainerSafe>
  );
};

export default RedefinirSenha;
