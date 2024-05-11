import React from "react";
import Header from "../../components/Headers/header/header";
import { useNavigation } from "@react-navigation/native";
import { ContainerSafe, Scroll } from "../login/login-style";
import { ContainerTelaPrincipal } from "../home/telaPrincipal-style";
import { propsStack } from "../../routes/Stack/Models";
import { Platform, TextInput, View } from "react-native";
import {
  ContainerCrie,
  ButtonEmailSenhaContainer,
  TextRecuperacao,
} from "./recuperacaoSenha-style";
import { TextEnviaremos1 } from "../password-redefine/redefinirSenha-style";
import FooterSenha from "../../components/Footers/footerSenha/footerSenha";

import Button from "@/src/components/Buttons/button/button";

import { TextEnviaremos } from "../password-change/redefinirSenha-style";
import headerImg from "../../assets/images/headerAndFooter/header/headerImg.png";
import { ImageHeader } from "@/src/components/Headers/header/header-style";
import footerCurto from "../../assets/images/headerAndFooter/footer/footerCurto.png"

const RecuperacaoSenha = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Scroll>
        <ContainerTelaPrincipal>
        <ImageHeader source={headerImg}/>

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

          <Button buttontext="Continuar" />

          <FooterSenha />

        </ContainerTelaPrincipal>
      </Scroll>
    </ContainerSafe>
  );
};

export default RecuperacaoSenha;
