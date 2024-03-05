import React, { useState } from "react";
import {
  ContainerBackFluxo,
  ContainerHeaderVaccineFluxo,
  ContainerImagePerson,
  ContainerInputVaccines,
  ImagePerson,
  InputCalendarVaccines,
  InputWrapper,
  MainContainerVaccine,
  TitleHeaderFluxo,
  TitleHeaderVaccines,
} from "./header-vaccine-style";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";
import Person from "../../../assets/image-icons/imgUserItem.png";
import { ContainerSafeHeader } from "../HeaderHome/header-home-style";

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
      <ContainerHeaderVaccineFluxo>
        {props.backButton === true ? (
          <ContainerBackFluxo onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" color="#000" />
          </ContainerBackFluxo>
        ) : null}
        <ContainerImagePerson>
          <ImagePerson source={
            props.photo ? { uri: `data:image/jpeg;base64,${props.photo}` } : Person}
          />
          <TitleHeaderFluxo>{props.title}</TitleHeaderFluxo>
        </ContainerImagePerson>
        <ContainerInputVaccines>
          <TitleHeaderVaccines>
            Busque em seu histórico:
          </TitleHeaderVaccines>
          <InputWrapper>
            <Icon
              name="search"
              size={25}
              color="#36454F"
            />
            <InputCalendarVaccines
              onChangeText={(text: string) => {
                setDate(text);
              }}
              value={date}
              placeholder="Data"
              placeholderTextColor="#A9A9A9"
            />
            <Icon
              name="calendar"
              size={25}
              color="#36454F"
            />
          </InputWrapper>
        </ContainerInputVaccines>
      </ContainerHeaderVaccineFluxo>
    </ContainerSafeHeader >
  )
};

export default HeaderVaccine;
