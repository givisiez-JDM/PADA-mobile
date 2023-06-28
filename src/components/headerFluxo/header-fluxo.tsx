import React from "react";
import {
  ButtonNextVaccine,
  ButtonRemember,
  ContainerBackFluxo,
  ContainerButtonVaccine,
  ContainerButtonsHeaderFluxo,
  ContainerDataPatient,
  ContainerHeaderFluxo,
  ContainerHeaderInformationPerson,
  ContainerImagePerson,
  ContainerSafeHeader,
  ContainerShadowVaccine,
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

const HeaderFluxo = (props: {
  title: string;
  backButton: boolean;
  buttonVaccine: boolean;
  typeHeader: string;
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
        {props.typeHeader === "patient" ? (
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
                <ButtonRemember>
                  <TextButtonRemember>Lembrar</TextButtonRemember>
                  <IconTime source={Time} />
                </ButtonRemember>
              </ContainerButtonsHeaderFluxo>
            </ContainerTitles>
          </ContainerHeaderInformationPerson>
        ) : null}
      </ContainerHeaderFluxo>
    </ContainerSafeHeader>
  );
};

export default HeaderFluxo;
/**
 * {props.buttonVaccine === true ? (
          <ContainerButtonVaccine>
            <ContainerShadowVaccine>
              <TextButtonVaccine>Vacinas</TextButtonVaccine>
            </ContainerShadowVaccine>
          </ContainerButtonVaccine>
        ) : null}
 */
