import React from "react";
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
import Perfil from "../../assets/imgPerfil.png";

import { useNavigation } from "@react-navigation/native";
import TabBar from "../../components/buttonTabBar/buttonTabBar";
import { FlatList } from "react-native-gesture-handler";
import { ImageSourcePropType } from "react-native";

interface Item {
  image: ImageSourcePropType;
  title: string;
  text: string;
}

const TelaPrincipal = () => {
  const array = [
    [
      { image: Coracao, title: "Minha saúde", text: "Seu histórico de saúde" },
      {
        image: Remedio,
        title: "Minhas vacinas",
        text: "Seu histórico de medicamentos",
      },
      {
        image: Perfil,
        title: "Meu perfil",
        text: "Suas informações de cadastro",
      },
    ],
    [
      {
        image: Paciente,
        title: "Pacientes",
        text: "Conheça cada um dos seus pacientes",
      },
    ],
  ];
  const navigation = useNavigation();
  let role = "patient";

  const renderItem: React.FC<{ item: Item }> = ({ item }) => {
    return (
      <TagFluxo imageTag={item.image} title={item.title} text={item.text} />
    );
  };

  return (
    <ContainerSafePrincipal>
      <HeaderFluxo title="Olá" backButton={false} buttonVaccine={false} />
      <ContainerPrincipal>
        {role === "patient" ? (
          <ContainerListTagFluxo>
            <FlatList
              data={array[0]}
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
