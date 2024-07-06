import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import TagFluxo from "../../components/tagFluxo/tag-fluxo";
import TabBar from "../../components/TabBar/buttonTabBar";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { getDataUserStorage } from "../../service/requests";
import storePatient from "../../store/storePatient";
import { units } from "@/src/hooks/hooks";

const Home = () => {
  const [name, setName] = useState("");
  // const patient: any = storePatient.getState();

  const patient = {
    patientInfo: {
      name: 'Juliana Nogueira',
      photo: 'imgurl',
      telephone: '(81)9 9999-9999',
      email: 'email',
      birthDate: '19/04/1991'
    },
    treatmentInfo: {
      dosage: '2',
      allergies: ['abelhas'],
      frequency: '2',
      method: 'vacina',
      startTreatment: '20/08/2024',
      endTreatment: '20/09/2024'
    }
  }
  // getDataUserStorage({ setName });

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
      <TagFluxo img={item.image} title={item.title} text={item.text} />
    );
  };

  useEffect(() => { }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        title={`Olá, ${patient.patientInfo.name}`}
        type="patient"
      />
      <View style={styles.cardsContainer}>
        <FlatList
          data={array}
          renderItem={renderItem}
          keyExtractor={item => item.title}
          numColumns={2}
        />
      </View>
      <TabBar typeHeader="patient" />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    marginBottom: units.vh * 2,
  }
})