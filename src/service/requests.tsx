import AsyncStorage from "@react-native-async-storage/async-storage";
import apiPADA from "./api";
import { Buffer } from "buffer";
import store from "../store/store";
import storePatient from "../store/storePatient";
import { Alert } from "react-native";

export interface TDoctor {
  id: string;
  name: string;
  email: string;
  photo: {
    type: string;
    data: [];
  };
  about: string;
  CRM: string;
  specialty: string;
}

export interface TData {
  id: string;
  name: string;
  telephone: string;
  email: string;
  birthDate: string;
  photo: any;
  doctorId: string;
  dosage: string;
  frequency: string;
  startTreatment: string;
  endTreatment: string;
  allergies: any;
  method: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
}

export const loginUser = async (email: string, password: string,
  openLoading: () => void, closeLoading: () => void, nav: any) => {

  try {
    const loginResponse = await apiPADA.post("/login/patients", { email, password });

    const { data } = loginResponse;
    const { user, token, auth } = data;

    AsyncStorage.setItem("id", JSON.stringify(user.id));
    AsyncStorage.setItem("name", JSON.stringify(user.name));
    AsyncStorage.setItem("token", JSON.stringify(token));

    openLoading();

    getPatientInfo();

    setTimeout(() => {
      if (loginResponse.status === 200) {
        nav.navigate("TelaPrincipal");
      }
      closeLoading();
    }, 3000);

    if (auth) await AsyncStorage.setItem("token", token);
  } catch (err: unknown) {
    console.log(err);
    Alert.alert(
      "Erro de Login",
      "Não foi possivel fazer o login, verifique seus dados"
    );
    setIsLoading(false);
  }
};

export const RemoveStorage = async (nav: any) => {
  try {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("id");
    await AsyncStorage.removeItem("name");

    nav.navigate("Login");
  } catch (err: unknown) {
    console.log("Error: ", err);
  }
};

export const getDataUserStorage = async (setState: any) => {
  try {
    let name: string | any = await AsyncStorage.getItem("name");

    setState.setName(JSON.parse(name));

  } catch (err: unknown) {
    console.log(err);
  }
};

export const getPatientInfo = async () => {
  try {
    let id: string | any = await AsyncStorage.getItem("id");
    let token: string | any = await AsyncStorage.getItem("token");

    const headersObj = {
      headers: {
        Authorization: JSON.parse(token)
      },
    };

    const patientResponse = await apiPADA.get(`/patients/${JSON.parse(id)}`, headersObj);
    const { data } = patientResponse;
    const { id: patientID, name, email, photo, telephone, birthDate, doctorId } = data;

    const treatmentResponse = await apiPADA.get(`treatments/patients/${patientID}`, headersObj);
    const { data: treatmentData } = treatmentResponse;
    const { allergies, method } = treatmentData;

    const phasesResponse = await apiPADA.get(`phases/treatments/${treatmentData.id}`, headersObj);
    const { data: phasesData } = phasesResponse;
    const { dosage, frequency, startTreatment, endTreatment, phaseNumber, active } = phasesData[0];

    const vaccinesResponse = await apiPADA
      .get(`/vaccines/treatments/${treatmentData.id}/search?initial_date=${startTreatment}&final_date=${endTreatment}`, headersObj);
    const { data: vaccinesData } = vaccinesResponse;

    const imageBuffer = photo.data || '';
    const base64Image = Buffer.from(imageBuffer).toString("base64");

    const doctorInfo = await getDoctorInfo(doctorId);

    let aux = {
      patientInfo: {
        id: patientID,
        name,
        email,
        photo: base64Image,
        telephone,
        birthDate
      },
      treatmentInfo: {
        dosage,
        frequency,
        startTreatment,
        endTreatment,
        allergies,
        method,
        phaseNumber,
        active
      },
      vaccinesInfo: vaccinesData,
      doctorInfo
    };


    storePatient.dispatch({
      type: "UPDATE_PATIENT",
      payload: aux
    });




    return aux;
  } catch (err: unknown) {
    console.log(err);
  }
};

export const getDoctorInfo = async (doctorId: string) => {
  try {
    let token: string | any = await AsyncStorage.getItem("token");
    const { data: doctorData } = await apiPADA.get(`/doctors/${doctorId}`, {
      headers: {
        Authorization: JSON.parse(token),
      },
    });

    const { id, name, email, about, CRM, specialty, photo } = doctorData;

    const doctorInfo = {
      id,
      name,
      email,
      photo,
      about,
      CRM,
      specialty,
    };

    // store.dispatch({
    //   type: "UPDATE_DOCTOR",
    //   payload: doctorInfo,
    // });

    return doctorInfo
  } catch (err: unknown) {
    console.log(err);
  }
};

export const checkLoginStatus = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    const userID = await AsyncStorage.getItem("id");

    return !!token && !!userID;
  } catch (err: unknown) {
    console.log("Error checking login status: ", err);
    return false;
  }
};

function setIsLoading(arg0: boolean) {
  //throw new Error('Function not implemented.');
}
