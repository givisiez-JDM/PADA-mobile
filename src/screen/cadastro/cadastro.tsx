import { Fragment, useState } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

import {
  Button,
  ContainerFormPatient,
  TextButton,
  TitleForm,
  ImageLogo,
  ContainerFormInputsPatients,
} from "./cadastro-style";

import FormPatientRecord from "../../components/form-patient-record/form-patient-record";
import { validar } from "../../config/validates";
import CheckBox from "../../components/checkBox/checkBox";
import Logo from "../../assets/logo.png";

interface PatientRecordState {
  name: string;
  mail: string;
  pass: string;
  repeatPass: string;
}

const PatientRecord = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");

  const [errorMail, setErrorMail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [errorRepeatPass, setErrorRepeatPass] = useState("");

  const handleInputChange = (name: string, value: string) => {
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
    ["mail", mail, "E-mail", errorMail],
    ["key", pass, "Senha", errorPass],
    ["key", repeatPass, "Repetir Senha", errorRepeatPass],
  ];

  const savePatient = () => {
    if (
      validar(
        { mail, pass, repeatPass },
        { setErrorMail, setErrorPass, setErrorRepeatPass }
      )
    ) {
      console.log("Foi");
    }
  };

  return (
    <Fragment>
      <Header />
      <ContainerFormPatient>
        <ImageLogo source={Logo} />
        <TitleForm>Crie sua conta</TitleForm>
        <ContainerFormInputsPatients>
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
        </ContainerFormInputsPatients>

        <CheckBox />

        <Button
          onPress={() => {
            savePatient();
          }}
        >
          <TextButton>Cadastre-se</TextButton>
        </Button>
      </ContainerFormPatient>
      <Footer />
    </Fragment>
  );
};

export default PatientRecord;
