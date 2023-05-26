import React, { Fragment } from "react";
import {
  ContainerHeaderFluxo,
  ContainerTitles,
  SubTitleHeaderFluxo,
  TitleHeaderFluxo,
} from "./header-fluxo-style";
import { SafeAreaView } from "react-native";

interface TTitle {
  title: string;
  subtitle: string;
}

const HeaderFluxo = ({ title, subtitle }: TTitle) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Fragment>
        <ContainerHeaderFluxo>
          <ContainerTitles>
            <TitleHeaderFluxo>{title}</TitleHeaderFluxo>
            <SubTitleHeaderFluxo>{subtitle}</SubTitleHeaderFluxo>
          </ContainerTitles>
        </ContainerHeaderFluxo>
      </Fragment>
    </SafeAreaView>
  );
};

export default HeaderFluxo;
