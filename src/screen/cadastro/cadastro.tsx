import { useEffect, useState } from "react";
import FooterCurto from "../../components/footer/footer";
import Header from "../../components/header/header";

import {
  Button,
  ContainerFormPatient,
  TextButton,
  TitleForm,
  ImageLogo,
  ContainerFormInputsPatients,
  ContainerSafe,
  Scroll,
} from "./cadastro-style";

import FormPatientRecord from "../../components/form-patient-record/form-patient-record";
import { validar } from "../../config/validates";
import CheckBox from "../../components/checkBox/checkBox";
import Logo from "../../assets/logo.png";

import { Keyboard, Platform } from "react-native";

const PatientRecord = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");

  const [errorMail, setErrorMail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [errorRepeatPass, setErrorRepeatPass] = useState("");

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

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
    <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Scroll>
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

        <FooterCurto />
      </Scroll>
    </ContainerSafe>
  );
};

export default PatientRecord;
