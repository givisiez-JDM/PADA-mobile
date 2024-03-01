import React from "react";
import {
  ContainerErrorText,
  ContainerFormPatientRecord,
  ContainerIconInput,
  ContainerInput,
  ContainerLogin,
  Input,
  InputText,
} from "./form-patient-login-style";
import Icon from "react-native-vector-icons/Ionicons";
import { Image, Text } from "react-native";
import { ImageSource } from "react-native-vector-icons/Icon";
import { ImageLogo } from "../../Buttons/buttonEmailSenha/buttonEmailSenha-style";
import { InputLogin, PatientInput } from "../../../screen/login/login-style";

interface PatientRecordValues {
  placeholder: string;
  handleInputChange: any;
  state: any;
  err: any;
  imageButton: ImageSource;
}

const FormPatientLoginRecord = ({
  imageButton, placeholder,
  handleInputChange, state, err }: PatientRecordValues) => {
  return (
    <ContainerFormPatientRecord>
      <ContainerLogin>
        <ImageLogo>
          <Image source={imageButton} />
        </ImageLogo>
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
