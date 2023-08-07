import { useState, useEffect } from "react";
import TabBar from "../../components/buttonTabBar/buttonTabBar";
import DataDoctor from "../../components/dataDoctor/data-doctor";
import HeaderFluxo from "../../components/headerFluxo/header-fluxo";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiPADA from "../../service/api";
import store from "../../store/store";

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
