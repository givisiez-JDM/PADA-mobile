import React, { useState } from "react";
import {
  ButtonNextVaccine,
  ButtonRemember,
  ContainerBackFluxo,
  ContainerButtonsHeaderFluxo,
  ContainerDataPatient,
  ContainerHeaderFluxo,
  ContainerHeaderInformationPerson,
  ContainerHeaderVaccines,
  ContainerImagePerson,
  ContainerInputCalendarVaccines,
  ContainerSafeHeader,
  ContainerTitles,
  IconButtonNextVaccine,
  IconTime,
  IconWrapper,
  IconWrapperCalendar,
  ImageCalendar,
  ImagePerson,
  InputCalendarVaccines,
  SubTitleHeaderFluxo,
  TextButtonNextVaccine,
  TextButtonRemember,
  TextButtonVaccine,
  TextDataPatient,
  TitleHeaderFluxo,
  TitleHeaderVaccines,
} from "./header-fluxo-style";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";
import Person from "../../../assets/images/image-icons/imgUserItem.png";
import Calendar from "../../../assets/images/image-icons/calendar.png";
import Time from "../../../assets/images/image-icons/time.png";
import Doctor from "../../../assets/images/imgDoctor.png";

//Style header doctor
import {
  ContainerHeaderInformationDoctor,
  ContainerImageDoctor,
  ContainerInfoDoctor,
  ContainerSubtitles,
  ImageDoctor,
  SubTitleHeaderName,
  SubTitleHeaderSpecialty,
  TitleHeaderDoctor,
} from "./header-fluxo-doctor-style";
import { SubtitleText, TextHeaderTitle } from "@/src/theme/textColor/styletextColor";

const HeaderFluxo = (props: {
  title: string | undefined;
  backButton: boolean;
  buttonVaccine: boolean;
  typeHeader: "patient" | "doctor";
  photo?: any;
}) => {
  const navigation = useNavigation<propsStack>();
  const [date, setDate] = useState("");

  return (
    <ContainerSafeHeader>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ContainerHeaderFluxo>
        {props.backButton === true ? (
          <ContainerBackFluxo onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" color="#000" />
          </ContainerBackFluxo>
        ) : null}
        {props.typeHeader === "patient" && (
          <ContainerHeaderInformationPerson>
            <ContainerImagePerson>
              <ImagePerson
                source={
                  props.photo
                    ? { uri: `data:image/jpeg;base64,${props.photo}` }
                    : Person
                }
              />
            </ContainerImagePerson>
            <ContainerTitles>
              <TextHeaderTitle>{props.title}</TextHeaderTitle>
              {props.backButton === true && props.buttonVaccine === true && (

                <SubTitleHeaderFluxo>
                  Histórico de vacinas
                </SubTitleHeaderFluxo>

              )}
            </ContainerTitles>
          </ContainerHeaderInformationPerson>
        )}

        {props.typeHeader === "doctor" && (
          <ContainerHeaderInformationDoctor>
            
            <TextHeaderTitle>Profissional responsável</TextHeaderTitle>
            <ContainerInfoDoctor>
              <ContainerImageDoctor>
                <ImageDoctor
                  source={
                    props.photo
                      ? { uri: `data:image/jpeg;base64,${props.photo}` }
                      : Person
                  }
                />
              </ContainerImageDoctor>

              <ContainerSubtitles>
                <TextHeaderTitle>{props.title}</TextHeaderTitle>
                <SubtitleText>Clínico Geral</SubtitleText>
              </ContainerSubtitles>


            </ContainerInfoDoctor>
          </ContainerHeaderInformationDoctor>
        )}
      </ContainerHeaderFluxo>
    </ContainerSafeHeader>
  );
};

export default HeaderFluxo;