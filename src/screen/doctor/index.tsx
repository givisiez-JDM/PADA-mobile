import { useState, useEffect } from "react";
import TabBar from "../../components/TabBar";
import DataDoctor from "../../components/Patients/dataDoctor";
import {
  ContainerSafePrincipalPaciente,
  Scroll,
} from "./style";
import Header from "../../components/Header"
import React from "react";
import storePatient from "@/src/store/storePatient";

const Doctor = () => {
  const patient: any = storePatient.getState();

  return (
    <ContainerSafePrincipalPaciente>
      <Scroll>
        <Header
          // title={patient.doctorInfo.name}
          title={'Juliana nogueira'}
          backButton
          vaccineButton
          // photo={patient.doctorInfo.photo}
          type='doctor'
        />
        <DataDoctor
          // crm={patient.doctorInfo.CRM}
          // sobre={patient.doctorInfo.about}
          // especialidade={patient.doctorInfo.specialty}
          crm={'123'}
          sobre="sobre"
          especialidade="dentista"
        />
      </Scroll>
      <TabBar />
    </ContainerSafePrincipalPaciente>
  );
};

export default Doctor;
