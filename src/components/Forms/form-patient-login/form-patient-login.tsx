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
import { GestureResponderEvent, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ImageLogo } from "../../Buttons/buttonEmailSenha/buttonEmailSenha-style";
import { InputLogin, PatientInput } from "../../../screen/login/login-style";
import InputGeral from "../inputGeral/inputGeral";
import { ImageSource } from "react-native-vector-icons/Icon";

interface PatientRecordValues {
  placeholder: string;
  handleInputChange: any;
  state: any;
  err: any;
  imageButton: ImageSource;
  showPassword: boolean;
}

const FormPatientLoginRecord = ({ imageButton, placeholder,
  handleInputChange, state, err}: PatientRecordValues) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ContainerFormPatientRecord>
      <ContainerLogin>
        <PatientInput
          onChangeText={handleInputChange}
          value={state}
          placeholder={placeholder}
          placeholderTextColor="#4c7abb"
          secureTextEntry={!showPassword && placeholder === "Senha"}
          />
          {["Senha", "Confirme sua Senha", "Nova senha"].includes(placeholder) && (
            <Icon
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={25}
              color="black"
              onPress={toggleShowPassword}
              style={{ position: "absolute", right: 10, top: 11 }}
            />
          )}
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