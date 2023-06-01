import React, { Fragment } from "react";
import HeaderFluxo from "../../components/headerFluxo/header-fluxo";
import {
  ContainerPrincipal,
  ContainerSafePrincipal,
} from "./telaPrincipal-style";
import TagFluxo from "../../components/tagFluxo/tag-fluxo";

import Coracao from "../../assets/imgCoracao.png";
import Remedio from "../../assets/imgRemedio.png";
import Paciente from "../../assets/imgPaciente.png";

import { useNavigation } from "@react-navigation/native";

const TelaPrincipal = () => {
  const navigation = useNavigation();
  const role = "patient";

  return (
    <ContainerSafePrincipal>
      <HeaderFluxo title="Olá" />
      <ContainerPrincipal>
        {role === "patient" ? (
          <>
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
          </>
        ) : (
          <TagFluxo
            imageTag={Paciente}
            title="Pacientes"
            text="Conheça cada um dos seus pacientes"
          />
        )}
      </ContainerPrincipal>
    </ContainerSafePrincipal>
  );
};

export default TelaPrincipal;
