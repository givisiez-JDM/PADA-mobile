import React, { useState } from "react";
import {
  ContainerFooterBottom,
  ContainerMain,
  ContainerSafe,
  ImageIconLogo,
  Scroll,
} from "./login-style";
import logo from "../../assets/logo.png";

import Header from "../../components/header/header";
import FooterCurto from "../../components/footer/footer";
import logoEmail from "../../assets/logoEmail.png";
import logoSenha from "../../assets/logoSenha.png";
import ButtonEntrar from "../../components/buttonEntrar/buttonEntrar";

import { ContainerFormInputsPatients } from "../cadastro/cadastro-style";

import FormPatientLoginRecord from "../../components/form-patient-login/form-patient-login";

import { Platform } from "react-native";

const PatientLogin = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPass, setErrorPass] = useState("");

  const arrayNamePlaceholder = [
    [logoEmail, mail, "E-mail", errorMail],
    [logoSenha, pass, "Senha", errorPass],
  ];

  const handleInputChange = (name: string, value: string) => {
    if (name === "E-mail") {
      setMail(value);
      setErrorMail("");
    }
    if (name === "Senha") {
      setPass(value);
      setErrorPass("");
    }
  };

  return (
    <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Scroll>
        <Header back={true} />
        <ContainerMain>
          <ImageIconLogo source={logo} />
          <ContainerFormInputsPatients>
            {arrayNamePlaceholder.map(
              ([icon, valueState, place, err], index: number) => (
                <FormPatientLoginRecord
                  imageButton={icon}
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

          <ButtonEntrar
            mail={mail}
            pass={pass}
            setErrorMail={setErrorMail}
            setErrorPass={setErrorPass}
          />
        </ContainerMain>
        <ContainerFooterBottom>
          <FooterCurto />
        </ContainerFooterBottom>
      </Scroll>
    </ContainerSafe>
  );
};

export default PatientLogin;
