import React, { useEffect, useState } from "react";
import TabBar from "../../components/Buttons/buttonTabBar/buttonTabBar";
import DataPatient from "../../components/Patients/dataPatient/data-patient";
import HeaderHome from "../../components/Headers/HeaderHome/header-home";
import { ContainerSafePrincipalPaciente, Scroll } from "./patient-style";
import { TData, getDataUserStorage } from "../../service/requests";
import storePatient from "../../store/storePatient";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Patient = () => {
  //const [patient, setPatient] = useState<any>({});
  //var patient: any = {};
  const patient: TData = storePatient.getState();
  const [roleUser, setRoleUser] = useState("");
  const [name, setName] = useState("");
  getDataUserStorage({ setRoleUser, setName });

  return (
    <ContainerSafePrincipalPaciente>
      <Scroll>
        <HeaderHome
          title={`Olá, ${name}`}
          backButton={true}
          buttonVaccine={true}
          typeHeader="patient"
          photo={patient.photo}
        />
        <DataPatient
          name={patient.name}
          telefone={patient.telephone}
          email={patient.email}
          data_nascimento={patient.birthDate}
          dosagem={patient.dosage}
          alergias={patient.allergies}
          periodicidade={patient.frequency}
          metodo={patient.method}
          inicio={patient.startTreatment}
          fim={patient.endTreatment}
        />
      </Scroll>
      <TabBar />
    </ContainerSafePrincipalPaciente>
  );
};

/*<DataPatient
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
         <DataPatient
          name={patient !== null ? patient.name : ""}
          telefone={patient !== null ? patient.telefone : ""}
          email={patient !== null ? patient.email : ""}
          data_nascimento={patient !== null ? patient.data_nascimento : ""}
          dosagem={patient !== null ? patient.dosagem : ""}
          alergias={patient !== null ? patient.alergias : []}
          periodicidade={patient !== null ? patient.periodicidade : ""}
          metodo={patient !== null ? patient.metodo : ""}
          inicio={patient !== null ? patient.inicio : ""}
          fim={patient !== null ? patient.fim : ""}
        />
        */

export default Patient;
