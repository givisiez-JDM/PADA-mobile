import AsyncStorage from "@react-native-async-storage/async-storage";
import apiPADA from "./api";

export const loginUser = async (email: string, password: string, nav: any) => {
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
        if (response.status === 200) {
          nav.navigate("TelaPrincipal");
        }
      });
  } catch (err: unknown) {
    console.log(err);
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
