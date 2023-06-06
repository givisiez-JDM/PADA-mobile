import React from "react";
import {
  ContainerBackFluxo,
  ContainerHeaderFluxo,
  ContainerSafeHeader,
  ContainerTitles,
  TitleHeaderFluxo,
} from "./header-fluxo-style";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HeaderFluxo = (props: { title: string; backButton: boolean }) => {
  return (
    <ContainerSafeHeader>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ContainerHeaderFluxo>
        {props.backButton === true ? (
          <ContainerBackFluxo>
            <Icon name="chevron-back-outline" color="#000" />
          </ContainerBackFluxo>
        ) : null}
        <ContainerTitles>
          <TitleHeaderFluxo>{props.title}</TitleHeaderFluxo>
        </ContainerTitles>
      </ContainerHeaderFluxo>
    </ContainerSafeHeader>
  );
};

export default HeaderFluxo;
