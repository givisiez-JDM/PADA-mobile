import { FlatList } from "react-native";
import {
  ContainerData,
  ContainerDataPatient,
  SubTitlePatientAllergies,
} from "./data-patient-style";
import React from "react";
import { BaseText, BoldTextTitle } from "@/src/theme/textColor/styletextColor";
import Button from "../../Buttons/button/button";

interface TData {
  name: string;
  telephone: string;
  email: string;
  data_nascimento: string;
  dosagem: string;
  alergias: string[];
  inicio: string;
  fim: string;
  periodicidade: string;
  metodo: string;

}

const DataPatient = (props: {
  name: string;
  telefone: string;
  email: string;
  data_nascimento: string;
  dosagem: string;
  alergias: string[];
  inicio: string;
  fim: string;
  periodicidade: string;
  metodo: string;
}) => {
  const itemAllergies = ({ item }: any): any => {
    return <SubTitlePatientAllergies>{item}</SubTitlePatientAllergies>;
  };

  const formatDateString = (dateString: string) => {
    if (dateString) {
      const parts = dateString.split("-");
      if (parts.length === 3) {
        const year = parts[0];
        const month = parts[1];
        const day = parts[2];
        return `${day}/${month}/${year}`;
      }
      return JSON.stringify(dateString);
    }
    return "Data não definida"; // ou qualquer valor padrão desejado
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    const cleaned = ("" + phoneNumber).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    return JSON.stringify(phoneNumber);
  };

  return (
    <ContainerDataPatient>
      <ContainerData>
        <BoldTextTitle>Nome</BoldTextTitle>
        <BaseText>{props.name}</BaseText>
      </ContainerData>
      <ContainerData>
        <BoldTextTitle>Telefone</BoldTextTitle>
        <BaseText>{formatPhoneNumber(props.telefone)}</BaseText>
      </ContainerData>
      <ContainerData>
        <BoldTextTitle>Email</BoldTextTitle>
        <BaseText>{props.email}</BaseText>
      </ContainerData>
      <ContainerData>
        <BoldTextTitle>Data de Nascimento</BoldTextTitle>
        <BaseText>
          {formatDateString(props.data_nascimento)}
        </BaseText>
      </ContainerData>
      <ContainerData>
        <BoldTextTitle>Alergias</BoldTextTitle>
        <FlatList
          data={props.alergias}
          renderItem={itemAllergies}
          numColumns={2}
          keyExtractor={(item) => item}
        />
      </ContainerData>
      <ContainerData>
        <BoldTextTitle>Duração do Tratamento</BoldTextTitle>
        <BaseText>
          Início: {formatDateString(props.inicio)}
        </BaseText>
        <BaseText>Fim: {formatDateString(props.fim)}</BaseText>
      </ContainerData>
      <ContainerData>
        <BoldTextTitle>Método de Tratamento</BoldTextTitle>
        <BaseText>{props.metodo}</BaseText>
      </ContainerData>

      <Button buttontext="Editar perfil" />

    </ContainerDataPatient>
  );
};

export default DataPatient;