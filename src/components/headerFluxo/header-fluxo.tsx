import React from "react";
import {
  ContainerBackFluxo,
  ContainerButtonVaccine,
  ContainerHeaderFluxo,
  ContainerSafeHeader,
  ContainerShadowVaccine,
  ContainerTitles,
  TextButtonVaccine,
  TitleHeaderFluxo,
} from "./header-fluxo-style";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

const HeaderFluxo = (props: {
  title: string;
  backButton: boolean;
  buttonVaccine: boolean;
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
        {props.buttonVaccine === true ? (
          <ContainerButtonVaccine>
            <ContainerShadowVaccine>
              <TextButtonVaccine>Vacinas</TextButtonVaccine>
            </ContainerShadowVaccine>
          </ContainerButtonVaccine>
        ) : null}
        <ContainerTitles>
          <TitleHeaderFluxo>{props.title}</TitleHeaderFluxo>
        </ContainerTitles>
      </ContainerHeaderFluxo>
    </ContainerSafeHeader>
  );
};

export default HeaderFluxo;
