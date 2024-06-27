import React, { useState } from "react";
import {
  ButtonNextVaccine,
  ButtonRemember,
  ContainerBackFluxo,
  ContainerButtonsHeaderFluxo,
  ContainerDataPatient,
  ContainerHeaderFluxo,
  ContainerHeaderFluxo162,
  ContainerHeaderInformationPerson,
  ContainerImagePerson,
  ContainerImagePersonPrincipal,
  ContainerSafeHeader,
  ContainerTitles,
  IconButtonNextVaccine,
  IconTime,
  ImageCalendar,
  ImagePerson,
  InputCalendarVaccines,
  TextButtonRemember,
  TextDataPatient,
  TitleHeaderFluxo,
  ContainerHeaderInformationDoctor,
  ContainerInfoDoctor,
  ContainerImageDoctor,
  ImageDoctor,
  ContainerSubtitles,
  TextButtonNextVaccine,
  ContainerInputVaccines,
  InputWrapper,
  ContainerTitlesPatiente,
} from "./style";
import { Platform, StatusBar, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

import Person from "../../assets/images/image-icons/imgUserItem.png";
import Calendar from "../../assets/images/image-icons/calendar.png";
import Time from "../../assets/images/image-icons/time.png";
import storePatient from "../../store/storePatient";

import { SubTitleHeaderFluxo, SubtitlePrincipal, SubtitleText, TextHeaderTitle, TitleHeaderVaccines, TitleHeaderDoctor } from "@/src/theme/textColor/styletextColor";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";


const Header = (props: {
  typeHeader?: "patient" | "doctor" | "patient-profile",
  title?: string | undefined,
  backButton: boolean,
  buttonVaccine?: boolean,
  photo?: any,
}) => {
  const navigation = useNavigation<propsStack>();
  const patient: any = storePatient.getState();

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [inputValue, setInputValue] = useState<string>("Data");


  const handleInputClick = () => {
    setShowPicker(true);
  };

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;

    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
    setInputValue(currentDate.toLocaleDateString());
  }

  return (
    <ContainerSafeHeader>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {props.backButton && (
        <ContainerBackFluxo onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" color="#000" />
        </ContainerBackFluxo>
      )}

      {props.typeHeader === "doctor" && (
        <ContainerHeaderFluxo>
          <ContainerHeaderInformationDoctor>
            <TitleHeaderDoctor>Profissional responsável</TitleHeaderDoctor>
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
        </ContainerHeaderFluxo>
      )}


      {props.typeHeader === "patient" && props.buttonVaccine && (
        <>
          <ContainerHeaderFluxo>
            <ContainerHeaderInformationPerson>
              <ContainerImagePersonPrincipal>
                <ImagePerson
                  source={
                    props.photo
                      ? { uri: `data:image/jpeg;base64,${props.photo}` }
                      : Person} />
              </ContainerImagePersonPrincipal>

              <ContainerTitles>
                <TitleHeaderFluxo>{props.title}</TitleHeaderFluxo>
                <SubtitlePrincipal>
                  Sua próxima consulta está agendada para:
                </SubtitlePrincipal>
                <ContainerDataPatient>
                  <ImageCalendar source={Calendar} />
                  <TextDataPatient>A agendar</TextDataPatient>
                </ContainerDataPatient>
                <ContainerButtonsHeaderFluxo>
                  <ButtonNextVaccine>
                    <TextButtonNextVaccine>
                      Sua próxima vacina: {patient.vaccinesInfo[0].scheduledDate.split(' ')[0]}
                    </TextButtonNextVaccine>
                    <IconButtonNextVaccine>
                      <Icon name="chevron-back-outline" color="#000" />
                    </IconButtonNextVaccine>
                  </ButtonNextVaccine>

                  <ButtonRemember activeOpacity={0.5}  >
                    <TextButtonRemember
                    >Lembrar</TextButtonRemember>
                    <IconTime source={Time} />
                  </ButtonRemember>


                </ContainerButtonsHeaderFluxo>
              </ContainerTitles>
            </ContainerHeaderInformationPerson>
          </ContainerHeaderFluxo>
        </>
      )}

      {props.typeHeader === "patient" && !props.buttonVaccine && (
        <>
          <ContainerHeaderFluxo>
            <ContainerImagePerson>
              <ImagePerson
                source={
                  props.photo
                    ? { uri: `data:image/jpeg;base64,${props.photo}` }
                    : Person} />
              <TitleHeaderFluxo>{props.title}</TitleHeaderFluxo>
            </ContainerImagePerson>

            <ContainerInputVaccines>

              <TitleHeaderVaccines>
                Busque em seu histórico
              </TitleHeaderVaccines>
              <TouchableOpacity onPress={handleInputClick}>
                <InputWrapper>
                  <Icon
                    name="search"
                    size={25}
                    color="#36454F"
                    style={{ marginLeft: 5 }}
                  />
                  <InputCalendarVaccines
                    value={inputValue}
                    placeholder="Data"
                  />
                  <Icon
                    name="calendar"
                    size={25}
                    color="#36454F"
                    style={{ marginRight: 10 }} />
                </InputWrapper>
              </TouchableOpacity>
              {showPicker && (
                <DateTimePicker
                  value={date}
                  mode={"date"}
                  display="default"
                  onChange={onChange} />
              )}
            </ContainerInputVaccines>
          </ContainerHeaderFluxo>
        </>
      )}


      {props.typeHeader === "patient-profile" && (
        <ContainerHeaderFluxo162>
          <ContainerHeaderInformationPerson>
            <ContainerImagePerson>
              <ImagePerson
                source={
                  props.photo
                    ? { uri: `data:image/jpeg;base64,${props.photo}` }
                    : Person
                }
              />
              <TextHeaderTitle>{props.title}</TextHeaderTitle>
            </ContainerImagePerson>
            <>
              <ContainerTitlesPatiente>
                <SubTitleHeaderFluxo>
                  Histórico de vacinas
                </SubTitleHeaderFluxo>
              </ContainerTitlesPatiente>
            </>
          </ContainerHeaderInformationPerson>
        </ContainerHeaderFluxo162>
      )}


    </ContainerSafeHeader>
  );
};

export default Header;
