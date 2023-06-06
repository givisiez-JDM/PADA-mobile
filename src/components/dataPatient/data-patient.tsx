import { FlatList } from "react-native-gesture-handler";
import {
  ButtonPatient,
  ContainerData,
  ContainerDataPatient,
  SubTitlePatient,
  SubTitlePatientAllergies,
  TextButtonPatient,
  TitleDataPatient,
} from "./data-patient-style";

interface TData {
  name: string;
  telefone: string;
  email: string;
  data_nascimento: string;
  dosagem: string;
  alergias: string[];
  periodicidade: string;
  metodo: string;
  inicio: string;
  fim: string;
}

const DataPatient = (props: {
  name: string;
  telefone: string;
  email: string;
  data_nascimento: string;
  dosagem: string;
  alergias: string[];
  periodicidade: string;
  metodo: string;
  inicio: string;
  fim: string;
}) => {
  const itemAllergies: React.FC<{ item: any }> = ({ item }) => {
    return <SubTitlePatientAllergies>{item}</SubTitlePatientAllergies>;
  };

  return (
    <ContainerDataPatient>
      <ContainerData>
        <TitleDataPatient>Nome</TitleDataPatient>
        <SubTitlePatient>{props.name}</SubTitlePatient>
      </ContainerData>
      <ContainerData>
        <TitleDataPatient>Telefone</TitleDataPatient>
        <SubTitlePatient>{props.telefone}</SubTitlePatient>
      </ContainerData>
      <ContainerData>
        <TitleDataPatient>Email</TitleDataPatient>
        <SubTitlePatient>{props.email}</SubTitlePatient>
      </ContainerData>
      <ContainerData>
        <TitleDataPatient>Data de Nascimento</TitleDataPatient>
        <SubTitlePatient>{props.data_nascimento}</SubTitlePatient>
      </ContainerData>
      <ContainerData>
        <TitleDataPatient>Dosagem do Medicamento</TitleDataPatient>
        <SubTitlePatient>{props.dosagem}</SubTitlePatient>
      </ContainerData>
      <ContainerData>
        <TitleDataPatient>Alergias</TitleDataPatient>
        <FlatList
          data={props.alergias}
          renderItem={itemAllergies}
          numColumns={2}
          keyExtractor={(item) => item}
        />
      </ContainerData>
      <ContainerData>
        <TitleDataPatient>Periodicidade do Tratamento</TitleDataPatient>
        <SubTitlePatient>{props.periodicidade}</SubTitlePatient>
      </ContainerData>
      <ContainerData>
        <TitleDataPatient>Método de Tratamento</TitleDataPatient>
        <SubTitlePatient>{props.metodo}</SubTitlePatient>
      </ContainerData>
      <ContainerData>
        <TitleDataPatient>Duração do Tratamento</TitleDataPatient>
        <SubTitlePatient>Início: {props.inicio}</SubTitlePatient>
        <SubTitlePatient>Fim: {props.fim}</SubTitlePatient>
      </ContainerData>
      <ButtonPatient>
        <TextButtonPatient>Editar Tratamento</TextButtonPatient>
      </ButtonPatient>
    </ContainerDataPatient>
  );
};

export default DataPatient;
