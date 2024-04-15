import React, { useState, useEffect } from "react";
import { Platform, TouchableOpacity, Image, ActivityIndicator, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";
import {
  ButtonSenha,
  ContainerLogin,
  ContainerSafe, Scroll
} from "./login-style";
import { ContainerFormInputsPatients } from "../password-creation/cadastro-style";

import logo from "../../assets/images/logo/logo.png";

import Header from "../../components/Headers/header/header";
import FooterCurto from "../../components/Footers/footer/footer";
import FormPatientLoginRecord from "../../components/Forms/form-patient-login/form-patient-login";
import BlueButton from "../../components/Buttons/bluebutton/BlueButton";
import LoadingModal from "../../components/Bars/loadingModal/loading-modal";
import { validar } from "../../config/validates";
import { loginUser } from "../../service/requests";
import { CheckContainer, CheckOption, CheckTouch, TitleCheck, CheckTouchOption, CheckOptionStyle } from "../../components/Check/check-style";
import Icon from 'react-native-vector-icons/Ionicons';

const PatientLogin = () => {
  const navigation = useNavigation<propsStack>();

  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [checked, setChecked] = useState(false)
  const [loading, setLoading] = useState(false);

  const individualOption = [{ id: 1, text: "Lembrar senha"}];

  const arrayNamePlaceholder = [
    [mail, "E-mail", errorMail],
    [pass, "Senha", errorPass],
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

  useEffect(() => {


  }, []);

  return (
    <ContainerSafe>
      <Scroll>
        <Header back={false} />
        <ContainerLogin>
          <Image source={logo} />
          <ContainerFormInputsPatients />

          {arrayNamePlaceholder.map(
            ([valueState, place, err]) => (
              <FormPatientLoginRecord
                placeholder={place}
                handleInputChange={(text: string) => {
                  handleInputChange(place, text);
                }}
                state={valueState}
                err={err}
                showPassword={false} />
            )
          )}

<CheckContainer>
  {individualOption.map((op) => (
    <React.Fragment key={op.id}>
      <CheckOptionStyle>
        <CheckTouchOption selected={checked} onPress={() => setChecked(!checked)}>
          {checked && <Icon name="checkmark-sharp" color="#7c9dcb" size={17} />}
        </CheckTouchOption>
      </CheckOptionStyle>
      <TitleCheck style={{color: "#7c9dcb", fontWeight: "300"}}>{op.text}</TitleCheck>
    </React.Fragment>
  ))}
</CheckContainer>

          <TouchableOpacity onPress={Logar}>
            <BlueButton
              buttontext={"Entrar"}
            />
          </TouchableOpacity >

          <LoadingModal visible={loading} onClose={closeLoading} />

          <TouchableOpacity onPress={() => navigation.navigate("RecuperacaoSenha")}>
            <ButtonSenha>Esqueceu sua senha?</ButtonSenha>
          </TouchableOpacity>

        </ContainerLogin>
        <FooterCurto />
      </Scroll>

    </ContainerSafe>
  );
};

export default PatientLogin;
