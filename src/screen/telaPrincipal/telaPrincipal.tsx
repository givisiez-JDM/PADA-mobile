import React, { Fragment } from "react";
import HeaderFluxo from "../../components/headerFluxo/header-fluxo";
import {
  ContainerPrincipal,
  ContainerSafePrincipal,
} from "./telaPrincipal-style";
import TagFluxo from "../../components/tagFluxo/tag-fluxo";

import Coracao from "../../assets/imgCoracao.png";
import Remedio from "../../assets/imgRemedio.png";

import { useNavigation } from "@react-navigation/native";

const TelaPrincipal = () => {
  const navigation = useNavigation();

  return (
    <ContainerSafePrincipal>
      <HeaderFluxo title="Olá" />
      <ContainerPrincipal>
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
      </ContainerPrincipal>
    </ContainerSafePrincipal>
  );
};

export default TelaPrincipal;
