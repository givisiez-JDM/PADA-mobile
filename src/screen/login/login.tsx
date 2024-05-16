import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image, KeyboardAvoidingView, Platform, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";
import {
  ButtonSenha,
  ContainerLogin,
  ContainerSafe, 
} from "./login-style";
import { ContainerFormInputsPatients } from "../password-creation/cadastro-style";
import logo from "../../assets/images/logo/logo.png";
import FormPatientLoginRecord from "../../components/Forms/form-patient-login/form-patient-login";
import CheckBox from "../../components/checkBox/checkBox";
import LoadingModal from "../../components/Bars/loadingModal/loading-modal";
import { validar } from "../../config/validates";
import { loginUser } from "../../service/requests";
import Button from "@/src/components/Buttons/button/button";

import headerImg from "../../assets/images/headerAndFooter/header/headerImg.png";
import {ImageHeader} from "../../components/Headers/header/header-style";
import FooterCorrect from "../../components/Footers/footerCorrect/footerCorrect";
import { FooterStyle } from "@/src/components/Footers/footerCorrect/footerCorrect-style";

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
      <ImageHeader source={headerImg}/>
        <View style={{ flex: 1 }}>
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
                  showPassword={false}
                />
              )
            )}

            <CheckBox
              title="Lembrar senha"
              size="20px"
              checked={checked}
              setChecked={setChecked}
            />
            <TouchableOpacity onPress={Logar}>
              <Button buttontext={"Entrar"} />
            </TouchableOpacity>

            <LoadingModal visible={loading} onClose={closeLoading} />

            <TouchableOpacity onPress={() => navigation.navigate("RecuperacaoSenha")}>
              <ButtonSenha>Esqueceu sua senha?</ButtonSenha>
            </TouchableOpacity>
          </ContainerLogin>
        </View>
        
        <FooterCorrect width={0} height={0} fill={""} />
      
    </ContainerSafe>
  );
};

export default PatientLogin;
