import React from "react";
import HeaderFluxo from "../../components/headerFluxo/header-fluxo";
import {
  ContainerPrincipal,
  ContainerSafePrincipal,
} from "./telaPrincipal-style";
import TagFluxo from "../../components/tagFluxo/tag-fluxo";

import Coracao from "../../assets/imgCoracao.png";
import Remedio from "../../assets/imgRemedio.png";
import Paciente from "../../assets/imgPaciente.png";
import Perfil from "../../assets/imgPerfil.png";

import { useNavigation } from "@react-navigation/native";
import TabBar from "../../components/buttonTabBar/buttonTabBar";

const TelaPrincipal = () => {
  const navigation = useNavigation();
  let role = "patient";

  return (
    <ContainerSafePrincipal>
      <HeaderFluxo title="Olá" backButton={false} buttonVaccine={false} />
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
            <TagFluxo
              imageTag={Perfil}
              title="Meu perfil"
              text="Suas informações de cadastro"
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
      <TabBar />
    </ContainerSafePrincipal>
  );
};

export default TelaPrincipal;
