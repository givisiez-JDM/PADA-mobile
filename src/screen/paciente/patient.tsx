import { useState } from "react";
import TabBar from "../../components/buttonTabBar/buttonTabBar";
import DataPatient from "../../components/dataPatient/data-patient";
import HeaderFluxo from "../../components/headerFluxo/header-fluxo";
import { ContainerSafePrincipalPaciente, Scroll } from "./patient-style";
import { getDataUserStorage } from "../../service/requests";

const Patient = () => {
  const data = {
    name: "Amanda B.C.D",
    telefone: "(71) 9 9999-9999",
    email: "amanda@gmail.com",
    data_nascimento: "16/02/2001",
    dosagem: "1:10",
    alergias: ["Gato", "Candidíase", "Fungo"],
    periodicidade: "A cada 7 dias",
    metodo: "sublingual",
    inicio: "27/03/2023",
    fim: "27/09/2023",
  };
  const [, setRoleUser] = useState("");
  const [name, setName] = useState("");
  getDataUserStorage({ setRoleUser, setName });
  
  return (
    <ContainerSafePrincipalPaciente>
      <Scroll>
        <HeaderFluxo title={`Olá, ${name}`} backButton={true} buttonVaccine={true} typeHeader="patient"/>
        <DataPatient
          name={data.name}
          telefone={data.telefone}
          email={data.email}
          data_nascimento={data.data_nascimento}
          dosagem={data.dosagem}
          alergias={data.alergias}
          periodicidade={data.periodicidade}
          metodo={data.metodo}
          inicio={data.inicio}
          fim={data.fim}
        />
      </Scroll>
      <TabBar />
    </ContainerSafePrincipalPaciente>
  );
};

export default Patient;
