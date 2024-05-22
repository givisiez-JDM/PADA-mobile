import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

import { validar } from "../../config/validates";
import { loginUser } from "../../service/requests";

import {
  ButtonSenha,
  ContainerLogin,
  ContainerSafe,
} from "./login-style";

import FormPatientLoginRecord from "@/src/components/Forms/form-patient-login/form-patient-login";
import CheckBox from "@/src/components/checkBox/checkBox";
import LoadingModal from "@/src/components/Bars/loadingModal/loading-modal";
import Button from "@/src/components/Buttons/button/button";
import Footer from "../../components/Footers/footerCorrect/footerCorrect";
import Header from "../../components/Footers/footerCorrect/headerCorrect";


const PatientLogin = () => {
  const navigation = useNavigation<propsStack>();

  const [mail, setMail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [errorMail, setErrorMail] = useState<string>("");
  const [errorPass, setErrorPass] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false);

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
    <Header />

      <ContainerLogin>
        <Image source={require("../../assets/images/logo/logo.png")} />

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

        <CheckBox
          title="Lembrar senha"
          size="20px"
          checked={checked}
          setChecked={setChecked}
        />

        <Button buttontext={"Entrar"} onPress={Logar} />

        <LoadingModal visible={loading} onClose={closeLoading} />

        <TouchableOpacity onPress={() => navigation.navigate("RecuperacaoSenha")}>
          <ButtonSenha>Esqueceu sua senha?</ButtonSenha>
        </TouchableOpacity>
      </ContainerLogin>
      <Footer />
    </ContainerSafe>
  );
};

export default PatientLogin;
