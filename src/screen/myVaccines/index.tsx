import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import Header from "../../components/Header";
import {
  ContainerItemInformationVaccine,
  ContainerItemsLegends,
  ContainerLegend,
  ContainerProgressBar,
  ContainerTextProgressBar,
  TextContainerLegend,
  TextSubTitleProgressBar,
} from "./my-vaccines-styles";
import { ContainerPrincipal } from "../home/telaPrincipal-style";
import ItemVaccine from "../../components/Cards/itemVaccine";
import { getDataUserStorage } from "../../service/requests";
import TabBar from "../../components/TabBar/buttonTabBar";
import ProgressBar from "../../components/Bars/progressBar";
import storePatient from "../../store/storePatient";
import ModalPhaseVaccine from "../../components/Modals/modalPhaseVaccine/modal-phase-vaccine";
import { Scroll } from "../profile/patient-style";
import { TextTitleProgressBar } from "@/src/theme/textColor/styletextColor";
import { padaTheme } from "@/src/theme/pada-theme";
import { FlatList } from "react-native-gesture-handler";

const MyVaccines = () => {
  const [progress, setProgress] = useState<number>(20);
  const [name, setName] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const patient: any = storePatient.getState();
  const [colorBorderLeft, setColorBorderLeft] = useState<string>('black');

  const arrayLegend: { text: string; color: string; index: number }[] = [
    { text: "Aplicada", color: "#5CED38", index: 0 },
    { text: "Aplicada em atraso", color: "#FACB71", index: 1 },
    { text: "Não aplicada", color: "#E85656", index: 2 },
    { text: "Agendada", color: "#B4B4B4", index: 3 },
  ];

  const onOpen = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    getDataUserStorage({ setName });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10;
        } else {
          clearInterval(interval);
          return prevProgress;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
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
              <TextSubTitleProgressBar onPress={onOpen}>
                Mais detalhes
              </TextSubTitleProgressBar>
            </ContainerTextProgressBar>
            <ProgressBar progress={progress} />
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
                isSelected = {}
              />
            ))}
          </ContainerItemInformationVaccine>

          <ContainerLegend>
            <TextContainerLegend>LEGENDA</TextContainerLegend>
            <ContainerItemsLegends>
                {arrayLegend.map((item) => (
                  <View key={item.index} style={styles.legendItemContainer}>
                    <View style={[styles.legendColor, { backgroundColor: item.color }]} />
                    <Text style={styles.legendText}>{item.text}</Text>
                  </View>
                ))}
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
    backgroundColor: "rgba(209, 209, 209, 0.2)",
  },
  subContainer: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: padaTheme.colors.white,
  },
  title: {
    fontFamily: "NotoSansKR-Medium",
    fontSize: 22,
    backgroundColor: padaTheme.colors.darkBlue,
  },
  textContainer: {
    width: 300,
    marginTop: 20,
  },
  text: {
    fontFamily: "NotoSansKR-Thin",
    fontSize: 18,
    backgroundColor: padaTheme.colors.darkBlue,
  },
  image: {
    marginTop: 150,
    marginBottom: 30,
  },
  legendItem: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width:200, 
    height:200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  legendText: {
    color: "black",
    fontSize: 8,
  },
  legendItemContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 5,
  },
  legendColor: {
    width: 9.68, 
    height: 9.13, 
    marginRight: 10, 
  },
});
