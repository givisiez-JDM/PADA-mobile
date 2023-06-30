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
  crm: string;
  sobre: string;
  especialidade: string;
}) => {
  
    return (
    <ContainerDataDoctor>
      <ContainerData>
        <TitleDataDoctor>CRM</TitleDataDoctor>
        <SubTitleDoctor>CRM -  SP 00000</SubTitleDoctor>
      </ContainerData>
      <ContainerData>
        <TitleDataDoctor>SOBRE</TitleDataDoctor>
        <SubTitleDoctor>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</SubTitleDoctor>
      </ContainerData>
      <ContainerData>
        <TitleDataDoctor>Especialidade</TitleDataDoctor>
        <SubTitleDoctor>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis </SubTitleDoctor>
      </ContainerData>
    </ContainerDataDoctor>
  );
};

export default DataDoctor;
