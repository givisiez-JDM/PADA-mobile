import AsyncStorage from "@react-native-async-storage/async-storage";
import apiPADA from "../api";

import { Alert } from "react-native";
import { Vacine } from "../../models/vacine";

export const treatmentResponse = async (): Promise<Vacine[]> => {
    try {
      const id: string | null = await AsyncStorage.getItem("id");
      const tokenUser: string | null = await AsyncStorage.getItem("token");
  
      if (!id || !tokenUser) {
        throw new Error("ID ou token não encontrados");
      }
  
      //const url = `/treatments/patients/${JSON.parse(id)}`;
      const url = 'http://10.0.2.2:3000/vacines';
      const response = await apiPADA.get(url, {
        headers: {
          Authorization: JSON.parse(tokenUser),
        },
      });
  
      return response.data as Vacine[];
    } catch (error) {
      console.error(error);
      return [];
    }
  };
