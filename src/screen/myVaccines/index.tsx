import Header from "../../components/Header";
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import {
  ContainerItemInformationVaccine,
  ContainerItemsLegends,
  ContainerLegend,
  ContainerProgressBar,
  ContainerTextProgressBar,
  ContainerVaccinesView,
  TextContainerLegend,
  TextSubTitleProgressBar,
} from "./my-vaccines-styles";

import { ContainerPrincipal } from "../home/telaPrincipal-style";
import ItemVaccine from "../../components/Cards/itemVaccine";
import { useEffect, useState } from "react";
import { getDataUserStorage } from "../../service/requests";
import ItemLegend from "../../components/Cards/itemLegend";
import TabBar from "../../components/TabBar/buttonTabBar";
import ProgressBar from "../../components/Bars/progressBar";
import storePatient from "../../store/storePatient";
import ModalPhaseVaccine from "../../components/Modals/modalPhaseVaccine/modal-phase-vaccine";
import { Scroll } from "../profile/patient-style";
import React from "react";
import { TextTitleProgressBar } from "@/src/theme/textColor/styletextColor";
import { padaTheme } from "@/src/theme/pada-theme";

//tipagem adicionada
const MyVaccines = () => {
  const [progress, setProgress] = useState<number>(20);
  const [name, setName] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const patient: any = storePatient.getState();
  const [colorBorderLeft, setColorBorderLeft]: any = useState<string>('');


  const arrayLegend: { text: string; color: string }[] = [
    { text: "Aplicada", color: "#5CED38", },
    { text: "Aplicada em atraso", color: "#FACB71", },
    { text: "Não aplicada", color: "#E85656", },
    { text: "Agendada", color: "#B4B4B4", },
  ];

  const onOpen = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  getDataUserStorage({ setName });

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 10);
      } else {
        clearInterval(interval);
      }
    });

  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <Scroll>
        <Header
          title={name}
          backButton={true}
          buttonVaccine={false}
          typeHeader="patient"
          photo={patient.patientInfo.photo}
        />
        <ContainerPrincipal>
          <ContainerProgressBar>
            <ContainerTextProgressBar>
              <TextTitleProgressBar>Você está na Fase 1</TextTitleProgressBar>
              <TextSubTitleProgressBar onPress={onOpen}>Mais detalhes</TextSubTitleProgressBar>
            </ContainerTextProgressBar>
            <ProgressBar progress={progress} width="236px" />
            <ModalPhaseVaccine visible={visible} onClose={onClose} />
          </ContainerProgressBar>


          <ContainerItemInformationVaccine>
            {patient.vaccinesInfo.map((vaccine: any) => (
              <ItemVaccine
                key={vaccine.id}
                applicationDate={vaccine.applicationDate}
                scheduledDate={vaccine.scheduledDate}
                nameVaccine={vaccine.tittle}
                description={vaccine.observation}
                status={vaccine.status}
                colorBorderLeft={colorBorderLeft}
                setColorBorderLeft={setColorBorderLeft}
              />
            ))}
          </ContainerItemInformationVaccine>

          <ContainerLegend>
            <TextContainerLegend>LEGENDA</TextContainerLegend>
            <ContainerItemsLegends>
              {arrayLegend.map(
                (item: { text: string; color: string }) => (
                  <ItemLegend color={item.color} text={item.text} />
                )
              )}
            </ContainerItemsLegends>
          </ContainerLegend>
        </ContainerPrincipal>
      </Scroll>
      <TabBar />
    </SafeAreaView>
  );
};

export default MyVaccines;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(209, 209, 209, 0.2)'
  },
  subContainer: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: padaTheme.colors.white
  },
  title: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 22,
    backgroundColor: padaTheme.colors.darkBlue
  },
  textContainer: {
    width: 300,
    marginTop: 20
  },
  text: {
    fontFamily: 'NotoSansKR-Thin',
    fontSize: 18,
    backgroundColor: padaTheme.colors.darkBlue
  },
  image: {
    marginTop: 150,
    marginBottom: 30
  }
})