import React, { useEffect, useState } from "react";
import TabBar from "../../components/TabBar/buttonTabBar";
import DataPatient from "../../components/Patients/dataPatient/data-patient";
import { ContainerSafePrincipalPaciente, Scroll } from "./patient-style";
import { TData, getDataUserStorage } from "../../service/requests";
import storePatient from "../../store/storePatient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../components/Header"

const Profile = () => {
  const patient: any = storePatient.getState();

  return (
    <ContainerSafePrincipalPaciente>
      <Scroll>
        <Header
          title={`${patient.patientInfo.name}`}
          backButton={true}
          buttonVaccine={false}
          photo={patient.patientInfo.photo}
          typeHeader='patient-profile'
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

export default Profile;
