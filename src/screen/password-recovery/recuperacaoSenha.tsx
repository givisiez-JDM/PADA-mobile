import React from "react";
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
import Button from "@/src/components/Buttons/button/button";
import Footer from "../../components/Footers/footerCorrect/footerCorrect";
import Header from "../../components/Footers/footerCorrect/headerCorrect";


const RecuperacaoSenha = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      
        <ContainerTelaPrincipal>
       <Header/>
    
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

          <Footer />
        </ContainerTelaPrincipal>

    </ContainerSafe>
  );
};

export default RecuperacaoSenha;
