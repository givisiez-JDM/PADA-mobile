import React, { Fragment, useState } from "react";
import Header from "../../components/Headers/header/header";
import FooterCurto from "../../components/Footers/footer/footer";
import { useNavigation } from "@react-navigation/native";
import { ContainerSafe, Scroll } from "../login/login-style";
import { ContainerTelaPrincipal } from "../home/telaPrincipal-style";
import { TextButton } from "../password-creation/cadastro-style";
import { propsStack } from "../../routes/Stack/Models";
import { Platform, TextInput, View } from "react-native";
import {
  ButtonContinuar,
  ContainerCrie,
  ImageFooterSenha,
  ButtonEmailSenhaContainer,
  TextRecuperacao,
} from "./recuperacaoSenha-style";
import { TextEnviaremos1 } from "../password-redefine/redefinirSenha-style";
import footerSenhaImg from "../../assets/footerSenha.png";
import { ContainerFooter } from "../../components/Footers/footerLongo/footerLongo-style";
import FooterLongo from "../../components/Footers/footerLongo/footerLongo";
import FooterSenha from "../../components/Footers/footerSenha/footerSenha";

const RecuperacaoSenha = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Scroll>
        <ContainerTelaPrincipal>
          <Header back={true} />

          <TextRecuperacao>Recuperação de senha</TextRecuperacao>
          <ContainerCrie>
            <TextEnviaremos1>Crie sua nova senha abaixo</TextEnviaremos1>
          </ContainerCrie>

          <View>
            <ButtonEmailSenhaContainer placeholder="Nova senha" />
          </View>

          <View>
            <ButtonEmailSenhaContainer placeholder="Confirme sua senha" />
          </View>

          <ButtonContinuar>
            <TextButton>Continuar</TextButton>
          </ButtonContinuar>

          <FooterSenha />
        </ContainerTelaPrincipal>
      </Scroll>
    </ContainerSafe>
  );
};

export default RecuperacaoSenha;
