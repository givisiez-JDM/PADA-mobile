import { useState, useEffect } from "react";
import TabBar from "../../components/Buttons/buttonTabBar/buttonTabBar";
import DataDoctor from "../../components/Patients/dataDoctor/data-doctor";
import HeaderFluxo from "../../components/Headers/header-home/header-home";
import {
  ContainerSafePrincipalPaciente,
  Scroll,
} from "./profissionalResponsavel-style";
import {
  TDoctor,
  getDataUserStorage,
  getDoctorById,
  getPatientDoctorId,
} from "../../service/requests";
import store from "../../store/store";
import { Buffer } from "buffer";
import React from "react";

const ProfissionalResponsavel = () => {
  const doctor: TDoctor = store.getState();

  return (
    <ContainerSafePrincipalPaciente>
      <Scroll>
        <HeaderFluxo
          title={doctor.name}
          backButton={true}
          buttonVaccine={true}
          typeHeader="doctor"
          photo={doctor.photo}
        />
        <DataDoctor
          crm={doctor.CRM}
          sobre={doctor.about}
          especialidade={doctor.specialty}
        />
      </Scroll>
      <TabBar />
    </ContainerSafePrincipalPaciente>
  );
};

export default ProfissionalResponsavel;