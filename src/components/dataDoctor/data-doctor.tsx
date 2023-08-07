import { FlatList } from "react-native-gesture-handler";
import {
  ContainerData,
  ContainerDataDoctor,
  SubTitleDoctor,
  TitleDataDoctor,
} from "./data-doctor-style";

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
        <TitleDataDoctor>CRM</TitleDataDoctor>
        <SubTitleDoctor>CRM - {props.crm}</SubTitleDoctor>
      </ContainerData>
      <ContainerData>
        <TitleDataDoctor>SOBRE</TitleDataDoctor>
        <SubTitleDoctor>{props.sobre}</SubTitleDoctor>
      </ContainerData>
      <ContainerData>
        <TitleDataDoctor>Especialidade</TitleDataDoctor>
        <SubTitleDoctor>{props.especialidade}</SubTitleDoctor>
      </ContainerData>
    </ContainerDataDoctor>
  );
};

export default DataDoctor;
