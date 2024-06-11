import { Platform } from "react-native";
import {
  ContainerGeral,
  ContainerSafePrincipalPacientes,
  ImageSucesso,
  TextSucesso,
  TextTitleSucesso,
} from "./telaSucesso-style";
import React from "react";
import Sucesso from "../../assets/images/image-icons/sucesso.png";
import Button from "@/src/components/Buttons/button/button";
import Footer from "../../components/Footers/footerCorrect/footerCorrect";
import Header from "../../components/Footers/footerCorrect/headerCorrect";

const TelaSucesso = () => {
  return (
    <ContainerSafePrincipalPacientes
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Header  />
      <ContainerGeral>
        <TextTitleSucesso>Recuperação de senha</TextTitleSucesso>
        <TextSucesso>Sua nova senha foi criada com sucesso!</TextSucesso>
        <ImageSucesso source={Sucesso} />
        <Button buttontext="Entrar" />
      </ContainerGeral>
      <Footer />
    </ContainerSafePrincipalPacientes>
  );
};

export default TelaSucesso;
