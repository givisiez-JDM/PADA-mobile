import React, { Fragment } from "react";
import HeaderFluxo from "../../components/headerFluxo/header-fluxo";
import { ContainerTelaPrincipal } from "./telaPrincipal-style";
import TagFluxo from "../../components/tagFluxo/tag-fluxo";


import Coracao from "../../assets/imgCoracao.png";
import Remedio from "../../assets/imgRemedio.png";
import { Text } from "react-native";
import { Button } from "../cadastro/cadastro-style";
import { useNavigation } from "@react-navigation/native";
import Login from "../login/login";



const TelaPrincipal = () => {

  const navigation = useNavigation();

  return (
    <Fragment>
      <HeaderFluxo title="Bem vinda !" subtitle="Olá, Amanda Costa" />
      <ContainerTelaPrincipal>
        <TagFluxo
          imageTag={Coracao}
          title="Minha sáude"
          text="Seu histórico de saúde"
        />
        <TagFluxo
          imageTag={Remedio}
          title="Minhas Vacinas"
          text="Seu histórico de medicamentos"
        />
      </ContainerTelaPrincipal>
      <Text>Stack1</Text>
     
    </Fragment>
  );
};

export default TelaPrincipal;
