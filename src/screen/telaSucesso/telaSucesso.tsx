import { Platform } from "react-native";
import {
  ButtonEntrar,
  ContainerGeral,
  ContainerSafePrincipalPacientes,
  ImageSucesso,
  TextButtonEntrar,
  TextSucesso,
  TextTitleSucesso,
} from "./telaSucesso-style";
import Header from "../../components/Headers/header/header";
import FooterCodigoCelular from "../../components/Footers/footerCodigoCelular/footer-codigo-celular";
import React from "react";
import Sucesso from "../../assets/image-icons/sucesso.png";

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
        <ButtonEntrar>
          <TextButtonEntrar>Entrar</TextButtonEntrar>
        </ButtonEntrar>
      </ContainerGeral>
      <FooterCodigoCelular />
    </ContainerSafePrincipalPacientes>
  );
};

export default TelaSucesso;
