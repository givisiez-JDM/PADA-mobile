import { Platform } from "react-native";
import AddPatient from "../../components/addPatient/add-patient";
import GridMenu from "../../components/grid-menu/grid-menu";
import HeaderFluxo from "../../components/headerFluxo/header-fluxo";
import {
  ContainerPacientes,
  ContainerSafePrincipalPacientes,
  ScrollPacientes,
} from "./lista-pacientes-style";
import TabBar from "../../components/buttonTabBar/buttonTabBar";

const PatientList = () => {
  return (
    <ContainerSafePrincipalPacientes
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollPacientes>
        <HeaderFluxo
          title="Olá"
          backButton={true}
          buttonVaccine={false}
          typeHeader={"patient"}
        />
        <ContainerPacientes>
          <GridMenu />
          <AddPatient />
        </ContainerPacientes>
      </ScrollPacientes>
      <TabBar />
    </ContainerSafePrincipalPacientes>
  );
};

export default PatientList;
