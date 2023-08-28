import { Animated } from "react-native";
import {
  ButtonClose,
  ContainerContentModalPhase,
  ContainerDateInfo,
  ContainerModalPhaseVaccines,
  ContainerModalProgressBar,
  ContainerPhases,
  ContainerPhasesInfo,
  ContainerPosProgress,
  ContainerSubTitleInfo,
  ContainerSubTitleInfo1,
  ContainerSubTitleInfo2,
  ImagePhaseInfo,
  TextPercent,
  TextPhasesInfo,
  TextSubTitle,
  TextTitle,
  TextTitleModalPhase,
  TextTitleModalProgressBar,
} from "./modal-phase-vaccine-style";
import ProgressBar from "../progressBar/progress-bar";
import { useEffect, useState } from "react";
import HiddenPhase from "../../assets/checkPhases.png";
import Icon from "react-native-vector-icons/Ionicons";

const ModalPhaseVaccine = (props: {
  visible: boolean;
  onClose: () => void;
}) => {
  const [progress, setProgress] = useState(20);
  const [animation] = useState(new Animated.Value(props.visible ? 1 : 0));
  useEffect(() => {
    Animated.timing(animation, {
      toValue: props.visible ? 1 : 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [props.visible]);

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  return (
    <ContainerModalPhaseVaccines
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onClose}
    >
      <ContainerContentModalPhase
        style={{
          transform: [{ translateX: translateX }],
        }}
      >
        <ButtonClose onPress={props.onClose}>
          <Icon name="chevron-forward-outline" color="#000" size={20} />
        </ButtonClose>
        <TextTitleModalPhase>Fase de Tratamento</TextTitleModalPhase>
        <ContainerPhases>
          <ContainerPhasesInfo>
            <TextPhasesInfo>Fase 1</TextPhasesInfo>
            <ImagePhaseInfo source={HiddenPhase} expanded={false} />
          </ContainerPhasesInfo>
          <ContainerPhasesInfo>
            <TextPhasesInfo>Fase 2</TextPhasesInfo>
            <ImagePhaseInfo source={HiddenPhase} expanded={true} />
          </ContainerPhasesInfo>
        </ContainerPhases>

        <ContainerSubTitleInfo>
          <TextTitle>Duração do Tratamento</TextTitle>
          <ContainerDateInfo>
            <TextSubTitle>Início {"     "} 27/10/2023</TextSubTitle>
            <TextSubTitle>Fim {"        "} 27/05/2024</TextSubTitle>
          </ContainerDateInfo>
        </ContainerSubTitleInfo>

        <ContainerSubTitleInfo1>
          <TextTitle>Periodicidade do Tratamento</TextTitle>
          <TextSubTitle>A cada 7 dias</TextSubTitle>
        </ContainerSubTitleInfo1>

        <ContainerSubTitleInfo2>
          <TextTitle>Dosagem do Medicamento</TextTitle>
          <TextSubTitle>1:10</TextSubTitle>
        </ContainerSubTitleInfo2>

        <ContainerModalProgressBar>
          <TextTitleModalProgressBar>
            Progresso da Fase 1
          </TextTitleModalProgressBar>
          <TextPercent>0%</TextPercent>
          <ContainerPosProgress>
            <ProgressBar progress={progress} width="203px" />
          </ContainerPosProgress>
        </ContainerModalProgressBar>
      </ContainerContentModalPhase>
    </ContainerModalPhaseVaccines>
  );
};

export default ModalPhaseVaccine;
