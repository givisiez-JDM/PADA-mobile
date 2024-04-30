import { useEffect, useState } from "react";
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
import { getDataUserStorage, getPatientInfo } from "../../service/requests";
import ItemLegend from "../../components/Cards/itemLegend/item-legend";
import TabBar from "../../components/Buttons/buttonTabBar/buttonTabBar";
import ProgressBar from "../../components/Bars/progressBar/progress-bar";
import storePatient from "../../store/storePatient";
import ModalPhaseVaccine from "../../components/Modals/modalPhaseVaccine/modal-phase-vaccine";
import { Scroll } from "../patient/patient-style";
import React from "react";
import HeaderVaccine from "@/src/components/Headers/HeaderVaccine/header-vaccine";

const MyVaccines = () => {
  const [progress, setProgress] = useState(20);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const patient: any = storePatient.getState();
  const [colorBorderLeft, setColorBorderLeft] = useState("#B4B4B4"); 

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

  const onOpen = () => {
    setVisible(true);
  };

  const updateColorBorderLeft = (color: string) => {
    setColorBorderLeft(color); 
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

    return () => clearInterval(interval); 
  }, []);

  return (
    <ContainerVaccinesView>
      <Scroll>
        <HeaderVaccine
          title={`Olá, ${name}`}
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
    </ContainerVaccinesView>
  );
};

export default MyVaccines;