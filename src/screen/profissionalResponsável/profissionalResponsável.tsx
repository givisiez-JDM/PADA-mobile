import { useState, useEffect } from "react";
import TabBar from "../../components/buttonTabBar/buttonTabBar";
import DataDoctor from "../../components/dataDoctor/data-doctor";
import HeaderFluxo from "../../components/headerFluxo/header-fluxo";
import {
  ContainerSafePrincipalPaciente,
  Scroll,
} from "./profissionalResponsavel-style";
import {
  getDataUserStorage,
  getDoctorById,
  getPatientDoctorId,
} from "../../service/requests";
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiPADA from "../../service/api";

export interface TDoctor {
  id: string;
  name: string;
  email: string;
  photo: string;
  about: string;
  CRM: string;
  specialty: string;
}

const ProfissionalResponsavel = () => {
  // const [, setRoleUser] = useState("");
  // const [name, setName] = useState("");
  // getDataUserStorage({ setRoleUser, setName });
  const [doctorId, setDoctorId] = useState("");
  const [doctor, setDoctor] = useState<TDoctor>();

  const getUserPatient = async () => {
    try {
      getPatientDoctorId(setDoctorId);
    } catch (err: unknown) {
      console.log(err);
    }
  };

  const getDoctorId = () => {
    try {
      getDoctorById(JSON.stringify(doctorId), setDoctor);
    } catch (err: unknown) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserPatient();
    getDoctorId();
  }, []);
  console.log(doctor);

  return (
    <ContainerSafePrincipalPaciente>
      <Scroll>
        <HeaderFluxo
          title={doctor?.name}
          backButton={true}
          buttonVaccine={true}
          typeHeader="doctor"
        />
        <DataDoctor
          crm={doctor?.CRM}
          sobre={doctor?.about}
          especialidade={doctor?.specialty}
        />
      </Scroll>
      <TabBar />
    </ContainerSafePrincipalPaciente>
  );
};

export default ProfissionalResponsavel;
