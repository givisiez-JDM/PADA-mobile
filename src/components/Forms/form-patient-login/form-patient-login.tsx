import React from "react";
import {
  ContainerErrorText,
  ContainerFormPatientRecord,
  ContainerLogin,
  InputText,
} from "./form-patient-login-style";
import Icon from "react-native-vector-icons/Ionicons";

import { PatientInput } from "../../../screen/login/login-style";

interface PatientRecordValues {
  placeholder: string;
  handleInputChange: any;
  state: any;
  err: any;
}

const FormPatientLoginRecord = ({ placeholder,
  handleInputChange, state, err }: PatientRecordValues) => {

  return (
    <ContainerFormPatientRecord>
      <ContainerLogin>
        <PatientInput
          onChangeText={handleInputChange}
          value={state}
          placeholder={placeholder}
          placeholderTextColor="#4c7abb"
          secureTextEntry={placeholder === "Senha" ? true : false}
        />
      </ContainerLogin>

      {err !== "" && (
        <ContainerErrorText>
          <Icon name="alert-circle-outline" color="#FF0000" />
          <InputText>{err}</InputText>
        </ContainerErrorText>
      )}
    </ContainerFormPatientRecord>
  );
};

export default FormPatientLoginRecord;
