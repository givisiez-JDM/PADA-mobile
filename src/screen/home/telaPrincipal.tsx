import React, { useState, useEffect } from "react";
import HeaderHome from "../../components/Headers/header-home/header-home";
import {
  ContainerListTagFluxo,
  ContainerPrincipal,
  ContainerSafePrincipal,
} from "./telaPrincipal-style";
import TagFluxo from "../../components/tagFluxo/tag-fluxo";

import Remedio from "../../assets/images/image-icons/imgRemedio.png";
import ProfissionalSaude from "../../assets/images/image-icons/profissionalSaude.png";
import Perfil from "../../assets/images/image-icons/imgPerfil.png";
import TabBar from "../../components/Buttons/buttonTabBar/buttonTabBar";
import { FlatList } from "react-native";
import { getDataUserStorage } from "../../service/requests";
import AsyncStorage from "@react-native-async-storage/async-storage";
import storePatient from "../../store/storePatient";

const TelaPrincipal = () => {
  const [name, setName] = useState("");
  const patient: any = storePatient.getState();

  getDataUserStorage({ setName });

  const array = [
    {
      image: Perfil,
      title: "Meu perfil",
      text: "Suas informações de cadastro",
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
    }
  ];

  const renderItem = ({ item }: any): any => {
    return (
      <TagFluxo imageTag={item.image} title={item.title} text={item.text} />
    );
  };

  useEffect(() => {

  }, []);

  return (
    <ContainerSafePrincipal>
      <HeaderHome
        title={`Olá, ${name}`}
        backButton={true}
        buttonVaccine={true}
        photo={patient.patientInfo.photo}
      />
      <ContainerPrincipal>
        <ContainerListTagFluxo>
          <FlatList
            data={array}
            renderItem={renderItem}
            keyExtractor={(item: { title: any; }) => item.title}
            numColumns={2}
          />
        </ContainerListTagFluxo>
      </ContainerPrincipal>
      <TabBar />
    </ContainerSafePrincipal>
  );
};

export default TelaPrincipal;