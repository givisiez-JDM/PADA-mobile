import React from "react";
import {
  ButtonNextVaccine,
  ButtonRemember,
  ContainerBackFluxo,
  ContainerButtonsHeaderFluxo,
  ContainerDataPatient,
  ContainerHeaderFluxo,
  ContainerHeaderInformationPerson,
  ContainerImagePerson,
  ContainerSafeHeader,
  ContainerTitles,
  IconButtonNextVaccine,
  IconTime,
  ImageCalendar,
  ImagePerson,
  SubTitleHeaderFluxo,
  TextButtonNextVaccine,
  TextButtonRemember,
  TextButtonVaccine,
  TextDataPatient,
  TitleHeaderFluxo,
} from "./header-fluxo-style";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";
import Person from "../../assets/imgUserItem.png";
import Calendar from "../../assets/calendar.png";
import Time from "../../assets/time.png";
import Doctor from "../../assets/imgDoctor.png";

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

const HeaderFluxo = (props: {
  title: string | undefined;
  backButton: boolean;
  buttonVaccine: boolean;
  typeHeader: "patient" | "doctor";
}) => {
  const navigation = useNavigation<propsStack>();
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
              <ImagePerson source={Person} />
            </ContainerImagePerson>
            <ContainerTitles>
              <TitleHeaderFluxo>{props.title}</TitleHeaderFluxo>
              <SubTitleHeaderFluxo>
                Sua próxima consulta está agendada para:
              </SubTitleHeaderFluxo>
              <ContainerDataPatient>
                <ImageCalendar source={Calendar} />
                <TextDataPatient>12/10/2023</TextDataPatient>
              </ContainerDataPatient>
              <ContainerButtonsHeaderFluxo>
                <ButtonNextVaccine>
                  <TextButtonNextVaccine>
                    Sua próxima vacina: 01/05{" "}
                  </TextButtonNextVaccine>
                  <IconButtonNextVaccine>
                    <Icon name="chevron-back-outline" color="#000" />
                  </IconButtonNextVaccine>
                </ButtonNextVaccine>
                <ButtonRemember activeOpacity={0.8}>
                  <TextButtonRemember>Lembrar</TextButtonRemember>
                  <IconTime source={Time} />
                </ButtonRemember>
              </ContainerButtonsHeaderFluxo>
            </ContainerTitles>
          </ContainerHeaderInformationPerson>
        )}

        {props.typeHeader === "doctor" && (
          <ContainerHeaderInformationDoctor>
            <TitleHeaderDoctor>Profissional responsável</TitleHeaderDoctor>
            <ContainerInfoDoctor>
              <ContainerImageDoctor>
                <ImageDoctor source={Doctor} />
              </ContainerImageDoctor>
              <ContainerSubtitles>
                <SubTitleHeaderName>{props.title}</SubTitleHeaderName>
                <SubTitleHeaderSpecialty>Clínico Geral</SubTitleHeaderSpecialty>
              </ContainerSubtitles>
            </ContainerInfoDoctor>
          </ContainerHeaderInformationDoctor>
        )}
      </ContainerHeaderFluxo>
    </ContainerSafeHeader>
  );
};

export default HeaderFluxo;
