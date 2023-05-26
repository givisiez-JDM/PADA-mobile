import { useState } from "react";
import {
  ContainerErrorText,
  ContainerFormPatientRecord,
  ContainerIconInput,
  ContainerInput,
  IconForm,
  Input,
  InputText,
} from "./form-patient-record-style";
import Icon from "react-native-vector-icons/Ionicons";
import { Text } from "react-native";

interface PatientRecordValues {
  iconName: string;
  placeholder: string;
  handleInputChange: any;
  state: any;
  err: any;
}

const FormPatientRecord = ({
  iconName,
  placeholder,
  handleInputChange,
  state,
  err,
}: PatientRecordValues) => {
  return (
    <ContainerFormPatientRecord>
      <ContainerInput>
        <ContainerIconInput>
          <IconForm>
            <Icon name={iconName} size={20} color="#fff" />
          </IconForm>
        </ContainerIconInput>

        <Input
          onChangeText={handleInputChange}
          value={state}
          placeholder={placeholder}
          secureTextEntry={
            placeholder === "Senha" || placeholder === "Repetir Senha"
              ? true
              : false
          }
        />
      </ContainerInput>
      {err !== "" && (
        <ContainerErrorText>
          <Icon name="alert-circle-outline" color="#FF0000" />
          <InputText>{err}</InputText>
        </ContainerErrorText>
      )}
    </ContainerFormPatientRecord>
  );
};

export default FormPatientRecord;
