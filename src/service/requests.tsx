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

export const loginUser = async (
  email: string,
  password: string,
  openLoading: () => void,
  closeLoading: () => void,
  nav: any
) => {
  try {
    const response = await apiPADA
      .post("/login/patients", {
        email,
        password,
      })
      .then(async (response: any) => {
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

        const { auth } = response.data;
        if (auth) {
          const { token, msg } = response.data;
          await AsyncStorage.setItem("token", token);
        }
      });
  } catch (err: unknown) {
    console.log(err);
    Alert.alert(
      "Erro de Login",
      "Não foi possivel fazer o login, verifique seus dados"
    );
    setIsLoading(false);
  }
};

export const patientResponse = async () => {
  try {
    let id: string | any = await AsyncStorage.getItem("id");
    let tokenUser: string | any = await AsyncStorage.getItem("token");

    await apiPADA
      .get(`/patients/${JSON.parse(id)}`, {
        headers: {
          Authorization: JSON.parse(tokenUser),
        },
      })
      .then((response: any) => {
        AsyncStorage.setItem(
          "doctorId",
          JSON.stringify(response.data.doctorId)
        );
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
      .post("/doctors", {
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
      .get(`/patients/${JSON.parse(id)}`, {
        headers: {
          Authorization: JSON.parse(tokenUser),
        },
      })
      .then(async (response: any) => {
        if (doctorId === true) {
          AsyncStorage.setItem(
            "doctorId",
            JSON.stringify(response.data.doctorId)
          );
        } else {
          const imageBuffer = response.data.photo.data;
          const base64Image = Buffer.from(imageBuffer).toString("base64");
          let aux = {
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            photo: base64Image,
            telephone: response.data.telephone,
            birthDate: response.data.birthDate,
            doctorId: response.data.doctorId,
            dosage: "",
            frequency: "",
            startTreatment: "",
            endTreatment: "",
            allergies: [],
            method: "",
          };
          await apiPADA
            .get(`treatments/patients/${response.data.id}`, {
              headers: {
                Authorization: JSON.parse(tokenUser),
              },
            })
            .then(async (response: any) => {
              aux.allergies = response.data.allergies;
              aux.method = response.data.method;

              await apiPADA
                .get(`phases/treatments/${response.data.id}`, {
                  headers: {
                    Authorization: JSON.parse(tokenUser),
                  },
                })
                .then((response: any) => {
                  aux.dosage = response.data[0].dosage;
                  aux.frequency = response.data[0].frequency;
                  aux.startTreatment = response.data[0].startTreatment;
                  aux.endTreatment = response.data[0].endTreatment;
                });
            });
          // getTreatmentsPatient(response.data.id);
          //AsyncStorage.setItem("@patient", JSON.stringify(response.data));
          /*const imageBuffer = response.data.photo.data;
          const base64Image = Buffer.from(imageBuffer).toString("utf8");
          const aux = {
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            photo: "",
            telephone: response.data.telephone,
            birthDate: response.data.birthDate,
            doctorId: response.data.doctorId,
          };*/
          storePatient.dispatch({
            type: "UPDATE_PATIENT",
            payload: aux,
          });
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
      .get(`/doctors/${JSON.parse(id)}`, {
        headers: {
          Authorization: JSON.parse(tokenUser),
        },
      })
      .then((response: any) => {
        console.log(response);
        // const imageBuffer = response.data?.photo?.data;
        // console.log(imageBuffer);
        const src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII="
        const base64Image = Buffer.from(src).toString("base64");
        console.log(base64Image);
        const aux = {
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          photo: base64Image,
          about: response.data.about,
          CRM: response.data.CRM,
          specialty: response.data.specialty,
        };
        store.dispatch({
          type: "UPDATE_DOCTOR",
          payload: aux,
        });
      });
  } catch (err: unknown) {
    console.log(err);
  }
};

export const getTreatmentsPatient = async (id: number) => {
  try {
    let tokenUser: string | any = await AsyncStorage.getItem("token");
    await apiPADA
      .get(`treatments/patients/${id}`, {
        headers: {
          Authorization: JSON.parse(tokenUser),
        },
      })
      .then((response: any) => {});
  } catch (error: unknown) {
    console.error(error);
  }
};

export const getPhasesTreatment = async (id: number) => {
  try {
    let tokenUser: string | any = await AsyncStorage.getItem("token");
    await apiPADA
      .get(`phases/treatments/${id}`, {
        headers: {
          Authorization: JSON.parse(tokenUser),
        },
      })
      .then((response: any) => {
        {
          var aux = {
            dosage: response.data.dosage,
            frequency: response.data.frequency,
            startTreatment: response.data.startTreatment,
            endTreatment: response.data.endTreatment,
          };
          return aux;
        }
      });
  } catch (error: unknown) {
    console.error(error);
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
