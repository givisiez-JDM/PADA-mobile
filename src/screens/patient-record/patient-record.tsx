import { Fragment, useState } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Icon from "react-native-vector-icons/Ionicons";
import {
  Button,
  ButtonViewCheckBox,
  Check,
  TitleCheck,
  ContainerFormPatient,
  ContainerViewCheckBox,
  TextButton,
  TitleForm,
} from "./patient-record-style";
import { Text, TouchableOpacity, View } from "react-native";
import FormPatientRecord from "../../components/form-patient-record/form-patient-record";
import { validar } from "../../config/validates";
import CheckBox from "../../components/checkbox/checkbox";

interface PatientRecordState {
  name: string;
  mail: string;
  pass: string;
  repeatPass: string;
}

const PatientRecord = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [errorRepeatPass, setErrorRepeatPass] = useState("");

  const handleInputChange = (name: string, value: string) => {
    if (name === "Nome de usuários") {
      setName(value);
      setErrorName("");
    }
    if (name === "E-mail") {
      setMail(value);
      setErrorMail("");
    }
    if (name === "Senha") {
      setPass(value);
      setErrorPass("");
    }
    if (name === "Repetir Senha") {
      setRepeatPass(value);
      setErrorRepeatPass("");
    }
  };

  const arrayNamePlaceholder = [
    ["person", name, "Nome de usuários", errorName],
    ["mail", mail, "E-mail", errorMail],
    ["key", pass, "Senha", errorPass],
    ["key", repeatPass, "Repetir Senha", errorRepeatPass],
  ];

  const savePatient = () => {
    if (
      validar(
        { name, mail, pass, repeatPass },
        { setErrorName, setErrorMail, setErrorPass, setErrorRepeatPass }
      )
    ) {
      console.log("Foi");
    }
  };

  return (
    <Fragment>
      <Header status={false} />
      <ContainerFormPatient>
        <TitleForm>Crie sua conta</TitleForm>

        {arrayNamePlaceholder.map(
          ([icon, valueState, place, err], index: number) => (
            <FormPatientRecord
              iconName={icon}
              placeholder={place}
              handleInputChange={(text: string) => {
                handleInputChange(place, text);
              }}
              state={valueState}
              err={err}
              key={index}
            />
          )
        )}

        <CheckBox />

        <Button
          onPress={() => {
            savePatient();
          }}
        >
          <TextButton>Cadastre-se</TextButton>
        </Button>
      </ContainerFormPatient>
    </Fragment>
  );
};

export default PatientRecord;
