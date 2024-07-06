import { useState, useEffect } from "react";
import TabBar from "../../components/TabBar/buttonTabBar";
import DataDoctor from "../../components/Patients/dataDoctor/data-doctor";
import {
  ContainerSafePrincipalPaciente,
  Scroll,
} from "./profissionalResponsavel-style";
import Header from "../../components/Header"
import React from "react";
import storePatient from "@/src/store/storePatient";

const Doctor = () => {
  const patient: any = storePatient.getState();

  return (
    <ContainerSafePrincipalPaciente>
      <Scroll>
        <Header
          title={patient.doctorInfo.name}
          backButton
          vaccineButton
          photo={patient.doctorInfo.photo}
          type='doctor'
        />
        <DataDoctor
          crm={patient.doctorInfo.CRM}
          sobre={patient.doctorInfo.about}
          especialidade={patient.doctorInfo.specialty}
        />
      </Scroll>
      <TabBar />
    </ContainerSafePrincipalPaciente>
  );
};

export default Doctor;
