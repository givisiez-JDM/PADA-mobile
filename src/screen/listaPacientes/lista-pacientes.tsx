import { Platform } from "react-native";
import AddPatient from "../../components/addPatient/add-patient";
import GridMenu from "../../components/grid-menu/grid-menu";
import HeaderFluxo from "../../components/headerFluxo/header-fluxo";
import {
  ContainerPacientes,
  ContainerSafePrincipalPacientes,
  Scroll,
} from "./lista-pacientes-style";

const PatientList = () => {
  return (
    <ContainerSafePrincipalPacientes
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Scroll>
        <HeaderFluxo title="Olá" backButton={true} buttonVaccine={false} />
        <ContainerPacientes>
          <GridMenu />
          <AddPatient />
        </ContainerPacientes>
      </Scroll>
    </ContainerSafePrincipalPacientes>
  );
};

export default PatientList;
