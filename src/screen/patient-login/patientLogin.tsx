import React, { useState } from "react";
import { Platform, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../../routes/Stack/Models";

import {
  ButtonSenha,
  ContainerLogin,
  ContainerSafe, Scroll
} from "./login-style";



import logo from "../../assets/logo/logo.png";
import logoEmail from "../../assets/logo/logoEmail.png";
import logoSenha from "../../assets/logo/logoSenha.png";

import Header from "../../components/Headers/header/header";
import FooterCurto from "../../components/Footers/footer/footer";
import FormPatientLoginRecord from "../../components/Forms/form-patient-login/form-patient-login";
import CheckBox from "../../components/checkBox/checkBox";
import BlueButton from "../../components/Buttons/bluebutton/BlueButton";
import LoadingModal from "../../components/Bars/loadingModal/loading-modal";
import { validar } from "../../config/validates";
import { loginUser } from "../../service/requests";
import { ContainerFormInputsPatients } from "../password-creation/cadastro-style";


const PatientLogin = () => {
  const navigation = useNavigation<propsStack>();

  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [checked, setChecked] = useState(false)
  const [loading, setLoading] = useState(false);

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

  const openLoading = () => {
    setLoading(true);
  };

  const closeLoading = () => {
    setLoading(false);
  };

  const Logar = () => {
    if (validar({ mail, pass }, { setErrorMail, setErrorPass })) {
      console.log(mail, pass);
      loginUser(mail, pass, openLoading, closeLoading, navigation);
    }
  };

  return (
    <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Scroll>
        <Header back={false} />
        <ContainerLogin>
          <Image source={logo} />

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

          <CheckBox
            title="Lembrar senha"
            size="20px"
            checked={checked}
            setChecked={setChecked}
          />

          <TouchableOpacity onPress={Logar}>
            <BlueButton buttontext={'Entrar'} />
          </TouchableOpacity >

          <LoadingModal visible={loading} onClose={closeLoading} />

          <TouchableOpacity onPress={() => navigation.navigate("RedefinirSenha")}>
            <ButtonSenha>Esqueceu sua senha?</ButtonSenha>
          </TouchableOpacity>

        </ContainerLogin>
        <FooterCurto />
      </Scroll>
    </ContainerSafe>
  );
};

export default PatientLogin;
