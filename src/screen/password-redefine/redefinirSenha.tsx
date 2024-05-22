import React from "react";
import {
  ContainerEnviaremos,
  ImageIconLogoRedefinir,
  SubtittleRedefinePass,
  TitleRedefinePass,
} from "./redefinirSenha-style";
import logo from "../../assets/images/logo/logo.png";
import { useNavigation } from "@react-navigation/native";
import { ContainerSafe, ImageIconLogo, Scroll } from "../login/login-style";
import { ContainerTelaPrincipal } from "../home/telaPrincipal-style";
import InputGeral from "../../components/Forms/inputGeral/inputGeral";
import { Platform } from "react-native";
import { propsStack } from "@/src/routes/Stack/Models";
import Button from "@/src/components/Buttons/button/button"
import Footer from "../../components/Footers/footerCorrect/footerCorrect";
import Header from "../../components/Footers/footerCorrect/headerCorrect";;

const RedefinirSenha = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Scroll>
        <ContainerTelaPrincipal>
          <Header  />
          <ImageIconLogoRedefinir source={logo} />
          <ContainerEnviaremos>
            <TitleRedefinePass>Redefinir senha</TitleRedefinePass>
            <SubtittleRedefinePass>Enviaremos um código de 6 dígitos para você no seu e-mail.</SubtittleRedefinePass>
          </ContainerEnviaremos>

          <InputGeral inputtext={'Email'} />
          <Button buttontext={'Avançar'} />
          <Footer />
        </ContainerTelaPrincipal>
      </Scroll>
    </ContainerSafe>
  );
};

export default RedefinirSenha;
