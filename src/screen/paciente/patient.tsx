import { useState } from "react";
import TabBar from "../../components/buttonTabBar/buttonTabBar";
import DataPatient from "../../components/dataPatient/data-patient";
import HeaderFluxo from "../../components/headerFluxo/header-fluxo";
import { ContainerSafePrincipalPaciente, Scroll } from "./patient-style";
import { TData, getDataUserStorage } from "../../service/requests";
import storePatient from "../../store/storePatient";

const Patient = () => {
  const patient: TData = storePatient.getState();

  const [, setRoleUser] = useState("");
  const [name, setName] = useState("");
  getDataUserStorage({ setRoleUser, setName });

  return (
    <ContainerSafePrincipalPaciente>
      <Scroll>
        <HeaderFluxo
          title={`Olá, ${name}`}
          backButton={true}
          buttonVaccine={true}
          typeHeader="patient"
        />
        <DataPatient
          name={patient.name}
          telefone={patient.telefone}
          email={patient.email}
          data_nascimento={patient.data_nascimento}
          dosagem={patient.dosagem}
          alergias={patient.alergias}
          periodicidade={patient.periodicidade}
          metodo={patient.metodo}
          inicio={patient.inicio}
          fim={patient.fim}
        />
      </Scroll>
      <TabBar />
    </ContainerSafePrincipalPaciente>
  );
};

export default Patient;
