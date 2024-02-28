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
} from "./header-vaccine-style";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";
import Person from "../../../assets/image-icons/imgUserItem.png";
import Calendar from "../../../assets/image-icons/calendar.png";
import Time from "../../../assets/image-icons/time.png";

const HeaderVaccine = (props: {
  title: string | undefined;
  backButton: boolean;
  buttonVaccine: boolean;
  typeHeader: "patient";
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
          <ContainerHeaderVaccines>
            <TitleHeaderFluxo>{props.title}</TitleHeaderFluxo>
            <TitleHeaderVaccines>
              Busque em seu histórico
            </TitleHeaderVaccines>
            <ContainerInputCalendarVaccines>
              <IconWrapper>
                <Icon
                  name="search"
                  size={25}
                  color="#36454F"
                  style={{ marginLeft: 5 }}
                />
              </IconWrapper>
              <InputCalendarVaccines
                onChangeText={(text: string) => {
                  setDate(text);
                }}
                value={date}
                placeholder="Data"
                placeholderTextColor="#A9A9A9"
              />
              <ImageCalendar source={Calendar} />
              <IconWrapperCalendar>
                <Icon
                  name="calendar"
                  size={25}
                  color="#36454F"
                  style={{ marginRight: 10 }}
                />
              </IconWrapperCalendar>
            </ContainerInputCalendarVaccines>
          </ContainerHeaderVaccines>
        </ContainerHeaderInformationPerson>
      </ContainerHeaderFluxo>
    </ContainerSafeHeader>
  )
};

export default HeaderVaccine;
