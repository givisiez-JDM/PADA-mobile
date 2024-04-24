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
  TextButtonRemember,
  TextDataPatient,
} from "./header-home-style";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";
import Person from "../../../assets/images/image-icons/imgUserItem.png";
import Calendar from "../../../assets/images/image-icons/calendar.png";
import Time from "../../../assets/images/image-icons/time.png";
import storePatient from "../../../store/storePatient";
import { SubTitleHeaderFluxo, SubtitlePrincipal, TextHeaderTitle, TitleHeaderVaccines } from "@/src/theme/textColor/styletextColor";

const HeaderHome = (props: {
  title: string | undefined;
  backButton: boolean;
  buttonVaccine: boolean;
  photo?: any;
}) => {
  const navigation = useNavigation<propsStack>();
  const [date, setDate] = useState<string>("");
  const patient: any = storePatient.getState();

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
          <ContainerTitles>
            <TextHeaderTitle>{props.title}</TextHeaderTitle>
            {props.backButton === true && props.buttonVaccine === true ? (
              <>
                <SubTitleHeaderFluxo>
                  Sua próxima consulta está agendada para:
                </SubTitleHeaderFluxo>
                <ContainerDataPatient>
                  <ImageCalendar source={Calendar} />
                  <TextDataPatient>A agendar</TextDataPatient>
                </ContainerDataPatient>
                <ContainerButtonsHeaderFluxo>
                  <ButtonNextVaccine>
                    <SubtitlePrincipal>
                      Sua próxima vacina:
        
                    </SubtitlePrincipal>
                    <IconButtonNextVaccine>
                      <Icon name="chevron-back-outline" color="#000" />
                    </IconButtonNextVaccine>
                  </ButtonNextVaccine>
                  <ButtonRemember activeOpacity={0.8}>
                    <TextButtonRemember>Lembrar</TextButtonRemember>
                    <IconTime source={Time} />
                  </ButtonRemember>
                </ContainerButtonsHeaderFluxo>
              </>
            ) : (
              <ContainerHeaderVaccines>
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
            )}
          </ContainerTitles>
        </ContainerHeaderInformationPerson>



      </ContainerHeaderFluxo>
    </ContainerSafeHeader>
  );
};

export default HeaderHome;
