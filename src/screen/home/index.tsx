import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import {
  ContainerListTagFluxo,
  ContainerPrincipalMenu,
  ContainerSafePrincipal,
} from "./telaPrincipal-style";
import TagFluxo from "../../components/tagFluxo/tag-fluxo";
import TabBar from "../../components/TabBar/buttonTabBar";
import { FlatList } from "react-native";
import { getDataUserStorage } from "../../service/requests";
import storePatient from "../../store/storePatient";

const Home = () => {
  const [name, setName] = useState("");
  const patient: any = storePatient.getState();

  getDataUserStorage({ setName });

  const array = [
    {
      image: require('../../assets/images/image-icons/imgPerfil.png'),
      title: "Meu perfil",
      text: "Suas informações de cadastro",
    },
    {
      image: require('../../assets/images/image-icons/imgRemedio.png'),
      title: "Minhas vacinas",
      text: "Seu histórico de medicamentos",
    },
    {
      image: require('../../assets/images/image-icons/profissionalSaude.png'),
      title: "Profissional de saúde",
      text: "Conheça o especialista",
    }
  ];

  const renderItem = ({ item }: any): any => {
    return (
      <TagFluxo imageTag={item.image} title={item.title} text={item.text} />
    );
  };

  useEffect(() => { }, []);

  return (
    <ContainerSafePrincipal>
      <Header
        title={`Olá, ${name}`}
        backButton={true}
        buttonVaccine={true}
        typeHeader="patient"
      />
      <ContainerPrincipalMenu>
        <ContainerListTagFluxo>
          <FlatList
            data={array}
            renderItem={renderItem}
            keyExtractor={item => item.title}
            numColumns={2}
          />
        </ContainerListTagFluxo>
      </ContainerPrincipalMenu>
      <TabBar typeHeader="patient" />
    </ContainerSafePrincipal>
  );
};

export default Home;