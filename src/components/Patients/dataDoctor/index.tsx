import { FlatList } from "react-native-gesture-handler";
import {
  ContainerData,
  ContainerDataDoctor,
  SubTitleDoctor,
  TitleDataDoctor,
} from "./style";
import { BoldTextTitle, BaseText } from "../../../theme/textColor/styletextColor";
import React from "react";


interface TData {
  crm: string;
  sobre: string;
  especialidade: string;
}

const DataDoctor = (props: {
  crm: string | undefined;
  sobre: string | undefined;
  especialidade: string | undefined;
}) => {
  return (
    <ContainerDataDoctor>
      <ContainerData>
        <BoldTextTitle>CRM</BoldTextTitle>
        <BaseText>CRM - {props.crm}</BaseText>
      </ContainerData>
      <ContainerData>
        <BoldTextTitle>SOBRE</BoldTextTitle>
        <BaseText>{props.sobre}</BaseText>
      </ContainerData>
      <ContainerData>
        <BoldTextTitle>Especialidade</BoldTextTitle>
        <BaseText>{props.especialidade}</BaseText>
      </ContainerData>
    </ContainerDataDoctor>
  );
};

export default DataDoctor;
