import HeaderVaccine from "../../components/Headers/header-home/header-home";
import { Scroll } from "../patient/patient-style";
import {
  ContainerItemInformationVaccine,
  ContainerItemsLegends,
  ContainerLegend,
  ContainerProgressBar,
  ContainerSubTitleProgressBar,
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

const MyVaccines = () => {
  const [roleUser, setRoleUser] = useState("");
  const [progress, setProgress] = useState(20);
  const [name, setName] = useState("");
  const patient: any = storePatient.getState();
  const [visible, setVisible] = useState(false);

  const onOpen = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  getDataUserStorage({ setRoleUser, setName });

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

  const array = [
    {
      data: "05 de Julho de 2023",
      time: "10:30 AM",
      nameVaccine: "Vacina 1",
      description: "Observações",
      color: "#bbf7ac",
    },
    {
      data: "12 de Julho de 2023",
      time: "11:45 AM",
      nameVaccine: "Vacina 2",
      description: "Observações",
      color: "#FCE0AA",
    },
    {
      data: "19 de Julho de 2023",
      time: "10:30 AM",
      nameVaccine: "Vacina 3",
      description:
        "Infelizmente, não pude tomar a vacina devido a questões de saúde. Estava me sentindo mal desde a ultima aplicação. Priorizei minha recuperação!",
      color: "#F19A9A",
    },
    {
      data: "26 de Julho de 2023",
      time: "10:30 AM",
      nameVaccine: "Vacina 4",
      description: "Observações",
      color: "#D2D2D2",
    },
  ];

  /*useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 10);
      } else {
        clearInterval(interval);
      }
    });
  }, [progress]);*/

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
            <TextTitleProgressBar>Você está na Fase 1</TextTitleProgressBar>
            <ProgressBar progress={progress} width="236px" />
            <ContainerSubTitleProgressBar onPress={onOpen}>
              <TextSubTitleProgressBar>Mais detalhes</TextSubTitleProgressBar>
            </ContainerSubTitleProgressBar>
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
