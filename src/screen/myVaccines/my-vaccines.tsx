import HeaderVaccine from "../../components/Headers/HeaderVaccine/header-vaccine";

import {
  ContainerItemInformationVaccine,
  ContainerItemsLegends,
  ContainerLegend,
  ContainerProgressBar,
  ContainerTextProgressBar,
  ContainerVaccinesView,
  TextContainerLegend,
  TextSubTitleProgressBar,
  TextTitleProgressBar,
} from "./my-vaccines-styles";

import { ContainerPrincipal } from "../home/telaPrincipal-style";
import ItemVaccine from "../../components/Cards/itemVaccine/item-vaccine";
import { useEffect, useState } from "react";
import { getDataUserStorage } from "../../service/requests";
import ItemLegend from "../../components/Cards/itemLegend/item-legend";
import TabBar from "../../components/Buttons/buttonTabBar/buttonTabBar";
import ProgressBar from "../../components/Bars/progressBar/progress-bar";
import storePatient from "../../store/storePatient";
import ModalPhaseVaccine from "../../components/Modals/modalPhaseVaccine/modal-phase-vaccine";
import { Scroll } from "../patient/patient-style";
import React from "react";

const MyVaccines = () => {
  const [progress, setProgress] = useState(20);
  const [name, setName] = useState("");
  const patient: any = storePatient.getState();
  const [visible, setVisible] = useState(false);
  const [borderColor, setborderColor] = useState("#fff")

  const onOpen = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const arrayLegend = [
    {
      text: "Aplicada",
      color: "#5CED38",
    },
    {
      text: "Aplicada em atraso",
      color: "#FACB71",
    },
    {
      text: "Não aplicada",
      color: "#E85656",
    },
    {
      text: "Agendada",
      color: "#B4B4B4",
    },
  ];




  
  const updateColors = (vacines:any) => {
      vacines.map((item:any) => {
      const { status} = item;
      if (status === "aplicado") setborderColor('#bbf7ac');
      if (status === "não aplicado") setborderColor('#FCE0AA');
      if (status === "agendado") setborderColor('#F19A9A');
      if (status === "aplicado em atraso") setborderColor('#bbf7ac')
    });
  };
  
  const array = [
    {
      data: "05 de Julho de 2023",
      time: "10:30 AM",
      nameVaccine: "Vacina 1",
      description: "Observações",
      color: "#bbf7ac",
      status: "aplicado"
    },
    {
      data: "12 de Julho de 2023",
      time: "11:45 AM",
      nameVaccine: "Vacina 2",
      description: "Observações",
      color: "#FCE0AA",
      status: "não aplicado"
    },
    {
      data: "19 de Julho de 2023",
      time: "10:30 AM",
      nameVaccine: "Vacina 3",
      description:
        "Infelizmente, não pude tomar a vacina devido a questões de saúde. Estava me sentindo mal desde a ultima aplicação. Priorizei minha recuperação!",
      color: "#F19A9A",
      status: "agendado"
    },
    {
      data: "26 de Julho de 2023",
      time: "10:30 AM",
      nameVaccine: "Vacina 4",
      description: "Observações",
      color: "#D2D2D2",
      status: "aplicado em atraso"
    },
  ];
  

  


  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 10);
      } else {
        clearInterval(interval);
      }
    });
  }, [progress]);

  return (
    <ContainerVaccinesView>
      <Scroll>
        <HeaderVaccine
          title={`Olá, ${name}`}
          backButton={true}
          buttonVaccine={false}
          typeHeader="patient"
          photo={patient.photo}
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
            {array.map((item, index) => (
              <ItemVaccine
                key={index}
                data={item.data}
                time={item.time}
                nameVaccine={item.nameVaccine}
                description={item.description}
                color={item.color}
                status={item.status}
              />
            ))}
          </ContainerItemInformationVaccine>

          <ContainerLegend>
            <TextContainerLegend>LEGENDA</TextContainerLegend>
            <ContainerItemsLegends>
              {arrayLegend.map(
                (item: { text: string; color: string }, index: number) => (
                  <ItemLegend color={item.color} text={item.text} />
                )
              )}
            </ContainerItemsLegends>
          </ContainerLegend>
        </ContainerPrincipal>
      </Scroll>
      <TabBar />
    </ContainerVaccinesView>
  );
};

export default MyVaccines;