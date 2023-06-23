import AsyncStorage from "@react-native-async-storage/async-storage";
import apiPADA from "./api";

export interface User {
  name: string;
  email: string;
  password: string;
  about: string;
  CRM: string;
  specialty: string;
  photo: string;
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
      .post("/login/doctor", {
        email,
        password,
      })
      .then((response: any) => {
        AsyncStorage.setItem("id", JSON.stringify(response.data.user.id));
        AsyncStorage.setItem("name", JSON.stringify(response.data.user.name));
        AsyncStorage.setItem("role", JSON.stringify(response.data.user.role));
        AsyncStorage.setItem("token", JSON.stringify(response.data.token));
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
        about: user.about,
        CRM: user.CRM,
        specialty: user.specialty,
        photo: user.photo,
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

export const getDataUserStorage = async (setState: any) => {
  try {
    let role = await AsyncStorage.getItem("role");
    setState(role);
    //return role !== null ? JSON.parse(role) : null;
  } catch (err: unknown) {
    console.log(err);
  }
};
