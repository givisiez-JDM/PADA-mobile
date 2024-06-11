import { useState, useEffect } from "react";
import TabBar from "../../components/TabBar/buttonTabBar";
import DataDoctor from "../../components/Patients/dataDoctor/data-doctor";
import {
  ContainerSafePrincipalPaciente,
  Scroll,
} from "./profissionalResponsavel-style";
import Header from "../../components/Header/header"
import React from "react";
import storePatient from "@/src/store/storePatient";

const ProfissionalResponsavel = () => {
  const patient: any = storePatient.getState();

  return (
    <ContainerSafePrincipalPaciente>
      <Scroll>
        <Header
          title={patient.doctorInfo.name}
          backButton={true}
          buttonVaccine={true}
          photo={patient.doctorInfo.photo}
          typeHeader='doctor'
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

export default ProfissionalResponsavel;
