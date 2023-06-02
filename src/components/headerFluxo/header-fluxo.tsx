import React from "react";
import {
  ContainerHeaderFluxo,
  ContainerSafeHeader,
  ContainerTitles,
  TitleHeaderFluxo,
} from "./header-fluxo-style";
import { StatusBar } from "react-native";

interface TTitle {
  title: string;
}

const HeaderFluxo = ({ title }: TTitle) => {
  return (
    <ContainerSafeHeader>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ContainerHeaderFluxo>
        <ContainerTitles>
          <TitleHeaderFluxo>{title}</TitleHeaderFluxo>
        </ContainerTitles>
      </ContainerHeaderFluxo>
    </ContainerSafeHeader>
  );
};

export default HeaderFluxo;
