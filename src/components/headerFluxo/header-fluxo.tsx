import React from "react";
import {
  ContainerHeaderFluxo,
  ContainerSafeHeader,
  ContainerTitles,
  TitleHeaderFluxo,
} from "./header-fluxo-style";

interface TTitle {
  title: string;
}

const HeaderFluxo = ({ title }: TTitle) => {
  return (
    <ContainerSafeHeader>
      <ContainerHeaderFluxo>
        <ContainerTitles>
          <TitleHeaderFluxo>{title}</TitleHeaderFluxo>
        </ContainerTitles>
      </ContainerHeaderFluxo>
    </ContainerSafeHeader>
  );
};

export default HeaderFluxo;
