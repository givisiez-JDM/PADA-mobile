import AsyncStorage from "@react-native-async-storage/async-storage";
import apiPADA from "./api";
import axios, { AxiosRequestConfig } from "axios";
import store from "../store/store";

export interface TDoctor {
  id: string;
  name: string;
  email: string;
  photo: string;
  about: string;
  CRM: string;
  specialty: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
}

export const loginUser = async (
  email: string,
  password: string,
  openLoading: () => void,
  closeLoading: () => void,
  nav: any
) => {
  try {
    await apiPADA
      .post("/login/patient", {
        email,
        password,
      })
      .then((response: any) => {
        AsyncStorage.setItem("id", JSON.stringify(response.data.user.id));
        AsyncStorage.setItem("name", JSON.stringify(response.data.user.name));
        AsyncStorage.setItem("role", JSON.stringify(response.data.user.role));
        AsyncStorage.setItem("token", JSON.stringify(response.data.token));
        getPatientDoctorId(true);
        openLoading();
        setTimeout(() => {
          if (response.status === 200) {
            nav.navigate("TelaPrincipal");
          }
          closeLoading();
        }, 3000);
      });
  } catch (err: unknown) {
    console.log(err);
  }
};

export const createUser = async (
  user: User,
  setStates: any,
  openLoading: () => void,
  closeLoading: () => void,
  openModal: () => void
) => {
  try {
    await apiPADA
      .post("/doctor", {
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .then((response: any) => {
        openLoading();
        setTimeout(() => {
          closeLoading();
          if (response.status === 201) {
            setStates.setMessageTextModal("Sucesso!");
            setStates.setFlag("check");
          } else {
            setStates.setMessageTextModal("Erro!");
          }
          openModal();
        }, 5000);

        setStates.setName("");
        setStates.setMail("");
        setStates.setPass("");
        setStates.setRepeatPass("");
      })
      .catch((err: unknown) => {
        console.log(err);
      });
  } catch (error: unknown) {
    console.log(error);
  }
};

export const RemoveStorage = async (nav: any) => {
  try {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("id");
    await AsyncStorage.removeItem("name");
    await AsyncStorage.removeItem("role");
    nav.navigate("LoginCadastro");
  } catch (err: unknown) {
    console.log("Error: ", err);
  }
};

export const getDataUserStorage = async (setState: any) => {
  try {
    let role = await AsyncStorage.getItem("role");
    let name: string | any = await AsyncStorage.getItem("name");

    setState.setRoleUser(role);
    setState.setName(JSON.parse(name));

    //return role !== null ? JSON.parse(role) : null;
  } catch (err: unknown) {
    console.log(err);
  }
};

export const getPatientDoctorId = async (doctorId: boolean) => {
  try {
    let id: string | any = await AsyncStorage.getItem("id");
    let tokenUser: string | any = await AsyncStorage.getItem("token");

    await apiPADA
      .get(`/patient/${JSON.parse(id)}`, {
        headers: {
          Authorization: JSON.parse(tokenUser),
        },
      })
      .then((response: any) => {
        if (doctorId === true) {
          AsyncStorage.setItem(
            "doctorId",
            JSON.stringify(response.data.doctorId)
          );
        }
      });
  } catch (err: unknown) {
    console.log(err);
  }
};

export const getDoctorById = async (id: string) => {
  try {
    let tokenUser: string | any = await AsyncStorage.getItem("token");
    await apiPADA
      .get(`/doctor/${JSON.parse(id)}`, {
        headers: {
          Authorization: JSON.parse(tokenUser),
        },
      })
      .then((response: any) => {
        store.dispatch({ type: "UPDATE_DOCTOR", payload: response.data });
      });
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
