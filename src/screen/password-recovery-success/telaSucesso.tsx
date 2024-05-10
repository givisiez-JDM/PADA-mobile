import { Platform } from "react-native";
import {
  ContainerGeral,
  ContainerSafePrincipalPacientes,
  ImageSucesso,
  TextSucesso,
  TextTitleSucesso,
} from "./telaSucesso-style";
import Header from "../../components/Headers/header/header";
import FooterCodigoCelular from "../../components/Footers/footerCodigoCelular/footer-codigo-celular";
import React from "react";
import Sucesso from "../../assets/images/image-icons/sucesso.png";
import Button from "@/src/components/Buttons/button/button";

const TelaSucesso = () => {
  return (
    <ContainerSafePrincipalPacientes
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Header back={false} />
      <ContainerGeral>
        <TextTitleSucesso>Recuperação de senha</TextTitleSucesso>
        <TextSucesso>Sua nova senha foi criada com sucesso!</TextSucesso>
        <ImageSucesso source={Sucesso} />
        <Button buttontext="Entrar" />
      </ContainerGeral>
      <FooterCodigoCelular />
    </ContainerSafePrincipalPacientes>
  );
};

export default TelaSucesso;
