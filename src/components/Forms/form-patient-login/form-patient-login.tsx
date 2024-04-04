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
  showPassword: boolean;
}

const FormPatientLoginRecord = ({ placeholder,
  handleInputChange, state, err }: PatientRecordValues) => {
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