import React, { useEffect, useState } from "react";
import TabBar from "../../components/Buttons/buttonTabBar/buttonTabBar";
import DataPatient from "../../components/Patients/dataPatient/data-patient";
import HeaderFluxo from "../../components/Headers/headerFluxo/header-fluxo";
import { ContainerSafePrincipalPaciente, Scroll } from "./patient-style";
import { TData, getDataUserStorage } from "../../service/requests";
import storePatient from "../../store/storePatient";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Patient = () => {
  const patient: any = storePatient.getState();

  return (
    <ContainerSafePrincipalPaciente>
      <Scroll>
        <HeaderFluxo
          title={`${patient.patientInfo.name}`}
          backButton={true}
          buttonVaccine={true}
          photo={patient.patientInfo.photo}
          typeHeader='patient'
        />
        <DataPatient
          name={patient.patientInfo.name}
          telefone={patient.patientInfo.telephone}
          email={patient.patientInfo.email}
          data_nascimento={patient.patientInfo.birthDate}
          dosagem={patient.treatmentInfo.dosage}
          alergias={patient.treatmentInfo.allergies}
          periodicidade={patient.treatmentInfo.frequency}
          metodo={patient.treatmentInfo.method}
          inicio={patient.treatmentInfo.startTreatment}
          fim={patient.treatmentInfo.endTreatment}
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
