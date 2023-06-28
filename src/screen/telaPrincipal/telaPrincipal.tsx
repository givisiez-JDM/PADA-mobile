import React, { useEffect, useState } from "react";
import HeaderFluxo from "../../components/headerFluxo/header-fluxo";
import {
  ContainerListDoctor,
  ContainerListTagFluxo,
  ContainerPrincipal,
  ContainerSafePrincipal,
} from "./telaPrincipal-style";
import TagFluxo from "../../components/tagFluxo/tag-fluxo";

import Coracao from "../../assets/imgCoracao.png";
import Remedio from "../../assets/imgRemedio.png";
import Paciente from "../../assets/imgPaciente.png";
import ProfissionalSaude from "../../assets/profissionalSaude.png";
import Perfil from "../../assets/imgPerfil.png";
import TabBar from "../../components/buttonTabBar/buttonTabBar";
import { FlatList } from "react-native-gesture-handler";
import { ImageSourcePropType } from "react-native";
import { getDataUserStorage } from "../../service/requests";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Item {
  image: ImageSourcePropType;
  title: string;
  text: string;
}

const TelaPrincipal = () => {
  const [roleUser, setRoleUser] = useState("");
  const [name, setName] = useState("");
  let role = roleUser;
  getDataUserStorage({ setRoleUser, setName });

  const array = [
    {
      image: Coracao,
      title: "Minha saúde",
      text: "Seu histórico de saúde",
    },
    {
      image: Remedio,
      title: "Minhas vacinas",
      text: "Seu histórico de medicamentos",
    },
    {
      image: ProfissionalSaude,
      title: "Profissional de saúde",
      text: "Conheça o especialista",
    },
    {
      image: Perfil,
      title: "Meu perfil",
      text: "Suas informações de cadastro",
    },
  ];

  const renderItem: React.FC<{ item: Item }> = ({ item }) => {
    return (
      <TagFluxo imageTag={item.image} title={item.title} text={item.text} />
    );
  };

  return (
    <ContainerSafePrincipal>
      <HeaderFluxo
        title={`Olá, ${name}`}
        backButton={false}
        buttonVaccine={false}
        typeHeader="patient"
      />
      <ContainerPrincipal>
        {role.length === 9 ? (
          <ContainerListTagFluxo>
            <FlatList
              data={array}
              renderItem={renderItem}
              keyExtractor={(item) => item.title}
              numColumns={2}
            />
          </ContainerListTagFluxo>
        ) : (
          <ContainerListDoctor>
            <TagFluxo
              imageTag={Paciente}
              title={"Pacientes"}
              text={"Conheça cada um dos seus pacientes"}
            />
          </ContainerListDoctor>
        )}
      </ContainerPrincipal>
      <TabBar />
    </ContainerSafePrincipal>
  );
};

export default TelaPrincipal;
